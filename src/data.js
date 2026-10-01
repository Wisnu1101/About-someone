/* ============================================================
   Isi web: foto, stiker, tautan, dan identitas.
   Untuk SEMUA TULISAN (2 bahasa), lihat src/i18n/translations.js
   ============================================================ */

export const profile = {
  fullName: "Discha Rizky Adfiyani",
  nicknames: ["Discha", "Discak", "Caca", "Icha"],
  school: "SMA Negeri 1 Semarang",
  spotify:
    "https://open.spotify.com/user/31imyuchkqu75xz3km5dp3tmxm4u?si=XlfAPRg7S_G77Jq9cZwNVw&utm_source=copy-link",
};

/* --- Foto di beranda & di bagian "About" ---
   Taruh file foto kamu di folder  public/photos/ .
   Tulis path TANPA ekstensi — web otomatis mencari .jpg, .jpeg, .png, atau .webp.
   Contoh: kalau namanya disca-beranda.jpeg, tulis "/photos/disca-beranda".
   Kalau filenya belum ada, otomatis tampil ilustrasi Snoopy lucu. */
export const heroPhoto = {
  src: "/photos/disca-beranda",
  sticker: "🎀",
};

export const aboutPhoto = {
  src: "/photos/disca-tentang",
  sticker: "🌸",
};

/* --- Tempat foto sahabat (letakkan di public/photos/, ekstensi bebas) --- */
export const friends = [
  { id: "smp", src: "/photos/sahabat-smp" },
  { id: "sma", src: "/photos/sahabat-sma" },
];

/* --- Ikon kecil yang dipakai di web (bukan teks) --- */
export const icons = {
  friends: ["🌷", "🐶"],
};
