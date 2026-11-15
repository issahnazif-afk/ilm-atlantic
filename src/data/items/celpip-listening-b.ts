import type { Item, Speaker } from '../types';

// Original CELPIP-General listening practice sets for Ilm Atlantic: practice tests 3 and 4.
// Each test = Parts 1-6 (8 + 5 + 6 + 5 + 8 + 6 = 38 questions).
// All dialogue is written for browser text-to-speech: no stage directions or speaker labels in `text`.

// ---------- Test 3 voices ----------
const priya: Speaker = { name: "Priya", gender: "female", accent: "en-IN" };
const gord: Speaker = { name: "Gord", gender: "male", accent: "en-CA" };
const megan: Speaker = { name: "Megan", gender: "female", accent: "en-CA" };
const tomas: Speaker = { name: "Tomas", gender: "male", accent: "en-US" };
const ahmed: Speaker = { name: "Ahmed", gender: "male", accent: "en-GB" };
const laura: Speaker = { name: "Laura", gender: "female", accent: "en-CA" };
const anchor3: Speaker = { name: "News Anchor", gender: "male", accent: "en-CA" };
const denise: Speaker = { name: "Denise", gender: "female", accent: "en-CA" };
const raj: Speaker = { name: "Raj", gender: "male", accent: "en-IN" };
const callum: Speaker = { name: "Callum", gender: "male", accent: "en-GB" };
const reporter3: Speaker = { name: "Reporter", gender: "female", accent: "en-GB" };

// ---------- Test 4 voices ----------
const sandra: Speaker = { name: "Sandra", gender: "female", accent: "en-AU" };
const marcus: Speaker = { name: "Marcus", gender: "male", accent: "en-CA" };
const jasmine: Speaker = { name: "Jasmine", gender: "female", accent: "en-CA" };
const kevin: Speaker = { name: "Kevin", gender: "male", accent: "en-AU" };
const leila: Speaker = { name: "Leila", gender: "female", accent: "en-US" };
const darren: Speaker = { name: "Darren", gender: "male", accent: "en-CA" };
const anchor4: Speaker = { name: "News Anchor", gender: "female", accent: "en-CA" };
const michelle: Speaker = { name: "Michelle", gender: "female", accent: "en-CA" };
const arjun: Speaker = { name: "Arjun", gender: "male", accent: "en-IN" };
const bridget: Speaker = { name: "Bridget", gender: "female", accent: "en-AU" };
const host4: Speaker = { name: "Radio Host", gender: "male", accent: "en-US" };

