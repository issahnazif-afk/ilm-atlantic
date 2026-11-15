import type { Item } from '../types';

// Original CELPIP-General Reading practice sets (Parts 1-4) for practice tests 1-3.
// All letters, diagrams, paragraphs and articles are written for Ilm Atlantic.
// People, businesses and surveys mentioned are fictional unless clearly generic.

export const celpipReadingA: Item[] = [
  {
    id: "cel-cr1-01",
    task: "cr1",
    exam: "celpip",
    testNo: 1,
    title: "News from Saskatoon",
    difficulty: "easy",
    topic: "Community",
    context: "Read the following email that Daniel received from Marisol, his former neighbour.",
    passage: "Hi Daniel,\n\nI'm sorry it has taken me so long to write. Since we moved to Saskatoon in August, our lives have been a whirlwind of boxes, paperwork and new routines. I finally have a quiet evening, so I wanted to catch you up.\n\nThe house is smaller than our old place in Mississauga, but the backyard is twice the size, and the kids have already claimed a corner of it for a vegetable garden next spring. Our street is very friendly. On our second day, the couple next door brought over a casserole and a hand-drawn map of the neighbourhood showing the nearest pharmacy, the library and the best place to buy bread. I can't imagine that happening on our old street, where we barely knew anyone's name except yours.\n\nWork has been more of an adjustment. My new office is only a ten-minute drive away, which is wonderful after years of sitting in highway traffic, but the team works very differently. Everyone is expected to share ideas openly in meetings, and at first I stayed quiet because I was used to waiting until my manager asked me directly. Last week I finally presented my proposal for reorganizing the client files, and my supervisor liked it so much that she asked me to lead the project.\n\nThe biggest surprise has been the weather. People warned me about the cold, but nobody mentioned the wind. Josh laughs at me because I already wear my winter parka when it's only minus five.\n\nNow for the real reason I'm writing. We would love for you and Kevin to visit during the holidays. We have a spare room in the basement, and the city holds a winter festival downtown that I think you'd both enjoy. Let me know if any dates between December 27 and January 2 might work. If flights are too expensive, we could also meet halfway in Winnipeg and stay with my cousin.\n\nTake care, and say hello to everyone at the community garden for me.\n\nMarisol",
    reply: "Dear Marisol,\n\nIt was so good to hear from you! I'm glad the people on your new street have been so welcoming. It sounds like you have already found a stronger sense of community than you {{6}}. Congratulations on the work project, too. I always knew you had great ideas, and it seems your new team has finally given you the chance to {{7}}. As for the weather, I'm not surprised that {{8}} is bothering you more than the temperature; I remember how you hated even a light breeze on the garden plots.\n\nKevin and I would love to come for the holidays. Before we book anything, I'll compare flight prices, and if they're too high, we'll happily accept your offer to {{9}}. Either way, I'm looking forward to hearing all about the kids' garden plans and {{10}}.\n\nWarm wishes,\nDaniel",
    questions: [
      {
        prompt: "Why did Marisol write this email?",
        options: [
          "to apologize for missing a holiday event",
          "to ask Daniel for advice about her new job",
          "to share her news and invite Daniel to visit",
          "to complain about life in Saskatoon"
        ],
        answer: 2,
        explanation: "She catches Daniel up on her move and then says 'Now for the real reason I'm writing' before inviting him. She mentions problems at work and with the weather, but she is not mainly complaining or asking for advice."
      },
      {
        prompt: "What does Marisol say about her new home?",
        options: [
          "It is larger than her home in Mississauga.",
          "Its yard is bigger than her old one.",
          "It already has a vegetable garden.",
          "It is far from her new office."
        ],
        answer: 1,
        explanation: "The house is smaller, but 'the backyard is twice the size'. The garden is only planned for next spring, so it does not exist yet."
      },
      {
        prompt: "How did Marisol's new neighbours welcome her?",
        options: [
          "They invited her family to a street party.",
          "They drove her to the pharmacy and library.",
          "They gave her food and local information.",
          "They helped her family unpack their boxes."
        ],
        answer: 2,
        explanation: "The neighbours brought a casserole and a hand-drawn map showing local services. The pharmacy and library appear on the map; nobody drove her there."
      },
      {
        prompt: "What can be inferred about Marisol's previous workplace?",
        options: [
          "Her manager often rejected her proposals.",
          "She led several projects there.",
          "It was a short drive from her home.",
          "Staff usually spoke in meetings only when asked."
        ],
        answer: 3,
        explanation: "She stayed quiet at first because she 'was used to waiting until my manager asked me directly', which describes her old office. Her old commute involved years of highway traffic, so it was not short."
      },
      {
        prompt: "What has surprised Marisol most about the weather in Saskatoon?",
        options: [
          "how early the snow arrived",
          "how cold the temperatures are",
          "how windy it is",
          "how quickly her family adjusted"
        ],
        answer: 2,
        explanation: "She was warned about the cold, 'but nobody mentioned the wind'. The cold itself was expected, so it was not the surprise."
      },
      {
        prompt: "What does Marisol suggest if travel costs are too high?",
        options: [
          "Daniel could visit in the spring instead.",
          "Daniel could stay in her basement for longer.",
          "They could meet in another city.",
          "Her family could visit Mississauga."
        ],
        answer: 2,
        explanation: "If flights are too expensive, they 'could also meet halfway in Winnipeg'. The basement room is part of the main plan, not the alternative."
      },
      {
        prompt: "It sounds like you have already found a stronger sense of community than you _____.",
        options: [
          "expected in Saskatoon",
          "found at your new office",
          "had in Winnipeg",
          "had in Mississauga"
        ],
        answer: 3,
        explanation: "Marisol contrasts her friendly new street with her old street in Mississauga, where they barely knew anyone. Nothing suggests she expected Saskatoon to be unfriendly."
      },
      {
        prompt: "It seems your new team has finally given you the chance to _____.",
        options: [
          "work from home",
          "manage a larger budget",
          "drive to the office",
          "share your ideas openly"
        ],
        answer: 3,
        explanation: "Her new team expects people to share ideas openly, and her proposal led to a project. Driving is mentioned, but it is not an opportunity the team gave her."
      },
      {
        prompt: "I'm not surprised that _____ is bothering you more than the temperature.",
        options: [
          "the wind",
          "the snow",
          "the short days",
          "the icy sidewalk"
        ],
        answer: 0,
        explanation: "Marisol says the wind was what nobody warned her about. Snow and ice are not mentioned in her email."
      },
      {
        prompt: "If they're too high, we'll happily accept your offer to _____.",
        options: [
          "stay in your basement",
          "visit in the spring",
          "rent a car",
          "meet in Winnipeg"
        ],
        answer: 3,
        explanation: "The alternative to expensive flights is meeting halfway in Winnipeg. Staying in the basement is the plan if they fly to Saskatoon."
      },
      {
        prompt: "I'm looking forward to hearing all about the kids' garden plans and _____.",
        options: [
          "the winter festival",
          "your new bakery",
          "the hockey game you mentioned",
          "Josh's new job"
        ],
        answer: 0,
        explanation: "Marisol mentions a winter festival downtown that Daniel and Kevin would enjoy. A bakery is only implied by 'the best place to buy bread', and no hockey game is mentioned."
      }
    ]
  },
  {
    id: "cel-cr2-01",
    task: "cr2",
    exam: "celpip",
    testNo: 1,
    title: "Choosing a new gym",
    difficulty: "easy",
    topic: "Health",
    context: "Read the following comparison chart and the email that goes with it.",
    diagram: {
      kind: "table",
      title: "Fitness Options Near Riverside Apartments",
      columns: [
        "Facility",
        "Monthly fee",
        "Hours",
        "Classes",
        "Parking",
        "Extras"
      ],
      rows: [
        [
          "Northgate Community Centre",
          "$32",
          "6 a.m. - 9 p.m.",
          "Yoga and aquafit included",
          "Free lot",
          "Indoor pool"
        ],
        [
          "FlexFit 24",
          "$45",
          "Open 24 hours",
          "Not included ($10 per class)",
          "Paid ($2 per hour)",
          "Sauna"
        ],
        [
          "Lakeshore Wellness Club",
          "$58",
          "5 a.m. - 11 p.m.",
          "All classes included",
          "Free lot",
          "Childcare room"
        ],
        [
          "Elm Street Studio",
          "$39",
          "7 a.m. - 8 p.m.",
          "Spin and pilates included",
          "Street parking only",
          "10-visit pass ($90)"
        ]
      ]
    },
    passage: "Hi Tomas,\n\nRemember how I complained that my gym on Bloor Street was closing? Well, it's official: the doors close at the end of the month, so I need a new place. Our building manager left a flyer in the lobby comparing four options nearby, and I've attached it. I'd love your opinion because you know much more about fitness than I do.\n\nHere's my situation. Since I started at the hospital, my shifts change every week, and two or three nights a week I don't finish until 11:30. Those are the nights I most want to work out, because a hard workout is the only thing that helps me sleep after a busy shift. I'm also saving for a trip to Newfoundland next summer, so I don't want to pay more than $50 a month. Parking isn't an issue anymore, since I sold my car in September and take the streetcar everywhere. I used to go to yoga, and I'd like to start again, but only once or twice a month, so classes don't need to be included.\n\nOne more thing: would you like to join with me? Most of these places offer a free trial week, and it would be more fun to go together.\n\nTalk soon,\nAna",
    reply: "Hi Ana,\n\nThanks for sending the flyer. Since your late shifts end at 11:30, the only place that will still be open is {{0}}. It costs {{1}} a month, so it fits your budget. The downside is that classes aren't included, so you would pay {{2}} every time you go to yoga, but if you only go once or twice a month, that's still cheaper than the other options would be for you. If you ever want classes included, {{3}} has yoga in its fee for only $32 a month, but it closes at 9 p.m. Also, my sister is looking for a gym where she can bring her twins, so I'm going to tell her about {{4}}.\n\nCount me in for the trial week!\nTomas",
    questions: [
      {
        prompt: "Since your late shifts end at 11:30, the only place that will still be open is _____.",
        options: [
          "FlexFit 24",
          "Lakeshore Wellness Club",
          "Northgate Community Centre",
          "Elm Street Studio"
        ],
        answer: 0,
        explanation: "Only FlexFit 24 is open 24 hours. Lakeshore stays open late, but it closes at 11 p.m., before Ana's shifts end."
      },
      {
        prompt: "It costs _____ a month, so it fits your budget.",
        options: [
          "$39",
          "$58",
          "$45"
        ],
        answer: 2,
        explanation: "FlexFit 24's monthly fee is $45, under Ana's $50 limit. $58 is Lakeshore's fee."
      },
      {
        prompt: "You would pay _____ every time you go to yoga.",
        options: [
          "$10",
          "$2",
          "$90",
          "$32"
        ],
        answer: 0,
        explanation: "At FlexFit 24, classes cost $10 each. $2 is the hourly parking charge, which Ana does not need."
      },
      {
        prompt: "If you ever want classes included, _____ has yoga in its fee for only $32 a month.",
        options: [
          "Elm Street Studio",
          "Northgate Community Centre",
          "Lakeshore Wellness Club",
          "FlexFit 24"
        ],
        answer: 1,
        explanation: "Northgate costs $32 and includes yoga and aquafit. Elm Street Studio includes classes too, but they are spin and pilates, and it costs $39."
      },
      {
        prompt: "My sister is looking for a gym where she can bring her twins, so I'm going to tell her about _____.",
        options: [
          "Lakeshore Wellness Club",
          "Elm Street Studio",
          "Northgate Community Centre"
        ],
        answer: 0,
        explanation: "Only Lakeshore Wellness Club has a childcare room. Northgate has a pool, which a family might like, but no childcare is listed."
      },
      {
        prompt: "Why does Ana need a new gym?",
        options: [
          "Her current gym is closing.",
          "She has moved to a new building.",
          "Her current gym raised its fees.",
          "She no longer has a car to drive there."
        ],
        answer: 0,
        explanation: "She says her gym on Bloor Street is closing at the end of the month. She did sell her car, but she says parking is no longer an issue, not that it is the reason for changing."
      },
      {
        prompt: "Why does Ana want to exercise late at night?",
        options: [
          "The gyms are less crowded then.",
          "She has no free time during the day.",
          "It helps her sleep after work.",
          "Her friend Tomas trains at that time."
        ],
        answer: 2,
        explanation: "She says a hard workout is the only thing that helps her sleep after a busy shift. Her shifts change weekly, so she does have some free daytime."
      },
      {
        prompt: "What does Ana ask Tomas to do?",
        options: [
          "lend her money for a membership",
          "drive her to the gym after her shifts",
          "teach her a new type of exercise",
          "try out a gym with her"
        ],
        answer: 3,
        explanation: "She asks him to join her during a free trial week. She sold her car, but she takes the streetcar and never asks for a ride."
      }
    ]
  },
  {
    id: "cel-cr3-01",
    task: "cr3",
    exam: "celpip",
    testNo: 1,
    title: "Borrowing tools from the library",
    difficulty: "medium",
    topic: "Community",
    context: "Read the following paragraphs about a library service. Then decide which paragraph contains the information in each statement.",
    paragraphs: [
      "When the public library in a mid-sized Ontario city announced that residents could borrow a pressure washer as easily as a novel, some people assumed it was a joke. In fact, the idea came from a group of residents who had presented a petition to the library board, arguing that many households owned expensive tools they used only once or twice a year. The first collection was modest: about eighty items, including drills, ladders, sewing machines, tents and snowshoes. Within a year, staff had added board games, a karaoke machine and a set of folding tables for neighbourhood events.",
      "Borrowing an item works much like borrowing a book. Anyone with a valid library card who is at least eighteen can take out up to two items at a time for a period of one week. Members can browse the collection and place holds through the library's website, then pick up their items at the main branch. Power tools come with an extra step: before taking home a saw or a sander for the first time, borrowers must watch a fifteen-minute safety video and sign a form confirming they understand the instructions. Late returns are charged a small daily fee.",
      "For many users, the main attraction is financial. Renting a carpet cleaner from a hardware store can cost more than fifty dollars a day, while borrowing one from the library costs nothing. But savings are not the only benefit. Residents of apartments and condominiums, who often lack a garage or storage locker, say the service allows them to take on projects they would otherwise avoid. In an informal survey at the checkout desk, a large majority of borrowers said that they would have bought the item new if the library had not offered it.",
      "Running the collection is not without difficulties. Tools wear out far faster than books, and a broken item can sit on a shelf for weeks. To solve this, the library partnered with a group of retired tradespeople who meet every second Saturday to sharpen blades, replace cords and test equipment. Insurance was another concern, and the library had to adjust its policy before power tools could be lent. Despite these challenges, the board has approved plans to add kitchen equipment, such as stand mixers and canning pots, next year."
    ],
    questions: [
      {
        prompt: "Borrowers must complete a short safety requirement before taking home certain items.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 1,
        explanation: "Paragraph B says first-time borrowers of power tools must watch a safety video and sign a form. D mentions insurance for power tools, but not anything borrowers must do."
      },
      {
        prompt: "The service is especially useful for people with little storage space at home.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 2,
        explanation: "Paragraph C explains that apartment and condo residents who lack a garage or locker find the service useful. A mentions households that rarely use tools, but not storage."
      },
      {
        prompt: "The service was started in response to a request from members of the public.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 0,
        explanation: "Paragraph A says the idea came from residents who presented a petition to the library board. D mentions the board approving future plans, which is a different decision."
      },
      {
        prompt: "Volunteers help keep the equipment in good working order.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 3,
        explanation: "Paragraph D describes retired tradespeople who sharpen blades, replace cords and test equipment every second Saturday."
      },
      {
        prompt: "Children under twelve can borrow games if a parent is present.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 4,
        explanation: "No paragraph says this. B says borrowers must be at least eighteen, and A mentions board games, but nothing allows children to borrow with a parent."
      },
      {
        prompt: "Items can be reserved online.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 1,
        explanation: "Paragraph B says members can browse the collection and place holds through the library's website."
      },
      {
        prompt: "The library intends to make more types of items available in the future.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 3,
        explanation: "Paragraph D says the board approved plans to add kitchen equipment next year. A describes items already added in the first year, which is past, not future."
      },
      {
        prompt: "Equipment for outdoor winter activities was part of the original collection.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 0,
        explanation: "Paragraph A lists snowshoes among the first eighty items. No other paragraph mentions winter equipment."
      },
      {
        prompt: "Many borrowers say the service stopped them from purchasing something new.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 2,
        explanation: "Paragraph C reports that most borrowers would have bought the item new without the library. A mentions people owning tools they rarely use, but not borrowers avoiding purchases."
      }
    ]
  },
  {
    id: "cel-cr4-01",
    task: "cr4",
    exam: "celpip",
    testNo: 1,
    title: "Parking rules and new housing",
    difficulty: "hard",
    topic: "Housing",
    context: "Read the following opinion article from a city newspaper and a reader's comment on it.",
    passage: "Every new apartment building in our city comes with a hidden cost that most residents never think about: the parking garage. Under current zoning rules, developers must provide at least one parking space for every unit they build, whether or not the future tenants own a car. It is time for council to scrap this requirement.\n\nSupporters of parking minimums argue that they prevent crowded streets. Without enough off-street spaces, they say, residents will fight over curb space and visitors will circle the block for twenty minutes. The concern is understandable, but it assumes that every household needs a vehicle. In the neighbourhoods closest to our new rapid bus line, a city survey last year found that nearly forty percent of renters did not own a car. Forcing builders to provide a space for each of them is like requiring every apartment to come with a piano.\n\nThe cost is not trivial. A single underground parking stall can add tens of thousands of dollars to the price of a project, and developers do not absorb that cost themselves. It is passed on to buyers and renters, including those who will never use the space. At a time when young families and newcomers are struggling to find anywhere affordable to live, we are effectively charging them for concrete they do not need.\n\nParking rules also shape what gets built. On small lots, the ramp and garage can take up so much room that a builder decides a project is not worth pursuing at all. Many of the modest three- and four-storey buildings that would fit comfortably on our main streets are never even proposed for this reason.\n\nRemoving the minimum would not ban parking. Developers who believe their buyers want spaces would still build them, and the market, rather than a decades-old bylaw, would decide how many. Several Canadian cities have already taken this step, and their streets have not descended into chaos.\n\nI am not suggesting that cars will disappear. Winters here are long, and many residents, particularly those with mobility challenges or jobs outside the city, will continue to depend on driving. The city should protect accessible parking and invest in better snow clearing on transit routes, so that going car-free is a realistic choice rather than an act of endurance.\n\nBut our rules should reflect how people actually live today. Council will vote on the new zoning plan next month. I urge residents to attend the public hearing and ask a simple question: are we building homes for people or for cars?",
    reply: "I have lived two blocks from the new bus line for eleven years, so I read this article with great interest. The writer is right that many of my younger neighbours do not own cars, and I agree that it seems unfair to make them pay for {{5}}. However, I was disappointed that the article said so little about how its own suggestions would be funded. The writer says the city should {{6}}, but our snow-clearing budget is already stretched thin. I also doubt that the market will sort everything out. When a new building has too few spaces, the extra cars simply end up {{7}}, where seniors like me already struggle to park near our doors. Still, I accept the writer's point that the current rule may prevent {{8}} from being built at all. I will attend the hearing, as the writer suggests, but I will ask council to {{9}} before it changes anything.",
    questions: [
      {
        prompt: "What is the writer's main purpose?",
        options: [
          "to explain how the city's zoning rules were created",
          "to warn readers about crowded streets near the bus line",
          "to describe the results of a city survey on car ownership",
          "to persuade readers that a parking requirement should be removed"
        ],
        answer: 3,
        explanation: "The writer states 'It is time for council to scrap this requirement' and urges readers to attend the hearing. The survey is used as evidence, not as the main subject."
      },
      {
        prompt: "According to the writer, who ultimately pays for required parking spaces?",
        options: [
          "the city, through its zoning budget",
          "developers, who lose part of their profit",
          "people who buy or rent the new homes",
          "drivers, through parking fees"
        ],
        answer: 2,
        explanation: "The writer says developers do not absorb the cost; it is 'passed on to buyers and renters'. The tempting answer, developers, is the opposite of what the article claims."
      },
      {
        prompt: "Why does the writer compare parking spaces to pianos?",
        options: [
          "to suggest that many residents have no use for what they are given",
          "to show that both are expensive to install",
          "to point out that both take up a lot of room",
          "to make fun of people who own cars"
        ],
        answer: 0,
        explanation: "The comparison follows the statistic that many renters have no car: requiring a space for everyone is like giving everyone a piano they may not play. Cost and space are discussed later, not in this comparison."
      },
      {
        prompt: "What does the writer say about small lots?",
        options: [
          "They are the best places for large apartment towers.",
          "They should be used for public parking instead of housing.",
          "Parking requirements can make building on them seem not worthwhile.",
          "They are mostly located far from the main streets."
        ],
        answer: 2,
        explanation: "On small lots, the ramp and garage take so much room that a builder may decide a project is 'not worth pursuing'. The article favours modest buildings, not large towers."
      },
      {
        prompt: "Which statement best describes the writer's attitude toward people who drive?",
        options: [
          "The writer believes most of them will soon give up their cars.",
          "The writer recognizes that some residents will still need to drive.",
          "The writer thinks they should pay more for street parking.",
          "The writer blames them for the shortage of affordable homes."
        ],
        answer: 1,
        explanation: "The writer says 'I am not suggesting that cars will disappear' and names people with mobility challenges or jobs outside the city. The writer blames a bylaw, not drivers, for higher costs."
      },
      {
        prompt: "I agree that it seems unfair to make them pay for _____.",
        options: [
          "parking spaces they will never use",
          "bus passes they rarely use",
          "snow clearing on main streets",
          "public hearings"
        ],
        answer: 0,
        explanation: "The article argues that renters without cars are charged for parking they do not need. Bus passes are never mentioned."
      },
      {
        prompt: "The writer says the city should _____, but our snow-clearing budget is already stretched thin.",
        options: [
          "build more underground garages",
          "lower the speed limit on transit routes",
          "improve snow clearing on transit routes"
        ],
        answer: 2,
        explanation: "The article recommends investing in better snow clearing on transit routes, which the commenter links to the stretched budget. Building garages is the opposite of the writer's proposal."
      },
      {
        prompt: "The extra cars simply end up _____, where seniors like me already struggle to park.",
        options: [
          "on the street",
          "in underground garages",
          "at the bus station",
          "in other cities"
        ],
        answer: 0,
        explanation: "The commenter worries that cars without off-street spaces will take curb space, echoing the article's mention of residents fighting over the curb. A garage is exactly what such a building would lack."
      },
      {
        prompt: "I accept the writer's point that the current rule may prevent _____ from being built at all.",
        options: [
          "new bus lines",
          "large shopping centres",
          "single-family houses",
          "smaller apartment buildings"
        ],
        answer: 3,
        explanation: "The article says modest three- and four-storey buildings are never proposed because of parking rules. The bus line already exists, so it is not something the rule prevents."
      },
      {
        prompt: "I will ask council to _____ before it changes anything.",
        options: [
          "guarantee accessible parking",
          "cancel the new bus line",
          "raise the price of every new home",
          "hold a second public survey"
        ],
        answer: 0,
        explanation: "As a senior who struggles to park near home, the commenter would want the accessible parking the article itself recommends protecting. Cancelling the bus line contradicts the commenter's partial agreement."
      }
    ]
  },
  {
    id: "cel-cr1-02",
    task: "cr1",
    exam: "celpip",
    testNo: 2,
    title: "Changes at the food bank",
    difficulty: "medium",
    topic: "Volunteering",
    context: "Read the following email that Hamid received from the volunteer coordinator at his local food bank.",
    passage: "Dear Hamid,\n\nThank you for another wonderful year at the Eastview Food Bank. Since you joined us two years ago, you have sorted donations, packed hampers and, perhaps most importantly, made our clients feel welcome. Several families have told me that your ability to explain our services in Arabic and French made their first visit much less stressful.\n\nI'm writing with some news and a request. First, the news: in January we will move from the church basement on Elgin Street to a much larger warehouse on Carling Avenue. The new space has a loading dock, a proper walk-in fridge and, finally, enough room for clients to wait indoors during the winter. Because the building is shared with two other organizations, our volunteer shifts will change slightly. Morning shifts will now run from 8:30 to 11:30 instead of 9 to 12, and the Thursday evening shift will move to Wednesday.\n\nWe are also retiring our old phone tree. From now on, volunteers will sign up for shifts through an online calendar, which I hope will end the confusion we had last spring, when three people arrived to do the same job while the sorting tables sat empty.\n\nNow for the request. With the larger space, we will need team leads to supervise each shift, and you were the first person I thought of. Team leads open the building, assign tasks to new volunteers and record how many households we serve. Before starting, you would need to attend a two-hour training session on either January 14 or January 18.\n\nFinally, we are launching a home-delivery program for clients who cannot travel to us. Drivers must have held a full licence for at least two years and be able to lift twenty kilograms. If you know anyone suitable, please pass this message along.\n\nCould you let me know about the team lead position by December 15?\n\nWith gratitude,\nColette Brunet\nVolunteer Coordinator",
    reply: "Dear Colette,\n\nThank you for your kind words. I would be honoured to become a team lead. I have a medical appointment on the morning of the 14th, so I will attend the training session on {{6}}. I'm especially pleased about the new warehouse, because our clients will no longer have to {{7}}. The new morning hours also suit me well, since I'll finish at {{8}} and still have plenty of time to get to my afternoon class.\n\nAs for the delivery program, I only received my full licence last spring, so I'm afraid I {{9}}. However, my cousin Samir has been driving for many years and lifts heavy boxes every day at his job, so I will {{10}}.\n\nBest regards,\nHamid",
    questions: [
      {
        prompt: "What is the main purpose of Colette's email?",
        options: [
          "to explain upcoming changes and offer Hamid a new role",
          "to thank Hamid before he leaves the food bank",
          "to ask Hamid to help move to the new warehouse",
          "to recruit Hamid as a delivery driver"
        ],
        answer: 0,
        explanation: "Colette shares 'some news and a request': the move and new procedures, then the team lead position. She asks Hamid to pass the driver request on to others, not to drive himself."
      },
      {
        prompt: "Why does Colette mention that Hamid speaks Arabic and French?",
        options: [
          "to ask him to translate the new online calendar",
          "to explain why he must attend the training",
          "to show how he has helped clients feel comfortable",
          "to suggest he could work at another organization"
        ],
        answer: 2,
        explanation: "Families said his explanations in Arabic and French made their first visit less stressful. The calendar is mentioned later and has nothing to do with translation."
      },
      {
        prompt: "What is one advantage of the new location?",
        options: [
          "It is closer to most volunteers' homes.",
          "It has no other organizations in the building.",
          "Clients can wait inside in cold weather.",
          "It is open on Thursday evenings."
        ],
        answer: 2,
        explanation: "The warehouse has enough room for clients to wait indoors during the winter. It is shared with two other organizations, and the Thursday shift moves to Wednesday."
      },
      {
        prompt: "Why are the volunteer shift times changing?",
        options: [
          "Volunteers asked for earlier mornings.",
          "The online calendar requires fixed times.",
          "The church needs its basement on Thursdays.",
          "The food bank is sharing its new building."
        ],
        answer: 3,
        explanation: "Colette says shifts change 'because the building is shared with two other organizations'. The church basement is the old location, so it no longer affects the schedule."
      },
      {
        prompt: "What problem is the online calendar meant to prevent?",
        options: [
          "volunteers forgetting their shifts",
          "too few volunteers in the summer",
          "clients arriving at the wrong time",
          "several volunteers being assigned the same task"
        ],
        answer: 3,
        explanation: "Last spring three people arrived to do the same job while other work was left undone. Forgetting shifts is a plausible problem, but it is not the one she describes."
      },
      {
        prompt: "What can be inferred about the home-delivery program?",
        options: [
          "It will be run by the team leads.",
          "It already has enough drivers.",
          "It will begin before the move to Carling Avenue.",
          "It is intended for clients with limited mobility."
        ],
        answer: 3,
        explanation: "The program serves 'clients who cannot travel to us', which suggests people with limited mobility. Colette is still looking for drivers, so it does not have enough."
      },
      {
        prompt: "I will attend the training session on _____.",
        options: [
          "January 14",
          "December 15",
          "January 18",
          "a Wednesday evening"
        ],
        answer: 2,
        explanation: "The two training dates are January 14 and 18, and Hamid is busy on the 14th. December 15 is the deadline for his answer, not a training date."
      },
      {
        prompt: "Our clients will no longer have to _____.",
        options: [
          "wait outside in the cold",
          "travel to the church",
          "sign up online",
          "bring their own bags"
        ],
        answer: 0,
        explanation: "The new space has room for clients to wait indoors in winter. 'Travel to the church' is tempting, but clients will still have to travel, just to a different place."
      },
      {
        prompt: "I'll finish at _____ and still have plenty of time to get to my afternoon class.",
        options: [
          "noon",
          "11:30",
          "8:30"
        ],
        answer: 1,
        explanation: "The new morning shift runs from 8:30 to 11:30. Noon was the old finishing time."
      },
      {
        prompt: "I only received my full licence last spring, so I'm afraid I _____.",
        options: [
          "do not yet qualify to be a driver",
          "cannot lift twenty kilograms",
          "will miss the training session",
          "cannot become a team lead"
        ],
        answer: 0,
        explanation: "Drivers must have held a full licence for at least two years, and Hamid got his only last spring. Lifting is the other requirement, but Hamid's reason is about his licence."
      },
      {
        prompt: "My cousin Samir has been driving for many years, so I will _____.",
        options: [
          "ask him to attend the training",
          "ask him to replace me as team lead",
          "pass your message on to him",
          "drive with him on his routes"
        ],
        answer: 2,
        explanation: "Colette asked Hamid to pass the message to anyone suitable, and Samir meets both requirements. The training is for team leads, not drivers."
      }
    ]
  },
  {
    id: "cel-cr2-02",
    task: "cr2",
    exam: "celpip",
    testNo: 2,
    title: "Finding a two-bedroom rental",
    difficulty: "easy",
    topic: "Housing",
    context: "Read the following list of rental units and the email that goes with it.",
    diagram: {
      kind: "table",
      title: "Apartments for Rent Near the Train Line",
      columns: [
        "Address",
        "Monthly rent",
        "Bedrooms",
        "Utilities included",
        "Pets",
        "Distance to station"
      ],
      rows: [
        [
          "14 Maple Crescent (basement)",
          "$1,650",
          1,
          "Heat and water",
          "No pets",
          "5-minute walk"
        ],
        [
          "220 Bayview Avenue, #403",
          "$1,800",
          2,
          "None",
          "Cats only",
          "15-minute walk"
        ],
        [
          "87 Cedar Road (upper floor)",
          "$1,950",
          2,
          "Heat, water and hydro",
          "Cats and dogs",
          "10-minute bus ride"
        ],
        [
          "5 Harbour Street, #1102",
          "$2,400",
          2,
          "Water only",
          "Cats and dogs",
          "2-minute walk"
        ]
      ]
    },
    passage: "Hi Mei,\n\nThanks again for offering to help with our apartment search. Since you lived in Burnaby for years, you know the area far better than we do. I've attached a chart of the four listings we liked most.\n\nOmar starts his new job downtown on March 1, and because he doesn't drive, he'll be taking the train every day, so we'd like to be reasonably close to a station. We need two bedrooms, because I work from home three days a week and I can't keep taking video calls at the kitchen table. And of course, Biscuit is coming with us. He's a very calm dog, but some landlords won't even consider pets.\n\nOur limit is $2,000 a month in total. In our last apartment, the hydro bills were so high in winter that we went over budget every January, so this time I'd really prefer a place where the utilities are included.\n\nNow for the favour. I'm in Calgary for work until the end of the month, so I can't view anything in person. Would you be able to visit the unit that seems best on Saturday and send me a few photos?\n\nThanks a million,\nLeila",
    reply: "Hi Leila,\n\nHappy to help! Because of Biscuit, you can cross off Maple Crescent and {{0}} right away. Maple Crescent wouldn't work anyway, since it has only {{1}}. That leaves Cedar Road, which rents for {{2}} and includes all your utilities, so there won't be any surprise bills in January. Its only weakness is that it's {{3}} from the station rather than within walking distance. The Harbour Street unit is much closer to the train, but its rent alone is {{4}}. I'll go and see Cedar Road on Saturday and send you photos.\n\nMei",
    questions: [
      {
        prompt: "Because of Biscuit, you can cross off Maple Crescent and _____ right away.",
        options: [
          "Cedar Road",
          "Bayview Avenue",
          "Harbour Street"
        ],
        answer: 1,
        explanation: "Biscuit is a dog. Maple Crescent allows no pets and Bayview Avenue allows cats only. Cedar Road and Harbour Street both accept dogs."
      },
      {
        prompt: "Maple Crescent wouldn't work anyway, since it has only _____.",
        options: [
          "heat and water included",
          "one bedroom",
          "a basement entrance",
          "street parking"
        ],
        answer: 1,
        explanation: "The chart shows Maple Crescent has 1 bedroom, and Leila needs two. 'Heat and water' is true of the unit, but it is not a reason to reject it."
      },
      {
        prompt: "Cedar Road rents for _____.",
        options: [
          "$1,800",
          "$2,000",
          "$2,400",
          "$1,950"
        ],
        answer: 3,
        explanation: "The chart lists Cedar Road at $1,950. $2,000 is Leila's limit, not a rent in the chart."
      },
      {
        prompt: "Its only weakness is that it's _____ from the station.",
        options: [
          "a 15-minute walk",
          "a 10-minute bus ride",
          "a 2-minute walk",
          "a 5-minute walk"
        ],
        answer: 1,
        explanation: "Cedar Road is a 10-minute bus ride from the station. The 15-minute walk belongs to Bayview Avenue."
      },
      {
        prompt: "The Harbour Street unit is much closer to the train, but its rent alone is _____.",
        options: [
          "$450 over your limit",
          "$50 under your limit",
          "$400 over your limit"
        ],
        answer: 2,
        explanation: "Harbour Street costs $2,400, which is $400 more than the $2,000 limit, before hydro and heat are added. $450 is the difference from Cedar Road's rent, not from the limit."
      },
      {
        prompt: "Why do Leila and Omar need a second bedroom?",
        options: [
          "Omar's parents will be visiting often.",
          "Their dog needs its own room.",
          "Leila needs a space to work from home.",
          "They plan to rent it to a student."
        ],
        answer: 2,
        explanation: "Leila works from home three days a week and can't keep taking calls at the kitchen table. The dog is mentioned, but only in connection with pet rules."
      },
      {
        prompt: "Why does Leila prefer an apartment with utilities included?",
        options: [
          "Her previous heating and hydro costs were higher than expected.",
          "Landlords in Burnaby usually charge extra for water.",
          "Omar's new employer will pay their rent.",
          "She wants to avoid paying a security deposit."
        ],
        answer: 0,
        explanation: "In their last apartment, winter hydro bills pushed them over budget every January. Nothing is said about Omar's employer paying rent."
      },
      {
        prompt: "What does Leila ask Mei to do?",
        options: [
          "sign a lease on her behalf",
          "visit an apartment and send her pictures",
          "look after Biscuit while she is in Calgary",
          "find out the train schedule for Omar"
        ],
        answer: 1,
        explanation: "Leila asks Mei to visit the best unit on Saturday and send photos. She is away in Calgary, but she never asks Mei to look after the dog."
      }
    ]
  },
  {
    id: "cel-cr3-02",
    task: "cr3",
    exam: "celpip",
    testNo: 2,
    title: "Neighbourhood outdoor rinks",
    difficulty: "medium",
    topic: "Recreation",
    context: "Read the following paragraphs about outdoor skating rinks. Then decide which paragraph contains the information in each statement.",
    paragraphs: [
      "In many Canadian neighbourhoods, the outdoor rink is a winter institution. Some are maintained by city crews, but a surprising number depend entirely on volunteers who flood a corner of a park night after night. These rinks often begin with a single family that puts up boards and invites the neighbours to skate. Over time, the rink becomes a gathering place: parents chat on the benches while children play shinny, and teenagers who never meet in summer end up on the same team. For many newcomers, a first visit to the local rink is their introduction to Canadian winter life.",
      "Building good ice takes more patience than skill. Volunteers wait until the ground is frozen and the forecast shows several days well below zero. They pack down the snow, then spray thin layers of water, usually late at night, when temperatures are lowest and nobody is skating. Pouring too much water at once creates bumpy, cracked ice, so a typical rink needs ten or more floods before it is ready. Once the season begins, the surface must be shovelled after every snowfall and flooded again regularly, often by people who have already worked a full day.",
      "In recent years, volunteers in many regions have noticed that their seasons are getting shorter. Ice that once lasted from mid-December to early March may now be usable for only a few weeks, and a sudden mid-winter thaw can ruin a surface that took weeks to build. A group of university researchers has invited rink volunteers across the country to record each day their rink is open, so that changes in winter weather can be tracked over many years with the help of ordinary skaters.",
      "Communities are responding to these challenges in different ways. Some cities have built refrigerated rinks, which can stay frozen even when temperatures rise above zero, although they are expensive to install and run. Others have switched to smaller surfaces that freeze more quickly, or have shared equipment between parks so that each volunteer group does not need its own hoses and shovels. Several neighbourhood groups now post daily ice conditions online, which saves skaters a wasted trip and helps volunteers find extra hands on flooding nights."
    ],
    questions: [
      {
        prompt: "Water is usually added when the rink is empty and the air is coldest.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 1,
        explanation: "Paragraph B says volunteers spray water late at night, when temperatures are lowest and nobody is skating."
      },
      {
        prompt: "Local rinks can help people who are new to Canada experience winter traditions.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 0,
        explanation: "Paragraph A says a first visit to the rink is often a newcomer's introduction to Canadian winter life."
      },
      {
        prompt: "Members of the public are helping to collect scientific information.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 2,
        explanation: "Paragraph C describes researchers asking rink volunteers to record the days their rink is open. D mentions posting conditions online, but that is for skaters, not research."
      },
      {
        prompt: "Some rinks can remain usable during mild weather.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 3,
        explanation: "Paragraph D says refrigerated rinks stay frozen even above zero. C mentions thaws, but only as a cause of damage."
      },
      {
        prompt: "Some cities charge skaters a small fee to use outdoor rinks.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 4,
        explanation: "No paragraph mentions fees for skaters. D refers to refrigerated rinks being expensive for cities to run, not to charges for users."
      },
      {
        prompt: "Adding too much water at one time results in poor-quality ice.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 1,
        explanation: "Paragraph B says pouring too much water at once creates bumpy, cracked ice."
      },
      {
        prompt: "A brief period of warm weather can undo a great deal of work.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 2,
        explanation: "Paragraph C says a sudden mid-winter thaw can ruin a surface that took weeks to build."
      },
      {
        prompt: "Online updates help people decide whether a trip to the rink is worthwhile.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 3,
        explanation: "Paragraph D says groups post daily ice conditions online, saving skaters a wasted trip."
      },
      {
        prompt: "Outdoor rinks create connections between people who might not otherwise meet.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 0,
        explanation: "Paragraph A says the rink becomes a gathering place where teenagers who never meet in summer end up on the same team. D mentions finding volunteers, but not new social connections."
      }
    ]
  },
  {
    id: "cel-cr4-02",
    task: "cr4",
    exam: "celpip",
    testNo: 2,
    title: "The spread of tip screens",
    difficulty: "hard",
    topic: "Economy",
    context: "Read the following opinion article from a community newspaper and a reader's comment on it.",
    passage: "Last week I bought a muffin and a coffee at a bakery counter. The cashier took them from a display case, put them in a paper bag and turned the payment screen toward me. My options were 18, 20 or 25 percent. I tapped \"custom\", entered zero and felt like a criminal while the line behind me watched.\n\nI am not against tipping. For decades, Canadians have tipped servers who take our orders, bring our meals and look after our tables for an evening. That arrangement, whatever its flaws, was at least clear. What has changed is that the payment terminal now asks for a tip almost everywhere: at self-serve frozen yogurt shops, at hardware stores and, in one case I experienced, at a car wash where I washed the car myself.\n\nBusiness owners defend the screens by pointing out that their staff earn modest wages and that tips help them keep good employees. I have sympathy for that argument. Running a small cafe is hard, and profit margins are thin. But if a business cannot keep workers without asking customers to top up their pay at the counter, then the problem lies with the wage, not with the customer. Asking the public to make up the difference, one awkward tap at a time, is not a lasting solution.\n\nThe screens also change what a tip is supposed to mean. A tip was once a reward for good service. When the prompt appears before any service has been delivered, it becomes something closer to a fee, with the added pressure of public embarrassment. Several friends have told me that they now avoid certain coffee shops altogether, which surely does more harm to those businesses than any tip could repair.\n\nThe percentages have also crept upward. Not long ago, fifteen percent was considered generous in a sit-down restaurant. Today, many terminals start at eighteen, and some calculate the tip on the total after tax, which quietly increases the amount further.\n\nWhat I would like to see is simple. Businesses that offer table service can continue to accept tips. Counter-service businesses should build fair wages into their prices and remove the prompt, or at least make \"no tip\" the default choice. Provinces could help by requiring tips to be calculated on the amount before tax.\n\nCustomers are not stingy. Most of us are happy to pay a fair price for a muffin. We would simply prefer to know what that price is before we reach the till.",
    reply: "As someone who has worked behind a cafe counter for six years, I expected to disagree with this article, but I found myself nodding along more often than not. The writer is right that tips should not be used to {{5}}. Still, I wish the writer had considered what would happen to workers if the screens disappeared overnight. Most owners will not {{6}} unless they are forced to, and in the meantime my income would drop by almost a third. I also disagree that the prompt turns a tip into {{7}}; customers can still choose \"no tip\", and most of my regulars do so without any embarrassment. Where the writer and I agree completely is on the issue of {{8}}, which I had honestly never noticed until now. Perhaps the answer is a gradual one: first {{9}}, then remove the screens.",
    questions: [
      {
        prompt: "What is the writer's main argument?",
        options: [
          "Canadians should stop tipping restaurant servers.",
          "Bakeries charge too much for their products.",
          "Tip requests have spread to places where they do not belong.",
          "Payment terminals are too difficult for customers to use."
        ],
        answer: 2,
        explanation: "The writer supports tipping for table service but objects to prompts 'almost everywhere', such as counters and a self-serve car wash. Ending all tipping is explicitly rejected: 'I am not against tipping.'"
      },
      {
        prompt: "Why does the writer describe the visit to the car wash?",
        options: [
          "to complain about the price of washing a car",
          "to show that tips are requested even when no service is given",
          "to praise a business that removed its tip screen",
          "to explain why hardware stores need tips"
        ],
        answer: 1,
        explanation: "The writer washed the car personally yet was still asked for a tip, the clearest example of a prompt without service. Price is never discussed."
      },
      {
        prompt: "How does the writer respond to business owners who defend tip screens?",
        options: [
          "The writer rejects their claim that wages are low.",
          "The writer understands their situation but believes low pay is the owners' problem to fix.",
          "The writer agrees that customers should help pay staff.",
          "The writer suggests they move to table service."
        ],
        answer: 1,
        explanation: "The writer has 'sympathy for that argument' but says the problem 'lies with the wage, not with the customer'. The writer accepts that wages are modest, so does not reject that claim."
      },
      {
        prompt: "According to the writer, how does the timing of the prompt affect the meaning of a tip?",
        options: [
          "It makes tips more generous.",
          "It allows customers to judge the service more fairly.",
          "It reduces embarrassment for customers.",
          "It makes the tip feel like a required charge rather than a reward."
        ],
        answer: 3,
        explanation: "When the prompt comes before any service, the tip 'becomes something closer to a fee'. The writer says it adds embarrassment, not reduces it."
      },
      {
        prompt: "What does the writer imply about calculating tips on the after-tax total?",
        options: [
          "It is required by provincial law.",
          "It is fairer to workers in sit-down restaurants.",
          "It makes tips larger without customers noticing.",
          "It is used only in restaurants with table service."
        ],
        answer: 2,
        explanation: "The writer says it 'quietly increases the amount further', meaning customers pay more without realizing it. The writer wants provinces to ban it, so it is not currently required by law."
      },
      {
        prompt: "The writer is right that tips should not be used to _____.",
        options: [
          "reward good service",
          "make up for low wages",
          "pay for table service",
          "attract new customers"
        ],
        answer: 1,
        explanation: "The article argues that businesses should not rely on customers to top up staff pay. Rewarding good service is the purpose the writer approves of."
      },
      {
        prompt: "Most owners will not _____ unless they are forced to.",
        options: [
          "remove their tip screens",
          "lower their prices",
          "raise their staff's wages",
          "hire more staff"
        ],
        answer: 2,
        explanation: "The commenter fears losing tip income before wages rise. Removing the screens is what the commenter worries might happen too quickly, so it does not fit the logic."
      },
      {
        prompt: "I also disagree that the prompt turns a tip into _____.",
        options: [
          "a reward",
          "a tax",
          "a fee",
          "a gift"
        ],
        answer: 2,
        explanation: "The writer said a prompt before service makes a tip 'something closer to a fee'. 'Tax' is tempting, but the article uses 'tax' only for sales tax."
      },
      {
        prompt: "The writer and I agree completely on the issue of _____.",
        options: [
          "customers avoiding coffee shops",
          "tips being calculated on the after-tax total",
          "tipping in sit-down restaurants",
          "the price of muffins"
        ],
        answer: 1,
        explanation: "The commenter 'had never noticed' this before, which fits the hidden after-tax calculation the writer described. Tipping at restaurants is not something a reader would only now notice."
      },
      {
        prompt: "Perhaps the answer is a gradual one: first _____, then remove the screens.",
        options: [
          "make 25 percent the default option",
          "ban tipping in restaurants",
          "build fair wages into prices",
          "close counter-service businesses"
        ],
        answer: 2,
        explanation: "The commenter accepts the writer's solution of building fair wages into prices but wants it done before the screens go. Making 25 percent the default contradicts both writers' views."
      }
    ]
  },
  {
    id: "cel-cr1-03",
    task: "cr1",
    exam: "celpip",
    testNo: 3,
    title: "Looking after Pepper",
    difficulty: "easy",
    topic: "Neighbours",
    context: "Read the following email that Farah received from Joan, a neighbour in her apartment building.",
    passage: "Hi Farah,\n\nI hope you and the boys are well. I'm writing with some exciting news and, I'm afraid, a favour to ask.\n\nMy daughter Claire had her baby on Sunday, a healthy little girl named Rose! Claire and her husband are exhausted, so I've decided to fly to Halifax on Friday and stay for two weeks to help with the cooking and laundry. I'll be back on the evening of the 24th.\n\nThe problem, of course, is Pepper. My usual cat sitter, Mr. Laszlo from the third floor, has just had knee surgery and can't manage the stairs. I know how busy you are, but you're the only other person in the building that Pepper doesn't hide from. Would you be able to come by once a day to feed her and clean her litter box? Her food is in the cupboard above the fridge. She gets half a can and a scoop of dry food every morning. Please don't let her talk you into giving her more; the vet says she needs to lose some weight.\n\nMy plants are less demanding. The ones in the living room only need water once a week, but the herbs on the balcony dry out quickly, so they should be watered every second day unless it rains.\n\nI'll leave a spare key with the building superintendent, so you can pick it up whenever it's convenient. If anything worries you, call me. Halifax is an hour ahead of Ottawa, but my phone will be on, so don't worry about the time.\n\nOf course, I'll pay you for your trouble, and I'll bring back something special from the Maritimes for the boys.\n\nThank you so much,\nJoan",
    reply: "Dear Joan,\n\nCongratulations on becoming a grandmother! Of course I'll look after Pepper. I'll pick up the key from {{6}} on Thursday evening so I'm ready to start on Saturday. I promise to feed Pepper only in the {{7}}, no matter how loudly she complains later in the day. I'll water the living room plants {{8}} and check the forecast for the herbs. Please don't pay me; the boys would be thrilled with {{9}}, and that is more than enough. And please send me lots of photos of {{10}}!\n\nLove,\nFarah",
    questions: [
      {
        prompt: "Why is Joan going to Halifax?",
        options: [
          "to help her daughter's family with a new baby",
          "to attend her daughter's wedding",
          "to see a doctor about her knee",
          "to look for a new apartment"
        ],
        answer: 0,
        explanation: "Claire has just had a baby, and Joan is going to help with cooking and laundry. The knee surgery belongs to Mr. Laszlo, not Joan."
      },
      {
        prompt: "Why can't Mr. Laszlo look after the cat this time?",
        options: [
          "He is recovering from an operation.",
          "He is travelling with Joan.",
          "He is allergic to cats.",
          "He has moved out of the building."
        ],
        answer: 0,
        explanation: "He has just had knee surgery and can't manage the stairs. He still lives on the third floor."
      },
      {
        prompt: "Why did Joan ask Farah for help?",
        options: [
          "Farah has looked after Pepper before.",
          "Farah lives on the same floor.",
          "Pepper is comfortable around her.",
          "Farah's sons asked to take care of Pepper."
        ],
        answer: 2,
        explanation: "Farah is 'the only other person in the building that Pepper doesn't hide from'. Nothing says Farah has done this before; Mr. Laszlo is the usual sitter."
      },
      {
        prompt: "What does Joan say about feeding Pepper?",
        options: [
          "Pepper should be fed twice a day.",
          "Pepper needs a new type of food.",
          "Pepper should not be given extra food.",
          "Pepper's food is kept in the fridge."
        ],
        answer: 2,
        explanation: "Joan warns Farah not to give more because the vet says Pepper must lose weight. The food is in the cupboard above the fridge, not inside it."
      },
      {
        prompt: "How often should the balcony herbs be watered?",
        options: [
          "every day",
          "every two days, unless it rains",
          "once a week",
          "only when it has not rained for a week"
        ],
        answer: 1,
        explanation: "The herbs need water every second day unless it rains. Once a week applies to the living room plants."
      },
      {
        prompt: "How will Farah get into Joan's apartment?",
        options: [
          "Joan will give her a key on Friday morning.",
          "She will collect a key from the superintendent.",
          "Mr. Laszlo will let her in.",
          "Joan will leave the door unlocked."
        ],
        answer: 1,
        explanation: "Joan will leave a spare key with the building superintendent. Mr. Laszlo is not involved this time."
      },
      {
        prompt: "I'll pick up the key from _____ on Thursday evening.",
        options: [
          "Mr. Laszlo",
          "the superintendent",
          "Claire",
          "the vet"
        ],
        answer: 1,
        explanation: "Joan is leaving the spare key with the building superintendent. Mr. Laszlo is the usual sitter, but he does not have the key."
      },
      {
        prompt: "I promise to feed Pepper only in the _____.",
        options: [
          "morning",
          "evening",
          "afternoon"
        ],
        answer: 0,
        explanation: "Pepper gets her food every morning. Feeding her at other times would mean extra food, which the vet does not want."
      },
      {
        prompt: "I'll water the living room plants _____.",
        options: [
          "every day",
          "every second day",
          "twice a week",
          "once a week"
        ],
        answer: 3,
        explanation: "The living room plants need water once a week. 'Every second day' is the schedule for the balcony herbs."
      },
      {
        prompt: "The boys would be thrilled with _____.",
        options: [
          "a souvenir from the Maritimes",
          "a trip to Halifax",
          "a new kitten",
          "a visit from Claire"
        ],
        answer: 0,
        explanation: "Joan offered to bring back 'something special from the Maritimes for the boys'. Nobody mentioned taking the boys to Halifax."
      },
      {
        prompt: "Please send me lots of photos of _____!",
        options: [
          "Rose",
          "Pepper",
          "the herbs",
          "Mr. Laszlo"
        ],
        answer: 0,
        explanation: "Rose is Joan's new granddaughter, and Farah is congratulating Joan. Farah would be the one taking photos of Pepper, not receiving them."
      }
    ]
  },
  {
    id: "cel-cr2-03",
    task: "cr2",
    exam: "celpip",
    testNo: 3,
    title: "Winter workshops at the community centre",
    difficulty: "medium",
    topic: "Education",
    context: "Read the following workshop schedule and the email that goes with it.",
    diagram: {
      kind: "table",
      title: "Westwood Community Centre: Winter Workshops",
      columns: [
        "Workshop",
        "Day",
        "Time",
        "Length",
        "Fee",
        "Ages"
      ],
      rows: [
        [
          "Beginner Woodworking",
          "Tuesdays",
          "6:30 - 8:30 p.m.",
          "8 weeks",
          "$140",
          "16+"
        ],
        [
          "Family Cooking: Soups and Breads",
          "Saturdays",
          "10:00 a.m. - 12:00 p.m.",
          "6 weeks",
          "$95 per pair",
          "10+ with an adult"
        ],
        [
          "Intro to Coding with Robots",
          "Saturdays",
          "1:00 - 2:30 p.m.",
          "6 weeks",
          "$80",
          "9 - 13"
        ],
        [
          "Winter Photography",
          "Sundays",
          "9:00 - 11:00 a.m.",
          "4 weeks",
          "$60",
          "14+"
        ],
        [
          "Conversational French",
          "Wednesdays",
          "7:00 - 8:30 p.m.",
          "10 weeks",
          "$110",
          "16+"
        ]
      ]
    },
    passage: "Hi Raj,\n\nThe Westwood Community Centre has just posted its winter workshop schedule, and I've attached it. Last month you mentioned that you wanted to sign Arjun up for something, so I thought we could plan together and share the driving.\n\nMia turned twelve in November and has been taking apart every gadget in the house, so I think something with technology would be perfect for her. Arjun is the same age, isn't he? If they were in the same class, we could take turns dropping them off and picking them up.\n\nI'd also like to take something myself. Ever since my promotion, I've been dealing with clients in Quebec, and my French has become embarrassingly rusty. Unfortunately, I sing with a choir on Wednesday nights, and I'm not ready to give that up. My other option is woodworking, which I've always wanted to try.\n\nOne more thing: my brother is visiting from Calgary in February, and he's a keen photographer. He asked whether there's a short course he could join while he's here, since he's only staying for a month.\n\nThe registration deadline is December 10, and spaces fill up quickly, so let me know soon!\n\nSophie",
    reply: "Hi Sophie,\n\nGreat idea! Arjun is twelve too, so both kids are the right age for {{0}}. It runs on Saturday afternoons and costs {{1}} per child. Since French is on Wednesday nights, I'm afraid it clashes with your choir, but woodworking on {{2}} would work for you. Just be aware that, at {{3}}, it's the most expensive workshop on the list. As for your brother, {{4}} lasts only four weeks, so it fits his visit perfectly.\n\nI'll register Arjun tonight.\nRaj",
    questions: [
      {
        prompt: "Both kids are the right age for _____.",
        options: [
          "Winter Photography",
          "Beginner Woodworking",
          "Family Cooking: Soups and Breads",
          "Intro to Coding with Robots"
        ],
        answer: 3,
        explanation: "The coding workshop is for ages 9 to 13 and suits Mia's interest in gadgets. Family Cooking also accepts twelve-year-olds, but only with an adult and it is not about technology."
      },
      {
        prompt: "It runs on Saturday afternoons and costs _____ per child.",
        options: [
          "$95",
          "$60",
          "$80",
          "$110"
        ],
        answer: 2,
        explanation: "Intro to Coding with Robots costs $80. $95 is the fee for a parent-and-child pair in Family Cooking, which runs on Saturday mornings."
      },
      {
        prompt: "Woodworking on _____ would work for you.",
        options: [
          "Wednesdays",
          "Saturdays",
          "Tuesdays",
          "Sundays"
        ],
        answer: 2,
        explanation: "Beginner Woodworking runs on Tuesdays, so it does not clash with Sophie's Wednesday choir. Wednesday is the French class day."
      },
      {
        prompt: "At _____, it's the most expensive workshop on the list.",
        options: [
          "$110",
          "$95",
          "$140"
        ],
        answer: 2,
        explanation: "Woodworking costs $140, the highest fee. French is $110, which is the second most expensive."
      },
      {
        prompt: "As for your brother, _____ lasts only four weeks.",
        options: [
          "Winter Photography",
          "Intro to Coding with Robots",
          "Family Cooking: Soups and Breads",
          "Conversational French"
        ],
        answer: 0,
        explanation: "Winter Photography runs for 4 weeks and suits a keen photographer staying for a month. The coding and cooking workshops last 6 weeks."
      },
      {
        prompt: "Why does Sophie think Mia would enjoy a technology workshop?",
        options: [
          "Mia's school does not offer computer classes.",
          "Mia enjoys taking devices apart.",
          "Mia's friend Arjun recommended it.",
          "Mia received a robot for her birthday."
        ],
        answer: 1,
        explanation: "Sophie says Mia 'has been taking apart every gadget in the house'. Her birthday is mentioned, but no robot gift is."
      },
      {
        prompt: "Why does Sophie want to improve her French?",
        options: [
          "She is planning to move to Quebec.",
          "She needs it for her new work responsibilities.",
          "Her choir sings in French.",
          "Her brother speaks only French."
        ],
        answer: 1,
        explanation: "Since her promotion, she deals with clients in Quebec. The choir is mentioned only as a scheduling conflict."
      },
      {
        prompt: "What does Sophie suggest she and Raj do?",
        options: [
          "take a workshop together",
          "ask the centre to extend the deadline",
          "share the job of driving the children",
          "invite her brother to stay with Raj"
        ],
        answer: 2,
        explanation: "Sophie suggests they plan together and 'share the driving', taking turns dropping the children off. She never proposes that the two adults take a class together."
      }
    ]
  },
  {
    id: "cel-cr3-03",
    task: "cr3",
    exam: "celpip",
    testNo: 3,
    title: "Repair cafes",
    difficulty: "medium",
    topic: "Environment",
    context: "Read the following paragraphs about community repair events. Then decide which paragraph contains the information in each statement.",
    paragraphs: [
      "A repair cafe is a free community event where people bring broken household items and volunteers help them fix them. The first repair cafes appeared in Europe, and the idea has since spread to many Canadian towns and cities, where events are typically held once a month in libraries, church halls or community centres. Toasters, lamps, torn jackets, bicycles and wobbly chairs are among the most common items. Organizers stress that the goal is not simply to provide free repairs but to show people that many things they would throw away can be saved.",
      "At a typical event, visitors sign in at a welcome table and describe what is wrong with their item. They are then matched with a volunteer who has the right skills, such as a retired electrician or an experienced tailor. Visitors are expected to stay and watch, and often to help, so that they understand how their item works and can perhaps fix it themselves next time. Waiting times can be long on busy days, so many cafes offer coffee and baked goods to make the wait more pleasant.",
      "Volunteers often say they get as much from the events as visitors do. Many are older adults whose practical skills are no longer used in their working lives, and they enjoy passing their knowledge on to younger people. For visitors, the benefits are both practical and environmental. Every repaired item is one less thing sent to a landfill, and organizers of one small-town cafe estimated that, over a single year, their volunteers had kept more than a tonne of goods out of the garbage.",
      "Not every item can be saved. Some modern electronics are glued shut or require special tools, and replacement parts can be difficult or impossible to find. Volunteers must also think about safety: many cafes refuse to open microwave ovens because of the risk of electric shock, and most ask visitors to sign a form accepting that a repair might not succeed. Some organizers believe these problems will ease only if manufacturers design products that are easier to open and make spare parts available."
    ],
    questions: [
      {
        prompt: "Visitors are encouraged to take part in fixing their own belongings.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 1,
        explanation: "Paragraph B says visitors are expected to stay, watch and often help. C mentions volunteers teaching younger people, but B describes visitors taking part."
      },
      {
        prompt: "Certain appliances are not accepted because they are dangerous to work on.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 3,
        explanation: "Paragraph D says many cafes refuse to open microwave ovens because of the risk of electric shock."
      },
      {
        prompt: "The events allow retired people to share skills they no longer use at work.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 2,
        explanation: "Paragraph C describes older adults passing on practical skills that are no longer used in their working lives. B mentions a retired electrician only as an example of a volunteer's skill."
      },
      {
        prompt: "The idea for these events did not begin in Canada.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 0,
        explanation: "Paragraph A says the first repair cafes appeared in Europe before spreading to Canada."
      },
      {
        prompt: "Volunteers must complete a training course before they can help visitors.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 4,
        explanation: "No paragraph mentions training for volunteers. B describes matching visitors with skilled volunteers, but not how volunteers are prepared."
      },
      {
        prompt: "Fixing items reduces the amount of waste a community produces.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 2,
        explanation: "Paragraph C says every repaired item is one less thing sent to a landfill and gives an estimate of goods kept out of the garbage."
      },
      {
        prompt: "Changes in the way products are made could make repairs easier.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 3,
        explanation: "Paragraph D says some organizers want manufacturers to design products that are easier to open and to make parts available."
      },
      {
        prompt: "Events are usually held on a regular schedule.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 0,
        explanation: "Paragraph A says events are typically held once a month."
      },
      {
        prompt: "Most visitors come back to the repair cafe more than once.",
        options: [
          "A",
          "B",
          "C",
          "D",
          "E"
        ],
        answer: 4,
        explanation: "No paragraph says how often visitors return. B hopes visitors can fix items themselves next time, which is not the same as returning to the cafe."
      }
    ]
  },
  {
    id: "cel-cr4-03",
    task: "cr4",
    exam: "celpip",
    testNo: 3,
    title: "Stop changing the clocks",
    difficulty: "hard",
    topic: "Society",
    context: "Read the following opinion article from a provincial newspaper and a reader's comment on it.",
    passage: "Twice a year, Canadians perform a strange ritual. In March we move our clocks forward and lose an hour of sleep; in November we move them back and get it back again. For several days afterward, many of us feel tired, irritable and slightly out of step. It is time to stop. But how we stop matters more than most people realize.\n\nThe case against changing the clocks is now widely accepted. Sleep specialists have long pointed out that the spring change in particular disrupts the body's internal clock, and many people report feeling groggy for days. Parents of young children, who pay no attention to what the clock says, know the problem well. There is also a simple practical argument: the switch serves little purpose in an age when most of us work under electric light.\n\nThe real debate, then, is not whether to stop but which time to keep. Many politicians favour permanent daylight time, which would give us brighter evenings all year. It is easy to see the appeal. Long summer evenings on the patio are among the great pleasures of Canadian life, and retailers and golf courses enjoy them too.\n\nYet permanent daylight time would come at a cost that its supporters rarely mention: very dark winter mornings. In many Canadian cities, the sun would not rise until close to nine o'clock, or even later, in December and January. Children would walk to school and wait for buses in darkness, and commuters would spend the first part of the day driving with their headlights on. Many sleep researchers argue that morning light is what keeps our body clocks in tune, and that losing it for months each year could do more harm than the twice-yearly switch.\n\nPermanent standard time, by contrast, would keep winter mornings as they are now. Summer evenings would be an hour shorter, but our long June days mean that most of us would still enjoy daylight well into the evening. That seems a small price for brighter, safer mornings.\n\nSome parts of the country have already stopped switching. Most of Saskatchewan has stayed on the same time all year for decades, and Yukon stopped changing its clocks in 2020. Their experience suggests that the change can be made without great disruption.\n\nI urge our provincial government to act, but to choose carefully. Bright evenings make for an attractive slogan. Bright mornings make for healthier children and safer roads. Let's choose the mornings.",
    reply: "I agree with the writer that {{5}} does more harm than good, and I was interested to learn that {{6}}. However, I cannot share the writer's conclusion. I run a small garden centre, and most of my customers shop after work, so I am exactly the kind of business the writer had in mind when mentioning that {{7}}. I also think the writer is too quick to dismiss the loss of an hour of summer evening light as {{8}}. For people who work indoors all day, the evening is their only chance to be outside. Still, if the only choice were between permanent standard time and {{9}}, I would reluctantly support the writer's proposal.",
    questions: [
      {
        prompt: "What is the writer's main purpose?",
        options: [
          "to explain why clocks are changed twice a year",
          "to argue that daylight time should be used all year",
          "to argue that the clock changes should end and standard time be kept",
          "to describe how Saskatchewan and Yukon set their clocks"
        ],
        answer: 2,
        explanation: "The writer says 'It is time to stop' and ends by urging the province to keep bright mornings, which means permanent standard time. Permanent daylight time is the option the writer argues against."
      },
      {
        prompt: "Why does the writer mention parents of young children?",
        options: [
          "to show that the switch disrupts sleep in ways families notice",
          "to argue that children need more daylight in the evening",
          "to suggest that parents support permanent daylight time",
          "to explain why schools should start later"
        ],
        answer: 0,
        explanation: "Young children ignore the clock, so parents feel the disruption of the change directly. School start times are never proposed."
      },
      {
        prompt: "What does the writer suggest about supporters of permanent daylight time?",
        options: [
          "They tend to overlook its main disadvantage.",
          "They do not understand how clocks work.",
          "They mostly work in retail and golf.",
          "They have strong scientific evidence for their view."
        ],
        answer: 0,
        explanation: "The writer says it has a cost 'that its supporters rarely mention'. Retailers and golf courses are mentioned as enjoying long evenings, not as the main supporters."
      },
      {
        prompt: "According to the writer, what is the biggest problem with permanent daylight time?",
        options: [
          "shorter summer evenings",
          "higher electricity costs",
          "darker mornings in winter",
          "confusion between provinces"
        ],
        answer: 2,
        explanation: "The writer warns of very dark winter mornings, with sunrise near nine o'clock. Shorter summer evenings are a cost of standard time, the writer's preferred option."
      },
      {
        prompt: "Why does the writer mention Saskatchewan and Yukon?",
        options: [
          "to show that ending the switch is possible without serious problems",
          "to prove that standard time is better for health",
          "to criticize their decision to keep daylight time",
          "to compare their winters with the rest of Canada"
        ],
        answer: 0,
        explanation: "Their experience 'suggests that the change can be made without great disruption'. The writer does not say which time they keep or use them as health evidence."
      },
      {
        prompt: "I agree with the writer that _____ does more harm than good.",
        options: [
          "permanent standard time",
          "changing the clocks twice a year",
          "working under electric light",
          "summer daylight"
        ],
        answer: 1,
        explanation: "The commenter accepts the case against the twice-yearly switch but rejects standard time, so 'permanent standard time' contradicts the rest of the comment."
      },
      {
        prompt: "I was interested to learn that _____.",
        options: [
          "golf courses open earlier in summer",
          "children walk to school in the dark every day",
          "provinces cannot choose their own time",
          "some places have already stopped switching"
        ],
        answer: 3,
        explanation: "The article gives Saskatchewan and Yukon as examples of places that no longer switch. The article says nothing about provinces being unable to choose."
      },
      {
        prompt: "I am exactly the kind of business the writer had in mind when mentioning that _____.",
        options: [
          "commuters drive in darkness",
          "mornings should be brighter",
          "businesses dislike the switch",
          "retailers enjoy long evenings"
        ],
        answer: 3,
        explanation: "A garden centre with after-work shoppers is a retailer that benefits from long evenings, as the article noted. The article never says businesses dislike the switch."
      },
      {
        prompt: "The writer is too quick to dismiss the loss of an hour of summer evening light as _____.",
        options: [
          "a health risk",
          "a small price",
          "a political slogan"
        ],
        answer: 1,
        explanation: "The writer calls shorter summer evenings 'a small price for brighter, safer mornings'. 'Attractive slogan' describes bright evenings in general, not the loss of an hour."
      },
      {
        prompt: "If the only choice were between permanent standard time and _____, I would reluctantly support the writer's proposal.",
        options: [
          "permanent daylight time",
          "keeping the current system of switching",
          "moving to Saskatchewan",
          "longer summer evenings"
        ],
        answer: 1,
        explanation: "The commenter dislikes the switch most of all, so would accept standard time rather than keep switching. Against permanent daylight time, the commenter's preferred option, they would not support the writer."
      }
    ]
  }
];
