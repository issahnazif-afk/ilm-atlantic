import type { Item } from '../types';

// Original PTE Academic listening items, set 2 (SST, LMCM, HCS, LMCS).
// Transcripts are written as natural spoken language for browser text-to-speech.

export const pteAListening2: Item[] = [
  // ---------------------------------------------------------------- SST
  {
    id: "sst-005",
    task: "sst",
    title: "Desire paths",
    difficulty: "medium",
    topic: "Society",
    speaker: { name: "Dr. Tom Gallagher", gender: "male", accent: "en-AU" },
    transcript:
      "Anyone who has walked across a university campus has probably noticed narrow strips of worn grass cutting across the lawns, usually linking two doorways, or a building and a bus stop. Planners call these desire paths, and they turn out to be a surprisingly useful source of information. A desire path forms when enough people decide that the official route is too long or inconvenient and choose their own way instead. Over time the grass dies back and a visible track appears. Traditionally, many institutions treated these tracks as a nuisance. They put up fences, planted hedges or added signs asking people to keep off the grass. The results were often disappointing, because people simply found another shortcut nearby. More recently, some planners have taken the opposite approach. Instead of fighting the paths, they wait to see where they appear and then pave them. A few campuses have even opened new grounds with very few fixed paths, allowing students to walk freely for a term or two before deciding where the permanent walkways should go. The lesson extends well beyond landscaping. Desire paths reveal the gap between how designers expect people to behave and how people actually behave. When the two disagree, it is usually more effective to adapt the design to real behaviour than to try to force people to change their habits.",
    keyPoints: [
      "Desire paths are informal tracks worn by people who reject inconvenient official routes",
      "Blocking them with fences, hedges or signs usually failed because people found other shortcuts",
      "Some planners now observe where paths form and then pave them, or delay building fixed paths",
      "Broader lesson: design should adapt to how people actually behave",
    ],
    modelAnswer:
      "The speaker explains that desire paths are informal tracks worn into grass when people reject inconvenient official routes. Institutions traditionally tried to block them with fences, hedges and signs, usually without success, but some planners now observe where paths form and then pave them. The broader lesson is that designs work better when they adapt to how people actually behave rather than forcing new habits.",
  },
  {
    id: "sst-006",
    task: "sst",
    title: "How tardigrades survive drying out",
    difficulty: "hard",
    topic: "Science",
    speaker: { name: "Dr. Priya Nair", gender: "female", accent: "en-IN" },
    transcript:
      "Tardigrades, sometimes called water bears, are microscopic animals that usually measure less than a millimetre in length. They live in damp places such as moss, leaf litter and the sediment of lakes and oceans, and they have become famous for surviving conditions that would kill almost any other animal. The key to much of this resilience is a process known as cryptobiosis. When its surroundings dry out, a tardigrade pulls in its head and legs and curls into a compact, barrel-shaped form often referred to as a tun. In this state it loses most of the water in its body, and its metabolism slows to a level so low that it can be difficult to detect at all. Scientists are still working out exactly how cells survive this, because removing water normally causes proteins and membranes to collapse and break apart. One line of research suggests that tardigrades produce special proteins that form a kind of glass-like protective matrix inside their cells, holding delicate structures in place until water returns. When the animal is rehydrated, it can resume normal activity, sometimes within minutes or hours. It is important not to exaggerate, however. Tardigrades are not indestructible, and in their active state they are fairly fragile. Their toughness depends on entering the dormant state first. Understanding that mechanism could eventually help researchers develop better ways to store vaccines and other medicines without refrigeration.",
    keyPoints: [
      "Tardigrades are microscopic animals known for surviving extreme conditions",
      "Cryptobiosis: they curl into a tun, lose most of their water and almost stop their metabolism",
      "Special proteins may form a glass-like matrix that protects cell structures until rehydration",
      "They are fragile when active; the mechanism could help store medicines without refrigeration",
    ],
    modelAnswer:
      "The lecturer describes tardigrades, microscopic animals that survive extreme conditions mainly through cryptobiosis. When their environment dries, they curl into a tun, lose most of their water and nearly stop their metabolism, while special proteins may form a glass-like matrix protecting their cells. However, they are fragile when active, and understanding this mechanism could help researchers store medicines without refrigeration.",
  },
  {
    id: "sst-007",
    task: "sst",
    title: "Printing and English spelling",
    difficulty: "medium",
    topic: "History",
    speaker: { name: "Prof. Alan Whitaker", gender: "male", accent: "en-GB" },
    transcript:
      "Before the printing press arrived in England in the late fifteenth century, written English was remarkably inconsistent. Scribes copied texts by hand, and they generally spelled words the way they pronounced them in their own region. The same word might appear in several different forms, sometimes even on the same page. Printing did not fix this problem overnight, but it changed the conditions in a fundamental way. First, it made it possible to produce hundreds of identical copies of a text, so a single spelling could now reach readers across the whole country. Second, printers tended to be concentrated in a few large centres, especially London, and the forms of English used there gradually gained prestige. Interestingly, early printers were not always a force for consistency. Some of them adjusted spellings, adding or dropping letters, simply to make lines of text fit neatly on the page, and a few of the odd spellings we still use may date from this period. The more decisive standardisation came later, through grammars, schoolbooks and especially dictionaries in the eighteenth century, which presented one spelling as the correct one. Meanwhile, pronunciation kept changing. That is one major reason why modern English spelling so often seems poorly matched to the way words actually sound.",
    keyPoints: [
      "Hand-copied English was spelled inconsistently, following regional pronunciation",
      "Printing spread identical copies widely and gave prestige to London forms",
      "Early printers sometimes changed spellings to make lines fit",
      "Stronger standardisation came from eighteenth-century dictionaries; pronunciation kept changing, so spelling and sound diverged",
    ],
    modelAnswer:
      "The speaker explains that hand-copied English was spelled inconsistently according to regional pronunciation. Printing allowed identical copies to circulate widely and gave prestige to London forms, although printers sometimes altered spellings to fit lines. Stronger standardisation came later through eighteenth-century grammars and dictionaries, but because pronunciation continued to change, modern spelling often fails to match how words sound.",
  },
  {
    id: "sst-008",
    task: "sst",
    title: "Default options and retirement saving",
    difficulty: "medium",
    topic: "Economics",
    speaker: { name: "Dr. Laura Bennett", gender: "female", accent: "en-US" },
    transcript:
      "Traditional economic models assume that people make careful, deliberate choices about their own interests. Saving for retirement is a useful test of that assumption. In many workplace pension schemes, employees used to be offered the chance to join, but they had to fill in a form to do so. Even when the employer offered to add money to their savings, a large share of workers never signed up. When asked, most of them did not say they had decided against saving. They simply hadn't got round to it. Several countries and companies have responded by reversing the default. Under automatic enrolment, new employees are placed in the pension scheme from the start, and anyone who wants to leave must actively opt out. Nobody is forced to save, and the choices available are exactly the same. Yet participation typically rises sharply, often to a large majority of eligible workers. Behavioural economists explain this through a combination of inertia, procrastination and the feeling that a default option is a kind of recommendation. There are limits, though. If the default contribution rate is set too low, people may stay at that low level for years, assuming it must be enough. So defaults are powerful, but they need to be designed carefully, because the option chosen for people becomes, in practice, the option most of them keep.",
    keyPoints: [
      "Retirement saving challenges the assumption that people choose deliberately",
      "When joining required a form, many workers never enrolled, through inaction rather than decision",
      "Automatic enrolment with opt-out raises participation sharply because of inertia and perceived recommendation",
      "Low default contribution rates can persist, so defaults must be designed carefully",
    ],
    modelAnswer:
      "The speaker argues that pension saving challenges the assumption that people choose deliberately. When joining required a form, many workers never enrolled through inaction rather than decision. Automatic enrolment, which offers the same choices but requires opting out, typically raises participation sharply because of inertia and perceived recommendation. However, low default contribution rates can persist, so defaults must be designed carefully.",
  },
  {
    id: "sst-009",
    task: "sst",
    title: "Endangered languages",
    difficulty: "easy",
    topic: "Linguistics",
    speaker: { name: "Dr. Anne Tremblay", gender: "female", accent: "en-CA" },
    transcript:
      "Linguists estimate that roughly seven thousand languages are spoken in the world today, but they are very unevenly distributed. A small number of major languages are used by most of the world's population, while thousands of others have only a few thousand speakers, or even fewer. Many of these smaller languages are considered endangered. A language usually becomes endangered not because people suddenly stop speaking it, but because parents stop passing it on to their children. This often happens when another language is linked to schooling, jobs and social status, so families decide that their children will have better opportunities if they grow up speaking the dominant language. When a language disappears, the loss is more than a list of words. Languages carry knowledge about local plants, animals and landscapes, as well as stories, songs and particular ways of describing the world. That is why documentation projects are so important. Researchers work with speakers to record conversations, build dictionaries and write grammars. However, recording alone cannot keep a language alive. The most successful revival efforts are led by communities themselves, through things like language nests for young children, immersion schools and the use of the language in media and public life.",
    keyPoints: [
      "About seven thousand languages exist, but thousands have very few speakers and many are endangered",
      "Languages become endangered when parents stop passing them on, often for economic and social reasons",
      "Losing a language means losing local knowledge, stories and worldviews",
      "Documentation helps, but revival depends on community-led efforts such as immersion schools",
    ],
    modelAnswer:
      "The speaker explains that of about seven thousand languages, thousands have few speakers and many are endangered, mainly because parents stop passing them on when another language offers better opportunities. Losing a language means losing local knowledge, stories and worldviews. Documentation through recordings, dictionaries and grammars helps, but successful revival depends on community-led efforts such as immersion schools and media use.",
  },
  {
    id: "sst-010",
    task: "sst",
    title: "Why batteries wear out",
    difficulty: "hard",
    topic: "Technology",
    speaker: { name: "Dr. Kevin Ortiz", gender: "male", accent: "en-US" },
    transcript:
      "Most of us have noticed that a phone or laptop holds less charge after a couple of years. That loss of capacity isn't necessarily a sign of a faulty product. It's built into the chemistry of lithium-ion batteries. Inside the battery, lithium ions move between two electrodes, the anode and the cathode, as it charges and discharges. Ideally, every ion would make that journey indefinitely. In practice, small side reactions gradually consume some of the lithium. For example, a thin layer called the solid electrolyte interphase forms on the surface of the anode. This layer is actually necessary, because it protects the electrode, but it keeps growing slowly over the battery's life, trapping lithium that can no longer carry charge. At the same time, the electrode materials expand and contract with each cycle, which can create tiny cracks. Several factors speed up this ageing. High temperatures accelerate the unwanted reactions, and keeping a battery at full charge for long periods places extra stress on it, as does charging very quickly. That's why some devices now offer settings that stop charging at around eighty percent, or delay the final stage of charging until just before you usually unplug. For electric vehicles, managing these factors matters even more, because the battery is the most expensive part of the car, and its lifespan affects both cost and environmental impact.",
    keyPoints: [
      "Capacity loss is a normal result of lithium-ion chemistry, not usually a fault",
      "Side reactions, such as growth of a protective layer on the anode, trap lithium; electrodes also crack as they expand and contract",
      "Heat, long periods at full charge and fast charging accelerate ageing",
      "Devices limit charging to reduce stress; this matters especially for expensive electric vehicle batteries",
    ],
    modelAnswer:
      "The speaker explains that lithium-ion batteries lose capacity because of their chemistry. Side reactions, especially the slow growth of a protective layer on the anode, trap lithium, while repeated expansion and contraction cracks the electrodes. Heat, prolonged full charge and fast charging accelerate this ageing, so devices now limit charging, which is particularly important for expensive electric vehicle batteries.",
  },

  // ---------------------------------------------------------------- LMCM
  {
    id: "lmcm-005",
    task: "lmcm",
    title: "How limestone caves form",
    difficulty: "medium",
    topic: "Science",
    speaker: { name: "Dr. Fiona Grant", gender: "female", accent: "en-GB" },
    transcript:
      "Most large caves form in limestone, and the process depends on a surprisingly weak acid. As rain falls through the air and then soaks through the soil, it absorbs carbon dioxide, much of it released by plant roots and decaying organic matter. This creates a mild carbonic acid. Limestone is made largely of calcium carbonate, which this acidic water slowly dissolves as it seeps along cracks and joints in the rock. Over many thousands of years, those narrow cracks widen into passages and chambers. Inside the cave, the process can partly reverse. When water carrying dissolved minerals drips from the ceiling, it releases some carbon dioxide into the cave air, and calcium carbonate is deposited again. This is how stalactites grow downwards from the ceiling and stalagmites grow upwards from the floor. Because they form so slowly, these features are easily damaged, which is why many show caves ask visitors not to touch them.",
    question: "Which of the following statements are supported by the speaker?",
    options: [
      "Soil adds carbon dioxide to rainwater as it soaks into the ground.",
      "Caves form mainly where fast-flowing water breaks rock apart by force.",
      "Cave passages develop by widening existing cracks in the rock.",
      "Stalactites grow upwards from the floor of the cave.",
      "Stalagmites grow more quickly than stalactites.",
      "Touching cave formations helps to preserve them.",
    ],
    answers: [0, 2],
    explanation:
      "A is correct: rainwater absorbs carbon dioxide from the soil, released by roots and decaying matter. C is correct: acidic water seeps along cracks and joints, which widen into passages. B is tempting because water is involved, but the speaker describes chemical dissolving, not physical force. D swaps the two features: stalactites grow down from the ceiling. E compares growth rates, which the speaker never does, and F reverses the advice not to touch the formations.",
  },
  {
    id: "lmcm-006",
    task: "lmcm",
    title: "Understanding the placebo effect",
    difficulty: "hard",
    topic: "Health",
    speaker: { name: "Prof. Daniel Reyes", gender: "male", accent: "en-US" },
    transcript:
      "The placebo effect is often described as people being fooled into feeling better, but the reality is more interesting. When patients receive an inactive treatment, such as a sugar pill, some of them report real improvements, especially in symptoms like pain, nausea and fatigue, which are strongly influenced by the brain. Part of this is expectation: believing a treatment will work can change how the body processes signals such as pain. Part of it is the context of care itself, including the time and attention a clinician gives. However, researchers caution that not all apparent improvement is a placebo response. Many conditions get better naturally over time, and symptoms that are unusually severe when someone seeks help often become less severe afterwards anyway, a pattern known as regression to the mean. Importantly, placebos rarely change the underlying course of serious disease. That's why new drugs are tested against placebos in controlled trials: a medicine has to do better than the expectation and natural recovery that the placebo group also experiences.",
    question: "According to the speaker, which factors can help explain improvements in patients given a placebo?",
    options: [
      "Hidden active ingredients in sugar pills",
      "Patients' expectations about the treatment",
      "Permanent changes to the course of serious disease",
      "Conditions improving naturally over time",
      "The time and attention given by a clinician",
      "Doctors exaggerating results in their reports",
    ],
    answers: [1, 3, 4],
    explanation:
      "B (expectation), D (natural improvement and regression to the mean) and E (the context of care, including a clinician's attention) are all given as explanations. C is the most tempting distractor, but the speaker says placebos rarely change the underlying course of serious disease. A contradicts the definition of a placebo as an inactive treatment, and F is never mentioned.",
  },
  {
    id: "lmcm-007",
    task: "lmcm",
    title: "Keeping cool before air conditioning",
    difficulty: "medium",
    topic: "Architecture",
    speaker: { name: "Dr. Arjun Mehta", gender: "male", accent: "en-IN" },
    transcript:
      "Long before air conditioning, builders in hot, dry regions developed effective ways to keep homes comfortable. One strategy was thermal mass. Thick walls of stone or mud brick absorb heat slowly during the day, so the interior stays cool, and then release that heat at night, when temperatures in desert areas can fall sharply. Many houses were also arranged around a central courtyard. Shaded for much of the day, and sometimes containing a small pool or plants, the courtyard holds cooler air that can flow into the surrounding rooms. In parts of the Middle East and South Asia, builders added wind catchers, tall towers that capture breezes above street level and direct them down into the building. Windows were often small and placed high up, limiting direct sunlight while allowing hot air to escape. Architects today are revisiting these ideas, not as decoration, but because combining them with modern materials can greatly reduce the energy needed for cooling.",
    question: "Which of the following does the speaker say traditional buildings used to stay cool?",
    options: [
      "Towers that direct breezes down into the building",
      "Large windows that let in as much air as possible",
      "Thick walls that absorb heat slowly",
      "White paint on all exterior surfaces",
      "Shaded courtyards that hold cooler air",
      "Underground water pipes beneath each room",
    ],
    answers: [0, 2, 4],
    explanation:
      "A describes the wind catchers, C describes thermal mass, and E describes courtyards: all three are explicitly mentioned. B is the tempting distractor because windows are discussed, but the speaker says they were small and placed high up to limit sunlight. White paint (D) and underground pipes (F) are never mentioned; the only water referred to is an occasional pool in the courtyard.",
  },
  {
    id: "lmcm-008",
    task: "lmcm",
    title: "Why children say 'goed'",
    difficulty: "easy",
    topic: "Linguistics",
    speaker: { name: "Dr. Megan Hall", gender: "female", accent: "en-AU" },
    transcript:
      "Parents are sometimes surprised when a child who has been saying 'went' correctly for months suddenly starts saying 'goed' instead. It can look as if the child's English is getting worse, but linguists see it as a sign of progress. In the early stages, children often learn common irregular forms like 'went' or 'mice' as individual words, simply copying what they hear. Later, they begin to notice general patterns, such as the regular past tense ending or the plural ending. Once they discover a rule, they apply it everywhere, even to words that are exceptions. Nobody teaches them to say 'goed' or 'mouses', because adults don't use these forms. So the mistakes show that children are actively building rules rather than just imitating. Eventually, by hearing the correct forms many times, they learn the exceptions again, and the errors fade without any special correction.",
    question: "What does the speaker suggest about errors such as 'goed'?",
    options: [
      "They show that the child's language is developing.",
      "They are usually copied from adults.",
      "They need careful correction by parents.",
      "They show that the child is applying a general rule.",
      "They appear before children have learned any irregular forms.",
    ],
    answers: [0, 3],
    explanation:
      "A is correct because linguists see these errors as \"a sign of progress\", and D is correct because children who discover a rule \"apply it everywhere, even to words that are exceptions\". B is the most tempting distractor, but the speaker says adults don't use these forms, so children cannot be copying them. C is contradicted: the errors fade \"without any special correction\". E reverses the order, since children use forms like 'went' first.",
  },
  {
    id: "lmcm-009",
    task: "lmcm",
    title: "Supermarket layout",
    difficulty: "easy",
    topic: "Business",
    speaker: { name: "Ryan", gender: "male", accent: "en-CA" },
    transcript:
      "If you've ever popped into a supermarket for milk and left with a full basket, the layout of the store may be partly responsible. Retailers think carefully about where products are placed. Everyday essentials such as milk, eggs and bread are often located towards the back or sides of the store, so shoppers have to walk past many other products to reach them. Items that stores particularly want to sell are frequently placed at eye level, while cheaper alternatives may sit on lower shelves. The ends of aisles are valuable spaces too, and they're often used for promotions. Near the checkout, you'll usually find small, inexpensive items like snacks and drinks, which people pick up while they wait. Not every store follows the same approach, and some shoppers deliberately use a list to resist these influences. But understanding the design can help you notice when your choices are being guided.",
    question: "Which strategies does the speaker say stores use to influence shoppers?",
    options: [
      "Offering free samples near the entrance",
      "Placing essential items away from the entrance",
      "Playing slow music to keep customers in the store",
      "Placing small, cheap items near the checkout",
      "Reducing prices at the end of each day",
      "Putting the products they most want to sell at eye level",
    ],
    answers: [1, 3, 5],
    explanation:
      "B, D and F are all described: essentials are placed at the back or sides, small items sit by the checkout, and preferred products are at eye level. E may be tempting because the speaker mentions promotions at the ends of aisles, but end-of-day price reductions are never discussed. Free samples (A) and music (C) are not mentioned at all.",
  },
  {
    id: "lmcm-010",
    task: "lmcm",
    title: "Finding planets around other stars",
    difficulty: "hard",
    topic: "Science",
    speaker: { name: "Dr. Isobel Reid", gender: "female", accent: "en-GB" },
    transcript:
      "Planets around other stars are extremely hard to see directly, because they are faint and lost in the glare of the star they orbit. So astronomers usually detect them indirectly. The transit method looks for tiny, regular dips in a star's brightness, which happen when a planet passes in front of the star from our point of view. The size of the dip indicates the size of the planet relative to the star, and the time between dips gives the length of its orbit. The radial velocity method takes a different approach. As a planet orbits, its gravity makes the star wobble slightly, towards us and then away. That motion shifts the star's light very slightly towards blue and then towards red, and the size of the shift tells astronomers about the planet's mass. Each method has biases. Both find large planets close to their stars more easily, and transits can only be seen when the orbit happens to line up with our line of sight. Combining the two, however, lets astronomers estimate a planet's density, and so infer whether it is likely to be rocky or gaseous.",
    question: "According to the speaker, what information can the methods described provide about a planet?",
    options: [
      "Its size compared with its star",
      "The temperature of its surface",
      "Its mass",
      "Whether its atmosphere contains water",
      "How long it takes to orbit its star",
      "The exact age of its planetary system",
      "The number of moons orbiting it",
    ],
    answers: [0, 2, 4],
    explanation:
      "The depth of a transit dip gives the planet's size relative to the star (A), the time between dips gives the length of the orbit (E), and the radial velocity shift indicates mass (C). B and D may be tempting because the speaker discusses whether planets are rocky or gaseous, but that is inferred from density; surface temperature and water are never mentioned. Age (F) and moons (G) are not discussed.",
  },

  // ---------------------------------------------------------------- HCS
  {
    id: "hcs-005",
    task: "hcs",
    title: "Ocean acidification",
    difficulty: "medium",
    topic: "Environment",
    speaker: { name: "Dr. Liam Walsh", gender: "male", accent: "en-AU" },
    transcript:
      "The oceans absorb a substantial share of the carbon dioxide that human activity releases into the atmosphere. In one sense that's helpful, because it slows the rate of warming. But it comes at a cost. When carbon dioxide dissolves in seawater, it forms carbonic acid, and the ocean becomes slightly more acidic. This process, known as ocean acidification, also reduces the amount of carbonate available in the water. Many marine organisms, including oysters, mussels, corals and some types of plankton, need carbonate to build their shells and skeletons. In more acidic conditions they have to spend more energy doing this, and their young can struggle to survive. Some shellfish farms already monitor water chemistry closely and adjust when they raise young shellfish. And because plankton sit near the base of marine food webs, scientists are concerned that the effects could spread well beyond shellfish.",
    options: [
      "Shellfish farms have begun to monitor water chemistry because sea temperatures are rising quickly. Warmer water makes oysters and mussels grow faster, but it also means farmers must change when they raise young shellfish to avoid losing their harvest.",
      "The ocean absorbs carbon dioxide, which slows warming but makes seawater more acidic and reduces available carbonate. This makes it harder for organisms such as shellfish, corals and plankton to build shells, threatening their young and possibly affecting wider marine food webs.",
      "Because the ocean absorbs carbon dioxide, it stops global warming completely. The resulting acidity increases the amount of carbonate in the water, which helps corals and shellfish build stronger skeletons and supports plankton at the base of the food chain.",
      "Plankton are found near the base of marine food webs, so any change in their numbers can affect many other species. Scientists are therefore studying plankton closely to understand how ocean food webs may change over the coming decades.",
    ],
    answer: 1,
    explanation:
      "B covers the full chain: absorption, acidification and loss of carbonate, the effect on shell-building organisms, and the wider food-web concern. A is tempting because it mentions shellfish farms, but it blames temperature, which the speaker does not discuss. C reverses two key facts: absorption only slows warming, and acidification reduces carbonate. D expands one final detail and omits the main process.",
  },
  {
    id: "hcs-006",
    task: "hcs",
    title: "Flexibility and security in platform work",
    difficulty: "medium",
    topic: "Society",
    speaker: { name: "Prof. Nina Carter", gender: "female", accent: "en-US" },
    transcript:
      "Platform work, sometimes called the gig economy, includes jobs such as delivering food, driving for ride-hailing apps or completing short online tasks. Its supporters emphasise flexibility. Workers can often choose when and how much they work, which suits students, carers and people looking to top up another income. For businesses, platforms make it easy to match supply and demand almost instantly. Critics, however, point to what that flexibility can cost. Many platform workers are classified as independent contractors rather than employees, which in many countries means they may not receive sick pay, paid holidays or pension contributions. Their earnings can also be unpredictable, since they depend on demand and on algorithms that workers don't control. Courts and governments in several countries are now debating whether some of these workers should be treated as employees, or whether a new category of worker is needed that combines flexibility with basic protections.",
    options: [
      "Platform work is mainly done by students who want to earn extra money. Because they can choose their own hours, they receive the same sick pay and holiday benefits as employees, and governments have agreed that no further regulation is needed.",
      "Algorithms decide how much platform workers earn, which makes their income unpredictable. As a result, many workers have left platform jobs, and businesses now struggle to match supply and demand for services such as food delivery and ride-hailing.",
      "Critics argue that platform work should be banned because it offers no flexibility and pays less than traditional jobs. Courts in several countries have already ruled that all platform workers must become full-time employees with fixed working hours.",
      "Platform work offers flexibility that suits many workers and helps businesses match demand, but because workers are often classed as contractors they may lack benefits and stable earnings. Governments and courts are therefore considering employee status or a new category of worker.",
    ],
    answer: 3,
    explanation:
      "D balances both sides: the flexibility supporters praise, the missing benefits and unpredictable pay critics highlight, and the current legal debate. B is the most tempting because it repeats a real detail about algorithms, but its claims that workers have left and businesses are struggling are invented. A contradicts the point that contractors may lack sick pay and holidays. C exaggerates: the speaker describes an ongoing debate, not a ban or final rulings.",
  },
  {
    id: "hcs-007",
    task: "hcs",
    title: "Is more choice always better?",
    difficulty: "hard",
    topic: "Psychology",
    speaker: { name: "Dr. Oliver Byrne", gender: "male", accent: "en-GB" },
    transcript:
      "It seems obvious that more choice is better. If a shop offers fifty options instead of five, surely customers are more likely to find exactly what they want. Yet some experiments in psychology have suggested the opposite: when people face a very large number of options, they may be less likely to choose anything at all, and less satisfied with what they do choose. This idea is known as choice overload. The explanation usually offered is that comparing many options takes effort, and it increases the chance of regret, since there's always an alternative that might have been better. However, later attempts to repeat these findings have produced mixed results. In some studies the effect is strong; in others it disappears entirely. Researchers now think choice overload depends on circumstances, for example when options are hard to compare, when people don't know what they want, or when they're under time pressure. So the useful question is not whether choice is good or bad, but when it becomes a burden.",
    options: [
      "Although more choice seems beneficial, some studies suggest that many options can discourage decisions and reduce satisfaction, because comparison is effortful and invites regret. Since later findings have been mixed, researchers now see the effect as depending on conditions such as complexity, uncertainty and time pressure.",
      "Psychological research has proven that people always prefer fewer options. Shops that reduce the number of products they sell consistently increase their sales, so businesses should offer no more than five options to stop customers feeling regret about their purchases.",
      "Choice overload only happens when people are under time pressure. When shoppers are in a hurry, they compare fewer products and therefore feel more satisfied, which shows that having many options is only a problem for people with plenty of time.",
      "Comparing many options takes effort and increases the chance of regret. This is because people know there may always be a better alternative, so they often feel less satisfied with the products that they eventually buy from shops.",
    ],
    answer: 0,
    explanation:
      "A includes the original claim, its explanation, the mixed replication results and the conclusion that the effect depends on circumstances. D is the most tempting because everything in it is accurate, but it covers only the explanation and leaves out the mixed evidence and the speaker's conclusion. B overstates the research as proven and universal, ignoring the mixed results. C wrongly makes time pressure the only cause and invents a link to satisfaction.",
  },
  {
    id: "hcs-008",
    task: "hcs",
    title: "The benefits of crop rotation",
    difficulty: "easy",
    topic: "Agriculture",
    speaker: { name: "Dr. Kavya Rao", gender: "female", accent: "en-IN" },
    transcript:
      "Crop rotation means growing different crops on the same field in a planned sequence over several seasons, rather than planting the same crop year after year. Farmers have used it for centuries, and it still has clear benefits. One reason is soil nutrients. Different crops take different nutrients from the soil, and some crops, such as beans, peas and clover, actually add nitrogen, because bacteria living in their roots can capture nitrogen from the air. Planting these crops can reduce the amount of fertiliser needed for the next crop. Rotation also helps control pests and diseases. Many pests attack only one type of plant, so when that crop disappears from the field for a season, their numbers fall. The main challenge is that rotation needs careful planning, and farmers may earn less in the years when they grow lower-value crops.",
    options: [
      "Farmers today mainly use crop rotation because beans and peas are more profitable than other crops. Growing them every year on the same field adds nitrogen to the soil and completely removes the need for chemical fertilisers and pest control.",
      "Bacteria in the roots of plants such as beans, peas and clover can take nitrogen from the air. This adds nutrients to the soil, so these crops are often grown by farmers who want to use less fertiliser on their fields.",
      "Crop rotation, a long-established practice of changing crops on a field over time, protects soil nutrients, with legumes adding nitrogen, and reduces pests that depend on a single crop. However, it requires careful planning and may lower farmers' income in some years.",
      "Crop rotation is a modern technique that requires farmers to plant only one crop at a time. It is easy to plan and always increases income, although it can increase the number of pests and diseases that attack plants in the field.",
    ],
    answer: 2,
    explanation:
      "C gives the definition, both benefits (nutrients and pest control) and the drawback. B is tempting because it is accurate, but it only describes the nitrogen detail and never explains crop rotation itself. A contradicts the definition by growing the same crops every year and exaggerates the benefits. D calls rotation modern and easy, and reverses its effect on pests and income.",
  },
  {
    id: "hcs-009",
    task: "hcs",
    title: "How radiocarbon dating works",
    difficulty: "medium",
    topic: "History",
    speaker: { name: "Dr. Sarah MacLeod", gender: "female", accent: "en-CA" },
    transcript:
      "Radiocarbon dating allows archaeologists to estimate the age of materials that were once alive, such as wood, bone, seeds and charcoal. While an organism is alive, it takes in carbon from its environment, including a small amount of a radioactive form called carbon fourteen. When it dies, it stops taking in new carbon, and the carbon fourteen it contains begins to decay at a steady, known rate. Roughly half of it disappears about every five thousand seven hundred years. By measuring how much remains, scientists can estimate when the organism died. The method has limits, though. It can't date stone or metal directly, and after around fifty thousand years too little carbon fourteen remains to measure reliably. Also, the amount of carbon fourteen in the atmosphere has varied over time, so raw results have to be calibrated against other records, such as tree rings.",
    options: [
      "Radiocarbon dating measures carbon fourteen in stone and metal objects. Because the amount of carbon fourteen in the atmosphere has always remained constant, the results are completely accurate and do not need to be checked against any other kind of record.",
      "Carbon fourteen decays at a steady rate, with about half of it disappearing roughly every five thousand seven hundred years. Living organisms keep taking in carbon until they die, after which the amount in their bodies slowly begins to fall.",
      "Radiocarbon dating can estimate the age of any archaeological object up to several million years old. Scientists measure how much carbon an object has gained since it was made and compare this figure with tree rings found nearby.",
      "Radiocarbon dating estimates when once-living material died by measuring how much carbon fourteen, which decays at a known rate, remains. It cannot date stone, metal or material older than about fifty thousand years, and results must be calibrated because atmospheric levels have varied.",
    ],
    answer: 3,
    explanation:
      "D states what the method dates, how it works and all three limitations. B is the most tempting because its facts are correct, but it explains only the decay process and leaves out the purpose and limits of the method. A says the method dates stone and metal and that atmospheric levels were constant, both contradicted. C exaggerates the age range and wrongly says objects gain carbon.",
  },
  {
    id: "hcs-010",
    task: "hcs",
    title: "Protected bike lanes",
    difficulty: "easy",
    topic: "Urban Planning",
    speaker: { name: "Jason", gender: "male", accent: "en-US" },
    transcript:
      "Many cities want more people to cycle, because cycling reduces traffic, pollution and the cost of getting around. But surveys in a number of cities suggest that a large group of residents are interested in cycling yet worried about safety, particularly about sharing the road with fast-moving cars. Painted bike lanes, which are simply lines on the road, do little to reassure these people. Protected lanes, which are separated from traffic by curbs, posts or parked cars, tend to make a much bigger difference. When cities build connected networks of these lanes, cycling often increases, and not only among confident riders. However, these projects can be controversial. Local businesses sometimes worry about losing parking spaces, and drivers may object to narrower roads. Planners say that involving residents early and sharing clear information can reduce this resistance.",
    options: [
      "Most residents already cycle confidently in city traffic, so painted bike lanes are usually enough. Cities that build protected lanes find that cycling rates stay the same, and local businesses generally welcome the loss of parking spaces near their shops.",
      "Many people would cycle but fear traffic, and painted lanes do little to reassure them. Connected networks of physically protected lanes tend to increase cycling, although they can face opposition over parking and road space, which planners try to reduce through early consultation.",
      "Cycling reduces traffic, pollution and transport costs, which is why many cities want more people to cycle. Cities often run campaigns to encourage residents to choose bicycles instead of cars for short journeys around their local area.",
      "Protected bike lanes are separated from traffic by curbs, posts or parked cars. Because they are expensive, planners usually build only a few short sections, and drivers prefer them because they make roads wider and reduce congestion.",
    ],
    answer: 1,
    explanation:
      "B covers the safety concern, the difference between painted and protected lanes, the effect of connected networks and the controversy with its proposed solution. C is tempting because its first sentence matches the opening, but the rest (campaigns) is never mentioned and it omits the main argument. A contradicts the survey findings and the business concerns. D invents the cost point and reverses drivers' objection to narrower roads.",
  },

  // ---------------------------------------------------------------- LMCS
  {
    id: "lmcs-005",
    task: "lmcs",
    title: "How migratory birds navigate",
    difficulty: "medium",
    topic: "Science",
    speaker: { name: "Dr. Marc Gagnon", gender: "male", accent: "en-CA" },
    transcript:
      "Every year, many migratory birds travel thousands of kilometres and still arrive at the same breeding grounds. How do they manage it? The answer seems to be that they don't rely on a single sense. Many species appear able to detect the Earth's magnetic field, which gives them a kind of internal compass. Birds that migrate at night can also orient themselves using the pattern of the stars, while daytime migrants may use the position of the sun. As they get closer to their destination, familiar landmarks such as coastlines and mountain ranges, and possibly even smells, become more important. Researchers think it's this combination of cues, each acting as a backup for the others, that makes bird navigation so reliable.",
    question: "What is the speaker's main point about bird navigation?",
    options: [
      "Birds rely mainly on the Earth's magnetic field.",
      "Night-time migrants navigate better than daytime migrants.",
      "Birds combine several sources of information to find their way.",
      "Landmarks are the most important cue throughout a migration.",
      "Scientists have no idea how birds navigate.",
    ],
    answer: 2,
    explanation:
      "C reflects the speaker's conclusion that a \"combination of cues, each acting as a backup for the others\" makes navigation reliable. A is the most tempting because the magnetic sense is mentioned first, but it is presented as one cue among several. D is wrong because landmarks matter mainly near the destination, B makes a comparison the speaker never makes, and E ignores the explanations given.",
  },
  {
    id: "lmcs-006",
    task: "lmcs",
    title: "What peer review can and cannot do",
    difficulty: "easy",
    topic: "Education",
    speaker: { name: "Dr. Emma Lawson", gender: "female", accent: "en-GB" },
    transcript:
      "When a researcher submits an article to an academic journal, it usually goes through a process called peer review. The editor sends the article to other experts in the same field, who read it carefully and comment on its quality. They might ask whether the methods are appropriate, whether the conclusions are supported by the data, and whether important earlier work has been ignored. The authors are often asked to revise the article before it can be accepted. Peer review is not a guarantee that a study is correct. Reviewers can't usually repeat the experiments themselves, and they can miss errors. But it does act as an important filter, improving the quality of what gets published.",
    question: "According to the speaker, what is one limitation of peer review?",
    options: [
      "Reviewers are usually not experts in the field.",
      "Reviewers generally do not repeat the experiments themselves.",
      "Articles are rarely revised after they have been reviewed.",
      "It takes many years for an article to be reviewed.",
    ],
    answer: 1,
    explanation:
      "B is correct: the speaker says reviewers \"can't usually repeat the experiments themselves\". A is tempting because it sounds like a common criticism, but the speaker says the reviewers are \"experts in the same field\". C is contradicted, since authors are often asked to revise, and D mentions a timescale the speaker never discusses.",
  },
  {
    id: "lmcs-007",
    task: "lmcs",
    title: "Paint tubes and painting outdoors",
    difficulty: "medium",
    topic: "Arts",
    speaker: { name: "Prof. Grace Miller", gender: "female", accent: "en-US" },
    transcript:
      "We often explain artistic movements in terms of ideas, but technology can matter too. In the early nineteenth century, painters who wanted to work outdoors faced a practical problem. Oil paints were usually stored in small pouches made from animal bladders, which were awkward to carry and tended to burst or dry out. In the eighteen forties, the collapsible metal paint tube was invented, and soon paint could be bought ready-made and carried easily. Around the same time, new railway lines made it simpler to travel from the city to the countryside and the coast. The Impressionist painters later took full advantage of these changes, working outside to capture shifting light and weather. Of course, tubes didn't create Impressionism, but they made its way of working far more practical.",
    question: "What is the speaker's main purpose?",
    options: [
      "To argue that Impressionism was invented by the makers of paint tubes",
      "To show how practical developments helped make an artistic approach possible",
      "To compare the quality of paint stored in bladders and in tubes",
      "To explain why Impressionist painters disliked working in studios",
    ],
    answer: 1,
    explanation:
      "B matches the opening claim that \"technology can matter too\" and the conclusion that tubes made the Impressionists' way of working \"far more practical\". A is the most tempting distractor, but the speaker explicitly says tubes \"didn't create Impressionism\". C focuses on a minor detail about storage, and D attributes an attitude to the painters that the speaker never describes.",
  },
  {
    id: "lmcs-008",
    task: "lmcs",
    title: "Managing shared resources",
    difficulty: "medium",
    topic: "Economics",
    speaker: { name: "Dr. Chloe Ward", gender: "female", accent: "en-AU" },
    transcript:
      "Imagine a fishing ground that's open to everyone. Each fisher gets the full benefit of every extra fish they catch, but the cost of overfishing, a smaller fish population in future, is shared by everyone. So each person has an incentive to catch as much as possible, even though, collectively, this can lead to the collapse of the stock. Economists often call this a tragedy of the commons. For a long time it was assumed that the only solutions were government control or private ownership. However, studies of real communities have shown a third possibility. Many local groups of fishers, farmers and herders have managed shared resources successfully for generations, using their own rules about who can take what and when, along with ways of monitoring and penalising those who break them.",
    question: "What does the speaker suggest about shared resources?",
    options: [
      "Communities can sometimes manage them successfully through their own rules.",
      "They will always be destroyed unless the government takes control.",
      "Private ownership is the most effective way to protect them.",
      "Individual users rarely have an incentive to take more than they need.",
    ],
    answer: 0,
    explanation:
      "A reflects the \"third possibility\" the speaker highlights: local groups using their own rules, monitoring and penalties. B is tempting because it echoes the older assumption, but the speaker presents that view as incomplete. C is also only one of the traditional solutions and is not ranked as the best. D contradicts the explanation that each fisher has an incentive to catch as much as possible.",
  },
  {
    id: "lmcs-009",
    task: "lmcs",
    title: "Expansion joints",
    difficulty: "easy",
    topic: "Engineering",
    speaker: { name: "Rohan", gender: "male", accent: "en-IN" },
    transcript:
      "If you look closely at a long bridge, you'll often see metal strips with gaps or interlocking teeth crossing the road surface. These are expansion joints, and they solve a simple but important problem. Most materials expand when they get hotter and contract when they cool down. On a long steel or concrete bridge, these small changes add up, so the structure may be noticeably longer on a hot summer afternoon than on a cold winter night. If the bridge had no room to move, the forces created could crack the concrete or bend the supports. Expansion joints give the structure space to grow and shrink safely. Similar gaps are used in railway tracks, pavements and large buildings.",
    question: "What is the main purpose of expansion joints, according to the speaker?",
    options: [
      "To make the road surface less slippery for vehicles",
      "To connect separate bridges into one structure",
      "To strengthen bridges against heavy traffic",
      "To let structures change length with temperature without being damaged",
    ],
    answer: 3,
    explanation:
      "D is correct: the joints \"give the structure space to grow and shrink safely\" as temperatures change. C is tempting because the joints do prevent damage, but the speaker links that damage to heat and cold, not to traffic loads. A and B describe functions that are never mentioned.",
  },
  {
    id: "lmcs-010",
    task: "lmcs",
    title: "Birdsong in noisy cities",
    difficulty: "hard",
    topic: "Environment",
    speaker: { name: "Prof. Hugh Bennett", gender: "male", accent: "en-GB" },
    transcript:
      "Cities are noisy places, and most of that noise is low in pitch: traffic, construction and machinery all produce a constant rumble. For birds, which depend on song to defend territory and attract mates, this creates a problem, because their songs can be masked by background noise. Researchers comparing urban and rural populations of several species have found that city birds often sing with a higher minimum pitch, which may help their songs stand out against low-frequency noise. Some birds also sing more loudly, or shift their singing to quieter times, such as earlier in the morning. What's still debated is how these changes arise. They may be adjustments learned by individual birds, or, over many generations, they could reflect evolutionary change. And higher songs may carry a cost, since in some species females appear to prefer lower songs.",
    question: "Which of the following best reflects the speaker's view of changes in urban birdsong?",
    options: [
      "They are clearly the result of evolution over many generations.",
      "They mainly occur because birds are attracted to the sound of traffic.",
      "They have no effect on how well birds communicate.",
      "They show that city birds are healthier than rural birds.",
      "They may help birds be heard, although their causes and costs are still uncertain.",
    ],
    answer: 4,
    explanation:
      "E captures both the likely benefit (standing out against low-frequency noise) and the speaker's caution about whether the changes are learned or evolved and whether they reduce attractiveness to females. A is the most tempting, but the speaker presents evolution as only one possibility that is \"still debated\". B and D are never suggested, and C contradicts the idea that higher songs help birds be heard.",
  },
];
