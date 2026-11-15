import type { ReactNode } from 'react';
import type { Item } from '../../data/types';
import type { ScoreResult } from '../../lib/scoring';

export interface TaskOutcome {
  result: ScoreResult;
  response: string;   // human-readable record of the answer
  audio?: Blob;
}

export interface TaskProps<I extends Item = Item> {
  item: I;
  mode: 'practice' | 'exam';
  onDone: (o: TaskOutcome) => void;
  nav?: ReactNode;    // extra buttons for the footer (prev / next)
}
