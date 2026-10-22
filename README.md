# Kreandra Coffee — Landing Page

Landing page satu halaman untuk Kreandra Coffee, dibangun dengan [Astro](https://astro.build).
Output build adalah HTML statis murni (tanpa JavaScript framework di browser), jadi ringan dan SEO-friendly.

## Menjalankan

```bash
npm install      # sekali saja
npm run dev      # server development di http://localhost:4321
npm run build    # hasil produksi di folder dist/
npm run preview  # cek hasil build secara lokal
```

## Struktur

```
src/
  data/site.ts          ← SEMUA konten: nama, kontak, harga, menu, lokasi, jam buka, testimoni
  layouts/Base.astro    ← <head>: meta, Open Graph, canonical, schema.org (CafeOrCoffeeShop), font
  styles/global.css     ← token warna/tipografi, tombol, kartu, helper layout
  components/           ← satu file per section (Header, Hero, BestSellers, EscapeBanner,
                           About, Menu, Locations, Testimonials, Highlights, Footer)
  pages/index.astro     ← menyusun section jadi halaman
public/
  images/               ← foto (WebP) + og.jpg untuk preview share
  favicon.svg, robots.txt
astro.config.mjs        ← ganti `site` dengan domain produksi
```

## Yang perlu kamu ganti sebelum live

1. **Domain** — `site` di `astro.config.mjs` dan `site.url` di `src/data/site.ts`.
   Dipakai untuk canonical URL, Open Graph, `sitemap-index.xml`, dan `robots.txt`.
2. **Data kafe** — harga, alamat, jam buka, email, telepon, Instagram di `src/data/site.ts`.
   Teks di sana saat ini contoh/fiktif.
3. **Peta** — ganti placeholder di `src/components/Locations.astro` dengan `<iframe>` embed Google Maps.
4. **Newsletter** — isi `action` form di `src/components/Footer.astro` dengan endpoint layanan email kamu.
5. **Foto** — foto di `public/images/` berasal dari Pexels (lisensi bebas). Ganti dengan foto asli kafe kalau sudah ada;
   pertahankan nama file supaya tidak perlu mengubah kode.

## SEO yang sudah disiapkan

- Satu `<h1>` di hero, heading berjenjang per section, teks asli di HTML (bukan dirender JS).
- `<title>`, meta description, canonical, Open Graph + Twitter card, gambar OG 1200×630.
- Structured data JSON-LD `CafeOrCoffeeShop` untuk tiap lokasi (alamat, jam buka, kontak).
- `sitemap-index.xml` otomatis (integrasi `@astrojs/sitemap`) + `robots.txt`.
- Gambar WebP dengan `width`/`height` (anti layout shift), hero di-`preload`, sisanya `loading="lazy"`.
- Font Google di-`preconnect`. Kalau ingin lebih cepat lagi, self-host font ke `public/fonts/`.

## Deploy

Hasil `npm run build` ada di `dist/` — upload ke hosting statis mana pun, atau hubungkan repo ke
Vercel/Netlify/Cloudflare Pages (keduanya mendeteksi Astro otomatis).
