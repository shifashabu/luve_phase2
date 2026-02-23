// ─────────────────────────────────────────────────────────
// components/ProductList.jsx
//
// PHASE 2 LESSON: Array methods in React (filter + map)
// Props: { products, onAddToCart }
//
// This component:
// 1. Manages filter state (which category is selected)
// 2. Filters the products array
// 3. Maps over filtered products to render ProductCard
// ─────────────────────────────────────────────────────────

import { useState } from 'react';
import ProductCard from './ProductCard';
import useReveal from '../hooks/useReveal';

// Get unique categories from products + add "all"
const CATEGORIES = ['all', 'floral', 'oriental', 'citrus', 'woody', 'fresh'];

function ProductList({ products, onAddToCart }) {
  // STATE: which filter tab is active
  const [activeFilter, setActiveFilter] = useState('all');

  const revealRef = useReveal();

  // DERIVED DATA: filter products based on active filter
  // array.filter() returns a new array with only matching items
  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter(p => p.category === activeFilter);

  return (
    <section className="products-section" id="products">
      <div className="max-width-wrapper" style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* HEADER */}
        <div className="products-section__header reveal" ref={revealRef}>
          <div>
            <span className="section-label">Curated Fragrances</span>
            <h2 className="section-title">Our <em>Collection</em></h2>
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="filter-tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        {/* array.map() renders one ProductCard per product */}
        <div className="products-section__grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}          // key tells React which item is which
                product={product}          // pass entire product object as prop
                onAddToCart={onAddToCart}  // pass function down as prop
              />
            ))
          ) : (
            // Conditional rendering: show message if no products match
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px 0' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', color: 'var(--muted)', fontSize: '1.1rem' }}>
                No fragrances in this category yet. Coming soon! ✦
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default ProductList;
