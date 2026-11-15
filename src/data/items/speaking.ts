import type { Item } from '../types';

// Original practice content for the PTE Academic Speaking section (2025 format).
// All passages, sentences, charts and discussions are written specifically for Ilm Atlantic.

export const speakingItems: Item[] = [
  // ---------------------------------------------------------------- Read Aloud
  {
    id: 'ra-001',
    task: 'ra',
    title: 'Urban green roofs',
    difficulty: 'easy',
    topic: 'Environment',
    text:
      'Green roofs are becoming a familiar sight in many modern cities. By covering flat rooftops with soil and hardy plants, building owners can reduce heating costs in winter and keep interiors cooler in summer. The plants also absorb rainwater, which eases pressure on drainage systems during heavy storms.',
  },
  {
    id: 'ra-002',
    task: 'ra',
    title: 'Sleep and memory',
    difficulty: 'medium',
    topic: 'Health',
    text:
      'Researchers have long suspected that sleep plays a central role in learning. During the deeper stages of rest, the brain appears to replay experiences from the previous day, strengthening some connections while allowing others to fade. Students who sacrifice sleep to study late into the night may therefore be undermining the very memories they hope to consolidate.',
  },
  {
    id: 'ra-003',
    task: 'ra',
    title: 'The printing press',
    difficulty: 'medium',
    topic: 'History',
    text:
      'The arrival of movable type printing in fifteenth-century Europe transformed the circulation of ideas. Books that had once taken scribes months to copy could now be reproduced in hundreds within weeks. As prices fell, literacy spread beyond the clergy and the nobility, and scholars in distant cities could finally compare and challenge one another\'s work.',
  },
  {
    id: 'ra-004',
    task: 'ra',
    title: 'Behavioural pricing',
    difficulty: 'hard',
    topic: 'Economics',
    text:
      'Conventional economic models assume consumers weigh costs and benefits with perfect consistency. Behavioural economists, however, have documented systematic departures from this ideal. Shoppers routinely judge a price not in absolute terms but relative to an arbitrary reference point, which explains why a product labelled as discounted can appear more attractive than an identical item that was simply cheaper all along.',
  },
  {
    id: 'ra-005',
    task: 'ra',
    title: 'Machine translation',
    difficulty: 'hard',
    topic: 'Technology',
    text:
      'Early machine translation systems relied on vast collections of hand-written grammatical rules, and their output was often stilted or simply wrong. Contemporary systems instead learn statistical patterns from millions of paired sentences. Although their fluency is impressive, they can still mishandle idioms, cultural references and ambiguous pronouns, so professional translators remain essential for legal and literary texts.',
  },

  // ---------------------------------------------------------------- Repeat Sentence
  {
    id: 'rs-001',
    task: 'rs',
    title: 'Library opening hours',
    difficulty: 'easy',
    topic: 'Education',
    sentence: 'The library will stay open until midnight during the examination period.',
    speaker: { name: 'Lecturer', gender: 'female', accent: 'en-GB' },
  },
  {
    id: 'rs-002',
    task: 'rs',
    title: 'Submitting assignments',
    difficulty: 'easy',
    topic: 'Education',
    sentence: 'Please submit your assignments online before the end of the week.',
    speaker: { name: 'Tutor', gender: 'male', accent: 'en-US' },
  },
  {
    id: 'rs-003',
    task: 'rs',
    title: 'Coral and temperature',
    difficulty: 'medium',
    topic: 'Environment',
    sentence: 'Coral reefs are highly sensitive to even small increases in ocean temperature.',
    speaker: { name: 'Dr. Patel', gender: 'male', accent: 'en-IN' },
  },
  {
    id: 'rs-004',
    task: 'rs',
    title: 'Sample size',
    difficulty: 'medium',
    topic: 'Science',
    sentence: 'A larger sample size generally makes the results of an experiment more reliable.',
    speaker: { name: 'Prof. Clarke', gender: 'female', accent: 'en-AU' },
  },
  {
    id: 'rs-005',
    task: 'rs',
    title: 'Seminar reading',
    difficulty: 'easy',
    topic: 'Education',
    sentence: 'Everyone should read the first two chapters before next Tuesday\'s seminar.',
    speaker: { name: 'Lecturer', gender: 'male', accent: 'en-CA' },
  },
  {
    id: 'rs-006',
    task: 'rs',
    title: 'Industrial towns',
    difficulty: 'medium',
    topic: 'History',
    sentence: 'The growth of factories drew large numbers of rural workers into rapidly expanding towns.',
    speaker: { name: 'Dr. Hughes', gender: 'female', accent: 'en-GB' },
  },
  {
    id: 'rs-007',
    task: 'rs',
    title: 'Interest rates',
    difficulty: 'hard',
    topic: 'Economics',
    sentence: 'Central banks typically raise interest rates when they want to slow down inflation.',
    speaker: { name: 'Prof. Nguyen', gender: 'male', accent: 'en-AU' },
  },
  {
    id: 'rs-008',
    task: 'rs',
    title: 'Peer review',
    difficulty: 'hard',
    topic: 'Science',
    sentence: 'Peer review is intended to ensure that published findings meet accepted methodological standards.',
    speaker: { name: 'Dr. Iyer', gender: 'female', accent: 'en-IN' },
  },
  {
    id: 'rs-009',
    task: 'rs',
    title: 'Renaissance patrons',
    difficulty: 'hard',
    topic: 'Arts',
    sentence: 'Many Renaissance painters depended heavily on wealthy patrons to finance their most ambitious commissions.',
    speaker: { name: 'Prof. Morgan', gender: 'male', accent: 'en-GB' },
  },
  {
    id: 'rs-010',
    task: 'rs',
    title: 'Social media and news',
    difficulty: 'medium',
    topic: 'Society',
    sentence: 'Young adults increasingly rely on social media as their main source of news.',
    speaker: { name: 'Lecturer', gender: 'female', accent: 'en-US' },
  },

  // ---------------------------------------------------------------- Describe Image
  {
    id: 'di-001',
    task: 'di',
    title: 'Recycling rates in four cities',
    difficulty: 'medium',
    topic: 'Environment',
    chart: {
      kind: 'bar',
      title: 'Household recycling rates in four cities, 2015 and 2023',
      xLabel: 'City',
      yLabel: 'Recycling rate',
      unit: '%',
      categories: ['City A', 'City B', 'City C', 'City D'],
      series: [
        { name: '2015', values: [28, 35, 22, 40] },
        { name: '2023', values: [45, 41, 38, 52] },
      ],
    },
    keyPoints: [
      'All four cities recycled a higher share of household waste in 2023 than in 2015',
      'City D had the highest rate in both years, rising from 40% to 52%',
      'City A showed the largest improvement, up 17 points from 28% to 45%',
      'City C started lowest at 22% but reached 38%',
      'City B grew the least, only from 35% to 41%',
    ],
    modelAnswer:
      'This bar chart compares household recycling rates in four cities in 2015 and 2023. Overall, every city improved over the period. City D led in both years, climbing from 40 to 52 percent. The most dramatic gain was in City A, which rose by 17 points, from 28 to 45 percent. City C, which began lowest at 22 percent, reached 38 percent, whereas City B grew only modestly, from 35 to 41 percent. In conclusion, recycling became more widespread everywhere, although progress was uneven.',
  },
  {
    id: 'di-002',
    task: 'di',
    title: 'Museum visitors by month',
    difficulty: 'easy',
    topic: 'Arts',
    chart: {
      kind: 'line',
      title: 'Monthly visitors to a regional art museum, January to August',
      xLabel: 'Month',
      yLabel: 'Visitors (thousands)',
      unit: 'thousand',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      series: [{ name: 'Visitors', values: [12, 10, 14, 18, 22, 30, 34, 26] }],
    },
    keyPoints: [
      'Visitor numbers dipped from 12,000 in January to a low of 10,000 in February',
      'Numbers then rose steadily through spring, reaching 22,000 in May',
      'Attendance peaked at 34,000 in July',
      'Visitors fell back to 26,000 in August',
    ],
    modelAnswer:
      'The line graph shows monthly visitor numbers at a regional art museum from January to August. Attendance started at 12,000 in January and dipped to its lowest point, 10,000, in February. After that, it climbed steadily, reaching 22,000 in May and 30,000 in June. The peak came in July, with 34,000 visitors. However, numbers then dropped back to 26,000 in August. Overall, the museum was clearly far busier in the summer months than in winter.',
  },
  {
    id: 'di-003',
    task: 'di',
    title: 'How students commute',
    difficulty: 'easy',
    topic: 'Society',
    chart: {
      kind: 'pie',
      title: 'Main way undergraduates travel to campus',
      unit: '%',
      slices: [
        { label: 'Bus', value: 34 },
        { label: 'Walking', value: 26 },
        { label: 'Cycling', value: 18 },
        { label: 'Car', value: 14 },
        { label: 'Train', value: 8 },
      ],
    },
    keyPoints: [
      'The bus is the most common way to travel, at 34%',
      'Walking is second at 26%',
      'Cycling accounts for 18% and the car for 14%',
      'The train is the least common option, at only 8%',
    ],
    modelAnswer:
      'This pie chart illustrates how undergraduates mainly travel to campus. The most popular option is the bus, used by 34 percent of students. Walking comes second at 26 percent, followed by cycling at 18 percent. Fourteen percent of students drive a car, while the train is the least common choice, accounting for just 8 percent. Overall, more than three quarters of students rely on the bus, walking or cycling, which suggests that relatively few students commute by car or train.',
  },
  {
    id: 'di-004',
    task: 'di',
    title: 'Electricity generation mix',
    difficulty: 'hard',
    topic: 'Economics',
    chart: {
      kind: 'table',
      title: 'Share of electricity generation by source in a hypothetical country (%)',
      columns: ['Source', '2010', '2020'],
      rows: [
        ['Coal', 48, 27],
        ['Natural gas', 25, 30],
        ['Hydro', 12, 11],
        ['Nuclear', 8, 5],
        ['Wind', 6, 18],
        ['Solar', 1, 9],
      ],
    },
    keyPoints: [
      'Coal fell sharply from 48% to 27% and lost its position as the largest source',
      'Natural gas became the largest source, rising from 25% to 30%',
      'Wind tripled from 6% to 18% and solar grew from 1% to 9%',
      'Hydro (12% to 11%) and nuclear (8% to 5%) declined slightly',
    ],
    modelAnswer:
      'The table compares the share of electricity generated from six sources in 2010 and 2020. The most striking change is the decline of coal, which fell from 48 to 27 percent. As a result, natural gas, rising from 25 to 30 percent, became the largest source. Renewables expanded rapidly: wind tripled from 6 to 18 percent, and solar grew from just 1 to 9 percent. Meanwhile, hydro and nuclear edged down to 11 and 5 percent respectively. Overall, the country shifted away from coal towards gas and renewables.',
  },
  {
    id: 'di-005',
    task: 'di',
    title: 'Paper recycling process',
    difficulty: 'medium',
    topic: 'Science',
    chart: {
      kind: 'process',
      title: 'How waste paper is recycled',
      steps: [
        'Collection and sorting',
        'Pulping with water',
        'Screening and de-inking',
        'Pressing and drying',
        'Rolling into new paper',
      ],
    },
    keyPoints: [
      'The process has five stages, beginning with collection and sorting',
      'The paper is then mixed with water to form pulp',
      'The pulp is screened and de-inked to remove contaminants',
      'It is pressed and dried, and finally rolled into new paper',
    ],
    modelAnswer:
      'This diagram shows the five main stages in recycling waste paper. First, used paper is collected and sorted. Next, it is mixed with water to break it down into pulp. In the third stage, the pulp is screened and de-inked, which removes contaminants such as staples and ink. After that, the clean pulp is pressed and dried to remove excess water. Finally, it is rolled into sheets of new paper. Overall, the process converts waste into a reusable product in a clear, linear sequence.',
  },

  // ---------------------------------------------------------------- Re-tell Lecture
  {
    id: 'rl-001',
    task: 'rl',
    title: 'Urban heat islands',
    difficulty: 'medium',
    topic: 'Environment',
    speaker: { name: 'Prof. Bennett', gender: 'female', accent: 'en-GB' },
    transcript:
      'Today I want to talk about something you have probably felt without naming it: the urban heat island. On a summer evening, the centre of a large city can be several degrees warmer than the surrounding countryside. Why? Well, there are three main reasons. First, materials like concrete, asphalt and brick absorb heat during the day and release it slowly at night. Second, cities have far less vegetation, so there is less shade and less cooling from moisture evaporating off leaves. And third, human activity itself, from traffic to air conditioning units, pumps extra heat into the streets. Now, this is not just a matter of comfort. During heatwaves, these extra degrees can be dangerous, particularly for elderly residents. So planners are experimenting with solutions: lighter-coloured roofs that reflect sunlight, more street trees, and small parks spread throughout neighbourhoods rather than one large park on the edge of town.',
    keyPoints: [
      'City centres can be several degrees warmer than the surrounding countryside (the urban heat island)',
      'Causes: heat-absorbing materials, lack of vegetation, and heat from human activity',
      'Extra heat is a health risk during heatwaves, especially for elderly people',
      'Solutions include reflective roofs, more street trees and many small parks',
    ],
    modelAnswer:
      'The lecture explained the urban heat island effect, where city centres are noticeably warmer than nearby rural areas. The speaker gave three causes: concrete and asphalt store heat and release it at night, cities lack vegetation that provides shade and evaporative cooling, and human activities such as traffic and air conditioning add extra heat. She stressed that this is a genuine health risk during heatwaves, especially for older people. Finally, she described solutions, including reflective roofs, more street trees and small, widely distributed parks.',
  },
  {
    id: 'rl-002',
    task: 'rl',
    title: 'The spacing effect',
    difficulty: 'easy',
    topic: 'Education',
    speaker: { name: 'Dr. Ramirez', gender: 'male', accent: 'en-US' },
    transcript:
      'Let me ask you a question. If you have six hours to prepare for an exam, is it better to study for six hours the night before, or for one hour a day over six days? Most of you probably know the answer, but many of you still choose the first option. Psychologists call the advantage of the second approach the spacing effect. When we spread our study sessions out, we give ourselves time to partly forget the material. That sounds like a bad thing, right? But actually, the effort of recalling something we have half forgotten is exactly what strengthens the memory. Cramming, by contrast, feels productive because the information is fresh, but it tends to fade within days. So, my practical advice is this: plan short, regular review sessions, and test yourself rather than simply rereading your notes. It is less comfortable, but the results last much longer.',
    keyPoints: [
      'Spreading study over several days is more effective than cramming (the spacing effect)',
      'Partly forgetting material and then recalling it strengthens memory',
      'Cramming feels productive but the information fades within days',
      'Advice: short, regular review sessions and self-testing instead of rereading',
    ],
    modelAnswer:
      'The speaker discussed the spacing effect, which shows that studying in short sessions over several days is more effective than cramming the night before. He explained that when study is spaced out, students partly forget the material, and the effort of recalling it actually strengthens memory. Cramming, in contrast, feels productive because information is fresh, but it is quickly forgotten. He concluded by recommending regular, short review sessions combined with self-testing rather than simply rereading notes, because the benefits last far longer.',
  },
  {
    id: 'rl-003',
    task: 'rl',
    title: 'Microfinance',
    difficulty: 'hard',
    topic: 'Economics',
    speaker: { name: 'Prof. Sharma', gender: 'female', accent: 'en-IN' },
    transcript:
      'In this part of the lecture, I would like to look at microfinance, which means providing very small loans to people who are excluded from conventional banking. The original idea was quite simple. Many people in low-income communities have business ideas, perhaps buying a sewing machine or extra stock for a market stall, but no bank will lend to them because they have no collateral. Microfinance institutions addressed this by lending to small groups, where members share responsibility for repayment. In the early years, repayment rates were remarkably high, and microfinance was celebrated as a powerful tool against poverty. However, more recent evaluations have been more cautious. Many studies have found that while borrowers gain flexibility and can manage emergencies more easily, the average effect on household income is fairly modest. Some borrowers have also fallen into debt by taking loans from several lenders at once. So the current view is more balanced: microfinance is useful, but it is not a cure for poverty on its own.',
    keyPoints: [
      'Microfinance provides small loans to people excluded from conventional banks because they lack collateral',
      'Lending to groups with shared responsibility produced high repayment rates',
      'It was initially celebrated as a powerful anti-poverty tool',
      'Later evaluations show modest income effects and some over-indebtedness',
      'Current view: useful for flexibility, but not a cure for poverty on its own',
    ],
    modelAnswer:
      'The lecturer described microfinance, which offers small loans to people who cannot borrow from banks because they lack collateral. By lending to groups that share responsibility for repayment, early institutions achieved very high repayment rates, and microfinance was praised as a major weapon against poverty. However, she noted that recent evaluations are more cautious: borrowers gain flexibility in handling emergencies, but income gains are generally modest, and some people become over-indebted by borrowing from several lenders. She concluded that microfinance is valuable but not a complete solution to poverty.',
  },
  {
    id: 'rl-004',
    task: 'rl',
    title: 'Antibiotic resistance',
    difficulty: 'hard',
    topic: 'Health',
    speaker: { name: 'Dr. Walsh', gender: 'male', accent: 'en-AU' },
    transcript:
      'Antibiotics are among the most important medical discoveries of the twentieth century, but their effectiveness is under threat. The problem is antibiotic resistance. Whenever we use an antibiotic, most of the target bacteria die, but a few may survive because of random genetic differences. Those survivors multiply, and over time the whole population can become resistant. Now, this is a natural evolutionary process, but human behaviour has accelerated it enormously. Antibiotics are often prescribed for viral infections, such as colds, where they do nothing at all. Patients sometimes stop a course early once they feel better. And in some countries, large quantities are given to farm animals simply to promote growth. The consequences are serious: routine operations and minor infections could become far riskier. So, what can be done? Responses include stricter prescribing, better hygiene in hospitals, reducing agricultural use, and investing in new drugs, which, frankly, is commercially unattractive for many pharmaceutical companies.',
    keyPoints: [
      'Resistance develops when a few bacteria survive an antibiotic and multiply',
      'Human misuse accelerates it: prescribing for viral infections, stopping courses early, use in farm animals',
      'Consequence: routine surgery and minor infections could become dangerous',
      'Solutions: stricter prescribing, hospital hygiene, less agricultural use, and new drug development',
      'Developing new antibiotics is commercially unattractive for many companies',
    ],
    modelAnswer:
      'The lecture focused on antibiotic resistance. He explained that when antibiotics are used, a few bacteria may survive because of genetic variation, and these multiply until the population becomes resistant. Although this is natural, human behaviour speeds it up, for example by prescribing antibiotics for viral infections, stopping courses early and using them to boost growth in livestock. As a result, ordinary operations and infections could become far riskier. Proposed responses include stricter prescribing, better hospital hygiene, reduced agricultural use and new drug research, though the latter is commercially unattractive.',
  },

  // ---------------------------------------------------------------- Answer Short Question
  {
    id: 'asq-001',
    task: 'asq',
    title: 'Measuring temperature',
    difficulty: 'easy',
    topic: 'Science',
    question: 'What instrument do we use to measure temperature?',
    speaker: { name: 'Examiner', gender: 'female', accent: 'en-GB' },
    answers: ['thermometer', 'a thermometer', 'thermometers'],
  },
  {
    id: 'asq-002',
    task: 'asq',
    title: 'Days in a leap year',
    difficulty: 'easy',
    topic: 'Science',
    question: 'How many days are there in a leap year?',
    speaker: { name: 'Examiner', gender: 'male', accent: 'en-US' },
    answers: ['366', 'three hundred sixty-six', '366 days'],
  },
  {
    id: 'asq-003',
    task: 'asq',
    title: 'Book of word meanings',
    difficulty: 'easy',
    topic: 'Education',
    question: 'What kind of book would you look in to find the meaning of a word?',
    speaker: { name: 'Examiner', gender: 'female', accent: 'en-AU' },
    answers: ['dictionary', 'a dictionary', 'dictionaries'],
  },
  {
    id: 'asq-004',
    task: 'asq',
    title: 'Frozen water',
    difficulty: 'easy',
    topic: 'Science',
    question: 'What does water turn into when it freezes?',
    speaker: { name: 'Examiner', gender: 'male', accent: 'en-IN' },
    answers: ['ice'],
  },
  {
    id: 'asq-005',
    task: 'asq',
    title: 'Plants and sunlight',
    difficulty: 'medium',
    topic: 'Science',
    question: 'What is the process called by which green plants use sunlight to make their own food?',
    speaker: { name: 'Examiner', gender: 'female', accent: 'en-CA' },
    answers: ['photosynthesis'],
  },
  {
    id: 'asq-006',
    task: 'asq',
    title: 'Hundred years',
    difficulty: 'easy',
    topic: 'History',
    question: 'What do we call a period of one hundred years?',
    speaker: { name: 'Examiner', gender: 'male', accent: 'en-GB' },
    answers: ['century', 'a century', 'centuries'],
  },
  {
    id: 'asq-007',
    task: 'asq',
    title: 'Person who designs buildings',
    difficulty: 'medium',
    topic: 'Arts',
    question: 'What is the job title of a person who designs buildings?',
    speaker: { name: 'Examiner', gender: 'female', accent: 'en-US' },
    answers: ['architect', 'an architect', 'architects'],
  },
  {
    id: 'asq-008',
    task: 'asq',
    title: 'Selling goods abroad',
    difficulty: 'medium',
    topic: 'Economics',
    question: 'When a country sells its goods to other countries, what is this called?',
    speaker: { name: 'Examiner', gender: 'male', accent: 'en-AU' },
    answers: ['exporting', 'export', 'exports', 'exportation'],
  },
  {
    id: 'asq-009',
    task: 'asq',
    title: 'Seeing distant stars',
    difficulty: 'medium',
    topic: 'Technology',
    question: 'Which optical instrument do astronomers use to observe distant stars and planets?',
    speaker: { name: 'Examiner', gender: 'female', accent: 'en-IN' },
    answers: ['telescope', 'a telescope', 'telescopes'],
  },
  {
    id: 'asq-010',
    task: 'asq',
    title: 'Organ that pumps blood',
    difficulty: 'easy',
    topic: 'Health',
    question: 'Which organ in the human body pumps blood around it?',
    speaker: { name: 'Examiner', gender: 'male', accent: 'en-CA' },
    answers: ['heart', 'the heart'],
  },

  // ---------------------------------------------------------------- Summarize Group Discussion
  {
    id: 'sgd-001',
    task: 'sgd',
    title: 'Recording lectures',
    difficulty: 'medium',
    topic: 'Education',
    turns: [
      {
        speaker: { name: 'Hannah', gender: 'female', accent: 'en-GB' },
        text: 'So the university is proposing to record every lecture and put it online. Personally, I think it is a great idea. If you are ill, or you work part-time, you do not fall behind, and you can rewatch the difficult parts before exams. It also makes revision much less stressful.',
      },
      {
        speaker: { name: 'Marcus', gender: 'male', accent: 'en-US' },
        text: 'I see the benefits, but I am worried about attendance. If everything is online, a lot of students will just stop coming. And honestly, the live discussion and being able to ask questions are the most valuable parts of a lecture. You cannot interrupt a video to ask what something means.',
      },
      {
        speaker: { name: 'Priya', gender: 'female', accent: 'en-IN' },
        text: 'I think you are both right, actually. The evidence I have seen suggests attendance does drop a little, but mostly among students who were already skipping. For students who speak English as a second language, recordings are incredibly helpful, because they can slow them down or check terminology.',
      },
      {
        speaker: { name: 'Marcus', gender: 'male', accent: 'en-US' },
        text: 'That is a fair point about language. But what about lecturers? Some of them may become more cautious and avoid saying anything controversial if they know it is being recorded.',
      },
      {
        speaker: { name: 'Hannah', gender: 'female', accent: 'en-GB' },
        text: 'Maybe lecturers could pause the recording for discussion sections. That would protect open debate while still keeping the core content available.',
      },
      {
        speaker: { name: 'Priya', gender: 'female', accent: 'en-IN' },
        text: 'Exactly, a flexible policy seems sensible. Record the main content, let staff opt out of certain segments, and keep the live sessions interactive so there is still a reason to attend in person.',
      },
    ],
    keyPoints: [
      'Hannah supports recording all lectures because it helps students who are ill or working and aids revision',
      'Marcus fears falling attendance and the loss of live discussion and questions',
      'Priya notes attendance falls only slightly and recordings greatly help second-language students',
      'Marcus adds that lecturers may avoid controversial remarks if recorded',
      'They agree on a flexible policy: record core content, allow pauses or opt-outs, keep live sessions interactive',
    ],
    modelAnswer:
      'The three students discussed a proposal to record all lectures. Hannah strongly supported it, arguing that recordings help students who are ill or working part-time and are useful for revision. Marcus was concerned that attendance would fall and that students would miss live discussion and the chance to ask questions; he also suggested lecturers might avoid controversial topics. Priya took a middle position, noting that attendance drops only slightly and that recordings are especially valuable for second-language speakers. Finally, they agreed on a flexible approach: recording core content, allowing lecturers to pause for discussion, and keeping live sessions interactive.',
  },
  {
    id: 'sgd-002',
    task: 'sgd',
    title: 'Meat-free campus canteen',
    difficulty: 'hard',
    topic: 'Environment',
    turns: [
      {
        speaker: { name: 'Liam', gender: 'male', accent: 'en-AU' },
        text: 'The student union wants the main canteen to go completely meat-free two days a week. I am in favour. Meat production has a large carbon footprint, and the university has committed to cutting its emissions.',
      },
      {
        speaker: { name: 'Sophie', gender: 'female', accent: 'en-CA' },
        text: 'I agree with the goal, but I am not sure banning things is the right method. People resent being told what to eat. They might just buy burgers off campus instead, which would not reduce emissions at all, and the canteen would lose income.',
      },
      {
        speaker: { name: 'Arjun', gender: 'male', accent: 'en-IN' },
        text: 'There is also a cost issue. Plant-based meals can be cheaper, but the ones on offer here are often more expensive, and that hits students on tight budgets hardest. Some of my friends already skip lunch to save money.',
      },
      {
        speaker: { name: 'Liam', gender: 'male', accent: 'en-AU' },
        text: 'Okay, but if the canteen redesigned the menu properly, with good lentil dishes and curries, it could easily be cheaper. The problem is the current menu, not the idea. Plenty of cuisines around the world are mainly vegetarian.',
      },
      {
        speaker: { name: 'Sophie', gender: 'female', accent: 'en-CA' },
        text: 'That is what I would prefer: make the vegetarian options the default and the most attractive, and leave meat available. Small nudges often change behaviour more than strict rules.',
      },
      {
        speaker: { name: 'Arjun', gender: 'male', accent: 'en-IN' },
        text: 'I could support that, as long as prices are fair. Perhaps run a one-semester trial, measure sales and emissions, and then let students vote on whether to go further.',
      },
      {
        speaker: { name: 'Liam', gender: 'male', accent: 'en-AU' },
        text: 'A trial with real data sounds reasonable. I would still push for meat-free days eventually, but starting with defaults is better than doing nothing.',
      },
    ],
    keyPoints: [
      'Liam supports two meat-free days a week to cut the university\'s carbon emissions',
      'Sophie shares the goal but thinks bans cause resentment and push students off campus; she prefers nudges such as vegetarian defaults',
      'Arjun is concerned that plant-based meals on campus are currently more expensive for students on tight budgets',
      'Liam argues a redesigned menu could make plant-based food cheaper',
      'They agree on a one-semester trial of vegetarian defaults, with data on sales and emissions and a student vote',
    ],
    modelAnswer:
      'The group debated a proposal for two meat-free days a week in the campus canteen. Liam supported it on environmental grounds, pointing to meat\'s carbon footprint and the university\'s emissions targets. Sophie agreed with the aim but argued that bans breed resentment and might simply push students to eat off campus; she preferred nudges, such as making vegetarian dishes the default. Arjun raised affordability, noting that current plant-based meals are expensive, although Liam replied that a better menu could make them cheaper. They eventually agreed on a one-semester trial, measuring sales and emissions before a student vote.',
  },
  {
    id: 'sgd-003',
    task: 'sgd',
    title: 'AI tools in assessment',
    difficulty: 'hard',
    topic: 'Technology',
    turns: [
      {
        speaker: { name: 'Dr. Okafor', gender: 'male', accent: 'en-GB' },
        text: 'Our department needs a policy on AI writing tools. My instinct is to allow them for brainstorming and editing, but to require students to declare exactly how they were used. Something like a short statement attached to each assignment.',
      },
      {
        speaker: { name: 'Emily', gender: 'female', accent: 'en-US' },
        text: 'As a student representative, I think that is realistic. These tools are already everywhere, and employers expect graduates to use them. Banning them would just be unenforceable, because detection software is unreliable and sometimes flags work that students genuinely wrote themselves.',
      },
      {
        speaker: { name: 'Dr. Chen', gender: 'female', accent: 'en-AU' },
        text: 'I understand that, but my concern is that essays are meant to develop thinking, not just produce a text. If a tool structures the argument, the student may never learn to do it themselves. Building an argument is one of the core skills we are supposed to be teaching, and a declaration does not really solve that.',
      },
      {
        speaker: { name: 'Emily', gender: 'female', accent: 'en-US' },
        text: 'Then maybe the assessment should change. More in-class writing, oral defences of essays, or submitting drafts so tutors can see how the work developed.',
      },
      {
        speaker: { name: 'Dr. Okafor', gender: 'male', accent: 'en-GB' },
        text: 'Oral defences are appealing, but they take a great deal of staff time with large classes. Some of our first-year modules have more than three hundred students. Draft submission is more practical, and it also discourages last-minute work.',
      },
      {
        speaker: { name: 'Dr. Chen', gender: 'female', accent: 'en-AU' },
        text: 'I could accept a combination: permitted use with a declaration, drafts submitted for major essays, and at least one supervised writing task each year, so we know students can argue independently.',
      },
    ],
    keyPoints: [
      'Dr. Okafor proposes allowing AI tools for brainstorming and editing if students declare their use',
      'Emily supports this, saying the tools are widespread, expected by employers, and a ban is unenforceable',
      'Dr. Chen worries that AI may prevent students developing their own reasoning and argument skills',
      'Emily suggests changing assessment, e.g. in-class writing, oral defences or draft submission; Okafor finds oral defences too time-consuming',
      'They agree on declared use, draft submission for major essays, and a yearly supervised writing task',
    ],
    modelAnswer:
      'Two lecturers and a student representative discussed a departmental policy on AI writing tools. Dr. Okafor proposed allowing them for brainstorming and editing, provided students declare their use. Emily agreed, arguing that the tools are already widespread, valued by employers and impossible to ban effectively. Dr. Chen, however, worried that relying on AI could stop students from learning to build arguments themselves. Emily suggested redesigning assessment through in-class writing, oral defences or draft submissions, although Dr. Okafor felt oral defences were too time-consuming. They finally agreed on declared use, draft submission for major essays and an annual supervised writing task.',
  },

  // ---------------------------------------------------------------- Respond to a Situation
  {
    id: 'rts-001',
    task: 'rts',
    title: 'Missed group meeting',
    difficulty: 'easy',
    topic: 'Education',
    speaker: { name: 'Narrator', gender: 'female', accent: 'en-GB' },
    situation:
      'You are working on a group project with three classmates. Yesterday you missed an important planning meeting because your train was cancelled, and you forgot to let anyone know. Your group leader, Sam, has just sent a message asking whether you are still committed to the project. You decide to call Sam. What would you say to Sam?',
    keyPoints: [
      'Apologise sincerely for missing the meeting without warning',
      'Briefly explain the reason (cancelled train) without making excuses',
      'Reassure Sam of your commitment to the project',
      'Offer to catch up and take on a specific task',
    ],
    modelAnswer:
      'Hi Sam, it\'s me. First of all, I\'m really sorry about yesterday. My train was cancelled, and in all the confusion I completely forgot to message the group, which I know wasn\'t fair on everyone. I want to reassure you that I\'m fully committed to the project. Could you send me the notes from the meeting? I\'ll read them tonight, and I\'m happy to take on an extra section, perhaps the literature review, to make up for it. It won\'t happen again.',
  },
  {
    id: 'rts-002',
    task: 'rts',
    title: 'Noisy neighbour',
    difficulty: 'medium',
    topic: 'Society',
    speaker: { name: 'Narrator', gender: 'male', accent: 'en-US' },
    situation:
      'You live in a student apartment building. For the past week, your neighbor has been playing loud music late at night, and you have an important exam in two days. You have never spoken to this neighbor before and want to stay on good terms. You knock on their door one evening. What would you say to your neighbor?',
    keyPoints: [
      'Introduce yourself politely and in a friendly tone',
      'Explain the problem (late-night music) and why it matters now (exam in two days)',
      'Make a specific, reasonable request (lower volume after a certain time)',
      'Keep the relationship positive and thank them',
    ],
    modelAnswer:
      'Hi, sorry to bother you. I\'m Alex, I live in the apartment next door. I don\'t think we\'ve met properly yet. I just wanted to mention that the music has been quite loud late at night recently, and I can hear it pretty clearly through the wall. Normally it wouldn\'t be a big deal, but I have an important exam in two days and I\'m really struggling to sleep. Would you mind keeping it down after about eleven? I\'d really appreciate it. Thanks so much.',
  },
  {
    id: 'rts-003',
    task: 'rts',
    title: 'Requesting a deadline extension',
    difficulty: 'medium',
    topic: 'Health',
    speaker: { name: 'Narrator', gender: 'female', accent: 'en-AU' },
    situation:
      'You have been unwell with a severe flu for the past week and have a doctor\'s certificate. As a result, you have not been able to finish an essay that is due this Friday. You see your tutor, Dr. Lewis, in the corridor after class and decide to ask for an extension. What would you say to Dr. Lewis?',
    keyPoints: [
      'Greet the tutor politely and ask for a moment of their time',
      'Explain the illness and mention the doctor\'s certificate',
      'Request a specific extension',
      'Offer to provide evidence or follow the formal procedure, and thank the tutor',
    ],
    modelAnswer:
      'Excuse me, Dr. Lewis, do you have a minute? I wanted to ask about the essay that\'s due on Friday. Unfortunately, I\'ve been quite ill with the flu for the past week, so I haven\'t been able to make much progress. I do have a doctor\'s certificate, which I can email to you today. Would it be possible to have an extension of one week? If there\'s a formal form I need to complete, I\'m happy to do that as well. Thank you very much for considering it.',
  },
  {
    id: 'rts-004',
    task: 'rts',
    title: 'Incorrect order at work',
    difficulty: 'hard',
    topic: 'Economics',
    speaker: { name: 'Narrator', gender: 'male', accent: 'en-CA' },
    situation:
      'You manage a small office and ordered fifty boxes of printer paper from a supplier for an important event next week. The delivery arrived today, but it contained only twenty boxes, and the invoice charges you for fifty. You call the supplier\'s customer service line to sort out the problem. What would you say to the customer service representative?',
    keyPoints: [
      'Identify yourself and the order clearly',
      'Explain the discrepancy between the delivery and the invoice',
      'Emphasise the urgency (event next week)',
      'Request a solution: deliver the remaining 30 boxes promptly and correct the invoice',
      'Remain polite and ask for confirmation',
    ],
    modelAnswer:
      'Good morning. My name is Jordan, and I\'m calling about an order placed by our office last week for fifty boxes of printer paper. The delivery arrived today, but it only contained twenty boxes, while the invoice charges us for the full fifty. We need the paper for an important event next week, so this is fairly urgent. Could you arrange for the remaining thirty boxes to be delivered by Friday and send a corrected invoice in the meantime? I\'d appreciate an email confirming this. Thank you for your help.',
  },
];
