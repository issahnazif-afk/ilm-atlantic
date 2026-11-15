// Prototype persistence: profile + attempts in localStorage, recordings in IndexedDB.
// Phase 2 replaces this module with Supabase (same function signatures).
import { useEffect, useState } from 'react';
import type { Exam, Skill, TaskCode } from '../data/types';
import type { ScoreResult } from './scoring';

export interface Profile {
  name: string;
  exam: Exam;            // the exam the learner is preparing for
  target: number;        // overall PTE target, 10–90
  celpipTarget: number;  // CELPIP target level, 1–12
  examDate: string;      // yyyy-mm-dd or ''
  replayAudio: boolean;  // practice-mode convenience (exam mode never replays)
  voiceRate: number;     // TTS rate
}

export interface Review {
  status: 'requested' | 'marked';
  requestedAt: number;
  markedAt?: number;
  traits?: { name: string; score: number; max: number }[];
  comment?: string;
}

export interface Attempt {
  id: string;
  itemId: string;
  task: TaskCode;
  exam?: Exam;               // omitted = 'pte-a'
  at: number;
  mode: 'practice' | 'mock';
  mockId?: string;
  result: ScoreResult;
  response: string;          // human-readable response (text, transcript, selected options)
  audioKey?: string;         // IndexedDB key of the recording
  review?: Review;
}

export interface MockRun {
  id: string;
  kind: string;
  exam?: Exam;
  startedAt: number;
  finishedAt?: number;
  attemptIds: string[];
  skills?: Record<Skill, number>;
}

const K = { profile: 'ia.profile', attempts: 'ia.attempts', mocks: 'ia.mocks' };

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or blocked — prototype keeps running in memory */
  }
  window.dispatchEvent(new Event('ia-store'));
}

export const defaultProfile: Profile = { name: '', exam: 'pte-a', celpipTarget: 9, target: 65, examDate: '', replayAudio: true, voiceRate: 0.95 };

export const getProfile = () => ({ ...defaultProfile, ...read<Partial<Profile>>(K.profile, {}) });
export const saveProfile = (p: Profile) => write(K.profile, p);

export const getAttempts = () => read<Attempt[]>(K.attempts, []);
export function saveAttempt(a: Attempt) {
  const all = getAttempts().filter((x) => x.id !== a.id);
  all.push(a);
  write(K.attempts, all);
}
export function updateAttempt(id: string, patch: Partial<Attempt>) {
  write(K.attempts, getAttempts().map((a) => (a.id === id ? { ...a, ...patch } : a)));
}

export const getMocks = () => read<MockRun[]>(K.mocks, []);
export function saveMock(m: MockRun) {
  write(K.mocks, [...getMocks().filter((x) => x.id !== m.id), m]);
}

export function resetAll() {
  Object.values(K).forEach((k) => localStorage.removeItem(k));
  indexedDB.deleteDatabase('ilm-atlantic');
  window.dispatchEvent(new Event('ia-store'));
}

export const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

/** Re-render when the store changes (this tab or another). */
export function useStore<T>(get: () => T): T {
  const [v, setV] = useState(get);
  useEffect(() => {
    const on = () => setV(get());
    window.addEventListener('ia-store', on);
    window.addEventListener('storage', on);
    return () => {
      window.removeEventListener('ia-store', on);
      window.removeEventListener('storage', on);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return v;
}

// ---------- IndexedDB for audio ----------
function db(): Promise<IDBDatabase> {
  return new Promise((res, rej) => {
    const r = indexedDB.open('ilm-atlantic', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('audio');
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
export async function putAudio(key: string, blob: Blob) {
  try {
    const d = await db();
    await new Promise<void>((res, rej) => {
      const tx = d.transaction('audio', 'readwrite');
      tx.objectStore('audio').put(blob, key);
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
  } catch {
    /* ignore — recording just won't be kept */
  }
}
export async function getAudio(key: string): Promise<Blob | undefined> {
  try {
    const d = await db();
    return await new Promise((res) => {
      const r = d.transaction('audio').objectStore('audio').get(key);
      r.onsuccess = () => res(r.result as Blob | undefined);
      r.onerror = () => res(undefined);
    });
  } catch {
    return undefined;
  }
}
