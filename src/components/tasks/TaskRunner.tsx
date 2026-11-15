import type { Item, ItemOf } from '../../data/types';
import { SpeakingTask } from './SpeakingTask';
import { WritingTask } from './WritingTask';
import { ChoiceTask } from './ChoiceTask';
import { HIWTask, LFIBTask, RFIBTask, ROPTask, RWFIBTask, WFDTask } from './GapTasks';
import { CelpipSetTask } from './CelpipSetTask';
import type { TaskProps } from './types';

/** Picks the right player for an item. Re-mount with a new `key` for each item. */
export function TaskRunner(props: TaskProps) {
  const { item } = props;
  const p = <T extends Item>(i: T) => ({ ...props, item: i }) as TaskProps<T>;
  switch (item.task) {
    case 'ra': case 'rs': case 'di': case 'rl': case 'asq': case 'sgd': case 'rts':
    case 'cs1': case 'cs2': case 'cs3': case 'cs4': case 'cs5': case 'cs6': case 'cs7': case 'cs8':
      return <SpeakingTask {...props} />;
    case 'swt': case 'we': case 'sst': case 'wem': case 'cw1': case 'cw2':
      return <WritingTask {...p(item as ItemOf<'swt' | 'we' | 'sst' | 'wem' | 'cw1' | 'cw2'>)} />;
    case 'cl1': case 'cl2': case 'cl3': case 'cl4': case 'cl5': case 'cl6': case 'cr1': case 'cr2': case 'cr3': case 'cr4':
      return <CelpipSetTask {...p(item as ItemOf<'cl1' | 'cl2' | 'cl3' | 'cl4' | 'cl5' | 'cl6' | 'cr1' | 'cr2' | 'cr3' | 'cr4'>)} />;
    case 'mcm': case 'mcs': case 'lmcm': case 'lmcs': case 'hcs': case 'smw':
      return <ChoiceTask {...p(item as ItemOf<'mcm' | 'mcs' | 'lmcm' | 'lmcs' | 'hcs' | 'smw'>)} />;
    case 'rwfib': return <RWFIBTask {...p(item)} />;
    case 'rfib': return <RFIBTask {...p(item)} />;
    case 'rop': return <ROPTask {...p(item)} />;
    case 'lfib': return <LFIBTask {...p(item)} />;
    case 'hiw': return <HIWTask {...p(item)} />;
    case 'wfd': return <WFDTask {...p(item)} />;
  }
}
