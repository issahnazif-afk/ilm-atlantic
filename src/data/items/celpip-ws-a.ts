import type { Item } from '../types';

// Original CELPIP-General practice content: Writing Tasks 1-2 and Speaking Tasks 1-8, practice tests 1-3.
// All prompts, scenes and model answers are written specifically for Ilm Atlantic.

export const celpipWSA: Item[] = [
  // ================================================================ WRITING TASK 1: Writing an Email
  {
    id: "cel-cw1-01",
    task: "cw1",
    exam: "celpip",
    testNo: 1,
    title: "No heat in the bedroom",
    difficulty: "easy",
    topic: "Housing",
    prompt:
      "You rent an apartment in Winnipeg. For the past five days, the heating in your bedroom has not worked, even though the temperature outside has dropped below minus 25 degrees. You have called the building office twice, but nobody has come to fix it. Write an email to your property manager in about 150-200 words. Your email should do the following things:",
    points: [
      "Describe the problem and how long it has lasted.",
      "Explain how the problem is affecting you and your household.",
      "Say what you want the property manager to do, and by when.",
    ],
    keyPoints: [
      "Polite, formal opening that identifies the writer and the unit number",
      "Specific details: which room, how long, what has already been tried (two calls)",
      "Concrete effects on the household (cold bedroom, sleeping elsewhere, illness, safety worry)",
      "A clear request with a deadline and contact details",
      "Firm but courteous tone and a proper sign-off",
    ],
    modelAnswer:
      "Dear Ms. Kowalski,\n\nI am writing about a heating problem in my apartment, unit 504. Since last Thursday, the radiator in my bedroom has not given off any heat. The rest of the apartment is cool but bearable, while the bedroom drops to about 14 degrees at night. I reported this to the building office by phone on Friday and again on Monday, but no one has come to look at it.\n\nWith temperatures falling below minus 25 this week, the situation is becoming serious. My husband and I have moved our mattress into the living room, and our two-year-old daughter has caught a cold. We have also been using a small space heater, which I am not comfortable leaving on overnight.\n\nI would be grateful if you could send a technician to inspect the heating no later than Wednesday afternoon. I work from home, so I can let them in at any time. Please confirm the appointment by email or call me at 204-555-0187.\n\nThank you for your help.\n\nSincerely,\nPriya Raman",
  },
  {
    id: "cel-cw1-02",
    task: "cw1",
    exam: "celpip",
    testNo: 2,
    title: "Shift change for a language course",
    difficulty: "medium",
    topic: "Work",
    prompt:
      "You work full-time at a grocery store. You have just been accepted into a free evening English course at a local college. Classes are on Tuesday and Thursday evenings from 6:00 to 9:00 p.m., starting next month, but you are usually scheduled to work until 9:00 p.m. on those days. Write an email to your store manager in about 150-200 words. Your email should do the following things:",
    points: [
      "Explain why you are writing and give details about the course.",
      "Suggest a change to your work schedule.",
      "Describe how you will make sure the store is not short-staffed.",
    ],
    keyPoints: [
      "States the purpose early: a request for a schedule change",
      "Gives course details (days, times, start date, length) and a benefit to the job",
      "Proposes a specific alternative schedule that keeps the same hours",
      "Offers practical solutions such as a shift swap with a named co-worker or extra weekend hours",
      "Appreciative, professional tone; invites a meeting to discuss",
    ],
    modelAnswer:
      "Dear Mr. Okafor,\n\nI am writing to ask whether my work schedule could be adjusted for the next few months. I have just been accepted into a free evening English course at Red River College. It runs on Tuesday and Thursday evenings from 6:00 to 9:00 p.m., starting on March 3 and finishing in mid-June.\n\nAt the moment, I work until 9:00 p.m. on both of those days. Would it be possible for me to start at 7:00 a.m. on Tuesdays and Thursdays and finish at 3:30 p.m. instead? That way I would still work my full forty hours each week.\n\nI understand that evenings can be busy, so I have already spoken to Daniela in the produce department. She would be happy to take my Tuesday and Thursday evening shifts in exchange for two of my early Saturday shifts. I am also willing to cover extra hours on Sundays if needed.\n\nI believe the course will help me serve customers more confidently. Could we meet this week to discuss it?\n\nBest regards,\nTomas Ferreira",
  },
  {
    id: "cel-cw1-03",
    task: "cw1",
    exam: "celpip",
    testNo: 3,
    title: "Cancelled swimming lessons",
    difficulty: "hard",
    topic: "Recreation",
    prompt:
      "You registered your eight-year-old son for an eight-week swimming program at your city's recreation centre and paid $160. During the program, three classes were cancelled without any notice. Each time, you drove 30 minutes to the centre and only found out when you arrived. Write an email to the program coordinator in about 150-200 words. Your email should do the following things:",
    points: [
      "Describe what happened.",
      "Explain how these cancellations have affected you and your son.",
      "Ask for a specific solution.",
    ],
    keyPoints: [
      "Identifies the program, session time and child clearly",
      "Gives exact facts: three cancellations, dates, no notice, travel time",
      "Explains practical and emotional effects (wasted time, missed work, child's disappointment, lost progress)",
      "Requests a specific remedy (partial refund or make-up classes) plus a better notification system",
      "Firm yet polite tone: complaint without hostility",
    ],
    modelAnswer:
      "Dear Mr. Leblanc,\n\nI am writing about the Level 3 swimming program at Greenfield Recreation Centre, Saturdays at 10:00 a.m., in which my son, Arjun Mehta, is registered. I paid $160 for eight weeks of lessons, but three of the classes, on October 5, October 19 and November 2, were cancelled without any warning.\n\nEach time, we drove thirty minutes to the centre and only learned about the cancellation from a sign on the pool door. Apart from the wasted time and gas, I had rearranged a work shift on one of those days. More importantly, Arjun was very disappointed, and with almost half the program missing, he has not been able to complete the skills he needs to move up to Level 4.\n\nI would therefore like to ask for one of two solutions: either three make-up lessons before the end of December, or a refund of $60 for the missed classes. I would also suggest that the centre contact families by email or text whenever a class is cancelled.\n\nI look forward to your reply.\n\nKind regards,\nNeha Mehta",
  },

  // ================================================================ WRITING TASK 2: Responding to Survey Questions
  {
    id: "cel-cw2-01",
    task: "cw2",
    exam: "celpip",
    testNo: 1,
    title: "Community centre funding",
    difficulty: "medium",
    topic: "Community",
    prompt:
      "Your city has received extra money to improve one service at your local community centre, and it is asking residents for their opinion. Choose the option you prefer. Explain the reasons for your choice. Write about 150-200 words.",
    choices: [
      "Option A: Renovate the outdoor skating rink and add lights so it can be used in the evening.",
      "Option B: Expand the after-school program to offer free homework help and sports for children aged 6 to 12.",
    ],
    keyPoints: [
      "Clearly states one choice at the start",
      "Gives two or three developed reasons with examples (working parents, year-round benefit, number of people served)",
      "Acknowledges the other option fairly before explaining why it is less important",
      "Organized paragraphs with linking words and a short conclusion",
    ],
    modelAnswer:
      "I would prefer the city to use the money to expand the after-school program.\n\nFirst, this option would help many working families. In our neighbourhood, a lot of parents work until five or six o'clock, and children often go home to an empty apartment after school. A free program with homework help would give them a safe place to stay, and parents would not have to pay for expensive child care.\n\nSecond, the program would be useful all year. An outdoor rink can only be used for about three months, and only when the weather is cold enough. Homework help and sports, on the other hand, would benefit children from September to June.\n\nFinally, the program would support children's education. Many families in our area are newcomers, and some parents cannot help with English or math homework. Trained tutors could make a real difference to these students' marks and confidence.\n\nOf course, a lit skating rink would be enjoyable, and skating is part of Canadian life. However, I believe the after-school program would make a bigger and longer-lasting difference to our community.",
  },
  {
    id: "cel-cw2-02",
    task: "cw2",
    exam: "celpip",
    testNo: 2,
    title: "What to do with an empty lot",
    difficulty: "medium",
    topic: "Environment",
    prompt:
      "Your neighbourhood association has been given permission to use an empty lot on your street. It is asking residents to vote on how the land should be used. Choose the option you prefer. Explain the reasons for your choice. Write about 150-200 words.",
    choices: [
      "Option A: Create a community garden where residents can rent small plots to grow vegetables and flowers.",
      "Option B: Create a fenced off-leash park where dog owners can let their dogs run and play.",
    ],
    keyPoints: [
      "States a clear preference in the opening sentence",
      "Develops reasons such as access for everyone, food costs, environment, bringing neighbours together",
      "Recognizes the value of the other option and responds to it",
      "Logical paragraphing and a clear concluding sentence",
    ],
    modelAnswer:
      "In my opinion, the empty lot should become a community garden.\n\nMy main reason is that a garden can be enjoyed by everyone, not just one group of residents. Seniors, families with children and people living in apartments without a yard could all rent a plot. An off-leash park, by contrast, would mostly serve dog owners, who are only a part of our neighbourhood.\n\nIn addition, a garden would help people save money. Fresh vegetables have become very expensive in grocery stores, and even a small plot can produce tomatoes, beans and lettuce for a whole summer. Extra produce could also be donated to the local food bank.\n\nA garden would also bring neighbours together. People would meet while watering their plants, share tips and maybe organize a harvest festival in the fall. It would also make our street greener and attract bees and butterflies.\n\nI understand that dogs need space to exercise. However, there is already a large park ten minutes away where dogs are allowed. For these reasons, I strongly believe a community garden would be the better choice for our neighbourhood.",
  },
  {
    id: "cel-cw2-03",
    task: "cw2",
    exam: "celpip",
    testNo: 3,
    title: "Staff party or charity day",
    difficulty: "easy",
    topic: "Work",
    prompt:
      "Your company has $5,000 left in this year's budget for staff activities. Management is asking employees how the money should be spent. Choose the option you prefer. Explain the reasons for your choice. Write about 150-200 words.",
    choices: [
      "Option A: Hold a year-end dinner party for all staff at a popular local restaurant.",
      "Option B: Donate the money to a local food bank and give staff one paid day to volunteer there together.",
    ],
    keyPoints: [
      "Chooses one option directly",
      "Reasons: helping the community, team building through shared work, inclusiveness, company reputation",
      "Concedes the appeal of the other option and answers it",
      "Clear structure with connectors and a conclusion",
    ],
    modelAnswer:
      "I would choose Option B, donating the money to a local food bank and giving staff a paid day to volunteer there.\n\nFirst of all, this choice would help people who really need it. Food banks across the country are seeing more visitors than ever, especially in the winter months. Five thousand dollars could buy hundreds of meals for families in our own city, while one dinner would be forgotten in a few weeks.\n\nSecondly, a volunteer day would be an excellent team-building activity. At a restaurant, people usually sit with the friends they already know. When we sort donations or pack food hampers together, we have to work as a team, and employees from different departments get to know each other.\n\nIn addition, not everyone enjoys a party. Some of my colleagues do not drink alcohol, have dietary restrictions or cannot go out in the evening because of child care. A daytime volunteer event would include everyone.\n\nA party would certainly be fun, and staff deserve to be thanked. Still, I believe giving back to the community would make us feel prouder of our company.",
  },

  // ================================================================ SPEAKING TASK 1: Giving Advice (90 s)
  {
    id: "cel-cs1-01",
    task: "cs1",
    exam: "celpip",
    testNo: 1,
    title: "Preparing for a first Canadian winter",
    difficulty: "easy",
    topic: "Weather",
    prompt:
      "A friend of yours has just moved to Edmonton from a warm country. It is October, and your friend is worried about the coming winter. Give your friend some advice about how to prepare for a Canadian winter.",
    keyPoints: [
      "Clothing: layers, a proper parka, boots, toque and mitts; where to buy them cheaply",
      "Home and car or transit: winter tires, plugging in a car, checking bus schedules on cold days",
      "Health and mood: vitamin D, staying active indoors, getting outside on sunny days",
      "Enjoying winter: skating, community programs, making friends",
      "Friendly, encouraging tone with clear organization",
    ],
    modelAnswer:
      "Hey, I know winter here sounds scary, but don't worry. With a bit of preparation, you'll be fine. Let me give you a few tips.\n\nFirst, clothing is the most important thing. You'll need a warm parka, waterproof boots with a good grip, a toque, a scarf and mitts. Mitts are actually warmer than gloves. The trick is to dress in layers, so you can take something off when you go inside. You don't have to spend a fortune either. Thrift stores and end-of-season sales have great deals.\n\nSecond, think about getting around. If you drive, put winter tires on before the first snowfall, and keep a brush and a blanket in the car. If you take the bus, download the transit app so you're not waiting outside for twenty minutes at minus thirty.\n\nFinally, take care of your mood. The days get really short, so try to go outside when the sun is out, and maybe ask your doctor about vitamin D. Honestly, the best advice I can give you is to embrace winter. Sign up for skating lessons at the community centre. You'll meet people and actually start enjoying the snow.",
  },
  {
    id: "cel-cs1-02",
    task: "cs1",
    exam: "celpip",
    testNo: 2,
    title: "Used car or transit pass",
    difficulty: "medium",
    topic: "Transportation",
    prompt:
      "Your cousin has just started a new job in Toronto. The office is downtown, about 40 minutes from your cousin's apartment by subway. Your cousin is thinking about buying a used car instead of getting a monthly transit pass. Give your cousin advice about this decision.",
    keyPoints: [
      "Compares total costs: car payment, insurance, gas, parking versus a monthly pass",
      "Considers commute time, traffic and stress",
      "Mentions practical points such as maintenance and inspection if buying used",
      "Gives a clear recommendation, possibly a compromise (transit now, car share for weekends)",
    ],
    modelAnswer:
      "Congratulations on the new job! I'm glad you asked me about this, because I went through the same thing a few years ago.\n\nMy advice is to start with a transit pass, at least for the first few months. Here's why. First, think about the real cost of a car. It's not just the price of the car itself. In Toronto, insurance can be several hundred dollars a month, especially for a new driver, and then you have gas, maintenance and, most importantly, parking downtown, which can cost more than twenty dollars a day. A monthly pass is much cheaper than all of that.\n\nSecond, driving downtown during rush hour is really stressful. Your trip might take longer by car than by subway. On the train, you can read, listen to podcasts or just relax.\n\nThat said, I understand that a car is useful for weekends, groceries or visiting family. So, for those trips, you could join a car-sharing service or rent a car when you need one.\n\nIf you still decide to buy a used car later, please have a mechanic inspect it before you pay. Anyway, try transit first and see how it goes.",
  },
  {
    id: "cel-cs1-03",
    task: "cs1",
    exam: "celpip",
    testNo: 3,
    title: "Getting started as a volunteer",
    difficulty: "easy",
    topic: "Community",
    prompt:
      "Your neighbour recently retired and wants to stay busy and meet new people. She is thinking about volunteering but does not know where to start. Give her some advice about how to find a volunteer position that suits her.",
    keyPoints: [
      "Reflect on interests and skills first",
      "Where to look: volunteer centres, libraries, community centres, websites, places of worship",
      "Start small with a trial or one-time event; ask about training and time commitment",
      "Mention benefits: social connection, purpose, health",
    ],
    modelAnswer:
      "That's a wonderful idea, and I think you'd be a great volunteer. Let me share a few suggestions.\n\nFirst, think about what you really enjoy and what you're good at. You spent thirty years as an accountant, right? Lots of organizations need help with bookkeeping, or helping seniors file their taxes in the spring. But if you'd rather do something completely different, like gardening or working with animals, that's fine too.\n\nNext, find out what's available. Your city probably has a volunteer centre with an online list of positions. The public library and the community centre also post notices, and the local hospital and food bank are always looking for people.\n\nMy third piece of advice is to start small. Instead of committing to three days a week right away, try a one-time event first, like a charity run or a holiday food drive. That way you can see if you like the people and the work. Also, ask how much training they give you.\n\nFinally, don't forget the social side. Volunteering is a great way to make new friends in the neighbourhood. I'm sure you'll find something you love, and if you want, I can come with you to the volunteer centre next week.",
  },

  // ================================================================ SPEAKING TASK 2: Talking about a Personal Experience (60 s)
  {
    id: "cel-cs2-01",
    task: "cs2",
    exam: "celpip",
    testNo: 1,
    title: "Helping a neighbour",
    difficulty: "easy",
    topic: "Community",
    prompt:
      "Talk about a time when you helped a neighbour or someone in your community. What happened, what did you do, and how did you feel afterwards?",
    keyPoints: [
      "Sets the scene: when, where, who",
      "Explains the problem the person had",
      "Describes the actions taken in sequence",
      "Reflects on the result and feelings",
    ],
    modelAnswer:
      "A couple of winters ago, we had a huge snowstorm overnight. In the morning, I noticed that my elderly neighbour, Mr. Hughes, was standing at his door looking at a wall of snow. He's in his eighties and had a doctor's appointment that afternoon, but there was no way he could clear his driveway himself.\n\nSo I grabbed my shovel and spent about an hour clearing his driveway and the path to his front door. Then I realized his car was buried too, so I brushed it off and even drove him to the clinic, because the roads were still pretty bad.\n\nAfterwards, he invited me in for tea and told me stories about growing up in Nova Scotia. I felt really good, honestly. Since then, we've become friends, and I clear his driveway every time it snows.",
  },
  {
    id: "cel-cs2-02",
    task: "cs2",
    exam: "celpip",
    testNo: 2,
    title: "Learning something new quickly",
    difficulty: "easy",
    topic: "Work",
    prompt:
      "Describe a time when you had to learn something new in a short period of time. What did you have to learn, how did you do it, and what was the result?",
    keyPoints: [
      "Identifies the skill and why there was time pressure",
      "Explains the learning strategies used",
      "Mentions difficulties along the way",
      "Gives the outcome and what was learned",
    ],
    modelAnswer:
      "When I started my job at a dental clinic last year, my manager told me on my first day that we were switching to a new booking system the following Monday. That meant I had less than a week to learn software I'd never seen before, while also learning everything else about the job.\n\nSo I made a plan. Every evening I watched the training videos and took notes. During quiet times at work, I practised booking fake appointments. I also asked a co-worker who had used the program at another clinic to show me some shortcuts.\n\nThe first Monday was stressful, and I made a couple of mistakes with double bookings. But by the end of the week, I was actually helping other staff members. That experience taught me that I can learn quickly if I break a task into small steps.",
  },
  {
    id: "cel-cs2-03",
    task: "cs2",
    exam: "celpip",
    testNo: 3,
    title: "A trip that did not go as planned",
    difficulty: "medium",
    topic: "Travel",
    prompt:
      "Talk about a trip or outing that did not go as you had planned. What went wrong, how did you deal with it, and what did you learn from the experience?",
    keyPoints: [
      "Describes the original plan briefly",
      "Explains what went wrong and why",
      "Shows how the problem was handled",
      "Reflects on a lesson or positive outcome",
    ],
    modelAnswer:
      "Last summer, my wife and I planned a camping weekend in Banff. We had booked a campsite months in advance and packed everything the night before. But when we were about an hour away, we heard on the radio that there was a wildfire nearby, and the campground had been closed.\n\nAt first, we were really disappointed, and we didn't know what to do. We pulled over at a gas station and started calling hotels in Canmore, but they were all full. Finally, a friend suggested a small campground near Drumheller, which is in the opposite direction. It was a long drive, but we decided to go.\n\nIn the end, it turned out to be a great weekend. We visited the dinosaur museum and went hiking in the badlands. What I learned is to always have a backup plan, and to stay flexible.",
  },

  // ================================================================ SPEAKING TASK 3: Describing a Scene (60 s)
  {
    id: "cel-cs3-01",
    task: "cs3",
    exam: "celpip",
    testNo: 1,
    title: "A busy summer park",
    difficulty: "easy",
    topic: "Recreation",
    prompt:
      "Describe what is happening in the picture as fully as you can. The person you are talking to cannot see the picture.",
    scene: {
      backdrop: "park",
      caption: "A busy city park on a sunny summer afternoon with a family picnic, a girl flying a kite, a dog chasing a frisbee, a jogger, a cyclist and an ice cream cart.",
      elements: [
        { e: "☀️", x: 88, y: 9, size: 56 },
        { e: "🌳", x: 9, y: 32, size: 96 },
        { e: "🌳", x: 91, y: 34, size: 96 },
        { e: "🪁", x: 42, y: 12, size: 48, label: "kite" },
        { e: "👧", x: 42, y: 58, size: 50 },
        { e: "👨‍👩‍👦", x: 22, y: 68, size: 60, label: "family on a blanket" },
        { e: "🧺", x: 31, y: 76, size: 40 },
        { e: "🥏", x: 63, y: 50, size: 34 },
        { e: "🐕", x: 60, y: 66, size: 48 },
        { e: "🍦", x: 80, y: 60, size: 46, label: "ice cream cart" },
        { e: "🏃‍♀️", x: 52, y: 86, size: 46 },
        { e: "🚴", x: 76, y: 88, size: 50 },
      ],
    },
    keyPoints: [
      "Gives an overview first: setting, weather, overall mood",
      "Describes several people and what they are doing, using the present continuous",
      "Uses location language (in the foreground, on the left, near the trees)",
      "Adds details such as clothing, objects and likely feelings",
    ],
    modelAnswer:
      "This picture shows a busy park on a beautiful, sunny summer afternoon. There are big green trees on both sides, and everyone seems to be enjoying the warm weather.\n\nOn the left, a family of three is sitting on a blanket having a picnic. They've got a picnic basket beside them, and they look relaxed and happy. In the middle of the park, a young girl is flying a colourful kite. It's quite high up in the sky, so it must be a little windy.\n\nA bit to the right, a dog is jumping to catch a frisbee. Behind the dog, near the trees, there's an ice cream cart, and I imagine a few kids will be lining up there soon.\n\nAt the bottom of the picture, along the path, a woman is jogging and a man is riding his bike. Overall, it's a lively, cheerful scene.",
  },
  {
    id: "cel-cs3-02",
    task: "cs3",
    exam: "celpip",
    testNo: 2,
    title: "Birthday breakfast disaster",
    difficulty: "medium",
    topic: "Family",
    prompt:
      "Describe what is happening in the picture as fully as you can. The person you are talking to cannot see the picture.",
    scene: {
      backdrop: "kitchen",
      caption: "A father trying to make a birthday breakfast: the frying pan is smoking, the smoke alarm is ringing, milk is spilled, eggs are broken on the floor and the cat is licking them up.",
      elements: [
        { e: "🚨", x: 50, y: 7, size: 40, label: "smoke alarm" },
        { e: "🪟", x: 88, y: 22, size: 60, label: "open window" },
        { e: "💨", x: 30, y: 28, size: 52 },
        { e: "🍳", x: 30, y: 44, size: 54 },
        { e: "👨‍🍳", x: 44, y: 58, size: 70 },
        { e: "🎂", x: 12, y: 46, size: 50, label: "birthday cake" },
        { e: "🥛", x: 70, y: 44, size: 40, label: "spilled milk" },
        { e: "🥚", x: 58, y: 88, size: 34, label: "broken eggs" },
        { e: "🐈", x: 68, y: 84, size: 46 },
        { e: "👧", x: 86, y: 64, size: 52 },
      ],
    },
    keyPoints: [
      "Overview: a kitchen in chaos while someone prepares a special breakfast",
      "Describes the smoking pan, alarm, father's reaction",
      "Mentions the spilled milk, broken eggs and cat",
      "Notes the child and the birthday cake, and speculates on feelings",
      "Clear spatial organization and vivid vocabulary",
    ],
    modelAnswer:
      "This picture shows a kitchen where things are going really wrong. It looks like a dad is trying to make a special birthday breakfast, but it's turning into a disaster.\n\nIn the middle of the picture, the father, who's wearing a chef's hat, is standing at the stove. The frying pan in front of him is smoking badly, and the smoke alarm on the ceiling is going off. Someone has opened the window on the right to let the smoke out.\n\nOn the left side of the counter, there's a birthday cake, which seems to be the only thing that hasn't been ruined. On the right, a glass of milk has been knocked over and is spilling across the counter.\n\nOn the floor, a few eggs have smashed, and the family cat is happily licking them up. Meanwhile, a little girl is standing nearby, watching the whole mess.",
  },
  {
    id: "cel-cs3-03",
    task: "cs3",
    exam: "celpip",
    testNo: 3,
    title: "Outdoor rink in winter",
    difficulty: "easy",
    topic: "Recreation",
    prompt:
      "Describe what is happening in the picture as fully as you can. The person you are talking to cannot see the picture.",
    scene: {
      backdrop: "winter",
      caption: "An outdoor neighbourhood skating rink on a snowy day, with kids playing hockey, a woman skating, a toddler on a sled, a snowman and a hot chocolate stand.",
      elements: [
        { e: "❄️", x: 30, y: 8, size: 30 },
        { e: "❄️", x: 62, y: 12, size: 26 },
        { e: "🌲", x: 6, y: 26, size: 90 },
        { e: "🌲", x: 94, y: 22, size: 90 },
        { e: "☕", x: 82, y: 36, size: 46, label: "hot chocolate stand" },
        { e: "☃️", x: 14, y: 62, size: 72 },
        { e: "⛸️", x: 38, y: 76, size: 40 },
        { e: "👩", x: 38, y: 64, size: 52 },
        { e: "🏒", x: 64, y: 74, size: 44 },
        { e: "🧒", x: 60, y: 64, size: 50 },
        { e: "🥅", x: 86, y: 70, size: 56 },
        { e: "🛷", x: 22, y: 90, size: 50, label: "toddler on a sled" },
      ],
    },
    keyPoints: [
      "Overview: snowy day at an outdoor rink, festive mood",
      "Describes the hockey game, the woman skating and the sled",
      "Mentions the snowman, trees and hot chocolate stand",
      "Uses position phrases and describes weather and atmosphere",
    ],
    modelAnswer:
      "This is a winter scene at an outdoor skating rink, probably in a neighbourhood park. It's snowing lightly, and there are tall evergreen trees covered in snow on both sides.\n\nOn the rink, a few children are playing hockey. One boy has a hockey stick and is shooting the puck toward a net on the right side. In the middle, a woman is skating by herself, and she looks quite confident on the ice.\n\nOn the left, just beside the rink, someone has built a big snowman with a hat and a scarf. In front of it, at the bottom of the picture, a parent is pulling a small child on a sled.\n\nIn the top right corner, there's a little stand selling hot chocolate, which must be popular on a cold day like this. Overall, it looks like a fun, relaxing winter afternoon for families.",
  },

  // ================================================================ SPEAKING TASK 4: Making Predictions (60 s)
  {
    id: "cel-cs4-01",
    task: "cs4",
    exam: "celpip",
    testNo: 1,
    title: "Picnic before the storm",
    difficulty: "medium",
    topic: "Recreation",
    prompt:
      "Look at the picture. What do you think will most probably happen next? Describe your predictions as fully as you can.",
    scene: {
      backdrop: "park",
      caption: "A family picnic in a park as dark storm clouds and wind arrive; the father is on his phone, a dog is creeping toward the sandwiches, a ball is rolling toward the pond and napkins are blowing away.",
      elements: [
        { e: "⛈️", x: 18, y: 10, size: 72, label: "dark storm clouds" },
        { e: "🌬️", x: 8, y: 40, size: 46 },
        { e: "🧻", x: 22, y: 42, size: 30, label: "napkins blowing" },
        { e: "🌳", x: 86, y: 30, size: 96 },
        { e: "👨", x: 32, y: 64, size: 54 },
        { e: "📱", x: 38, y: 62, size: 24 },
        { e: "🧺", x: 42, y: 76, size: 42 },
        { e: "🥪", x: 49, y: 79, size: 30 },
        { e: "🐕", x: 60, y: 80, size: 46, label: "dog sneaking up" },
        { e: "👦", x: 66, y: 62, size: 50 },
        { e: "⚽", x: 78, y: 82, size: 30 },
        { e: "🦆", x: 92, y: 88, size: 36, label: "pond" },
      ],
    },
    keyPoints: [
      "Predicts the storm: rain, packing up quickly, running for shelter",
      "Predicts the dog eating the sandwiches while the father is distracted",
      "Predicts the ball reaching the pond and the boy's reaction",
      "Uses future and probability language (will probably, is likely to, might)",
      "Gives reasons for each prediction based on details in the picture",
    ],
    modelAnswer:
      "I think this family's peaceful picnic is about to be ruined.\n\nFirst of all, there are dark storm clouds coming in from the left, and the wind is already blowing their napkins away. So, in a few minutes, it's probably going to start pouring rain. The family will most likely grab their things in a hurry and run for shelter, maybe under the big tree or back to their car.\n\nBefore that happens, though, I think the dog will get to the food. The father is busy looking at his phone, so he won't notice the dog sneaking toward the sandwiches. I'd bet the sandwiches will disappear in seconds.\n\nAt the same time, the boy's soccer ball is rolling toward the pond. It might go into the water, and the boy may try to get it and end up with wet shoes. All in all, they'll probably go home wet, hungry and laughing about it later.",
  },
  {
    id: "cel-cs4-02",
    task: "cs4",
    exam: "celpip",
    testNo: 2,
    title: "Moving day",
    difficulty: "medium",
    topic: "Housing",
    prompt:
      "Look at the picture. What do you think will most probably happen next? Describe your predictions as fully as you can.",
    scene: {
      backdrop: "street",
      caption: "A family moving into a new house: two people carry a large couch toward a narrow doorway, a tall stack of boxes wobbles, a dog runs loose near the open truck and rain clouds are approaching.",
      elements: [
        { e: "🌧️", x: 72, y: 9, size: 64, label: "rain clouds" },
        { e: "🚚", x: 18, y: 56, size: 120, label: "moving truck, back open" },
        { e: "🪴", x: 30, y: 66, size: 34 },
        { e: "👨", x: 46, y: 62, size: 52 },
        { e: "🛋️", x: 56, y: 68, size: 64 },
        { e: "👩", x: 67, y: 62, size: 52 },
        { e: "🚪", x: 86, y: 56, size: 64, label: "narrow doorway" },
        { e: "📦", x: 32, y: 88, size: 44 },
        { e: "📦", x: 32, y: 78, size: 40 },
        { e: "📦", x: 33, y: 69, size: 36, label: "wobbly stack" },
        { e: "🧒", x: 20, y: 86, size: 44 },
        { e: "🐕", x: 8, y: 78, size: 44 },
      ],
    },
    keyPoints: [
      "Predicts the couch getting stuck in the narrow doorway and how they solve it",
      "Predicts the stack of boxes falling, possibly because of the child or dog",
      "Predicts rain and a rush to cover or move belongings",
      "Uses a range of future forms and links predictions to visible clues",
    ],
    modelAnswer:
      "It looks like this family is moving into a new house, and I think the next half hour is going to be pretty hectic.\n\nTo begin with, the man and woman are carrying a large couch toward the front door, but the doorway looks much too narrow. I predict the couch is going to get stuck. They'll probably have to tip it on its side or even take the legs off to get it through.\n\nMeanwhile, the little boy is playing right next to a tall stack of boxes, and the dog is running around loose. There's a good chance one of them will knock the boxes over. Hopefully there's nothing breakable inside.\n\nFinally, there are dark rain clouds coming. If it starts raining, everyone will have to rush to get the boxes inside, or maybe cover them with a tarp. I'm sure they'll be exhausted, but they'll probably order pizza and celebrate tonight.",
  },
  {
    id: "cel-cs4-03",
    task: "cs4",
    exam: "celpip",
    testNo: 3,
    title: "Night at the campsite",
    difficulty: "medium",
    topic: "Recreation",
    prompt:
      "Look at the picture. What do you think will most probably happen next? Describe your predictions as fully as you can.",
    scene: {
      backdrop: "campsite",
      caption: "A campsite at night: a man has fallen asleep beside the campfire with a hot dog still roasting, a raccoon is approaching an open food basket and an untied canoe is drifting near the lake shore.",
      elements: [
        { e: "🌙", x: 86, y: 8, size: 48 },
        { e: "🌲", x: 6, y: 28, size: 92 },
        { e: "🌲", x: 94, y: 32, size: 92 },
        { e: "⛺", x: 26, y: 52, size: 100 },
        { e: "🔥", x: 52, y: 72, size: 52 },
        { e: "🌭", x: 56, y: 64, size: 28, label: "hot dog roasting" },
        { e: "👨", x: 40, y: 70, size: 52 },
        { e: "💤", x: 43, y: 58, size: 28 },
        { e: "🧺", x: 74, y: 76, size: 44, label: "open food basket" },
        { e: "🦝", x: 84, y: 70, size: 48 },
        { e: "🔦", x: 60, y: 90, size: 30 },
        { e: "🛶", x: 12, y: 90, size: 58, label: "untied canoe" },
      ],
    },
    keyPoints: [
      "Predicts the hot dog burning and the man waking up",
      "Predicts the raccoon raiding the food basket",
      "Predicts the canoe drifting away and a problem the next morning",
      "Mentions safety (unattended fire) and gives reasons for each prediction",
    ],
    modelAnswer:
      "This picture shows a campsite late at night, and I think a few things are about to go wrong.\n\nFirst, the man has fallen asleep in his chair beside the campfire, and he's still holding a hot dog over the flames. I expect the hot dog will burn to a crisp, and the smell of smoke will probably wake him up.\n\nBut before he wakes up, the raccoon on the right will most likely climb into the food basket, which has been left wide open. By the time the man notices, the raccoon will have run off with the buns or the marshmallows.\n\nAlso, the canoe near the shore isn't tied up. If the wind picks up overnight, it could drift out onto the lake, and tomorrow morning he may have to swim out or ask another camper for help.\n\nHopefully, he'll remember to put out the fire properly before he goes to bed.",
  },

  // ================================================================ SPEAKING TASK 5: Comparing and Persuading (60 s)
  {
    id: "cel-cs5-01",
    task: "cs5",
    exam: "celpip",
    testNo: 1,
    title: "Choosing an apartment",
    difficulty: "medium",
    topic: "Housing",
    prompt:
      "Your family is moving and has narrowed the search down to two apartments. Choose the one you prefer. Your partner prefers the other apartment. Persuade your partner that your choice is better.",
    choices: [
      {
        title: "Downtown condo",
        details: [
          "Two bedrooms, 750 square feet",
          "$2,300 per month, heat included",
          "Five-minute walk to the subway and your workplace",
          "Gym and rooftop patio in the building",
        ],
      },
      {
        title: "Suburban townhouse",
        details: [
          "Three bedrooms and a small backyard, 1,200 square feet",
          "$2,150 per month, utilities extra",
          "45-minute bus ride downtown",
          "Next to an elementary school and a park",
        ],
      },
    ],
    keyPoints: [
      "States the preferred option and addresses the partner directly",
      "Compares the two options point by point using comparatives",
      "Acknowledges the partner's view and counters it",
      "Persuasive, respectful tone with a closing appeal",
    ],
    modelAnswer:
      "I know you really like the downtown condo, and I agree it's in a great location. But I honestly think the townhouse is the better choice for our family.\n\nFirst, think about space. The townhouse has three bedrooms and twelve hundred square feet, while the condo is only seven hundred and fifty. With two kids, we'd be tripping over each other in the condo. Plus, the townhouse has a backyard, so the kids can play outside safely.\n\nSecond, it's right next to an elementary school and a park. The kids could walk to school, and we wouldn't need to pay for a gym, because we could go running in the park.\n\nYes, the commute is longer, but I can read on the bus. And the rent is a hundred and fifty dollars cheaper. So, for more space, a yard and a great school, I really think the townhouse wins.",
  },
  {
    id: "cel-cs5-02",
    task: "cs5",
    exam: "celpip",
    testNo: 2,
    title: "Choosing a summer camp",
    difficulty: "hard",
    topic: "Family",
    prompt:
      "You and your brother are choosing a summer day camp for his ten-year-old daughter. Choose the camp you prefer. Your brother prefers the other camp. Persuade him that your choice is better.",
    choices: [
      {
        title: "Outdoor adventure camp",
        details: [
          "Canoeing, hiking and swimming at a provincial park",
          "$320 per week, lunch included",
          "Bus pickup from the community centre at 8:00 a.m.",
          "Groups of 12 children with 2 counsellors",
        ],
      },
      {
        title: "Science and coding camp",
        details: [
          "Robotics, coding games and science experiments",
          "$280 per week, bring your own lunch",
          "Held at a local university, 10 minutes from home",
          "Indoor, air-conditioned classrooms",
        ],
      },
    ],
    keyPoints: [
      "Chooses one camp and directly addresses the brother's likely reasons",
      "Compares cost, activities, convenience and benefits for the child",
      "Uses specific details from both options",
      "Ends with a confident, persuasive conclusion",
    ],
    modelAnswer:
      "I can see why you like the science and coding camp. It's close to home and a bit cheaper. But I really think the outdoor adventure camp would be better for Maya.\n\nFirst, she spends the whole school year inside a classroom, and most evenings on a tablet. Summer is the perfect time for her to get some fresh air and exercise. Canoeing and hiking at a provincial park would be an experience she can't get anywhere else.\n\nSecond, the price difference is smaller than it looks. The outdoor camp is forty dollars more, but lunch is included, so you won't have to pack a lunch every morning.\n\nAnd the groups are small, twelve kids with two counsellors, so she'll be well supervised and make close friends. She can always take a coding course in the fall. Trust me, she'll come home tired, happy and full of stories.",
  },
  {
    id: "cel-cs5-03",
    task: "cs5",
    exam: "celpip",
    testNo: 3,
    title: "Venue for a family reunion",
    difficulty: "medium",
    topic: "Family",
    prompt:
      "You and your cousin are organizing a family reunion for about 40 relatives this August. Choose the venue you prefer. Your cousin prefers the other venue. Persuade your cousin that your choice is better.",
    choices: [
      {
        title: "Lakeside picnic shelter",
        details: [
          "Covered shelter at a regional park, $150 for the day",
          "Beach, playground and walking trails nearby",
          "Bring your own food; barbecues provided",
          "Washrooms a short walk away",
        ],
      },
      {
        title: "Restaurant banquet room",
        details: [
          "Private room downtown, $45 per person for a buffet",
          "Air-conditioned, with a sound system",
          "Staff handle all food and cleanup",
          "Underground parking at $15 per car",
        ],
      },
    ],
    keyPoints: [
      "Clear choice and acknowledgement of the cousin's preference",
      "Cost comparison using numbers from the options",
      "Benefits for different ages (children, seniors)",
      "Counters the main disadvantage of the chosen option",
    ],
    modelAnswer:
      "I know you'd prefer the restaurant because nobody has to cook or clean up. But I really think the lakeside picnic shelter is a better fit for our family.\n\nLet's start with the cost. The shelter is only a hundred and fifty dollars for the whole day. The restaurant is forty-five dollars a person, so for forty people that's eighteen hundred dollars, plus parking. That's a huge difference.\n\nSecond, half our relatives are kids. In a restaurant, they'd be bored after an hour. At the lake, they can swim, use the playground and run around while the adults relax and catch up.\n\nAs for the food, we could make it a potluck and fire up the barbecues. Everyone loves Auntie Rosa's samosas anyway! And since the shelter is covered, we're fine even if it rains. I think a relaxed day outdoors is exactly what a reunion should be.",
  },

  // ================================================================ SPEAKING TASK 6: Dealing with a Difficult Situation (60 s)
  {
    id: "cel-cs6-01",
    task: "cs6",
    exam: "celpip",
    testNo: 1,
    title: "Extra shift or helping a friend move",
    difficulty: "hard",
    topic: "Work",
    prompt:
      "Weeks ago, you promised your close friend that you would help him move to a new apartment this Saturday. He has rented a truck and cannot change the date. Today, your manager asked you to work an extra shift on Saturday because two co-workers are sick, and the store will be very busy. Choose ONE of the following: talk to your manager and explain why you cannot work on Saturday, OR talk to your friend and explain why you cannot help him move.",
    choices: [
      {
        title: "Talk to your manager",
        details: [
          "Explain your earlier promise and why you cannot cancel",
          "Offer an alternative, such as working Sunday or extra hours next week",
        ],
      },
      {
        title: "Talk to your friend",
        details: [
          "Explain the situation at work",
          "Offer another way to help with the move",
        ],
      },
    ],
    keyPoints: [
      "Clearly addresses one person, as chosen",
      "Explains the conflict honestly and politely",
      "Shows understanding of the other person's position",
      "Offers a practical alternative or compromise",
      "Appropriate register (more formal for the manager, warmer for the friend)",
    ],
    modelAnswer:
      "Hi Karen, do you have a minute? It's about the extra shift on Saturday. First, I really understand the situation. With two people off sick, Saturday is going to be tough, and I'd like to help.\n\nThe problem is that I promised a close friend weeks ago that I'd help him move on Saturday. He's already rented a truck for the day, and I'm one of only two people helping, so if I cancel, he really won't be able to manage.\n\nBut I don't want to leave you short-staffed either. I could come in on Sunday and work a full shift, or I could stay late on Friday evening to restock the shelves and get things ready for the weekend. I could also call a couple of the part-timers to see if anyone is free.\n\nI hope that's okay. I'm sorry I can't do Saturday this time.",
  },
  {
    id: "cel-cs6-02",
    task: "cs6",
    exam: "celpip",
    testNo: 2,
    title: "A friend who has not repaid a loan",
    difficulty: "hard",
    topic: "Finance",
    prompt:
      "Three months ago, you lent your friend Mateo $500 to pay his rent. He promised to pay you back within a month, but he has not mentioned it since. You now need the money for a car repair. Mateo's sister, Lucia, is also a good friend of yours. Choose ONE of the following: talk to Mateo directly about the money, OR talk to Lucia and ask for her advice on how to approach her brother.",
    choices: [
      {
        title: "Talk to Mateo",
        details: [
          "Raise the loan politely without damaging the friendship",
          "Suggest a repayment plan",
        ],
      },
      {
        title: "Talk to Lucia",
        details: [
          "Explain the situation carefully",
          "Ask for advice without making Mateo look bad",
        ],
      },
    ],
    keyPoints: [
      "Raises an awkward topic tactfully",
      "Gives a clear reason for needing the money now",
      "Shows empathy and protects the friendship",
      "Proposes a concrete, realistic solution",
    ],
    modelAnswer:
      "Hey Mateo, thanks for meeting me. There's something a bit awkward I need to bring up, and I hope you won't take it the wrong way.\n\nYou remember the five hundred dollars I lent you for rent back in the summer? I was happy to help, and I know things have been tight for you. The thing is, my car broke down last week, and the repair is going to cost about eight hundred dollars. I really need that money back to get it fixed.\n\nI'm not asking for all of it at once if that's hard right now. Maybe you could pay me two hundred this month and the rest over the next two months? We could even set up automatic e-transfers so neither of us has to think about it.\n\nYou're one of my best friends, and I don't want money to come between us. Does that plan work for you?",
  },
  {
    id: "cel-cs6-03",
    task: "cs6",
    exam: "celpip",
    testNo: 3,
    title: "The late carpool partner",
    difficulty: "hard",
    topic: "Transportation",
    prompt:
      "You share a carpool to work with three co-workers. One of them, Devon, is late almost every morning, and last week the whole group was 20 minutes late for an important meeting. The others have asked you to deal with it. Choose ONE of the following: talk to Devon about his lateness, OR talk to your supervisor about changing everyone's start time.",
    choices: [
      {
        title: "Talk to Devon",
        details: [
          "Explain how the lateness affects the group",
          "Suggest a solution without embarrassing him",
        ],
      },
      {
        title: "Talk to your supervisor",
        details: [
          "Explain the carpool problem",
          "Request a later start time for the carpool members",
        ],
      },
    ],
    keyPoints: [
      "Addresses the chosen person with suitable tone",
      "Explains the impact with a specific example (the missed meeting)",
      "Avoids blame; invites the other person's perspective",
      "Proposes a fair, practical solution",
    ],
    modelAnswer:
      "Hi Devon, have you got a second before we head in? I wanted to talk to you privately about the carpool.\n\nI've noticed that mornings have been a bit of a rush lately, and we've been waiting for you most days. Last Tuesday, we were twenty minutes late for the budget meeting, and our manager wasn't too happy with any of us.\n\nI'm not trying to criticize you. I know you've got a lot going on, with your kids starting a new school. Is there something that would make the mornings easier for you? For example, we could pick you up last instead of first, so you'd have an extra fifteen minutes. Or, if a fixed pickup time doesn't work for you on some days, just text us by seven, and we'll go ahead without you.\n\nWe all really like carpooling with you, so let's find something that works for everyone.",
  },

  // ================================================================ SPEAKING TASK 7: Expressing Opinions (90 s)
  {
    id: "cel-cs7-01",
    task: "cs7",
    exam: "celpip",
    testNo: 1,
    title: "Car-free downtown weekends",
    difficulty: "medium",
    topic: "Transportation",
    prompt:
      "Some cities close their main downtown streets to cars on summer weekends so that people can walk, cycle and shop freely. Do you think your city should do this? Explain your reasons.",
    keyPoints: [
      "Gives a clear opinion at the start",
      "Develops two or three reasons (local business, safety, health, environment, community)",
      "Uses examples or personal experience",
      "Acknowledges the opposing view (drivers, deliveries, accessibility) and answers it",
      "Concludes by restating the opinion",
    ],
    modelAnswer:
      "In my opinion, closing the main downtown streets to cars on summer weekends is a great idea, and I think my city should definitely try it.\n\nMy first reason is that it would be good for local businesses. When people walk instead of drive, they slow down, look in shop windows and stop for coffee or ice cream. Restaurants could also put tables out on the street, which would make downtown feel lively and attract more visitors.\n\nSecondly, it would be safer and healthier. Families with young children could walk or cycle without worrying about traffic. Plus, there'd be less noise and air pollution, at least for two days a week.\n\nThirdly, it would bring the community together. Last summer I visited a city that did this, and there were street musicians, a farmers' market and kids drawing with chalk on the road. It felt like a festival.\n\nOf course, some people will say it's inconvenient for drivers, and that people with disabilities need to get downtown too. That's a fair point. However, the city could add free shuttle buses and keep some side streets open for accessible parking and deliveries.\n\nSo overall, I believe the benefits are far greater than the inconvenience.",
  },
  {
    id: "cel-cs7-02",
    task: "cs7",
    exam: "celpip",
    testNo: 2,
    title: "The four-day work week",
    difficulty: "hard",
    topic: "Work",
    prompt:
      "Some employers are allowing staff to work four ten-hour days instead of five eight-hour days. Do you think this is a good idea for most workplaces? Explain your reasons.",
    keyPoints: [
      "Takes a clear, possibly nuanced position",
      "Discusses benefits such as work-life balance, commuting and morale",
      "Discusses drawbacks such as fatigue, child care, customer service coverage",
      "Supports points with examples",
      "Coherent structure and a summarizing conclusion",
    ],
    modelAnswer:
      "Personally, I think a four-day work week is a good idea for many workplaces, although it may not work everywhere.\n\nThe biggest advantage is a better work-life balance. Having a three-day weekend gives people time to rest, see their families and take care of appointments that are hard to fit into a normal week. When employees are well rested, they're usually happier and more productive at work.\n\nAnother benefit is the commute. If you only travel to work four days a week, you save time, gas or transit fares, and there's less traffic on the roads. In a big city like Vancouver or Toronto, that could save someone several hours every week.\n\nOn the other hand, ten-hour days can be exhausting, especially in physical jobs like construction or nursing. And for parents, a longer workday can make it very difficult to pick children up from school or daycare.\n\nThat's why I think the best approach is flexibility. Office workers, for example, could choose either schedule, depending on what suits their lives. Businesses that serve customers could also rotate the day off, so they're still open five days a week.\n\nSo, overall, I support the idea, as long as employees have a choice.",
  },
  {
    id: "cel-cs7-03",
    task: "cs7",
    exam: "celpip",
    testNo: 3,
    title: "Required personal finance classes",
    difficulty: "medium",
    topic: "Education",
    prompt:
      "Some people believe that every high school student should be required to take a course on personal finance, such as budgeting, saving, credit cards and taxes. Do you agree or disagree? Explain your reasons.",
    keyPoints: [
      "States agreement or disagreement clearly",
      "Gives reasons such as avoiding debt, independence after graduation, equal opportunity",
      "Uses a personal or realistic example",
      "Responds to a possible counter-argument (crowded timetable, parents' role)",
      "Clear conclusion",
    ],
    modelAnswer:
      "I strongly agree that personal finance should be a required course in high school.\n\nFirst of all, young people face big financial decisions very soon after graduation. Within a year or two, many of them sign a lease, take out a student loan or get their first credit card. If they don't understand interest rates or how a credit score works, they can easily fall into debt that takes years to pay off.\n\nSecondly, not every family can teach these skills at home. Some parents are uncomfortable talking about money, and newcomers to Canada may not be familiar with things like RRSPs or filing taxes here. A required course would give every student the same basic knowledge, no matter what their background is.\n\nI can speak from experience. When I got my first job, I had no idea how to read my pay stub or why so much money was being deducted. I wish someone had explained it to me in school.\n\nSome people argue that the timetable is already too full. But I think learning to manage money is just as important as many other subjects, and the course could be just one semester.\n\nFor these reasons, I believe a personal finance course should be mandatory for all students.",
  },

  // ================================================================ SPEAKING TASK 8: Describing an Unusual Situation (60 s)
  {
    id: "cel-cs8-01",
    task: "cs8",
    exam: "celpip",
    testNo: 1,
    title: "Fan hat at a garage sale",
    difficulty: "hard",
    topic: "Shopping",
    prompt:
      "You are at a neighbour's garage sale and you see this unusual item. Your friend, who is planning to spend the summer working outdoors, asked you to look for useful things. Call your friend and describe the item. Explain what it looks like and say whether you think your friend should buy it. Your friend cannot see the picture.",
    scene: {
      backdrop: "backyard",
      caption: "A garage sale table with an unusual baseball cap that has an umbrella on top, a small battery-powered fan on the side, a cup holder and a $5 price tag.",
      elements: [
        { e: "☂️", x: 50, y: 24, size: 120, label: "umbrella on top" },
        { e: "🧢", x: 50, y: 52, size: 120 },
        { e: "🌀", x: 34, y: 56, size: 36, label: "small fan" },
        { e: "🥤", x: 67, y: 58, size: 34, label: "cup holder" },
        { e: "🔋", x: 50, y: 70, size: 28, label: "battery pack" },
        { e: "🏷️", x: 80, y: 82, size: 40, label: "$5" },
        { e: "📦", x: 14, y: 86, size: 50 },
        { e: "🧸", x: 8, y: 74, size: 40 },
        { e: "🪑", x: 90, y: 60, size: 52 },
      ],
    },
    keyPoints: [
      "Describes the overall object first, then parts: shape, colour, size, position",
      "Explains what each part is for",
      "Uses precise spatial and descriptive vocabulary since the listener cannot see",
      "Gives a recommendation with reasons (price, usefulness, drawbacks)",
    ],
    modelAnswer:
      "Hey, it's me. I'm at a garage sale on Maple Street, and I've found the strangest thing for your summer job.\n\nIt's basically a baseball cap, but attached to the top there's a small umbrella, about the size of a big dinner plate. So it would keep the sun off your face, your neck and even your shoulders.\n\nOn the left side of the cap, there's a little battery-powered fan pointing toward your face. And on the right side, there's a ring that holds a drink, like a cup holder, so you could have a cold drink right beside you. The battery pack clips onto the back.\n\nIt looks a bit silly, I have to admit. But the price tag says five dollars, and you'll be outside all day in the heat. I think you should get it. If it's windy, though, it might not stay on. What do you think?",
  },
  {
    id: "cel-cs8-02",
    task: "cs8",
    exam: "celpip",
    testNo: 2,
    title: "A bike with a dog sidecar",
    difficulty: "easy",
    topic: "Shopping",
    prompt:
      "You are walking past a bicycle shop and see this unusual item in the window. Your friend loves cycling and has a small dog. Call your friend and describe the item so that your friend can decide whether to come and see it. Your friend cannot see the picture.",
    scene: {
      backdrop: "street",
      caption: "A bicycle in a shop window with a basket sidecar attached on the right, a small dog wearing goggles sitting in it, a mini umbrella over the sidecar, a bell and a tall safety flag.",
      elements: [
        { e: "🚲", x: 42, y: 58, size: 130 },
        { e: "🔔", x: 32, y: 42, size: 26, label: "bell" },
        { e: "🧺", x: 72, y: 66, size: 72, label: "sidecar basket" },
        { e: "🐕", x: 72, y: 54, size: 48 },
        { e: "🥽", x: 73, y: 48, size: 24, label: "dog goggles" },
        { e: "☂️", x: 72, y: 32, size: 46, label: "small umbrella" },
        { e: "🚩", x: 88, y: 30, size: 44, label: "safety flag" },
        { e: "🏷️", x: 16, y: 84, size: 40, label: "$450" },
      ],
    },
    keyPoints: [
      "Opens by explaining where you are and what you have found",
      "Describes the bike and the sidecar in a logical order",
      "Points out unusual features (goggles, umbrella, flag)",
      "Gives the price and an opinion on whether it suits the friend",
    ],
    modelAnswer:
      "Hi Sam! You won't believe what I'm looking at. I'm outside the bike shop on Queen Street, and there's a bicycle in the window with a sidecar for a dog.\n\nThe bike itself looks like a normal red city bike with a bell on the handlebars. But attached to the right side, there's a big round wicker basket on its own little wheel. It's just the right size for a small dog like Biscuit.\n\nThe funniest part is that the display dog is wearing tiny goggles, and there's a little umbrella fixed above the basket to keep the sun or rain off. There's also a tall orange flag on a pole so cars can see you.\n\nThe tag says four hundred and fifty dollars, which isn't cheap. But you're always saying you wish you could take Biscuit on rides. Want to come and check it out after work?",
  },
  {
    id: "cel-cs8-03",
    task: "cs8",
    exam: "celpip",
    testNo: 3,
    title: "The backpack that becomes a chair",
    difficulty: "hard",
    topic: "Shopping",
    prompt:
      "You are shopping for a birthday gift for your brother, who is going to spend the summer working at a remote tree-planting camp in northern British Columbia. You see this unusual item in an outdoor store. Call your sister, who is sharing the cost of the gift, and describe the item. Explain why you think it would or would not be a good gift. Your sister cannot see the picture.",
    scene: {
      backdrop: "store",
      caption: "A large hiking backpack on display in an outdoor store, with a solar panel on top, a built-in light, a phone-charging port, a water bottle pocket and a fold-out seat underneath; the price tag reads $149.",
      elements: [
        { e: "🔆", x: 50, y: 14, size: 44, label: "solar panel" },
        { e: "🎒", x: 50, y: 44, size: 140 },
        { e: "💡", x: 33, y: 34, size: 32, label: "built-in light" },
        { e: "💧", x: 68, y: 32, size: 30, label: "water bottle pocket" },
        { e: "🔌", x: 68, y: 52, size: 30, label: "charging port" },
        { e: "📱", x: 80, y: 54, size: 30 },
        { e: "🪑", x: 50, y: 80, size: 64, label: "fold-out seat" },
        { e: "🏷️", x: 84, y: 84, size: 40, label: "$149" },
      ],
    },
    keyPoints: [
      "Describes the whole item, then each feature in a clear order (top to bottom)",
      "Explains the function of each feature",
      "Connects features to the brother's specific situation (remote camp, long days outdoors)",
      "Gives a reasoned recommendation, including any concerns such as weight or price",
    ],
    modelAnswer:
      "Hi Meena, it's me. I'm at the outdoor store, and I think I've found the perfect gift for Ravi.\n\nIt's a large dark-green hiking backpack, but it has some really unusual features. On the very top, there's a thin solar panel that charges a battery inside. On the right side, there's a charging port, so he could charge his phone even at that remote camp with no electricity.\n\nAlso, there's a small built-in light on the left shoulder strap, and a mesh pocket for a water bottle on the other side.\n\nBut the best part is at the bottom. It has a fold-out seat with metal legs, so the backpack turns into a little chair. After planting trees all day, he could sit down anywhere.\n\nIt costs a hundred and forty-nine dollars, so about seventy-five each. It might be a bit heavy, but I really think he'd use it every day. What do you say?",
  },
];