export const celpipListeningB: Item[] = [
  // =====================================================================
  // PRACTICE TEST 3
  // =====================================================================

  // ---------------------------------------------------------------- Part 1
  {
    id: "cel-cl1-03",
    task: "cl1",
    exam: "celpip",
    testNo: 3,
    title: "No heat in January",
    difficulty: "medium",
    topic: "Housing",
    context: "A tenant phones her property manager about a problem in her apartment.",
    audio: [
      [
        { speaker: gord, text: "Lakeview Property Management, this is Gord speaking." },
        { speaker: priya, text: "Hi Gord, it's Priya Sharma in unit 304 at the Birchwood building. I'm sorry to call so early, but the heat in my apartment stopped working sometime overnight. When I woke up, the thermostat said fourteen degrees, and it's minus twenty-five outside." },
        { speaker: gord, text: "Oh no, that's not good. Is it just your unit, or have you heard from any of your neighbours?" },
        { speaker: priya, text: "I knocked on 302 on my way down to get the paper, and they said their place is fine. The radiators in my bedroom and living room are completely cold, though. I tried turning the thermostat up and down, and I even changed the batteries, but nothing happened." },
        { speaker: gord, text: "Okay. So it sounds like it's something specific to your unit, rather than the boiler for the whole building." },
      ],
      [
        { speaker: gord, text: "Here's the thing. Our regular heating contractor is booked solid this morning because of the cold snap. The earliest they can get to you is tomorrow, between eight and noon. I know that's not ideal." },
        { speaker: priya, text: "Tomorrow? I'm not sure I can sleep in here tonight. I have a ten-month-old baby, and it's only going to get colder." },
        { speaker: gord, text: "Understood. I can offer you two things. First, I can drop off two electric space heaters within the hour. They'll keep a couple of rooms comfortable. Or, if you'd rather, the company keeps a furnished guest suite on the ground floor for situations like this. It's small, but the heat works, and you're welcome to stay there tonight at no charge." },
        { speaker: priya, text: "The guest suite sounds better, honestly. I'd worry about leaving space heaters on all night with the baby crawling around." },
        { speaker: gord, text: "That makes sense. I'll bring the key up to you myself." },
      ],
      [
        { speaker: priya, text: "One more thing. Will someone need to get into my unit tomorrow if I'm downstairs?" },
        { speaker: gord, text: "Yes, the technician will need to get at the radiators and the valve in your hall closet. If you'd like to be there, just let me know. Otherwise, I can let them in and stay with them the whole time." },
        { speaker: priya, text: "I'd like to be there, actually. I want to ask them whether the radiator in the bedroom is the problem, because it's been making a clicking noise for a few weeks now." },
        { speaker: gord, text: "Good to know. I'll put that in the work order. And for what it's worth, since you've been without heat, we'll take a day off this month's rent. You'll see it as a credit on your February statement." },
        { speaker: priya, text: "That's really kind of you. Thanks, Gord." },
      ],
    ],
    questions: [
      {
        section: 0,
        prompt: "Why is Priya calling Gord?",
        options: ["Her neighbour's apartment is too cold.", "The heating in her unit has stopped working.", "Her thermostat needs new batteries.", "The building's boiler has broken down."],
        answer: 1,
        explanation: "Priya says the heat in her apartment stopped working overnight. The boiler option is tempting, but her neighbours' unit is fine, which suggests the building system is working.",
      },
      {
        section: 0,
        prompt: "What has Priya already tried?",
        options: ["Turning off the radiators", "Calling a heating technician", "Changing the thermostat batteries", "Staying with the neighbours in 302"],
        answer: 2,
        explanation: "She says she changed the batteries and adjusted the thermostat. She only knocked on 302 to ask about their heat; she did not stay there.",
      },
      {
        section: 0,
        prompt: "What does Gord conclude from Priya's information?",
        options: ["The problem probably affects only Priya's unit.", "The whole building needs a new boiler.", "Priya set the thermostat incorrectly.", "The neighbours caused the problem."],
        answer: 0,
        explanation: "Because unit 302 is warm, Gord says the problem seems specific to her unit rather than the boiler. Nothing suggests Priya made a mistake with the thermostat.",
      },
      {
        section: 1,
        prompt: "Why can't the heating contractor come today?",
        options: ["The technician is sick.", "The building is too cold to work in.", "The contractor is very busy because of the cold weather.", "Gord forgot to book the appointment."],
        answer: 2,
        explanation: "Gord says the contractor is booked solid because of the cold snap. The cold is the reason they are busy, not a reason the building cannot be worked in.",
      },
      {
        section: 1,
        prompt: "Why does Priya choose the guest suite?",
        options: ["It is larger than her apartment.", "The heaters would raise her electricity bill.", "Gord says it is the better option.", "She is worried about her baby's safety near the heaters."],
        answer: 3,
        explanation: "She says she would worry about space heaters running all night with her baby crawling around. Gord only agrees after she decides, and he says the suite is small.",
      },
      {
        section: 1,
        prompt: "What will Gord do next?",
        options: ["Take the guest suite key to Priya himself", "Call another heating contractor", "Bring space heaters to unit 304", "Check on the neighbours in 302"],
        answer: 0,
        explanation: "Gord ends by saying he will bring the key up himself. The space heaters were offered, but Priya turned them down.",
      },
      {
        section: 2,
        prompt: "Why does Priya want to be in her unit during the repair?",
        options: ["She does not want to give Gord her key.", "She wants to ask about a noise from one radiator.", "She has to pay the technician directly.", "She wants to learn how to fix the heating herself."],
        answer: 1,
        explanation: "She wants to ask whether the clicking bedroom radiator is the cause. Gord offers to let the technician in himself, so trust or keys are not the issue.",
      },
      {
        section: 2,
        prompt: "How will Priya be compensated for the problem?",
        options: ["The contractor will send her a cheque.", "She will not pay any rent in February.", "A one-day rent credit will appear on her February statement.", "She can use the guest suite free once a month."],
        answer: 2,
        explanation: "Gord takes a day off this month's rent, shown as a credit on the February statement. The tempting option misreads this as a whole month of free rent.",
      },
    ],
  },

  // ---------------------------------------------------------------- Part 2
  {
    id: "cel-cl2-03",
    task: "cl2",
    exam: "celpip",
    testNo: 3,
    title: "A farewell potluck",
    difficulty: "easy",
    topic: "Community",
    context: "Two neighbours talk about a potluck dinner for another neighbour who is moving away.",
    audio: [
      [
        { speaker: megan, text: "Tomas, have you got a minute? I want to sort out the potluck for Mrs. Dubois before she moves to Kelowna." },
        { speaker: tomas, text: "Sure. Are we still doing it on Saturday the twelfth?" },
        { speaker: megan, text: "That was the plan, but the community room in our building is booked that day for a yoga class. The superintendent said it's free on Sunday the thirteenth, from four until nine. Does that work for you?" },
        { speaker: tomas, text: "Sunday's actually better for me. I work until three on Saturdays anyway. How many people are coming?" },
        { speaker: megan, text: "I've heard back from fourteen neighbours so far, and a few more might show up. I was thinking we'd ask everyone to bring a dish, and the two of us will cover the drinks, the plates and a card." },
        { speaker: tomas, text: "Sounds good. I can pick up the card and get people to sign it in the lobby this week. What should I bring for food?" },
        { speaker: megan, text: "Well, Mrs. Dubois is always going on about your butter tarts. Would you mind making a batch?" },
        { speaker: tomas, text: "Ha, I suppose I could. Although the last time I made them, half of them stuck to the pan. I'll use paper liners this time." },
        { speaker: megan, text: "Perfect. Oh, and one more thing. Let's not tell her it's a farewell party. Her daughter is going to bring her down and say it's just a building meeting." },
        { speaker: tomas, text: "A surprise? She'll love that. Just make sure nobody mentions it in the elevator. You know how people talk in this building." },
        { speaker: megan, text: "Good point. I'll put a note about it on the invitations." },
      ],
    ],
    questions: [
      {
        prompt: "Why was the date of the potluck changed?",
        options: ["Mrs. Dubois is busy on Saturday.", "The community room is booked on Saturday.", "Tomas has to work all day Saturday.", "The superintendent is away that weekend."],
        answer: 1,
        explanation: "Megan says the room is booked for a yoga class on Saturday. Tomas works on Saturdays, but only until three, and that is not why the date moved.",
      },
      {
        prompt: "What will Tomas do this week?",
        options: ["Book the community room", "Buy the plates and drinks", "Collect signatures on a card", "Phone the neighbours"],
        answer: 2,
        explanation: "He offers to buy the card and have people sign it in the lobby. The two of them will share the drinks and plates, but he does not say he will buy them this week.",
      },
      {
        prompt: "What does Tomas say about his butter tarts?",
        options: ["Some stuck to the pan the last time he made them.", "He has never baked them before.", "Mrs. Dubois does not like them.", "He will buy them from a bakery."],
        answer: 0,
        explanation: "He says half of them stuck to the pan last time, so he will use liners. Megan says Mrs. Dubois always praises them, so she clearly likes them.",
      },
      {
        prompt: "How will Mrs. Dubois be brought to the party?",
        options: ["Megan will invite her to a yoga class.", "Tomas will ask her to sign a card.", "The superintendent will phone her.", "Her daughter will tell her it is a building meeting."],
        answer: 3,
        explanation: "Megan explains that the daughter will bring her down saying it is a building meeting. The yoga class is the event that caused the date change.",
      },
      {
        prompt: "What is Tomas worried about?",
        options: ["Too few people will come.", "Neighbours might give away the surprise.", "There will not be enough food.", "The room will be too small."],
        answer: 1,
        explanation: "He warns that people talk in the elevator, meaning someone could spoil the surprise. Megan already has fourteen replies, so attendance is not his concern.",
      },
    ],
  },

  // ---------------------------------------------------------------- Part 3
  {
    id: "cel-cl3-03",
    task: "cl3",
    exam: "celpip",
    testNo: 3,
    title: "Library services for newcomers",
    difficulty: "medium",
    topic: "Newcomers",
    context: "A man who recently moved to the city phones the public library.",
    audio: [
      [
        { speaker: laura, text: "Good afternoon, Riverside Public Library, Laura speaking. How can I help?" },
        { speaker: ahmed, text: "Hi there. I've just moved to the city with my family, and a friend told me the library has programs for newcomers. I was hoping you could tell me a bit about them." },
        { speaker: laura, text: "Absolutely, and welcome! The first thing you'll want is a library card. It's free for anyone who lives in the city. You just need one piece of photo ID and something with your current address on it, like a lease or a utility bill. If you've only just moved and don't have a bill yet, a letter from your landlord is fine." },
        { speaker: ahmed, text: "That's good to know, because we haven't had our first hydro bill yet, and the lease is still with the landlord. What about my kids? They're seven and eleven." },
        { speaker: laura, text: "Children under fourteen can have their own cards, but a parent has to sign for them in person. And we stopped charging late fines on children's books two years ago, so you won't need to worry about that." },
        { speaker: ahmed, text: "Great. My wife is keen to practise her English. Is there anything for that?" },
        { speaker: laura, text: "Yes, we run conversation circles twice a week, Tuesday evenings at seven and Thursday mornings at ten. They're drop-in, so there's no need to register, and they're led by trained volunteers. The Thursday group tends to be smaller, so people often find it easier to speak up there." },
        { speaker: ahmed, text: "She'd probably like that one, then. She's a bit shy at first. And is there any help with job searching? I'm an accountant, but I'm told my credentials need to be assessed here." },
        { speaker: laura, text: "We have a settlement worker from a local agency who's at our branch every Wednesday afternoon. She can explain how credential recognition works and help with your resume. You do need to book that one, though, because the slots fill up quickly. I can put your name down now if you like." },
        { speaker: ahmed, text: "Yes, please. That would be wonderful." },
      ],
    ],
    questions: [
      {
        prompt: "What is the main purpose of Ahmed's call?",
        options: ["To renew his library card", "To find out about services for newcomers", "To register his children for school", "To offer to volunteer at the library"],
        answer: 1,
        explanation: "He says a friend told him about programs for newcomers and he wants to learn about them. Volunteers are mentioned only as the people who lead the circles.",
      },
      {
        prompt: "What will Ahmed most likely use to prove his address?",
        options: ["A hydro bill", "His passport", "His children's report cards", "A letter from his landlord"],
        answer: 3,
        explanation: "He has no hydro bill yet and does not have the lease, so the landlord's letter is the option left. The hydro bill is tempting, but it has not arrived.",
      },
      {
        prompt: "What does Laura say about children's library cards?",
        options: ["Children can get one without a parent.", "Only children over fourteen can have one.", "Late fines are not charged on children's books.", "They cost a small yearly fee."],
        answer: 2,
        explanation: "Laura says the library stopped charging late fines on children's books. A parent must sign in person, so children cannot get a card alone.",
      },
      {
        prompt: "Why does Ahmed think his wife would prefer the Thursday group?",
        options: ["It has fewer people, so speaking may be easier.", "It meets in the evening after work.", "It requires registration in advance.", "It is taught by professional teachers."],
        answer: 0,
        explanation: "Laura says the Thursday group is smaller, and Ahmed adds that his wife is shy. The evening session is the Tuesday one, not Thursday.",
      },
      {
        prompt: "What is true about the settlement worker?",
        options: ["She is at the library every day.", "She works for the library.", "Appointments with her must be booked.", "She only helps with English."],
        answer: 2,
        explanation: "Laura says Ahmed needs to book because slots fill quickly. The worker is from a local agency, not the library, and comes only on Wednesday afternoons.",
      },
      {
        prompt: "How would you describe Laura's attitude toward Ahmed?",
        options: ["Impatient", "Welcoming and helpful", "Unsure of the answers", "Formal and distant"],
        answer: 1,
        explanation: "She welcomes him, answers every question in detail and offers to book his appointment. She never hesitates, so she is not unsure.",
      },
    ],
  },

  // ---------------------------------------------------------------- Part 4
  {
    id: "cel-cl4-03",
    task: "cl4",
    exam: "celpip",
    testNo: 3,
    title: "Harbour Street Bridge closure",
    difficulty: "easy",
    topic: "Transportation",
    context: "You will hear a local news report.",
    audio: [
      [
        { speaker: anchor3, text: "Drivers and transit riders in the east end will need to plan ahead starting Monday, when the Harbour Street Bridge closes for six weeks of repairs. City engineers say the work is needed after an inspection last spring found cracks in several of the bridge's steel supports. The bridge is not considered dangerous at the moment, but officials say waiting another year would make the repairs far more expensive. During the closure, traffic will be detoured along Mill Road, which is expected to add about ten minutes to a typical rush-hour trip. To ease congestion, the city is adding a temporary bus route, the 47 Express, which will run every twelve minutes between the east-end park-and-ride lot and downtown. Rides on the new route will be free for the first two weeks. Cyclists and pedestrians will still be able to cross the bridge on a narrow lane on the north side, except on the two weekends when crews are paving. Those dates will be posted on the city's website. Not everyone is happy with the timing. Business owners on Harbour Street say the closure comes right in the middle of their busy summer season. The owner of one cafe told reporters she expects to lose about a third of her customers. A city spokesperson responded that summer is the only time of year when the concrete can be poured properly, and that the city will put up signs reminding residents that shops on the street remain open. The bridge is scheduled to reopen before the Labour Day long weekend." },
      ],
    ],
    questions: [
      {
        prompt: "Why is the bridge being repaired now?",
        options: ["It was damaged in a recent accident.", "Waiting would make the repairs cost more.", "It is about to collapse.", "Traffic on it has doubled."],
        answer: 1,
        explanation: "Officials say waiting another year would make the repairs far more expensive. The report says the bridge is not considered dangerous, so collapse is not the reason.",
      },
      {
        prompt: "What is being offered to transit riders?",
        options: ["A new bus route that is free at first", "Cheaper parking downtown", "A ferry across the harbour", "Longer hours on existing routes"],
        answer: 0,
        explanation: "The 47 Express is a new temporary route, free for the first two weeks. The park-and-ride lot is mentioned, but no parking discount is.",
      },
      {
        prompt: "When will pedestrians be unable to cross the bridge?",
        options: ["During weekday rush hours", "For the full six weeks", "On the two weekends when paving takes place", "Every night"],
        answer: 2,
        explanation: "The walking and cycling lane stays open except on the two paving weekends. The six-week closure applies to cars.",
      },
      {
        prompt: "How do business owners on Harbour Street feel about the closure?",
        options: ["Grateful for the extra traffic on Mill Road", "Pleased with the city's new signs", "Indifferent to when it happens", "Worried that they will lose customers"],
        answer: 3,
        explanation: "One cafe owner expects to lose a third of her customers during the busy season. The signs are the city's response, not something owners are said to welcome.",
      },
      {
        prompt: "According to the city, why must the work be done in summer?",
        options: ["Fewer people use the bridge then.", "Students are on holiday.", "Concrete can only be poured properly at that time of year.", "More construction crews are available."],
        answer: 2,
        explanation: "The spokesperson says summer is the only time the concrete can be poured properly. The report suggests the bridge is actually busier in summer, not quieter.",
      },
    ],
  },

  // ---------------------------------------------------------------- Part 5
  {
    id: "cel-cl5-03",
    task: "cl5",
    exam: "celpip",
    testNo: 3,
    title: "Spending the garden grant",
    difficulty: "hard",
    topic: "Community",
    context: "Three members of a community garden committee discuss how to spend a new grant.",
    audio: [
      [
        { speaker: denise, text: "Okay, so the good news is that the city approved our grant. We've got four thousand dollars, and it has to be spent by the end of March. I'd like us to agree on priorities today." },
        { speaker: raj, text: "Well, for me the obvious one is the water. Half the plots are still watered by people hauling cans from the tap beside the shed. Our older members really struggle with that, and a couple of them told me they might give up their plots." },
        { speaker: callum, text: "I don't disagree, but have you priced out an irrigation system? The quote I got last year was close to three thousand dollars, and that was before installation. It would eat up nearly the whole grant." },
        { speaker: raj, text: "It doesn't have to be a full system. A few extra taps along the main path would make a huge difference, and that's much cheaper." },
        { speaker: denise, text: "That's a fair compromise. Callum, what was your priority?" },
        { speaker: callum, text: "Raised beds. We have twelve people on the waiting list, and three of them use wheelchairs. Right now there's nowhere for them to garden. Four accessible raised beds would be maybe twelve hundred dollars in lumber and soil." },
        { speaker: denise, text: "I like that, especially since our application talked about accessibility. The city will expect to see something along those lines in our final report." },
        { speaker: raj, text: "Agreed. I'd just want to make sure we don't build them in the corner by the back fence. That's in shade most of the day." },
        { speaker: callum, text: "Point taken. We could put them near the entrance, which would make them easier to reach, too." },
        { speaker: denise, text: "So we're looking at extra taps and the raised beds. That still leaves some money. I was going to suggest a tool library, a shed of shared tools so people don't have to bring their own." },
        { speaker: raj, text: "Honestly, we already have a shed full of tools that nobody puts back. I'd rather spend the rest on something educational, like a composting workshop." },
        { speaker: callum, text: "Or we could hold some back. Something always breaks in the spring." },
        { speaker: denise, text: "Let's not decide that today. I'll get quotes on the taps. Callum, could you sketch out the raised beds?" },
        { speaker: callum, text: "Sure, I'll have something ready by the next meeting." },
      ],
    ],
    questions: [
      {
        prompt: "By when must the grant money be spent?",
        options: ["The end of the growing season", "The end of March", "The next committee meeting", "The end of the year"],
        answer: 1,
        explanation: "Denise says it must be spent by the end of March. The next meeting is only when Callum will bring his sketch.",
      },
      {
        prompt: "Why does Raj want to improve the water supply?",
        options: ["Older members find carrying water difficult.", "The tap beside the shed is broken.", "The city requires it.", "Water bills are too high."],
        answer: 0,
        explanation: "He says older members struggle to haul watering cans and may give up their plots. The tap still works; the problem is the distance.",
      },
      {
        prompt: "What is Callum's concern about an irrigation system?",
        options: ["It would be hard to install in winter.", "It would use up most of the grant.", "Members would not use it.", "It needs a city permit."],
        answer: 1,
        explanation: "His quote was close to three thousand dollars before installation, nearly the whole grant. He never mentions permits or the season.",
      },
      {
        prompt: "How does Raj respond to Callum's concern?",
        options: ["He drops the idea of improving the water.", "He offers to pay for the installation.", "He asks Callum for a new quote.", "He suggests a cheaper partial solution."],
        answer: 3,
        explanation: "Raj proposes a few extra taps instead of a full system. Denise, not Raj, later offers to get quotes.",
      },
      {
        prompt: "Why does Denise especially like the raised beds idea?",
        options: ["It is the cheapest option.", "Callum will build the beds himself.", "It matches what the group promised in its grant application.", "The waiting list keeps growing."],
        answer: 2,
        explanation: "She notes the application mentioned accessibility and the city will expect it in the report. Callum agrees to sketch the beds, not to build them alone.",
      },
      {
        prompt: "What can be inferred about the corner by the back fence?",
        options: ["It is where the shed stands.", "It would be a poor place for growing vegetables.", "It is close to the entrance.", "It is used for composting."],
        answer: 1,
        explanation: "Raj says it is in shade most of the day, implying plants would not grow well there. The entrance is the alternative location Callum suggests.",
      },
      {
        prompt: "What is Raj's opinion of the tool library?",
        options: ["It would be very popular.", "It should be placed near the entrance.", "It is not needed, since shared tools already go unreturned.", "It would cost more than the taps."],
        answer: 2,
        explanation: "He says there is already a shed of tools nobody puts back, so he would rather fund a workshop. He makes no comparison of costs.",
      },
      {
        prompt: "What has the group decided by the end of the discussion?",
        options: ["To vote on the tool library next time", "That Denise will get quotes and Callum will design the beds", "That Raj will organize a composting workshop", "To return any unused money to the city"],
        answer: 1,
        explanation: "Denise assigns the tap quotes to herself and the bed sketch to Callum. The composting workshop is only Raj's suggestion; the remaining money is left undecided.",
      },
    ],
  },

  // ---------------------------------------------------------------- Part 6
  {
    id: "cel-cl6-03",
    task: "cl6",
    exam: "celpip",
    testNo: 3,
    title: "The leaf blower debate",
    difficulty: "medium",
    topic: "Environment",
    context: "You will hear a report about a proposed town bylaw.",
    audio: [
      [
        { speaker: reporter3, text: "Few sounds signal autumn in the suburbs quite like the roar of a gas-powered leaf blower. But in the town of Westbrook, that sound may soon disappear. Town council is considering a bylaw that would ban gas leaf blowers starting in 2028, and the proposal has divided residents. Supporters say the issue is about more than noise. The resident who started the petition, a nurse who works night shifts, says she is woken up almost every afternoon in October by blowers on her street. Others point to air quality. Small two-stroke engines burn fuel inefficiently, and supporters argue that running one for an hour can produce more pollution than a long drive in a car. Electric blowers, they say, have improved to the point where they can do the job for most homeowners. Landscaping companies see it differently. The owner of a local lawn care business says battery-powered equipment works fine on a small lawn, but his crews look after large properties all day. He estimates he would need three batteries for every machine, and recharging them between jobs isn't practical. He warns that customers would end up paying more for fall clean-ups. He says he isn't against change, but he wants a longer phase-in and some financial help for small businesses. A third group would like a compromise. Some councillors have suggested limiting the hours when gas blowers can be used, for example banning them before nine in the morning and on Sundays, rather than banning them outright. Critics of that idea say time limits are difficult to enforce, since bylaw officers can't be everywhere at once. Council has asked staff to look at what other municipalities have done and report back in the new year. In the meantime, the town is offering a fifty-dollar rebate to residents who trade in a gas blower for an electric one. Whatever council decides, one thing seems certain: this debate will be loud." },
      ],
    ],
    questions: [
      {
        prompt: "What is the main purpose of the report?",
        options: ["To advertise electric leaf blowers", "To present different views on a proposed ban", "To announce that a ban has been approved", "To explain how to clean up leaves"],
        answer: 1,
        explanation: "The reporter sets out the views of supporters, landscapers and those wanting a compromise. Council has not approved anything yet; staff will report back.",
      },
      {
        prompt: "Why does the nurse support the ban?",
        options: ["She has a breathing condition.", "She already owns an electric blower.", "She runs a landscaping company.", "The noise wakes her when she sleeps during the day."],
        answer: 3,
        explanation: "She works nights and is woken in the afternoon by blowers. Air quality is raised by other supporters, not by her.",
      },
      {
        prompt: "What does the landscaping company owner want?",
        options: ["An immediate ban", "No change at all", "More time and financial help to switch", "Free electric blowers for homeowners"],
        answer: 2,
        explanation: "He asks for a longer phase-in and help for small businesses. He says he is not against change, so 'no change at all' is wrong.",
      },
      {
        prompt: "What is the main criticism of limiting the hours of use?",
        options: ["It would be hard to enforce.", "It is unfair to homeowners.", "It would cost the town too much.", "It would not reduce pollution."],
        answer: 0,
        explanation: "Critics say bylaw officers cannot be everywhere, so time limits are hard to enforce. Pollution is not the objection mentioned.",
      },
      {
        prompt: "What is the town doing while council waits for the staff report?",
        options: ["Fining landscaping companies", "Offering a rebate to people who switch to electric", "Banning blowers on Sundays", "Hiring more bylaw officers"],
        answer: 1,
        explanation: "The town offers a fifty-dollar rebate for trading in a gas blower. The Sunday ban is only a suggestion from some councillors.",
      },
      {
        prompt: "What does the reporter suggest with the final comment?",
        options: ["Council will reject the ban.", "Electric blowers are also noisy.", "The disagreement will not be settled quietly.", "Residents have lost interest in the issue."],
        answer: 2,
        explanation: "Saying the debate will be loud is a play on words: the argument will be heated. It is not a comment about the noise of electric machines.",
      },
    ],
  },

  // =====================================================================
  // PRACTICE TEST 4
  // =====================================================================

  // ---------------------------------------------------------------- Part 1
  {
    id: "cel-cl1-04",
    task: "cl1",
    exam: "celpip",
    testNo: 4,
    title: "A cancelled flight",
    difficulty: "hard",
    topic: "Travel",
    context: "A woman speaks to an airline agent at the Calgary airport after her flight is cancelled.",
    audio: [
      [
        { speaker: marcus, text: "Next, please. Hi there, how can I help you?" },
        { speaker: sandra, text: "Hi. I was supposed to be on the two-fifteen flight to Halifax, but the board says it's cancelled. I didn't get any message from the airline at all." },
        { speaker: marcus, text: "I'm sorry about that. The aircraft for that flight had a mechanical problem in Toronto, so it never left. Notifications went out about twenty minutes ago, so you may just not have seen yours yet. Can I see your boarding pass?" },
        { speaker: sandra, text: "Here you go. The thing is, I'm going to my sister's wedding. The rehearsal dinner is tomorrow at six, and the ceremony is on Saturday morning. I really can't miss it." },
        { speaker: marcus, text: "Okay, let me see what I can do. You were connecting through Toronto, right?" },
        { speaker: sandra, text: "No, it was a direct flight. That's why I booked it, so I wouldn't have to worry about connections." },
      ],
      [
        { speaker: marcus, text: "Right. So I have two options for you. There's a flight tonight at eleven-forty that goes through Montreal. You'd land in Halifax at about ten tomorrow morning, but the connection in Montreal is only fifty minutes, and that flight has been running late all week." },
        { speaker: sandra, text: "And the other option?" },
        { speaker: marcus, text: "There's a direct flight tomorrow at seven a.m. It lands at a quarter past two in the afternoon, local time. You'd have to spend tonight in Calgary, but there's no connection to worry about." },
        { speaker: sandra, text: "Hmm. The overnight one gets me there earlier, but if I miss that connection, I could be stuck in Montreal all day. The morning flight still gets me in well before six." },
        { speaker: marcus, text: "That's how I'd look at it, too. Shall I put you on the seven o'clock?" },
        { speaker: sandra, text: "Yes, let's do that." },
      ],
      [
        { speaker: sandra, text: "So where do I stay tonight? I don't know anyone in Calgary." },
        { speaker: marcus, text: "Because the cancellation was caused by a mechanical problem, which is within the airline's control, you're entitled to a hotel room and meals. I'll give you a voucher for the airport hotel, plus meal vouchers for dinner tonight and breakfast. The hotel shuttle leaves from door twelve every half hour." },
        { speaker: sandra, text: "What about my suitcase? I already checked it." },
        { speaker: marcus, text: "It'll be pulled off and tagged for the morning flight, so you don't need to do anything. If you need something from it tonight, though, you'd have to wait about two hours at baggage services. Most people just ask the hotel for a toothbrush." },
        { speaker: sandra, text: "Ha, I think I'll do the same. Thanks, you've been really helpful." },
      ],
    ],
    questions: [
      {
        section: 0,
        prompt: "Why was Sandra's flight cancelled?",
        options: ["There was bad weather in Halifax.", "The plane had a mechanical problem.", "Not enough passengers had booked.", "The crew was not available."],
        answer: 1,
        explanation: "Marcus says the aircraft had a mechanical problem in Toronto and never left. Weather is never mentioned.",
      },
      {
        section: 0,
        prompt: "What can be inferred about the cancellation message?",
        options: ["Sandra deleted it by mistake.", "It was sent to the wrong passenger.", "It was sent recently, so Sandra may have missed it.", "The airline forgot to send one."],
        answer: 2,
        explanation: "Notifications went out only twenty minutes earlier, so hers probably arrived while she was at the airport. Sandra believes she got nothing, but Marcus suggests she simply has not seen it.",
      },
      {
        section: 0,
        prompt: "Why is Sandra especially anxious to reach Halifax?",
        options: ["She must attend events for her sister's wedding.", "She has a connecting flight in Toronto.", "She has an important job interview.", "Her luggage has already gone ahead."],
        answer: 0,
        explanation: "She mentions a rehearsal dinner tomorrow at six and the wedding on Saturday. Marcus asks about a Toronto connection, but she says the flight was direct.",
      },
      {
        section: 1,
        prompt: "What is the main drawback of the overnight flight?",
        options: ["It costs more.", "It has a short connection on a flight that has often been late.", "It arrives after the rehearsal dinner.", "It has no seats left."],
        answer: 1,
        explanation: "The Montreal connection is only fifty minutes and that flight has been late all week. It would actually land at ten a.m., well before the dinner.",
      },
      {
        section: 1,
        prompt: "Why does Sandra choose the morning flight?",
        options: ["It arrives earlier than the overnight flight.", "Marcus insists that she take it.", "She prefers to sleep before flying.", "It is less risky and still gets her there in time."],
        answer: 3,
        explanation: "She avoids the risk of being stuck in Montreal, and the direct flight lands before six. It arrives later than the overnight option, not earlier.",
      },
      {
        section: 1,
        prompt: "What is Marcus's opinion of Sandra's choice?",
        options: ["He agrees with her reasoning.", "He thinks it is too risky.", "He suggests waiting another day.", "He refuses to give an opinion."],
        answer: 0,
        explanation: "He says that is how he would look at it, too. He does not push her; she reaches the decision herself.",
      },
      {
        section: 2,
        prompt: "Why is Sandra entitled to a hotel room?",
        options: ["She bought travel insurance.", "She is a frequent flyer.", "The cause of the cancellation was the airline's responsibility.", "The hotel is offering a special rate."],
        answer: 2,
        explanation: "Marcus explains that a mechanical problem is within the airline's control, so it must provide a room and meals. Insurance is never mentioned.",
      },
      {
        section: 2,
        prompt: "What will Sandra most likely do about her suitcase?",
        options: ["Wait for it at baggage services tonight", "Let it go on the morning flight and get a toothbrush from the hotel", "Carry it with her to the hotel", "Have it sent to Halifax by courier"],
        answer: 1,
        explanation: "She says she will do what most people do and ask the hotel for a toothbrush, leaving the bag tagged for the morning flight. Waiting two hours is the option she rejects.",
      },
    ],
  },

  // ---------------------------------------------------------------- Part 2
  {
    id: "cel-cl2-04",
    task: "cl2",
    exam: "celpip",
    testNo: 4,
    title: "Splitting the hydro bill",
    difficulty: "easy",
    topic: "Household",
    context: "Two roommates talk about their household bills.",
    audio: [
      [
        { speaker: jasmine, text: "Kevin, did you see the hydro bill came in? It's a hundred and eighty dollars this month. That's almost double what it was in September." },
        { speaker: kevin, text: "Seriously? That's way more than I expected. I guess it's because it's been so cold. The baseboard heaters have been running nonstop." },
        { speaker: jasmine, text: "That's part of it, but I also wonder about your gaming setup. You're up until two in the morning most nights." },
        { speaker: kevin, text: "Okay, fair, but the computer doesn't use that much. I actually looked it up. It's the heaters for sure. Remember, the landlord told us this place isn't very well insulated." },
        { speaker: jasmine, text: "Maybe. Either way, we need a plan. What if we turned the heat down to eighteen at night and when we're both out?" },
        { speaker: kevin, text: "I'm fine with that. I sleep better when it's cooler anyway. We could also put that plastic film over the windows. My parents did it every winter, and you can get a kit at the hardware store for about twenty bucks." },
        { speaker: jasmine, text: "Good idea. And should we keep splitting the bill fifty-fifty? I'm only home in the evenings, and you work from home three days a week." },
        { speaker: kevin, text: "Hmm, that's true. How about sixty-forty, then? I'll cover the bigger share, since I'm here more." },
        { speaker: jasmine, text: "That seems fair to me. I'll e-transfer you my part tonight, and you can pay the bill." },
        { speaker: kevin, text: "Deal. And I'll pick up the window kit on Saturday." },
      ],
    ],
    questions: [
      {
        prompt: "What surprises the roommates?",
        options: ["The hydro bill is much higher than before.", "The landlord has raised the rent.", "The heaters have stopped working.", "The bill was sent to the wrong address."],
        answer: 0,
        explanation: "The bill is almost double September's. The heaters are working nonstop, not broken.",
      },
      {
        prompt: "What does Kevin believe is the main cause of the problem?",
        options: ["His gaming computer", "The heaters", "A mistake by the hydro company", "Long showers"],
        answer: 1,
        explanation: "He says it is the heaters for sure, mentioning poor insulation. Jasmine suggests the computer, but Kevin rejects that.",
      },
      {
        prompt: "Where did Kevin get the idea for the window film?",
        options: ["From the landlord", "From a hardware store employee", "From his parents", "From a website"],
        answer: 2,
        explanation: "He says his parents did it every winter. The hardware store is only where the kit is sold.",
      },
      {
        prompt: "Why do they decide to change how they split the bill?",
        options: ["Jasmine earns more money.", "The landlord asked them to.", "Kevin's computer uses a lot of power.", "Kevin spends more time at home."],
        answer: 3,
        explanation: "Kevin works from home three days a week, so he offers to pay sixty percent. They agreed the computer was not the main cause.",
      },
      {
        prompt: "What will Jasmine do tonight?",
        options: ["Buy a window kit", "Pay the hydro company", "Send money to Kevin", "Call the landlord"],
        answer: 2,
        explanation: "She will e-transfer her share to Kevin, who will pay the bill. Kevin, not Jasmine, will buy the kit on Saturday.",
      },
    ],
  },

  // ---------------------------------------------------------------- Part 3
  {
    id: "cel-cl3-04",
    task: "cl3",
    exam: "celpip",
    testNo: 4,
    title: "Swimming lessons and fee help",
    difficulty: "easy",
    topic: "Recreation",
    context: "A mother asks a staff member at a recreation centre about swimming lessons.",
    audio: [
      [
        { speaker: leila, text: "Hi, I'm hoping to sign my son up for swimming lessons. He's six, and he's never really been in a pool." },
        { speaker: darren, text: "Great, you've come at a good time. Winter registration opens next Monday at seven a.m. For a beginner his age, I'd recommend our Level One class. It runs on Saturday mornings or Wednesday afternoons, for eight weeks." },
        { speaker: leila, text: "Saturdays would be easier for us. Do the classes fill up fast?" },
        { speaker: darren, text: "The Saturday ones do, usually within the first hour. You can register online, by phone or here at the front desk, but online is quickest. I'd suggest creating your family account this week, so you're ready to go the moment registration opens." },
        { speaker: leila, text: "Okay. And how much is it?" },
        { speaker: darren, text: "Level One is ninety-six dollars for the eight weeks. But I should mention that the city has a fee assistance program. If your household income is under a certain amount, you can get up to eighty percent off most programs, including swimming." },
        { speaker: leila, text: "Oh, really? How do I apply for that?" },
        { speaker: darren, text: "You fill out a short form and bring in a copy of your most recent tax assessment. Approval takes about two weeks, so you'd want to apply today if you'd like it in place for registration. Once you're approved, it's good for a full year." },
        { speaker: leila, text: "That's really helpful. Does he need anything special for the class?" },
        { speaker: darren, text: "Just a swimsuit and a towel. Goggles are optional. Oh, and for children under seven, a parent needs to stay on the pool deck or in the viewing area during the lesson." },
        { speaker: leila, text: "No problem. I'll take one of those forms now, then." },
      ],
    ],
    questions: [
      {
        prompt: "Which class does Darren recommend?",
        options: ["Level One", "A parent-and-child class", "Level Two", "Private lessons"],
        answer: 0,
        explanation: "He recommends Level One for a six-year-old beginner. A parent must stay nearby, but that does not make it a parent-and-child class.",
      },
      {
        prompt: "Why does Darren suggest creating an account this week?",
        options: ["Accounts take two weeks to approve.", "Saturday classes fill up very quickly.", "The website will be closed next week.", "It gives a discount."],
        answer: 1,
        explanation: "Saturday classes usually fill in the first hour, so Leila should be ready. The two-week wait applies to fee assistance, not accounts.",
      },
      {
        prompt: "What does the fee assistance program offer?",
        options: ["Free lessons for every child", "A refund after the course ends", "Payment in monthly instalments", "Up to eighty percent off most programs"],
        answer: 3,
        explanation: "Darren says eligible households get up to eighty percent off. It is a discount, not free lessons for everyone.",
      },
      {
        prompt: "Why should Leila apply for assistance today?",
        options: ["The program ends this month.", "The forms often run out.", "Approval takes about two weeks.", "Darren will not be working next week."],
        answer: 2,
        explanation: "Approval takes about two weeks, so applying now lets it be ready for registration. Nothing suggests the program is ending; it lasts a full year once approved.",
      },
      {
        prompt: "What must a parent of a child under seven do?",
        options: ["Stay nearby during the lesson", "Bring goggles", "Swim in the pool with the child", "Sign a safety waiver"],
        answer: 0,
        explanation: "A parent must stay on the pool deck or in the viewing area. Goggles are described as optional.",
      },
      {
        prompt: "What will Leila most likely do next?",
        options: ["Register online immediately", "Take a fee assistance form", "Buy goggles for her son", "Choose the Wednesday class"],
        answer: 1,
        explanation: "She says she will take one of the forms now. She cannot register yet, because registration opens next Monday.",
      },
    ],
  },

  // ---------------------------------------------------------------- Part 4
  {
    id: "cel-cl4-04",
    task: "cl4",
    exam: "celpip",
    testNo: 4,
    title: "An early snowstorm",
    difficulty: "medium",
    topic: "Weather",
    context: "You will hear a local news report.",
    audio: [
      [
        { speaker: anchor4, text: "Good morning. An early-season snowstorm swept through the region overnight, dropping more than thirty centimetres of snow in some areas and catching many residents off guard. Forecasters had warned of heavy snow, but the storm arrived about six hours earlier than expected, while many people were still on the roads last night. Police say they responded to more than ninety collisions between eight p.m. and midnight. Most were minor, but one section of Highway 7 was closed for several hours after a transport truck slid into a ditch. That stretch has since reopened, though drivers are being asked to slow down and leave extra space. The heavy, wet snow also brought down tree branches, many of which still had their leaves. At the peak, about fourteen thousand homes were without power. The local utility says crews have restored service to all but around two thousand customers, mostly in rural areas, and they hope to have everyone reconnected by this evening. All public and Catholic schools in the district are closed today, and school buses are cancelled. The local college has moved its classes online for the day. City snowplows have been working through the night, starting with main roads and bus routes, so residential streets may not be cleared until tomorrow. Meanwhile, the city is reminding residents that the winter parking ban is now in effect, a week earlier than usual. Vehicles left on the street overnight could be ticketed or towed so that plows can get through. And the good news: temperatures are expected to climb to plus eight by the weekend, so much of this snow should be gone before long." },
      ],
    ],
    questions: [
      {
        prompt: "Why were so many drivers caught on the roads?",
        options: ["They ignored the forecast.", "The storm arrived earlier than predicted.", "The highway had not been plowed.", "The roads were closed without warning."],
        answer: 1,
        explanation: "The storm came about six hours earlier than expected. Forecasters had warned of snow, but nothing says drivers ignored it.",
      },
      {
        prompt: "Why did the storm cause power outages?",
        options: ["Strong winds damaged power lines.", "A truck hit a power pole.", "Equipment froze in the cold.", "Heavy snow brought down branches that still had leaves."],
        answer: 3,
        explanation: "The wet snow weighed down branches still in leaf. The truck slid into a ditch on Highway 7; it did not hit power equipment.",
      },
      {
        prompt: "Who is still without power?",
        options: ["Around two thousand customers, mostly in rural areas", "About fourteen thousand homes", "Every home in the city", "Only the schools"],
        answer: 0,
        explanation: "Fourteen thousand was the peak number; service has since been restored to all but about two thousand, mostly rural, customers.",
      },
      {
        prompt: "What has the local college done?",
        options: ["Closed for the rest of the week", "Delayed the start of classes", "Moved its classes online for the day", "Cancelled its exams"],
        answer: 2,
        explanation: "The report says the college moved classes online for the day. It is the schools, not the college, that are closed.",
      },
      {
        prompt: "What is the purpose of the parking ban reminder?",
        options: ["To raise money from fines", "To let snowplows clear the streets", "To make room for school buses", "To prepare for warmer weather"],
        answer: 1,
        explanation: "Cars may be towed so that plows can get through. Tickets are a consequence, not the purpose of the ban.",
      },
    ],
  },

  // ---------------------------------------------------------------- Part 5
  {
    id: "cel-cl5-04",
    task: "cl5",
    exam: "celpip",
    testNo: 4,
    title: "Planning the food bank drive",
    difficulty: "medium",
    topic: "Workplace",
    context: "Three coworkers plan a workplace fundraiser for the local food bank.",
    audio: [
      [
        { speaker: michelle, text: "Thanks for staying after the meeting, you two. So, management has agreed to match whatever we raise for the food bank this December, up to five thousand dollars. I'd love for us to hit that limit." },
        { speaker: arjun, text: "That's great news. Last year we raised, what, twenty-two hundred? We'll need to do a lot better." },
        { speaker: bridget, text: "Last year the problem was that it was all one bake sale. People bought a muffin, gave two dollars, and that was it. We need something people can get excited about." },
        { speaker: michelle, text: "What did you have in mind?" },
        { speaker: bridget, text: "A silent auction. I've already talked to a few businesses near the office. The bike shop said they'd donate a tune-up, and the Thai place downstairs offered a dinner for four. If we get twenty or so items, that could bring in a lot more than muffins." },
        { speaker: arjun, text: "I like it, but auctions take a lot of organizing. Who's tracking the bids, collecting the payments, making sure people actually pick up their prizes? We're all swamped in December with year-end reports." },
        { speaker: bridget, text: "There are free online auction tools now. People bid from their phones and pay by card. It pretty much runs itself." },
        { speaker: arjun, text: "Okay, that's less scary. Then I'd still suggest we keep the bake sale. It's small, but it's a tradition, and it gets people talking about the fundraiser." },
        { speaker: michelle, text: "Agreed. And about the food bank itself, they told me that what they really need right now isn't cans, it's money, because they can buy food in bulk much more cheaply than we can." },
        { speaker: bridget, text: "So we skip the food drive this year?" },
        { speaker: michelle, text: "Not entirely. But maybe we focus on the things they asked for specifically, like baby formula and toiletries, instead of random canned goods." },
        { speaker: arjun, text: "That makes sense. I can design a poster with a short list of what they need, so people don't just bring whatever's at the back of their cupboard." },
        { speaker: michelle, text: "Perfect. So Bridget, you'll take the auction, Arjun, the posters and the bake sale, and I'll talk to management about how the matching will work." },
        { speaker: bridget, text: "Sounds like a plan." },
      ],
    ],
    questions: [
      {
        prompt: "What has management agreed to do?",
        options: ["Organize the fundraiser", "Match the money raised, up to a limit", "Donate five thousand dollars no matter what", "Give staff time off to volunteer"],
        answer: 1,
        explanation: "Management will match what staff raise, up to five thousand dollars. It is not a fixed donation, so the amount depends on what the team raises.",
      },
      {
        prompt: "According to Bridget, what was wrong with last year's fundraiser?",
        options: ["It was held too late in the year.", "It was poorly advertised.", "It depended on a single small event.", "Nobody liked the baking."],
        answer: 2,
        explanation: "She says it was all one bake sale where people gave a couple of dollars. She does not criticize the food itself.",
      },
      {
        prompt: "What has Bridget already done?",
        options: ["Asked local businesses to donate items", "Booked a room for the auction", "Set up an online auction", "Baked for the sale"],
        answer: 0,
        explanation: "She has talked to the bike shop and the Thai restaurant, which offered prizes. She only mentions online tools; she has not set one up yet.",
      },
      {
        prompt: "What is Arjun's first concern about the auction?",
        options: ["It may not raise much money.", "Businesses will not want to donate.", "Most people do not carry cash.", "It would take too much work in a busy month."],
        answer: 3,
        explanation: "He worries about tracking bids and payments while everyone is busy with year-end reports. He actually says he likes the idea.",
      },
      {
        prompt: "How does Bridget respond to Arjun's concern?",
        options: ["She offers to do all the work herself.", "She suggests an online tool that makes it easier.", "She proposes moving the auction to January.", "She asks management for extra staff."],
        answer: 1,
        explanation: "She points to free online tools where people bid and pay by phone. She does not say she will handle everything alone.",
      },
      {
        prompt: "Why does Arjun want to keep the bake sale?",
        options: ["It is a tradition that builds interest.", "It raised the most money last year.", "Management asked for it.", "He enjoys baking."],
        answer: 0,
        explanation: "He calls it small but a tradition that gets people talking. It raised little money, which is why Bridget wanted something new.",
      },
      {
        prompt: "Why does the food bank prefer donations of money?",
        options: ["It already has too many cans.", "It needs money to pay its staff.", "It can buy food in bulk more cheaply.", "Its shelves are full."],
        answer: 2,
        explanation: "Michelle says the food bank can buy in bulk far more cheaply than donors can. Too many cans is a guess the speakers never make.",
      },
      {
        prompt: "What will Arjun's poster show?",
        options: ["The prizes in the auction", "A list of the specific items the food bank needs", "How the matching works", "Last year's total"],
        answer: 1,
        explanation: "He will list what the food bank needs so people do not bring random items. Michelle, not Arjun, will handle the matching details.",
      },
    ],
  },

  // ---------------------------------------------------------------- Part 6
  {
    id: "cel-cl6-04",
    task: "cl6",
    exam: "celpip",
    testNo: 4,
    title: "Back to the office?",
    difficulty: "hard",
    topic: "Work",
    context: "A radio host talks about different views on requiring employees to return to the office.",
    audio: [
      [
        { speaker: host4, text: "Across the country, employers are calling workers back to the office, and the reactions have been anything but uniform. Today I want to look at three perspectives, because I think this debate is often presented as a simple fight between bosses and employees, and that's not quite accurate. Let's start with employers who want people back full-time. Their main argument isn't about keeping an eye on staff, at least not officially. It's about learning and workplace culture. A manager at a mid-sized engineering firm put it to me this way: junior staff learn by overhearing how senior people solve problems, and you can't overhear anything on a video call. She says her newest hires took twice as long to become independent when everyone worked remotely. On the other side are employees who have built their lives around working from home. For many, the biggest issue is the commute. A worker who lives an hour outside the city told me that going back five days a week would cost him ten hours a week, plus parking. He says he's just as productive at home, and his performance reviews back that up. He's not against the office. He's against driving in just to sit on video calls with colleagues in other cities. And then there's a third group that I think gets overlooked: people who actually want to go back. Younger workers sharing small apartments with roommates, for example, often have no proper place to work. Several told me they felt isolated and missed the social side of their jobs. For them, a mandate isn't a burden. It's a relief. So where does that leave us? My own view is that blanket rules, whether everyone in or everyone out, tend to fail because they ignore these differences. The organizations that seem to be doing best are the ones that set office days team by team, based on when people genuinely need to work together. That's harder to manage, of course. But it treats employees like adults, and it gives the office a purpose beyond attendance." },
      ],
    ],
    questions: [
      {
        prompt: "What does the host say about the way the debate is usually presented?",
        options: ["It focuses too much on young workers.", "It is wrongly reduced to employers against employees.", "It ignores the cost of office space.", "It is mostly about technology."],
        answer: 1,
        explanation: "He says it is often shown as a simple fight between bosses and employees, which is not accurate. Young workers are the group he says is overlooked, not overemphasized.",
      },
      {
        prompt: "According to the engineering manager, what was the problem with remote work?",
        options: ["Employees were less honest about their hours.", "Video calls were too expensive.", "Senior staff left the company.", "New employees took longer to learn their jobs."],
        answer: 3,
        explanation: "Her new hires took twice as long to become independent because they could not overhear senior staff. The host notes the official argument is not about monitoring staff.",
      },
      {
        prompt: "What does the commuting employee object to?",
        options: ["Working in an office under any circumstances", "Travelling to the office only to do video calls", "Having his performance reviewed", "Paying for his own home office"],
        answer: 1,
        explanation: "He says he is not against the office, only against driving in to sit on video calls. His reviews are used as evidence that he is productive, not something he objects to.",
      },
      {
        prompt: "Why might some younger workers welcome a return to the office?",
        options: ["They hope to be promoted faster.", "They live close to the office.", "They lack a proper place to work at home.", "They dislike their managers."],
        answer: 2,
        explanation: "Many share small apartments and have nowhere suitable to work, and some feel isolated. Promotion is never mentioned.",
      },
      {
        prompt: "What is the host's own opinion?",
        options: ["Teams should set office days based on when they need to work together.", "Everyone should return full-time.", "Working from home should be the default.", "Each employee should decide individually."],
        answer: 0,
        explanation: "He favours setting office days team by team according to real collaboration needs. He rejects blanket rules in either direction, so the full-time option is wrong.",
      },
      {
        prompt: "What does the host admit about the approach he prefers?",
        options: ["It lowers productivity.", "It is more difficult to manage.", "Most workers dislike it.", "It only works for large companies."],
        answer: 1,
        explanation: "He concedes that it is harder to manage, then argues it is still worth it. He says such organizations seem to be doing best, so lower productivity is wrong.",
      },
    ],
  },
];
