/* ============================================================
   Semua tulisan web ada di sini, dalam 2 bahasa.
   - "en" = English (tampilan utama / default)
   - "id" = Bahasa Indonesia (bisa dipilih lewat tombol bahasa)
   Kamu bebas ubah teksnya di sini.
   ============================================================ */

export const translations = {
  /* ============================== ENGLISH (default) ============================== */
  en: {
    meta: {
      title: "Hellooowww Discha 🩷",
      description:
        "A soft pink little web for Discha Rizky Adfiyani — full of Snoopy, hearts, and sweet words.",
    },

    nav: {
      brand: "Discha 🩷",
      links: [
        { id: "beranda", label: "Home" },
        { id: "tentang", label: "About" },
        { id: "favorit", label: "Favorites" },
        { id: "sahabat", label: "Friends" },
        { id: "pesan", label: "Quotes" },
      ],
      surprise: "Surprise 🎁",
      toHome: "Back to home",
      mainNav: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langLabel: "Change language",
      langTo: "Switch to Bahasa Indonesia",
    },

    hero: {
      greeting: "Hellooowww!!!",
      introWord: "I'm",
      name: "Discha",
      nickIntro: "You can call me",
      intro:
        "Hi! I'm Discha. Welcome to this tiny corner of the internet made just for you — full of soft pink, Snoopy, and sweet little things. Hope your day feels as soft as this 🎀",
      ctaFavorites: "See My Favorites",
      ctaFriends: "Friends' Story",
      hint: "Try clicking anywhere & moving your cursor… there's a little surprise!",
      photoCaption: "Hi, I'm Discha! 👋🏻",
    },

    quickFacts: [
      { emoji: "🏫", label: "School", value: "SMA Negeri 1 Semarang" },
      { emoji: "🎨", label: "Favorite color", value: "PINK 🩷" },
      { emoji: "🍪", label: "Snacks", value: "Dubai Chewy Cookie" },
      { emoji: "🧋", label: "Drinks", value: "Teazzi · Alchemy · Boost" },
      { emoji: "🫧", label: "Not a fan of", value: "Hot places 🥵" },
    ],

    about: {
      eyebrow: "Let's get to know each other",
      title: "About Me 🩷",
      subtitle: "A little story about Discha — who loves pink, Snoopy, and all things sweet.",
      cardTitle: "Hi, I'm {name}!",
      items: [
        {
          icon: "🏫",
          title: "School",
          text: "Right now I'm studying at SMA Negeri 1 Semarang.",
        },
        {
          icon: "🥵",
          title: "Can't stand hot places",
          text: "I really don't like hot places. When it's too hot, my mood can change in an instant, hehe.",
        },
        {
          icon: "🎶",
          title: "Favorite playlist",
          text: "I have way too many favorite songs, so I just put the playlist in the box next to this.",
        },
      ],
      playlistLabel: "🎧 My Spotify Playlist",
      playlistNote: "Filled with the songs that keep me company every day. Feel free to follow~",
      openPlaylist: "Open Playlist",
      tagline: "Sweet treats & sweet dreams 🐶💤",
      photoCaption: "Your favorite sweet smile 🩷",
    },

    favorites: {
      eyebrow: "My favorites",
      title: "Favorite Food, Drinks & Color 🍪🩷",
      subtitle:
        "I'm absolutely crazy about sweet food, plus drinks that feel so refreshing. And besides the ones below, there are still so many more, hehe.",
      foodsTitle: "Favorite Food",
      foodsSub: "From sweet to traditional — all of them are the best!",
      drinksTitle: "Favorite Drinks",
      drinksSub: "The three flavors I love the most 💜",
      colorTitle: "My favorite color: PINK 🩷",
      colorSub: "soft, warm, and always makes me smile 🎀",
    },

    /* 4 favourite foods */
    foods: [
      {
        emoji: "🍪",
        name: "Dubai Chewy Cookie",
        note: "Chewy, sweet, instantly lifts my mood ✨",
        tag: "Sweet tooth",
      },
      {
        emoji: "🫐",
        name: "Chocoberry",
        note: "The combo of chocolate & berry that never fails 💜",
        tag: "Sweet tooth",
      },
      {
        emoji: "🥣",
        name: "Soto Betawi",
        note: "Rich, warm, perfect for Semarang weather 🥰",
        tag: "Traditional food",
      },
      {
        emoji: "🍲",
        name: "Opor",
        note: "That creamy coconut broth makes me miss home 🩷",
        tag: "Traditional food",
      },
    ],

    /* 3 favourite drinks */
    drinks: [
      {
        emoji: "🧋",
        name: "Teazzi",
        note: "My all-time favorite, so refreshing ✨",
        tag: "Favorite drink",
      },
      {
        emoji: "🥤",
        name: "Alchemy",
        note: "My favorite variant, the taste is just right 💜",
        tag: "Favorite drink",
      },
      {
        emoji: "⚡",
        name: "Boost",
        note: "The perfect pick-me-up for extra energy 🩷",
        tag: "Favorite drink",
      },
    ],

    friends: {
      eyebrow: "Friends",
      title: "My Close Friends 🫶🏻",
      intro:
        "I have close friends from junior high and high school. To me, they've become a platform for sharing stories — long ones, random ones, sad ones, and endless laughter. Stories feel lighter when they're shared together. 🫶🏻",
      items: [
        { id: "smp", title: "Junior High Friends", note: "Friends I grew up with, from back then until now." },
        { id: "sma", title: "High School Friends", note: "Partner in crime at SMA Negeri 1 Semarang." },
      ],
    },

    quotes: {
      eyebrow: "A message for you",
      title: "Never Give Up ✨",
      subtitle: "Little words I hold on to — hope they lift your day up again.",
      items: [
        { text: "Never give up, because great things take time.", emoji: "⏳" },
        {
          text: "No matter how hard it gets, do not stop chasing ur dreams — because one day you will look back and realize all that effort was worth it.",
          emoji: "🌠",
        },
        { text: "Keep going, Caca. Slowly is fine, as long as you keep moving. 🩷", emoji: "🌸" },
      ],
    },

    surprise: {
      eyebrow: "A little surprise",
      title: "Press the Button 🎁",
      subtitle: "There are random sweet messages waiting for you here. Keep pressing~",
      welcome: "Halloowww! Welcome to my pink corner 🩷 press the button below!",
      opened: "You've opened {n} sweet messages. The more, the sweeter! 🍬",
      open: "Open the Surprise 🎀",
      another: "Another one please! ✨",
      backToTop: "Back to Top 🩷",
      marquee: [
        "🩷 Never give up",
        "🐶 Snoopy hug",
        "🎀 Sweet things take time",
        "🌸 Chase your dreams",
        "✨ You are doing great",
      ],
    },

    littleNotes: [
      "Hope your day is as soft as a cloud ☁️",
      "Don't forget to drink water, sweetie 💧",
      "You're sweeter than a Dubai Chewy Cookie 🍪",
      "Pink is your color, and it looks perfect on you 🩷",
      "If you're tired, take a rest first. It's okay 😊",
      "You're totally allowed to relax a bit today 🎀",
      "You're amazing, even when you forget it 🫶🏻",
      "Sending a big Snoopy hug for you 🐶",
    ],

    footer: {
      madeWith: "Made with",
      pinkWord: "pink",
      andSnoopy: "& Snoopy just for you 🐶🎀",
      backToTop: "Back to top",
    },

    photo: {
      placeholder: "Photo coming soon 🐶🩷",
    },

    pet: {
      ariaLabel: "Press Snoopy to see flowers",
      title: "Press me! 🌸",
      bubbles: [
        "Hehe, that tickles! 🌸",
        "Flowers for you 🩷",
        "Snoopy loves you 🐶",
        "Blooming! 🌷",
        "Press me again 🎀",
        "So fragrant 💮",
        "You got this! ✨",
        "Cup cup cup 🥰",
      ],
    },
  },

  /* ============================== BAHASA INDONESIA ============================== */
  id: {
    meta: {
      title: "Hellooowww Discha 🩷",
      description:
        "Web kecil berwarna pink soft untuk Discha Rizky Adfiyani — penuh Snoopy, hati, dan kata-kata manis.",
    },

    nav: {
      brand: "Discha 🩷",
      links: [
        { id: "beranda", label: "Beranda" },
        { id: "tentang", label: "Tentang" },
        { id: "favorit", label: "Favorit" },
        { id: "sahabat", label: "Sahabat" },
        { id: "pesan", label: "Pesan" },
      ],
      surprise: "Kejutan 🎁",
      toHome: "Ke beranda",
      mainNav: "Navigasi utama",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      langLabel: "Ganti bahasa",
      langTo: "Ganti ke English",
    },

    hero: {
      greeting: "Hellooowww!!!",
      introWord: "Aku",
      name: "Discha",
      nickIntro: "Boleh panggil aku",
      intro:
        "Hai! Aku Discha. Selamat datang di sudut kecil internet yang dibuat khusus buat kamu — penuh warna pink soft, Snoopy, dan hal-hal manis. Semoga harimu selembut ini ya 🎀",
      ctaFavorites: "Lihat Favoritku",
      ctaFriends: "Cerita Sahabat",
      hint: "Coba klik di mana saja & geser kursor… ada kejutan kecil!",
      photoCaption: "Hai, aku Discha! 👋🏻",
    },

    quickFacts: [
      { emoji: "🏫", label: "Sekolah", value: "SMA Negeri 1 Semarang" },
      { emoji: "🎨", label: "Warna favorit", value: "PINK 🩷" },
      { emoji: "🍪", label: "Camilan", value: "Dubai Chewy Cookie" },
      { emoji: "🧋", label: "Minuman", value: "Teazzi · Alchemy · Boost" },
      { emoji: "🫧", label: "Gak suka", value: "Tempat panas 🥵" },
    ],

    about: {
      eyebrow: "Kenalan dulu yuk",
      title: "Tentang Aku 🩷",
      subtitle: "Sedikit cerita tentang Discha yang suka pink, Snoopy, dan hal-hal manis.",
      cardTitle: "Hai, aku {name}!",
      items: [
        { icon: "🏫", title: "Sekolah", text: "Sekarang aku sekolah di SMA Negeri 1 Semarang." },
        {
          icon: "🥵",
          title: "Gak tahan tempat panas",
          text: "Aku gak suka tempat yang panas. Kalau kepanasan, mood-ku bisa berubah seketika, hehe.",
        },
        {
          icon: "🎶",
          title: "Playlist favorit",
          text: "Musik favoritku banyak banget, jadi aku taruh playlist-nya aja di kotak sebelah.",
        },
      ],
      playlistLabel: "🎧 Playlist Spotify-ku",
      playlistNote: "Isinya lagu-lagu yang nemenin hariku. Boleh banget diikuti~",
      openPlaylist: "Buka Playlist",
      tagline: "Sweet treats & sweet dreams 🐶💤",
      photoCaption: "Senyum manis favorit kamu 🩷",
    },

    favorites: {
      eyebrow: "Favorit aku",
      title: "Makanan, Minuman & Warna Favorit 🍪🩷",
      subtitle:
        "Aku tuh suka banget makanan manis, plus minuman yang bikin seger. Selain yang di bawah ini, masih banyak lagi sih, hehe.",
      foodsTitle: "Makanan Favorit",
      foodsSub: "Dari yang manis sampai tradisional — semuanya juara!",
      drinksTitle: "Minuman Favorit",
      drinksSub: "Tiga varian yang paling aku suka 💜",
      colorTitle: "Warna favoritku: PINK 🩷",
      colorSub: "soft, hangat, dan selalu bikin senyum 🎀",
    },

    foods: [
      {
        emoji: "🍪",
        name: "Dubai Chewy Cookie",
        note: "Chewy, manis, bikin mood langsung naik ✨",
        tag: "Sweet tooth",
      },
      {
        emoji: "🫐",
        name: "Chocoberry",
        note: "Perpaduan coklat & berry yang juara 💜",
        tag: "Sweet tooth",
      },
      {
        emoji: "🥣",
        name: "Soto Betawi",
        note: "Gurih, hangat, juara buat cuaca Semarang 🥰",
        tag: "Makanan tradisional",
      },
      {
        emoji: "🍲",
        name: "Opor",
        note: "Kuah santannya bikin kangen rumah 🩷",
        tag: "Makanan tradisional",
      },
    ],

    drinks: [
      {
        emoji: "🧋",
        name: "Teazzi",
        note: "Minuman favoritku, seger banget ✨",
        tag: "Minuman favorit",
      },
      {
        emoji: "🥤",
        name: "Alchemy",
        note: "Varian favorit yang rasanya pas 💜",
        tag: "Minuman favorit",
      },
      {
        emoji: "⚡",
        name: "Boost",
        note: "Pilihan pas buat nambah semangat 🩷",
        tag: "Minuman favorit",
      },
    ],

    friends: {
      eyebrow: "Sahabat",
      title: "Sahabat Dekatku 🫶🏻",
      intro:
        "Aku punya sahabat dekat dari SMP dan SMA. Bagi aku mereka itu tempat berbagi cerita — panjang, random, sedih, sampai tawa yang gak ada habisnya. Cerita jadi lebih ringan kalau dibagi bareng mereka. 🫶🏻",
      items: [
        { id: "smp", title: "Sahabat SMP", note: "Teman tumbuh bareng dari dulu sampai sekarang." },
        { id: "sma", title: "Sahabat SMA", note: "Partner in crime di SMA Negeri 1 Semarang." },
      ],
    },

    quotes: {
      eyebrow: "Pesan buat kamu",
      title: "Never Give Up ✨",
      subtitle: "Kata-kata kecil yang aku pegang terus — semoga bikin harimu semangat lagi.",
      items: [
        { text: "Never give up, because great things take time.", emoji: "⏳" },
        {
          text: "No matter how hard it gets, do not stop chasing ur dreams — because one day you will look back and realize all that effort was worth it.",
          emoji: "🌠",
        },
        { text: "Keep going, Caca. Pelan-pelan aja, yang penting jalan. 🩷", emoji: "🌸" },
      ],
    },

    surprise: {
      eyebrow: "Kejutan kecil",
      title: "Pencet Tombolnya 🎁",
      subtitle: "Ada pesan manis random yang nunggu kamu di sini. Coba pencet terus ya~",
      welcome: "Halloowww! Selamat datang di sudut pink-ku 🩷 tekan tombol di bawah ya!",
      opened: "Kamu sudah buka {n} pesan manis. Makin banyak makin manis! 🍬",
      open: "Buka Kejutan 🎀",
      another: "Pesan lain dong! ✨",
      backToTop: "Balik ke Atas 🩷",
      marquee: [
        "🩷 Never give up",
        "🐶 Snoopy hug",
        "🎀 Sweet things take time",
        "🌸 Chase your dreams",
        "✨ You are doing great",
      ],
    },

    littleNotes: [
      "Semoga hari kamu selembut awan ☁️",
      "Jangan lupa minum air putih ya, manis 💧",
      "Kamu lebih manis dari Dubai Chewy Cookie 🍪",
      "Pink is your color, and it looks perfect on you 🩷",
      "Kalau capek, istirahat dulu. Gak apa-apa kok 😊",
      "Hari ini boleh banget buat santai sebentar 🎀",
      "Kamu hebat, walau kadang lupa itu 🫶🏻",
      "Sending a big Snoopy hug for you 🐶",
    ],

    footer: {
      madeWith: "Dibuat dengan",
      pinkWord: "pink",
      andSnoopy: "& Snoopy buat kamu 🐶🎀",
      backToTop: "Balik ke atas",
    },

    photo: {
      placeholder: "Foto menyusul 🐶🩷",
    },

    pet: {
      ariaLabel: "Pencet Snoopy untuk lihat bunga",
      title: "Pencet aku! 🌸",
      bubbles: [
        "Hehe, geli! 🌸",
        "Bunga buat kamu 🩷",
        "Snoopy sayang kamu 🐶",
        "Mekar deh! 🌷",
        "Pencet lagi dong 🎀",
        "Wangi banget 💮",
        "Semangat ya! ✨",
        "Cup cup cup 🥰",
      ],
    },
  },
};

export const LANGUAGES = [
  { code: "en", label: "EN", full: "English" },
  { code: "id", label: "ID", full: "Bahasa Indonesia" },
];

/* Bahasa utama = English */
export const DEFAULT_LANG = "en";
