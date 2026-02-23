// ─────────────────────────────────────────────────────────
// data/products.js
// This is your DATA LAYER — in Phase 4 this will come from MongoDB.
// For now it lives here so you can learn props & state first.
// ─────────────────────────────────────────────────────────

const products = [
  {
    id: 1,
    name: 'Rose Bliss',
    slug: 'rose-bliss',
    category: 'floral',
    price: 89,
    image: '/images/rose.jpeg',
    description: 'A delicate bouquet of fresh roses with a hint of vanilla, capturing timeless elegance.',
    notes: {
      top: 'Bulgarian Rose, Pink Pepper',
      middle: 'Jasmine, Peony',
      base: 'Vanilla, White Musk',
    },
    featured: true,
  },
  {
    id: 2,
    name: 'Vanilla Whisper',
    slug: 'vanilla-whisper',
    category: 'oriental',
    price: 89,
    image: '/images/vanilla.jpeg',
    description: 'Soft vanilla and warm amber notes create a comforting, inviting fragrance for everyday luxury.',
    notes: {
      top: 'Bergamot, Lemon',
      middle: 'Vanilla Orchid, Heliotrope',
      base: 'Amber, Sandalwood, Musk',
    },
    featured: true,
  },
  {
    id: 3,
    name: 'Citrus Glow',
    slug: 'citrus-glow',
    category: 'citrus',
    price: 89,
    image: '/images/citrus.jpeg',
    description: 'Bright citrus aromas blended with subtle floral undertones for a vibrant, energising aura.',
    notes: {
      top: 'Sicilian Lemon, Grapefruit',
      middle: 'Orange Blossom, Neroli',
      base: 'Cedarwood, Vetiver',
    },
    featured: true,
  },
];

export default products;
