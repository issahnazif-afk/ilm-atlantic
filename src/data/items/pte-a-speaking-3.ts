import type { Item } from '../types';

export const pteASpeaking3: Item[] = [
  // ---------------------------------------------------------------- Describe Image
  {
    id: "di-006",
    task: "di",
    exam: "pte-a",
    title: "Research funding by faculty",
    difficulty: "medium",
    topic: "Education",
    chart: {
      kind: "bar",
      title: "External research funding received by five university faculties, 2020 and 2024",
      xLabel: "Faculty",
      yLabel: "Funding (millions of dollars)",
      unit: "million dollars",
      categories: ["Medicine", "Engineering", "Sciences", "Business", "Humanities"],
      series: [
        { name: "2020", values: [60, 42, 35, 14, 9] },
        { name: "2024", values: [58, 55, 47, 19, 11] },
      ],
    },
    keyPoints: [
      "Medicine received the most funding in both years, but it fell slightly from 60 to 58 million dollars",
      "Engineering had the largest increase, up 13 million to 55 million dollars",
      "The Sciences rose by 12 million, from 35 to 47 million dollars",
      "Business grew from 14 to 19 million, while Humanities stayed smallest, rising from 9 to 11 million",
      "Every faculty except Medicine attracted more funding in 2024",
    ],
    modelAnswer:
      "This bar chart compares the external research funding received by five university faculties in 2020 and 2024. Medicine attracted the most money in both years, although its total dipped slightly from 60 to 58 million dollars. Engineering grew fastest, rising by 13 million to 55 million, followed closely by the Sciences, which climbed from 35 to 47 million. Business increased from 14 to 19 million, while Humanities remained the smallest, edging up from 9 to 11 million. Overall, funding rose everywhere except Medicine.",
  },
  {
    id: "di-007",
    task: "di",
    exam: "pte-a",
    title: "Study and work hours by year",
    difficulty: "easy",
    topic: "Education",
    chart: {
      kind: "bar",
      title: "Average weekly hours spent on independent study and paid work, by year of study",
      xLabel: "Year of study",
      yLabel: "Hours per week",
      unit: "hours",
      categories: ["Year 1", "Year 2", "Year 3", "Year 4", "Postgraduate"],
      series: [
        { name: "Independent study", values: [28, 25, 24, 30, 34] },
        { name: "Paid work", values: [8, 11, 13, 7, 9] },
      ],
    },
    keyPoints: [
      "Students in every group spent far more hours studying than working",
      "Study time fell from 28 hours in Year 1 to 24 hours in Year 3, then rose to 30 in Year 4",
      "Postgraduates studied the most, at 34 hours a week",
      "Paid work peaked at 13 hours in Year 3 and dropped to its lowest, 7 hours, in Year 4",
    ],
    modelAnswer:
      "The bar chart shows how many hours per week students spend on independent study and paid work at different stages of their degree. In every group, study clearly takes up more time than work. Study hours fall from 28 in Year 1 to 24 in Year 3, while paid work rises from 8 to a peak of 13 hours. In Year 4 the pattern reverses, with study jumping to 30 hours and work dropping to just 7. Postgraduates study the most, at 34 hours a week.",
  },
  {
    id: "di-008",
    task: "di",
    exam: "pte-a",
    title: "Mobile and desktop website visits",
    difficulty: "medium",
    topic: "Technology",
    chart: {
      kind: "line",
      title: "Share of visits to a university website by device type, 2016 to 2024",
      xLabel: "Year",
      yLabel: "Share of visits",
      unit: "%",
      categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
      series: [
        { name: "Mobile", values: [32, 38, 45, 51, 58, 62, 66, 69, 71] },
        { name: "Desktop", values: [68, 62, 55, 49, 42, 38, 34, 31, 29] },
      ],
    },
    keyPoints: [
      "In 2016 desktop devices accounted for 68% of visits and mobile for only 32%",
      "Mobile rose every year while desktop fell, so the two lines are mirror images",
      "Mobile overtook desktop in 2019, reaching 51% of visits",
      "By 2024 mobile made up 71% of visits and desktop just 29%",
      "Growth in mobile share slowed after 2020",
    ],
    modelAnswer:
      "This line graph shows the share of visits to a university website made from mobile and desktop devices between 2016 and 2024. In 2016, desktop clearly dominated, with 68 percent of visits compared with 32 percent for mobile. Over the period the two trends moved in opposite directions, and mobile overtook desktop in 2019, reaching 51 percent. By 2024, mobile accounted for 71 percent of visits, while desktop had fallen to just 29 percent. However, mobile growth slowed noticeably after 2020.",
  },
  {
    id: "di-009",
    task: "di",
    exam: "pte-a",
    title: "Wading birds in a wetland reserve",
    difficulty: "hard",
    topic: "Environment",
    chart: {
      kind: "line",
      title: "Breeding pairs of three wading bird species in a wetland reserve, 2010 to 2022",
      xLabel: "Year",
      yLabel: "Breeding pairs",
      unit: "pairs",
      categories: ["2010", "2012", "2014", "2016", "2018", "2020", "2022"],
      series: [
        { name: "Heron", values: [120, 135, 150, 170, 190, 210, 240] },
        { name: "Curlew", values: [300, 280, 240, 210, 180, 160, 150] },
        { name: "Egret", values: [20, 25, 40, 80, 130, 170, 220] },
      ],
    },
    keyPoints: [
      "Curlews were the most numerous species in 2010 with 300 pairs but halved to 150 pairs by 2022",
      "Herons grew steadily from 120 to 240 pairs, overtaking curlews by 2018",
      "Egrets increased most dramatically, from just 20 pairs to 220 pairs",
      "Egrets also overtook curlews by 2020, leaving curlews the least common species in 2022",
    ],
    modelAnswer:
      "The line graph tracks breeding pairs of three wading birds in a wetland reserve from 2010 to 2022. Curlews began as the most common species, with 300 pairs, but declined continuously to just 150 by 2022. In contrast, herons doubled steadily from 120 to 240 pairs, overtaking curlews by 2018. The most dramatic change was among egrets, which rose from only 20 pairs to 220, passing curlews by 2020. As a result, the curlew went from the most to the least common species.",
  },
  {
    id: "di-010",
    task: "di",
    exam: "pte-a",
    title: "University operating budget",
    difficulty: "easy",
    topic: "Economics",
    chart: {
      kind: "pie",
      title: "How a university's annual operating budget is spent",
      unit: "%",
      slices: [
        { label: "Staff salaries", value: 55 },
        { label: "Buildings and maintenance", value: 15 },
        { label: "Research support", value: 12 },
        { label: "Student services", value: 9 },
        { label: "IT and digital systems", value: 5 },
        { label: "Other", value: 4 },
      ],
    },
    keyPoints: [
      "Staff salaries are by far the largest cost at 55% of the budget",
      "Buildings and maintenance take 15% and research support 12%",
      "Student services account for 9%",
      "IT and digital systems (5%) and other costs (4%) are the smallest shares",
    ],
    modelAnswer:
      "This pie chart shows how a university spends its annual operating budget. By far the largest share, 55 percent, goes on staff salaries, which is more than all the other categories combined. Buildings and maintenance are the second biggest cost at 15 percent, followed by research support at 12 percent. Student services take up 9 percent. The smallest items are IT and digital systems, at 5 percent, and other costs at 4 percent. Overall, the university is mainly a people-based organisation.",
  },
  {
    id: "di-011",
    task: "di",
    exam: "pte-a",
    title: "Household food waste",
    difficulty: "medium",
    topic: "Environment",
    chart: {
      kind: "pie",
      title: "Types of avoidable food thrown away by households in one city survey",
      unit: "%",
      slices: [
        { label: "Fruit and vegetables", value: 38 },
        { label: "Bread and bakery", value: 17 },
        { label: "Prepared meals and leftovers", value: 15 },
        { label: "Dairy and eggs", value: 12 },
        { label: "Meat and fish", value: 9 },
        { label: "Other", value: 9 },
      ],
    },
    keyPoints: [
      "Fruit and vegetables are the largest category at 38% of avoidable food waste",
      "Bread and bakery (17%) and prepared meals and leftovers (15%) come next",
      "Dairy and eggs make up 12%",
      "Meat and fish and other items are the smallest shares, at 9% each",
    ],
    modelAnswer:
      "The pie chart breaks down the avoidable food that households in one city throw away. Fruit and vegetables form the largest category by a wide margin, at 38 percent, more than double any other group. Bread and bakery products account for 17 percent, and prepared meals and leftovers for a similar 15 percent. Dairy and eggs make up 12 percent, while meat and fish and other items each represent just 9 percent. This suggests that fresh, perishable produce is the main source of waste.",
  },
  {
    id: "di-012",
    task: "di",
    exam: "pte-a",
    title: "International students by region",
    difficulty: "hard",
    topic: "Education",
    chart: {
      kind: "table",
      title: "International student enrolment at one university by region of origin, 2019 and 2024",
      columns: ["Region of origin", "2019", "2024", "Change (%)"],
      rows: [
        ["East Asia", 2400, 2100, "-12.5"],
        ["South Asia", 1500, 2700, "+80"],
        ["Europe", 900, 810, "-10"],
        ["Middle East", 600, 750, "+25"],
        ["Africa", 400, 680, "+70"],
        ["Americas", 300, 360, "+20"],
        ["Total", 6100, 7400, "+21.3"],
      ],
    },
    keyPoints: [
      "Total international enrolment rose by about 21%, from 6,100 to 7,400 students",
      "South Asia grew by 80% to 2,700 students and replaced East Asia as the largest source region",
      "East Asia fell by 12.5% to 2,100 and Europe by 10% to 810",
      "Africa also grew strongly, up 70% from 400 to 680",
      "The Middle East (+25%) and the Americas (+20%) showed moderate growth",
    ],
    modelAnswer:
      "The table compares international student enrolment at one university by region of origin in 2019 and 2024. Overall, numbers rose by about 21 percent, from 6,100 to 7,400. The biggest change was in South Asia, which grew by 80 percent to 2,700 students and overtook East Asia as the largest source. East Asia, by contrast, fell by 12.5 percent to 2,100, and Europe dropped 10 percent to 810. Africa also expanded strongly, up 70 percent, while the Middle East and the Americas grew moderately.",
  },
  {
    id: "di-013",
    task: "di",
    exam: "pte-a",
    title: "Nutrition in five foods",
    difficulty: "medium",
    topic: "Health",
    chart: {
      kind: "table",
      title: "Approximate nutritional values per 100 g of five common foods",
      columns: ["Food (per 100 g)", "Energy (kcal)", "Protein (g)", "Fibre (g)"],
      rows: [
        ["Almonds", 579, 21, 12.5],
        ["Chicken breast, cooked", 165, 31, 0],
        ["Lentils, cooked", 116, 9, 8],
        ["Brown rice, cooked", 112, 2.3, 1.8],
        ["Broccoli, raw", 34, 2.8, 2.6],
      ],
    },
    keyPoints: [
      "Almonds are by far the most energy-dense food at 579 kcal and also have the most fibre, 12.5 g",
      "Cooked chicken breast has the most protein, 31 g, but no fibre",
      "Lentils combine moderate energy (116 kcal) with 9 g of protein and 8 g of fibre",
      "Broccoli has the least energy at only 34 kcal",
      "Brown rice is low in protein (2.3 g) and fibre (1.8 g)",
    ],
    modelAnswer:
      "The table compares the energy, protein and fibre in 100 grams of five foods. Almonds stand out as the most energy-dense, with 579 calories, and they also contain the most fibre, at 12.5 grams. Cooked chicken breast provides the most protein, 31 grams, but no fibre at all. Lentils offer a useful balance, with 116 calories, 9 grams of protein and 8 grams of fibre. In contrast, brown rice and broccoli are low in both nutrients, and broccoli has just 34 calories.",
  },
  {
    id: "di-014",
    task: "di",
    exam: "pte-a",
    title: "Stages of a clinical trial",
    difficulty: "medium",
    topic: "Health",
    chart: {
      kind: "process",
      title: "How a new medicine is tested before and after approval",
      steps: [
        "Laboratory and animal testing",
        "Phase 1: safety in a small group of healthy volunteers",
        "Phase 2: effectiveness and dosage in a few hundred patients",
        "Phase 3: large trial comparing the drug with existing treatment",
        "Review by a medicines regulator",
        "Phase 4: monitoring after the drug is on the market",
      ],
    },
    keyPoints: [
      "The process begins with laboratory and animal testing before any humans are involved",
      "Phase 1 tests safety in a small group of healthy volunteers",
      "Phase 2 checks effectiveness and the right dose in a few hundred patients",
      "Phase 3 is a large trial comparing the drug with existing treatments, followed by regulatory review",
      "Monitoring continues in Phase 4 after the medicine is on the market",
    ],
    modelAnswer:
      "This diagram shows the six stages a new medicine goes through. First, it is tested in the laboratory and on animals. Next, in Phase 1, researchers check its safety in a small group of healthy volunteers. Phase 2 then looks at effectiveness and the correct dosage in a few hundred patients, and Phase 3 is a large trial comparing the drug with existing treatment. After that, a medicines regulator reviews the evidence. Finally, even after approval, the drug is monitored in Phase 4.",
  },
  {
    id: "di-015",
    task: "di",
    exam: "pte-a",
    title: "From cacao pod to chocolate",
    difficulty: "easy",
    topic: "Science",
    chart: {
      kind: "process",
      title: "How chocolate is made from cacao beans",
      steps: [
        "Harvest ripe cacao pods",
        "Ferment the beans for five to seven days",
        "Dry the beans in the sun",
        "Roast the beans and crack them into nibs",
        "Grind the nibs into a thick liquid",
        "Mix with sugar and stir for many hours",
        "Cool, temper and pour into moulds",
      ],
    },
    keyPoints: [
      "The process starts with harvesting ripe cacao pods",
      "The beans are fermented for five to seven days and then dried in the sun",
      "They are roasted, cracked into nibs and ground into a thick liquid",
      "The liquid is mixed with sugar, stirred for hours, then tempered and poured into moulds",
    ],
    modelAnswer:
      "The diagram illustrates the seven stages of making chocolate from cacao beans. To begin with, ripe cacao pods are harvested, and the beans are fermented for five to seven days. They are then dried in the sun. After that, the beans are roasted and cracked into small pieces called nibs, which are ground into a thick liquid. This liquid is mixed with sugar and stirred for many hours. Finally, the chocolate is cooled, tempered and poured into moulds.",
  },

  // ---------------------------------------------------------------- Re-tell Lecture
  {
    id: "rl-005",
    task: "rl",
    exam: "pte-a",
    title: "Echolocation in bats",
    difficulty: "medium",
    topic: "Science",
    speaker: { name: "Dr. Whitfield", gender: "male", accent: "en-AU" },
    transcript:
      "Let's look at how many bats find their way in complete darkness. The technique is called echolocation. A bat produces a series of very high-pitched calls, mostly far above the range of human hearing, and then listens for the echoes that bounce back from objects around it. The time it takes for an echo to return tells the bat how far away something is, and subtle differences between what each ear hears tell it the direction. What's remarkable is how the bat adjusts its calls. While it's simply cruising, it calls slowly, perhaps ten times a second. But as it closes in on an insect, the calls speed up dramatically, into what researchers call a feeding buzz, sometimes well over a hundred calls a second. That gives the bat rapid updates on exactly where its prey is moving. And it's worth adding that some moths have evolved ways to fight back, for example by hearing the calls and diving out of the way.",
    keyPoints: [
      "Many bats navigate in darkness using echolocation: high-pitched calls and returning echoes",
      "Echo timing gives distance, and differences between the two ears give direction",
      "Bats call slowly while cruising but speed up into a feeding buzz when closing in on prey",
      "Some moths have evolved defences, such as hearing the calls and diving away",
    ],
    modelAnswer:
      "The lecture explained how bats use echolocation to navigate in the dark. A bat emits very high-pitched calls and listens to the echoes; the delay of an echo reveals distance, while differences between the ears reveal direction. The speaker emphasised that bats change their calling rate: around ten calls a second when cruising, but over a hundred in a feeding buzz as they approach an insect, giving constant updates. Finally, he noted that some moths have evolved defences, such as detecting the calls and diving away.",
  },
  {
    id: "rl-006",
    task: "rl",
    exam: "pte-a",
    title: "Opportunity cost",
    difficulty: "easy",
    topic: "Economics",
    speaker: { name: "Ms. Tremblay", gender: "female", accent: "en-CA" },
    transcript:
      "One of the most useful ideas in economics is opportunity cost. Put simply, the opportunity cost of any choice is the value of the best alternative you give up. Because our time, money and resources are limited, choosing one thing always means not choosing something else. Let me give you an everyday example. Say you spend a Saturday afternoon at a concert. The ticket price is obvious, but the real cost also includes whatever else you could have done with those hours, maybe a paid shift at work or time studying for an exam. Economists argue that people often ignore these hidden costs and focus only on money. The same thinking applies to governments. If a city spends its budget on a new stadium, the opportunity cost might be the schools or clinics that money could have built instead. So whenever you make a decision, it helps to ask not just what it costs, but what you are giving up.",
    keyPoints: [
      "Opportunity cost is the value of the best alternative given up when making a choice",
      "It exists because time, money and resources are limited",
      "Example: a concert costs the ticket plus the lost chance to work or study",
      "People often ignore hidden costs; governments face the same trade-offs, such as a stadium versus schools or clinics",
    ],
    modelAnswer:
      "The lecture introduced opportunity cost, which is the value of the best alternative you give up when you make a choice. Because resources such as time and money are limited, every decision involves sacrificing something. The speaker's example was a concert: its real cost includes not only the ticket but also the shift or study time lost. She noted that people often overlook these hidden costs, and that governments face similar trade-offs, for instance when a stadium is built instead of schools or clinics.",
  },
  {
    id: "rl-007",
    task: "rl",
    exam: "pte-a",
    title: "Why languages disappear",
    difficulty: "hard",
    topic: "Society",
    speaker: { name: "Prof. Raghunathan", gender: "male", accent: "en-IN" },
    transcript:
      "Linguists estimate that there are around seven thousand languages spoken in the world today, yet a large proportion of them are considered endangered. A language rarely disappears suddenly. Instead, the process is usually gradual and generational. It typically begins when a community comes under economic or social pressure to use a dominant language, perhaps for schooling, employment or contact with government. Parents, wanting the best opportunities for their children, start speaking the dominant language at home. Those children may still understand their grandparents' language, but they don't use it actively, and so their own children never learn it at all. Within three generations, a language can go from thriving to having only a handful of elderly speakers. Why does this matter? Each language encodes knowledge, for instance detailed vocabulary for local plants, ecosystems and traditions, which may not be recorded anywhere else. The encouraging news is that revitalisation is possible. Immersion schools, community recordings and even mobile apps have helped some communities bring young speakers back to their ancestral languages.",
    keyPoints: [
      "There are about seven thousand languages, and many are endangered",
      "Language loss is usually gradual, driven by pressure to use a dominant language for school, work or government",
      "Parents switch languages at home, and within about three generations few speakers remain",
      "Losing a language means losing unique knowledge, such as words for local plants and traditions",
      "Revitalisation through immersion schools, recordings and apps is possible",
    ],
    modelAnswer:
      "The lecture discussed why languages become endangered. Of roughly seven thousand languages worldwide, many are at risk. The speaker explained that loss is usually gradual: economic and social pressure leads parents to speak a dominant language at home, so their children understand but do not use the heritage language, and the next generation never learns it. Within about three generations only a few elderly speakers may remain. This matters because languages hold unique local knowledge. However, immersion schools, recordings and apps show that revitalisation is possible.",
  },
  {
    id: "rl-008",
    task: "rl",
    exam: "pte-a",
    title: "Railways and standard time",
    difficulty: "medium",
    topic: "History",
    speaker: { name: "Dr. Hollis", gender: "female", accent: "en-GB" },
    transcript:
      "Today it seems obvious that everyone in a region shares the same clock time, but this is actually quite a recent arrangement. Until the nineteenth century, most towns kept their own local time, based on the position of the sun. When the sun was highest in the sky, it was noon. This meant that a town a little further west would be several minutes behind its neighbour. For centuries nobody really minded, because travel was slow. The railways changed all that. Once trains could cover long distances in a few hours, dozens of different local times made timetables confusing and even dangerous, since two trains on the same line might be working from different clocks. So railway companies began adopting a single standard time across their networks. In Britain, railway time spread during the eighteen forties, and in North America the railways introduced standard time zones in eighteen eighty-three. The following year, an international conference chose Greenwich as the prime meridian, laying the foundation for the global system of time zones we use now.",
    keyPoints: [
      "Before the nineteenth century, towns kept their own local solar time",
      "Slow travel meant small differences between towns did not matter",
      "Railways made multiple local times confusing and dangerous for timetables",
      "Railway companies adopted standard time: Britain in the 1840s, North American time zones in 1883",
      "In 1884 Greenwich was chosen as the prime meridian, the basis of global time zones",
    ],
    modelAnswer:
      "The lecturer explained that shared clock time is a fairly recent idea. Until the nineteenth century, each town set its own time by the sun, so neighbouring places differed by several minutes, which did not matter while travel was slow. Railways changed this, because many local times made timetables confusing and even dangerous. Railway companies therefore adopted standard time, in Britain during the 1840s and in North America with time zones in 1883. In 1884, Greenwich became the prime meridian, the basis for today's global time zones.",
  },
  {
    id: "rl-009",
    task: "rl",
    exam: "pte-a",
    title: "Confirmation bias",
    difficulty: "easy",
    topic: "Psychology",
    speaker: { name: "Prof. Alvarez", gender: "female", accent: "en-US" },
    transcript:
      "I'd like to introduce a thinking error that affects all of us, called confirmation bias. Confirmation bias is our tendency to search for, notice and remember information that supports what we already believe, while ignoring or explaining away information that challenges it. Imagine someone who believes a particular diet works. They'll remember the friend who lost weight on it, but forget the three friends who didn't. The same thing happens online. If you search for evidence that a product is excellent, you'll usually find it, partly because of the way you phrased the question. Now, why does this matter for you as students? In research, confirmation bias can lead scientists to design studies that can only prove them right. That's why good scientific practice deliberately looks for disconfirming evidence. A practical tip: when you're writing an essay, try to state the strongest version of the opposing argument before you respond to it. It's one of the simplest ways to keep your own thinking honest.",
    keyPoints: [
      "Confirmation bias is the tendency to favour information that supports existing beliefs and ignore contradicting evidence",
      "Example: remembering the friend whose diet worked and forgetting those for whom it failed",
      "Online searches can be biased by how the question is phrased",
      "In research it can produce studies designed only to confirm a hypothesis, so good science seeks disconfirming evidence",
      "Tip: state the strongest opposing argument in your essays",
    ],
    modelAnswer:
      "The lecture was about confirmation bias, our tendency to seek and remember information that supports our beliefs while dismissing contradictory evidence. The speaker gave the example of someone who remembers one friend succeeding on a diet but forgets those who did not, and noted that online searches can also be shaped by how we phrase them. In research, this bias can lead to studies that only confirm a hypothesis, so good science looks for disconfirming evidence. She advised students to present the strongest opposing argument in their essays.",
  },
  {
    id: "rl-010",
    task: "rl",
    exam: "pte-a",
    title: "Ocean acidification",
    difficulty: "hard",
    topic: "Environment",
    speaker: { name: "Dr. Mensah", gender: "male", accent: "en-US" },
    transcript:
      "When we talk about carbon dioxide emissions, we usually focus on the atmosphere. But a substantial share of the carbon dioxide we release, roughly a quarter, is actually absorbed by the oceans. In one sense that's helpful, because it slows down warming. The problem is chemical. When carbon dioxide dissolves in seawater, it forms carbonic acid, and this gradually lowers the pH of the ocean. Since the start of the industrial era, the average pH of surface seawater has fallen by about zero point one units. That sounds tiny, but because the pH scale is logarithmic, it represents roughly a thirty percent increase in acidity. The organisms most at risk are those that build shells or skeletons from calcium carbonate, such as corals, oysters and certain kinds of plankton. In more acidic water, the carbonate they need becomes less available, so building shells takes more energy, and in extreme cases existing shells can begin to dissolve. And because plankton sit at the base of marine food webs, the effects could spread far beyond the species directly affected.",
    keyPoints: [
      "The oceans absorb roughly a quarter of human carbon dioxide emissions, slowing warming",
      "Dissolved carbon dioxide forms carbonic acid, lowering seawater pH",
      "Surface pH has fallen about 0.1 units since industrialisation, about a 30% rise in acidity, because the scale is logarithmic",
      "Shell- and skeleton-building organisms such as corals, oysters and plankton find it harder to build shells",
      "Effects on plankton could spread through marine food webs",
    ],
    modelAnswer:
      "The lecturer discussed ocean acidification. He explained that the oceans absorb around a quarter of our carbon dioxide emissions, which slows warming but changes seawater chemistry, because the gas forms carbonic acid. Since industrialisation, surface pH has dropped by about 0.1 units, which, on a logarithmic scale, means roughly 30 percent more acidity. This particularly threatens corals, oysters and plankton, which need carbonate to build shells. Since plankton support marine food webs, the consequences could spread widely.",
  },

  // ---------------------------------------------------------------- Summarize Group Discussion
  {
    id: "sgd-004",
    task: "sgd",
    exam: "pte-a",
    title: "Compulsory first-year residence",
    difficulty: "medium",
    topic: "Society",
    turns: [
      {
        speaker: { name: "Olivia", gender: "female", accent: "en-CA" },
        text: "The proposal is that all first-year students would have to live in university residence. I'm in favour. Your first year is when you build your social network, and living on campus makes that so much easier. Students who commute often tell me they feel disconnected.",
      },
      {
        speaker: { name: "Daniel", gender: "male", accent: "en-GB" },
        text: "I understand the social argument, but making it compulsory worries me. Residence fees are expensive, and for local students who could live at home for free, it's a huge extra cost. That could actually discourage some people from applying at all.",
      },
      {
        speaker: { name: "Aisha", gender: "female", accent: "en-AU" },
        text: "I think the data on retention is relevant here. Students who live on campus in first year tend to be more likely to continue into second year. So there's an academic benefit as well as a social one.",
      },
      {
        speaker: { name: "Daniel", gender: "male", accent: "en-GB" },
        text: "Maybe, but is that because of the residence itself, or because the students who choose residence are already better off and more confident? Forcing everyone in won't automatically produce the same result.",
      },
      {
        speaker: { name: "Olivia", gender: "female", accent: "en-CA" },
        text: "That's a fair challenge. Perhaps the university could offer bursaries so cost isn't a barrier, and exempt students with caring responsibilities or family commitments.",
      },
      {
        speaker: { name: "Aisha", gender: "female", accent: "en-AU" },
        text: "Or, instead of a requirement, they could make residence the default but let people opt out, and invest in programmes that connect commuter students with campus life. That keeps most of the benefits without the unfairness.",
      },
    ],
    keyPoints: [
      "Olivia supports compulsory residence because it helps first-years build social networks",
      "Daniel objects on cost grounds, especially for local students, and fears it could deter applicants",
      "Aisha cites better retention among students in residence",
      "Daniel questions whether that link is causal or reflects who chooses residence",
      "They move towards a compromise: bursaries and exemptions, or residence as an opt-out default with support for commuters",
    ],
    modelAnswer:
      "The speakers discussed a proposal to make residence compulsory for first-year students. Olivia supported it, saying living on campus helps students build friendships and that commuters often feel isolated. Daniel opposed compulsion because of the high cost, especially for local students, warning it might discourage applications. Aisha pointed to higher retention among residents, but Daniel questioned whether this was caused by residence or by the type of students who choose it. Finally, Olivia suggested bursaries and exemptions, and Aisha proposed making residence an opt-out default while supporting commuter students.",
  },
  {
    id: "sgd-005",
    task: "sgd",
    exam: "pte-a",
    title: "Open digital textbooks",
    difficulty: "easy",
    topic: "Education",
    turns: [
      {
        speaker: { name: "Rahul", gender: "male", accent: "en-IN" },
        text: "Our department wants to replace printed textbooks with free online textbooks. I think it's brilliant. Some of the books on my reading list cost over a hundred dollars each, and students shouldn't have to choose between food and course materials.",
      },
      {
        speaker: { name: "Grace", gender: "female", accent: "en-US" },
        text: "I agree about the cost, but I actually learn better from paper. I can annotate it, and I'm not distracted by notifications. Reading long chapters on a screen gives me headaches.",
      },
      {
        speaker: { name: "Liam", gender: "male", accent: "en-AU" },
        text: "My concern is quality. Commercial textbooks go through careful editing. Are free online ones reviewed in the same way, and will they be kept up to date?",
      },
      {
        speaker: { name: "Rahul", gender: "male", accent: "en-IN" },
        text: "Many of them are written and reviewed by academics, and because they're digital, they can be updated much faster than a printed edition. Lecturers can also adapt them to fit the course.",
      },
      {
        speaker: { name: "Grace", gender: "female", accent: "en-US" },
        text: "If that's true, then my only request is that students can print them cheaply, or that the library keeps a few printed copies for people like me.",
      },
      {
        speaker: { name: "Liam", gender: "male", accent: "en-AU" },
        text: "That sounds reasonable. I'd support it as long as each book is checked by the department before it's adopted. Then we save money without lowering standards.",
      },
    ],
    keyPoints: [
      "Rahul supports free online textbooks because printed ones are very expensive",
      "Grace prefers paper for annotation, fewer distractions and less eye strain",
      "Liam worries about the editing quality and updating of free texts",
      "Rahul replies that many are written and reviewed by academics and can be updated and adapted quickly",
      "They agree on the change if cheap printing or library copies are available and the department checks each book",
    ],
    modelAnswer:
      "The three students discussed replacing printed textbooks with free online versions. Rahul strongly supported the idea because some textbooks cost over a hundred dollars. Grace agreed about cost but said she learns better from paper, since she can annotate it and avoid distractions and eye strain. Liam was concerned about whether free books are properly edited and updated. Rahul replied that many are reviewed by academics and can be updated and adapted more easily. In the end, they agreed to support the plan if students can print cheaply or borrow library copies, and if the department checks each book.",
  },
  {
    id: "sgd-006",
    task: "sgd",
    exam: "pte-a",
    title: "Fossil fuel divestment",
    difficulty: "hard",
    topic: "Environment",
    turns: [
      {
        speaker: { name: "Freya", gender: "female", accent: "en-GB" },
        text: "The student union is asking the university to sell all its investments in fossil fuel companies. I strongly support that. A university that teaches climate science while profiting from oil and coal is sending a contradictory message.",
      },
      {
        speaker: { name: "Marcus", gender: "male", accent: "en-CA" },
        text: "I'm sympathetic, but I'm not convinced divestment changes anything. If the university sells its shares, someone else simply buys them. The companies don't lose any money, and the university loses its voice as a shareholder.",
      },
      {
        speaker: { name: "Nadia", gender: "female", accent: "en-IN" },
        text: "There's also the financial side. The endowment funds scholarships. If divesting reduced returns, it could hurt students from poorer backgrounds, which would be an ethical problem of its own.",
      },
      {
        speaker: { name: "Freya", gender: "female", accent: "en-GB" },
        text: "But many investors argue fossil fuel assets are becoming riskier anyway, as regulations tighten. And the symbolic effect matters. When respected institutions divest, it shifts public opinion and makes it harder for those companies to look legitimate.",
      },
      {
        speaker: { name: "Marcus", gender: "male", accent: "en-CA" },
        text: "Symbolism is real, I'll grant that. But I'd rather see the university use its shareholder votes to push companies towards clean energy targets, and divest only if they refuse to change.",
      },
      {
        speaker: { name: "Nadia", gender: "female", accent: "en-IN" },
        text: "A staged approach like that seems wise. Set clear deadlines, protect the scholarship budget, and publish an annual report so students can see what's actually happening.",
      },
    ],
    keyPoints: [
      "Freya supports full divestment because profiting from fossil fuels contradicts the university's teaching",
      "Marcus doubts divestment has any real effect and argues the university would lose its shareholder voice",
      "Nadia worries lower returns could cut scholarships for poorer students",
      "Freya counters that fossil fuel assets are increasingly risky and divestment has a strong symbolic effect",
      "They lean towards a staged approach: shareholder engagement with deadlines, divestment if companies refuse, protected scholarships and annual reporting",
    ],
    modelAnswer:
      "The speakers debated whether the university should sell its fossil fuel investments. Freya strongly supported divestment, arguing it is contradictory to teach climate science while profiting from oil and coal. Marcus doubted it would have an impact, since other buyers would take the shares and the university would lose its shareholder voice. Nadia raised the risk that lower returns could reduce scholarships for disadvantaged students. Freya replied that fossil fuel assets are becoming riskier and that divestment shifts public opinion. Finally, Marcus proposed using shareholder votes first and divesting only if companies refuse to change, and Nadia supported this staged plan with deadlines, protected scholarships and annual reporting.",
  },
  {
    id: "sgd-007",
    task: "sgd",
    exam: "pte-a",
    title: "Exams or coursework",
    difficulty: "medium",
    topic: "Education",
    turns: [
      {
        speaker: { name: "Sophie", gender: "female", accent: "en-AU" },
        text: "Our faculty is considering replacing final exams with continuous coursework, like weekly tasks and projects. I'm all for it. A single three-hour exam rewards people who perform well under pressure, not necessarily people who understand the subject.",
      },
      {
        speaker: { name: "Kwame", gender: "male", accent: "en-GB" },
        text: "I'd disagree a bit. Exams are one of the few assessments where you know the work is genuinely the student's own. With coursework, it's much harder to rule out heavy outside help or copying.",
      },
      {
        speaker: { name: "Mei", gender: "female", accent: "en-US" },
        text: "I see both sides. Coursework spreads the workload, which is better for wellbeing, but it can also mean you're constantly under deadline pressure. Some students find that more stressful than one exam period.",
      },
      {
        speaker: { name: "Sophie", gender: "female", accent: "en-AU" },
        text: "True, but the feedback is the key advantage. With weekly tasks you find out what you're getting wrong while there's still time to fix it. After an exam, the course is already over.",
      },
      {
        speaker: { name: "Kwame", gender: "male", accent: "en-GB" },
        text: "I accept that feedback matters. Maybe a mix would work, with coursework for learning and a shorter supervised exam to confirm individual understanding.",
      },
      {
        speaker: { name: "Mei", gender: "female", accent: "en-US" },
        text: "I'd support that, as long as deadlines across different courses are coordinated so students don't end up with five assignments due in the same week.",
      },
    ],
    keyPoints: [
      "Sophie favours continuous coursework because exams reward performing under pressure rather than understanding",
      "Kwame defends exams as the most reliable way to ensure work is the student's own",
      "Mei notes coursework spreads workload but can create constant deadline stress",
      "Sophie stresses that coursework provides timely feedback",
      "They agree on a mix of coursework and a shorter supervised exam, with coordinated deadlines",
    ],
    modelAnswer:
      "The students discussed replacing final exams with continuous coursework. Sophie supported the change, arguing that exams reward coping with pressure rather than real understanding, and that regular tasks give useful feedback while there is still time to improve. Kwame disagreed, saying exams are the most reliable way to ensure work is genuinely the student's own. Mei saw both sides: coursework spreads the workload but can create constant deadline stress. Eventually, Kwame suggested combining coursework with a shorter supervised exam, and Mei agreed provided deadlines across courses are coordinated.",
  },
  {
    id: "sgd-008",
    task: "sgd",
    exam: "pte-a",
    title: "Compulsory work placements",
    difficulty: "hard",
    topic: "Economics",
    turns: [
      {
        speaker: { name: "Ethan", gender: "male", accent: "en-US" },
        text: "There's a proposal to make a six-month work placement compulsory in every degree. I think it's overdue. Employers keep saying graduates lack practical experience, and placements give students contacts and a clearer idea of what career they actually want.",
      },
      {
        speaker: { name: "Chloe", gender: "female", accent: "en-CA" },
        text: "In principle I agree, but who gets the good placements? Students with family connections or who can afford to move to a big city will get the best ones. And if placements are unpaid, poorer students simply can't take them.",
      },
      {
        speaker: { name: "Arjun", gender: "male", accent: "en-IN" },
        text: "I'd add that it doesn't fit every discipline equally. In engineering or nursing a placement is obviously valuable, but for a philosophy or history student, finding something relevant for six months could be really difficult.",
      },
      {
        speaker: { name: "Ethan", gender: "male", accent: "en-US" },
        text: "Those are fair points, but the skills are transferable. A history student working in a museum or a policy office still learns teamwork, deadlines and professional communication.",
      },
      {
        speaker: { name: "Chloe", gender: "female", accent: "en-CA" },
        text: "Then the university has to guarantee that every placement is paid, and use its own careers service to allocate them fairly rather than leaving students to compete through personal networks.",
      },
      {
        speaker: { name: "Arjun", gender: "male", accent: "en-IN" },
        text: "And maybe allow flexibility. Departments could offer alternatives such as a research project with an external partner, or shorter placements, so students in every field get experience without a one-size-fits-all rule.",
      },
    ],
    keyPoints: [
      "Ethan supports compulsory placements because graduates lack practical experience and placements build contacts and career clarity",
      "Chloe worries placements favour well-connected or wealthier students, especially if unpaid",
      "Arjun argues placements suit some disciplines, like engineering and nursing, better than others, like philosophy or history",
      "Ethan replies that the skills gained are transferable across fields",
      "They conclude placements should be paid, fairly allocated by the university and flexible in form and length",
    ],
    modelAnswer:
      "The group discussed making a six-month work placement compulsory in all degrees. Ethan supported the idea, saying employers want practical experience and placements help students build contacts and choose careers. Chloe agreed in principle but warned that wealthier or well-connected students would get the best placements, and poorer students could not afford unpaid ones. Arjun argued placements suit fields like engineering and nursing better than philosophy or history, although Ethan replied that the skills are transferable. In conclusion, Chloe insisted placements must be paid and fairly allocated, and Arjun proposed flexible alternatives such as external research projects or shorter placements.",
  },
];
