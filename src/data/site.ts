// Semua konten halaman ada di sini. Ubah teks, harga, alamat, dan jam buka
// di file ini — komponen hanya membaca datanya.

export const site = {
  name: 'Kreandra Coffee',
  tagline: 'Specialty Coffee',
  url: 'https://kreandra.coffee',
  description:
    'Kreandra Coffee is a neighborhood specialty coffee house in Jakarta. Single-origin beans, small-batch roasting, fresh pastries, and a calm corner to stay a while. Order ahead or visit us in Kemang and Menteng.',
  email: 'hello@kreandra.coffee',
  phone: '+62 812 3456 7890',
  instagram: '@kreandra.coffee',
  instagramUrl: 'https://instagram.com/kreandra.coffee',
  foundingYear: '2019',
};

export type Price = string;

export const bestSellers = [
  {
    name: 'Signature Latte',
    price: 'Rp 38.000',
    image: '/images/product-latte.webp',
    alt: 'Signature Latte served iced in a tall glass on a wooden table',
    badge: '#1 Top Pick',
    badgeTone: 'accent',
  },
  {
    name: 'Brown Sugar Oat Latte',
    price: 'Rp 42.000',
    image: '/images/product-oat.webp',
    alt: 'Brown Sugar Oat Latte, creamy and iced, in a textured glass',
  },
  {
    name: 'Matcha Espresso Fusion',
    price: 'Rp 45.000',
    image: '/images/product-matcha.webp',
    alt: 'Matcha being poured over ice and milk in a tall glass',
    badge: 'New',
    badgeTone: 'ink',
    position: 'center 70%',
  },
  {
    name: 'Iced Americano',
    price: 'Rp 30.000',
    image: '/images/product-americano.webp',
    alt: 'A shot of espresso beside a glass of ice on a steel tray',
  },
] as const;

export const menu = [
  {
    category: 'Coffee',
    icon: 'cup',
    items: [
      { name: 'Espresso', note: 'Double shot, single origin', price: 'Rp 25.000' },
      { name: 'Americano', note: 'Hot or iced', price: 'Rp 30.000' },
      { name: 'Cappuccino', note: 'Velvety microfoam', price: 'Rp 35.000' },
      { name: 'Signature Latte', note: 'House blend, palm sugar', price: 'Rp 38.000' },
      { name: 'Pour Over', note: 'Rotating single origin', price: 'Rp 40.000' },
    ],
  },
  {
    category: 'Non-Coffee',
    icon: 'glass',
    items: [
      { name: 'Matcha Latte', note: 'Ceremonial grade', price: 'Rp 40.000' },
      { name: 'Hojicha Latte', note: 'Roasted, nutty, low caffeine', price: 'Rp 40.000' },
      { name: 'Dark Chocolate', note: 'Single-origin cocoa', price: 'Rp 38.000' },
      { name: 'Lemon Tea', note: 'Cold-brewed black tea', price: 'Rp 28.000' },
      { name: 'Sparkling Yuzu', note: 'Bright and refreshing', price: 'Rp 32.000' },
    ],
  },
  {
    category: 'Pastry',
    icon: 'bread',
    items: [
      { name: 'Butter Croissant', note: 'Baked every morning', price: 'Rp 28.000' },
      { name: 'Banana Bread', note: 'Walnut, cinnamon', price: 'Rp 25.000' },
      { name: 'Almond Danish', note: 'Flaky, lightly sweet', price: 'Rp 32.000' },
      { name: 'Pandan Chiffon', note: 'Soft, fragrant, local favorite', price: 'Rp 22.000' },
      { name: 'Cheese Tart', note: 'Baked, creamy center', price: 'Rp 24.000' },
    ],
  },
] as const;

export const locations = [
  {
    name: 'Kreandra Kemang',
    street: 'Jl. Kemang Raya No. 18',
    city: 'Jakarta Selatan',
    postalCode: '12730',
    hours: [
      { days: 'Mon–Fri', time: '07.00 – 22.00' },
      { days: 'Sat–Sun', time: '08.00 – 23.00' },
    ],
    mapsUrl: 'https://maps.google.com/?q=Jl.+Kemang+Raya+No.+18+Jakarta+Selatan',
  },
  {
    name: 'Kreandra Menteng',
    street: 'Jl. Cikini Raya No. 42',
    city: 'Jakarta Pusat',
    postalCode: '10330',
    hours: [
      { days: 'Mon–Fri', time: '07.00 – 22.00' },
      { days: 'Sat–Sun', time: '08.00 – 23.00' },
    ],
    mapsUrl: 'https://maps.google.com/?q=Jl.+Cikini+Raya+No.+42+Jakarta+Pusat',
  },
] as const;

export const testimonials = [
  {
    quote:
      'The Brown Sugar Oat Latte is the reason I take the long way to the office. Sweet, but never too sweet, and the ice lasts the whole walk.',
    name: 'Raisa Putri',
    meta: 'Regular since 2021',
    initials: 'RP',
    tone: '#3F5A3A',
  },
  {
    quote:
      'Good light, quiet playlist, sockets at every table. I have written half my thesis at the long table by the window.',
    name: 'Dimas Aditya',
    meta: 'Kemang',
    initials: 'DA',
    tone: '#8FA784',
  },
  {
    quote:
      'Come before nine for the croissants. They sell out, and the pandan chiffon with a pour-over is the best Sunday breakfast in Menteng.',
    name: 'Nadia Larasati',
    meta: 'Menteng',
    initials: 'NL',
    tone: '#2B2F28',
  },
] as const;
