/* ============================================================
   Semua isi/tulisan web ada di sini biar gampang diubah-ubah.
   ============================================================ */

export const profile = {
  fullName: "Discha Rizky Adfiyani",
  nicknames: ["Discha", "Discak", "Caca", "Icha"],
  school: "SMA Negeri 1 Semarang",
  greeting: "Hellooowww!!!",
  tagline: "Pink is my happy color 🩷",
  intro:
    "Hai! Aku Discha. Selamat datang di sudut kecil internet yang dibuat khusus buat kamu — penuh warna pink soft, Snoopy, dan hal-hal manis. Semoga harimu selembut ini ya 🎀",
  spotify:
    "https://open.spotify.com/user/31imyuchkqu75xz3km5dp3tmxm4u?si=XlfAPRg7S_G77Jq9cZwNVw&utm_source=copy-link",
};

/* --- Foto di beranda & di bagian "Tentang" ---
   Taruh file foto kamu di folder  public/photos/ .
   Tulis path TANPA ekstensi — web otomatis mencari .jpg, .jpeg, .png, atau .webp.
   Contoh: kalau namanya disca-beranda.jpeg, tulis "/photos/disca-beranda".
   Kalau filenya belum ada, otomatis tampil ilustrasi Snoopy lucu. */
export const heroPhoto = {
  src: "/photos/disca-beranda",
  alt: "Foto Discha di beranda",
  caption: "Hai, aku Discha! 👋🏻",
  sticker: "🎀",
};

export const aboutPhoto = {
  src: "/photos/disca-tentang",
  alt: "Foto Discha di bagian tentang",
  caption: "Senyum manis favorit kamu 🩷",
  sticker: "🌸",
};

export const quickFacts = [
  { emoji: "🏫", label: "Sekolah", value: profile.school },
  { emoji: "🎨", label: "Warna favorit", value: "PINK 🩷" },
  { emoji: "🍪", label: "Camilan", value: "Dubai Chewy Cookie" },
  { emoji: "🧋", label: "Minuman", value: "Teazzi · Alchemy · Boost" },
  { emoji: "🫧", label: "Gak suka", value: "Tempat panas 🥵" },
];

/* --- 4 makanan favorit --- */
export const foods = [
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
];

/* --- 3 minuman favorit --- */
export const drinks = [
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
];

/* --- Tempat foto sahabat (letakkan di public/photos/, ekstensi bebas) --- */
export const friends = [
  {
    id: "smp",
    src: "/photos/sahabat-smp",
    title: "Sahabat SMP",
    note: "Teman tumbuh bareng dari dulu sampai sekarang.",
  },
  {
    id: "sma",
    src: "/photos/sahabat-sma",
    title: "Sahabat SMA",
    note: "Partner in crime di SMA Negeri 1 Semarang.",
  },
];

export const friendText =
  "Aku punya sahabat dekat dari SMP dan SMA. Bagi aku mereka itu tempat berbagi cerita — panjang, random, sedih, sampai tawa yang gak ada habisnya. Cerita jadi lebih ringan kalau dibagi bareng mereka. 🫶🏻";

/* --- Kata-kata penyemangat --- */
export const quotes = [
  {
    text: "Never give up, because great things take time.",
    emoji: "⏳",
  },
  {
    text: "No matter how hard it gets, do not stop chasing ur dreams — because one day you will look back and realize all that effort was worth it.",
    emoji: "🌠",
  },
  {
    text: "Keep going, Caca. Pelan-pelan aja, yang penting jalan. 🩷",
    emoji: "🌸",
  },
];

/* --- Hal-hal random manis buat tombol "kejutan" --- */
export const littleNotes = [
  "Semoga hari kamu selembut awan ☁️",
  "Jangan lupa minum air putih ya, manis 💧",
  "Kamu lebih manis dari Dubai Chewy Cookie 🍪",
  "Pink is your color, and it looks perfect on you 🩷",
  "Kalau capek, istirahat dulu. Gak apa-apa kok 😊",
  "Hari ini boleh banget buat santai sebentar 🎀",
  "Kamu hebat, walau kadang lupa itu 🫶🏻",
  "Sending a big Snoopy hug for you 🐶",
];
