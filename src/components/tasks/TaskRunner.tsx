import type { Item, ItemOf } from '../../data/types';
import { SpeakingTask } from './SpeakingTask';
import { WritingTask } from './WritingTask';
import { ChoiceTask } from './ChoiceTask';
import { HIWTask, LFIBTask, RFIBTask, ROPTask, RWFIBTask, WFDTask } from './GapTasks';
import type { TaskProps } from './types';

/** Picks the right player for an item. Re-mount with a new `key` for each item. */
export function TaskRunner(props: TaskProps) {
  const { item } = props;
  const p = <T extends Item>(i: T) => ({ ...props, item: i }) as TaskProps<T>;
  switch (item.task) {
    case 'ra': case 'rs': case 'di': case 'rl': case 'asq': case 'sgd': case 'rts':
      return <SpeakingTask {...props} />;
    case 'swt': case 'we': case 'sst':
      return <WritingTask {...p(item as ItemOf<'swt' | 'we' | 'sst'>)} />;
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
