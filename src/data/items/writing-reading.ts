import type { Item } from '../types';

// Original practice content for Writing (SWT, WE) and Reading (RWFIB, MCM, ROP, RFIB, MCS).
// All passages, prompts and model answers are written for Ilm Atlantic.

export const writingReadingItems: Item[] = [
  // ======================= Summarize Written Text =======================
  {
    id: "swt-001",
    task: "swt",
    title: "Cooling cities with trees",
    difficulty: "easy",
    topic: "Environment",
    passage:
      "Cities are usually warmer than the countryside that surrounds them, a pattern known as the urban heat island effect. Asphalt, concrete and roofing materials absorb sunlight during the day and release the stored heat slowly at night, while vehicles, air conditioners and industrial activity add further warmth. As a result, residents of dense neighbourhoods can experience night-time temperatures several degrees higher than people living only a short distance away. This difference matters because high night-time temperatures prevent the body from recovering after hot days, which increases the risk of heat-related illness, particularly among older people and those with chronic health conditions. Planting trees is one of the most widely recommended responses. A mature tree cools its surroundings in two ways: its canopy shades pavements and buildings, preventing surfaces from heating up in the first place, and its leaves release water vapour, a process that draws heat from the surrounding air. Streets lined with trees are therefore noticeably cooler than exposed streets, and shaded buildings may need less energy for air conditioning. However, trees are not a quick or simple solution. Young trees take many years to grow a canopy large enough to make a measurable difference, and they need regular watering, space for their roots and protection from damage. Moreover, tree cover in many cities is unevenly distributed, with wealthier districts often enjoying far more shade than poorer ones. Planners increasingly argue that new planting should prioritise the neighbourhoods where heat exposure is greatest and where residents have the fewest other ways to keep cool.",
    keyPoints: [
      "Cities are warmer than surrounding areas because built surfaces and human activity trap heat (urban heat island).",
      "Hot nights are a health risk, especially for older and chronically ill people.",
      "Trees cool streets through shade and the release of water vapour.",
      "Trees are slow to mature, need care and are unevenly distributed, so planting should target the most exposed, poorest areas.",
    ],
    modelAnswer:
      "Cities are warmer than surrounding areas because built surfaces and human activity trap heat, which endangers vulnerable residents, and although trees cool streets through shade and evaporation, they take years to mature, need maintenance and are unevenly distributed, so planting should prioritise the most heat-exposed and least-resourced neighbourhoods.",
  },
  {
    id: "swt-002",
    task: "swt",
    title: "Sleep and memory",
    difficulty: "medium",
    topic: "Health",
    passage:
      "For much of the twentieth century, sleep was widely regarded as a passive state in which the brain simply rested. Research over recent decades has overturned this view. During sleep, the brain remains highly active, and one of its most important tasks appears to be the consolidation of memory: the process by which new and fragile information is stabilised and integrated with existing knowledge. Experiments typically compare people who learn material and then sleep with people who learn the same material and remain awake for an equivalent period. In many such studies, participants who have slept recall more of what they learned, and the benefit is not explained simply by the wakeful group being tired. Different stages of sleep seem to contribute in different ways. Deep, slow-wave sleep has been linked to the retention of facts and events, whereas rapid eye movement sleep may play a larger role in emotional memory and in certain kinds of skill learning, although the exact division of labour is still debated. These findings have practical implications, particularly for students. The common habit of staying up late to revise before an examination may be counterproductive if it shortens the sleep needed to secure what has been studied. Spreading study over several days, with adequate sleep in between, is likely to produce more durable learning than a single intensive session. Nevertheless, researchers caution that sleep cannot rescue learning that never took place: it strengthens memories that were properly encoded, but it is not a substitute for attentive study.",
    keyPoints: [
      "Sleep is an active state that consolidates memory, not mere rest.",
      "People who sleep after learning tend to recall more; different sleep stages may support different kinds of memory.",
      "Students should spread revision over several days and sleep adequately rather than stay up late.",
      "Sleep only strengthens material that was properly learned; it cannot replace study.",
    ],
    modelAnswer:
      "Rather than being a passive state, sleep actively consolidates memory, with studies showing that people who sleep after learning recall more and that different sleep stages may support different memory types, which suggests that students should spread revision and sleep adequately, although sleep only strengthens material that was properly studied.",
  },
  {
    id: "swt-003",
    task: "swt",
    title: "Railways and standard time",
    difficulty: "hard",
    topic: "History",
    passage:
      "Before the nineteenth century, most communities kept their own local time, set by the position of the sun. When the sun reached its highest point, it was noon, and because this moment occurs slightly earlier in the east than in the west, towns only a short distance apart kept clocks that differed by several minutes. For centuries the discrepancy hardly mattered; travel was slow, and a traveller arriving by coach could simply adjust a watch on arrival. The spread of the railways changed this situation fundamentally. Trains moved quickly enough for the differences between local times to become a source of real confusion, and timetables that listed departures in a dozen different local times were difficult to read and easy to misinterpret. More seriously, on lines where trains shared a single track, an error about the time could lead to collisions. Railway companies in Britain therefore began to operate according to a single reference time, typically that of London, and many towns gradually adjusted their public clocks to match, even before the change was given legal force. The adoption of standard time illustrates a broader pattern in the history of technology. A new system of transport or communication does not merely speed up existing activities; it can also demand new forms of coordination and, in doing so, reshape habits that once seemed natural. What had been a local matter, decided by the sun overhead, became a shared convention set by institutions far away, and the idea that everyone in a region should read the same time came to seem obvious.",
    keyPoints: [
      "Towns once kept local solar time, which differed slightly from place to place.",
      "Fast rail travel made these differences confusing and potentially dangerous.",
      "British railways adopted a single London-based time, and towns gradually followed before it became law.",
      "New technologies can require coordination that turns local customs into shared conventions.",
    ],
    modelAnswer:
      "Because local solar time varied between towns, the speed of railways made these differences confusing and dangerous, so British railway companies adopted a single London-based time that towns gradually followed, illustrating how new technologies can demand coordination and turn local customs into shared, institutionally set conventions.",
  },
  {
    id: "swt-004",
    task: "swt",
    title: "The power of default options",
    difficulty: "medium",
    topic: "Economics",
    passage:
      "Traditional economic models assume that people make choices by carefully weighing costs and benefits. In practice, however, many decisions are shaped by the way options are presented, and one of the most powerful influences is the default: the outcome that occurs if a person does nothing. Because changing a default requires effort, attention and sometimes a degree of confidence, a large proportion of people simply accept whatever option has been pre-selected for them. Workplace pension schemes provide a well-known example. When employees must actively sign up to join a scheme, participation is often low, even among workers who say they intend to save for retirement. When the arrangement is reversed, so that employees are enrolled automatically but remain free to leave, participation tends to rise sharply. The financial incentives are identical in both cases; only the default has changed. Several governments have used this insight when designing national savings policies. Supporters argue that well-chosen defaults help people achieve goals they already hold without restricting their freedom, since anyone can opt out. Critics, however, raise two concerns. First, a default that suits the average person may be inappropriate for individuals with unusual circumstances, such as those with high debts, who might be better off not saving at that moment. Second, the power to set defaults is also the power to steer behaviour, and it can be used to serve the interests of an organisation rather than those of the people it affects. For this reason, many researchers argue that the design of defaults should be transparent and open to public scrutiny.",
    keyPoints: [
      "People tend to accept pre-selected default options because changing them takes effort.",
      "Automatic pension enrolment raises participation even though incentives are unchanged.",
      "Supporters say defaults help people reach their goals while preserving choice.",
      "Critics warn defaults may not suit everyone and can be misused, so their design should be transparent.",
    ],
    modelAnswer:
      "Defaults strongly shape decisions because people tend to accept pre-selected options, as automatic pension enrolment shows by raising participation without changing incentives, yet while supporters say defaults preserve choice, critics warn that they may not suit everyone and can be misused, so their design should be transparent.",
  },

  // ======================= Write Essay =======================
  {
    id: "we-001",
    task: "we",
    title: "Homework in primary schools",
    difficulty: "easy",
    topic: "Education",
    prompt:
      "Some educators argue that homework should be abolished in primary schools because it causes stress for young children without significantly improving their learning. To what extent do you agree or disagree with this view? Support your opinion with reasons and relevant examples.",
    keyIdeas: [
      "Long, repetitive tasks cause stress and family conflict",
      "Homework can widen inequality between children with and without parental support",
      "Short tasks such as reading and number practice consolidate classroom learning",
      "Homework builds independence and time-management habits for secondary school",
      "Reform (time limits, homework clubs) rather than abolition",
    ],
    modelAnswer:
      "Homework has long been a routine part of schooling, yet its value for young children is increasingly questioned. While I accept that excessive homework can be harmful, I disagree that it should be abolished entirely in primary schools; instead, it should be limited and purposeful.\n\nCritics make a fair point about stress. When young pupils are given long, repetitive tasks, evenings that should be spent playing, reading for pleasure or sleeping become a source of conflict between parents and children. Moreover, homework can widen inequality, because children whose parents have the time and education to help them gain an advantage over those who complete tasks alone.\n\nHowever, abolishing homework would remove a valuable opportunity. Short, well-designed tasks, such as reading with a family member for fifteen minutes or practising multiplication facts, allow children to consolidate what they have learned in class. They also help pupils develop habits of independence and time management that will be essential in secondary school, where the volume of independent work rises considerably.\n\nThe solution, therefore, lies in reform rather than removal. Schools could set clear time limits appropriate to each age group, focus on reading and practice rather than projects that depend on parental help, and provide homework clubs for pupils who lack a quiet place to work at home. In this way, the benefits of homework can be retained while its most damaging effects are reduced.\n\nIn conclusion, although poorly planned homework can create stress and unfairness, it should not be abandoned altogether. Limited, purposeful tasks, supported by schools, can strengthen learning without overwhelming young children.",
  },
  {
    id: "we-002",
    task: "we",
    title: "Working from home",
    difficulty: "medium",
    topic: "Technology",
    prompt:
      "Since video-conferencing tools became widely available, many employers have allowed staff to work from home for part or all of the week. Some people believe this is a positive development for both workers and organisations, while others argue that it weakens collaboration and workplace culture. Discuss both views and give your own opinion.",
    keyIdeas: [
      "No commute saves time, money and stress",
      "Employers can recruit from a wider area and save on office space",
      "Informal conversations and spontaneous ideas are harder online",
      "Junior staff learn by observing experienced colleagues",
      "Isolation and weaker connection to organisational goals",
      "Hybrid model: focused work at home, collaboration in the office",
    ],
    modelAnswer:
      "Advances in communication technology have made it possible for many office employees to work away from a central workplace. This change has divided opinion, and while both sides raise valid points, I believe that a flexible combination of remote and office-based work offers the greatest benefits.\n\nSupporters of remote work emphasise its advantages for employees. Removing the daily commute saves time and money and can reduce stress, giving workers more energy for both their jobs and their families. Employers may benefit as well, since they can recruit talented staff from a wider geographical area and may need less expensive office space.\n\nOn the other hand, critics argue that some valuable aspects of work are difficult to reproduce online. Informal conversations in corridors often lead to new ideas, and junior employees learn a great deal simply by observing experienced colleagues. When everyone works from home, these opportunities may disappear, and staff can feel isolated or disconnected from the goals of the organisation.\n\nIn my view, these positions are not incompatible. Many tasks that require concentration, such as writing reports or analysing data, can be done efficiently at home, whereas planning, training and creative discussion benefit from face-to-face contact. Organisations that schedule shared office days for collaborative work, while allowing focused work to happen remotely, can therefore enjoy the strengths of both approaches.\n\nTo conclude, remote work brings real gains in flexibility and efficiency, but it also risks weakening collaboration and learning. A carefully planned hybrid model, in which the purpose of each office day is clear, is the most sensible way forward.",
  },
  {
    id: "we-003",
    task: "we",
    title: "Free entry to museums",
    difficulty: "medium",
    topic: "Arts",
    prompt:
      "In a number of countries, public museums and art galleries no longer charge visitors an entrance fee and are funded instead through taxation and donations. What are the advantages and disadvantages of this policy? Support your answer with relevant reasons and examples.",
    keyIdeas: [
      "Wider access for low-income families, students and young people",
      "Repeat and spontaneous visits become possible",
      "Dependence on unreliable public budgets and donors",
      "Funding cuts can affect staffing, opening hours and conservation",
      "Overcrowding at popular free attractions",
      "Mixed model: free permanent collections, paid special exhibitions",
    ],
    modelAnswer:
      "Public museums and galleries hold collections that are often described as belonging to the whole nation. Removing entrance fees is one way of making that claim a reality. This policy has clear advantages, although it also creates some financial and practical difficulties.\n\nThe most important benefit is wider access. When entry is free, families on low incomes, students and young people can visit without worrying about cost, and they can return many times rather than treating a visit as a rare, expensive outing. Free admission also encourages spontaneous visits; a person passing a gallery during a lunch break may decide to look at a single painting, something they would be unlikely to do if they had to buy a ticket.\n\nHowever, the policy has drawbacks. Without ticket income, museums depend heavily on government budgets and private donors, both of which can be unreliable. When public funding is reduced, institutions may be forced to cut staff, shorten opening hours or postpone the conservation of fragile objects. In addition, popular free attractions can become overcrowded, which makes it harder for visitors to enjoy the works on display and may increase the risk of damage.\n\nThese problems can be partly managed. Museums can charge for special exhibitions while keeping their permanent collections free, and they can introduce timed entry at the busiest periods.\n\nIn conclusion, free admission makes cultural heritage genuinely accessible to the public, but it leaves institutions financially vulnerable. A mixed approach, combining free general entry with selected paid services, appears to offer the best balance.",
  },
  {
    id: "we-004",
    task: "we",
    title: "Reducing food waste",
    difficulty: "hard",
    topic: "Environment",
    prompt:
      "A large proportion of the food produced in many countries is never eaten and is eventually thrown away. What are the main causes of this problem, and what measures could governments, businesses and individuals take to reduce it? Support your answer with relevant reasons and examples.",
    keyIdeas: [
      "Retailers reject imperfect produce on appearance",
      "Multi-buy promotions encourage over-purchasing",
      "Poor meal planning, storage and confusion over date labels",
      "Clearer, standardised date labelling",
      "Incentives to donate surplus food",
      "Household habits: lists, meal planning, freezing leftovers",
    ],
    modelAnswer:
      "Although millions of people around the world do not have enough to eat, a considerable share of the food that is produced is wasted. This problem has several causes along the supply chain, but it can be reduced if governments, businesses and households each play a part.\n\nOne major cause lies in retail practices. Supermarkets often reject fruit and vegetables that are misshapen or the wrong size, even though they are perfectly safe to eat, and promotions such as 'buy one, get one free' encourage shoppers to purchase more than they need. A second cause is consumer behaviour. Many people plan meals poorly, store food incorrectly or misunderstand date labels, throwing away products that are still safe simply because a 'best before' date has passed.\n\nGovernments can address these problems through regulation and education. They could standardise and simplify date labelling so that consumers can easily distinguish between dates that concern safety and dates that only concern quality. Tax incentives could also encourage businesses to donate surplus food to charities rather than sending it to landfill.\n\nBusinesses and individuals also have responsibilities. Retailers could sell imperfect produce at a discount and replace multi-buy offers with simple price reductions. At home, people can reduce waste by planning meals, writing shopping lists and freezing leftovers before they spoil.\n\nIn conclusion, food waste results from both commercial practices and household habits. A combination of clearer regulation, responsible business decisions and more careful consumer behaviour could substantially reduce the amount of edible food that is thrown away.",
  },

  // ======================= Reading & Writing FIB (dropdown) =======================
  {
    id: "rwfib-001",
    task: "rwfib",
    title: "Bees and pollination",
    difficulty: "easy",
    topic: "Environment",
    text:
      "Bees play a {{0}} role in agriculture. As they move from flower to flower in search of nectar, they {{1}} pollen, allowing many plants to produce fruit and seeds. Crops such as apples, almonds and blueberries depend {{2}} on insect pollination for good harvests. In recent years, however, bee populations in several regions have declined, and scientists believe that a {{3}} of factors is responsible, including habitat loss, disease and the use of certain pesticides. Farmers are increasingly encouraged to plant strips of wildflowers along the edges of their fields, which provide food and shelter for bees and other {{4}} insects.",
    blanks: [
      { options: ["vital", "deep", "heavy", "tall"], answer: "vital" },
      { options: ["transfer", "transform", "translate", "transcend"], answer: "transfer" },
      { options: ["heavily", "hardly", "highly", "widely"], answer: "heavily" },
      { options: ["combination", "composition", "compromise", "comparison"], answer: "combination" },
      { options: ["beneficial", "beneficiary", "benefited", "benefit"], answer: "beneficial" },
    ],
  },
  {
    id: "rwfib-002",
    task: "rwfib",
    title: "Inflation and interest rates",
    difficulty: "medium",
    topic: "Economics",
    text:
      "Inflation refers to a general rise in prices across an economy over time. When inflation is moderate and {{0}}, households and businesses can plan with reasonable confidence. When it rises rapidly, however, the purchasing power of money {{1}}, and people on fixed incomes, such as some pensioners, may find it difficult to {{2}} ends meet. Central banks typically respond by raising interest rates. Higher rates make borrowing more expensive, which tends to {{3}} spending and, eventually, slow the rate at which prices increase. The difficulty is that this tool works with a considerable time lag, so policymakers must act on forecasts rather than {{4}} solely on current figures.",
    blanks: [
      { options: ["predictable", "predicted", "predicting", "unpredictable"], answer: "predictable" },
      { options: ["erodes", "erupts", "elevates", "enhances"], answer: "erodes" },
      { options: ["make", "do", "get", "bring"], answer: "make" },
      { options: ["dampen", "ignite", "boost", "widen"], answer: "dampen" },
      { options: ["relying", "relies", "relied", "reliance"], answer: "relying" },
    ],
  },
  {
    id: "rwfib-003",
    task: "rwfib",
    title: "Beyond the Silk Road",
    difficulty: "hard",
    topic: "History",
    text:
      "The term 'Silk Road' is somewhat misleading. Rather than a single route, it {{0}} to a shifting network of overland and maritime paths that linked East Asia with Central Asia, the Middle East and the Mediterranean world over many centuries. Silk was only one of the goods {{1}} along these routes; spices, ceramics, metals, horses and textiles of many kinds also changed hands. Few merchants travelled the entire distance. Instead, goods usually passed through a long chain of intermediaries, each of whom added to the final price. {{2}} more significant than the trade in goods, perhaps, was the exchange of ideas. Religions, technologies and artistic styles spread along the same routes, {{3}} the cultures they reached in ways that are still visible today. Diseases, too, travelled with the caravans, a reminder that connectivity has always {{4}} risks as well as benefits.",
    blanks: [
      { options: ["refers", "consists", "comprises", "denotes"], answer: "refers" },
      { options: ["traded", "trading", "trades", "trader"], answer: "traded" },
      { options: ["Even", "Such", "Very", "Too"], answer: "Even" },
      { options: ["enriching", "enriched", "enrich", "enrichment"], answer: "enriching" },
      { options: ["carried", "taken", "made", "done"], answer: "carried" },
    ],
  },
  {
    id: "rwfib-004",
    task: "rwfib",
    title: "Antibiotic resistance",
    difficulty: "medium",
    topic: "Health",
    text:
      "Antibiotics are among the most important medicines ever developed, but their effectiveness is {{0}} threat. Each time an antibiotic is used, bacteria that happen to carry genes for resistance are more likely to survive and multiply. Over time, these resistant strains can become {{1}}, making common infections harder to treat. The problem is made worse when antibiotics are prescribed for viral illnesses such as colds, even though antibiotics have no {{2}} on viruses, or when patients do not follow the {{3}} given by their doctor. Tackling resistance therefore requires action on several fronts: more careful prescribing, better infection control in hospitals and {{4}} investment in the development of new drugs.",
    blanks: [
      { options: ["under", "below", "beneath", "over"], answer: "under" },
      { options: ["widespread", "wide", "widely", "width"], answer: "widespread" },
      { options: ["effect", "affect", "effective", "efficacy"], answer: "effect" },
      { options: ["instructions", "instructors", "instructive", "instruct"], answer: "instructions" },
      { options: ["greater", "greatly", "greatness", "greatest"], answer: "greater" },
    ],
  },
  {
    id: "rwfib-005",
    task: "rwfib",
    title: "Restoring old paintings",
    difficulty: "hard",
    topic: "Arts",
    text:
      "The restoration of old paintings raises questions that are as much ethical as technical. Over centuries, varnish yellows, paint layers crack and earlier restorers may have added material that {{0}} the artist's original intentions. Modern conservators generally follow the principle that any intervention should be reversible, so that future specialists, perhaps equipped with better tools, can {{1}} the work if necessary. They also try to distinguish clearly between original paint and later additions, documenting every step they take. {{2}}, disagreements persist. Some critics argue that removing old varnish can strip away subtle glazes applied by the artist, while others {{3}} that leaving a darkened surface in place misrepresents the painting just as seriously. Because there is rarely a single correct answer, decisions are increasingly made by teams rather than by individual experts {{4}} alone.",
    blanks: [
      { options: ["obscures", "clarifies", "reveals", "displays"], answer: "obscures" },
      { options: ["undo", "undone", "undoing", "undid"], answer: "undo" },
      { options: ["Nevertheless", "Therefore", "Similarly", "Furthermore"], answer: "Nevertheless" },
      { options: ["contend", "insist on", "refrain", "doubt"], answer: "contend" },
      { options: ["working", "worked", "works", "work"], answer: "working" },
    ],
  },

  // ======================= Reading MC, multiple answers =======================
  {
    id: "mcm-001",
    task: "mcm",
    title: "What ice cores reveal",
    difficulty: "medium",
    topic: "Science",
    passage:
      "Ice sheets in Antarctica and Greenland have built up over hundreds of thousands of years as layer upon layer of snow has been compressed into ice. As the snow is buried, small pockets of air become sealed inside it. When scientists drill deep into an ice sheet and extract a long cylinder of ice, known as an ice core, these trapped bubbles provide direct samples of the atmosphere as it was when the ice formed. By measuring the gases they contain, researchers can reconstruct changes in the concentration of carbon dioxide and methane over very long periods. The ice itself also holds information. The ratio of different forms of oxygen and hydrogen in the frozen water reflects the temperature at the time the snow fell, while layers of volcanic ash can be used to match cores from different locations and to help establish dates. Ice cores do have limitations, however. Near the base of an ice sheet, the layers become extremely thin and may be distorted by the movement of the ice, making the oldest sections harder to interpret.",
    question: "According to the passage, which of the following kinds of information can ice cores provide?",
    options: [
      "Past concentrations of carbon dioxide in the atmosphere",
      "The temperature at the time the snow fell",
      "Precise dates for every volcanic eruption in history",
      "A means of matching cores taken from different locations",
      "The speed at which ice sheets are melting today",
      "The locations of ancient human settlements",
    ],
    answers: [0, 1, 3],
    explanation:
      "The passage states that trapped air bubbles let researchers reconstruct carbon dioxide and methane levels (A), that the ratio of oxygen and hydrogen forms reflects the temperature when the snow fell (B), and that volcanic ash layers are used to match cores from different locations (D). Option C is tempting because ash is mentioned, but the passage only says ash helps establish dates; 'precise dates for every eruption' is a large overstatement. Current melting rates (E) and human settlements (F) are never mentioned.",
  },
  {
    id: "mcm-002",
    task: "mcm",
    title: "Retrieval practice",
    difficulty: "easy",
    topic: "Education",
    passage:
      "Many students prepare for examinations by rereading their notes or highlighting key passages in textbooks. These strategies feel productive because the material becomes increasingly familiar. Familiarity, however, is not the same as learning. A substantial body of research suggests that one of the most effective ways to remember information is to practise retrieving it, for example by answering questions, explaining a concept without looking at notes, or using flashcards. This approach, often called retrieval practice, works partly because the effort of recalling information strengthens the memory itself. It also reveals gaps in knowledge, showing students exactly which topics need further attention. Interestingly, students often underestimate the value of retrieval practice. Because recalling information is more difficult than rereading it, they may conclude that it is less effective, when the opposite is usually true. Teachers can help by including short, low-stakes quizzes in their lessons, which give students regular opportunities to practise retrieval without the pressure of formal assessment.",
    question: "Which of the following statements are supported by the passage?",
    options: [
      "Rereading notes can create a misleading sense of having learned the material.",
      "Retrieval practice helps students identify what they do not yet know.",
      "Highlighting is more effective than flashcards for most students.",
      "Students tend to judge retrieval practice as less useful than it really is.",
      "Quizzes used for retrieval practice should count towards final grades.",
    ],
    answers: [0, 1, 3],
    explanation:
      "A is supported by 'Familiarity, however, is not the same as learning': rereading feels productive without guaranteeing learning. B paraphrases 'It also reveals gaps in knowledge'. D paraphrases 'students often underestimate the value of retrieval practice'. C reverses the passage's argument, since flashcards are given as an example of the more effective method. E is the tempting distractor because quizzes are recommended, but the passage specifies 'low-stakes' quizzes 'without the pressure of formal assessment', so they should not count towards grades.",
  },
  {
    id: "mcm-003",
    task: "mcm",
    title: "The changing role of libraries",
    difficulty: "hard",
    topic: "Society",
    passage:
      "Public libraries were originally established to provide free access to books at a time when most people could not afford to buy them. Today, cheap paperbacks and online sources have weakened that original rationale, and some commentators have predicted that libraries will gradually become obsolete. Yet in many communities, library visits have not fallen as steeply as such predictions implied, partly because libraries have taken on new functions. They offer free internet access and help with digital skills, which matters greatly to people who lack a computer at home or who need assistance completing government forms online. They also provide quiet study space for students living in crowded housing, as well as a warm, safe environment that does not require visitors to spend money. These roles are difficult to measure using traditional statistics such as the number of books borrowed, which may explain why the value of libraries is sometimes underestimated by those who allocate public funds. Librarians themselves increasingly argue that their institutions should be evaluated according to the range of services they provide rather than lending figures alone.",
    question: "According to the passage, why might the value of public libraries be underestimated?",
    options: [
      "Library performance is often judged mainly by the number of books borrowed.",
      "Many of the services libraries now provide are hard to quantify.",
      "Librarians have been unwilling to explain their new roles.",
      "Online sources contain more reliable information than books.",
      "Most library visitors are students rather than members of the general public.",
      "Visits to libraries have fallen more sharply than commentators predicted.",
    ],
    answers: [0, 1],
    explanation:
      "The key sentence says the new roles 'are difficult to measure using traditional statistics such as the number of books borrowed, which may explain why the value of libraries is sometimes underestimated'. This supports both A (reliance on lending figures) and B (services that are hard to measure). C contradicts the final sentence, where librarians actively argue for broader evaluation. F is a trap: the passage says visits have NOT fallen as steeply as predicted. D and E are never claimed.",
  },
  {
    id: "mcm-004",
    task: "mcm",
    title: "Limits of machine translation",
    difficulty: "medium",
    topic: "Technology",
    passage:
      "Machine translation systems have improved dramatically in recent years. Earlier systems relied largely on rules written by linguists or on statistical patterns extracted from short phrases, and their output was often awkward and difficult to understand. Modern systems, which are trained on very large collections of texts and their translations, produce sentences that are usually fluent and frequently accurate. Nevertheless, fluency can be deceptive. Because the output reads smoothly, users may not notice when a key detail, such as a negation or a number, has been mistranslated. Performance also varies considerably between languages: systems tend to perform best for language pairs with abundant training data and less well for languages that are less widely represented in digital texts. For these reasons, professional translators increasingly work alongside the technology rather than being replaced by it. They are often employed to review and correct machine output, particularly for legal, medical and other texts where errors could have serious consequences.",
    question: "Which of the following are presented in the passage as weaknesses or risks of current machine translation?",
    options: [
      "Fluent output may conceal serious errors.",
      "Quality tends to be lower for languages with limited digital text.",
      "The systems are unable to produce grammatical sentences.",
      "They depend on rules written by linguists.",
      "They are too slow for professional use.",
    ],
    answers: [0, 1],
    explanation:
      "A paraphrases 'fluency can be deceptive... users may not notice when a key detail... has been mistranslated'. B paraphrases the point that systems perform 'less well for languages that are less widely represented in digital texts'. D is tempting because rules written by linguists are mentioned, but that describes EARLIER systems, not current ones. C contradicts the statement that modern output is 'usually fluent', and speed (E) is never discussed.",
  },

  // ======================= Re-order Paragraphs =======================
  {
    id: "rop-001",
    task: "rop",
    title: "The discovery of penicillin",
    difficulty: "easy",
    topic: "History",
    paragraphs: [
      "In 1928, the Scottish scientist Alexander Fleming noticed something unusual on a culture plate he had left in his laboratory.",
      "A mould had grown on the plate, and around it the bacteria he had been studying had been destroyed.",
      "Fleming named the active substance penicillin, but he found it difficult to purify in useful quantities.",
      "It was only about a decade later that a team at the University of Oxford developed methods to extract and test it.",
      "Their work allowed the drug to be manufactured on a large scale during the Second World War, saving many lives.",
    ],
    explanation:
      "Sentence 1 is the only one that introduces the person, date and setting in full, so it can stand alone. 'Something unusual' is explained by 'A mould' in sentence 2, and 'the plate' (definite article) refers back to 'a culture plate'. Sentence 3 names 'the active substance' that killed the bacteria. In sentence 4, 'it' needs the noun 'penicillin' from sentence 3, and 'a decade later' signals a time jump. 'Their work' in sentence 5 refers to 'a team at the University of Oxford'.",
  },
  {
    id: "rop-002",
    task: "rop",
    title: "Comparative advantage",
    difficulty: "medium",
    topic: "Economics",
    paragraphs: [
      "The theory of comparative advantage is one of the most influential ideas in economics.",
      "It holds that countries can benefit from trade even when one of them can produce every good more efficiently than the other.",
      "The key is not absolute efficiency but relative cost: what a country gives up in order to produce one good rather than another.",
      "By specialising in the goods they produce at the lowest relative cost, and trading for the rest, both partners can end up with more than they could produce alone.",
      "Critics point out, however, that this conclusion rests on assumptions, such as the easy movement of workers between industries, that rarely hold in practice.",
    ],
    explanation:
      "Sentence 1 names the theory and needs no prior context. 'It' in sentence 2 refers to 'the theory'. Sentence 2 states a surprising claim, and 'The key' in sentence 3 explains how it can be true by introducing 'relative cost'. Sentence 4 repeats 'relative cost' and draws the practical consequence. 'This conclusion' and 'however' in sentence 5 refer back to the outcome in sentence 4 and introduce the counter-argument, so it must come last.",
  },
  {
    id: "rop-003",
    task: "rop",
    title: "Rethinking wetlands",
    difficulty: "medium",
    topic: "Environment",
    paragraphs: [
      "For centuries, wetlands were regarded as wasteland, and in many regions they were drained to create farmland or space for building.",
      "Scientists now recognise, however, that these areas perform a number of valuable functions.",
      "For one thing, they act like natural sponges, absorbing water during heavy rain and releasing it slowly, which reduces the risk of flooding downstream.",
      "They also filter pollutants from water and provide habitats for a wide range of birds, fish and plants.",
      "As a result, many governments that once encouraged drainage now fund projects to restore the wetlands that were lost.",
    ],
    explanation:
      "Sentence 1 introduces 'wetlands' by name and sets up the old view. 'However' and 'these areas' in sentence 2 contrast with and refer back to it. Sentence 2 promises 'a number of valuable functions', which are listed using 'For one thing' (sentence 3) and 'They also' (sentence 4). 'As a result' in sentence 5 draws a conclusion from the functions, and 'once encouraged drainage' echoes 'drained' in sentence 1.",
  },
  {
    id: "rop-004",
    task: "rop",
    title: "Photography and painting",
    difficulty: "hard",
    topic: "Arts",
    paragraphs: [
      "When photography emerged in the nineteenth century, some observers predicted that it would make painting unnecessary.",
      "After all, a camera could record a scene with a precision that even the most skilled artist would struggle to match.",
      "This prediction proved to be mistaken, but the new technology did change the direction of painting.",
      "Freed from the obligation to reproduce the visible world exactly, many artists began to explore colour, light and form in more personal ways.",
      "In this sense, photography arguably encouraged, rather than ended, some of the most adventurous experiments in modern art.",
    ],
    explanation:
      "Sentence 1 introduces photography and a prediction, so it opens the sequence. 'After all' in sentence 2 gives the reason for the prediction, so it must follow directly. 'This prediction' in sentence 3 points back to sentence 1 and turns the argument with 'but'. Sentence 4 explains HOW 'the direction of painting' changed. 'In this sense' and the contrast 'encouraged, rather than ended' in sentence 5 summarise the whole argument and answer the original prediction.",
  },
  {
    id: "rop-005",
    task: "rop",
    title: "Designing a fair clinical trial",
    difficulty: "hard",
    topic: "Health",
    paragraphs: [
      "Clinical trials are designed to determine whether a new treatment works better than existing alternatives.",
      "To make the comparison fair, participants are usually assigned to treatment groups at random.",
      "Randomisation ensures that factors such as age or general health are spread evenly between the groups, rather than being concentrated in one of them.",
      "Many trials go further by keeping both participants and researchers unaware of who is receiving which treatment.",
      "This practice, known as double blinding, prevents expectations from influencing either the patients' responses or the way results are recorded.",
    ],
    explanation:
      "Sentence 1 introduces clinical trials in general terms. 'The comparison' in sentence 2 uses the definite article to refer to comparing a new treatment with alternatives. 'Randomisation' in sentence 3 turns 'at random' into a noun and explains its purpose. 'Go further' in sentence 4 signals an additional safeguard beyond randomisation. 'This practice' in sentence 5 names that safeguard, so it must come last.",
  },

  // ======================= Reading FIB (drag-and-drop) =======================
  {
    id: "rfib-001",
    task: "rfib",
    title: "How satellite navigation works",
    difficulty: "easy",
    topic: "Technology",
    text:
      "Satellite navigation systems allow a receiver on the ground to {{0}} its position with remarkable accuracy. Several satellites continuously broadcast signals that include the precise time at which each signal was sent. By comparing these times with the time of {{1}}, the receiver calculates how far away each satellite is. With distances from at least four satellites, it can work out its location as well as {{2}} errors in its own clock. Because the system depends on extremely precise timing, the satellites carry atomic clocks, which are far more {{3}} than ordinary ones.",
    answers: ["determine", "arrival", "correct", "accurate"],
    distractors: ["departure", "accuracy", "declare"],
  },
  {
    id: "rfib-002",
    task: "rfib",
    title: "The growth of cities",
    difficulty: "medium",
    topic: "Society",
    text:
      "For most of human history, the vast majority of people lived in rural areas. Today, more than half of the world's population lives in cities, and this {{0}} is expected to rise further in the coming decades. Cities attract migrants because they {{1}} a wider range of jobs, schools and health services than the countryside. However, rapid growth can place {{2}} on housing, transport and water supplies, particularly where planning has not kept pace with population. In some cities, large numbers of newcomers end up living in informal {{3}} that lack basic services such as sanitation.",
    answers: ["proportion", "offer", "pressure", "settlements"],
    distractors: ["settle", "offering", "pressing"],
  },
  {
    id: "rfib-003",
    task: "rfib",
    title: "Survival of the tardigrade",
    difficulty: "hard",
    topic: "Science",
    text:
      "Tardigrades are microscopic animals, usually less than a millimetre long, that live in environments ranging from mountain mosses to deep-sea sediments. They are best known for their ability to survive conditions that would kill most other organisms. When their surroundings dry out, many species enter a state in which their {{0}} slows to an almost undetectable level. In this state they can {{1}} extreme cold, intense radiation and long periods without water. Researchers are studying the proteins that {{2}} their cells from damage during drying, in the hope that similar molecules might one day help to preserve vaccines and other medicines without {{3}}.",
    answers: ["metabolism", "withstand", "protect", "refrigeration"],
    distractors: ["metabolic", "withstood", "protection"],
  },
  {
    id: "rfib-004",
    task: "rfib",
    title: "Learning to read",
    difficulty: "medium",
    topic: "Education",
    text:
      "Learning to read is not a natural process in the way that learning to speak is. Children acquire spoken language simply by being {{0}} to it, but reading must usually be taught explicitly. One widely used approach, known as phonics, teaches children to link letters and groups of letters with the {{1}} they represent. Once children can decode words in this way, they can begin to read unfamiliar words independently. Decoding alone, however, is not {{2}}. To become skilled readers, children also need a broad vocabulary and plenty of opportunities to read texts that {{3}} their interest.",
    answers: ["exposed", "sounds", "sufficient", "capture"],
    distractors: ["exposing", "sufficiently", "meanings"],
  },
  {
    id: "rfib-005",
    task: "rfib",
    title: "Lessons from Roman concrete",
    difficulty: "hard",
    topic: "History",
    text:
      "The Romans built structures that have survived for two thousand years, and many of them were made with concrete. Roman concrete differed from its modern {{0}} in several respects. It typically combined lime with volcanic ash, and in structures exposed to seawater, such as harbour walls, chemical reactions between the water and the ash appear to have produced new minerals that {{1}} the material over time. Modern concrete, by contrast, tends to {{2}} when seawater penetrates it. Engineers are now examining Roman techniques, not in order to copy them {{3}}, but to learn lessons that could make today's building materials more durable.",
    answers: ["equivalent", "strengthened", "deteriorate", "exactly"],
    distractors: ["weakened", "equivalence", "exact"],
  },

  // ======================= Reading MC, single answer =======================
  {
    id: "mcs-001",
    task: "mcs",
    title: "Managing invasive species",
    difficulty: "medium",
    topic: "Environment",
    passage:
      "When a species is introduced to a region where it did not previously occur, it usually fails to establish itself. Occasionally, however, a newcomer thrives. Freed from the predators, parasites and diseases that kept its numbers in check in its native range, it may spread rapidly and outcompete local species for food or space. Such species are described as invasive. Islands are particularly vulnerable, because their native plants and animals have often evolved in isolation and may lack defences against unfamiliar predators. Once an invasive species is widespread, eradicating it is usually extremely expensive and sometimes impossible. For this reason, most experts consider prevention, through measures such as inspecting cargo and restricting the import of certain plants and animals, to be the most cost-effective strategy.",
    question: "What is the main point the writer makes about managing invasive species?",
    options: [
      "Invasive species cause the most harm on large continents.",
      "Preventing introductions is generally more efficient than removing established species.",
      "Most introduced species quickly become invasive.",
      "Islands should ban all imports of plants and animals.",
    ],
    answer: 1,
    explanation:
      "The passage builds towards its final sentence: because eradication is 'extremely expensive and sometimes impossible', prevention is 'the most cost-effective strategy'. Option D is tempting because islands are described as vulnerable and import restrictions are mentioned, but the writer only recommends restricting 'certain' plants and animals, not banning all imports. A contradicts the point about islands, and C contradicts the first sentence, which says introduced species usually fail.",
  },
  {
    id: "mcs-002",
    task: "mcs",
    title: "Exercise and sitting time",
    difficulty: "easy",
    topic: "Health",
    passage:
      "Health guidelines in many countries recommend that adults take part in regular moderate physical activity, such as brisk walking or cycling, over the course of each week. In recent years, researchers have also become interested in a separate question: how much time people spend sitting. Office work, long commutes and screen-based leisure mean that many adults remain seated for most of their waking hours. Some studies suggest that long periods of uninterrupted sitting are associated with poorer health even among people who exercise regularly. Although the evidence is still developing, a simple recommendation has emerged: in addition to meeting activity guidelines, people should break up long periods of sitting by standing or moving around whenever they can.",
    question: "Which of the following best expresses the recommendation described in the passage?",
    options: [
      "Regular exercise fully cancels out the effects of sitting.",
      "Adults should avoid sitting at all during working hours.",
      "Cycling is a healthier form of exercise than walking.",
      "People should both exercise regularly and interrupt long periods of sitting.",
    ],
    answer: 3,
    explanation:
      "The recommendation is introduced with 'in addition to meeting activity guidelines, people should break up long periods of sitting', which combines two actions, as option D does. Option A is the tempting distractor, but the passage says sitting is linked to poorer health 'even among people who exercise regularly', so exercise does not fully cancel it. B exaggerates 'break up' into 'avoid entirely', and C compares two activities the passage treats as equal examples.",
  },
  {
    id: "mcs-003",
    task: "mcs",
    title: "Replication in science",
    difficulty: "hard",
    topic: "Science",
    passage:
      "A single experiment, however carefully conducted, rarely settles a scientific question. Results can be distorted by chance, by subtle flaws in design, or by unconscious bias in the way data are analysed. For this reason, scientists place great weight on replication: the repetition of a study, ideally by independent researchers, to see whether the original findings hold. In some fields, attempts to replicate well-known studies have produced the same results less often than expected. Some commentators have described this as a crisis that undermines trust in science. Others take a different view, arguing that the very fact that such failures are detected and published shows that science is capable of correcting its own errors, even if the process is slower and less tidy than textbooks suggest.",
    question: "What does the final sentence suggest about failed replications?",
    options: [
      "They prove that the original studies were fraudulent.",
      "They should not be published because they damage public trust.",
      "They can be seen as evidence that science is correcting itself.",
      "They show that textbooks describe the scientific process accurately.",
      "They occur in only a small number of scientific fields.",
    ],
    answer: 2,
    explanation:
      "The final sentence presents the view that detecting and publishing failures 'shows that science is capable of correcting its own errors', which matches C. B is tempting because the previous sentence mentions undermining trust, but that is the opposing view, and nobody in the passage argues against publication. D reverses the point that the process is 'less tidy than textbooks suggest'. A is unsupported, since the passage attributes errors to chance, design flaws and unconscious bias, not fraud.",
  },
  {
    id: "mcs-004",
    task: "mcs",
    title: "Oral poetry on the page",
    difficulty: "medium",
    topic: "Arts",
    passage:
      "Long before writing was widespread, many societies preserved their history, laws and stories through oral tradition. Performers who recited long poems from memory did not usually reproduce a fixed text word for word. Instead, they relied on a stock of familiar phrases, recurring scenes and rhythmic patterns, which allowed them to recompose the story each time they performed it. As a result, no two performances were exactly alike, and a skilled performer could lengthen or shorten a tale to suit the audience and the occasion. When such works were eventually written down, the written version captured only one of many possible performances. Scholars therefore caution against treating these texts as the single, original form of a work that was, by nature, flexible.",
    question: "According to the passage, why should written versions of oral poems be treated with caution?",
    options: [
      "They record just one version of a story that was performed in varying ways.",
      "They were usually written by people who had never heard a performance.",
      "Oral performers deliberately changed historical facts.",
      "Writing was invented in order to replace oral tradition.",
    ],
    answer: 0,
    explanation:
      "The last two sentences explain that a written version 'captured only one of many possible performances', so it should not be treated as the single original. Option C is tempting because performers did change their tales, but the passage says they adjusted length and phrasing to suit the audience, not that they falsified history. B and D are not mentioned anywhere in the passage.",
  },
];
