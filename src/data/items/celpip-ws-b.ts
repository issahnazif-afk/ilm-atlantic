import type { Item, Scene } from '../types';

// Original practice content for CELPIP-General Writing (Tasks 1-2) and Speaking (Tasks 1-8),
// practice tests 4, 5 and 6. Written specifically for Ilm Atlantic; Canadian spelling and settings.

// Speaking Tasks 3 and 4 use the same picture on the real test, so each test shares one scene.
const marketScene: Scene = {
  backdrop: "park",
  caption: "A busy Saturday farmers' market in a park, with produce stalls, shoppers, a busker and dark clouds moving in.",
  elements: [
    { e: "⛺", x: 18, y: 40, size: 70, label: "Vegetable stall" },
    { e: "🥕", x: 14, y: 55, size: 30 },
    { e: "🌽", x: 22, y: 55, size: 30 },
    { e: "⛺", x: 52, y: 40, size: 70, label: "Bakery stall" },
    { e: "🥖", x: 50, y: 55, size: 30 },
    { e: "🥧", x: 57, y: 55, size: 30 },
    { e: "🧑‍🌾", x: 18, y: 64 },
    { e: "👩‍👧", x: 40, y: 75 },
    { e: "🎸", x: 82, y: 66, label: "Busker" },
    { e: "🐕", x: 66, y: 82, size: 34 },
    { e: "🛒", x: 30, y: 84, size: 38 },
    { e: "🌧️", x: 85, y: 10, size: 52 },
  ],
};

const rinkScene: Scene = {
  backdrop: "winter",
  caption: "An outdoor community skating rink on a cold evening, with skaters, a hot chocolate stand and a Zamboni waiting at the gate.",
  elements: [
    { e: "⛸️", x: 30, y: 62, label: "Skater" },
    { e: "🧒", x: 42, y: 58 },
    { e: "🏒", x: 62, y: 60, label: "Hockey game" },
    { e: "🥅", x: 76, y: 56, size: 40 },
    { e: "🧍", x: 20, y: 72, size: 40, label: "Learner pushing a chair" },
    { e: "🪑", x: 24, y: 76, size: 30 },
    { e: "☕", x: 10, y: 38, label: "Hot chocolate stand" },
    { e: "🧣", x: 14, y: 46, size: 32 },
    { e: "🚜", x: 88, y: 80, size: 48, label: "Ice resurfacer at the gate" },
    { e: "💡", x: 50, y: 12, size: 34 },
    { e: "🌙", x: 85, y: 8, size: 38 },
    { e: "❄️", x: 64, y: 22, size: 28 },
  ],
};

const campScene: Scene = {
  backdrop: "campsite",
  caption: "A family campsite by a lake in late afternoon: a tent, a campfire being lit, a canoe on shore, a raccoon near an open cooler and dark clouds over the water.",
  elements: [
    { e: "⛺", x: 22, y: 48, size: 72 },
    { e: "🔥", x: 46, y: 66, size: 40, label: "Campfire" },
    { e: "👨", x: 40, y: 62 },
    { e: "👧", x: 54, y: 64 },
    { e: "🛶", x: 80, y: 74, size: 52, label: "Canoe" },
    { e: "🧊", x: 12, y: 78, size: 36, label: "Open cooler" },
    { e: "🦝", x: 6, y: 84, size: 36 },
    { e: "🌲", x: 6, y: 34, size: 60 },
    { e: "🌲", x: 92, y: 36, size: 56 },
    { e: "⛈️", x: 78, y: 12, size: 50 },
    { e: "🌭", x: 50, y: 72, size: 26 },
  ],
};

