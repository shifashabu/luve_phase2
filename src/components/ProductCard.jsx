// ─────────────────────────────────────────────────────────
// components/ProductCard.jsx
//
// PHASE 2 LESSON: Reusable Components + Props
//
// This is a "dumb" component — it receives data via props
// and calls functions passed down from the parent.
// It knows NOTHING about the cart itself.
//
// Props:
//   product  — the product object { id, name, price, image, ... }
//   onAddToCart — function to call when "Add to Cart" is clicked
// ─────────────────────────────────────────────────────────

import { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
  // Local state: just for the "Added!" feedback animation
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    // Call the function passed from parent
    onAddToCart(product);

    // Show "Added!" for 1.5 seconds then reset
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div className="product-card">
      {/* IMAGE SECTION */}
      <div className="product-card__img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__img"
        />

        {/* Hover overlay with Quick View */}
        <div className="product-card__overlay">
          <button className="product-card__quick">Quick View</button>
        </div>
      </div>

      {/* BODY SECTION */}
      <div className="product-card__body">
        {/* Category label */}
        <span className="product-card__category">{product.category}</span>

        {/* Product name — passed as a prop */}
        <h3 className="product-card__name">{product.name}</h3>

        {/* Description — passed as a prop */}
        <p className="product-card__desc">{product.description}</p>

        {/* Footer: price + add button */}
        <div className="product-card__footer">
          <span className="product-card__price">${product.price}</span>

          <button
            className={`btn-gold product-card__add ${justAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {/* Conditional rendering: show different text based on state */}
            {justAdded ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
