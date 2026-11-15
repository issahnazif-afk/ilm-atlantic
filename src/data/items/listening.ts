import type { Item } from '../types';

// Original listening practice items for Ilm Atlantic (current PTE Academic format).
// Transcripts are written as natural spoken language for browser text-to-speech.

export const listeningItems: Item[] = [
  // ---------------------------------------------------------------- SST
  {
    id: 'sst-001',
    task: 'sst',
    title: 'Urban heat islands',
    difficulty: 'medium',
    topic: 'Environment',
    speaker: { name: 'Dr. Helen Marsh', gender: 'female', accent: 'en-GB' },
    transcript:
      "Today I want to talk about why cities are often noticeably warmer than the countryside around them, a pattern that researchers call the urban heat island. The basic cause is surprisingly simple. Natural ground, such as soil, grass and woodland, holds moisture, and when that moisture evaporates it carries heat away from the surface. In a city, much of that ground has been replaced by asphalt, concrete and brick. These materials absorb sunlight during the day and release it slowly through the evening, so streets can stay warm long after sunset. On top of that, tall buildings trap heat between them and reduce the wind that might otherwise cool the area, while cars, air conditioners and factories add waste heat of their own. Now, why does this matter? Higher night-time temperatures make it harder for people to recover from hot days, and that is particularly dangerous for older residents and people with heart or lung conditions. Warmer cities also use more electricity for cooling, which can increase emissions. The encouraging news is that the problem responds well to design. Planting street trees, creating parks, painting roofs in light colours and using materials that reflect more sunlight can all lower local temperatures by several degrees. In other words, the way we build cities can either intensify the heat or help to relieve it.",
    keyPoints: [
      'Cities are warmer because moist natural ground is replaced by heat-storing materials such as asphalt and concrete',
      'Buildings trap heat and block wind; vehicles and machines add waste heat',
      'Consequences: health risks for vulnerable people and higher energy use for cooling',
      'Design solutions: trees, parks, light-coloured roofs and reflective materials',
    ],
    modelAnswer:
      'The speaker explains that cities are warmer than the surrounding countryside because natural, moisture-holding ground is replaced by materials such as asphalt and concrete that store heat, while buildings trap warm air and machines add waste heat. This raises health risks, especially for vulnerable residents, and increases energy use, but design measures such as trees, parks and reflective roofs can reduce temperatures.',
  },
  {
    id: 'sst-002',
    task: 'sst',
    title: 'Sleep and memory',
    difficulty: 'hard',
    topic: 'Health',
    speaker: { name: 'Prof. Daniels', gender: 'male', accent: 'en-US' },
    transcript:
      "Most of us think of sleep as a period when the brain simply switches off, but research over the last few decades suggests almost the opposite. During sleep, the brain is busy processing what happened during the day, and one of its most important jobs is consolidating memory. When you learn something new, whether it is a list of vocabulary or a new piece of music, the information is initially stored in a fragile form. Studies in which people learn a task and are then tested after either a night of sleep or an equal period awake tend to show that those who slept remember more. Different stages of sleep seem to contribute in different ways. Deep, slow-wave sleep appears to be especially important for facts and events, while the lighter stage associated with dreaming may help with skills and with connecting ideas in creative ways. There is a practical message here for students. Staying up all night before an exam may feel productive, but it can undermine the very learning you are trying to protect. A better strategy is to spread study over several days and allow sleep to do part of the work. Of course, sleep is not a magic solution, and it cannot replace actual study, but it is a partner in learning that is too often ignored.",
    keyPoints: [
      'Sleep is an active state in which the brain consolidates memories',
      'People tested after sleep remember more than those who stayed awake',
      'Deep sleep supports facts and events; dream-stage sleep may support skills and creativity',
      'Students should avoid all-night study and spread learning over several days',
    ],
    modelAnswer:
      "The lecturer argues that sleep is an active process in which the brain consolidates the day's memories. Experiments show that people remember more after sleeping than after staying awake, with deep sleep supporting facts and dream sleep supporting skills and creativity. Therefore, students should avoid all-night revision and spread study over several days, treating sleep as a partner to, not a replacement for, learning.",
  },
  {
    id: 'sst-003',
    task: 'sst',
    title: 'Network effects',
    difficulty: 'medium',
    topic: 'Economics',
    speaker: { name: 'Dr. Priya Raman', gender: 'female', accent: 'en-IN' },
    transcript:
      "Let me introduce an idea that helps explain why some technology companies grow so quickly and why they can be so hard to compete with. It is called the network effect. A product has a network effect when it becomes more valuable to each user as more people use it. The classic example is the telephone. A single telephone is useless, two telephones allow one conversation, and every additional telephone increases the number of possible connections. Many modern services work in the same way. A messaging app is attractive because your friends already use it, and an online marketplace attracts sellers because buyers are there, which in turn attracts more buyers. This creates a powerful cycle. Once a service has a large user base, newcomers find it very difficult to persuade people to switch, even if their product is technically better, because switching means leaving your contacts or customers behind. For this reason, markets with strong network effects often end up dominated by one or two firms. That is not necessarily bad for consumers in the short term, since they get a service that everyone uses. However, economists worry that dominant firms may later raise prices, reduce quality, or collect more personal data, knowing that users have few realistic alternatives. This is why some regulators now discuss rules that would make it easier to move data or contacts between competing services.",
    keyPoints: [
      'A network effect means a product becomes more valuable as more people use it (telephone, messaging, marketplaces)',
      'This creates a self-reinforcing cycle that makes switching to rivals difficult',
      'Such markets tend to be dominated by one or two firms',
      'Risks of higher prices, lower quality and data collection lead regulators to consider easier switching',
    ],
    modelAnswer:
      'The speaker explains network effects, where a product becomes more valuable as more people use it, as with telephones, messaging apps and online marketplaces. This creates a self-reinforcing cycle that makes it hard for rivals to attract users, so such markets tend to be dominated by a few firms, raising concerns about prices, quality and data, and prompting regulators to consider easier switching.',
  },
  {
    id: 'sst-004',
    task: 'sst',
    title: 'Hidden museum collections',
    difficulty: 'easy',
    topic: 'Arts',
    speaker: { name: 'Tom', gender: 'male', accent: 'en-AU' },
    transcript:
      "When you walk through a large museum, it is easy to assume that you are seeing most of what it owns. In fact, the opposite is usually true. Many major museums display only a small fraction of their collections at any one time, with the rest kept in storage rooms that the public rarely sees. There are several reasons for this. Some objects are simply too fragile to be shown for long periods. Textiles, drawings and photographs, for example, can fade if they are exposed to light, so they are often displayed for a few months and then rested in darkness. Other objects are kept mainly for research. A collection of thousands of insect specimens or pottery fragments may not make an exciting exhibition, but it can be extremely valuable to scientists and historians. Space is also a factor, because gallery space is expensive and there is only so much that visitors can take in. Recently, however, museums have been looking for ways to share more of what they hold. Some have opened visible storage areas where visitors can look through glass at shelves of objects. Others are photographing their collections and putting the images online, so that people anywhere in the world can explore items that might otherwise stay hidden for decades. These efforts are changing the idea of a museum from a building you visit into a resource you can use.",
    keyPoints: [
      'Large museums usually display only a small share of their collections',
      'Reasons: fragile, light-sensitive objects; research collections; limited gallery space',
      'Museums now share more through visible storage and online images',
      'Museums are becoming resources to use, not just buildings to visit',
    ],
    modelAnswer:
      'The speaker notes that most large museums display only a small share of their collections. Objects stay in storage because they are fragile, especially light-sensitive items, because they are mainly used for research, or because gallery space is limited. However, museums are increasingly sharing hidden collections through visible storage and online image databases, turning themselves into resources rather than just buildings to visit.',
  },

  // ---------------------------------------------------------------- LMCM
  {
    id: 'lmcm-001',
    task: 'lmcm',
    title: 'The honeybee dance',
    difficulty: 'medium',
    topic: 'Science',
    speaker: { name: 'Dr. Claire Bouchard', gender: 'female', accent: 'en-CA' },
    transcript:
      "When a honeybee finds a good source of food, she returns to the hive and performs what scientists call the waggle dance. She moves forward in a straight line while shaking her body from side to side, then circles back and repeats the movement. The dance carries surprisingly precise information. The angle of the straight run, compared with straight up on the vertical surface of the honeycomb, tells other bees the direction of the food relative to the position of the sun. The length of time spent waggling indicates how far away the food is, with longer runs meaning greater distances. Other bees follow the dancer closely, picking up the scent of the flowers she has visited, and then fly out to search for the source themselves. Remarkably, the system works in the dark interior of the hive, where the bees rely on touch and vibration rather than sight.",
    question: 'According to the speaker, which information does the waggle dance communicate?',
    options: [
      'The direction of the food in relation to the sun',
      'The amount of nectar available at the source',
      'How far away the food source is',
      'The time of day the food was found',
      'The safest route for avoiding predators',
      'The number of bees needed to collect the food',
    ],
    answers: [0, 2],
    explanation:
      'The speaker says the angle of the straight run shows direction relative to the sun, and the length of the waggle shows distance. The amount of nectar, time of day, predators and number of bees are never mentioned. Note that scent is picked up from the dancer, but the speaker does not say the dance itself communicates the flower type or quantity of food.',
  },
  {
    id: 'lmcm-002',
    task: 'lmcm',
    title: 'Retrieval practice',
    difficulty: 'easy',
    topic: 'Education',
    speaker: { name: 'Dr. Owen Hughes', gender: 'male', accent: 'en-GB' },
    transcript:
      "Many students prepare for exams by rereading their notes and highlighting key passages. It feels productive, because the material becomes familiar, but familiarity is not the same as being able to recall something when you need it. A more effective technique is retrieval practice, which simply means trying to bring information back to mind without looking at it. This might involve answering practice questions, writing down everything you remember about a topic, or explaining an idea to a friend. The effort of recalling strengthens the memory and also shows you clearly what you do not yet know, so you can focus your revision. It works best when it is spaced out over time rather than crammed into one evening. One caution: retrieval practice can feel harder and less pleasant than rereading, and some students give up because they mistake that difficulty for failure. In fact, the struggle is part of why it works.",
    question: 'Which of the following does the speaker say about retrieval practice?',
    options: [
      "It reveals gaps in a student's knowledge",
      'It is more effective when spread over time',
      'It feels easier than rereading notes',
      'It should replace answering practice questions',
      'Its difficulty can lead some students to abandon it',
      'It works only for students who study in groups',
    ],
    answers: [0, 1, 4],
    explanation:
      'The speaker says recalling "shows you clearly what you do not yet know" (gaps), that it "works best when it is spaced out over time", and that some students "give up" because it feels hard. Option C reverses the point: it feels harder, not easier. Answering practice questions is given as an example of retrieval practice, so it is not replaced by it, and group study is never required.',
  },
  {
    id: 'lmcm-003',
    task: 'lmcm',
    title: 'Remote work and city centres',
    difficulty: 'hard',
    topic: 'Society',
    speaker: { name: 'Jordan', gender: 'female', accent: 'en-US' },
    transcript:
      "The expansion of remote work has raised a question that urban economists are still debating: what happens to city centres when fewer people commute to them every day? On one side, there are clear losses. Cafes, sandwich shops and dry cleaners that depended on office workers have seen fewer customers, and public transport systems that rely on fare income face budget gaps. Some office buildings are now partly empty, which reduces their value and, in turn, the property taxes that cities collect. On the other hand, there may be opportunities. Converting surplus offices into housing could bring residents back into central districts, although such conversions are often technically difficult and expensive, because office floors are deep and may lack enough windows and plumbing. Meanwhile, neighbourhoods where remote workers live have seen more daytime activity, which has helped some local businesses outside the centre. The overall picture, then, is not simple decline but a redistribution of economic activity.",
    question: 'According to the speaker, which are consequences of increased remote work?',
    options: [
      'Reduced income for some public transport systems',
      'Lower property tax revenue from office buildings',
      'A rapid and inexpensive conversion of offices into housing',
      'More daytime activity in residential neighbourhoods',
      'The complete decline of city centres',
      'Higher rents for central office space',
    ],
    answers: [0, 1, 3],
    explanation:
      'Transport systems "face budget gaps" from lost fares, emptier offices reduce "property taxes", and residential neighbourhoods see "more daytime activity". Office conversion is described as "difficult and expensive", not rapid or cheap. The speaker explicitly rejects "simple decline", so "complete decline" over-generalises, and higher rents contradict the falling value of offices.',
  },
  {
    id: 'lmcm-004',
    task: 'lmcm',
    title: 'Seed banks',
    difficulty: 'medium',
    topic: 'Environment',
    speaker: { name: 'Prof. Arjun Mehta', gender: 'male', accent: 'en-IN' },
    transcript:
      "Seed banks are facilities that store seeds of crops and wild plants so that their genetic diversity is not lost. Seeds are usually dried carefully and then kept at very low temperatures, which slows their ageing and allows many species to remain viable for decades or even longer. Why go to this trouble? Farmers today rely on a relatively small number of crop varieties, and if a new disease or a change in climate affects those varieties, breeders may need traits found in older or wild relatives, such as resistance to drought or particular pests. Seed banks keep that genetic material available. They are not a perfect solution, though. Some plants produce seeds that cannot survive drying or freezing, and these must be conserved in other ways, for example as living plants in collections. Stored seeds also need to be tested and regrown from time to time to make sure they can still germinate.",
    question: 'Which statements are true according to the speaker?',
    options: [
      'Low temperatures help seeds remain viable for long periods',
      'Seed banks store only the seeds of commercial crops',
      'Wild relatives of crops may contain useful traits such as drought resistance',
      'All seeds can be preserved by drying and freezing',
      'Stored seeds never need to be checked once they are frozen',
      'Seed banks were originally designed to replace farming',
    ],
    answers: [0, 2],
    explanation:
      'Cold storage "slows their ageing" so seeds stay viable for decades, and breeders may need traits "found in older or wild relatives, such as resistance to drought". Seed banks store crops AND wild plants; some seeds "cannot survive drying or freezing"; and stored seeds must be "tested and regrown from time to time". Replacing farming is never mentioned.',
  },

  // ---------------------------------------------------------------- LFIB
  {
    id: 'lfib-001',
    task: 'lfib',
    title: 'Volcanic soils',
    difficulty: 'easy',
    topic: 'Science',
    speaker: { name: 'Dr. Fiona Grant', gender: 'female', accent: 'en-GB' },
    transcript:
      'Although volcanic eruptions can be [[destructive]], the land around many volcanoes is remarkably [[fertile]]. Over time, volcanic ash and rock break down into soil that is rich in [[minerals]] such as potassium and phosphorus. These nutrients support strong plant [[growth]], which is why farming communities have often settled on volcanic slopes despite the obvious [[risks]]. Today, scientists monitor active volcanoes closely, measuring gas emissions and ground movement, so that residents can be [[evacuated]] before a major eruption occurs.',
  },
  {
    id: 'lfib-002',
    task: 'lfib',
    title: 'Microfinance',
    difficulty: 'medium',
    topic: 'Economics',
    speaker: { name: 'Sophie', gender: 'female', accent: 'en-AU' },
    transcript:
      'Microfinance refers to the provision of small loans and other financial [[services]] to people who are usually excluded from traditional banking. Supporters argue that even a modest loan can allow someone to buy [[equipment]] or stock and start a small business. Early enthusiasm was considerable, but later research produced more [[mixed]] results. In many cases, loans helped households manage irregular [[income]] rather than dramatically reducing poverty. Today, most experts see microfinance as a useful [[tool]], but not a complete solution, and emphasise that savings accounts and insurance can be just as [[valuable]] as credit.',
  },
  {
    id: 'lfib-003',
    task: 'lfib',
    title: 'Roman roads',
    difficulty: 'medium',
    topic: 'History',
    speaker: { name: 'Prof. Lewis', gender: 'male', accent: 'en-US' },
    transcript:
      'The road network built by the Romans is one of the most [[impressive]] engineering achievements of the ancient world. Roads were constructed in layers, with large stones at the bottom and finer [[gravel]] above, which allowed rain to drain away and kept the surface [[stable]]. Although the roads were primarily built to move soldiers quickly, they soon became important for [[trade]] and communication as well. Many modern routes in Europe still follow the [[original]] paths, showing how lasting good infrastructure can be.',
  },
  {
    id: 'lfib-004',
    task: 'lfib',
    title: 'Fairness in speech recognition',
    difficulty: 'hard',
    topic: 'Technology',
    speaker: { name: 'Daniel', gender: 'male', accent: 'en-CA' },
    transcript:
      'Automatic speech recognition has improved [[dramatically]] over the past decade, largely because systems are now trained on enormous quantities of recorded speech. Even so, accuracy is not evenly [[distributed]]. Systems tend to perform best on accents and speaking styles that are well represented in their training data and less [[reliably]] on others. Background noise, overlapping speakers and specialised [[vocabulary]] create further difficulties. Developers are therefore collecting more [[diverse]] recordings and testing their systems across different groups of users, recognising that a tool which works well for some people but not others can quietly [[reinforce]] existing inequalities.',
  },
  {
    id: 'lfib-005',
    task: 'lfib',
    title: 'Why hand washing works',
    difficulty: 'easy',
    topic: 'Health',
    speaker: { name: 'Dr. Meera Iyer', gender: 'female', accent: 'en-IN' },
    transcript:
      'Washing hands with soap is one of the simplest and most [[effective]] ways to prevent the spread of infection. Soap works because its molecules attach to oils and dirt on the skin, which can carry [[germs]], and allow them to be rinsed away with water. Health authorities generally recommend scrubbing for around twenty [[seconds]], paying attention to the backs of the hands and between the fingers. Drying hands properly also [[matters]], since damp skin transfers microbes more easily. These habits are especially [[important]] before eating and after using public transport.',
  },

  // ---------------------------------------------------------------- HCS
  {
    id: 'hcs-001',
    task: 'hcs',
    title: 'Rewilding and beavers',
    difficulty: 'medium',
    topic: 'Environment',
    speaker: { name: 'Dr. Simon Clarke', gender: 'male', accent: 'en-GB' },
    transcript:
      'Rewilding is an approach to conservation that tries to restore natural processes rather than manage every detail of a landscape. Instead of deciding exactly which plants should grow where, rewilding projects might remove drainage channels so that wetlands can return, or reintroduce animals that once lived in the area, such as beavers. Beavers are a good example of why this matters. By building dams, they slow the flow of rivers, create ponds that support insects, fish and birds, and can even reduce flooding downstream. Critics point out that rewilding can conflict with farming, especially when reintroduced animals damage crops or trees, and that it needs the support of local communities to succeed. Supporters respond that, with careful planning and fair compensation, rewilding can benefit both wildlife and people.',
    options: [
      'Rewilding aims to restore natural processes, for example by reintroducing species such as beavers, whose dams can support wildlife and reduce flooding. Although it can conflict with farming and depends on local support, supporters believe careful planning and compensation can make it beneficial for both nature and people.',
      'Rewilding involves carefully deciding which plants should grow in each area of a landscape. Beavers are reintroduced because their dams speed up river flow, which prevents ponds from forming, and farmers generally welcome the approach because it protects their crops from damage.',
      'Beavers build dams that slow the flow of rivers and create ponds for insects, fish and birds. These ponds can also reduce flooding in areas further downstream, which makes beavers one of the most useful animals found in wetland environments.',
      'Rewilding is now accepted as the best conservation method everywhere, because returning any animal to its former habitat always improves the environment and reduces flooding, and it has no real disadvantages for farmers or local communities once projects begin.',
    ],
    answer: 0,
    explanation:
      'Option A covers the main idea (restoring natural processes), the beaver example, the criticism and the supporters\' response. B contains factual errors: rewilding avoids micromanaging plants, dams slow rivers, and farmers are described as a source of conflict. C only expands the beaver example and omits rewilding and the debate. D over-generalises ("everywhere", "always", "no real disadvantages"), ignoring the criticisms.',
  },
  {
    id: 'hcs-002',
    task: 'hcs',
    title: 'Who maintains open-source software?',
    difficulty: 'hard',
    topic: 'Technology',
    speaker: { name: 'Prof. Rachel Kim', gender: 'female', accent: 'en-US' },
    transcript:
      'Open-source software is software whose source code is made publicly available, so that anyone can read it, modify it and share their changes. This might sound like an unusual way to build technology, but much of the modern internet depends on it. Many web servers, programming languages and databases are open source. The model has clear strengths. Because many people can inspect the code, errors and security weaknesses may be found and fixed quickly, and organisations can adapt the software to their own needs without paying licence fees. However, there is a less visible problem. Some widely used projects are maintained by a handful of volunteers who receive little or no payment. When those maintainers burn out or move on, critical software can be left without anyone responsible for updates. For this reason, some companies and governments have begun funding maintainers directly.',
    options: [
      'Open-source software is code that can only be modified by the company that owns it. Because large paid teams maintain most projects, security problems are rare, and governments have recently stopped funding open-source developers because the model is now financially secure.',
      'Some software projects are maintained by a few volunteers who receive little or no payment for their work. When these people become exhausted or leave, nobody may be responsible for updating the software, which can create difficulties for the organisations that use it.',
      'Open-source software is publicly available code that anyone can inspect and adapt, and it supports much of the internet. Its strengths include quick error correction and no licence fees, but many important projects rely on a few unpaid volunteers, which has led some organisations to fund maintainers.',
      'Open-source software is always more secure than commercial software, since every line of code is checked by thousands of experts. As a result, all organisations should replace their existing systems with open-source alternatives, which are completely free to run and maintain.',
    ],
    answer: 2,
    explanation:
      'Option C captures the definition, the strengths, the hidden problem of unpaid maintainers and the response of funding them. A reverses key facts: the code is public, many projects rely on unpaid volunteers, and funding is starting, not stopping. B describes only the maintainer problem and omits what open-source software is and why it matters. D over-generalises with "always", "every line" and "all organisations", which the speaker never claims.',
  },
  {
    id: 'hcs-003',
    task: 'hcs',
    title: 'Raising bilingual children',
    difficulty: 'medium',
    topic: 'Education',
    speaker: { name: 'Dr. Anna Leblanc', gender: 'female', accent: 'en-CA' },
    transcript:
      'Parents sometimes worry that raising a child with two languages will cause confusion or delay. Research gives a more reassuring picture. Bilingual children may sometimes know fewer words in each individual language than monolingual children of the same age, but when the vocabulary of both languages is counted together, their total is typically similar. Mixing languages within a sentence, which some parents find alarming, is a normal part of bilingual development and often reflects skill rather than confusion. There is some evidence that managing two languages may strengthen certain attention skills, although researchers disagree about how large or consistent this advantage is. What seems most important is regular, meaningful exposure to both languages, through conversation, stories and play, rather than formal instruction alone.',
    options: [
      'Raising children with two languages always makes them more intelligent than monolingual children, because switching between languages improves all thinking skills. Parents should therefore introduce as many languages as possible from birth, since there are no disadvantages at any stage of development.',
      'Bilingual children usually know more words in each language than monolingual children, but mixing languages in a sentence is a sign of confusion that parents should correct. Formal lessons are the most effective way to help children learn two languages.',
      'Children who grow up with two languages sometimes combine words from both in a single sentence. Some parents find this worrying, but it is a common feature of language use and can show that the child is able to move between two systems.',
      'Research suggests a bilingual upbringing does not generally cause confusion: total vocabulary across both languages is similar to that of monolingual peers, and mixing languages is normal. Possible attention benefits are debated, and the key factor is regular, meaningful exposure to both languages.',
    ],
    answer: 3,
    explanation:
      'Option D summarises the reassuring research, the vocabulary and mixing points, the debated attention benefit and the importance of exposure. A over-generalises: the speaker says the attention advantage is disputed, not that bilingualism "always" raises intelligence. B gets the facts backwards on vocabulary, mixing and formal instruction. C focuses only on language mixing and leaves out the main message about confusion, vocabulary and exposure.',
  },
  {
    id: 'hcs-004',
    task: 'hcs',
    title: 'Antibiotic resistance',
    difficulty: 'easy',
    topic: 'Science',
    speaker: { name: 'Dr. Kate Morrison', gender: 'female', accent: 'en-AU' },
    transcript:
      'Antibiotics are medicines that kill bacteria or stop them from multiplying, and they have saved millions of lives. However, every time antibiotics are used, there is a chance that a few bacteria survive because they happen to carry a genetic change that protects them. These resistant bacteria can then multiply and spread. Over time, this makes some infections much harder to treat. Resistance is accelerated when antibiotics are used unnecessarily, for example to treat viral infections like colds, which antibiotics cannot cure, or when patients stop a prescribed course without medical advice. Large quantities of antibiotics are also used in farming. Tackling the problem requires several approaches at once: using existing drugs more carefully, improving hygiene to prevent infections, and investing in the development of new treatments.',
    options: [
      'Antibiotic resistance develops when bacteria with protective genetic changes survive treatment and spread. It is made worse by unnecessary use, such as for viral infections, and by use in farming, so it must be tackled through careful use, better hygiene and new treatments.',
      'Antibiotics are effective against both bacterial and viral infections, such as colds, but resistance develops when patients take too many different medicines. The problem can be solved simply by banning antibiotics in farming, since farm use is its only real cause.',
      'Antibiotics are medicines that either kill bacteria or prevent them from multiplying. Since their introduction, they have saved millions of lives and are widely used in hospitals and clinics, as well as in farming, where large quantities are given to animals.',
      'Because of resistance, antibiotics no longer work against any infections, and all bacteria have now developed genetic protection. Doctors have therefore stopped prescribing them, and the only remaining hope is that scientists will discover a completely different type of medicine.',
    ],
    answer: 0,
    explanation:
      'Option A explains how resistance arises, what speeds it up and the combined solutions. B is factually wrong: antibiotics cannot cure colds, and the speaker calls for several approaches, not one. C only describes what antibiotics are and omits resistance, the main topic. D over-generalises: the speaker says "some infections" are harder to treat, not that antibiotics have stopped working altogether.',
  },

  // ---------------------------------------------------------------- LMCS
  {
    id: 'lmcs-001',
    task: 'lmcs',
    title: 'Music in film',
    difficulty: 'easy',
    topic: 'Arts',
    speaker: { name: 'Marcus', gender: 'male', accent: 'en-US' },
    transcript:
      'Film music often works best when audiences barely notice it. A good soundtrack guides emotion without drawing attention to itself. Composers use simple techniques to do this. A rising melody can build anticipation, low sustained notes can create unease, and a sudden silence can be more powerful than any sound. Many films also attach a short musical theme to a particular character or idea, so that when the theme returns, the audience feels a connection even if they could not explain why. In this sense, the soundtrack is not decoration added at the end of production. It is part of the storytelling itself.',
    question: "What is the speaker's main point?",
    options: [
      'Film music is most memorable when it is loud and dramatic.',
      'Soundtracks are an integral part of how films tell stories.',
      'Audiences usually notice every musical theme in a film.',
      'Silence should be avoided in film soundtracks.',
    ],
    answer: 1,
    explanation:
      'The speaker concludes that the soundtrack "is part of the storytelling itself". Option A contradicts the idea that music works best when barely noticed. C is wrong because audiences feel a connection "even if they could not explain why". D reverses the point that silence can be very powerful.',
  },
  {
    id: 'lmcs-002',
    task: 'lmcs',
    title: 'The limits of plastic recycling',
    difficulty: 'medium',
    topic: 'Environment',
    speaker: { name: 'Dr. Lucy Barnes', gender: 'female', accent: 'en-GB' },
    transcript:
      'Recycling is often presented as the answer to plastic waste, but the reality is more complicated. Plastics come in many different types, and they generally cannot be mixed together during recycling without lowering the quality of the final material. Food residue and labels add further contamination. As a result, a large share of the plastic placed in recycling bins is never actually turned into new products. Even when plastic is recycled, it usually degrades a little each time, so it cannot be recycled indefinitely in the way that glass or aluminium can. For these reasons, many environmental scientists argue that the most effective strategy is to reduce the amount of single-use plastic produced in the first place, with recycling playing a supporting role.',
    question: 'According to the speaker, what is the most effective way to address plastic waste?',
    options: [
      'Improving the sorting of plastic types at recycling centres',
      'Replacing all plastic packaging with glass and aluminium',
      'Reducing the production of single-use plastic',
      'Recycling each plastic item as many times as possible',
      'Removing labels and food residue before recycling',
    ],
    answer: 2,
    explanation:
      'The speaker states that "the most effective strategy is to reduce the amount of single-use plastic produced in the first place". Sorting and removing contamination (A, E) relate to problems mentioned, but recycling is given only "a supporting role". Glass and aluminium (B) are mentioned only as a comparison, and D is impossible because plastic degrades each time it is recycled.',
  },
  {
    id: 'lmcs-003',
    task: 'lmcs',
    title: 'Railways and standard time',
    difficulty: 'medium',
    topic: 'History',
    speaker: { name: 'Ryan', gender: 'male', accent: 'en-CA' },
    transcript:
      'Before the nineteenth century, most towns set their clocks by the position of the sun, which meant that noon in one town might be several minutes different from noon in a town just a short distance to the east or west. For most of history this caused few problems, because people rarely travelled fast enough to notice. The arrival of the railways changed that. Timetables became confusing when every station used its own local time, and the risk of collisions on shared tracks made accurate scheduling essential. Railway companies therefore began to adopt a single standard time across their networks, and governments later followed, eventually leading to the system of time zones that most of the world uses today.',
    question: 'Why, according to the speaker, did standard time become necessary?',
    options: [
      'Towns wanted to compete with each other over accurate clocks.',
      'Faster rail travel made differences in local time a practical problem.',
      'Governments needed a way to collect taxes on the same day.',
      "Scientists discovered that the sun's position was unreliable.",
    ],
    answer: 1,
    explanation:
      'Local time differences only mattered once trains made people travel fast enough to notice them; confusing timetables and collision risk made a single time essential. The other options are never mentioned. Note also that railway companies acted first and governments "later followed", so governments were not the original driver.',
  },
  {
    id: 'lmcs-004',
    task: 'lmcs',
    title: 'Loneliness as a health issue',
    difficulty: 'hard',
    topic: 'Health',
    speaker: { name: 'Dr. Rohan Kapoor', gender: 'male', accent: 'en-IN' },
    transcript:
      'Loneliness is often treated as a private emotional matter, but public health researchers increasingly regard it as a health issue in its own right. Long-term studies have found associations between persistent loneliness and a higher risk of conditions such as heart disease and depression. It is important to interpret these findings carefully. Loneliness is not the same as being alone; some people live alone and feel well connected, while others feel lonely despite being surrounded by people. What appears to matter is the gap between the relationships a person wants and the ones they actually have. This is why interventions that simply increase contact, without improving the quality of relationships, often have limited effect.',
    question: "Which statement best reflects the speaker's view of loneliness?",
    options: [
      'It is mainly caused by living alone.',
      'It can be cured simply by increasing social contact.',
      'It depends on the gap between desired and actual relationships.',
      'It has been proven to directly cause heart disease.',
      'It is purely a private emotional matter.',
    ],
    answer: 2,
    explanation:
      'The speaker says "what appears to matter is the gap between the relationships a person wants and the ones they actually have". D is tempting, but the speaker describes "associations" and warns us to interpret them carefully, which is not proof of direct cause. A and B are explicitly rejected, and E is the older view the speaker argues against.',
  },

  // ---------------------------------------------------------------- SMW
  {
    id: 'smw-001',
    task: 'smw',
    title: 'Moving glaciers',
    difficulty: 'easy',
    topic: 'Science',
    speaker: { name: 'Liam', gender: 'male', accent: 'en-AU' },
    transcript:
      'Glaciers may look completely still, but they are actually in constant motion. The enormous weight of the ice causes it to deform and slide slowly downhill, sometimes by only a few centimetres a day and sometimes much faster. As a glacier moves, it scrapes and grinds the rock beneath it, carving out deep valleys and carrying stones and sediment over long distances. In other words, glaciers are not frozen in place but are, in fact, slow-moving',
    missing: 'rivers of ice',
    options: ['rivers of ice', 'blocks of stone', 'clouds of vapour', 'lakes of water'],
    answer: 0,
  },
  {
    id: 'smw-002',
    task: 'smw',
    title: 'Price elasticity',
    difficulty: 'medium',
    topic: 'Economics',
    speaker: { name: 'Prof. Nina Alvarez', gender: 'female', accent: 'en-US' },
    transcript:
      'When the price of a product rises, people usually buy less of it, but the size of that reaction varies. For goods with few substitutes, such as basic fuel or essential medicines, people tend to keep buying almost the same amount because they have little choice. For luxury goods or products with many close alternatives, even a small price increase can lead buyers to switch elsewhere. Economists describe this sensitivity as price elasticity, and it helps explain why governments often prefer to tax products whose demand',
    missing: 'changes very little',
    options: ['grows very quickly', 'changes very little', 'varies a great deal', 'is entirely seasonal'],
    answer: 1,
  },
  {
    id: 'smw-003',
    task: 'smw',
    title: 'Feedback that helps learning',
    difficulty: 'medium',
    topic: 'Education',
    speaker: { name: 'Dr. Hannah Lewis', gender: 'female', accent: 'en-GB' },
    transcript:
      'For many years, classroom feedback mostly took the form of a grade at the top of a piece of work. Research on learning suggests that grades on their own do relatively little to help students improve, because they tell learners where they stand without explaining what to do next. Comments that identify specific strengths and point to concrete next steps are generally more useful, especially when students are given time to act on them. The key idea is that feedback should look forward rather than',
    missing: 'simply judging the past',
    options: ['praising every student', 'replacing the teacher', 'focusing on handwriting', 'simply judging the past'],
    answer: 3,
  },
  {
    id: 'smw-004',
    task: 'smw',
    title: 'Cooling data centres',
    difficulty: 'hard',
    topic: 'Technology',
    speaker: { name: 'Ananya', gender: 'female', accent: 'en-IN' },
    transcript:
      'Data centres, the buildings that house the servers behind cloud computing, consume large amounts of electricity, and a significant part of that energy is used not for computing but for cooling. Engineers have experimented with many solutions, from locating facilities in cold climates to using outside air or nearby water instead of conventional air conditioning. Some companies also try to schedule flexible computing tasks for times when renewable electricity is plentiful. Together, these approaches show that the environmental cost of digital services depends not only on how much we compute but also on',
    missing: 'where and when we compute',
    options: ['how fast our phones are', 'which websites we prefer', 'where and when we compute', 'how many passwords we use'],
    answer: 2,
  },
  {
    id: 'smw-005',
    task: 'smw',
    title: 'Community gardens',
    difficulty: 'easy',
    topic: 'Society',
    speaker: { name: 'Megan', gender: 'female', accent: 'en-CA' },
    transcript:
      'Community gardens are spaces where local residents share land to grow vegetables, fruit and flowers. Beyond providing fresh food, they give neighbours a reason to meet regularly, exchange skills and look after a shared place together. Studies of such gardens often find that participants report feeling more connected to their area and more willing to get involved in other local activities. So, while a community garden may begin as a simple plot of land, it often ends up growing',
    missing: 'a stronger community',
    options: ['more expensive housing', 'a stronger community', 'fewer local events', 'larger private farms'],
    answer: 1,
  },

  // ---------------------------------------------------------------- HIW
  {
    id: 'hiw-001',
    task: 'hiw',
    title: 'The value of wetlands',
    difficulty: 'easy',
    topic: 'Environment',
    speaker: { name: 'Prof. Alan Reid', gender: 'male', accent: 'en-GB' },
    transcript:
      'Wetlands are among the most productive ecosystems on the planet. They filter pollutants from water, provide breeding grounds for fish and birds, and store large amounts of carbon in their soils. During heavy rain, wetlands act like natural sponges, absorbing excess water and releasing it slowly, which helps to protect nearby towns from flooding. Unfortunately, many wetlands have been drained for agriculture or development, and restoring them is now a priority for conservation groups in many countries.',
    changes: [
      { index: 5, shown: 'protective' },
      { index: 16, shown: 'feeding' },
      { index: 27, shown: 'calcium' },
      { index: 45, shown: 'slightly,' },
      { index: 70, shown: 'property' },
    ],
  },
  {
    id: 'hiw-002',
    task: 'hiw',
    title: 'Benefits of exercise',
    difficulty: 'medium',
    topic: 'Health',
    speaker: { name: 'Dr. Sarah Bennett', gender: 'female', accent: 'en-US' },
    transcript:
      'Regular physical activity benefits almost every system in the body. It strengthens the heart, improves the way muscles use oxygen, and helps to regulate blood sugar. Exercise also has measurable effects on mental health, reducing symptoms of anxiety and improving the quality of sleep. Importantly, the benefits are not limited to intense workouts. Even moderate activity, such as brisk walking for half an hour on most days, can make a meaningful difference over time.',
    changes: [
      { index: 23, shown: 'elevate' },
      { index: 29, shown: 'memorable' },
      { index: 51, shown: 'indoor' },
      { index: 58, shown: 'brief' },
      { index: 70, shown: 'minimal' },
    ],
  },
  {
    id: 'hiw-003',
    task: 'hiw',
    title: 'Clocks in medieval towns',
    difficulty: 'medium',
    topic: 'History',
    speaker: { name: 'Dr. Emma Walsh', gender: 'female', accent: 'en-AU' },
    transcript:
      'The invention of the mechanical clock transformed daily life in medieval Europe. Before clocks became common, the day was divided according to the sun and the ringing of church bells, and the length of an hour could change with the seasons. Public clocks in town squares gradually introduced a more precise and uniform sense of time. Merchants used them to organise markets, and workers increasingly had their labour measured in hours rather than in tasks completed.',
    changes: [
      { index: 6, shown: 'informed' },
      { index: 19, shown: 'decided' },
      { index: 40, shown: 'reasons.' },
      { index: 50, shown: 'precious' },
      { index: 67, shown: 'leisure' },
    ],
  },
  {
    id: 'hiw-004',
    task: 'hiw',
    title: 'Encryption and privacy',
    difficulty: 'hard',
    topic: 'Technology',
    speaker: { name: 'Dr. Vikram Nair', gender: 'male', accent: 'en-IN' },
    transcript:
      'Encryption is the process of converting information into a code so that only authorised people can read it. When you send a message through a secure application, the text is scrambled on your device and can only be unscrambled by the intended recipient, who holds the correct key. This protects personal data from criminals, but it also creates tension with law enforcement agencies, which sometimes argue that they need access to encrypted communications in order to investigate serious crimes.',
    changes: [
      { index: 5, shown: 'conveying' },
      { index: 30, shown: 'scribbled' },
      { index: 41, shown: 'interested' },
      { index: 58, shown: 'attention' },
      { index: 76, shown: 'instigate' },
    ],
  },
  {
    id: 'hiw-005',
    task: 'hiw',
    title: 'Participatory budgeting',
    difficulty: 'medium',
    topic: 'Society',
    speaker: { name: 'Prof. Mark Taylor', gender: 'male', accent: 'en-CA' },
    transcript:
      'Many cities are experimenting with a policy known as participatory budgeting, in which residents vote directly on how part of the public budget should be spent. Proposals might include repairing playgrounds, improving street lighting or creating new bike lanes. Supporters say the process increases trust in local government and encourages people who rarely engage in politics to take part. Critics note, however, that participation is often uneven, and the residents who attend meetings may not represent the whole community.',
    changes: [
      { index: 3, shown: 'experiencing' },
      { index: 15, shown: 'daily' },
      { index: 29, shown: 'preparing' },
      { index: 44, shown: 'interest' },
      { index: 52, shown: 'really' },
      { index: 66, shown: 'unknown,' },
    ],
  },

  // ---------------------------------------------------------------- WFD
  {
    id: 'wfd-001', task: 'wfd', title: 'Survey results', difficulty: 'easy', topic: 'Education',
    sentence: 'Survey results will be shared with participants once the analysis is complete.',
    speaker: { name: 'Lecturer', gender: 'female', accent: 'en-GB' },
  },
  {
    id: 'wfd-002', task: 'wfd', title: 'Rising sea levels', difficulty: 'medium', topic: 'Environment',
    sentence: 'Coastal communities are adapting to rising sea levels in a variety of ways.',
    speaker: { name: 'Lecturer', gender: 'male', accent: 'en-US' },
  },
  {
    id: 'wfd-003', task: 'wfd', title: 'Choosing a research topic', difficulty: 'medium', topic: 'Education',
    sentence: 'Students are encouraged to consult their supervisor before choosing a research topic.',
    speaker: { name: 'Tutor', gender: 'female', accent: 'en-AU' },
  },
  {
    id: 'wfd-004', task: 'wfd', title: 'Growth and living conditions', difficulty: 'hard', topic: 'Economics',
    sentence: 'Economic growth alone does not guarantee better living conditions for everyone.',
    speaker: { name: 'Lecturer', gender: 'male', accent: 'en-IN' },
  },
  {
    id: 'wfd-005', task: 'wfd', title: 'Contemporary sculpture', difficulty: 'medium', topic: 'Arts',
    sentence: 'The museum has recently expanded its collection of contemporary sculpture.',
    speaker: { name: 'Guide', gender: 'female', accent: 'en-CA' },
  },
  {
    id: 'wfd-006', task: 'wfd', title: 'Daily exercise', difficulty: 'easy', topic: 'Health',
    sentence: 'Even short periods of daily exercise can have lasting benefits for health.',
    speaker: { name: 'Lecturer', gender: 'male', accent: 'en-GB' },
  },
  {
    id: 'wfd-007', task: 'wfd', title: 'Letters as evidence', difficulty: 'medium', topic: 'History',
    sentence: 'Historians often rely on personal letters to understand everyday life in the past.',
    speaker: { name: 'Lecturer', gender: 'female', accent: 'en-US' },
  },
  {
    id: 'wfd-008', task: 'wfd', title: 'Online platforms', difficulty: 'easy', topic: 'Technology',
    sentence: 'Online platforms have transformed how small businesses reach their customers.',
    speaker: { name: 'Presenter', gender: 'male', accent: 'en-AU' },
  },
  {
    id: 'wfd-009', task: 'wfd', title: 'Repeating experiments', difficulty: 'hard', topic: 'Science',
    sentence: 'The experiment was repeated several times to ensure the accuracy of the findings.',
    speaker: { name: 'Lecturer', gender: 'female', accent: 'en-IN' },
  },
  {
    id: 'wfd-010', task: 'wfd', title: 'Public transport', difficulty: 'medium', topic: 'Society',
    sentence: 'Reliable public transport can ease traffic congestion in rapidly growing cities.',
    speaker: { name: 'Lecturer', gender: 'male', accent: 'en-CA' },
  },
];
