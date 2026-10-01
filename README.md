# Hellooowww Discha 🩷

Website kecil bertema **pink soft** dengan hiasan **Snoopy** 🐶 — dibuat untuk Discha Rizky Adfiyani.
Interaktif, responsif, dan penuh animasi lucu. Dibuat pakai **React + Vite**.

## ✨ Fitur

- **Beranda** dengan **1 foto utama**, bingkai polaroid + selotip + stiker.
- **Tentang** dengan **1 foto** juga.
- **Tema pink soft** dengan blob bergerak, percikan (sparkle), jejak kaki, dan awan.
- **Snoopy**: pakai gambar `public/photos/snoopy.png` (latar putihnya sudah dibuat transparan). Kalau gambarnya belum ada, otomatis pakai ilustrasi SVG cadangan.
- **Snoopy melayang di pojok kanan bawah** 🐶 — dipencet akan muncul **bunga bermekaran** 🌸.
- **Interaktif**:
  - Hati & emoji **melayang naik** terus-menerus di latar.
  - **Klik di mana saja** → ledakan hati kecil. 💥
  - **Jejak kursor** berbentuk hati (khusus perangkat dengan mouse).
  - **Animasi muncul** saat halaman di-scroll.
  - **Progress bar** baca di paling atas + navbar yang meng-highlight bagian aktif.
  - Bagian **Kejutan 🎁** yang mengeluarkan pesan manis random.
- **Bagian**: Tentang, Favorit (**4 makanan**: Dubai Chewy Cookie, Chocoberry, Soto Betawi, Opor · **3 minuman**: Teazzi, Alchemy, Boost), Sahabat (SMP & SMA), Pesan (quotes), Kejutan, Footer.
- Responsif (HP & desktop) serta menghormati `prefers-reduced-motion`.

## 🚀 Menjalankan

```bash
npm install
npm run dev
```

Lalu buka alamat yang muncul (biasanya http://localhost:5173).

Build untuk produksi:

```bash
npm run build
npm run preview
```

## 🖼️ Menaruh Foto Kamu

Taruh foto di folder **`public/photos/`** dengan nama seperti ini (ekstensi **bebas**):

| Nama file (tanpa ekstensi) | Dipakai untuk         |
| -------------------------- | --------------------- |
| `disca-beranda`            | Foto di beranda       |
| `disca-tentang`            | Foto di bagian Tentang |
| `sahabat-smp`              | Foto sahabat SMP      |
| `sahabat-sma`              | Foto sahabat SMA      |
| `snoopy`                   | Gambar Snoopy (PNG transparan paling bagus) |

Ekstensi yang otomatis dikenali: **`.jpg`, `.jpeg`, `.png`, `.webp`** (huruf kecil maupun besar).
Jadi `disca-beranda.jpeg` **atau** `disca-beranda.jpg` **atau** `disca-beranda.png` — semuanya jalan, **nggak perlu di-rename**.

Kalau file-nya belum ada, web otomatis menampilkan ilustrasi Snoopy lucu sebagai pengganti — jadi web tetap terlihat rapi.

> Mau ganti nama file? Ubah di `src/data.js` (bagian `heroPhoto`, `aboutPhoto`, dan `friends`). Tulis path-nya tanpa ekstensi.

## 🩷 Mengubah Tulisan

Semua teks (nama, sekolah, makanan favorit, quotes, pesan kejutan) ada di **`src/data.js`**.
Warna tema ada di **`src/index.css`** bagian `:root`.

## 📁 Struktur

```
src/
  App.jsx                  # merangkai semua bagian + efek interaktif
  data.js                  # semua isi/tulisan
  index.css                # tema global (pink, font, animasi)
  hooks/
    useReveal.js           # animasi muncul saat scroll
    useFloatingHearts.js   # hati melayang + ledakan klik
    useTrail.js            # jejak kursor
  components/
    Navbar / Hero / About / Favorites / Friends / Quotes / Surprise / Footer
    Snoopy.jsx             # ilustrasi SVG cadangan + ikon kecil (hati, jejak kaki, sparkle)
    SnoopyImage.jsx        # gambar Snoopy (foto) + deteksi ekstensi otomatis
    SnoopyPet.jsx          # Snoopy melayang yang bisa dipencet
    Flowers.jsx            # bunga bermekaran saat Snoopy dipencet
    Photo.jsx              # bingkai foto + fallback Snoopy
```

Dibuat dengan 🩷 dan sedikit keju. Semoga suka ya, Discha!
