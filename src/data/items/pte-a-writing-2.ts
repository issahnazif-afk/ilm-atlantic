import type { Item } from '../types';

// Original PTE Academic practice content: Summarize Written Text (swt-005..012)
// and Write Essay (we-005..015). All passages, prompts and model answers are
// written for Ilm Atlantic.

export const pteAWriting2: Item[] = [
  // ======================= Summarize Written Text =======================
  {
    id: "swt-005",
    task: "swt",
    title: "Why languages disappear",
    difficulty: "easy",
    topic: "Society",
    passage:
      "Around seven thousand languages are spoken in the world today, but they are very unevenly distributed. A small number of major languages are used by most of the global population, while thousands of others have only a few thousand speakers, and some have fewer than a hundred. Linguists consider a language endangered when children are no longer learning it at home, because once a generation stops acquiring a language, it usually disappears within a lifetime. Languages are rarely lost because speakers simply forget them. More often, families shift to a dominant language that offers better access to schooling, employment and public services. Parents may decide, for understandable reasons, that their children will be more successful if they speak the language of the national economy, and over time the older language is used in fewer and fewer situations. Migration to cities, where people from many backgrounds share a common language, can speed up this process. The loss matters for more than sentimental reasons. Each language contains a particular way of describing the world, including detailed vocabularies for local plants, animals and landscapes that may not exist in any other language. When a language disappears, this knowledge can disappear with it. Communities and researchers have therefore developed a range of revitalisation strategies, such as recording elderly speakers, producing dictionaries and teaching materials, and creating immersion schools in which young children are taught entirely in the threatened language. Experience suggests that these efforts succeed best when they are led by the communities themselves and when the language is given a genuine role in everyday life rather than being treated only as a heritage subject.",
    keyPoints: [
      "Most of the world's languages have few speakers, and a language is endangered when children stop learning it.",
      "Families usually shift to dominant languages for economic and educational reasons, and urban migration accelerates this.",
      "Lost languages take unique knowledge, such as local ecological vocabulary, with them.",
      "Revitalisation works best when community-led and when the language is used in everyday life.",
    ],
    modelAnswer:
      "Many of the world's languages are endangered because families shift to dominant languages for economic and educational reasons, which threatens the unique knowledge these languages contain, so communities are recording speakers and creating immersion schools, efforts that succeed best when they are community-led and give the language a real role in daily life.",
  },
  {
    id: "swt-006",
    task: "swt",
    title: "The problem of light pollution",
    difficulty: "medium",
    topic: "Science",
    passage:
      "For most of human history, the night sky was dark enough for people to see thousands of stars and the pale band of the Milky Way. Today, a large proportion of the world's population lives under skies so brightened by artificial light that the Milky Way is no longer visible from their homes. This phenomenon, known as light pollution, is caused mainly by street lamps, illuminated buildings, advertising and vehicles, and much of it results from light that is directed upwards or sideways rather than onto the ground where it is needed. Astronomers were among the first to raise concerns, since a bright sky makes faint objects difficult to observe, but the effects extend well beyond science. Many animals rely on natural cycles of light and darkness. Night-flying insects are drawn to lamps, where they may die from exhaustion or be eaten by predators, and some migrating birds become disoriented by brightly lit buildings. Newly hatched sea turtles, which normally find the ocean by moving towards the brighter horizon, can instead crawl inland towards illuminated roads. There is also growing interest in the possible effects on human health, as exposure to artificial light at night can disrupt the body's internal clock. Unlike many environmental problems, however, light pollution can be reduced quickly and cheaply. Shielding lamps so that they point downwards, using warmer colours of light, and dimming or switching off lights when they are not needed can dramatically reduce sky glow while still keeping streets safe. Some towns have adopted such measures and have even begun to promote their dark skies as an attraction for visitors.",
    keyPoints: [
      "Artificial light, much of it poorly directed, has brightened night skies for a large share of the population.",
      "It hinders astronomy and disrupts wildlife such as insects, migrating birds and sea turtles.",
      "It may also affect human health by disturbing the body clock.",
      "It can be reduced quickly and cheaply through shielding, warmer light and dimming.",
    ],
    modelAnswer:
      "Light pollution, caused largely by poorly directed artificial lighting, not only hinders astronomy but also disrupts insects, migrating birds and sea turtles and may affect human health, yet unlike many environmental problems it can be reduced quickly and cheaply by shielding lamps, using warmer light and dimming unnecessary lighting.",
  },
  {
    id: "swt-007",
    task: "swt",
    title: "Understanding the placebo effect",
    difficulty: "medium",
    topic: "Health",
    passage:
      "When a new medicine is tested, some participants are usually given a placebo: a substance, such as a sugar pill, that has no active ingredient. Researchers do this because people who receive a placebo often report that they feel better, and a drug is only considered effective if it performs better than this comparison. The improvement experienced by people taking a placebo is known as the placebo effect, and for a long time it was treated mainly as a nuisance that complicated the interpretation of trials. More recently, researchers have begun to study the effect for its own sake. Part of the apparent improvement can be explained by factors unrelated to the pill itself. Many conditions improve naturally over time, and people tend to join trials when their symptoms are at their worst, so some recovery would be expected regardless of treatment. However, studies also suggest that expectations can genuinely influence how people experience symptoms such as pain, fatigue and nausea. The context of treatment appears to matter as well: a warm and attentive clinician, a convincing explanation and even the colour or price of a tablet can shape how patients respond. It is important not to overstate these findings. Placebos have not been shown to shrink tumours or cure infections, and their effects are strongest for symptoms that people report subjectively. Nevertheless, the research has practical value. It suggests that the way care is delivered, including the time doctors spend listening and explaining, may itself contribute to patients' wellbeing, alongside the medicines they are prescribed.",
    keyPoints: [
      "Placebos are used in drug trials because people taking them often report improvement.",
      "Some improvement reflects natural recovery, but expectations can genuinely affect symptoms like pain and fatigue.",
      "The context of care, such as clinician manner and pill appearance, influences responses.",
      "Placebos do not cure disease, but the findings show that how care is delivered matters.",
    ],
    modelAnswer:
      "Although some improvement seen in people taking placebos reflects natural recovery, research suggests that expectations and the context of care can genuinely ease subjective symptoms such as pain, and while placebos cannot cure diseases, these findings indicate that the way doctors deliver care contributes to patients' wellbeing.",
  },
  {
    id: "swt-008",
    task: "swt",
    title: "Charging drivers for congestion",
    difficulty: "medium",
    topic: "Economics",
    passage:
      "Traffic congestion imposes substantial costs on cities. Drivers and bus passengers lose time, deliveries become less reliable, and slow-moving vehicles contribute to air pollution. Economists have long argued that congestion persists partly because road space is usually free at the point of use. When each driver decides whether to make a trip, he or she considers only personal costs, such as fuel and time, and not the delay that one extra car imposes on everyone else. The result is that roads are used more heavily than would be efficient. Congestion pricing attempts to correct this by charging drivers to enter busy areas or use crowded roads, often with higher charges at peak times. The aim is not to eliminate driving but to encourage people whose journeys are flexible to travel at a different time, by a different route or by another mode of transport. Several cities that have introduced such schemes have reported faster journeys and fewer vehicles in the charging zone. Nevertheless, congestion pricing is often politically difficult. Critics argue that a flat charge falls more heavily on lower-income drivers, particularly those who work unusual hours or live in areas poorly served by public transport. Businesses in the charging zone may fear losing customers. Supporters respond that these concerns can be addressed by using the revenue to improve buses and trains, by offering discounts to certain groups, and by introducing the scheme gradually. Public acceptance often appears to grow once residents experience the benefits, although winning support before a scheme begins remains a major challenge.",
    keyPoints: [
      "Congestion persists because drivers do not pay for the delay they cause others.",
      "Congestion pricing charges drivers for busy roads, encouraging flexible travellers to change time, route or mode.",
      "Critics worry about fairness to lower-income drivers and effects on businesses.",
      "Revenue for public transport, discounts and gradual introduction can address concerns, and support often grows after launch.",
    ],
    modelAnswer:
      "Since drivers do not pay for the delays they impose on others, congestion pricing charges them to use busy roads in order to shift flexible journeys, and although critics fear it is unfair to lower-income drivers and harmful to businesses, reinvesting revenue in public transport and offering discounts can ease these concerns.",
  },
  {
    id: "swt-009",
    task: "swt",
    title: "Mining the deep sea",
    difficulty: "hard",
    topic: "Environment",
    passage:
      "Scattered across parts of the deep ocean floor, several kilometres below the surface, are potato-sized lumps known as polymetallic nodules. They contain metals such as nickel, cobalt, copper and manganese, which are used in batteries, electrical cables and other technologies associated with the shift away from fossil fuels. As demand for these metals grows, a number of companies and governments have shown interest in collecting the nodules with machines that would travel across the seabed, while the material is pumped up to ships waiting at the surface. Advocates present deep-sea mining as a way of securing essential raw materials without some of the problems associated with mining on land, such as clearing forests or displacing communities. Many marine scientists, however, urge caution. The nodules form extremely slowly, growing by only a few millimetres over a million years, and they provide one of the few hard surfaces on which certain deep-sea organisms can attach and live. Removing them would therefore destroy habitats that could take a very long time to recover. Mining machines would also stir up clouds of sediment, which could spread over wide areas and affect animals far from the mining site itself. Perhaps the most fundamental difficulty is that the deep sea remains poorly studied; expeditions to these regions regularly discover species that have never been described, and researchers know little about how deep-sea ecosystems function. Critics argue that it is impossible to assess, let alone limit, the damage caused by an industry operating in an environment that is so poorly understood, and some have called for a pause until more research has been completed.",
    keyPoints: [
      "Deep-sea nodules contain metals needed for batteries and low-carbon technologies.",
      "Supporters see seabed mining as avoiding some harms of mining on land.",
      "Nodules grow extremely slowly and provide habitat, and sediment plumes could spread damage widely.",
      "Because deep-sea ecosystems are poorly understood, critics call for a pause until more research is done.",
    ],
    modelAnswer:
      "Although supporters argue that mining deep-sea nodules could supply metals needed for clean technologies while avoiding some harms of land mining, scientists warn that it would destroy slow-forming habitats and spread sediment widely, and because these ecosystems are so poorly understood, critics call for a pause until more research is completed.",
  },
  {
    id: "swt-010",
    task: "swt",
    title: "Printing and the spread of reading",
    difficulty: "easy",
    topic: "History",
    passage:
      "Before the middle of the fifteenth century, books in Europe were usually copied by hand. A single volume could take a scribe months to produce, which made books rare and expensive, and they were owned mainly by religious institutions, universities and wealthy individuals. The development of printing with movable metal type, associated with Johannes Gutenberg in the German city of Mainz, transformed this situation. Individual letters could be cast in metal, arranged into pages, inked and pressed onto paper, and then reused for the next job. Once a page had been set, hundreds of identical copies could be made far more quickly than any scribe could write them. Printing spread rapidly to other European cities, and within a few decades presses were producing large numbers of books, pamphlets and single printed sheets. The consequences went well beyond the speed of production. Because many copies of the same text now existed, errors could be identified and corrected, and readers in different places could refer to exactly the same words. Cheaper printed material also helped to increase the number of people who could read, although literacy spread gradually and unevenly over the following centuries. Printing allowed new ideas, whether scientific, religious or political, to circulate far more widely than before, and authorities sometimes struggled to control what was published. Historians continue to debate exactly how much social change can be attributed to the printing press, since other factors, such as expanding trade and education, were also important, but few doubt that it fundamentally altered the way knowledge was shared.",
    keyPoints: [
      "Hand-copied books were rare and expensive before the mid-fifteenth century.",
      "Movable-type printing allowed many identical copies to be produced quickly and spread across Europe.",
      "Standardised texts, cheaper material and wider circulation of ideas followed, with literacy rising gradually.",
      "Historians debate its exact influence, but agree it changed how knowledge was shared.",
    ],
    modelAnswer:
      "Movable-type printing replaced slow hand-copying in fifteenth-century Europe, allowing identical texts to be produced quickly and cheaply, which helped standardise knowledge, gradually expand literacy and spread new ideas widely, and although historians debate its precise influence, few doubt that it fundamentally changed how knowledge was shared.",
  },
  {
    id: "swt-011",
    task: "swt",
    title: "Recycling lithium-ion batteries",
    difficulty: "medium",
    topic: "Technology",
    passage:
      "Lithium-ion batteries power devices ranging from mobile phones to electric cars, and the number in use has grown enormously over the past two decades. Each battery eventually loses its capacity to hold a charge, which raises an important question about what should happen to it at the end of its working life. Discarded batteries can be hazardous if they are crushed or damaged in ordinary waste collection, because they may overheat and catch fire. At the same time, they contain valuable materials, including lithium, cobalt, nickel and copper, which must otherwise be obtained through mining. Recycling these materials could reduce the environmental impact of battery production and make manufacturers less dependent on a small number of supplying countries. However, recycling lithium-ion batteries is technically challenging. Batteries are made in many different shapes and chemical compositions, and they are often glued into products in ways that make removal slow and labour-intensive. The two main industrial methods each have drawbacks. One involves melting batteries at high temperatures, which consumes large amounts of energy and fails to recover some materials, including much of the lithium. The other dissolves the materials in chemical solutions, which can recover more of the valuable metals but requires careful handling of the chemicals involved. Researchers and engineers are therefore exploring ways of designing batteries that are easier to take apart, as well as methods for reusing batteries from electric vehicles, which often retain much of their capacity, in less demanding roles such as storing energy for buildings before they are finally recycled.",
    keyPoints: [
      "Growing numbers of lithium-ion batteries create fire hazards when discarded but contain valuable metals.",
      "Recycling could cut environmental impact and reduce dependence on a few supplier countries.",
      "Varied designs and the drawbacks of high-temperature and chemical methods make recycling difficult.",
      "Solutions include easier-to-dismantle designs and reusing vehicle batteries for energy storage first.",
    ],
    modelAnswer:
      "Discarded lithium-ion batteries are a fire hazard yet contain valuable metals whose recovery could reduce mining and supply dependence, but varied designs and the limitations of current recycling methods make this difficult, so researchers are developing easier-to-dismantle batteries and reusing vehicle batteries for energy storage before recycling.",
  },
  {
    id: "swt-012",
    task: "swt",
    title: "Giving old buildings new uses",
    difficulty: "hard",
    topic: "Architecture",
    passage:
      "When a building no longer serves its original purpose, the usual assumption has been that it should be demolished and replaced. In recent decades, however, architects and planners have paid increasing attention to an alternative known as adaptive reuse, in which an existing structure is converted for a new function. Former factories have become apartments, disused power stations have become galleries, and warehouses have been turned into offices, markets and schools. Part of the appeal is cultural. Older buildings often contribute to the character of a neighbourhood and carry memories of the work and community life that once took place there, and preserving them can give new developments a sense of continuity that entirely new construction may lack. There is also a growing environmental argument. A considerable share of the greenhouse gas emissions associated with a building occurs before anyone moves in, through the extraction and manufacture of materials such as steel and cement and through the construction process itself. Demolishing a sound structure wastes these embodied emissions and generates large quantities of debris, whereas reuse retains much of the original structure. Adaptive reuse is not, however, always straightforward or cheap. Older buildings may contain hazardous materials, fail to meet current safety and accessibility standards, or have layouts that are poorly suited to their intended use, and the costs of upgrading them can be difficult to predict. Some critics also note that high-profile conversions can raise property values and contribute to the displacement of existing residents. Nevertheless, many professionals now argue that reuse should be the starting point, with demolition considered only when adaptation is genuinely impractical.",
    keyPoints: [
      "Adaptive reuse converts redundant buildings to new functions instead of demolishing them.",
      "It preserves neighbourhood character and memory.",
      "It avoids wasting the embodied emissions of existing materials and reduces demolition waste.",
      "It can be costly and complex and may contribute to displacement, but many argue reuse should be the default.",
    ],
    modelAnswer:
      "Adaptive reuse, which converts redundant buildings rather than demolishing them, preserves neighbourhood character and avoids wasting embodied emissions, and although hazardous materials, outdated standards, unpredictable costs and possible displacement of residents complicate it, many professionals argue that reuse should be the default, with demolition reserved for impractical cases.",
  },

  // ======================= Write Essay =======================
  {
    id: "we-005",
    task: "we",
    title: "Spending on space exploration",
    difficulty: "medium",
    topic: "Science",
    prompt:
      "Some people argue that governments spend too much money on space exploration when there are serious problems, such as poverty and disease, still to be solved on Earth. To what extent do you agree or disagree with this view? Support your opinion with reasons and relevant examples.",
    keyIdeas: [
      "Space budgets are small relative to health, welfare and education spending",
      "Satellites support weather forecasting, disaster response and communications",
      "Space research produces technologies with uses on Earth",
      "Money could fund immediate needs such as clinics and clean water",
      "Prestige missions may serve national pride more than public benefit",
      "Prioritise missions with clear practical value and transparent budgets",
    ],
    modelAnswer:
      "Images of rockets lifting off can seem difficult to justify when many people still lack clean water or basic healthcare. Nevertheless, I largely disagree with the view that space exploration is a waste of public money, although I accept that some missions deserve closer scrutiny.\n\nThose who oppose space spending make an understandable moral argument. Money spent on a single mission could build hospitals, train teachers or provide vaccines, and these investments would improve lives immediately rather than at some uncertain point in the future. Furthermore, some projects appear to be motivated mainly by national prestige, which is hard to defend when citizens are struggling.\n\nHowever, this argument overlooks two important points. First, space budgets are usually small compared with what governments spend on health, welfare and education, so cancelling them would not solve poverty or disease. Second, much space activity directly addresses problems on Earth. Satellites make accurate weather forecasts possible, help emergency services respond to floods and wildfires, and allow scientists to monitor deforestation and changes in sea ice. Research for space missions has also contributed to improvements in areas such as materials, imaging and communications.\n\nThe real issue, therefore, is not whether governments should invest in space, but how they choose which projects to fund. Public money should favour missions with clear scientific or practical value, and agencies should explain their budgets openly so that citizens can judge whether the spending is worthwhile.\n\nIn conclusion, while poverty and disease are urgent priorities, space exploration is not the obstacle to solving them. Carefully chosen missions can complement efforts to improve life on Earth rather than compete with them.",
  },
  {
    id: "we-006",
    task: "we",
    title: "The role of modern zoos",
    difficulty: "medium",
    topic: "Environment",
    prompt:
      "Some people believe that zoos play an essential role in protecting endangered species and educating the public. Others argue that keeping wild animals in captivity is cruel and that zoos should be closed. Discuss both views and give your own opinion.",
    keyIdeas: [
      "Captive breeding programmes can support threatened species",
      "Zoos fund field conservation and research",
      "Seeing animals in person can inspire interest in nature",
      "Wide-ranging species suffer stress in small enclosures",
      "Documentaries and online resources can educate without captivity",
      "Keep zoos that meet strict welfare and conservation standards",
    ],
    modelAnswer:
      "Zoos attract millions of visitors every year, yet their purpose is increasingly debated. While some people regard them as vital centres of conservation, others see them as prisons for animals. In my opinion, zoos should continue to exist, but only if they meet strict standards of animal welfare and make a genuine contribution to conservation.\n\nSupporters of zoos point to their role in protecting endangered species. Carefully managed breeding programmes can maintain healthy populations of animals that are threatened in the wild, and in some cases animals bred in captivity have been released into restored habitats. Many zoos also fund research and conservation projects in the field. In addition, seeing a living animal can inspire curiosity in a way that books and screens rarely achieve, particularly among children.\n\nOpponents, however, raise serious ethical concerns. Animals that naturally travel long distances, such as large predators or marine mammals, may suffer stress and display repetitive behaviours when confined to relatively small enclosures. Critics also argue that high-quality documentaries and online resources now allow people to learn about wildlife without any animal losing its freedom, so the educational argument for zoos is weaker than it once was.\n\nIn my view, both arguments contain truth, and the answer lies in distinguishing between good and poor institutions. Zoos that cannot provide suitable conditions for certain species should stop keeping them, while those that invest in spacious habitats, scientific research and breeding programmes deserve continued support.\n\nIn conclusion, zoos are neither entirely beneficial nor entirely cruel. Strict regulation, rather than complete closure, would allow their conservation and educational value to be preserved while protecting animal welfare.",
  },
  {
    id: "we-007",
    task: "we",
    title: "Moving towards a cashless society",
    difficulty: "easy",
    topic: "Economics",
    prompt:
      "In many countries, people increasingly pay for goods and services using cards and mobile phones rather than cash, and some shops no longer accept cash at all. What are the advantages and disadvantages of this trend? Support your answer with relevant reasons and examples.",
    keyIdeas: [
      "Convenience and speed of digital payments",
      "Lower risk of theft and lower handling costs for businesses",
      "Digital records make tax evasion and crime harder",
      "Older people and those without bank accounts may be excluded",
      "Privacy concerns and vulnerability to technical failures or fraud",
      "Keep cash as an option alongside digital payment",
    ],
    modelAnswer:
      "Not long ago, most everyday purchases were made with notes and coins. Today, many people rarely carry cash, preferring to tap a card or a phone. This shift brings clear benefits, but it also creates problems that should not be ignored.\n\nThe main advantage of digital payment is convenience. Customers can pay quickly without searching for the correct change, and they can buy goods online as easily as in a shop. Businesses also benefit, because they no longer need to count, store and transport large amounts of cash, which reduces both costs and the risk of theft. Furthermore, electronic payments leave a record, which can make it harder for individuals and companies to hide income from tax authorities.\n\nOn the other hand, a cashless society may exclude certain groups. Some older people feel uncomfortable using digital technology, and people without a bank account, often those on the lowest incomes, may find it difficult to pay for basic items if shops refuse cash. Privacy is another concern, since every digital transaction can reveal information about where a person goes and what they buy. Finally, electronic systems are vulnerable to technical failures and fraud; if a payment network stops working, even for a few hours, people may be unable to buy food or travel.\n\nFor these reasons, I believe that digital payments should be encouraged but cash should remain available, at least for essential goods and services.\n\nIn conclusion, the move away from cash offers greater speed, safety and transparency, but it also risks excluding vulnerable people and increasing dependence on technology. A balanced approach would allow both forms of payment to coexist.",
  },
  {
    id: "we-008",
    task: "we",
    title: "Loneliness among older people",
    difficulty: "medium",
    topic: "Society",
    prompt:
      "In many societies, an increasing number of older people live alone and experience loneliness and social isolation. What are the main causes of this problem, and what can be done to address it? Support your answer with relevant reasons and examples.",
    keyIdeas: [
      "Longer life expectancy and the death of partners",
      "Adult children moving away for work",
      "Reduced mobility, health problems and loss of local services",
      "Community centres, clubs and volunteer visiting schemes",
      "Intergenerational projects linking schools and care homes",
      "Accessible transport and digital skills training",
    ],
    modelAnswer:
      "As populations age, a growing number of older people spend most of their days alone. Loneliness is not merely unpleasant; it is associated with poorer physical and mental health. This essay will examine the main causes of the problem and suggest how communities and governments could respond.\n\nSeveral changes in modern life contribute to isolation. Because people are living longer, many outlive their partners and close friends, and they may spend many years living alone. At the same time, adult children frequently move to other cities or countries for work, which means that regular family contact is replaced by occasional visits or phone calls. Health problems also play a role: limited mobility, poor hearing or the loss of the ability to drive can make it difficult to leave home, particularly where local shops, post offices and bus routes have closed.\n\nFortunately, there are practical ways to tackle these causes. Local councils and charities can support community centres and clubs that offer affordable activities, from exercise classes to discussion groups. Volunteer schemes, in which younger residents visit or telephone older neighbours, can provide regular companionship. Intergenerational projects, such as pairing schools with care homes, can benefit both age groups. In addition, accessible public transport and free courses in using video calls would help older people stay connected with friends and relatives.\n\nUltimately, responsibility is shared. Families, neighbours and public services all have a part to play in noticing when someone is isolated and offering support.\n\nIn conclusion, loneliness among older people results from longer lives, scattered families and declining mobility. Community activities, volunteering and better transport and technology support can help ensure that growing old does not mean growing isolated.",
  },
  {
    id: "we-009",
    task: "we",
    title: "Studying abroad",
    difficulty: "medium",
    topic: "Education",
    prompt:
      "Every year, large numbers of students leave their home countries to attend universities overseas. Why do so many students choose to study abroad? Do you think this is a positive development for students and their home countries? Support your answer with reasons and relevant examples.",
    keyIdeas: [
      "Access to prestigious institutions and specialised courses",
      "Improving language skills and employability",
      "Personal growth, independence and intercultural experience",
      "Risk of brain drain if graduates do not return",
      "Returning graduates bring knowledge and international networks",
      "High costs may limit opportunities to wealthier families",
    ],
    modelAnswer:
      "International education has expanded rapidly, and in many universities students from dozens of countries now study side by side. This essay will consider why so many young people choose to study overseas and argue that, despite some drawbacks, the trend is largely positive.\n\nStudents are motivated by several factors. Some wish to attend institutions with strong international reputations, or to take specialised courses that are not available at home. Others hope that a foreign degree, combined with fluency in another language, will make them more attractive to employers. For many, the experience itself is also an attraction: living independently in a different culture develops confidence, adaptability and an understanding of different ways of thinking.\n\nFor individual students, the benefits are usually substantial. Graduates often return with valuable qualifications, improved language skills and international contacts that can support their careers for decades. The picture for home countries is more complex. If the most talented graduates decide to remain abroad, their countries may lose the doctors, engineers and researchers they need, a problem often described as brain drain. Moreover, the high cost of overseas study means that these opportunities tend to be concentrated among wealthier families.\n\nNevertheless, I believe the advantages outweigh the disadvantages. Many graduates do return, bringing new knowledge and professional networks, and even those who stay abroad often support their home countries through investment, collaboration and family remittances. Governments can also encourage return by offering scholarships linked to employment at home.\n\nIn conclusion, students study abroad for better education, career prospects and personal growth. Although the trend can create inequality and talent loss, it generally benefits both students and, in the long term, their home countries.",
  },
  {
    id: "we-010",
    task: "we",
    title: "Responsibility for online misinformation",
    difficulty: "hard",
    topic: "Technology",
    prompt:
      "False and misleading information can spread rapidly on social media platforms, sometimes with serious consequences for public health and democracy. Some people argue that the companies that operate these platforms should be held legally responsible for the content their users publish. To what extent do you agree or disagree?",
    keyIdeas: [
      "Recommendation algorithms amplify sensational content for profit",
      "Platforms have the resources to detect harmful content at scale",
      "Full legal liability could lead to excessive removal of legitimate speech",
      "Defining 'false' information is difficult and contested",
      "Duties of transparency and rapid response rather than liability for every post",
      "Media literacy education as a complementary measure",
    ],
    modelAnswer:
      "The speed at which inaccurate claims can circulate online has raised difficult questions about who should be accountable for them. I agree that social media companies should bear greater legal responsibility than they do at present, but I do not believe they should be liable for every individual post their users publish.\n\nThere are strong reasons to expect more from these companies. Platforms are not neutral noticeboards; their recommendation systems actively decide which posts millions of people see, and sensational or misleading content often attracts more attention and therefore more advertising revenue. Since companies profit from this amplification, it seems reasonable that they should also share responsibility for its consequences. Furthermore, large platforms have the financial and technical resources to identify harmful material at a scale that no individual or public authority could match.\n\nHowever, making companies fully liable for all user content would create serious problems. Faced with the threat of legal action, platforms would probably remove anything that might conceivably be controversial, including legitimate debate, satire and criticism of powerful people. In addition, deciding what counts as false is not always simple, particularly when scientific understanding is still developing, and placing that judgement entirely in the hands of private companies could be dangerous.\n\nA more balanced approach would impose specific legal duties rather than blanket liability. Companies could be required to explain how their algorithms rank content, to act quickly on credible reports of dangerous falsehoods, and to allow independent audits. Alongside regulation, schools should teach young people how to evaluate online sources.\n\nIn conclusion, platforms should be legally accountable for how they design and manage their services, but holding them responsible for every user's words would threaten free expression without necessarily improving the quality of information.",
  },
  {
    id: "we-011",
    task: "we",
    title: "Limiting tourist numbers",
    difficulty: "medium",
    topic: "Tourism",
    prompt:
      "Popular tourist destinations such as historic city centres and natural parks are often crowded with visitors. Some people believe that the number of tourists allowed to visit these places should be strictly limited, while others think this would be unfair and economically damaging. Discuss both views and give your own opinion.",
    keyIdeas: [
      "Overcrowding damages fragile sites and natural environments",
      "Residents face rising rents, noise and loss of local services",
      "Tourism provides jobs and income for local businesses",
      "Caps may make travel a privilege of the wealthy",
      "Booking systems, timed entry and visitor fees as alternatives",
      "Spreading visitors across seasons and lesser-known sites",
    ],
    modelAnswer:
      "International travel has become far more affordable, and as a result some famous places now receive more visitors than they can comfortably accommodate. Whether access should be restricted is a matter of debate. In my view, some form of management is necessary, but it should be designed carefully to avoid unfairness.\n\nThose who favour strict limits argue that overcrowding causes lasting harm. Footpaths in national parks can erode, wildlife may be disturbed, and ancient buildings can be damaged by the sheer number of people passing through them. Residents also suffer. In some historic city centres, homes have been converted into short-term rentals, rents have risen, and everyday shops have been replaced by souvenir stores, making these neighbourhoods less pleasant places to live.\n\nOpponents of limits, however, emphasise the economic importance of tourism. Hotels, restaurants, guides and transport companies depend on visitors, and in many regions tourism is one of the main sources of employment. They also argue that strict caps could turn travel into a privilege of the wealthy, since restricted places are often allocated through higher prices.\n\nI believe the best approach lies between these positions. Rather than imposing a fixed annual limit, authorities can introduce timed-entry booking for the most fragile sites, charge modest visitor fees to fund maintenance, and promote less famous attractions and off-peak travel to spread visitors more evenly. Regulating short-term rentals would also protect housing for local people.\n\nIn conclusion, both the protection of popular destinations and the economic value of tourism are important. Flexible management measures, rather than rigid caps, can preserve these places for future visitors while keeping them accessible and economically viable.",
  },
  {
    id: "we-012",
    task: "we",
    title: "Raising the retirement age",
    difficulty: "hard",
    topic: "Economics",
    prompt:
      "Because people are living longer, several governments have raised, or are considering raising, the age at which citizens can receive a state pension. What are the advantages and disadvantages of increasing the retirement age? Support your answer with relevant reasons and examples.",
    keyIdeas: [
      "Pension systems under pressure as the ratio of workers to retirees falls",
      "Longer working lives increase tax revenue and retain experience",
      "Many older people are healthy and wish to keep working",
      "Physically demanding jobs make later retirement unrealistic for some",
      "Life expectancy differs between income groups, so the burden is unequal",
      "Flexible options: phased retirement, retraining, exceptions for manual workers",
    ],
    modelAnswer:
      "Rising life expectancy is one of the great achievements of modern societies, but it also places considerable strain on public pension systems. Raising the retirement age is one possible response. This essay will argue that, while the policy offers clear financial advantages, it also carries significant social costs.\n\nThe main advantage is financial sustainability. In many countries, the number of retirees is growing faster than the number of working-age people whose taxes fund pensions. If people work for longer, they continue to pay taxes while drawing benefits for fewer years, which reduces pressure on public budgets. In addition, many people in their sixties are healthy and capable, and employers can benefit from their experience, judgement and willingness to mentor younger colleagues. Some older workers also value the routine, income and social contact that employment provides.\n\nHowever, the policy has important disadvantages. A uniform retirement age ignores the reality that not all jobs are equally demanding. A construction worker or nurse may find it physically impossible to continue until a later age, whereas an office worker may have little difficulty. Furthermore, life expectancy is often lower among people on lower incomes, so a higher retirement age may mean that the poorest citizens receive their pensions for the shortest time. Older people who lose their jobs may also struggle to find new employment because of age discrimination.\n\nThese problems could be reduced through flexible arrangements, such as phased retirement, retraining programmes and earlier access to pensions for those in physically demanding occupations.\n\nIn conclusion, increasing the retirement age can help sustain pension systems and make use of older workers' skills, but unless it is accompanied by measures that protect vulnerable groups, it risks deepening existing inequalities.",
  },
  {
    id: "we-013",
    task: "we",
    title: "Childhood obesity",
    difficulty: "easy",
    topic: "Health",
    prompt:
      "In many countries, the proportion of children who are overweight or obese has increased significantly in recent decades. What are the main causes of this problem, and what solutions can you suggest? Support your answer with relevant reasons and examples.",
    keyIdeas: [
      "Cheap, heavily processed food high in sugar and fat",
      "Marketing of unhealthy products aimed at children",
      "Less physical activity due to screens and car travel",
      "Healthier school meals and daily physical activity",
      "Restrictions on advertising and taxes on sugary drinks",
      "Family education about cooking and nutrition",
    ],
    modelAnswer:
      "Childhood obesity has become a serious public health concern, because overweight children are more likely to develop health problems such as diabetes later in life. This essay will discuss the main reasons for the increase and suggest several ways of reversing it.\n\nThe first cause is diet. Processed foods and sugary drinks are widely available, relatively cheap and heavily advertised, often with cartoon characters and bright packaging designed to appeal to children. Busy parents may rely on convenience meals and snacks, which tend to contain far more sugar, salt and fat than home-cooked food. The second cause is a decline in physical activity. Many children now spend several hours a day using screens, and they are more likely to be driven to school than to walk or cycle, partly because parents worry about traffic and safety.\n\nThese problems require action from several groups. Schools can provide nutritious meals, remove sugary drinks from vending machines and ensure that pupils are physically active every day, not only during formal sports lessons. Governments can restrict advertising of unhealthy food to children and introduce taxes on sugary drinks, using the revenue to fund sports facilities. Local authorities could also create safer walking and cycling routes to schools.\n\nFamilies, too, have an important role. Simple cooking classes and clear information about nutrition can help parents prepare affordable, healthy meals, while limits on screen time encourage children to play outside.\n\nIn conclusion, rising childhood obesity is mainly caused by unhealthy diets and inactive lifestyles. A combined effort by schools, governments and families, focusing on better food and more opportunities for exercise, offers the best chance of improving children's long-term health.",
  },
  {
    id: "we-014",
    task: "we",
    title: "Young people and voting",
    difficulty: "hard",
    topic: "Politics",
    prompt:
      "In many democracies, young adults are less likely to vote in elections than older citizens. Why do you think this is the case? What measures could be taken to encourage more young people to participate in elections? Support your answer with reasons and relevant examples.",
    keyIdeas: [
      "Feeling that politicians ignore issues important to the young",
      "Frequent moves for study and work complicate registration",
      "Limited civic education about how political systems work",
      "Habit: voting is learned behaviour that builds over time",
      "Automatic or online registration and voting on campuses",
      "Practical citizenship education and youth consultation",
    ],
    modelAnswer:
      "Elections are meant to reflect the will of the whole population, yet in many countries young adults vote far less often than their parents and grandparents. This essay will explore the reasons for this gap and suggest how it could be narrowed.\n\nOne major reason is a sense of disconnection. Many young people feel that politicians focus on the concerns of older voters, such as pensions, and pay little attention to issues like housing costs, employment and climate change. This perception can become self-reinforcing: because young people vote less, parties have less incentive to address their priorities. Practical obstacles also matter. Students and young workers move frequently, and if registration is tied to a fixed address, they may find themselves unable to vote or unsure where to do so. Finally, voting is partly a habit. Those who do not vote in their first elections are less likely to start later.\n\nSeveral measures could improve participation. Governments could simplify registration, for example by enrolling citizens automatically when they reach voting age or allowing secure online registration. Polling stations on university campuses and in workplaces would reduce practical barriers. Schools have a role as well: practical civic education, including mock elections and discussions of local issues, can help students understand how decisions that affect them are made. Political parties, meanwhile, could consult young people directly and include more young candidates.\n\nIt is also important to show young people that their votes make a difference, perhaps by highlighting close results and the policies that followed.\n\nIn conclusion, low youth turnout reflects both disillusionment and practical difficulties. Easier registration, better civic education and genuine engagement by politicians could help young citizens develop a lasting habit of voting.",
  },
  {
    id: "we-015",
    task: "we",
    title: "Salaries of professional athletes",
    difficulty: "easy",
    topic: "Sport",
    prompt:
      "Top professional athletes often earn many times more than doctors, teachers and nurses. Some people think this is unfair and that athletes are paid far too much. To what extent do you agree or disagree with this opinion? Support your view with reasons and relevant examples.",
    keyIdeas: [
      "Salaries reflect the revenue athletes generate from broadcasting and sponsorship",
      "Careers are short and risky, with few reaching the top",
      "Exceptional talent is rare and in high demand",
      "Society's values seem distorted when essential workers earn less",
      "Distinguish between the market and public-sector pay",
      "Athletes can use wealth and influence for social causes",
    ],
    modelAnswer:
      "It is common to hear complaints that a footballer may earn more in a week than a nurse earns in a year. Although this comparison seems shocking, I only partly agree that top athletes are paid too much, because their salaries reflect market forces rather than their value to society.\n\nThe argument that such pay is unfair is easy to understand. Doctors save lives, teachers shape the next generation and nurses care for people at their most vulnerable. When these essential workers struggle with high living costs while athletes buy luxury cars, it can appear that society values entertainment more than health and education.\n\nHowever, athletes' earnings are not paid from public budgets. They come from clubs and sponsors, who in turn earn money from broadcasting rights, tickets and merchandise sold to millions of fans. An outstanding player attracts this income, so it is logical that he or she receives a large share of it. Moreover, elite athletes are extremely rare; thousands of young people train for years, yet only a tiny number reach the top. Their careers are also short and can end suddenly through injury, so high earnings must cover a whole lifetime.\n\nIn my opinion, the real problem is not that athletes earn too much, but that essential public workers are often paid too little. Improving salaries for nurses and teachers is a matter for governments, not football clubs. Many athletes also use their wealth and fame to support charities, which can benefit society.\n\nIn conclusion, the huge gap in pay may seem unjust, but athletes' salaries are driven by the revenue they generate. Rather than criticising sports stars, societies should focus on rewarding essential workers more fairly.",
  },
];
