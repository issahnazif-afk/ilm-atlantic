import type { Item } from '../types';

// PTE Academic reading, set 2. Original items written to the published task formats.
export const pteAReading2: Item[] = [
  // ======================= Reading & Writing FIB (dropdown) =======================
  {
    id: "rwfib-006",
    task: "rwfib",
    title: "Turning seawater into drinking water",
    difficulty: "easy",
    topic: "Environment",
    text:
      "In many dry coastal regions, fresh water is in short {{0}}. One solution is desalination, the process of removing salt from seawater so that it can be used for drinking or irrigation. The most common method today is reverse osmosis, in which seawater is pushed at high pressure through a membrane that {{1}} salt and other impurities behind. Although the technology has become cheaper, it still {{2}} large amounts of energy. Another concern is the very salty waste, known as brine, which is usually returned to the sea and can {{3}} marine life near the outlet if it is not properly diluted. For these reasons, many experts see desalination as a useful {{4}} to, rather than a replacement for, water conservation.",
    blanks: [
      { options: ["supply", "demand", "quantity", "amount"], answer: "supply" },
      { options: ["leaves", "lets", "makes", "takes"], answer: "leaves" },
      { options: ["consumes", "consists", "concerns", "conserves"], answer: "consumes" },
      { options: ["harm", "harmful", "harmed", "harmless"], answer: "harm" },
      { options: ["complement", "compliment", "completion", "compliance"], answer: "complement" },
    ],
  },
  {
    id: "rwfib-007",
    task: "rwfib",
    title: "The placebo effect",
    difficulty: "medium",
    topic: "Health",
    text:
      "A placebo is a treatment that contains no active ingredient, such as a sugar pill. Remarkably, patients who take a placebo sometimes report real improvements, particularly in symptoms such as pain and nausea. This phenomenon, known as the placebo effect, is thought to {{0}} largely from expectation: believing that a treatment will help can change how the brain processes signals from the body. The effect has important {{1}} for medical research. If a new drug performs no better than a placebo, researchers cannot {{2}} that its benefits are caused by the drug itself. More surprisingly, some studies have reported that placebos can still reduce symptoms when patients are told openly that the pill contains no medicine, a finding that researchers are still trying to {{3}}.",
    blanks: [
      { options: ["arise", "raise", "arouse", "rouse"], answer: "arise" },
      { options: ["implications", "implicates", "implicit", "implies"], answer: "implications" },
      { options: ["conclude", "include", "exclude", "preclude"], answer: "conclude" },
      { options: ["explain", "explanation", "explaining", "explained"], answer: "explain" },
    ],
  },
  {
    id: "rwfib-008",
    task: "rwfib",
    title: "Moving continents",
    difficulty: "medium",
    topic: "Science",
    text:
      "The idea that continents move was once {{0}} by most geologists. In the early twentieth century, Alfred Wegener argued that the continents had once been joined together, pointing to the way the coastlines of South America and Africa appear to fit like pieces of a puzzle. He also noted that similar fossils had been found on continents now {{1}} by vast oceans. However, Wegener could not explain what force was {{2}} enough to move entire continents, and his theory was widely rejected. It was not until the 1960s, when studies of the ocean floor revealed that new crust is continually formed at mid-ocean ridges, that the theory of plate tectonics gained general {{3}}. Today it {{4}} the basis of our understanding of earthquakes, volcanoes and mountain building.",
    blanks: [
      { options: ["dismissed", "dismissing", "dismissal", "dismiss"], answer: "dismissed" },
      { options: ["separated", "connected", "attached", "combined"], answer: "separated" },
      { options: ["powerful", "strength", "strongly", "power"], answer: "powerful" },
      { options: ["acceptance", "acceptable", "accepting", "accepted"], answer: "acceptance" },
      { options: ["forms", "makes", "builds", "does"], answer: "forms" },
    ],
  },
  {
    id: "rwfib-009",
    task: "rwfib",
    title: "How monsoons work",
    difficulty: "easy",
    topic: "Geography",
    text:
      "A monsoon is a seasonal change in the direction of the {{0}} winds of a region, which brings a marked shift between wet and dry seasons. The best-known example is the South Asian monsoon. During the summer, land heats up more quickly than the ocean, and the warm air over the land rises. Moist air from the ocean flows in to {{1}} it, bringing heavy rain. In winter, the pattern is {{2}}, and drier winds blow from the land towards the sea. Hundreds of millions of farmers depend {{3}} the summer rains to water their crops, so a late or weak monsoon can have serious {{4}} for food supplies.",
    blanks: [
      { options: ["prevailing", "provoking", "preceding", "pretending"], answer: "prevailing" },
      { options: ["replace", "repeat", "reply", "remove"], answer: "replace" },
      { options: ["reversed", "reversal", "reverses", "reversion"], answer: "reversed" },
      { options: ["on", "at", "in", "with"], answer: "on" },
      { options: ["consequences", "consequently", "consequential", "consequent"], answer: "consequences" },
    ],
  },
  {
    id: "rwfib-010",
    task: "rwfib",
    title: "Why losses loom larger",
    difficulty: "hard",
    topic: "Economics",
    text:
      "Traditional economic models assume that people weigh gains and losses of the same size equally. Experimental research in behavioural economics, however, suggests that losses tend to {{0}} more heavily: the disappointment of losing a sum of money is typically felt more {{1}} than the pleasure of gaining the same amount. This tendency, known as loss aversion, may help to explain why investors often hold on to falling shares for too long, reluctant to {{2}} a loss by selling them. It also has practical {{3}} for policy. A message that emphasises what people stand to lose by not insulating their homes, for example, may prove more {{4}} than one that stresses what they could save, even though the two messages contain {{5}} the same information.",
    blanks: [
      { options: ["weigh", "weight", "wait", "way"], answer: "weigh" },
      { options: ["intensely", "intense", "intensity", "intensify"], answer: "intensely" },
      { options: ["realise", "relieve", "reveal", "resolve"], answer: "realise" },
      { options: ["applications", "appliances", "applicants", "appellations"], answer: "applications" },
      { options: ["persuasive", "persuaded", "persuasion", "persuading"], answer: "persuasive" },
      { options: ["essentially", "essential", "essence", "essentials"], answer: "essentially" },
    ],
  },
  {
    id: "rwfib-011",
    task: "rwfib",
    title: "The first writing on clay",
    difficulty: "medium",
    topic: "History",
    text:
      "Writing appears to have been invented independently in several parts of the world, but among the earliest known systems is cuneiform, which developed in Mesopotamia more than five thousand years ago. Its origins were {{0}} practical. The first texts were not poems or stories but records of goods such as grain and livestock, kept by officials who needed to {{1}} track of trade and taxes. These early signs were pressed into soft clay with a reed, and the tablets were then left to dry. Over the {{2}} of many centuries, the script became more abstract and flexible, until it could {{3}} not only numbers and objects but also the sounds of spoken language. This made it possible to write laws, letters and literature, and cuneiform remained {{4}} use for roughly three thousand years.",
    blanks: [
      { options: ["largely", "largeness", "large", "larger"], answer: "largely" },
      { options: ["keep", "hold", "make", "take"], answer: "keep" },
      { options: ["course", "path", "route", "way"], answer: "course" },
      { options: ["represent", "repress", "repeat", "remind"], answer: "represent" },
      { options: ["in", "on", "at", "by"], answer: "in" },
    ],
  },
  {
    id: "rwfib-012",
    task: "rwfib",
    title: "Endangered languages",
    difficulty: "medium",
    topic: "Society",
    text:
      "Of the roughly seven thousand languages spoken in the world today, a large {{0}} are used by only a few thousand people or fewer, and linguists expect many of them to stop being spoken within the next century. A language rarely disappears because all of its speakers suddenly die out. More often, younger generations {{1}} to a more widely used language that offers better access to education and employment. When the last fluent speakers die, a unique way of describing the world can be lost, {{2}} with knowledge of local plants, history and traditions. In response, some communities have launched revival programmes, {{3}} recording elders, writing dictionaries and running immersion schools in which children are taught {{4}} in the endangered language.",
    blanks: [
      { options: ["proportion", "proposition", "position", "provision"], answer: "proportion" },
      { options: ["switch", "settle", "spend", "spread"], answer: "switch" },
      { options: ["along", "among", "above", "against"], answer: "along" },
      { options: ["involving", "involved", "involves", "involvement"], answer: "involving" },
      { options: ["entirely", "entire", "entirety", "entireness"], answer: "entirely" },
    ],
  },
  {
    id: "rwfib-013",
    task: "rwfib",
    title: "Herd immunity",
    difficulty: "hard",
    topic: "Health",
    text:
      "When a sufficiently large share of a population is immune to an infectious disease, the disease finds it difficult to spread, because each infected person is {{0}} to come into contact with someone who can catch it. This indirect protection, known as herd immunity, {{1}} those who cannot be vaccinated, such as newborn babies and people with weakened immune systems. The proportion of the population that must be immune {{2}} on how contagious the disease is. For highly infectious diseases such as measles, the threshold is very high, often {{3}} at around 95 per cent. Consequently, even a modest decline in vaccination rates can leave communities {{4}} to outbreaks, as gaps in coverage allow the disease to {{5}} a foothold.",
    blanks: [
      { options: ["unlikely", "unlike", "dislike", "unliked"], answer: "unlikely" },
      { options: ["shields", "shoulders", "shifts", "shines"], answer: "shields" },
      { options: ["depends", "depending", "dependent", "dependence"], answer: "depends" },
      { options: ["estimated", "estimating", "estimate", "estimation"], answer: "estimated" },
      { options: ["vulnerable", "vulnerability", "vulnerably", "vulnerabilities"], answer: "vulnerable" },
      { options: ["gain", "earn", "win", "reach"], answer: "gain" },
    ],
  },
  {
    id: "rwfib-014",
    task: "rwfib",
    title: "Printing in three dimensions",
    difficulty: "easy",
    topic: "Technology",
    text:
      "Three-dimensional printing, also called additive manufacturing, builds objects layer {{0}} layer from a digital design. Traditional manufacturing often starts with a solid block of material and cuts away what is not needed, which can {{1}} a great deal of waste. Additive methods, by contrast, use only the material that the final object requires. The technology is especially {{2}} for producing small numbers of complex or customised parts, such as dental crowns or prototypes of new products. However, printing is still relatively slow, so for large quantities of simple items, conventional factories usually {{3}} cheaper. Researchers are now {{4}} ways to print with a wider range of materials, including metals and concrete.",
    blanks: [
      { options: ["by", "to", "on", "for"], answer: "by" },
      { options: ["produce", "product", "productive", "production"], answer: "produce" },
      { options: ["useful", "usefully", "usage", "user"], answer: "useful" },
      { options: ["remain", "retain", "remind", "remark"], answer: "remain" },
      { options: ["exploring", "explaining", "exploding", "exporting"], answer: "exploring" },
    ],
  },
  {
    id: "rwfib-015",
    task: "rwfib",
    title: "Improvisation in jazz",
    difficulty: "medium",
    topic: "Arts",
    text:
      "Improvisation lies at the {{0}} of jazz. Rather than playing every note exactly as written, jazz musicians create new melodies on the spot, often {{1}} on a familiar tune and its sequence of chords. This does not mean that they play randomly. Successful improvisers spend years studying scales, harmony and the recordings of earlier musicians, developing a {{2}} of phrases that they can combine and vary in performance. In a small group, the players must also listen closely to one another and respond to musical ideas as they {{3}}. For this reason, jazz is sometimes {{4}} to a conversation, in which each participant contributes something new while remaining aware of what the others are saying.",
    blanks: [
      { options: ["heart", "head", "hand", "chest"], answer: "heart" },
      { options: ["building", "built", "builds", "builder"], answer: "building" },
      { options: ["vocabulary", "vacancy", "vocation", "verdict"], answer: "vocabulary" },
      { options: ["emerge", "emergency", "emerging", "emerged"], answer: "emerge" },
      { options: ["compared", "comparing", "comparison", "comparable"], answer: "compared" },
    ],
  },
  {
    id: "rwfib-016",
    task: "rwfib",
    title: "The shipping container",
    difficulty: "medium",
    topic: "Economics",
    text:
      "Before the 1950s, loading and unloading a cargo ship was a slow and {{0}} process. Goods of every shape and size were carried on board one item at a time, and ships often spent more time in port than at sea. The introduction of the standard steel shipping container changed this {{1}}. Because containers have uniform dimensions, they can be moved by crane directly between ships, trains and lorries without the goods inside ever being {{2}}. Loading times fell sharply, as did losses from theft and damage. The resulting fall in transport costs made it {{3}} for manufacturers to produce goods far from the markets where they were sold, and many economists regard containerisation as one of the factors that {{4}} the rapid growth of global trade in the decades that followed.",
    blanks: [
      { options: ["costly", "costs", "costliness", "costing"], answer: "costly" },
      { options: ["dramatically", "dramatic", "drama", "dramatise"], answer: "dramatically" },
      { options: ["handled", "handling", "handles", "handle"], answer: "handled" },
      { options: ["practical", "practice", "practise", "practically"], answer: "practical" },
      { options: ["fuelled", "fuelling", "fuels", "fueller"], answer: "fuelled" },
    ],
  },
  {
    id: "rwfib-017",
    task: "rwfib",
    title: "How cacti save water",
    difficulty: "hard",
    topic: "Science",
    text:
      "Plants face a constant dilemma. To photosynthesise, they must open small pores on their leaves, called stomata, to {{0}} carbon dioxide from the air. Yet every time the stomata open, water escapes. In hot, dry environments this trade-off is particularly {{1}}. Many desert plants, including most cacti, have evolved a solution known as CAM photosynthesis. Instead of opening their stomata during the day, they open them at night, when temperatures are lower and less water is lost through {{2}}. The carbon dioxide they absorb is stored overnight as an acid and then released inside the leaf during daylight, when the energy of the sun is available to {{3}} it into sugars. The strategy greatly improves water efficiency, although it {{4}} at a cost: CAM plants generally grow more slowly than many other plants.",
    blanks: [
      { options: ["take", "make", "bring", "give"], answer: "take" },
      { options: ["acute", "cute", "accurate", "acutely"], answer: "acute" },
      { options: ["evaporation", "evaluation", "elevation", "evacuation"], answer: "evaporation" },
      { options: ["convert", "converse", "convey", "conceive"], answer: "convert" },
      { options: ["comes", "goes", "gets", "takes"], answer: "comes" },
    ],
  },
  {
    id: "rwfib-018",
    task: "rwfib",
    title: "Mangrove forests",
    difficulty: "easy",
    topic: "Environment",
    text:
      "Mangroves are trees and shrubs that grow along tropical and subtropical coastlines, where they are {{0}} flooded by salt water as the tide rises and falls. Few plants can survive in such conditions, but mangroves have developed special roots that help them stay {{1}} in soft mud and take in air. These forests provide many benefits. Their dense roots slow down waves and help to {{2}} coastlines from storms and erosion. They also act as nurseries for young fish, which shelter among the roots until they are large enough to {{3}} into the open sea. Despite their value, large areas of mangrove forest have been {{4}} to make way for farms, fish ponds and coastal development.",
    blanks: [
      { options: ["regularly", "regular", "regularity", "regulate"], answer: "regularly" },
      { options: ["upright", "uprising", "upward", "uptight"], answer: "upright" },
      { options: ["protect", "prevent", "produce", "promote"], answer: "protect" },
      { options: ["venture", "adventure", "ventured", "venturing"], answer: "venture" },
      { options: ["cleared", "cleaned", "clarified", "cleansed"], answer: "cleared" },
    ],
  },
  {
    id: "rwfib-019",
    task: "rwfib",
    title: "Learning by teaching",
    difficulty: "medium",
    topic: "Education",
    text:
      "In peer tutoring, students teach one another, usually with an older or more advanced student {{0}} the role of tutor. Teachers sometimes worry that the tutor gains little from the arrangement, but research suggests {{1}}: explaining a topic to someone else often deepens the tutor's own understanding. To explain clearly, tutors must organise what they know, {{2}} gaps in their knowledge and find new ways of expressing ideas. Tutees, meanwhile, may feel more comfortable asking questions of a fellow student than of a teacher. Peer tutoring is not a {{3}} for skilled teaching, however. Programmes tend to work best when tutors receive training and when teachers monitor sessions {{4}}.",
    blanks: [
      { options: ["taking", "took", "taken", "takes"], answer: "taking" },
      { options: ["otherwise", "other", "others", "another"], answer: "otherwise" },
      { options: ["identify", "identity", "identical", "identification"], answer: "identify" },
      { options: ["substitute", "substance", "subscription", "subsidy"], answer: "substitute" },
      { options: ["closely", "closure", "closeness", "closed"], answer: "closely" },
    ],
  },
  {
    id: "rwfib-020",
    task: "rwfib",
    title: "Light in Gothic cathedrals",
    difficulty: "hard",
    topic: "Architecture",
    text:
      "Gothic architecture emerged in northern France in the twelfth century and spread across much of Europe. Its builders sought to create churches that were taller and filled with more light than earlier buildings, whose thick walls and small windows made their interiors {{0}} dark. Several structural innovations made this possible. Pointed arches {{1}} the weight of the roof more steeply downwards than rounded ones, reducing the outward push on the walls. Ribbed vaults concentrated this weight onto a {{2}} number of points, and flying buttresses, supports built against the outside of the building, {{3}} the remaining sideways force. Because the walls no longer had to {{4}} the entire load, large parts of them could be replaced with stained glass, producing the luminous interiors for which the style is {{5}}.",
    blanks: [
      { options: ["relatively", "relative", "relation", "relatives"], answer: "relatively" },
      { options: ["direct", "directly", "director", "direction"], answer: "direct" },
      { options: ["limited", "limiting", "limitation", "limits"], answer: "limited" },
      { options: ["counteracted", "contracted", "contacted", "contradicted"], answer: "counteracted" },
      { options: ["bear", "bare", "bore", "born"], answer: "bear" },
      { options: ["renowned", "announced", "pronounced", "denounced"], answer: "renowned" },
    ],
  },

  // ======================= Reading MC, multiple answers =======================
  {
    id: "mcm-005",
    task: "mcm",
    title: "Protected cycle lanes",
    difficulty: "medium",
    topic: "Society",
    passage:
      "In many cities, the number of people who cycle to work has remained low despite campaigns encouraging residents to leave their cars at home. Surveys repeatedly suggest that the main obstacle is not distance or weather but a perception of danger: many potential cyclists say they would ride if they felt safe doing so. Painted cycle lanes, which simply mark out a strip of the road, do little to address this concern, because cyclists are still separated from fast-moving traffic only by a line. Cities that have succeeded in increasing cycling have tended to build physically protected lanes, separated from vehicles by kerbs, posts or parked cars, and to connect them into a continuous network. A single protected lane that ends abruptly at a busy junction offers limited benefit, since a journey is only as safe as its most dangerous section. Such investments can be controversial. Local businesses sometimes fear that removing parking spaces will reduce the number of customers, although studies in several cities have found that cyclists and pedestrians tend to visit local shops more often than drivers do, even if they spend less on each visit. Planners also point out that a protected lane can carry many more people per hour than a lane of car traffic.",
    question: "Which of the following statements are supported by the passage?",
    options: [
      "Concern about safety discourages many people from cycling.",
      "Painted lanes are generally as effective as protected lanes.",
      "A connected network of protected lanes matters more than isolated stretches.",
      "Cyclists spend more money per shop visit than drivers.",
      "Bad weather is the main reason people choose not to cycle.",
      "Removing parking spaces always reduces business for local shops.",
    ],
    answers: [0, 2],
    explanation:
      "Surveys show the main obstacle is 'a perception of danger' (A), and the passage stresses connecting lanes 'into a continuous network' because a lane that 'ends abruptly' offers limited benefit (C). D is the most tempting distractor, but the passage says cyclists visit shops more often 'even if they spend less on each visit', which is the opposite. B contradicts the criticism of painted lanes, E contradicts 'not distance or weather', and F turns a fear that businesses have into a fact the studies do not support.",
  },
  {
    id: "mcm-006",
    task: "mcm",
    title: "The gut microbiome",
    difficulty: "hard",
    topic: "Health",
    passage:
      "The human digestive tract is home to trillions of microorganisms, collectively known as the gut microbiome. For most of the history of medicine, these microbes received little attention, and bacteria were regarded mainly as causes of disease. It is now clear that many gut microbes perform useful functions. Some break down dietary fibre that human enzymes cannot digest, producing compounds that nourish the cells lining the colon. Others help to train the immune system or occupy space that might otherwise be colonised by harmful species. The composition of the microbiome varies considerably from person to person and is shaped by diet, medication, age and environment. Courses of antibiotics, for instance, can sharply reduce its diversity, although it often recovers, at least partly, within weeks or months. Researchers have reported associations between unusual microbiome profiles and a range of conditions, from inflammatory bowel disease to obesity. Interpreting these findings is difficult, however. An association does not show that changes in the microbiome cause a disease; in some cases, the illness itself, or the medicines used to treat it, may be what alters the microbial community. Many of the strongest findings about cause and effect so far come from experiments on laboratory animals, and it remains uncertain how far they apply to humans.",
    question: "According to the passage, which of the following are true?",
    options: [
      "Some gut bacteria break down substances that human enzymes cannot digest.",
      "The gut microbiome is broadly identical in all healthy adults.",
      "Antibiotics permanently destroy the diversity of the microbiome.",
      "A disease may itself be responsible for changes in a patient's microbiome.",
      "Researchers have proved that an unusual microbiome causes obesity in humans.",
      "Some evidence about cause and effect comes from studies on animals rather than people.",
      "Gut microbes play no part in the immune system.",
    ],
    answers: [0, 3, 5],
    explanation:
      "The passage says some microbes 'break down dietary fibre that human enzymes cannot digest' (A), that 'the illness itself ... may be what alters the microbial community' (D), and that many of the strongest causal findings 'come from experiments on laboratory animals' (F). E is the most tempting distractor, because obesity is mentioned, but the passage reports only 'associations' and warns that association does not show cause. B contradicts 'varies considerably from person to person', C ignores the statement that the microbiome 'often recovers', and G contradicts 'help to train the immune system'.",
  },
  {
    id: "mcm-007",
    task: "mcm",
    title: "Lithium-ion batteries",
    difficulty: "medium",
    topic: "Technology",
    passage:
      "Lithium-ion batteries power devices ranging from mobile phones to electric cars. When the battery is charged, lithium ions move from the positive electrode to the negative electrode, where they are stored; when it is in use, they travel back, and electrons flow through an external circuit to provide power. The popularity of these batteries is due largely to their high energy density: they store more energy for their weight than older rechargeable technologies such as lead-acid batteries, which makes them especially suitable for portable devices and vehicles. They are not without drawbacks, however. Their capacity gradually declines with repeated charging, and this tends to happen faster when batteries are kept at high temperatures or regularly charged to their full capacity. If damaged or poorly manufactured, they can overheat and, in rare cases, catch fire. The materials used in them raise further concerns. Mining lithium, cobalt and nickel can cause environmental damage, and supplies of some of these metals are concentrated in a small number of countries. Recycling could ease both problems, but recovering the metals from used batteries is currently complex and expensive, and researchers are exploring both better recycling methods and battery designs that need less cobalt.",
    question: "According to the passage, which of the following are drawbacks of lithium-ion batteries?",
    options: [
      "They are heavier than lead-acid batteries that store the same amount of energy.",
      "Their storage capacity decreases with repeated use.",
      "They may overheat if they are damaged.",
      "They cannot be recycled at all.",
      "Supplies of some of the metals they contain come from only a few countries.",
      "They can only be charged at high temperatures.",
    ],
    answers: [1, 2, 4],
    explanation:
      "The passage lists declining capacity 'with repeated charging' (B), the risk that damaged batteries 'can overheat' (C), and the concentration of some metal supplies 'in a small number of countries' (E). D is tempting because recycling is described as a problem, but the passage says it is 'complex and expensive', not impossible, and that researchers are improving it. A reverses the energy-density advantage, and F misreads the point that high temperatures speed up the loss of capacity.",
  },
  {
    id: "mcm-008",
    task: "mcm",
    title: "Labour after the Black Death",
    difficulty: "hard",
    topic: "History",
    passage:
      "The Black Death, which swept across Europe between 1347 and 1351, killed a large proportion of the population, with many historians estimating losses of between a third and a half in the worst-affected regions. Beyond the immediate human tragedy, the epidemic had lasting economic consequences. With so many workers dead, labour became scarce, and surviving peasants and labourers found themselves in a stronger bargaining position. In parts of western Europe, wages rose, and some peasants were able to negotiate better terms with landowners or to move in search of higher pay. Landowners and rulers did not accept these changes willingly. In England, for example, laws were introduced in the years after the plague that attempted to hold wages at their earlier levels and to restrict the movement of workers. Such measures were difficult to enforce and were widely resented, and historians often see this resentment as one of the causes of the uprising of 1381 known as the Peasants' Revolt. The effects were not the same everywhere, however. In parts of eastern Europe, peasants' freedoms were eventually reduced rather than expanded, and serfdom became more firmly established in the centuries that followed, although historians debate how far this was connected to the plague.",
    question: "According to the passage, which of the following happened after the Black Death?",
    options: [
      "Wages increased in parts of western Europe.",
      "Labourers gained bargaining power in some regions.",
      "English laws successfully kept wages at their pre-plague levels.",
      "Serfdom came to an end throughout Europe.",
      "The population of Europe doubled within a generation.",
      "Some peasants moved to find better-paid work.",
      "Landowners willingly accepted higher wages.",
    ],
    answers: [0, 1, 5],
    explanation:
      "The passage states that 'wages rose' in parts of western Europe (A), that survivors were 'in a stronger bargaining position' (B), and that some peasants were able 'to move in search of higher pay' (F). C is the most tempting distractor: England did pass wage laws, but they were 'difficult to enforce', so the passage does not say they succeeded. D contradicts the point about eastern Europe, G contradicts 'did not accept these changes willingly', and population growth (E) is never mentioned.",
  },
  {
    id: "mcm-009",
    task: "mcm",
    title: "How birds find their way",
    difficulty: "easy",
    topic: "Science",
    passage:
      "Every year, billions of birds migrate between their breeding grounds and the places where they spend the winter, and many return to the same locations with remarkable accuracy. Scientists have found that birds use several different sources of information to find their way. Many species that fly during the day appear to use the position of the sun, adjusting for its movement across the sky with the help of an internal clock. Birds that migrate at night can use the stars; experiments in planetariums have shown that some young birds learn to recognise the point in the sky around which the stars appear to rotate. Many birds can also detect the Earth's magnetic field, which gives them a sense of direction even when the sky is cloudy. Closer to their destination, familiar landmarks such as coastlines, rivers and mountains may help, and some seabirds appear to rely partly on smell. Young birds on their first migration have less experience to draw on than adults, and in some species they seem to follow an inherited direction and distance rather than a route they have learned.",
    question: "According to the passage, which of the following do birds use to navigate?",
    options: [
      "The position of the sun",
      "The Earth's magnetic field",
      "Calls made by other species",
      "The stars in the night sky",
      "Changes in air temperature",
      "Routes taught by adults of other species",
    ],
    answers: [0, 1, 3],
    explanation:
      "The passage names the sun (A), the Earth's magnetic field (B) and the stars (D) as sources of direction. F is tempting because the passage contrasts young and adult birds, but it says young birds may follow an 'inherited' direction, not a route taught by others, and other species are never mentioned. Sounds (C) and air temperature (E) do not appear in the passage at all.",
  },
  {
    id: "mcm-010",
    task: "mcm",
    title: "Working in the gig economy",
    difficulty: "medium",
    topic: "Economics",
    passage:
      "The term gig economy describes work arranged through digital platforms, in which people are paid for individual tasks, such as a delivery or a ride, rather than receiving a regular wage. Supporters argue that this arrangement offers flexibility: workers can choose when and how much to work, which may suit students, carers or people seeking extra income alongside another job. For consumers, platforms have made many services quicker and more convenient to obtain. Critics, however, point out that this flexibility comes with insecurity. Because gig workers are often classified as self-employed contractors rather than employees, in some countries they may not be entitled to benefits such as paid holidays, sick pay or a minimum wage. Their income can vary considerably from week to week, depending on demand and on how the platform distributes work. Some platforms also use automated systems to allocate tasks and assess performance, and workers may find these decisions difficult to understand or challenge. Courts and governments in several countries have begun to examine whether particular groups of platform workers should be treated as employees, and the outcomes have varied from one jurisdiction to another.",
    question: "Which of the following concerns about gig work are mentioned in the passage?",
    options: [
      "Workers may not be entitled to sick pay.",
      "Earnings can be unpredictable.",
      "Platforms make services more expensive for consumers.",
      "Automated decisions can be hard for workers to question.",
      "Gig work is illegal in most countries.",
      "Workers are required to work fixed hours.",
    ],
    answers: [0, 1, 3],
    explanation:
      "Critics note that gig workers may lack 'sick pay' (A), that income 'can vary considerably from week to week' (B), and that automated decisions may be 'difficult to understand or challenge' (D). E is tempting because courts and governments are examining the issue, but they are deciding how workers should be classified, not banning the work. C contradicts the point that services are 'quicker and more convenient', and F contradicts the flexibility to 'choose when and how much to work'.",
  },

  // ======================= Re-order Paragraphs =======================
  {
    id: "rop-006",
    task: "rop",
    title: "The discovery of X-rays",
    difficulty: "easy",
    topic: "History",
    paragraphs: [
      "In 1895, the German physicist Wilhelm Roentgen was experimenting with electric currents passed through glass tubes from which most of the air had been removed.",
      "During one experiment, he noticed that a nearby screen coated with a fluorescent chemical began to glow, even though the tube was covered in black card.",
      "He concluded that an unknown kind of ray must be passing through the card, and he called it an X-ray, using the letter that mathematicians use for an unknown quantity.",
      "Soon afterwards, he found that these rays could pass through human flesh but not through bone, and he produced an image of the bones in his wife's hand.",
      "Within months, doctors in many countries were using the new rays to locate broken bones and swallowed objects.",
    ],
    explanation:
      "Sentence 1 introduces the scientist, date and experiment in full, so it opens the text. 'One experiment' in sentence 2 refers to the experiments just described, and 'the tube' needs 'glass tubes'. Sentence 3 explains the glowing screen and names the ray. 'These rays' in sentence 4 refers back to the X-ray, and 'Soon afterwards' signals the next step. Sentence 5 closes with the wider result, 'the new rays' being used by doctors.",
  },
  {
    id: "rop-007",
    task: "rop",
    title: "How tea became cheap",
    difficulty: "medium",
    topic: "History",
    paragraphs: [
      "Tea was little known in Britain until the middle of the seventeenth century, when it began to be sold in London coffee houses.",
      "At first, it was an expensive luxury, partly because it had to be shipped from China and partly because it was heavily taxed.",
      "These high taxes encouraged widespread smuggling, and by the late eighteenth century a large share of the tea drunk in Britain may have entered the country illegally.",
      "In 1784, the government responded by cutting the tax sharply, which made legal tea cheaper and smuggling far less profitable.",
      "As prices fell, tea became an everyday drink for people of all social classes.",
    ],
    explanation:
      "Sentence 1 names tea and sets the scene, so it comes first. 'At first' in sentence 2 follows the arrival of tea, and 'it' refers to tea. 'These high taxes' in sentence 3 picks up 'heavily taxed'. In sentence 4, the government 'responded' to the smuggling problem. Sentence 5 shows the result of the tax cut: 'As prices fell' depends on 'made legal tea cheaper'.",
  },
  {
    id: "rop-008",
    task: "rop",
    title: "The dropped kerb",
    difficulty: "medium",
    topic: "Society",
    paragraphs: [
      "Universal design is the idea that buildings, products and environments should be usable by as many people as possible without the need for special adaptation.",
      "A familiar example is the dropped kerb, the sloped section of pavement found at many road crossings.",
      "Although it was introduced mainly to help wheelchair users, it soon proved useful to many others.",
      "Parents with pushchairs, travellers with wheeled suitcases and delivery workers with trolleys all benefit from it every day.",
      "This pattern, in which a feature designed for one group ends up helping a much wider population, is often referred to by the American term 'the curb-cut effect'.",
    ],
    explanation:
      "Sentence 1 defines the general idea and can stand alone. 'A familiar example' in sentence 2 must follow the idea it illustrates. 'It' in sentence 3 refers to the dropped kerb. Sentence 4 lists the 'many others' mentioned in sentence 3. 'This pattern' in sentence 5 summarises the whole example, so it comes last.",
  },
  {
    id: "rop-009",
    task: "rop",
    title: "How insurance spreads risk",
    difficulty: "hard",
    topic: "Economics",
    paragraphs: [
      "Insurance works by spreading risk across a large number of people.",
      "Each policyholder pays a relatively small, predictable amount, known as a premium, into a common fund.",
      "Although any individual may suffer an unexpected loss, the insurer can estimate fairly accurately how many claims it will receive across the whole group in a given year.",
      "This allows it to set premiums at a level that covers the expected claims as well as its own costs.",
      "The arrangement breaks down, however, if people who know they face high risks are much more likely to buy cover than those who do not, a problem economists call adverse selection.",
    ],
    explanation:
      "Sentence 1 states the general principle. Sentence 2 explains how the 'large number of people' contribute, introducing 'premium' and 'a common fund'. Sentence 3 contrasts the individual with 'the whole group'. 'This allows it' in sentence 4 refers to the insurer's ability to estimate claims, and 'premiums' has already been defined. 'However' and 'The arrangement' in sentence 5 signal a limitation of the whole system described so far.",
  },
  {
    id: "rop-010",
    task: "rop",
    title: "Reading tree rings",
    difficulty: "medium",
    topic: "Science",
    paragraphs: [
      "In many parts of the world, trees add a new layer of wood each year, creating a pattern of rings that can be seen when a trunk is cut across.",
      "In dry regions, the width of each ring depends largely on rainfall, so a wet year typically produces a wider ring than a dry one.",
      "Because neighbouring trees experience the same weather, they tend to share the same sequence of wide and narrow rings.",
      "By matching these sequences between living trees and older timber, scientists have built continuous records stretching back thousands of years.",
      "Such records allow researchers to date wooden objects, such as the beams of old buildings, often to the exact year in which the tree was felled.",
    ],
    explanation:
      "Sentence 1 introduces tree rings. Sentence 2 explains why rings differ in width. Sentence 3 builds on this: trees with the same weather share 'the same sequence of wide and narrow rings'. 'These sequences' in sentence 4 refers back to sentence 3. 'Such records' in sentence 5 refers to the 'continuous records' in sentence 4.",
  },
  {
    id: "rop-011",
    task: "rop",
    title: "The flipped classroom",
    difficulty: "easy",
    topic: "Education",
    paragraphs: [
      "In a traditional course, students listen to explanations in class and then practise applying them at home.",
      "A flipped classroom reverses this arrangement.",
      "Students first study new material on their own, often by watching short recorded lectures before the lesson.",
      "Class time is then used for problem-solving, discussion and other activities in which the teacher can offer help.",
      "Supporters argue that this makes better use of the teacher, who is present when students are most likely to get stuck.",
    ],
    explanation:
      "Sentence 1 describes the traditional model, which 'this arrangement' in sentence 2 refers to. Sentence 3 explains the first step with 'first', and sentence 4 continues with 'then'. In sentence 5, 'this' refers to the whole flipped approach, and the comment about the teacher being present builds on the classroom activities in sentence 4.",
  },
  {
    id: "rop-012",
    task: "rop",
    title: "Farming on terraces",
    difficulty: "medium",
    topic: "Environment",
    paragraphs: [
      "On steep hillsides, heavy rain can quickly wash away the thin layer of fertile soil on which farming depends.",
      "To prevent this, farmers in many mountainous regions have built terraces, cutting the slope into a series of flat steps supported by walls of earth or stone.",
      "Each step slows the flow of water downhill, giving it time to soak into the ground instead of carrying soil away.",
      "As a result, terraces not only reduce erosion but also help to retain moisture for crops.",
      "Their main disadvantage is the labour they require, since the walls must be inspected and repaired regularly to stop them from collapsing.",
    ],
    explanation:
      "Sentence 1 presents the problem. 'To prevent this' in sentence 2 refers to soil being washed away and introduces terraces. 'Each step' in sentence 3 refers to the 'flat steps'. 'As a result' in sentence 4 draws the conclusion from sentence 3. Sentence 5 turns to a disadvantage, and 'the walls' refers back to the walls in sentence 2.",
  },
  {
    id: "rop-013",
    task: "rop",
    title: "How Impressionism got its name",
    difficulty: "hard",
    topic: "Arts",
    paragraphs: [
      "In the mid-nineteenth century, success for a French painter depended largely on acceptance by the Salon, the official art exhibition held in Paris.",
      "Its judges favoured carefully finished paintings of historical, religious and mythological subjects.",
      "A group of younger artists, including Claude Monet and Camille Pissarro, were more interested in everyday scenes and the changing effects of light, often working outdoors with quick, visible brushstrokes.",
      "Frustrated by repeated rejection, they organised their own independent exhibition in 1874.",
      "A hostile critic, mocking the title of Monet's painting Impression, Sunrise, called the group 'Impressionists', a name the artists eventually adopted themselves.",
    ],
    explanation:
      "Sentence 1 introduces the Salon and its importance. 'Its judges' in sentence 2 needs the Salon as a reference. Sentence 3 contrasts the younger artists' interests with the judges' taste. 'They' in sentence 4 refers to the group, and 'repeated rejection' follows from the clash described in sentences 2 and 3. Sentence 5 describes the reaction to that exhibition and explains the name.",
  },
  {
    id: "rop-014",
    task: "rop",
    title: "Seeing the doctor online",
    difficulty: "easy",
    topic: "Health",
    paragraphs: [
      "Telemedicine allows patients to consult healthcare professionals without visiting a clinic in person.",
      "Instead, the appointment takes place by telephone or video call.",
      "This can save considerable time and money for people who live far from medical services or who find travel difficult.",
      "However, not every problem can be assessed remotely, because some conditions require a physical examination or tests.",
      "For this reason, many health services use remote consultations alongside, rather than instead of, face-to-face care.",
    ],
    explanation:
      "Sentence 1 defines telemedicine. 'Instead' in sentence 2 contrasts with 'visiting a clinic in person'. 'This' in sentence 3 refers to remote appointments and gives an advantage. 'However' in sentence 4 introduces a limitation, and 'For this reason' in sentence 5 draws a conclusion from that limitation.",
  },
  {
    id: "rop-015",
    task: "rop",
    title: "Open-plan offices",
    difficulty: "hard",
    topic: "Society",
    paragraphs: [
      "Open-plan offices, in which employees work in a shared space without walls or private rooms, became widespread in the second half of the twentieth century.",
      "Their supporters claimed that removing physical barriers would encourage colleagues to talk more and share ideas.",
      "Some later studies, however, have reported the opposite effect, finding that face-to-face conversation can decrease after a move to an open layout.",
      "One explanation is that workers who feel constantly observed may withdraw, wearing headphones and communicating by email or messaging instead.",
      "These findings suggest that the design of a workplace influences behaviour in ways that are not always easy to predict.",
    ],
    explanation:
      "Sentence 1 defines open-plan offices in full. 'Their supporters' in sentence 2 needs the offices as a reference. 'The opposite effect' in sentence 3 only makes sense after the claim that people would talk more. 'One explanation' in sentence 4 explains the reduced conversation. 'These findings' in sentence 5 sums up the studies and the explanation.",
  },

  // ======================= Reading FIB (drag-and-drop) =======================
  {
    id: "rfib-006",
    task: "rfib",
    title: "Locating an earthquake",
    difficulty: "easy",
    topic: "Science",
    text:
      "A seismograph is an instrument that {{0}} the movement of the ground during an earthquake. Earthquakes release energy in the form of waves that travel through the Earth. The fastest of these, called primary waves, are the first to {{1}} at a recording station, followed by slower secondary waves. By measuring the time {{2}} between the arrival of the two types of wave, scientists can calculate how far away the earthquake occurred. Combining such measurements from at least three stations allows them to {{3}} its location.",
    answers: ["records", "arrive", "gap", "pinpoint"],
    distractors: ["arrival", "ignore", "distant"],
  },
  {
    id: "rfib-007",
    task: "rfib",
    title: "How fair trade works",
    difficulty: "medium",
    topic: "Economics",
    text:
      "Fair trade schemes aim to improve the position of small producers in poorer countries, such as farmers who grow coffee, cocoa or bananas. Under these schemes, buyers agree to pay a minimum price that is intended to cover the {{0}} of sustainable production, even when world market prices fall. They also pay an additional sum, known as a premium, which producer groups can {{1}} in community projects such as schools or clean water. Supporters say this offers farmers greater {{2}}, allowing them to plan ahead. Critics argue that only a small share of the higher price paid by shoppers {{3}} the farmers themselves.",
    answers: ["costs", "invest", "security", "reaches"],
    distractors: ["costly", "insecurity", "reach"],
  },
  {
    id: "rfib-008",
    task: "rfib",
    title: "Farming in towers",
    difficulty: "medium",
    topic: "Environment",
    text:
      "Vertical farms grow crops indoors in stacked layers, often inside converted warehouses close to the cities they {{0}}. Plants are usually grown without soil, with their roots in a nutrient solution, and LED lights {{1}} the sun. Because the environment is fully controlled, crops can be harvested all year round and pests are rarely a problem, so few or no pesticides are needed. The main {{2}} is energy: lighting and climate control are expensive, which is why most vertical farms currently {{3}} on fast-growing, high-value crops such as salad leaves and herbs rather than staple grains.",
    answers: ["supply", "replace", "drawback", "concentrate"],
    distractors: ["replacement", "advantage", "concentrated"],
  },
  {
    id: "rfib-009",
    task: "rfib",
    title: "Caffeine and sleepiness",
    difficulty: "easy",
    topic: "Health",
    text:
      "Caffeine is the most widely consumed stimulant in the world, found in coffee, tea, cola and chocolate. It works mainly by blocking the effects of adenosine, a chemical that {{0}} up in the brain during waking hours and makes us feel sleepy. This is why a cup of coffee can make people feel more {{1}}. However, the effects can last for several hours, so drinking coffee late in the day may make it harder to fall {{2}} at night. People who consume caffeine regularly can also develop a {{3}}, meaning they need larger amounts to feel the same effect.",
    answers: ["builds", "alert", "asleep", "tolerance"],
    distractors: ["sleepy", "tolerant", "build"],
  },
  {
    id: "rfib-010",
    task: "rfib",
    title: "A language for everyone",
    difficulty: "hard",
    topic: "Society",
    text:
      "Esperanto was created in the late nineteenth century by L. L. Zamenhof, who hoped that a neutral second language, belonging to no particular nation, would {{0}} understanding between peoples. Its grammar was designed to be highly regular: nouns always end in -o, adjectives in -a, and there are no {{1}} verbs. These features make it relatively quick to learn. Yet Esperanto has never achieved the global {{2}} its creator imagined. Languages tend to spread not because they are easy but because they are useful, and a language becomes useful largely when many others already speak it, a cycle that is difficult for a newcomer to {{3}}.",
    answers: ["foster", "irregular", "status", "break"],
    distractors: ["regular", "fostered", "broken"],
  },
  {
    id: "rfib-011",
    task: "rfib",
    title: "Writing on papyrus",
    difficulty: "medium",
    topic: "History",
    text:
      "For thousands of years, the ancient Egyptians wrote on papyrus, a material made from a tall reed that grew along the banks of the Nile. The stems were cut into thin strips, which were laid side by side in two layers, one {{0}} to the other. The layers were then pressed together and dried, forming a sheet, and sheets could be joined to make long rolls. Papyrus was light and {{1}} to carry, but it was vulnerable to damp, so most of the examples that {{2}} today were found in the dry conditions of the Egyptian desert. It remained in use around the Mediterranean long after ancient Egyptian civilisation had {{3}}.",
    answers: ["perpendicular", "easy", "survive", "declined"],
    distractors: ["easily", "survival", "decline"],
  },
  {
    id: "rfib-012",
    task: "rfib",
    title: "Computing in the cloud",
    difficulty: "easy",
    topic: "Technology",
    text:
      "Cloud computing allows people and organisations to store files and run software on remote servers that they {{0}} over the internet, instead of on their own computers. A company that uses cloud services does not need to buy and maintain expensive equipment; it simply pays for the computing power it {{1}}. This makes it easy to {{2}} up quickly when demand rises. However, relying on an outside provider means that data is held by a third party, which raises questions about privacy and {{3}}.",
    answers: ["access", "uses", "scale", "security"],
    distractors: ["secure", "using", "scales"],
  },
  {
    id: "rfib-013",
    task: "rfib",
    title: "Theatre in ancient Athens",
    difficulty: "medium",
    topic: "Arts",
    text:
      "Theatre in Europe has its roots in ancient Athens, where plays were performed at religious festivals held in {{0}} of the god Dionysus. Performances took place in large open-air theatres built into hillsides, allowing thousands of spectators to watch at once. Actors wore masks, which helped audiences {{1}} different characters from a distance, and a single actor could play several roles simply by changing masks. A group of performers known as the chorus sang and danced, often {{2}} on the events of the play. Playwrights competed for prizes, and some works by a few of them, including Sophocles and Euripides, have {{3}} to this day.",
    answers: ["honour", "identify", "commenting", "survived"],
    distractors: ["honest", "identity", "comment"],
  },
  {
    id: "rfib-014",
    task: "rfib",
    title: "Marking group projects",
    difficulty: "medium",
    topic: "Education",
    text:
      "Group projects are common in higher education because they can help students develop teamwork and communication skills. Assessing them fairly, however, is a {{0}} challenge. When every member receives the same mark, students who contribute little may benefit from the efforts of others, while hard-working students may feel their work has not been {{1}}. To reduce this problem, some lecturers ask students to evaluate one another's contributions and {{2}} individual marks accordingly. Others combine a shared group mark with an individual {{3}}, such as a short reflective report.",
    answers: ["persistent", "recognised", "adjust", "component"],
    distractors: ["persist", "recognisable", "opponent"],
  },
  {
    id: "rfib-015",
    task: "rfib",
    title: "Too much light at night",
    difficulty: "easy",
    topic: "Environment",
    text:
      "Light pollution is the excessive or poorly directed use of artificial light at night. In many cities, the night sky is now so bright that only a {{0}} of stars can be seen. Artificial light can also affect wildlife. Newly hatched sea turtles, for example, normally find the ocean by moving towards the brighter horizon over the water, but bright lights on land can {{1}} them in the wrong direction. Fortunately, the problem is relatively easy to {{2}}: shielding lamps so that they point downwards and turning off unnecessary lights can make a large {{3}}.",
    answers: ["handful", "lead", "reduce", "difference"],
    distractors: ["handy", "increase", "different"],
  },
  {
    id: "rfib-016",
    task: "rfib",
    title: "Vitamin D and sunlight",
    difficulty: "medium",
    topic: "Health",
    text:
      "Unlike most vitamins, vitamin D can be made by the body itself. When skin is exposed to sunlight, ultraviolet rays {{0}} a chemical reaction that leads to its formation. The vitamin helps the body absorb calcium, which is essential for healthy bones. People who live far from the equator may not get enough sunlight to {{1}} sufficient amounts during the winter months, and those who spend most of their time indoors face a similar {{2}}. In such cases, doctors may recommend dietary sources, such as oily fish, or {{3}}.",
    answers: ["trigger", "produce", "risk", "supplements"],
    distractors: ["triggered", "supplementary", "risky"],
  },
  {
    id: "rfib-017",
    task: "rfib",
    title: "Independent central banks",
    difficulty: "hard",
    topic: "Economics",
    text:
      "In many countries, decisions about interest rates are made not by elected politicians but by independent central banks. The {{0}} for this arrangement is that politicians may be tempted to lower interest rates before an election to boost short-term growth, even if doing so {{1}} the risk of higher inflation later. By handing these decisions to officials who do not face voters, governments aim to make their commitment to stable prices more {{2}}. Critics, however, question whether such important economic choices should be made by people who are not directly {{3}} to the public.",
    answers: ["rationale", "raises", "credible", "accountable"],
    distractors: ["rational", "credit", "accounted"],
  },
  {
    id: "rfib-018",
    task: "rfib",
    title: "Navigating the Pacific",
    difficulty: "medium",
    topic: "History",
    text:
      "Over many centuries, Polynesian voyagers settled islands scattered across a vast area of the Pacific Ocean, from Hawaii to New Zealand, without compasses or written charts. Instead, navigators relied on a detailed knowledge of the night sky, memorising the points on the horizon where particular stars rose and set. They also read the {{0}} of ocean swells, which could indicate land beyond the horizon, and watched seabirds that {{1}} out to sea to feed during the day and returned to land at dusk. This knowledge was not written down but {{2}} on orally from one generation to the next, and in recent decades it has been {{3}} by voyagers sailing traditional canoes.",
    answers: ["patterns", "flew", "passed", "revived"],
    distractors: ["flown", "passing", "survived"],
  },
  {
    id: "rfib-019",
    task: "rfib",
    title: "The puzzle of dark matter",
    difficulty: "hard",
    topic: "Science",
    text:
      "In the 1970s, astronomers measuring how fast stars orbit the centres of spiral galaxies found something unexpected. Stars far from the centre were moving much faster than the visible matter in the galaxy could {{0}} for. At such speeds, they should have been flung out into space. The most widely accepted explanation is that galaxies contain large amounts of dark matter, which does not emit or {{1}} light and can be detected only through its gravitational effects. Despite decades of searching, however, no experiment has yet {{2}} identified the particles it might consist of, and a minority of physicists argue that our theory of gravity may instead need to be {{3}}.",
    answers: ["account", "reflect", "directly", "revised"],
    distractors: ["count", "direct", "reflected"],
  },
  {
    id: "rfib-020",
    task: "rfib",
    title: "Noise in the city",
    difficulty: "medium",
    topic: "Society",
    text:
      "Noise is often treated as a minor nuisance, but long-term exposure to loud traffic or aircraft can have serious effects on health. Persistent noise at night can {{0}} sleep, and research has linked chronic exposure to raised stress levels and a higher risk of heart disease. Cities have several ways to {{1}} the problem, including quieter road surfaces, lower speed limits and noise barriers along major roads. Planners are also paying more {{2}} to the value of quiet spaces, such as parks and courtyards, where residents can {{3}} from the noise of the street.",
    answers: ["disrupt", "tackle", "attention", "retreat"],
    distractors: ["disruption", "attentive", "retreated"],
  },

  // ======================= Reading MC, single answer =======================
  {
    id: "mcs-005",
    task: "mcs",
    title: "Science with volunteers",
    difficulty: "easy",
    topic: "Science",
    passage:
      "Citizen science projects invite members of the public to take part in scientific research. Volunteers might count birds in their gardens, record the dates when local plants first flower, or classify images of distant galaxies online. Because thousands of people can take part, these projects can gather far more observations, over a wider area, than a small team of professional researchers could manage alone. Data collected by volunteers can contain errors, so well-designed projects provide clear instructions and use checking methods, such as asking several people to classify the same image. Many participants also report that taking part has increased their interest in science.",
    question: "According to the passage, what is the main scientific advantage of citizen science?",
    options: [
      "It removes the need for professional researchers.",
      "It allows far more observations to be collected than a small team could gather.",
      "Volunteers' data is more accurate than data collected by professionals.",
      "It is mainly a way of increasing public interest in science.",
    ],
    answer: 1,
    explanation:
      "The passage says these projects 'can gather far more observations, over a wider area, than a small team of professional researchers could manage alone'. D is tempting because the last sentence mentions increased interest, but that is a side benefit reported by participants, not the scientific advantage. A goes beyond the passage, and C contradicts the point that volunteer data 'can contain errors'.",
  },
  {
    id: "mcs-006",
    task: "mcs",
    title: "The minimum wage debate",
    difficulty: "hard",
    topic: "Economics",
    passage:
      "Economists have long debated the effects of minimum wages. A simple model of the labour market predicts that if the government sets a wage floor above the level that would otherwise prevail, employers will hire fewer workers, so some of the people the policy is meant to help may lose their jobs. A number of empirical studies, however, have found that moderate increases in the minimum wage have had little measurable effect on employment. Several explanations have been offered. Employers may respond by raising prices slightly, accepting lower profits or benefiting from reduced staff turnover, as better-paid workers are less likely to leave. Many economists nonetheless agree that the effects depend on the size of the increase relative to local wages: a minimum wage that is modest in a high-wage city could be very high in a region where pay is generally low.",
    question: "Which statement is best supported by the passage?",
    options: [
      "Minimum wages always cause significant job losses.",
      "Minimum wages have no effect on employment at any level.",
      "The effect of a minimum wage on jobs depends partly on how high it is compared with local pay.",
      "Employers usually respond to a higher minimum wage by closing their businesses.",
      "Simple economic models accurately predict the effects of minimum wages.",
    ],
    answer: 2,
    explanation:
      "The final sentence states that the effects 'depend on the size of the increase relative to local wages'. B is the most tempting distractor, but the studies found little effect only for 'moderate' increases, and the passage warns that a wage could be 'very high' in a low-pay region. A and E are undermined by the empirical studies, and D is never suggested; the passage mentions higher prices, lower profits and lower turnover instead.",
  },
  {
    id: "mcs-007",
    task: "mcs",
    title: "Serifs and readability",
    difficulty: "medium",
    topic: "Arts",
    passage:
      "Designers have long argued about whether serif typefaces, which have small strokes at the ends of their letters, are easier to read than sans-serif typefaces, which do not. It was once widely claimed that serifs guide the eye along a line of text, making printed books easier to read. On early computer screens, however, low resolution made fine details such as serifs appear blurred, so sans-serif fonts became common for digital text. Modern high-resolution displays have largely removed this problem. Studies comparing the two styles have generally produced mixed or inconclusive results, and many researchers now believe that factors such as letter size, spacing, line length and contrast with the background affect readability more than whether or not a font has serifs.",
    question: "What does the passage suggest about serifs and readability?",
    options: [
      "Serif fonts are clearly easier to read on paper.",
      "Sans-serif fonts are always better on screens.",
      "Whether a font has serifs probably matters less than other design features.",
      "Research has proved that serifs guide the eye along a line.",
    ],
    answer: 2,
    explanation:
      "The last sentence says researchers believe size, spacing, line length and contrast 'affect readability more than whether or not a font has serifs'. A is tempting because the passage mentions that this 'was once widely claimed', but the studies were 'mixed or inconclusive'. B ignores the point that modern displays have 'largely removed this problem', and D presents an old claim as a proven fact.",
  },
  {
    id: "mcs-008",
    task: "mcs",
    title: "Taxing sugary drinks",
    difficulty: "medium",
    topic: "Health",
    passage:
      "A number of countries have introduced taxes on sugary drinks in an attempt to reduce sugar consumption and the health problems associated with it, such as obesity and tooth decay. Some of these taxes are designed not only to raise prices for consumers but also to change the behaviour of manufacturers. In the United Kingdom, for example, the levy introduced in 2018 charges producers a set amount per litre of drink, with a higher rate for drinks containing more sugar and no charge for those below a minimum level. Many manufacturers responded by reducing the sugar content of their products before the tax took effect, so that they paid less or nothing at all. As a result, the amount of sugar sold in soft drinks fell, even though overall sales of soft drinks did not decline substantially.",
    question: "According to the passage, why did the amount of sugar sold in UK soft drinks fall?",
    options: [
      "Consumers bought far fewer soft drinks.",
      "Manufacturers lowered the sugar content of their drinks.",
      "The government banned drinks with high sugar levels.",
      "The tax was charged at the same rate on all drinks.",
    ],
    answer: 1,
    explanation:
      "The passage explains that manufacturers reduced sugar content 'so that they paid less or nothing at all', and 'As a result' the amount of sugar sold fell. A is the most tempting answer, but the passage states that overall sales 'did not decline substantially'. C is never mentioned, and D contradicts the description of a higher rate for sugary drinks and no charge below a minimum level.",
  },
  {
    id: "mcs-009",
    task: "mcs",
    title: "When locusts swarm",
    difficulty: "medium",
    topic: "Environment",
    passage:
      "Desert locusts usually live as solitary insects that avoid one another. After periods of good rainfall, however, vegetation grows rapidly and locust numbers increase. When the rains end and plants die back, the insects are crowded together in the remaining green areas. This crowding triggers a dramatic change: the locusts alter their colour and behaviour, become attracted to one another, and begin to move in groups. If conditions remain favourable, these groups can merge into vast swarms that travel long distances and eat crops across large regions. Because swarms are very difficult to control once they have formed, monitoring agencies focus on detecting the early stages of crowding and treating local outbreaks before they spread.",
    question: "According to the passage, what causes desert locusts to start forming groups?",
    options: [
      "A long period without any rain",
      "Being forced into close contact as green vegetation shrinks",
      "Spraying by monitoring agencies",
      "A natural attraction that locusts always feel towards one another",
    ],
    answer: 1,
    explanation:
      "The passage states that when plants die back, locusts are 'crowded together', and 'This crowding triggers a dramatic change' that makes them move in groups. A is tempting because the drying of vegetation is involved, but the sequence begins with 'good rainfall' that increases numbers, not a long drought. D contradicts the first sentence, which says locusts normally avoid one another, and C reverses the role of the agencies, who try to stop outbreaks.",
  },
  {
    id: "mcs-010",
    task: "mcs",
    title: "Memory as historical evidence",
    difficulty: "hard",
    topic: "History",
    passage:
      "Oral history involves recording interviews with people about their memories of past events. For historians, these accounts can provide perspectives that are missing from official documents, which were often produced by governments, employers or other powerful institutions and may say little about the experiences of ordinary people. Yet memory is not a simple record of the past. People forget details, combine separate events and may unconsciously reshape their recollections in the light of later experiences or of what they have heard from others. Some critics have concluded that oral testimony is too unreliable to be useful. Many oral historians reply that these features are not merely weaknesses: the ways in which people remember and interpret events can themselves reveal what those events meant to them. Oral sources, like written ones, must therefore be read critically and compared with other evidence.",
    question: "Which of the following best reflects the writer's position on oral history?",
    options: [
      "It is less reliable than written sources and should be avoided.",
      "It is valuable but, like any source, must be evaluated carefully.",
      "It gives a more accurate account of events than official documents.",
      "It is useful only when interviewees remember events precisely.",
    ],
    answer: 1,
    explanation:
      "The writer acknowledges the limits of memory but concludes that oral sources, 'like written ones, must therefore be read critically and compared with other evidence', which treats them as valuable. A is tempting because it repeats the critics' view, but the writer presents that view and then a reply to it. C confuses 'perspectives that are missing' with greater accuracy, and D contradicts the point that imperfect memories can themselves be revealing.",
  },
];
