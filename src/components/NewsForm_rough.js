import React, { Component } from 'react'//rce
import NewsItem from './NewsItem';

export class NewsForm_rough extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Childhood friends find '$55,000 diamond' in India",
            "description": "The friends dug up the 15.34-carat gem-quality diamond in central India.",
            "url": "https://www.bbc.com/news/articles/c80x39d44klo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/41f1/live/52c7f610-d666-11f0-91f5-0bd827601511.jpg",
            "publishedAt": "2025-12-17T06:45:10Z",
            "content": "Vishnukant TiwariMadhya Pradesh\r\nOn a recent winter morning in central India's Panna, a diamond mining region, two childhood friends made a discovery that they think could change their lives forever.… [+3166 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "India express train kills seven elephants crossing tracks",
            "description": "The collision happened early on Saturday in the north-eastern state of Assam, local officials say.",
            "url": "https://www.bbc.com/news/articles/c9qe2yln2nlo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/be60/live/9fee9af0-de06-11f0-8f5a-eff50ed0a189.jpg",
            "publishedAt": "2025-12-21T01:18:23Z",
            "content": "Seven wild Asian elephants, including calves, were killed when a high-speed train collided with a herd crossing the tracks in north-eastern India, local officials say.\r\nThey say another calf was inju… [+793 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "India charges Pakistan-based militant groups in Pahalgam attack",
            "description": "Twenty six people were killed at a beauty spot near Pahalgam in April after militants opened indiscriminate fire.",
            "url": "https://www.bbc.com/news/articles/cvgr8r0pwvmo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/197d/live/e5178630-da48-11f0-b67b-690eb873de1b.jpg",
            "publishedAt": "2025-12-16T07:10:18Z",
            "content": "India's anti-terrorism agency, the National Investigation Agency (NIA), has charged two Pakistan-based militant groups and six people in the attack on tourists in Indian-administered Kashmir this Apr… [+2340 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Angry fans throw chairs and bottles at Messi event in India",
            "description": "The Inter Miami and Argentina forward is in India for his 'GOAT tour', taking in events in Kolkata, Hyderabad, Mumbai and New Delhi.",
            "url": "https://www.bbc.com/news/articles/c4g66nll48do",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b0a6/live/955b0f40-d80e-11f0-a8dc-93c15fe68710.jpg",
            "publishedAt": "2025-12-13T10:22:24Z",
            "content": "The first stop on Lionel Messi's tour of India descended into chaos as fans ripped up stadium seats and threw items after his appearance at Kolkata's Salt Lake Stadium.\r\nThousands of adoring supporte… [+3565 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "UK minister flags visa 'abuse' as student asylum claims surge",
            "description": "More than 14,000 students on study visas sought asylum this year to June 2025 according to Home Office figures.",
            "url": "https://www.bbc.com/news/articles/cy5gyzqexn5o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/792f/live/e9a50090-c910-11f0-b617-8f268340abd0.jpg",
            "publishedAt": "2025-11-25T06:37:01Z",
            "content": "Devina GuptaReporting from Chennai\r\nUK's Indo-Pacific Minister Seema Malhotra has defended her government's immigration proposals during a visit to India, while expressing concern about a rise in for… [+4912 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda) , Harish Jonnalagadda",
            "title": "Here's why the POCO F8 Ultra isn't coming to India",
            "description": "The F8 Ultra is POCO's best phone yet, but there's a problem: the brand isn't bringing the device to India, its biggest overseas market. I dug around, and this is why the F8 Ultra isn't launching in India.",
            "url": "https://www.androidcentral.com/phones/xiaomi/heres-why-the-poco-f8-ultra-isnt-coming-to-india",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/uKTqiCMotuhQVtEKEnKjLN-2560-80.jpg",
            "publishedAt": "2025-12-04T09:37:27Z",
            "content": "(Image credit: Nicholas Sutrich / Android Central)\r\nIn Hardwired, AC Senior Editor Harish Jonnalagadda delves into all things hardware, including phones, audio products, storage servers, and networki… [+4855 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Microsoft To Invest $17.5 Billion in India",
            "description": "Microsoft announced on Tuesday its largest-ever investment in Asia -- $17.5 billion over four years starting in 2026 -- to expand cloud and AI infrastructure across India, fund skilling programs, and support ongoing operations in the country. The commitment a…",
            "url": "https://slashdot.org/story/25/12/09/1815211/microsoft-to-invest-175-billion-in-india",
            "urlToImage": "https://a.fsdn.com/sd/topics/microsoft_64100.png",
            "publishedAt": "2025-12-09T18:15:00Z",
            "content": "Microsoft announced on Tuesday its largest-ever investment in Asia -- $17.5 billion over four years starting in 2026 -- to expand cloud and AI infrastructure across India, fund skilling programs, and… [+633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Hartley Charlton",
            "title": "Apple May Have to Enable Always-On GPS in India",
            "description": "India is reviewing a proposal that would require Apple to keep GPS location services permanently active on every iPhone sold in the country, according to Reuters.\n\n\n\n\n\nUnder the proposal, smartphone makers including Apple would be required to activate satelli…",
            "url": "https://www.macrumors.com/2025/12/07/apple-may-have-to-enable-always-on-gps-in-india/",
            "urlToImage": "https://images.macrumors.com/t/yQIJcb8Y-avkal6pF9GMKjehEcY=/2304x/article-new/2020/08/apple-india.jpg",
            "publishedAt": "2025-12-07T19:23:13Z",
            "content": "India is reviewing a proposal that would require Apple to keep GPS location services permanently active on every iPhone sold in the country, according to Reuters.\r\nUnder the proposal, smartphone make… [+1522 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "Apple Unveils New Stores in India and China",
            "description": "Apple today unveiled its fifth retail store in India, at the DLF Mall in Noida. The store opens to customers this Thursday, December 11, at 1 p.m. local time. \n\n\n\nApple Noida\n\nThe store features familiar amenities, including an Apple Pickup station for in-sto…",
            "url": "https://www.macrumors.com/2025/12/10/apple-unveils-new-stores-in-india-and-china/",
            "urlToImage": "https://images.macrumors.com/t/6Hz3T7DXExSEG7NFHniPY3Fq9-g=/1960x/article-new/2025/12/Apple-Noida-1.jpg",
            "publishedAt": "2025-12-10T16:39:33Z",
            "content": "Apple today unveiled its fifth retail store in India, at the DLF Mall in Noida. The store opens to customers this Thursday, December 11, at 1 p.m. local time. \r\nThe store features familiar amenities,… [+608 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda) , Harish Jonnalagadda",
            "title": "Apple Fitness+ is finally available in India, and it is everything I hoped it would be: This is the only guided workout program you'll ever need, and you won't believe what it costs",
            "description": "Fitness+ makes its long-awaited debut in India, and just like Apple Music, it is uniquely affordable.",
            "url": "https://www.androidcentral.com/apps-software/apple-fitness-is-finally-available-in-india-and-it-is-everything-i-hoped-it-would-be",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/3N9zqLphqWCRg8anqEq5RZ-2560-80.jpg",
            "publishedAt": "2025-12-19T09:39:41Z",
            "content": "I can't tell you how long I've waited for Apple to bring Fitness+ to India. Thankfully, the online workout program finally debuted in the country this week, and Apple is once again being strategic ar… [+2741 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda) , Harish Jonnalagadda",
            "title": "I tested the iQOO 15: It is the ideal POCO F8 Ultra rival, and it has a major advantage",
            "description": "The iQOO 15 is the closest alternative to the F8 Ultra, and you can actually buy it in India.",
            "url": "https://www.androidcentral.com/phones/vivo/iqoo-15-review",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/CEqZ5QgoAVmZo6KSt4DYHf-2560-80.jpg",
            "publishedAt": "2025-12-08T09:41:59Z",
            "content": "Why you can trust Android Central\r\nOur expert reviewers spend hours testing and comparing products and services so you can choose the best for you. Find out more about how we test.It's good to see iQ… [+7539 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Goa nightclub owners held in Thailand over deadly fire",
            "description": "Brothers Gaurav and Saurabh Luthra fled to Phuket, shortly after the incident last week.",
            "url": "https://www.bbc.com/news/articles/c04vgxk0613o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d06c/live/d39b0dc0-d64f-11f0-913a-f5408f7a593b.jpg",
            "publishedAt": "2025-12-11T06:45:03Z",
            "content": "Two brothers wanted in connection with a deadly fire at their nightclub in the Indian state of Goa, which killed 25 people, have been detained in Thailand, India's ambassador to Thailand, Nagesh Sing… [+1788 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda) , Harish Jonnalagadda",
            "title": "India's Sonodyne made a soundbar, and it is spectacular: It has Dolby Atmos, sublime audio, a standalone sub, and is astonishingly affordable",
            "description": "I used Sonodyne's Sama 5000, and it is easily one of the best mid-range Dolby Atmos soundbars available in India.",
            "url": "https://www.androidcentral.com/accessories/audio/indias-sonodyne-made-sama-5000-soundbar-and-it-is-spectacular",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/e9x8PKLCPMVFENL2x3Ny75-2560-80.jpg",
            "publishedAt": "2025-12-03T05:00:47Z",
            "content": "Sonodyne is an Indian audio manufacturer with a storied heritage; it has been making custom studio speakers and professional monitoring gear for over 50 years, and the brand clearly knows what it's d… [+4166 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Violence breaks out in Bangladesh after death of youth protest leader",
            "description": "Sharif Osman Hadi was a prominent figure in the movement that ousted former prime minister Sheik Hasina.",
            "url": "https://www.bbc.com/news/articles/c623rzzenmyo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2e8c/live/b3fa3080-dc5e-11f0-aae2-2191c0e48a3b.jpg",
            "publishedAt": "2025-12-18T21:55:57Z",
            "content": "Anbarasan Ethirajan,South Asia Regional Editor\r\nViolence has erupted in Bangladesh following the death of a prominent leader of the youth movement that ousted former prime minister Sheikh Hasina.\r\nSh… [+2247 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Diaa Hadid",
            "title": "Putin and Modi expand India-Russia economic ties in talks in New Delhi",
            "description": "India gave Russia's leader a warm welcome in his first visit since his country invaded Ukraine. The visit in part signaled India's defiance of the U.S., which has punished New Delhi for buying Russian oil.",
            "url": "https://www.npr.org/2025/12/05/g-s1-100899/putin-modi-india-visit-russia-trade-oil",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5769x3245+0+364/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F3f%2Fcd%2F0c8cf35445f19c6835c3cb4126c0%2Fgettyimages-2249270459.jpg",
            "publishedAt": "2025-12-05T19:37:49Z",
            "content": "MUMBAI, India There was a hug and selfie in a limousine ride after Indian Prime Minister Narendra Modi personally picked up Russian President Vladimir Putin on arrival in the capital New Delhi on Thu… [+5811 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "Indian, US investigators to meet next week on Air India crash, Bloomberg News reports",
            "description": "Dec 6 () - India will send investigators to the United States next week ​to go over data gathered on the ‌deadly Air India flight crash in June with the...",
            "url": "https://www.yahoo.com/news/articles/indian-us-investigators-meet-next-150631288.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/2eb9819667620d9f8caf3794df0bbc2d",
            "publishedAt": "2025-12-06T15:06:31Z",
            "content": "Dec 6 (Reuters) - India will send investigators to the United States next week to go over data gathered on the deadly Air India flight crash in June with the National Transportation Safety Board, Blo… [+971 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Kwan Wei Kevin Tan,Aditi Bharade",
            "title": "A Marriott executive says the hotel chain is betting big on this market",
            "description": "John Toomey, Marriott International's chief commercial officer, said India is now at the same position China was at 10 to 15 years ago.",
            "url": "https://www.businessinsider.com/marriott-executive-hotel-chain-big-bet-india-2025-11",
            "urlToImage": "https://i.insider.com/68e6131a1c1f80efbec52320?width=1200&format=jpeg",
            "publishedAt": "2025-11-26T00:08:01Z",
            "content": "\"It is an absolutely exploding economy and democracy,\" John Toomey, Marriott International's chief commercial officer, said of the hospitality giant's bet on India.Marriott International\r\n<ul><li>Joh… [+4954 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "India Orders Apple to Preinstall Government Security App on All iPhones",
            "description": "India is requiring smartphone makers like Apple and Samsung to preload devices sold in the country with a state-owned cyber security app that can't be deleted, reports Reuters.\n\n\n\n\n\nThe Department of Communications in India is giving smartphone companies 90 d…",
            "url": "https://www.macrumors.com/2025/12/01/india-iphone-preinstall-government-app/",
            "urlToImage": "https://images.macrumors.com/t/yQIJcb8Y-avkal6pF9GMKjehEcY=/2304x/article-new/2020/08/apple-india.jpg",
            "publishedAt": "2025-12-01T19:23:20Z",
            "content": "India is requiring smartphone makers like Apple and Samsung to preload devices sold in the country with a state-owned cyber security app that can't be deleted, reports Reuters.\r\nThe Department of Com… [+2002 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple Asks Indian Court to Block Antitrust Law Allowing $38 Billion Fine",
            "description": "Apple is fighting an antitrust penalty law in India that could require it to pay massive fines in its ongoing antitrust dispute with Tinder owner Match, reports Reuters.\n\n\n\n\n\nLast year, India passed a law that allows the Competition Commission of India (CCI) …",
            "url": "https://www.macrumors.com/2025/11/26/apple-india-antitrust-law-challenge/",
            "urlToImage": "https://images.macrumors.com/t/yQIJcb8Y-avkal6pF9GMKjehEcY=/2304x/article-new/2020/08/apple-india.jpg",
            "publishedAt": "2025-11-26T21:42:59Z",
            "content": "Apple is fighting an antitrust penalty law in India that could require it to pay massive fines in its ongoing antitrust dispute with Tinder owner Match, reports Reuters.\r\nLast year, India passed a la… [+1789 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Dominic Preston",
            "title": "OnePlus 15R will get a late launch next month",
            "description": "This month’s OnePlus 15 arrived to much fanfare about its enormous battery life, but no sign of the cheaper 15R that was expected alongside it. Now we finally know that phone will be revealed on December 17th, alongside the OnePlus Pad Go 2 and Watch Lite. Bo…",
            "url": "https://www.theverge.com/news/827430/oneplus-15r-will-get-a-late-launch-next-month",
            "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/11/Ecosystem-All-Colours-Visual.png?quality=90&strip=all&crop=0,13.706994468677,100,72.586011062646",
            "publishedAt": "2025-11-24T11:40:00Z",
            "content": "<ul><li></li><li></li><li></li></ul>\r\nPlus the Pad Go 2 tablet, and a Watch Lite in Europe.\r\nPlus the Pad Go 2 tablet, and a Watch Lite in Europe.\r\nby\r\nDominic PrestonClose\r\nDominic Preston\r\nPosts fr… [+2354 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "sanujb6@gmail.com (Sanuj Bhatia) , Sanuj Bhatia",
            "title": "One UI 8.5 beta is now official for the Samsung Galaxy S25 series",
            "description": "Samsung has launched the One UI 8.5 beta for the Galaxy S25 series, based on Android 16 QPR2, now live in select regions including the US, UK, India, and more.",
            "url": "https://www.androidcentral.com/phones/samsung-galaxy/one-ui-8-5-beta-official-galaxy-s25-series",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/KcheodLFg6QKopSsJpvJSc-2048-80.jpg",
            "publishedAt": "2025-12-08T12:44:01Z",
            "content": "What you need to know\r\n<ul><li>One UI 8.5 brings major AI upgrades, improved photo editing, and better cross-device sharing features.</li><li>Samsung adds new Theft Protection tools and a redesigned … [+3282 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "India Orders Mobile Phones Preloaded With Government App To Ensure Cyber Safety",
            "description": "An anonymous reader shares a report: India's telecoms ministry has privately asked all smartphone makers to preload all new devices with a state-owned cyber security app, a government order showed, a move set to spark a tussle with Apple, which typically disl…",
            "url": "https://tech.slashdot.org/story/25/12/01/0633231/india-orders-mobile-phones-preloaded-with-government-app-to-ensure-cyber-safety",
            "urlToImage": "https://a.fsdn.com/sd/topics/security_64.png",
            "publishedAt": "2025-12-01T16:00:00Z",
            "content": "India's telecoms ministry has privately asked all smartphone makers to preload all new devices with a state-owned cyber security app, a government order showed, a move set to spark a tussle with Appl… [+466 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "World-Beating 55,000% Surge in India AI Stock Fuels Bubble Fears",
            "description": "The world's best-performing stock is turning into a cautionary tale for investors chasing outsized returns from the AI boom. From a report: Little-known until recently even within its home market of India, RRP Semiconductor Ltd. became a social-media obsessio…",
            "url": "https://tech.slashdot.org/story/25/12/18/1537226/world-beating-55000-surge-in-india-ai-stock-fuels-bubble-fears",
            "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
            "publishedAt": "2025-12-18T16:05:00Z",
            "content": "Little-known until recently even within its home market of India, RRP Semiconductor Ltd. became a social-media obsession as its shares surged more than 55,000% in the 20 months through Dec. 17 -- by … [+982 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Diaa Hadid",
            "title": "Greetings from Andhra Pradesh, India, where a fragrant food stand feeds working women",
            "description": "Far-Flung Postcards is a weekly series in which NPR's international team shares moments from their lives and work around the world.",
            "url": "https://www.npr.org/2025/12/10/nx-s1-5638423/indian-food-women-workers",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/1920x1080+0+0/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F74%2Feb%2F778f532b4074b87ae6c26a8715df%2Ffarflungpostcard-diaa.jpg",
            "publishedAt": "2025-12-10T13:38:22Z",
            "content": "Far-Flung Postcards is a weekly series in which NPR's international team shares moments from their lives and work around the world.\r\nIn the one-horse town of Marikavalasa in India's eastern coastal s… [+1069 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Stephan Shemilt",
            "title": "Smith drop an early blow in tale of two Ashes keepers",
            "description": "Why wicketkeeper Jamie Smith's drop on day two of second Ashes Test is potentially worrying for England.",
            "url": "https://www.bbc.com/sport/cricket/articles/cn8e1xm7gleo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/5563/live/a0b61500-d1a2-11f0-8c06-f5d460985095.jpg",
            "publishedAt": "2025-12-05T06:25:14Z",
            "content": "This is an important series for Smith, playing in an Ashes for the first time. He was promoted to the England team at the beginning of the 2024 summer at the expense of Ben Foakes and Jonny Bairstow … [+3076 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "The Associated Press",
            "title": "Putin says there are points he can't agree to in the U.S. proposal to end Ukraine war",
            "description": "Russian President Vladimir Putin made the remarks to an Indian broadcaster before landing in India for a state visit, but refused to elaborate on what Russia could accept or reject.",
            "url": "https://www.npr.org/2025/12/04/g-s1-100609/putin-ukraine-russia-war-us-peace-plan",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5458x3070+0+284/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F14%2Fbe%2F7f7f0583448fb37c3acc65246fe7%2Fap25336620346324.jpg",
            "publishedAt": "2025-12-04T16:57:23Z",
            "content": "Russian President Vladimir Putin says some proposals in a U.S. plan to end the war in Ukraine are unacceptable to the Kremlin, indicating in comments published Thursday that any deal is still some wa… [+3876 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Joel Rose",
            "title": "The DOT says it wants to make trucking safer, but some see an 'immigration raid'",
            "description": "The Department of Transportation wants tougher rules for commercial driver's licenses after a deadly crash involving a trucker from India. Critics say it's an immigration crackdown by another name.",
            "url": "https://www.npr.org/2025/11/28/nx-s1-5620965/commercial-drivers-licenses-cdl-dot-immigration",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3492x1964+0+124/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fa7%2F5b%2Fd2dbaa5847fcae4fce390177db8a%2Fap25317685501996.jpg",
            "publishedAt": "2025-11-28T10:00:00Z",
            "content": "If the Trump administration's crackdown on immigrant truckers had a face, it would be Harjinder Singh. The Indian-born Singh was behind the wheel of an 18-wheeler in Fort Pierce, Fla. in August when … [+5708 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Jaroslav Lukiv",
            "title": "India express train kills seven elephants crossing tracks",
            "description": "The collision happened early on Saturday in the north-eastern state of Assam, local officials say.",
            "url": "https://www.bbc.com/news/articles/c9qe2yln2nlo?xtor=AL-72-%5Bpartner%5D-%5Byahoo.north.america%5D-%5Bheadline%5D-%5Bnews%5D-%5Bbizdev%5D-%5Bisapi%5D",
            "urlToImage": "https://media.zenfs.com/en/bbc_us_articles_995/9e249764fc7e697a11b71c147b1739f3",
            "publishedAt": "2025-12-21T01:18:27Z",
            "content": "Seven wild Asian elephants, including calves, were killed when a high-speed train collided with a herd crossing the tracks in north-eastern India, local officials say.\r\nThey say another calf was inju… [+793 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "SHEIKH SAALIQ",
            "title": "India intensifies crackdown in disputed Kashmir after New Delhi bombing",
            "description": "Hours after police in Indian-controlled Kashmir released shopkeeper Bilal Ahmed Wani but kept his son in custody in this month's deadly New Delhi blast...",
            "url": "https://www.yahoo.com/news/articles/india-intensifies-crackdown-disputed-kashmir-025634769.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/jYR4WeWFYvXitlaB4WEwLA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://media.zenfs.com/en/ap.org/07fd4137c61da4544576607bfc8bcb4e",
            "publishedAt": "2025-11-26T02:56:34Z",
            "content": "NEW DELHI (AP) Hours after police in Indian-controlled Kashmir released shopkeeper Bilal Ahmed Wani but kept his son in custody in this month's deadly New Delhi blast investigation, Wani set himself … [+5765 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Flyingmag.com"
            },
            "author": "Zach Vasile",
            "title": "U.S., India Officials Spar Over 787 Crash Investigation",
            "description": "NTSB reportedly threatened to withdraw from the probe.",
            "url": "https://www.flyingmag.com/u-s-india-officials-spar-over-787-crash-investigation/",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ZdwYK554Orh5mMO2rdhtrQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://media.zenfs.com/en/flying_articles_763/712e62657033928b7eb61d9bc0196cd7",
            "publishedAt": "2025-12-01T21:05:07Z",
            "content": "Relations between American and Indian officials investigating the crash of an Air India 787 earlier this year have been tense, according to a new report, and there may be considerable daylight betwee… [+3735 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "India's Aviation Crisis Is All About Too Big to Tame",
            "description": "India's dominant airline IndiGo has cancelled roughly 3,000 flights since last week after new pilot fatigue regulations collided with technical issues and the seasonal schedule shift, stranding more than half a million passengers and forcing aviation authorit…",
            "url": "https://tech.slashdot.org/story/25/12/09/141227/indias-aviation-crisis-is-all-about-too-big-to-tame",
            "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
            "publishedAt": "2025-12-09T14:01:00Z",
            "content": "India's dominant airline IndiGo has cancelled roughly 3,000 flights since last week after new pilot fatigue regulations collided with technical issues and the seasonal schedule shift, stranding more … [+823 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Stevie Bonifield",
            "title": "Google Translate brings real-time speech translations to any headphones",
            "description": "Google Translate's latest update brings live speech translations, originally available only on the Pixel Buds, to any headphones you want, with support for over 70 languages. It's rolling out today in beta and just requires a compatible Android phone with the…",
            "url": "https://www.theverge.com/news/843483/google-translate-live-speech-translations-headphones",
            "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/12/google-translate-text-update-12-12-25.jpg?quality=90&strip=all&crop=0%2C3.4613147178592%2C100%2C93.077370564282&w=1200",
            "publishedAt": "2025-12-12T18:11:14Z",
            "content": "<ul><li></li><li></li><li></li></ul>\r\nLive speech translations were once only on the Pixel Buds.\r\nLive speech translations were once only on the Pixel Buds.\r\nby\r\nStevie BonifieldClose\r\nStevie Bonifie… [+2679 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "RAJESH ROY",
            "title": "Putin's visit highlights Indian imports of discounted Russian oil in the face of US sanctions",
            "description": "Russian President Vladimir Putin will be in India this week for a summit aimed at deepening economic, defense and energy ties, a visit that will also test...",
            "url": "https://www.yahoo.com/news/articles/indias-oil-imports-other-issues-050535694.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/pXXKrTI.pEiFTf5pj1pK_A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04Mzc7Y2Y9d2VicA--/https://media.zenfs.com/en/ap.org/33c2908b9f44c305f5a6fcd665a88314",
            "publishedAt": "2025-12-03T05:05:35Z",
            "content": "NEW DELHI (AP) Russian President Vladimir Putin will be in India this week for a summit aimed at deepening economic, defense and energy ties, a visit that will also test New Delhis efforts to balance… [+5765 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Dpa-international.com"
            },
            "author": "DPA",
            "title": "Putin rules out return to G7",
            "description": "Russia is not looking to rejoin the Group of Seven (G7) leading industrial nations, Russian President Vladimir Putin said during a visit to India on Thursday...",
            "url": "https://dpa-international.com/politics/urn:newsml:dpa.com:20090101:251204-99-826753/",
            "urlToImage": "https://media.zenfs.com/en/dpa_international_526/9e6c4175ff0729f87c8b97a50c04e7a1",
            "publishedAt": "2025-12-04T12:42:30Z",
            "content": "Russia is not looking to rejoin the Group of Seven (G7) leading industrial nations, Russian President Vladimir Putin said during a visit to India on Thursday.\r\nThe G7's share of the global economy ha… [+1251 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "RAJESH ROY",
            "title": "India and New Zealand finalize a free trade agreement, eyeing growth as global uncertainties persist",
            "description": "India and New Zealand reached a free trade deal, seeking to deepen economic ties and shore up growth at a time of mounting global trade uncertainties...",
            "url": "https://finance.yahoo.com/news/india-zealand-finalize-free-trade-063750669.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/EDOea5rXHDOwFPqIqKpmQA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/2118270ce607a4b47f1ad1c61593dc7b",
            "publishedAt": "2025-12-22T06:37:50Z",
            "content": "NEW DELHI (AP) India and New Zealand reached a free trade deal, seeking to deepen economic ties and shore up growth at a time of mounting global trade uncertainties, officials said Monday.\r\nThe move … [+2581 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "The Inevitable Shape of Cheap Online Retail",
            "description": "Pinduoduo in China, Shopee in Southeast Asia, and Meesho in India operate in markets that could hardly be more different -- an upper-middle-income industrial state, a stitched-together archipelago of under-banked economies, and a country where three-quarters …",
            "url": "https://slashdot.org/story/25/12/09/1941236/the-inevitable-shape-of-cheap-online-retail",
            "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
            "publishedAt": "2025-12-09T20:01:00Z",
            "content": "Pinduoduo in China, Shopee in Southeast Asia, and Meesho in India operate in markets that could hardly be more different -- an upper-middle-income industrial state, a stitched-together archipelago of… [+1219 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "The Associated Press",
            "title": "A fire at a popular nightclub in India's Goa state kills at least 25, officials say",
            "description": "At least 25 people, including tourists, were killed in a fire at a popular nightclub in India's Goa state, the state's chief minister said Sunday.",
            "url": "https://www.npr.org/2025/12/07/nx-s1-5636547/a-fire-at-a-popular-nightclub-in-indias-goa-state-kills-at-least-25-officials-say",
            "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/8000x4500+0+417/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Ff4%2Faf%2F64081053481b92f24e77705775d3%2Fap25341249180197.jpg",
            "publishedAt": "2025-12-07T07:51:59Z",
            "content": "NEW DELHI At least 25 people, including tourists, were killed in a fire at a popular nightclub in India's Goa state, the state's chief minister said Sunday.\r\nThe blaze occurred just past midnight in … [+1946 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Putin says Russia disagrees with parts of US plan to end Ukraine war",
            "description": "The Russian leader's comments come as US and Ukrainian negotiators are due to hold a new round of talks.",
            "url": "https://www.bbc.com/news/articles/cgexgwr1wrro",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0b94/live/99846e30-d12a-11f0-9d18-614b3678ebf8.jpg",
            "publishedAt": "2025-12-04T17:11:05Z",
            "content": "President Vladimir Putin has said Moscow disagrees with parts of a US plan on how to end the Russia-Ukraine war, after talks with US negotiators in the Kremlin.\r\n\"At times we said that yes, we can di… [+4201 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Stephan Shemilt",
            "title": "Barking out orders: Stokes wants England to 'show a bit of dog'",
            "description": "Ben Stokes asks his England team to “show a bit of dog” in the crucial third Ashes Test against Australia in Adelaide.",
            "url": "https://www.bbc.com/sport/cricket/articles/ceq1vl3y2pro",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/4116/live/24af2f50-d9a4-11f0-adaa-f3e2bb1c1ebb.jpg",
            "publishedAt": "2025-12-15T12:00:21Z",
            "content": "Ben Stokes has asked his England team to \"show a bit of dog\" in the crucial third Ashes Test against Australia in Adelaide.\r\nEngland are 2-0 down and must end a 17-match winless run in this country a… [+1927 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "High-speed passenger train kills 7 elephants crossing railway tracks in northeast India",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_f7885d30-e9bf-4840-9e13-c882ed9bfd05",
            "urlToImage": null,
            "publishedAt": "2025-12-20T05:42:51Z",
            "content": "If you click 'Accept all', we and our partners, including 242 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+714 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Uproar in India over Bihar chief minister pulling down Muslim woman’s hijab",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_b4540f23-0309-4ae4-87b0-396b07dbad03",
            "urlToImage": null,
            "publishedAt": "2025-12-18T11:59:38Z",
            "content": "If you click 'Accept all', we and our partners, including 242 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+714 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Nightclub fire kills 23 in Goa, India",
            "description": "Staff and tourists are among the dead, authorities say and their nationalities are not yet known.",
            "url": "https://www.bbc.com/news/articles/cdj82d0nd4eo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6fc8/live/c0f5abd0-d2fd-11f0-8c06-f5d460985095.jpg",
            "publishedAt": "2025-12-06T23:50:31Z",
            "content": "At least 23 people have been killed in a fire at a popular nightclub in the coastal region of Goa, India, local officials say.\r\nThe majority of victims are believed to be staff at the club in Arpora,… [+1557 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Exclusive-Mexico tariff hike to hit $1 billion India car exports despite automaker lobbying",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_4c88d858-c53a-43d5-b148-1f3aacd0d1f2",
            "urlToImage": null,
            "publishedAt": "2025-12-11T08:43:05Z",
            "content": "If you click 'Accept all', we and our partners, including 241 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+714 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "RAJESH ROY",
            "title": "Trade unions in India stage nationwide protests against new labor codes",
            "description": "A coalition of 10 major Indian trade unions mounted nationwide protests Wednesday against the government’s rollout of new labor codes, saying the sweeping...",
            "url": "https://www.yahoo.com/news/articles/trade-unions-india-stage-nationwide-081726092.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/E5CkvzsFNuGGfObZGEkTgw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://media.zenfs.com/en/ap.org/403a193cdee41d29f19c382f943b3d43",
            "publishedAt": "2025-11-26T08:17:26Z",
            "content": "NEW DELHI (AP) A coalition of 10 major Indian trade unions mounted nationwide protests Wednesday against the governments rollout of new labor codes, saying the sweeping changes were deceptive fraud a… [+2852 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "India withdraws pilot restrictions after largest airline cancels flights and disrupts airports",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_7faeed88-ff50-451b-abcc-7ebf96c091cb",
            "urlToImage": null,
            "publishedAt": "2025-12-05T07:43:17Z",
            "content": "If you click 'Accept all', we and our partners, including 240 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+714 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "Microsoft investing $17.5 billion in India for AI and cloud infrastructure",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_37894102-a76e-4a85-8bad-231a3b6b053d",
            "urlToImage": null,
            "publishedAt": "2025-12-09T14:33:33Z",
            "content": "If you click 'Accept all', we and our partners, including 241 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+714 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "People",
            "title": "23 People Killed After Fire Breaks Out at Popular Nightclub: 'A Very Painful Day'",
            "description": "Twenty-three people were killed in a fire at a popular nightclub in the Indian state of Goa after a gas canister exploded. According to Press Trust of India ...",
            "url": "https://www.yahoo.com/entertainment/videos/23-people-killed-fire-breaks-165803468.html",
            "urlToImage": "https://media.zenfs.com/en/video.people.time.com/45f036091297b7ceb72f9833226aaf5b",
            "publishedAt": "2025-12-07T16:58:03Z",
            "content": "Twenty-three people were killed in a fire at a popular nightclub in the Indian state of Goa after a gas canister exploded. According to Press Trust of India (PTI), per Al Jazeera and The Guardian, th… [+274 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Online classes and construction ban as toxic haze covers Delhi",
            "description": "A toxic haze engulfed Delhi on Monday, affecting visibility on the road and delaying flights and trains.",
            "url": "https://www.bbc.com/news/articles/c04v39dk053o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0ab0/live/5cefe9f0-d985-11f0-aae2-2191c0e48a3b.jpg",
            "publishedAt": "2025-12-15T06:29:59Z",
            "content": "Schools in Delhi and surrounding areas have moved classes online and construction has been banned as the Indian capital grapples with hazardous air quality.\r\nOn Monday morning, a toxic haze engulfed … [+2489 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Yei Ling Ma",
            "title": "Farmers issue warning as crucial food crop becomes nearly impossible to grow: 'At least a 50% drop in overall production'",
            "description": "Costs are eventually passed on to the average consumer.",
            "url": "https://www.yahoo.com/news/articles/farmers-issue-warning-crucial-food-210000271.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/B2Eu.R8VAzz.FhyFK70IPQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02ODY7Y2Y9d2VicA--/https://media.zenfs.com/en/the_cool_down_737/2edbbe6889cf53504360af374d97ec76",
            "publishedAt": "2025-11-30T21:00:00Z",
            "content": "Echoing a familiar fate shared by many farmers globally this year, grape farmers in India have projected at least a 50% decline in grape production due to adverse weather, the Times of India reported… [+3547 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "MUNIR AHMED",
            "title": "Pakistan's top general calls on Afghanistan to pick between ties with Islamabad or Pakistani Taliban",
            "description": "Pakistan’s newly appointed armed forces chief called on Afghanistan’s Taliban government on Monday to choose between maintaining ties with Islamabad or...",
            "url": "https://www.yahoo.com/news/articles/pakistans-top-general-calls-afghanistan-133648669.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/rc9wWaxDHHCow8a5i9fDLw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU7Y2Y9d2VicA--/https://media.zenfs.com/en/ap.org/0bf7b32629c03c0991217cbedb66f6f7",
            "publishedAt": "2025-12-08T13:36:48Z",
            "content": "ISLAMABAD (AP) Pakistans newly appointed armed forces chief called on Afghanistans Taliban government on Monday to choose between maintaining ties with Islamabad or supporting the Pakistani Taliban, … [+2765 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Bruce Schneier and Zach Rosson",
            "title": "How Governments Turn the Internet Into a Weapon",
            "description": "From protests to elections, governments are increasingly pulling the internet plug on entire populations. Connectivity is slowly becoming a tool of control, not a guarantee.",
            "url": "https://gizmodo.com/how-governments-turn-the-internet-into-a-weapon-2000699263",
            "urlToImage": "https://gizmodo.com/app/uploads/2025/12/tanzania_internet_blackout-1200x675.jpg",
            "publishedAt": "2025-12-13T12:00:17Z",
            "content": "For two days in September, Afghanistan had no internet. No satellite failed; no cable was cut. This was a deliberate outage, mandated by the Taliban government. It followed a more localized shutdown … [+7581 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "India's Tata signs up Intel as major customer for $14 billion chip foray",
            "description": "India's Tata Electronics has secured ‌Intel as a prospective customer for its upcoming chip facilities, potentially signalling the U.S. chipmaker's confidence...",
            "url": "https://finance.yahoo.com/news/indias-tata-signs-intel-first-132639361.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/4428785d8a59c09c747e43071833e3fe",
            "publishedAt": "2025-12-08T13:26:39Z",
            "content": "(Corrects headline and paragraph 1 to say that Intel is one of the major customers, not the first)\r\nDec 8 (Reuters) - India's Tata Electronics has secured Intel as a prospective customer for its upco… [+838 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Elijah McKee",
            "title": "Coca-Cola unveils innovative 'reverse vending machines' that could be game-changers for consumers: 'Set a precedent'",
            "description": "\"We're enabling people to take simple yet meaningful steps.\"",
            "url": "https://www.yahoo.com/news/coca-cola-unveils-innovative-reverse-104539538.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/UMOfDYCVJX07JXBfJF6.Cw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE7Y2Y9d2VicA--/https://media.zenfs.com/en/the_cool_down_737/34163b439ffb8c7bbd6ca493d962d3f9",
            "publishedAt": "2025-11-27T11:30:00Z",
            "content": "What if a vending machine could recycle your plastic bottles for you after you finish a drink?\r\nA new Coca-Cola India project brings that idea to life with easy-to-use \"reverse vending machines\" that… [+2002 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Airbus Issues Major A320 Recall, Threatening Global Flight Disruption",
            "description": "Europe's Airbus said on Friday it was ordering immediate repairs to 6,000 of its widely used A320 family of jets in a sweeping recall affecting more than half the global fleet, threatening upheaval during the busiest travel weekend of the year in the United S…",
            "url": "https://news.slashdot.org/story/25/11/29/0515215/airbus-issues-major-a320-recall-threatening-global-flight-disruption",
            "urlToImage": "https://a.fsdn.com/sd/topics/transportation_64.png",
            "publishedAt": "2025-11-29T05:15:00Z",
            "content": "The setback appears to be among the largest recalls affecting Airbus in its 55-year history and comes weeks after the A320 overtook the Boeing 737 as the most-delivered model. At the time Airbus issu… [+489 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Strava Puts Popular 'Year In Sport' Recap Behind an $80 Paywall",
            "description": "An anonymous reader quotes a report from Ars Technica: Earlier this month, Strava, the popular fitness-tracking app, released its annual \"Year in Sport\" wrap-up -- a cutesy, animated series of graphics summarizing each user's athletic achievements. But this y…",
            "url": "https://news.slashdot.org/story/25/12/19/2158235/strava-puts-popular-year-in-sport-recap-behind-an-80-paywall",
            "urlToImage": "https://a.fsdn.com/sd/topics/money_64.png",
            "publishedAt": "2025-12-19T23:40:00Z",
            "content": "Earlier this month, Strava, the popular fitness-tracking app, released its annual \"Year in Sport\" wrap-up -- a cutesy, animated series of graphics summarizing each user's athletic achievements. But t… [+794 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Bruce Gil",
            "title": "Tesla’s Holiday Update Lets You Put Grok in Charge of Mapping Out Directions",
            "description": "Tesla announced several new features for its cars in its 2025 Holiday Update today.",
            "url": "https://gizmodo.com/teslas-holiday-update-lets-you-put-grok-in-charge-of-mapping-out-directions-2000696891",
            "urlToImage": "https://gizmodo.com/app/uploads/2025/10/tesla-10-and-2-1200x675.jpg",
            "publishedAt": "2025-12-08T20:35:22Z",
            "content": "Tesla drivers will soon be able to turn to Grok for directions; whether that’s a wrong turn remains to be seen.\r\nThe EV maker announced its 2025 Holiday update today on Elon Musk’s X, highlighting se… [+2509 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Leslie Sattler",
            "title": "Coca-Cola, PepsiCo forced to change packaging after new government mandate: 'We may have to take legal recourse'",
            "description": "\"The timing is bad, ahead of peak summer.\"",
            "url": "https://www.yahoo.com/news/articles/coca-cola-pepsico-forced-change-104509894.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/TdaT1m5fvRxFmleAoiOqWw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://media.zenfs.com/en/the_cool_down_737/6b44dda148c2710272470e111f9b05a4",
            "publishedAt": "2025-11-26T11:30:00Z",
            "content": "India is taking bold steps to reduce plastic waste with a new rule requiring beverage giants to use recycled materials in their packaging, The Economic Times reported.\r\nGoing forward, companies such … [+1788 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Pranav Dixit",
            "title": "Amazon faces global Black Friday protests as workers push back on warehouse conditions, AI expansion, and ICE ties",
            "description": "Black Friday sees Amazon workers worldwide protesting unsafe conditions, climate impact, AI growth, and ICE ties.",
            "url": "https://www.businessinsider.com/amazon-black-friday-protests-demand-safe-conditions-ai-accountability-2025-11",
            "urlToImage": "https://i.insider.com/692a27b4e1a9cbb014df307e?width=1200&format=jpeg",
            "publishedAt": "2025-11-28T23:05:10Z",
            "content": "Activists of the Sommilito Garments Sramik Federation (Combined Garments Workers Federation) stage a protest procession against Amazon Company under the title ''Make Amazon Pay,'' demanding that Amaz… [+6661 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "India travel chaos worsens as IndiGo cancels hundreds of flights",
            "description": "IndiGo, India's largest carrier, has said operations will return to full normalcy only by 10 February.",
            "url": "https://www.bbc.com/news/articles/clyz18z1gk0o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a520/live/fe6a6440-d1b0-11f0-83cd-5b415fb0080a.jpg",
            "publishedAt": "2025-12-05T08:31:53Z",
            "content": "India's travel chaos has worsened after the country's largest airline IndiGo cancelled hundreds of scheduled flights on Friday after three days of widespread disruption across its network.\r\nThe carri… [+2117 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Three arrested in India after police crack $800,000 bank heist",
            "description": "Armed men posing as bank officials robbed a van transporting cash between bank branches in Bengaluru city.",
            "url": "https://www.bbc.com/news/articles/cy8j4m45yx2o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e250/live/492bce90-c7ae-11f0-83e1-2f64c544cba6.jpg",
            "publishedAt": "2025-11-22T16:28:18Z",
            "content": "Three people have been arrested in India after a daring 70m rupees ($800,000; £600,000) heist in which armed men posing as central bank officials robbed an ATM cash van.\r\nOn Saturday police in the so… [+1507 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Putin says Russia ready to supply 'uninterrupted' fuel to India",
            "description": "Deals have been signed in civil nuclear energy and critical minerals during the Russian PM's stay in India.",
            "url": "https://www.bbc.com/news/articles/c4g482m3yyzo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3c5c/live/b75f4f30-d1c3-11f0-a892-01d657345866.jpg",
            "publishedAt": "2025-12-05T12:50:31Z",
            "content": "Russian President Vladimir Putin has said Moscow is ready to provide \"uninterrupted shipments\" of fuel to India, as Delhi faces pressure from the US to stop buying Russian oil.\r\nPutin, speaking along… [+3980 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Watch: Furious fans invade pitch at Messi event in India",
            "description": "Thousands of adoring supporters had paid up to 12,000 rupees (£100; $133) to catch a glimpse of the football star.",
            "url": "https://www.bbc.com/news/videos/c80xx09k485o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/327e/live/3b560e90-d80f-11f0-aae2-2191c0e48a3b.jpg",
            "publishedAt": "2025-12-13T11:20:50Z",
            "content": "The first stop on Lionel Messi's tour of India erupted into chaos as fans ripped up stadium seats and threw water bottles onto the pitch after his appearance at Kolkata's Salt Lake stadium was cut sh… [+417 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Bondi Beach gunman originally from India, police say",
            "description": "Sajid Akram had \"limited\" contact with his family in Hyderabad since moving to Australia 27 years ago, a police official said.",
            "url": "https://www.bbc.com/news/articles/cwyvxke3wgko",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e969/live/9237d310-da7b-11f0-b60a-5db3d22facb6.jpg",
            "publishedAt": "2025-12-16T14:11:01Z",
            "content": "One of the two men suspected of carrying out a mass shooting at Bondi Beach was originally from southern India but had \"limited contact\" with his family there, police sources have said.\r\nSajid Akram,… [+2858 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Smooth end to Messi India tour after Kolkata chaos",
            "description": "Messi's India tour had a chaotic start after angry fans in Kolkata damaged a stadium after failing to catch a glimpse of him.",
            "url": "https://www.bbc.com/news/articles/cdxwg94v4veo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e0ae/live/091bbe50-d9b0-11f0-a8dc-93c15fe68710.jpg",
            "publishedAt": "2025-12-15T11:57:31Z",
            "content": "Football superstar Lionel Messi has wrapped up his three-day India tour in pollution-choked Delhi, after a chaotic opening in Kolkata.\r\nOn Monday, thousands of fans gathered in a Delhi stadium to get… [+2943 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Food & Wine"
            },
            "author": "Stacey Leasca",
            "title": "FDA Issues New Safety Warning After Finding 9 More Lead-Leaching Cookware Brands",
            "description": "The agency says the newly identified products were found to leach enough lead to render food unsafe, prompting an expansion of its ongoing investigation.",
            "url": "https://www.foodandwine.com/fda-adds-9-cookware-brands-to-lead-contamination-recall-11859436",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Vi0UyukCzb9wyOWf07U5wA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://media.zenfs.com/en/food_wine_804/703da10ec3a82d98f0b4c2f35ee1099d",
            "publishedAt": "2025-12-01T20:29:00Z",
            "content": "Key Points\r\n<ul><li>The FDA updated its list of aluminum and brass cookware that can leach dangerous levels of lead into food, expanding the recalls from August and November with multiple new brands.… [+5149 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Watch: BBC reports from scene of deadly Goa nightclub fire",
            "description": "India Editor Vikas Pandey visits the Indian nightclub where 25 people were killed in a blaze.",
            "url": "https://www.bbc.com/news/videos/cx2pqq15x85o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ab21/live/dd296d20-d341-11f0-a892-01d657345866.jpg",
            "publishedAt": "2025-12-07T08:03:56Z",
            "content": "Staff and tourists are among 25 people who have been killed in a fire at a popular nightclub in Goa, India.\r\nAuthorities are investigating cause of the fire, which caused the venue, Birch, to be engu… [+171 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Antonio Vallejo",
            "title": "Las Big Tech están convirtiendo a la India en la nueva niña bonita de la expansión de su IA",
            "description": "Microsoft acaba de anunciar una inversión de 17.500 millones de dólares en India durante los próximos cuatro años, la mayor del gigante tecnológico en Asia. Amazon ha seguido sus pasos con 35.000 millones de dólares hasta 2030. Google ya había anunciado 15.00…",
            "url": "https://www.xataka.com/empresas-y-economia/big-tech-estan-convirtiendo-a-india-nueva-nina-bonita-expansion-su-ia-tenemos-muchas-dudas",
            "urlToImage": "https://i.blogs.es/a912a0/india/840_560.jpeg",
            "publishedAt": "2025-12-10T15:30:36Z",
            "content": "Microsoft acaba de anunciar una inversión de 17.500 millones de dólares en India durante los próximos cuatro años, la mayor del gigante tecnológico en Asia. Amazon ha seguido sus pasos con 35.000 mil… [+4557 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Marquez",
            "title": "La India exigirá preinstalar una app imborrable en todos los móviles. Y eso supone un desafío serio para Apple",
            "description": "En el debate tecnológico actual, pocas cuestiones generan tanta atención como la privacidad. India ha puesto en marcha un cambio significativo: incorporar una aplicación estatalque permanecerá en móviles iOS y Android sin posibilidad de borrarla. La medida co…",
            "url": "https://www.xataka.com/seguridad/india-exigira-preinstalar-app-imborrable-todos-moviles-eso-supone-desafio-serio-para-apple",
            "urlToImage": "https://i.blogs.es/0d7666/apple-hebbal-india-media-preview-today-at-apple/840_560.jpeg",
            "publishedAt": "2025-12-02T07:30:50Z",
            "content": "En el debate tecnológico actual, pocas cuestiones generan tanta atención como la privacidad. India ha puesto en marcha un cambio significativo: incorporar una aplicación estatalque permanecerá en móv… [+3531 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Meara Isenberg",
            "title": "YouTube Boots Two Channels for Posting Fake AI Film Trailers",
            "description": "The two channels used AI to create fake trailers and had a combined 2 million subscribers, according to Deadline.",
            "url": "https://www.cnet.com/tech/services-and-software/youtube-boots-two-channels-for-posting-fake-ai-film-trailers/",
            "urlToImage": "https://www.cnet.com/a/img/resize/706b82c83b36f0d2a6259d56f7481334da0c1699/hub/2022/03/01/209a4fbc-5b8d-4a02-bef0-9b38ab301362/youtube-logo-6614.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2025-12-18T22:22:05Z",
            "content": "YouTube has taken action against two channels that used AI to produce fake movie trailers. A spokesperson for YouTube confirmed to CNET that the channels, Screen Culture and KH Studio, have been shut… [+932 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "India tells smartphone makers to put state-run cyber safety app on new devices",
            "description": "India wants all smartphone makers to pre-install new devices with a state-owned cyber security app.",
            "url": "https://www.bbc.com/news/articles/cedxyvx74p4o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/90d2/live/51ed9140-cf37-11f0-a052-bdc1808acb03.jpg",
            "publishedAt": "2025-12-02T07:16:03Z",
            "content": "Meryl Sebastian &amp; Abhishek Dey\r\nIndia has ordered all new smartphones to come pre-loaded with a non-removable, state-run cybersecurity app, sparking privacy concerns.\r\nUnder the order - passed la… [+4201 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "By Munsif Vengattil and Aditya Kalra",
            "title": "Amnesty says India's review of location-tracking plan 'deeply concerning'",
            "description": "By Munsif Vengattil and Aditya Kalra BENGALURU, Dec 8 (Reuters) - Amnesty International has said India's review of a telecom industry proposal to mandate...",
            "url": "https://www.yahoo.com/news/articles/amnesty-says-indias-review-location-100819470.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/2207f5ce236bbd2321f6f4b78c1cf183",
            "publishedAt": "2025-12-08T10:08:19Z",
            "content": "By Munsif Vengattil and Aditya Kalra\r\nBENGALURU, Dec 8 (Reuters) - Amnesty International has said India's review of a telecom industry proposal to mandate always-on satellite location tracking on pho… [+2167 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Marcus Mendes",
            "title": "Apple challenges potential $38B antitrust fine in India",
            "description": "Apple is seeking to invalidate a new Indian antitrust penalty formula that allows fines to be based on a company’s global turnover rather than its local revenue. Here are the details.\n\n\n\n more…",
            "url": "https://9to5mac.com/2025/11/26/apple-challenges-potential-38-billion-antitrust-fine-in-india/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/03/apple-india.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2025-11-26T20:53:28Z",
            "content": "Apple is seeking to invalidate a new Indian antitrust penalty formula that allows fines to be based on a companys global turnover rather than its local revenue. Here are the details.\r\nAs reported by … [+1842 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Big tech bets big on AI - but can India keep pace in the global race?",
            "description": "Experts have called India a hedge against AI - reflecting the absence of Indian companies in the global boom.",
            "url": "https://www.bbc.com/news/articles/cd74gjw1j11o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/cc0f/live/54434780-d0ec-11f0-b0cc-cf4d0e5d41e2.jpg",
            "publishedAt": "2025-12-11T02:46:08Z",
            "content": "This week, tech giants Amazon and Microsoft pledged an eye-popping $50bn-plus combined investment in India, putting artificial intelligence (AI) in the spotlight.\r\nMicrosoft's Satya Nadella announced… [+6531 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Christine Dulion",
            "title": "Officials stunned as major dam reaches maximum levels: 'We are keeping a close watch'",
            "description": "\"Any minor surplus will be discharged.\"",
            "url": "https://www.yahoo.com/news/articles/officials-stunned-major-dam-reaches-100000726.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/IDA61_5F3.bCBf.fyXz0uA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY7Y2Y9d2VicA--/https://media.zenfs.com/en/the_cool_down_737/4ed027ca0899cc6120122059cdc4e3b8",
            "publishedAt": "2025-12-05T10:00:00Z",
            "content": "Officials in the sacred hill town of Tirumala, India, are celebrating a much-needed victory now that every major local dam is brimming with water after days of heavy rain.\r\nTriggered by a low-pressur… [+2109 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "nickodiaz@sbcglobal.net (Nickolas Diaz) , Nickolas Diaz",
            "title": "This is everything in Google Translate's three big updates rolling out for Android",
            "description": "Google Translate's update dropped three major updates to boost its real-time translation capabilities and more for practice sessions.",
            "url": "https://www.androidcentral.com/apps-software/this-is-everything-in-google-translates-three-big-updates-rolling-out-for-android",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/mtVpEHDgVrdyBbxQF6XseR-2560-80.jpg",
            "publishedAt": "2025-12-12T20:09:39Z",
            "content": "What you need to know\r\n<ul><li>Google announced an update for its Translate app on Android, bringing improved translations for slang and local expressions.</li><li>The app, which leverages Gemini's i… [+3037 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "sanujb6@gmail.com (Sanuj Bhatia) , Sanuj Bhatia",
            "title": "Samsung's new One UI 8.5 beta for Galaxy S25 cleans up a lot of issues",
            "description": "Samsung's One UI 8.5 beta 2 for the Galaxy S25 focuses on bug fixes and stability improvements.",
            "url": "https://www.androidcentral.com/phones/samsung-galaxy/one-ui-8-5-beta-2-galaxy-s25",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/DLipdaEkaEHA3q6rAngzoF-2560-80.jpg",
            "publishedAt": "2025-12-22T12:20:40Z",
            "content": "What you need to know\r\n<ul><li>Samsung has rolled out One UI 8.5 beta 2 for Galaxy S25 devices, adding bug fixes and expanding the beta to more regions.</li><li>The One UI 8.5 beta program is now ava… [+3376 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cool Hunting"
            },
            "author": "Evan Orensten",
            "title": null,
            "description": "Classic, chic everyday carry two handled shopping tote bags from Moismont, hand woven in India. The totes come in multiple colors and patterns, and feature a large inner, phone and key pockets. 100…",
            "url": "http://coolhunting.com/buy/424472/",
            "urlToImage": "https://coolhunting.com/wp-content/uploads/2025/12/cabas-n046-bari-holi-yellow-sac4504606-689734.jpeg",
            "publishedAt": "2025-12-01T09:37:25Z",
            "content": "Ben SchottSchott’s Significa, A Miscellany of Secret Languages, is the latest from CH friend Ben Schott, master of minutia, trivia, erudite history and wit. From a thorough vexillology of pride (flag… [+403 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Starmer to host Zelensky for Ukraine talks in London",
            "description": "The pair will be joined by France's Emmanuel Macron and Germany's Friedrich Merz on Monday.",
            "url": "https://www.bbc.com/news/articles/c2k4z9nwz4yo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d1d3/live/29bd2830-d38c-11f0-a903-6b84400fef5f.jpg",
            "publishedAt": "2025-12-08T00:32:31Z",
            "content": "Sir Keir Starmer will host Volodymyr Zelensky in London on Monday amid a continuing deadlock in negotiations to end the war in Ukraine.\r\nThe Ukrainian president will attend the talks in Downing Stree… [+3434 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Google Translate Expands Live Translation To All Earbuds On Android",
            "description": "An anonymous reader quotes a report from Ars Technica: Google has increasingly moved toward keeping features locked to its hardware products, but the Translate app is bucking that trend. The live translate feature is breaking out of the Google bubble with sup…",
            "url": "https://tech.slashdot.org/story/25/12/12/2125205/google-translate-expands-live-translation-to-all-earbuds-on-android",
            "urlToImage": "https://a.fsdn.com/sd/topics/android_64.png",
            "publishedAt": "2025-12-12T23:00:00Z",
            "content": "Google has increasingly moved toward keeping features locked to its hardware products, but the Translate app is bucking that trend. The live translate feature is breaking out of the Google bubble wit… [+1102 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "UN climate talks fail to secure new fossil fuel promises",
            "description": "Nearly 200 countries attended COP30, which aimed to commit the world to take more action on climate change.",
            "url": "https://www.bbc.com/news/articles/c75vn7yel73o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6ded/live/18a04ba0-c7e2-11f0-a715-415645a54121.jpg",
            "publishedAt": "2025-11-22T20:57:21Z",
            "content": "Georgina RannardClimate and science correspondent, Belém, Brazil\r\nFollowing bitter rows, the UN climate summit COP30 in Belém, Brazil has ended with a deal that contains no direct reference to the fo… [+3045 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Stephan Shemilt",
            "title": "Hayden criticises Archer for bringing a pillow to Gabba",
            "description": "Jofra Archer is criticised by former Australia opener Matthew Hayden for the \"shocking look\" of arriving for the third day of the second Ashes Test with a pillow.",
            "url": "https://www.bbc.com/sport/cricket/articles/c0q58yj40z2o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/30b7/live/adce1760-d265-11f0-a892-01d657345866.jpg",
            "publishedAt": "2025-12-06T06:22:37Z",
            "content": "Jofra Archer has been criticised by former Australia opener Matthew Hayden for the \"shocking look\" of arriving for the third day of the second Ashes Test with a pillow.\r\nWith England needing four wic… [+2435 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda) , Harish Jonnalagadda",
            "title": "All phones sold in India will be pre-installed with a state-owned 'security' app that needs access to all phone permissions — and you can't delete or uninstall it",
            "description": "The Indian government says the Sanchar Saathi app is to \"empower\" mobile subscribers in the country, but it could just as easily be used for nefarious reasons.",
            "url": "https://www.androidcentral.com/phones/india-mandates-pre-installation-of-a-state-owned-sanchar-saathi-app-on-all-phones",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/SMH5HGDqJmCW7itr2ejANB-2560-80.jpg",
            "publishedAt": "2025-12-02T04:09:47Z",
            "content": "<ul><li>The Indian government's Department of Telecommunications is ordering phone manufacturers to pre-install the Sanchar Saathi app.</li><li>Android device manufacturers need to pre-install the ap… [+2615 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Vaishali Gauba",
            "title": "I used to love traveling solo. Now that I'm in my 30s, I might never do it again.",
            "description": "When I was in my 20s, I loved problem-solving and exploring new places on solo trips. Now that I'm older, travel is more about relaxing with family.",
            "url": "https://www.businessinsider.com/solo-travel-used-to-be-fun-older-now-not-interested-2025-12",
            "urlToImage": "https://i.insider.com/6930761604d0f0a114f15458?width=1200&format=jpeg",
            "publishedAt": "2025-12-15T14:23:01Z",
            "content": "Solo travel isn't as fulfilling to me in my 30s as it was in my 20s.Vaishali Gauba\r\n<ul><li>In my 20s, I could take solo trips on a day's notice, visiting places like the Himalayas.</li><li>Now I'm i… [+3689 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Paula Conway",
            "title": "I flew in Air India's posh business-class seat for 15 hours. I didn't want to get off the plane.",
            "description": "My long-haul international flight in Air India's business class had great suite-style seats, storage, and amenities that made the upgrade worth it.",
            "url": "https://www.businessinsider.com/air-india-business-class-long-flight-review-newark-new-delhi-2025-12",
            "urlToImage": "https://i.insider.com/6914e6ef89026fbb4d0d8554?width=1200&format=jpeg",
            "publishedAt": "2025-12-03T14:29:22Z",
            "content": "I didn't want to leave Air India's business class, even after my long-haul international flight.Nicolas Economou/NurPhoto via Getty Images; Paula Conway\r\n<ul><li>Earlier this year, I flew 15 hours in… [+4406 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Hartley Charlton",
            "title": "Apple Fitness+ Comes to 28 New Countries Today",
            "description": "Apple Fitness+ today expanded to 28 new markets in the service's largest international rollout since launch, accompanied by new language dubbing and a K-Pop music genre. \n\n\n\n\n\nThe service today became available in Norway, Poland, the Philippines, Sweden, Viet…",
            "url": "https://www.macrumors.com/2025/12/15/apple-fitness-comes-to-28-new-countries-today/",
            "urlToImage": "https://images.macrumors.com/t/W7I-BB11Pd7YvYUATOLQYsOh5-M=/3840x/article-new/2025/12/Apple-Fitness-Plus-expansion-hero.jpg",
            "publishedAt": "2025-12-15T16:45:42Z",
            "content": "Apple Fitness+ today expanded to 28 new markets in the service's largest international rollout since launch, accompanied by new language dubbing and a K-Pop music genre. \r\nThe service today became av… [+1492 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Oscar Gonzalez",
            "title": "Tomb Raider Returns With Catalyst and Legacy of Atlantis",
            "description": "New and old adventures are coming for Lara Croft fans the next two years.",
            "url": "https://www.cnet.com/tech/gaming/tomb-raider-returns-with-catalyst-and-legacy-of-atlantis/",
            "urlToImage": "https://www.cnet.com/a/img/resize/43c725667a20b2a78d58a1cb666de64762a1cc5a/hub/2025/12/12/2f77f2b1-d134-465d-91f9-d7e9fe7bfbf1/tombraider-legacyofatlantis-laracroft-vilcabamba-reveal-117db8a753498c0371ab.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2025-12-12T03:25:00Z",
            "content": "Some big news came out of Thursday's Game Awards show, and among the new games revealed were two new Tomb Raiders. Lara Croft returns with a new journey, as well as a remake of her first adventure. B… [+1316 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "South China Morning Post",
            "title": "China's heat pump tech, Tokyo clarifies Taiwan stance to Beijing: SCMP's 7 highlights",
            "description": "For over a century, the dream of efficiently concentrating low-grade heat into high-temperature industrial energy has been constrained by a stubborn ceiling:...",
            "url": "https://www.yahoo.com/news/articles/chinas-heat-pump-tech-tokyo-093000465.html",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
            "publishedAt": "2025-12-19T09:30:00Z",
            "content": "For over a century, the dream of efficiently concentrating low-grade heat into high-temperature industrial energy has been constrained by a stubborn ceiling: 200 degrees Celsius (392 degrees Fahrenhe… [+3158 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "RAJESH ROY and SIBI ARASU",
            "title": "Toxic smog blankets New Delhi, disrupting travel and plunging air quality to hazardous levels",
            "description": "Dense toxic smog blanketed India’s national capital Monday, pushing air pollution levels to their worst levels in weeks, disrupting travel and causing...",
            "url": "https://www.yahoo.com/news/articles/toxic-smog-blankets-delhi-disrupting-070808151.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/KejVEESg_siiNJF.97UdCw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://media.zenfs.com/en/ap.org/f2b6724e4128275d984adf04ead9b661",
            "publishedAt": "2025-12-15T07:08:08Z",
            "content": "NEW DELHI (AP) Dense toxic smog blanketed Indias national capital Monday, pushing air pollution levels to their worst levels in weeks, disrupting travel and causing authorities to impose the strictes… [+3689 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda) , Harish Jonnalagadda",
            "title": "How the top Android OEMs in Asia fared in 2025: Who shines and who struggles amid fierce competition?",
            "description": "Most Asian phone manufacturers did a good job in 2025, but if one thing was clear this year, it's that OnePlus is on its way out.",
            "url": "https://www.androidcentral.com/phones/asia-smartphone-market-2025-report-card",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/FApPDYXvSSvCAod9WBcERm-2560-80.jpg",
            "publishedAt": "2025-12-19T20:20:00Z",
            "content": "Grade: B+\r\nThis has been a particularly strong year for phone releases, with Vivo, OPPO, and Huawei shining bright with their devices. The tri-folding Mate XT set things off at the start of the year,… [+7293 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda) , Harish Jonnalagadda",
            "title": "I used the OnePlus 15R so you don't have to: The camera downgrades and price hike effectively make this phone dead on arrival — get the 13R while you still can",
            "description": "I used the OnePlus 15R, and the sheer number of downgrades with this phone make it a deal-breaker before it even goes on sale.",
            "url": "https://www.androidcentral.com/phones/oneplus/oneplus-15r-review",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/yESeEtUJGSg4XzkSC5wC8T-2560-80.jpg",
            "publishedAt": "2025-12-17T16:00:36Z",
            "content": "Why you can trust Android Central\r\nOur expert reviewers spend hours testing and comparing products and services so you can choose the best for you. Find out more about how we test.I thought the OnePl… [+6877 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Marquez",
            "title": "India quiso imponer una app estatal imborrable en todos los móviles. En cuestión de días tuvo que dar un giro inesperado",
            "description": "El movimiento del Gobierno de la India para obligar a instalar una aplicación de seguridad en todos los móviles vendidos en el país ha durado menos de una semana. El 28 de noviembre, el Ministerio de Telecomunicaciones remitió una comunicación privada a los f…",
            "url": "https://www.xataka.com/seguridad/india-quiso-imponer-app-estatal-imborrable-todos-moviles-cuestion-dias-tuvo-que-dar-giro-inesperado",
            "urlToImage": "https://i.blogs.es/ff0f5b/india-app-apple-samsung-portada/840_560.jpeg",
            "publishedAt": "2025-12-03T18:00:44Z",
            "content": "El movimiento del Gobierno de la India para obligar a instalar una aplicación de seguridad en todos los móviles vendidos en el país ha durado menos de una semana. El 28 de noviembre, el Ministerio de… [+3825 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "India couple trolled over skin colour after wedding video goes viral",
            "description": "Rishabh Rajput and Sonali Chouksey received congratulatory messages peppered with \"jokes and memes\".",
            "url": "https://www.bbc.com/news/articles/c62vnlg6v6wo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2e82/live/175e7530-d4b9-11f0-8c06-f5d460985095.jpg",
            "publishedAt": "2025-12-10T00:14:08Z",
            "content": "Geeta Pandey,BBC Correspondentand\r\nVishnukant Tiwari,BBC Hindi\r\nRishabh Rajput and Sonali Chouksey were married last month\r\nRishabh Rajput and Sonali Chouksey met in college 11 years ago, fell in lov… [+4533 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Woman wanted by Interpol over trafficking of tiger parts arrested in India",
            "description": "Yangchen Lachungpa is accused of building trafficking corridors leading out of the country.",
            "url": "https://www.bbc.com/news/articles/c4gp8vjwll2o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/c6c0/live/d3eaf250-d1f8-11f0-a732-cbe19f3047f2.jpg",
            "publishedAt": "2025-12-05T18:13:48Z",
            "content": "Anbarasan EthirajanGlobal affairs reporter\r\nFile picture of a Royal Bengal tiger in Assam State Zoo\r\nA woman accused of being one of the world's most wanted traffickers of tiger body parts has been a… [+1613 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "A new Bollywood film is dividing opinions in India and Pakistan",
            "description": "An espionage thriller set in Pakistan, Dhurandhar has provoked a sharp debate over its political messaging.",
            "url": "https://www.bbc.com/news/articles/c0q5pygel84o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2005/live/575bbcc0-d66b-11f0-91f5-0bd827601511.jpg",
            "publishedAt": "2025-12-12T23:27:55Z",
            "content": "Zoya Mateen &amp; Azadeh MoshiriDelhi\r\nDhurandhar stars Ranveer Singh as an Indian spy on a dangerous mission in Pakistan\r\nA new Bollywood spy film is generating praise - and unease - in India and Pa… [+7832 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Parents in India devastated as children with thalassemia test HIV positive",
            "description": "The five cases in Madhya Pradesh state come weeks after a similar incident was reported in Jharkhand state.",
            "url": "https://www.bbc.com/news/articles/c4g94ywgxd6o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a14a/live/7f31e6f0-dbd1-11f0-abbc-59c0c54a69e5.jpg",
            "publishedAt": "2025-12-19T07:11:24Z",
            "content": "Vishnukant Tiwari,Bhopaland\r\nIn India, HIV still carries strong social stigma, often leading to discrimination\r\nParents of children with thalassemia in India say they are devastated after life-saving… [+4794 chars]"
        },
        {
            "source": {
                "id": "the-jerusalem-post",
                "name": "The Jerusalem Post"
            },
            "author": "REUTERS",
            "title": "Iran seizes Eswatini-flagged vessel for smuggling fuel",
            "description": "Iran seized an Eswatini-flagged ship carrying 350,000 liters of smuggled fuel off Bushehr, detaining its 13 crew amid ongoing efforts to curb fuel smuggling....",
            "url": "https://www.jpost.com/middle-east/article-876665",
            "urlToImage": "https://media.zenfs.com/en/jerusalem_post_articles_818/b7611e203cca1f71139c36ea7d1c07b1",
            "publishedAt": "2025-11-30T10:11:38Z",
            "content": "Iran seized an Eswatini-flagged ship carrying 350,000 liters of smuggled fuel off Bushehr, detaining its 13 crew amid ongoing efforts to curb fuel smuggling.\r\nIran seized on Sunday an Eswatini-flagge… [+685 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Abigail Weinberg",
            "title": "Health experts reveal simple factor that can help people control their weight: 'Has scientific backing'",
            "description": "\"Keep you feeling full for longer.\"",
            "url": "https://health.yahoo.com/wellness/nutrition/weight-loss/articles/health-experts-reveal-simple-factor-130000163.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/L1ylKpJC7CxdZ4X_AS496w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTI-/https://media.zenfs.com/en/the_cool_down_737/281fd8278f04337210d7629c22ba5e58",
            "publishedAt": "2025-11-30T13:00:00Z",
            "content": "Can't figure out what to eat tonight?\r\nConsider a savory serving of vegetable biryani or a comforting bowl of masoor dal healthy vegan options that are as good for your body as they are for the envir… [+2646 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "CBSNews",
            "title": "Volcano erupts for first time in 12,000 years: \"Like a sudden bomb\"",
            "description": "\"While no human lives and livestock have been lost so far, many villages have been covered in ash and as a result their animals have little to eat,\" an...",
            "url": "https://www.cbsnews.com/news/volcano-erupts-first-time-12000-years-hayli-gubbi-ethiopia/?ftag=YHF4eb9d17",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/TUSvZ9h_t6DFNN39o9yCUA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04Njg7Y2Y9d2VicA--/https://media.zenfs.com/en/cbs_news_897/c130ac38f5473a5ae16f89a887dd4363",
            "publishedAt": "2025-11-24T17:00:53Z",
            "content": "A volcano in Ethiopia's northeastern region erupted for the first time in nearly 12,000 years, sending thick plumes of smoke up to nine miles into the sky, the Toulouse Volcanic Ash Advisory Centre (… [+2407 chars]"
        }
    ]

    constructor(){//1
        super();
        this.state = {
            articles: this.articles,
        loading:false}}

    render() {//2
        return (
        <div className = "container mx-10 my-3">
            <h2>NewsMonkey - Top Headlines</h2>
            <div className="row my-3">
                {this.state.articles.map((element)=>
                    {return <div className="col md-3" key={element.url}>
                    <NewsItem title={element.title ? element.title.slice(0, 40) : ""}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imageurl={element.urlToImage}
                    newsurl={element.url}/>
                </div>
            })}
            </div>
        </div>)}
        }

export default NewsForm
