// Quick check of the writing scorers on realistic answers (spelling dictionary is skipped outside the browser).
import { coreWriting1 } from '../src/data/items/core-writing-1';
import { scoreWriting } from '../src/lib/scoring';

const wem = coreWriting1.find((i) => i.id === 'core-wem-001')!;
const answer = `Dear Ms. Patel,

I am writing to ask whether it would be possible to change my work schedule. I have just enrolled in an evening college course that starts next month, so I can no longer work my two late shifts on Tuesdays and Thursdays.

Instead, I could work the morning shifts on those days, or I could take an extra shift on Saturday or Sunday.

To make sure the store is not affected, I will help train a colleague to cover the closing duties, and I can swap shifts with coworkers if needed.

Thank you for considering my request.

Kind regards,
Daniel`;
const r = await scoreWriting(wem, answer);
console.log(r.traits.map((t) => `${t.name} ${t.score}/${t.max} (${t.note})`).join('\n'));
console.log('coverage:', r.coverage?.map((c) => `${c.hit ? '✓' : '✗'} ${c.point} ${c.ratio.toFixed(2)}`).join('\n'));
console.log('feedback:', r.feedback);