export const celpipWSB: Item[] = [
  // ===================================================================== TEST 4
  // ---------------------------------------------------------------- Writing Task 1
  {
    id: "cel-cw1-04",
    task: "cw1",
    exam: "celpip",
    testNo: 4,
    title: "Cancelled swimming lessons",
    difficulty: "medium",
    topic: "Community",
    prompt:
      "You registered your eight-year-old child for a ten-week swimming program at your local community centre. After three lessons, the program was cancelled without warning. Write an email to the community centre's program manager. In your email, do the following:",
    points: [
      "Explain what happened.",
      "Describe how the cancellation has affected you and your child.",
      "Say what you would like the community centre to do.",
    ],
    keyPoints: [
      "Clear opening that identifies the program, the child and the registration",
      "Specific details of the cancellation and how it was communicated",
      "Concrete effects: wasted trips, child's disappointment, schedule disruption",
      "A reasonable, specific request (refund, replacement class, better notice)",
      "Polite but firm tone and a proper closing",
    ],
    modelAnswer:
      "Dear Ms. Tremblay,\n\nI am writing about the Saturday morning Level 2 swimming program at Riverside Community Centre, for which I registered my daughter, Amira, in September. The program was meant to run for ten weeks, but after only three lessons it was cancelled. Nobody contacted us. We simply arrived last Saturday to find a handwritten sign on the pool door saying the class would not continue.\n\nThis has been quite frustrating. We drove twenty minutes each way and waited at the pool before realizing the class was not running. Amira was very disappointed, because she had just started to feel confident in deep water. I had also arranged my work schedule around the lessons, and I turned down other activities for her that are now full.\n\nI would appreciate a refund for the seven lessons that did not take place. Alternatively, if a qualified instructor becomes available, I would gladly accept a spot in the next session at no extra cost. In future, please notify families by email or phone before cancelling a program.\n\nThank you for looking into this. I look forward to your reply.\n\nSincerely,\nDaniel Okoye",
  },
  // ---------------------------------------------------------------- Writing Task 2
  {
    id: "cel-cw2-04",
    task: "cw2",
    exam: "celpip",
    testNo: 4,
    title: "Vacant lot: garden or parking?",
    difficulty: "medium",
    topic: "Community",
    prompt:
      "Your town owns an empty lot beside the main shopping street and has asked residents for their opinion on how to use it. Choose the option you prefer and explain the reasons for your choice. Write about 150-200 words.",
    choices: [
      "Option A: Turn the lot into a community garden with raised beds that residents can rent each season.",
      "Option B: Pave the lot and turn it into a public parking area for shoppers.",
    ],
    keyPoints: [
      "States a clear choice in the opening",
      "Two or three well-developed reasons with examples",
      "Acknowledges the other option and responds to it",
      "Short conclusion that restates the position",
    ],
    modelAnswer:
      "I strongly prefer Option A, turning the empty lot into a community garden.\n\nFirst, a garden would bring neighbours together. Many people in our town live in apartments with no yard, and newcomers in particular often tell me they miss growing their own food. Renting a raised bed would give them a reason to spend time outdoors and meet people who live nearby. A parking lot, on the other hand, is a place where people stay for a few minutes and leave.\n\nSecond, a garden would make the main street more attractive. Shoppers are more likely to walk around and visit local stores when the area looks green and cared for. Fresh vegetables could even be donated to the food bank at the end of each season.\n\nI understand that parking downtown can be difficult on Saturdays. However, there is already a large lot behind the arena, only a five-minute walk away. Better signs pointing to that lot would solve much of the problem at a far lower cost than paving.\n\nFor these reasons, I believe a community garden is the better long-term investment for our town.",
  },
  // ---------------------------------------------------------------- Speaking Task 1
  {
    id: "cel-cs1-04",
    task: "cs1",
    exam: "celpip",
    testNo: 4,
    title: "First Canadian winter",
    difficulty: "easy",
    topic: "Weather",
    prompt:
      "Your friend has just accepted a job in Winnipeg and will arrive in November. This will be their first winter in a very cold climate, and they are nervous. Give your friend advice on how to prepare for the winter.",
    keyPoints: [
      "Clothing: layers, a proper winter coat, boots, hat and mittens",
      "Home and transport: plug-in block heater or winter tires, checking bus schedules",
      "Staying healthy and positive: getting outside, vitamin D, winter activities",
      "Practical tip about saving money (second-hand stores, end-of-season sales)",
    ],
    modelAnswer:
      "Congratulations on the new job! Don't worry, lots of people survive their first Winnipeg winter, and many end up loving it. Here are a few tips.\n\nFirst, clothing is everything. Buy a good winter coat that covers your hips, warm waterproof boots with a thick sole, and a hat, a scarf and mittens. Mittens are warmer than gloves. The secret is layers, so wear a thin shirt, a sweater and then your coat. You don't have to spend a fortune, either. Second-hand stores have great coats, and prices drop a lot in late winter.\n\nSecond, think about getting around. If you're bringing a car, get winter tires and ask about a block heater, because some mornings the engine won't start without one. If you're taking the bus, check the transit app so you aren't waiting outside longer than you need to.\n\nFinally, take care of your mood. The days are short, so try to get outside at lunchtime when it's sunny. Try skating or cross-country skiing. Honestly, the winter feels much shorter when you have something to look forward to.\n\nYou'll be fine, and call me if you need anything!",
  },
  // ---------------------------------------------------------------- Speaking Task 2
  {
    id: "cel-cs2-04",
    task: "cs2",
    exam: "celpip",
    testNo: 4,
    title: "Help from a stranger",
    difficulty: "easy",
    topic: "Personal Experience",
    prompt:
      "Talk about a time when a stranger helped you. What happened, and how did you feel about it?",
    keyPoints: [
      "Sets the scene: when, where, what the problem was",
      "Describes what the stranger did, step by step",
      "Explains feelings at the time and afterwards",
      "Ends with a reflection or what was learned",
    ],
    modelAnswer:
      "A few years ago, during my first month in Halifax, I took the wrong bus home from a job interview. It was dark, it was raining, and my phone battery had died, so I had no map. I got off at a stop I didn't recognize and honestly started to panic.\n\nAn older woman waiting at the same stop noticed I looked worried and asked if I was okay. When I explained, she checked the schedule, told me which bus to take, and then rode with me for three stops to make sure I transferred correctly. She even lent me her umbrella.\n\nI felt incredibly grateful and a little embarrassed. That small act of kindness made me feel welcome in a new city. Since then, whenever I see someone who looks lost, I always stop and ask if they need help.",
  },
  // ---------------------------------------------------------------- Speaking Task 3
  {
    id: "cel-cs3-04",
    task: "cs3",
    exam: "celpip",
    testNo: 4,
    title: "Farmers' market in the park",
    difficulty: "easy",
    topic: "Community",
    prompt:
      "Describe some things that are happening in the picture below as well as you can. The person with whom you are speaking cannot see the picture.",
    scene: marketScene,
    keyPoints: [
      "Overall setting: an outdoor farmers' market in a park",
      "Left side: vegetable stall with a farmer, carrots and corn",
      "Centre: bakery stall with bread and pies; a mother and daughter shopping",
      "Right side: a musician playing guitar, a dog nearby",
      "Weather detail: rain clouds approaching in the top right",
    ],
    modelAnswer:
      "This picture shows a farmers' market in a park on what looks like a weekend morning.\n\nOn the left side, there's a vegetable stall under a tent. A farmer is standing in front of it, and you can see fresh carrots and corn on the table. In front of that stall, near the bottom, there's an empty shopping cart, so maybe someone left it there while they paid.\n\nIn the middle of the picture, there's a second tent, which is a bakery stall selling long loaves of bread and pies. A mother and her young daughter are walking toward it, probably to buy something sweet.\n\nOn the right, a man is playing the guitar for the shoppers, and a dog is wandering near him. Finally, in the top right corner, there are dark rain clouds, so the weather might change soon.",
  },
  // ---------------------------------------------------------------- Speaking Task 4
  {
    id: "cel-cs4-04",
    task: "cs4",
    exam: "celpip",
    testNo: 4,
    title: "Farmers' market: what next?",
    difficulty: "medium",
    topic: "Community",
    prompt:
      "In this picture, what do you think will most probably happen next?",
    scene: marketScene,
    keyPoints: [
      "Rain will start; vendors will cover their produce or close the tent sides",
      "Shoppers will rush to buy items or shelter under the tents",
      "The busker will pack up his guitar to protect it",
      "The dog may knock something over or follow the family",
      "Uses future forms and hedging (will probably, might, I expect)",
    ],
    modelAnswer:
      "I think the biggest change will come from the weather. Those dark clouds are moving in, so it will probably start raining in a few minutes.\n\nWhen it does, the farmer at the vegetable stall will likely pull plastic covers over his carrots and corn so they don't get soaked. The baker will probably do the same, or move the bread and pies to the back of the tent.\n\nThe mother and daughter will most likely hurry to buy something quickly, maybe a pie, and then run under the bakery tent to stay dry. Some shoppers might decide to go home early.\n\nThe guitar player will have to stop and put his guitar in its case, because rain could damage it. As for the dog, I expect it will run under one of the tables. Overall, the market will probably get quieter.",
  },
  // ---------------------------------------------------------------- Speaking Task 5
  {
    id: "cel-cs5-04",
    task: "cs5",
    exam: "celpip",
    testNo: 4,
    title: "Family weekend getaway",
    difficulty: "medium",
    topic: "Travel",
    prompt:
      "Your family is planning a long-weekend trip in August and has narrowed the choice to two options. Choose the option you prefer. Then persuade your sister, who prefers the other option, that your choice is better.",
    choices: [
      {
        title: "Lakeside cabin rental",
        details: [
          "Three hours' drive north",
          "$900 for three nights, sleeps six",
          "Canoe and kayaks included",
          "No Wi-Fi; weak cell signal",
        ],
      },
      {
        title: "City trip by train",
        details: [
          "Four hours by train, no driving",
          "Hotel: $1,100 for three nights, two rooms",
          "Museums, a ball game and restaurants",
          "Walkable downtown; busy and noisy",
        ],
      },
    ],
    keyPoints: [
      "Clear statement of preferred option",
      "Compares specific details (cost, activities, comfort)",
      "Addresses the sister's likely reasons for the other option",
      "Persuasive, friendly closing",
    ],
    modelAnswer:
      "I know you're excited about the city trip, but I really think the lakeside cabin is the better choice for us.\n\nFirst, it's cheaper. The cabin costs nine hundred dollars for three nights and sleeps all six of us, while the hotel is eleven hundred, and we'd still have to pay for train tickets, meals in restaurants and museum entry. The cabin has a kitchen, so we can cook together.\n\nSecond, the canoe and kayaks are included, so the kids will be busy all day for free. In the city, they'd get tired of walking around museums pretty quickly.\n\nI know you like the idea of not driving, but three hours isn't bad, and we can share the driving. And honestly, having no Wi-Fi is a bonus. We all need a real break from our phones. Let's go to the lake!",
  },
  // ---------------------------------------------------------------- Speaking Task 6
  {
    id: "cel-cs6-04",
    task: "cs6",
    exam: "celpip",
    testNo: 4,
    title: "Moving day or extra shift?",
    difficulty: "medium",
    topic: "Workplace",
    prompt:
      "A month ago, you promised to help your coworker Priya move to her new apartment this Saturday. Today your manager asked you to work an extra shift on Saturday because two staff members are sick, and the store is short-handed. Choose ONE: talk to Priya and explain why you cannot help her move, OR talk to your manager and explain why you cannot work the extra shift.",
    choices: [
      { title: "Talk to Priya", details: ["Explain the staffing emergency", "Apologize and offer another way to help"] },
      { title: "Talk to your manager", details: ["Explain your earlier promise", "Suggest another solution for the shift"] },
    ],
    keyPoints: [
      "Polite opening and clear statement of the problem",
      "Reason for the decision, showing understanding of the other person",
      "A practical alternative or compromise",
      "Apologetic, respectful tone and a positive close",
    ],
    modelAnswer:
      "Hi Priya, do you have a minute? I'm really sorry, but I have some bad news about Saturday.\n\nThis morning our manager told me two people are off sick, and the store is badly short-staffed this weekend. She asked me to cover a shift on Saturday, and honestly, I don't feel I can say no. If I don't come in, the whole team will be under pressure, and you know how busy Saturdays are.\n\nI feel terrible, because I made you a promise. So here's what I can do. I'm free on Friday evening, so I can come over after work and help you pack everything into boxes. And on Sunday, I can help you unpack and set up your kitchen. I'll also ask my cousin, who has a van, if he can help on Saturday.\n\nAgain, I'm so sorry. I hope you understand.",
  },
  // ---------------------------------------------------------------- Speaking Task 7
  {
    id: "cel-cs7-04",
    task: "cs7",
    exam: "celpip",
    testNo: 4,
    title: "Free public transit",
    difficulty: "hard",
    topic: "Transportation",
    prompt:
      "Answer the following question: Should cities make public transit free for everyone, even if it means higher property taxes? Explain your reasons.",
    keyPoints: [
      "Clear position stated early",
      "Two or three developed reasons (environment, fairness, congestion, cost)",
      "Acknowledges the counter-argument about taxes or service quality",
      "Uses examples from daily life",
      "Concise conclusion",
    ],
    modelAnswer:
      "In my opinion, cities should not make public transit completely free, although I do think fares should be much lower for people who need help.\n\nMy main reason is money. Running buses and trains is very expensive, and fares pay for a large part of it. If that money disappears, the city has to find it somewhere else, usually through higher property taxes. That affects everyone, including renters, because landlords pass those costs on. I'd also worry that service would get worse. If transit doesn't bring in any money, it might be the first thing cut when budgets are tight, and fewer buses would hurt riders more than paying a fare.\n\nSecond, free transit doesn't solve the real problems people complain about. Where I live, people don't avoid the bus because of the price. They avoid it because it comes every thirty minutes and isn't reliable in winter. I'd rather the city spend money on more frequent service.\n\nThat said, I understand the argument about fairness. Low-income families, students and seniors really struggle with transit costs. So I'd support discounted or free passes for those groups.\n\nSo overall, targeted discounts and better service make more sense than free transit for everyone.",
  },
  // ---------------------------------------------------------------- Speaking Task 8
  {
    id: "cel-cs8-04",
    task: "cs8",
    exam: "celpip",
    testNo: 4,
    title: "Unusual garage-sale bicycle",
    difficulty: "medium",
    topic: "Shopping",
    prompt:
      "You and a friend are looking for a cheap way to get around town this summer. At a garage sale, you see this unusual bicycle. Describe it to your friend, who is on the phone, and explain why it might be a good choice.",
    scene: {
      backdrop: "street",
      caption: "At a driveway garage sale, a bicycle has a small cushioned sofa instead of a seat, a striped umbrella fixed above it, a basket of plants on the front and a $40 price tag.",
      elements: [
        { e: "🚲", x: 50, y: 66, size: 110, label: "Bicycle" },
        { e: "🛋️", x: 52, y: 50, size: 52, label: "Small sofa as the seat" },
        { e: "⛱️", x: 52, y: 24, size: 70, label: "Umbrella on a pole" },
        { e: "🧺", x: 70, y: 56, size: 36, label: "Front basket" },
        { e: "🪴", x: 70, y: 48, size: 28 },
        { e: "🔔", x: 66, y: 60, size: 22 },
        { e: "🏷️", x: 34, y: 58, size: 32, label: "$40" },
        { e: "📦", x: 12, y: 80, size: 40 },
        { e: "🏠", x: 88, y: 30, size: 64 },
        { e: "🪧", x: 14, y: 52, size: 40, label: "Garage Sale" },
      ],
    },
    keyPoints: [
      "Overall description: a bicycle with a sofa for a seat",
      "Specific features: umbrella, basket with plant, bell",
      "Price and condition",
      "Reasons it suits the friend's needs (comfort, shade, carrying things)",
    ],
    modelAnswer:
      "Hey, you won't believe what I just found at a garage sale. It's a bicycle, but instead of a normal seat, someone has attached a tiny sofa, like a small padded loveseat, so you sit back like you're in a chair.\n\nAbove the sofa, there's a big striped beach umbrella fixed to a metal pole, so the rider stays in the shade. On the front, there's a wicker basket, and right now there's a little plant in it, plus a shiny bell on the handlebars.\n\nThe best part is the price. It's only forty dollars, and the tires look almost new.\n\nI think it could be perfect for us. You always complain that bike seats hurt your back, and this would be super comfortable. The umbrella would keep us cool on hot days, and the basket is great for groceries. Should I buy it?",
  },

  // ===================================================================== TEST 5
  // ---------------------------------------------------------------- Writing Task 1
  {
    id: "cel-cw1-05",
    task: "cw1",
    exam: "celpip",
    testNo: 5,
    title: "Schedule change for a college course",
    difficulty: "hard",
    topic: "Workplace",
    prompt:
      "You have been accepted into an evening college course that will help you in your career, but the class times conflict with your current work schedule. Write an email to your manager. In your email, do the following:",
    points: [
      "Describe the course and explain why it is useful for your job.",
      "Explain the schedule change you are requesting.",
      "Suggest how your work could be covered.",
    ],
    keyPoints: [
      "Professional greeting and clear purpose in the first paragraph",
      "Specific course details and a convincing link to the job",
      "Exact days and times of the requested change",
      "Workable coverage plan that reduces the burden on the manager",
      "Courteous closing with a request for a reply or meeting",
    ],
    modelAnswer:
      "Dear Mr. Fraser,\n\nI am writing to ask whether my work schedule could be adjusted from January to April so that I can take an evening course at Centennial College.\n\nThe course, Introduction to Supply Chain Management, runs every Tuesday and Thursday from 6:00 to 9:00 p.m. It covers inventory planning and purchasing software, which are directly related to my role in receiving. I believe it would help me reduce ordering errors and eventually take on more responsibility in the department.\n\nAt the moment, I work until 7:00 p.m. on Tuesdays and Thursdays. I would like to start at 8:00 a.m. on those days instead of 11:00 a.m., so that I can finish at 4:00 p.m. My total weekly hours would stay the same.\n\nTo make sure the evening shift is covered, I have spoken with Marisol, who has said she would be happy to take my late hours on those two days in exchange for my Saturday morning shift. I would also be glad to train another colleague on closing procedures if needed.\n\nCould we meet this week to discuss it?\n\nBest regards,\nLin Wei",
  },
  // ---------------------------------------------------------------- Writing Task 2
  {
    id: "cel-cw2-05",
    task: "cw2",
    exam: "celpip",
    testNo: 5,
    title: "Staff benefit: transit or fitness room?",
    difficulty: "easy",
    topic: "Workplace",
    prompt:
      "Your employer has a budget for one new staff benefit next year and has asked employees to vote. Choose the option you prefer and explain the reasons for your choice. Write about 150-200 words.",
    choices: [
      "Option A: A free monthly transit pass for every employee.",
      "Option B: An on-site fitness room with equipment and showers.",
    ],
    keyPoints: [
      "Clear choice in the opening sentence",
      "Reasons supported by examples from the workplace",
      "Response to the opposing option",
      "Concluding sentence",
    ],
    modelAnswer:
      "I would choose Option A, a free monthly transit pass for every employee.\n\nThe main reason is that this benefit would help almost everyone. A monthly pass in our city costs over one hundred dollars, which is a big expense, especially for staff with lower wages. Saving that money every month would make a real difference to many families. A fitness room, by contrast, would only be used by people who already enjoy working out.\n\nIn addition, a transit pass would encourage more people to leave their cars at home. Our parking lot is full by 8:30 most mornings, and some colleagues arrive late because they cannot find a space. If more people took the bus or train, parking would be easier for those who really need to drive, and the company would be doing something good for the environment.\n\nI agree that staying healthy is important, and a fitness room would be nice. However, there are affordable gyms near the office, and walking to and from the bus stop is also good exercise.\n\nOverall, the transit pass is the fairer and more practical choice for the whole staff.",
  },
  // ---------------------------------------------------------------- Speaking Task 1
  {
    id: "cel-cs1-05",
    task: "cs1",
    exam: "celpip",
    testNo: 5,
    title: "Starting to volunteer",
    difficulty: "medium",
    topic: "Volunteering",
    prompt:
      "Your neighbour recently retired and wants to start volunteering in the community, but she is shy and is not sure where to begin. Give her advice on how to find and start a volunteer role.",
    keyPoints: [
      "Identify interests and skills first",
      "Where to look: volunteer centres, library, food bank, online listings",
      "Start small with a short or group-based role to build confidence",
      "Practical points: police check, training, setting limits on time",
    ],
    modelAnswer:
      "That's a wonderful idea, and honestly, you have so much experience to offer. Let me give you a few suggestions.\n\nFirst, think about what you enjoy. You were a bookkeeper for years, and you love gardening and reading, right? Those are all useful. A small charity might need help with its accounts, or the library might need someone for its reading program.\n\nSecond, as for where to look, most cities have a volunteer centre with a website listing local opportunities. You can search by interest and by how many hours you have. The community centre bulletin board is also a good place to check.\n\nSince you're a bit shy, my advice is to start with something in a group, like sorting donations at the food bank. You work side by side with others, but you don't have to talk to the public much. Once you feel comfortable, you can try something more social.\n\nAlso, be ready for some paperwork. Many organizations ask for a police check and a short training session, so it can take a few weeks.\n\nFinally, don't say yes to too much at first. Start with a couple of hours a week and see how you feel. If you like, I can come with you to the volunteer centre.",
  },
  // ---------------------------------------------------------------- Speaking Task 2
  {
    id: "cel-cs2-05",
    task: "cs2",
    exam: "celpip",
    testNo: 5,
    title: "Helping a neighbour",
    difficulty: "medium",
    topic: "Personal Experience",
    prompt:
      "Talk about a time when you helped a neighbour or someone in your community. What did you do, and why was it important?",
    keyPoints: [
      "Background: who the person was and what they needed",
      "What the speaker did, in sequence",
      "The outcome",
      "Why it mattered to both people",
    ],
    modelAnswer:
      "Last February, there was a huge snowstorm in our area, and the city plows couldn't reach our street for almost two days. My next-door neighbour, Mr. Bouchard, is in his eighties and lives alone.\n\nOn the first morning, I noticed his driveway was completely buried and there were no footprints, so I knocked on his door. He told me he was fine but that he was nearly out of his heart medication and couldn't get to the pharmacy. So I shovelled a path from his door to the sidewalk, then walked twenty minutes through the snow to pick up his prescription.\n\nIt was important because missing his medicine could have been dangerous. But it also mattered in another way. We were only polite strangers before that, and now we have coffee together every week.",
  },
  // ---------------------------------------------------------------- Speaking Task 3
  {
    id: "cel-cs3-05",
    task: "cs3",
    exam: "celpip",
    testNo: 5,
    title: "Outdoor skating rink",
    difficulty: "easy",
    topic: "Recreation",
    prompt:
      "Describe some things that are happening in the picture below as well as you can. The person with whom you are speaking cannot see the picture.",
    scene: rinkScene,
    keyPoints: [
      "Setting: an outdoor community rink at night in winter",
      "Skaters: a child skating and a beginner using a chair for balance",
      "Right side: a hockey game near a net",
      "Left side: a hot chocolate stand",
      "The ice resurfacer waiting at the gate; lights, moon and snow",
    ],
    modelAnswer:
      "This picture shows an outdoor skating rink on a winter evening. It's dark, there's a moon in the sky, and a tall light is shining over the ice. A few snowflakes are falling.\n\nIn the middle of the rink, there's a skater gliding along, and a young child is skating close by, maybe with a parent. In the lower left corner, a beginner is pushing a chair in front of them for balance, which is common when people are just learning.\n\nOn the right side, some people are playing hockey, and there's a small net set up near the boards.\n\nOn the far left, there's a hot chocolate stand with a scarf hanging nearby, so people can warm up. Finally, in the bottom right corner, the ice resurfacing machine is parked at the gate, waiting to go on.",
  },
  // ---------------------------------------------------------------- Speaking Task 4
  {
    id: "cel-cs4-05",
    task: "cs4",
    exam: "celpip",
    testNo: 5,
    title: "Skating rink: what next?",
    difficulty: "medium",
    topic: "Recreation",
    prompt:
      "In this picture, what do you think will most probably happen next?",
    scene: rinkScene,
    keyPoints: [
      "Skaters will be asked to leave the ice so it can be resurfaced",
      "The hockey players will finish their game or move off",
      "The beginner may gain confidence or fall",
      "People will line up at the hot chocolate stand",
      "Uses a range of future forms and probability language",
    ],
    modelAnswer:
      "I think the most likely thing is that the ice will be cleaned soon. The resurfacing machine is already waiting at the gate, so in a few minutes a staff member will probably ask everyone to get off the ice.\n\nThe hockey players might not be happy about that. They'll probably try to finish one last play before they leave.\n\nThe beginner with the chair will most likely skate slowly to the exit. I can imagine them falling once on the way, but then laughing about it.\n\nWhile the ice is being cleaned, I expect many skaters will head straight to the hot chocolate stand, because it looks very cold. There will probably be a line.\n\nAfter that, once the ice is smooth again, people will come back out, and maybe the child will try skating a bit faster on the fresh ice.",
  },
  // ---------------------------------------------------------------- Speaking Task 5
  {
    id: "cel-cs5-05",
    task: "cs5",
    exam: "celpip",
    testNo: 5,
    title: "Choosing a family home",
    difficulty: "hard",
    topic: "Housing",
    prompt:
      "Your family is moving and has found two possible homes to rent. Choose the option you prefer. Then persuade your partner, who prefers the other option, that your choice is better.",
    choices: [
      {
        title: "Downtown two-bedroom condo",
        details: [
          "$2,400 a month, heat included",
          "Ten-minute walk to both your jobs",
          "Gym and rooftop terrace; no yard",
          "Underground parking for one car: $150 extra",
        ],
      },
      {
        title: "Three-bedroom townhouse in the suburbs",
        details: [
          "$2,600 a month plus utilities",
          "45-minute commute by car or train",
          "Small fenced backyard",
          "Elementary school and park across the street",
        ],
      },
    ],
    keyPoints: [
      "Clear preference stated early",
      "Compares costs accurately, including hidden costs",
      "Considers daily life: commute, children, space",
      "Responds to the partner's main concern",
      "Persuasive close",
    ],
    modelAnswer:
      "I know the downtown condo looks convenient, but I really think the townhouse is the right choice for our family.\n\nThe biggest difference is space. The condo has only two bedrooms, so the kids would have to share, and there's no yard at all. The townhouse has three bedrooms and a fenced backyard where they can play safely while we cook dinner.\n\nThe school and park are right across the street, so the kids can walk to class, and we won't need to drive them every day.\n\nI agree the commute is longer. But the train lets us read or relax on the way. And the price difference is smaller than it looks. The condo charges another hundred and fifty for parking, so it's almost the same cost.\n\nWe're choosing a home for the next few years, not just for our jobs. Let's go with the townhouse.",
  },
  // ---------------------------------------------------------------- Speaking Task 6
  {
    id: "cel-cs6-05",
    task: "cs6",
    exam: "celpip",
    testNo: 5,
    title: "The late carpool partner",
    difficulty: "medium",
    topic: "Workplace",
    prompt:
      "You and your coworker Marcus share a carpool to work. For the past month, Marcus has been 10 to 15 minutes late picking you up almost every day, and you have both been arriving late. Your supervisor has noticed. Choose ONE: talk to Marcus and explain that you will stop carpooling with him, OR talk to your supervisor, explain the situation and ask for a later start time.",
    choices: [
      { title: "Talk to Marcus", details: ["Explain the problem honestly", "Tell him you will stop carpooling"] },
      { title: "Talk to your supervisor", details: ["Explain why you have been late", "Ask for a later start time"] },
    ],
    keyPoints: [
      "Raises the issue tactfully without blaming harshly",
      "Gives the concrete consequences of the lateness",
      "States the decision clearly",
      "Keeps the relationship positive and offers a gesture of goodwill",
    ],
    modelAnswer:
      "Marcus, can I talk to you about something? It's a bit awkward, but I think it's better if I'm honest.\n\nYou know I've really enjoyed carpooling with you, and I appreciate all the driving you've done. But for the last month, we've been getting to work late almost every day, and yesterday our supervisor mentioned it to me. I'm still on probation, so I really can't afford to have that on my record.\n\nI know mornings are hard with the kids and the school drop-off, and I'm not upset with you. I just think it'll be easier for both of us if I start taking the bus for now. That way you don't have to rush, and I can get in on time.\n\nI'm happy to keep paying my share for gas this month. And maybe we can still drive home together sometimes. Is that okay with you?",
  },
  // ---------------------------------------------------------------- Speaking Task 7
  {
    id: "cel-cs7-05",
    task: "cs7",
    exam: "celpip",
    testNo: 5,
    title: "Required volunteer hours",
    difficulty: "hard",
    topic: "Education",
    prompt:
      "Answer the following question: Should high school students be required to complete volunteer hours before they can graduate? Explain your reasons.",
    keyPoints: [
      "Clear position at the start",
      "Benefits or drawbacks developed with examples (skills, references, community)",
      "Acknowledges the opposing view (pressure on busy or working students)",
      "Suggests a condition or compromise",
      "Brief conclusion",
    ],
    modelAnswer:
      "I believe high school students should be required to do some volunteer hours before they graduate, as long as the number is reasonable.\n\nThe first reason is that volunteering teaches skills that school doesn't. When my nephew volunteered at a seniors' residence, he had to show up on time, talk to people of different ages and solve small problems on his own. Those are exactly the skills employers look for, and he later used his supervisor there as a reference for his first job.\n\nSecond, it connects young people to their community. Many teenagers have no idea how many organizations, like food banks or animal shelters, depend on volunteers. Once they see that, some of them keep volunteering long after the requirement is finished.\n\nOf course, I understand the other side. Some students already work part-time to help their families, or they care for younger siblings, and adding more hours could be stressful. That's why I think the requirement should be flexible. Schools could count helping at a place of worship or coaching a younger team, and spread the hours over four years.\n\nSo overall, a modest, flexible requirement is good for students and for the community.",
  },
  // ---------------------------------------------------------------- Speaking Task 8
  {
    id: "cel-cs8-05",
    task: "cs8",
    exam: "celpip",
    testNo: 5,
    title: "High-tech doghouse",
    difficulty: "medium",
    topic: "Shopping",
    prompt:
      "Your friend has just adopted a large dog and wants a doghouse for the backyard. At a pet store, you see this unusual doghouse. Describe it to your friend, who is on the phone, and explain why it might be a good choice.",
    scene: {
      backdrop: "store",
      caption: "In a pet store, a doghouse has a small satellite dish and solar panel on the roof, flowers growing on top, a porch light, a thermometer display beside the door and a dog sitting inside.",
      elements: [
        { e: "🏠", x: 50, y: 56, size: 130, label: "Doghouse" },
        { e: "🐕", x: 50, y: 70, size: 44 },
        { e: "📡", x: 38, y: 24, size: 40, label: "Satellite dish" },
        { e: "🔋", x: 62, y: 26, size: 30, label: "Solar battery" },
        { e: "🌼", x: 48, y: 28, size: 26 },
        { e: "🌷", x: 54, y: 28, size: 26 },
        { e: "💡", x: 30, y: 50, size: 26, label: "Porch light" },
        { e: "🌡️", x: 70, y: 58, size: 30, label: "Heat display" },
        { e: "🏷️", x: 82, y: 76, size: 32, label: "$450" },
        { e: "🦴", x: 20, y: 84, size: 30 },
      ],
    },
    keyPoints: [
      "General description: a doghouse with unusual technology",
      "Roof features: satellite dish, solar battery, flowers",
      "Other features: porch light, heating with temperature display",
      "Price",
      "Why it suits the friend's dog (winter warmth, light at night, size)",
    ],
    modelAnswer:
      "Hi, it's me. I'm at the pet store, and I just saw the strangest doghouse. It's big, wooden and shaped like a little house, but it's packed with gadgets.\n\nOn the roof, there's a tiny satellite dish, and next to it a solar battery that powers everything. Between them, there's a small garden with real flowers growing right on top.\n\nBeside the door, there's a porch light, and on the right side, there's a little screen showing the temperature inside, so it must have a heater. There's even a dog sitting inside as a demonstration.\n\nIt costs four hundred and fifty dollars, which isn't cheap. But think about it. Your dog is big, and our winters are freezing, so a heated house would keep him comfortable. The light means you'll see him at night, too. I think it's worth considering.",
  },

  // ===================================================================== TEST 6
  // ---------------------------------------------------------------- Writing Task 1
  {
    id: "cel-cw1-06",
    task: "cw1",
    exam: "celpip",
    testNo: 6,
    title: "Damaged furniture delivery",
    difficulty: "easy",
    topic: "Consumer Issues",
    prompt:
      "You ordered a dining table and four chairs from a furniture store. When they were delivered, the table was damaged. Write an email to the store's customer service department. In your email, do the following:",
    points: [
      "Describe what you ordered and the damage.",
      "Explain how this problem has affected you.",
      "Say what you would like the store to do.",
    ],
    keyPoints: [
      "Order details: item, date, order number",
      "Clear description of the damage",
      "Personal impact (plans, time off work)",
      "Specific request with a deadline",
      "Polite and businesslike tone",
    ],
    modelAnswer:
      "Dear Customer Service Team,\n\nI am writing about my order number 48217, a solid oak dining table with four matching chairs, which was delivered to my home on Saturday, March 8.\n\nThe chairs arrived in perfect condition. Unfortunately, the table did not. There is a deep scratch about twenty centimetres long across the top, and one of the legs is cracked near the base, so the table wobbles. The delivery team left quickly, and I only noticed the damage after unwrapping it. I have attached photos for your reference.\n\nThis has been very disappointing. I bought the table specifically for a family dinner to celebrate my parents' anniversary next weekend. I also took a day off work, without pay, to wait for the delivery.\n\nI would like the store to deliver a replacement table before Friday, March 14, and to pick up the damaged one at the same time. If that is not possible, I would prefer a full refund for the table.\n\nThank you for your help. I look forward to hearing from you soon.\n\nKind regards,\nSofia Marchetti",
  },
  // ---------------------------------------------------------------- Writing Task 2
  {
    id: "cel-cw2-06",
    task: "cw2",
    exam: "celpip",
    testNo: 6,
    title: "Library: longer hours or more devices?",
    difficulty: "hard",
    topic: "Community",
    prompt:
      "Your public library has received extra funding for next year and is asking residents how to spend it. Choose the option you prefer and explain the reasons for your choice. Write about 150-200 words.",
    choices: [
      "Option A: Open the library longer on weekends, including Sunday mornings and evenings.",
      "Option B: Buy more e-books and laptops that people can borrow and take home.",
    ],
    keyPoints: [
      "States a clear choice",
      "Develops reasons about access, equity and who benefits",
      "Uses specific examples from community life",
      "Responds to the main advantage of the other option",
      "Concludes clearly",
    ],
    modelAnswer:
      "I would choose Option B, buying more e-books and laptops for people to borrow.\n\nMy main reason is that this option reaches people who cannot easily come to the library at all. Shift workers, parents with small children and people living in rural areas often struggle to visit, no matter how long the doors are open. E-books are available any time from home, and wait lists are currently very long. For example, I waited eleven weeks for one popular novel last year.\n\nLaptop loans would also make a real difference for families who cannot afford a computer. Students need one for homework, and newcomers often need one to apply for jobs or fill out government forms. A borrowed laptop at home is far more useful than a computer they can only use for an hour in the branch.\n\nLonger weekend hours would certainly be welcome, especially for study space. However, extra hours mainly help people who are already able to visit the building, while new devices and e-books extend the library's services into people's homes.\n\nFor these reasons, I believe Option B would serve more residents, and serve them more fairly.",
  },
  // ---------------------------------------------------------------- Speaking Task 1
  {
    id: "cel-cs1-06",
    task: "cs1",
    exam: "celpip",
    testNo: 6,
    title: "Buying a first used car",
    difficulty: "medium",
    topic: "Consumer Issues",
    prompt:
      "Your friend is planning to buy their first car and is thinking about buying a used one from a private seller. Give your friend advice on how to buy a used car safely.",
    keyPoints: [
      "Set a full budget, including insurance and maintenance",
      "Research the model and check the vehicle history report",
      "Get an independent mechanic's inspection and take a test drive",
      "Paperwork and payment safety (ownership, liens, no cash in advance)",
    ],
    modelAnswer:
      "Good for you! Buying from a private seller can save you money, but you need to be careful. Here's what I'd do.\n\nFirst, work out your total budget, not just the price of the car. Call an insurance company and get a quote before you buy, because insurance for new drivers can be really expensive. Also keep some money aside for repairs and winter tires.\n\nSecond, do your research. Pick a few models known for being reliable, and when you find a car you like, ask the seller for the vehicle identification number. You can use it to get a history report that shows if the car has been in an accident or still has a loan on it.\n\nThird, never skip the inspection. Take it for a long test drive, on the highway too, and then ask a mechanic you trust to check it. It usually costs around a hundred dollars, but it can save you thousands. If the seller refuses, walk away.\n\nFinally, be safe with the payment. Meet in a public place, don't send a deposit before you've seen the car, and make sure the name on the ownership papers matches the seller's ID.\n\nIf you want, I can come along for the test drive.",
  },
  // ---------------------------------------------------------------- Speaking Task 2
  {
    id: "cel-cs2-06",
    task: "cs2",
    exam: "celpip",
    testNo: 6,
    title: "A plan that went wrong",
    difficulty: "easy",
    topic: "Personal Experience",
    prompt:
      "Talk about a time when something you had planned did not go the way you expected. What happened, and what did you do?",
    keyPoints: [
      "Describes the original plan",
      "Explains what went wrong",
      "Describes how the speaker adapted",
      "Reflects on the result or lesson",
    ],
    modelAnswer:
      "Two summers ago, I planned a surprise birthday picnic for my wife at a beach just outside the city. I spent days preparing. I booked a picnic table, made her favourite food and invited eight of our friends.\n\nOn the morning of the party, the forecast said sunny, but by noon there was a huge thunderstorm. The beach was closed, and everybody was already on their way.\n\nI had to think fast. I called our friends and asked them to come to our apartment instead. While my wife was out with her sister, we moved all the furniture, spread blankets on the living room floor, and had an indoor picnic.\n\nIn the end, she said it was the best birthday she'd ever had, because it felt so cozy and funny. I learned that a backup plan is always a good idea.",
  },
  // ---------------------------------------------------------------- Speaking Task 3
  {
    id: "cel-cs3-06",
    task: "cs3",
    exam: "celpip",
    testNo: 6,
    title: "Lakeside campsite",
    difficulty: "easy",
    topic: "Recreation",
    prompt:
      "Describe some things that are happening in the picture below as well as you can. The person with whom you are speaking cannot see the picture.",
    scene: campScene,
    keyPoints: [
      "Setting: a family campsite by a lake surrounded by pine trees",
      "Centre: a father lighting a campfire, a girl roasting a hot dog",
      "Left: a tent, an open cooler and a raccoon",
      "Right: a canoe on the shore",
      "Storm clouds over the water",
    ],
    modelAnswer:
      "This picture shows a family campsite beside a lake, surrounded by tall pine trees. It looks like late afternoon.\n\nOn the left side, there's a big tent already set up. In front of it, in the bottom left corner, there's a cooler that has been left open, and a raccoon is sneaking toward it, probably looking for food.\n\nIn the centre of the picture, a father is kneeling beside a campfire, and it looks like he has just lit it. Next to him, his young daughter is holding a hot dog on a stick, ready to roast it over the flames.\n\nOn the right side, there's a canoe pulled up on the shore near the water.\n\nFinally, in the top right corner, there are dark storm clouds over the lake, so the weather doesn't look very promising.",
  },
  // ---------------------------------------------------------------- Speaking Task 4
  {
    id: "cel-cs4-06",
    task: "cs4",
    exam: "celpip",
    testNo: 6,
    title: "Lakeside campsite: what next?",
    difficulty: "medium",
    topic: "Recreation",
    prompt:
      "In this picture, what do you think will most probably happen next?",
    scene: campScene,
    keyPoints: [
      "The raccoon will get into the open cooler and take food",
      "The family will notice and chase it away",
      "The storm will arrive; they will put out or cover the fire and shelter in the tent",
      "They may pull the canoe further up the shore",
      "Varied future and probability language",
    ],
    modelAnswer:
      "I think a couple of things are going to happen very soon.\n\nFirst, that raccoon will almost certainly climb into the open cooler. Raccoons are clever, so it will probably grab something, maybe a pack of hot dogs or some bread. When the father and daughter hear the noise, they'll turn around and chase it away, but it'll probably escape with some food.\n\nSecond, the storm is coming. Those clouds look really dark, so it will likely start pouring within a few minutes. The father will probably have to put out the fire, and the girl won't be able to finish roasting her hot dog.\n\nThe family will most likely run into the tent to stay dry. Before that, the father might pull the canoe further up the shore so the waves don't carry it away. They'll probably end up eating sandwiches in the tent.",
  },
  // ---------------------------------------------------------------- Speaking Task 5
  {
    id: "cel-cs5-06",
    task: "cs5",
    exam: "celpip",
    testNo: 6,
    title: "Team year-end celebration",
    difficulty: "medium",
    topic: "Workplace",
    prompt:
      "Your team at work is planning its year-end celebration, and you have been asked to help choose. Choose the option you prefer. Then persuade your coworker, who prefers the other option, that your choice is better.",
    choices: [
      {
        title: "Bowling night",
        details: [
          "Friday, 6:00 to 9:00 p.m.",
          "$35 per person, paid by the company",
          "Pizza and drinks included",
          "Twenty-minute drive from the office",
        ],
      },
      {
        title: "Potluck lunch at the office",
        details: [
          "Wednesday, noon to 2:00 p.m., during work hours",
          "Free; everyone brings a dish",
          "Gift exchange and team awards",
          "Held in the staff room",
        ],
      },
    ],
    keyPoints: [
      "Clear preference",
      "Comparisons on cost, timing, inclusion and atmosphere",
      "Responds directly to the coworker's preference",
      "Friendly, persuasive close",
    ],
    modelAnswer:
      "I know you're excited about bowling, but I really think the potluck lunch is the better choice for our team.\n\nThe main reason is timing. The potluck happens during work hours, so everyone can come. A Friday night is hard for people with kids, and for anyone who doesn't drive, getting to a bowling alley twenty minutes away would be a problem. Last year, half the team missed the evening event.\n\nSecond, a potluck feels more personal. We have people from so many backgrounds, and sharing food from home is a great way to learn about each other. Plus, there's time for the gift exchange and team awards, which you can't really do in a noisy bowling alley.\n\nI agree bowling would be fun. But the potluck is free, so the company could spend that money on nicer gifts instead. Let's go with the potluck. I'll even bring my famous samosas.",
  },
  // ---------------------------------------------------------------- Speaking Task 6
  {
    id: "cel-cs6-06",
    task: "cs6",
    exam: "celpip",
    testNo: 6,
    title: "A difficult reference request",
    difficulty: "hard",
    topic: "Workplace",
    prompt:
      "Your friend Kevin has asked you to be a job reference for a position at your company. You like Kevin, but when you worked together before, he often missed deadlines. Your manager trusts your opinion and has asked what you think of Kevin. Choose ONE: talk to Kevin and explain why you cannot be his reference, OR talk to your manager and give an honest recommendation about Kevin.",
    choices: [
      { title: "Talk to Kevin", details: ["Explain your concern tactfully", "Decline to be his reference"] },
      { title: "Talk to your manager", details: ["Describe Kevin's strengths honestly", "Mention your concerns fairly"] },
    ],
    keyPoints: [
      "Opens tactfully and shows respect for the other person",
      "Balances honesty with kindness (strengths as well as concerns)",
      "Gives a concrete reason or example",
      "Offers an alternative or a constructive next step",
    ],
    modelAnswer:
      "Kevin, thanks for thinking of me for this. I know how much you want this job, so I wanted to talk to you face to face.\n\nI've thought about it carefully, and I don't think I'm the right person to be your reference. My manager knows we worked together at the warehouse, and she'll ask me about deadlines, because they're a big part of this role. To be honest, back then you were late with the inventory reports quite a few times. I'd have to mention that, and I don't want to hurt your chances.\n\nYou're great with customers, though, and everyone likes working with you. I think someone from your current job, who has seen how you work now, would be a much stronger reference.\n\nI really hope you get it, and I'm happy to help you prepare for the interview.",
  },
  // ---------------------------------------------------------------- Speaking Task 7
  {
    id: "cel-cs7-06",
    task: "cs7",
    exam: "celpip",
    testNo: 6,
    title: "Working from home permanently",
    difficulty: "hard",
    topic: "Workplace",
    prompt:
      "Answer the following question: Should employees have the right to work from home permanently if their job can be done remotely? Explain your reasons.",
    keyPoints: [
      "Clear position at the start",
      "Reasons: commuting time and cost, flexibility, productivity",
      "Counter-argument: teamwork, training new staff, isolation",
      "A balanced condition or compromise",
      "Concluding statement",
    ],
    modelAnswer:
      "I think employees should have the option to work from home most of the time, but I don't think it should be an absolute right to stay home permanently.\n\nOn the one hand, working from home has huge benefits. My sister used to spend almost two hours a day commuting in traffic. Now she uses that time to exercise and pick up her kids from school, and she says she's much less stressed. She also saves hundreds of dollars a month on gas and parking. For many jobs, like hers in accounting, people can be just as productive at home.\n\nOn the other hand, some things are much harder to do through a screen. New employees learn a lot by sitting near experienced coworkers and asking quick questions. Teams also build trust when they see each other in person, and some people feel isolated working alone every day.\n\nSo my view is that companies should offer flexible arrangements, for example, working from home three or four days a week, with regular days in the office for meetings, training and team activities. Employees with special situations, like a disability or caring for a family member, should be able to ask for fully remote work.\n\nThat way, both workers and companies get the best of both.",
  },
  // ---------------------------------------------------------------- Speaking Task 8
  {
    id: "cel-cs8-06",
    task: "cs8",
    exam: "celpip",
    testNo: 6,
    title: "Unusual bird feeder",
    difficulty: "medium",
    topic: "Shopping",
    prompt:
      "Your aunt loves watching birds and wants a new bird feeder for her backyard. At a garden centre, you see this unusual feeder. Describe it to your aunt, who is on the phone, and explain why it might be a good choice.",
    scene: {
      backdrop: "backyard",
      caption: "In a garden display, a bird feeder shaped like a tiny house stands on a pole, with a camera at the front, a small solar panel battery on the roof, a slide for squirrels on one side and birds eating from it.",
      elements: [
        { e: "🏠", x: 50, y: 36, size: 90, label: "House-shaped feeder" },
        { e: "📷", x: 50, y: 46, size: 26, label: "Built-in camera" },
        { e: "🔋", x: 56, y: 18, size: 24, label: "Solar battery" },
        { e: "🐦", x: 34, y: 40, size: 30 },
        { e: "🐦", x: 64, y: 30, size: 26 },
        { e: "🛝", x: 72, y: 58, size: 44, label: "Squirrel slide" },
        { e: "🐿️", x: 82, y: 70, size: 34 },
        { e: "🌻", x: 18, y: 78, size: 40 },
        { e: "🌲", x: 90, y: 30, size: 56 },
        { e: "🏷️", x: 30, y: 80, size: 30, label: "$120" },
        { e: "📱", x: 12, y: 60, size: 30, label: "App shows the video" },
      ],
    },
    keyPoints: [
      "General description: a feeder shaped like a little house on a pole",
      "Camera that sends video to a phone; solar power",
      "The slide that keeps squirrels away from the seeds",
      "Price",
      "Why it suits the aunt (watch birds up close, squirrels a problem)",
    ],
    modelAnswer:
      "Hi Auntie, I'm at the garden centre, and I found a bird feeder you'd love. It's a little wooden house sitting on top of a tall pole, but it's not a normal feeder.\n\nRight in the front, under the roof, there's a tiny camera. It records the birds while they eat and sends the video to an app on your phone. On top of the roof, there's a small solar battery, so you never have to plug it in.\n\nThe funniest part is on the side. There's a little plastic slide, so when a squirrel tries to climb up, it just slides off onto the grass.\n\nIt's a hundred and twenty dollars. I know that's more than usual, but you always complain that squirrels steal your seeds. And with the camera, you can see the birds up close, even from the kitchen.",
  },
];
