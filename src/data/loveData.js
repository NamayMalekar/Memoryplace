// ─────────────────────────────────────────────────────────────
// EDIT EVERYTHING HERE. This is the only file you should need
// to touch to personalize the entire website.
// ─────────────────────────────────────────────────────────────

const loveData = {
  herName: "My Tanudiii",
  yourName: "Me",

  // Used for the password gate (PIN: 0709 or relationship date 18042026)
  password: "1804",

  relationshipDateLabel: "18 April 2026",
  anniversaryLabel: "18 September 2026",
  monthsTogether: 5,

  // ── PAGE 02 — Our Beginning ───────────────────────────────
  beginning: {
    paragraph:
      "Some dates become memories. Some dates become the beginning of something extraordinary.",
    dateDisplay: "18.04.2026",
    annotation: "our beginning",
    photo: "/images/begun2.jpeg",
  },

  // ── PAGE 03 — Month by Month Journey (April to September) ──
  monthlyJourney: [
    {
      id: "april",
      monthName: "April",
      monthShort: "APR",
      number: "01",
      icon: "💍",
      color: "from-pink-100 to-rose-50",
      accent: "#FF85A1",
      phaseTitle: "The Proposal & Our Beginning",
      subtitle: "Where forever started with a single heartbeat",
      date: "18 April 2026",
      story:
        "The butterflies, the nervous smiles, and that unforgettable moment when I said 'I Love You' & you responded with a smile on your face, fully blushing & shy & my life felt so awesome thaat day. I was so excited that i can't telll lol 😜. From the very first 'yes', every second felt magical. April wasn't just a month; it became the beginning of my happiest reality.",
      tags: ["Proposal Day 💍", "First Spark ✨", "Butterflies in my stomach 🦋", "The Start of Us 🌸"],
      memories: [
        { image: "/images/apr1.jpeg", caption: "1st picture of us after the commitment 💌", orientation: "portrait" },
        { image: "/images/apr2.jpeg", caption: "Morning walks while situationship✨", orientation: "landscape" },
        { image: "/images/apr3.jpeg", caption: "Our very first official moment together 🌸", orientation: "portrait" },
        { image: "/images/apr4.jpeg", caption: "Pooja vale roses, iykyk(hehehe)", orientation: "portrait" },
        { image: "/images/apr5.jpeg", caption: "Movie date the very next day (19 apr)✨", orientation: "landscape" },
        { image: "/images/apr6.jpeg", caption: "Mummy se jhgda & that reaction of urs 🤪", orientation: "portrait" },
      ],
      quote: "You said yes, and suddenly all the love songs made sense.",
    },
    {
      id: "may",
      monthName: "May",
      monthShort: "MAY",
      number: "02",
      icon: "🌙",
      color: "from-purple-100 to-pink-50",
      accent: "#D8B4E2",
      phaseTitle: "Our last 10 days of living together in Nagpur",
      subtitle: "Each day being more special and important for us",
      date: "18 May 2026",
      story:
        "10 days, countless memories, full of fun, love, care and much more. Every moment spent with you was just so special and important for us. The day you left for Home, my heart was just shattered 💔. I was in Nagpur from past 4 years, but if I say from the deepest part of my heart, Nagpur felt so empty for me that day. My heart literally started crying when you were leaving, just wanted to hug you tighter and never let you go.",
      tags: ["3 AM Voice Notes 🎧", "Our Shared Playlist 🎵", "Inside Jokes 😂", "Late Night Calls 🌙"],
      memories: [
        { image: "/images/may1.jpeg", caption: "Movie date again", orientation: "landscape" },
        { image: "/images/may2.jpeg", caption: "The Endsem prep at library", orientation: "portrait" },
        { image: "/images/may3.jpeg", caption: "Cafe date & That Kiwi vala mocktail 💌", orientation: "landscape" },
        { image: "/images/may4.jpeg", caption: "Last day date in Nagpur 🥹", orientation: "landscape" },
        { image: "/images/may5.jpeg", caption: "Got the beautiful bouquet for the first time in my life. Thankyouu bubbbu❤️", orientation: "portrait" },
        { image: "/images/may6.jpeg", caption: "Those cute touches that i need the most for lifetimeee🥹 ", orientation: "landscape" },
        { image: "/images/may7.jpeg", caption: "Happpieee waffleee kidddoo", orientation: "landscape" },
        { image: "/images/may8.jpeg", caption: "Emotional byeee byee time", orientation: "portrait" },
        { image: "/images/may9.jpeg", caption: "Chotusaaa gift from me to mahh guuurl💌", orientation: "landscape" },
      ],
      quote: "Hours felt like seconds whenever I was talking to you.",
    },
    {
      id: "june",
      monthName: "June",
      monthShort: "JUN",
      number: "03",
      icon: "🌸",
      color: "from-pink-50 to-purple-100",
      accent: "#F8A5C2",
      phaseTitle: "Maahh Bdayyy monthhh",
      subtitle: "When you became my safest and happiest place",
      date: "18 June 2026",
      story:
        "I remember june, it was totally a hectic one due to my interviews and being alone in Nagpur. But the last week when you came back from home, it was literally a happening week, we used to go ambazari again, hangouts and muchhh more. And on 30th june(mahh bdayyy), you made me so special that I started doubting myself(itni acchi bndii mai deserve bhi krta hu kya) lol 😜.",
      tags: ["Food Adventures 🍕", "Unstoppable Laughs 🌸", "Cozy Evenings 🌆", "Pure Comfort 🤍"],
      memories: [
        { image: "/images/bday1.jpeg", caption: "Thannkkyouuhh for the lovely bouquet madammm❤️", orientation: "portrait" },
        { image: "/images/bday9.jpeg", caption: "Mandatory photuuu", orientation: "landscape" },
        { image: "/images/bday2.jpeg", caption: "isko kya caption duuu 🤪", orientation: "portrait" },
        { image: "/images/bday3.jpeg", caption: "When we both went to buy bouquet for meee", orientation: "landscape" },
        { image: "/images/bday4.jpeg", caption: "Sunset walks together 🌅", orientation: "portrait" },
        { image: "/images/bday7.jpeg", caption: "Favouriteee of the favouritess🥹❤️", orientation: "portrait" },
        { image: "/images/bday6.jpeg", caption: "That day and that hug made me feel sooo specialll. luuuvv youu", orientation: "portrait" },
        { image: "/images/bday8.jpeg", caption: "Your surprise cake🥹❤️(btw the cake was so cute and tasty too 😋)", orientation: "landscape" },
        { image: "/images/bday5.jpeg", caption: "Ishq tera laeee doooobaaa moment 🫠", orientation: "portrait" },
      ],
      quote: "Your laugh quickly became my absolute favorite sound in the world.",
    },
    {
      id: "july",
      monthName: "July",
      monthShort: "JUL",
      number: "04",
      icon: "☕",
      color: "from-rose-50 to-pink-100",
      accent: "#FFB5A7",
      phaseTitle: "Barishhh aurrr Bakchoddiiyyy!",
      subtitle: "Every single day with you felt like sunshine",
      date: "18 July 2026",
      story:
        "Rainy days made warmer with your messages, holding your hand that fit so perfectly in mine, and knowing with total certainty that having you by my side makes the whole world brighter.",
      tags: ["Holding Hands 🤝", "Sweet Messages 💌", "Rainy Day Dates 🌧️", "Warm Hugs 🫂"],
      memories: [
        { image: "/images/jul1.jpeg", caption: "Mhaaariiii bannnoooo 🥹❤️", orientation: "landscape" },
        { image: "/images/jul2.jpeg", caption: "I luvvv when youu luvv me like thisss", orientation: "portrait" },
        { image: "/images/jul3.jpeg", caption: "Voh qatiiiil nazreeee", orientation: "landscape" },
        { image: "/images/jul4.jpeg", caption: "You remember the view at futala this dayyy?", orientation: "landscape" },
        { image: "/images/jul5.jpeg", caption: "Mahhh bdaayyyyy gifffttttt, thankyouu bubbu(30 june ka gift 20 july ko diya gya🤪(But the best gifttt i got from the bestesttt of the besttt community))", orientation: "portrait" },
        { image: "/images/jul6.jpeg", caption: "Bheega bheega mausam and usss togetherrr🎀", orientation: "landscape" },
      ],
      quote: "With you, even the simplest rainy day turned into poetry.",
    },
    {
      id: "august",
      monthName: "August",
      monthShort: "AUG",
      number: "05",
      icon: "✨",
      color: "from-purple-100 to-indigo-50",
      accent: "#C8B6FF",
      phaseTitle: "Barsaaaat kaa mausammmmmmm hmmmmm",
      subtitle: "When 'you and me' became my favorite reality",
      date: "18 August 2026",
      story:
        "August was a pretty good month, but you made it special with your presence (and that attitude too, which i luvvv the most😜).Also luvved the rainy season and us beign together coffees, maggieeee, & blahhhh blaah blaaahhhh. Aur jada kuch yaad nhi aaa rrrhhaaaa tohhh baadme editt kr denge apnnnn😂",
      tags: ["My Safe Haven 🏡", "Sweet Traditions ☕", "Unconditional Love 💖", "Best Team 💫"],
      memories: [
        { image: "/images/aug1.jpeg", caption: "Futalaaa but gussaa with me(forceful fotuuu😂)", orientation: "portrait" },
        { image: "/images/aug2.jpeg", caption: "Alwaysss luvvv these type of momentsss", orientation: "landscape" },
        { image: "/images/aug3.jpeg", caption: "heheheeehee🤪", orientation: "portrait" },
        { image: "/images/aug4.jpeg", caption: "Ready for the club partyyyy", orientation: "portrait" },
        { image: "/images/aug5.jpeg", caption: "31st august, our 1st nightout and 1st club partyy withh youu", orientation: "landscape" },
        { image: "/images/aug6.jpeg", caption: "Congratulationzzz madamm for your achievementtt(I feel soooo soo happieee when you're happpieee🤍)", orientation: "portrait" },
        { image: "/images/aug7.jpeg", caption: "OMG Executuive head with me on independence dayyy", orientation: "portrait" },
        { image: "/images/aug8.jpg", caption: "Pvt. dateeee", orientation: "landscape" },
        { image: "/images/aug9.jpeg", caption: "Awhhhhh, myyy cutieeee🤍", orientation: "portrait" },
      ],
      quote: "I looked at you and realized: I'm home.",
    },
    {
      id: "september",
      monthName: "September",
      monthShort: "SEP",
      number: "06",
      icon: "💖",
      color: "from-pink-100 via-purple-100 to-rose-100",
      accent: "#FF758F",
      phaseTitle: "Five Months & Forever to Go",
      subtitle: "Celebrating our 5 beautiful months together",
      date: "18 September 2026",
      story:
        "Five full months of love, growth, giggles, support, and thousands of little memories. This website is just a tiny glimpse of how deeply grateful I am to have you in my life. Here is to us, today, tomorrow, and forever.",
      tags: ["5 Months Milestone 💖", "Happy Anniversary 🥂", "My Forever Girl 👑", "To Infinity & Beyond ♾️"],
      memories: [
        { image: "/images/sept2.jpeg", caption: "Five months down, a lifetime to go ♾️", orientation: "portrait" },
        { image: "/images/sept1.jpeg", caption: "Still falling for you every single day ✨", orientation: "portrait" },
        { image: "/images/sept3.jpeg", caption: "Our happiest celebration together 🎉", orientation: "landscape" },
        { image: "/images/sept4.jpeg", caption: "Still falling for you every single day ✨", orientation: "portrait" },
        { image: "/images/sept5.jpeg", caption: "Our happiest celebration together 🎉", orientation: "landscape" },
      ],
      quote: "Five months is only the prologue to the greatest love story ever written.",
    },
  ],

  // ── PAGE 04 — Our Memories (Gallery) ─────────────────────
  memories: [
    { image: "/images/memory-01.jpg", caption: "that day we couldn't stop smiling.", orientation: "portrait" },
    { image: "/images/memory-02.jpg", caption: "this smile of yours.", orientation: "landscape" },
    { image: "/images/memory-03.jpg", caption: "one of my all-time favorite moments.", orientation: "portrait" },
    { image: "/images/memory-04.jpg", caption: "you, being effortlessly gorgeous.", orientation: "landscape" },
    { image: "/images/memory-05.jpg", caption: "still gives me butterflies.", orientation: "portrait" },
    { image: "/images/memory-06.jpg", caption: "just us, in our happy bubble.", orientation: "landscape" },
  ],

  // ── PAGE 05 — Little Things I Love (Interactive Flip Cards) ─
  littleThingsCards: [
    {
      id: 1,
      number: "01",
      icon: "✨",
      category: "Your Smile",
      badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
      title: "Your Sudden Eye Crinkle",
      frontSnippet: "When something makes you laugh genuinely...",
      backNote:
        "The way your eyes crinkle up whenever you find something truly hilarious. It instantly lights up whatever room we're in and melts my heart on the spot.",
      defaultHearts: 99,
    },
    {
      id: 2,
      number: "02",
      icon: "🎧",
      category: "Cute Habits",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
      title: "Your Random Voice Notes",
      frontSnippet: "Those 2-minute updates about your day...",
      backNote:
        "Listening to your voice notes when you tell me about the tiny events in your day. Your expressions, your little sighs, and your excitement are pure music to me.",
      defaultHearts: 88,
    },
    {
      id: 3,
      number: "03",
      icon: "🧸",
      category: "Pure Sweetness",
      badgeColor: "bg-rose-100 text-rose-700 border-rose-200",
      title: "How You Look When Sleepy",
      frontSnippet: "Soft voice and sleepy mumbled words...",
      backNote:
        "That adorable sleepy tone you get late at night when you're trying to stay awake just to talk a little longer. It's the sweetest thing in the universe.",
      defaultHearts: 104,
    },
    {
      id: 4,
      number: "04",
      icon: "🌸",
      category: "Your Heart",
      badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
      title: "The Way You Care",
      frontSnippet: "Checking if I ate or had enough water...",
      backNote:
        "The genuine empathy you have. You notice when I'm tired even before I say a word, and you always know how to make me feel safe and loved.",
      defaultHearts: 95,
    },
    {
      id: 5,
      number: "05",
      icon: "🎀",
      category: "Expressions",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
      title: "Your Pout & Sassy Looks",
      frontSnippet: "When you pretend to be dramatic...",
      backNote:
        "Your playful little pout and theatrical reactions when we tease each other. You make the ordinary days feel like a cute romantic comedy.",
      defaultHearts: 91,
    },
    {
      id: 6,
      number: "06",
      icon: "☕",
      category: "Little Details",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      title: "How You Remember Tiny Details",
      frontSnippet: "Things I said weeks ago that you still recall...",
      backNote:
        "You remember the smallest things I mention in passing—my favorite songs, what made me laugh, or what stressed me out. It proves how deeply you care.",
      defaultHearts: 120,
    },
    {
      id: 7,
      number: "07",
      icon: "🦋",
      category: "Magic",
      badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
      title: "The Comfort of Your Hugs",
      frontSnippet: "Where all the world's chaos disappears...",
      backNote:
        "Holding you in my arms makes all stress evaporate. It feels like reaching safe harbor after a long stormy sea. You are my peace.",
      defaultHearts: 110,
    },
    {
      id: 8,
      number: "08",
      icon: "💌",
      category: "Sweet Messages",
      badgeColor: "bg-rose-100 text-rose-700 border-rose-200",
      title: "Your 'Thinking of You' Texts",
      frontSnippet: "A random photo or a sweet midday text...",
      backNote:
        "Getting a notification from you in the middle of a hectic day is like a warm ray of sunshine. It instantly brightens up my whole mood.",
      defaultHearts: 85,
    },
    {
      id: 9,
      number: "09",
      icon: "🎶",
      category: "Vibes",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
      title: "How You Get Excited",
      frontSnippet: "When you see cute food or your favorite thing...",
      backNote:
        "Your happy little dance and wide bright eyes when your favorite food arrives or when you see something adorable. Your joy is completely contagious.",
      defaultHearts: 97,
    },
    {
      id: 10,
      number: "10",
      icon: "👑",
      category: "Everything",
      badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
      title: "Just You, Being Completely You",
      frontSnippet: "The most beautiful person inside and out...",
      backNote:
        "Your uniqueness, your kindness, your beauty, and your gentle soul. I love every single version of you, every single second of the day.",
      defaultHearts: 150,
    },
  ],

  // ── PAGE 06 — Our Timeline ────────────────────────────────
  timeline: [
    {
      date: "18.04.2026",
      title: "The Beginning & Proposal",
      description: "The unforgettable day everything started and my world became brighter.",
      photo: "/images/memory-01.jpg",
      tag: "the proposal phase 💍",
    },
    {
      date: "May 2026",
      title: "Endless Conversations",
      description: "Hours of late-night calls discovering all of our favorite things.",
      photo: "/images/memory-02.jpg",
      tag: "getting closer 🌙",
    },
    {
      date: "June 2026",
      title: "Laughs & Food Dates",
      description: "Unfiltered joy, inside jokes, and sharing our favorite meals.",
      photo: "/images/memory-03.jpg",
      tag: "pure laughter 🌸",
    },
    {
      date: "July 2026",
      title: "Deeper Connections",
      description: "Holding hands, rainy day talks, and feeling safe in each other's arms.",
      photo: "/images/memory-04.jpg",
      tag: "falling deeper 🌧️",
    },
    {
      date: "August 2026",
      title: "Home in Each Other",
      description: "Realizing that wherever you are is where I want to be.",
      photo: "/images/memory-05.jpg",
      tag: "finding home 🏡",
    },
    {
      date: "18.09.2026",
      title: "Five Months Milestone",
      description: "Five months down, and an infinity of chapters left to write.",
      photo: "/images/us-02.jpg",
      tag: "happy five months 💖",
    },
  ],

  // ── PAGE 07 — A Letter For You ────────────────────────────
  letter: `To the love of my life,

I know I don't always remember every monthly date the way I should, but I hope this little corner of the internet proves that I never forget the most important thing in the world — you.

Five months may sound like a short season in the grand scheme of things, but in these five months, you have completely transformed my world. You brought warmth to my quiet days, laughter to my heavy moments, and an irreplaceable comfort I never knew existed before you.

Thank you for being you.
Thank you for your patience, your sweet laugh, your gentle heart, and for every silly little moment we've shared.
Thank you for making me feel so loved and cherished.

If these first five months have been this beautiful... I truly cannot wait to spend all the next chapters, years, and forever by your side.

Happy five months, my prettiest girl. You will always have my entire heart.`,

  postscript: "P.S. Tap the heart meter below to send some love back to me! 💌",

  // ── PAGE 08 — The Next Chapter ────────────────────────────
  nextChapter: [
    "more spontaneous road trips 🚗",
    "unlimited cozy movie nights 🍿",
    "trying every café in the city ☕",
    "cooking our favorite dinners together 🍝",
    "watching sunsets hand-in-hand 🌅",
    "a million more reasons to smile 🌸",
  ],

  // ── PAGE 09 — Final Surprise ──────────────────────────────
  finalPhoto: "/images/us-02.jpg",
  finalDateRange: "18.04.2026 → ∞",
  signature: "Made with all my love, always & forever.",

  // ── Music ──────────────────────────────────────────────────
  musicSrc: "/music/our-song.mp3",
  musicLabel: "our song",
};

export default loveData;
