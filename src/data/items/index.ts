import type { Item, ItemOf, TaskCode } from '../types';
import { speakingItems } from './speaking';
import { writingReadingItems } from './writing-reading';
import { listeningItems } from './listening';

export const ITEMS: Item[] = [...speakingItems, ...writingReadingItems, ...listeningItems];

export const itemsFor = <T extends TaskCode>(task: T) => ITEMS.filter((i) => i.task === task) as ItemOf<T>[];
export const itemById = (id: string) => ITEMS.find((i) => i.id === id);
