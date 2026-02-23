// ─────────────────────────────────────────────────────────
// components/Hero.jsx
//
// PHASE 2 LESSON: Props + useEffect + conditional rendering
// Props: { onShopClick }
// ─────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';

function Hero({ onShopClick }) {
  // Controls image entrance animation
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    // Small delay so animation feels intentional
    const timer = setTimeout(() => setImgLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Sparkle positions — we map over an array to render multiple elements
  const sparkles = [
    { top: '15%', left: '8%',  delay: '0s' },
    { top: '70%', left: '5%',  delay: '2s' },
    { top: '30%', left: '92%', delay: '1s' },
    { top: '80%', left: '88%', delay: '3s' },
    { top: '55%', left: '50%', delay: '4s' },
  ];

  return (
    <section className="hero" id="home">
      {/* Ambient background glow */}
      <div className="hero__glow" />

      {/* Sparkles — array.map() renders one element per item */}
      <div className="sparkles">
        {sparkles.map((s, i) => (
          <div
            key={i}
            className="sparkle"
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          />
        ))}
      </div>

      <div className="hero__inner">
        {/* LEFT: Text content */}
        <div className="hero__text">
          <span className="hero__eyebrow">✦ Crafted by Love</span>

          <h1 className="hero__title">
            Signature<br />
            <em>Collection</em>
          </h1>

          <p className="hero__quote">
            "Fragrance is the art that speaks to the soul before words ever do."
          </p>

          <p className="hero__lead">
            Timeless scents, handcrafted with love to make every moment unforgettable.
          </p>

          <div className="hero__buttons">
            {/* onClick prop calls function passed from parent */}
            <button className="btn-gold" onClick={onShopClick}>
              Shop the Collection
            </button>
            <button className="btn-outline" onClick={() => scrollTo('about')}>
              Our Story
            </button>
          </div>
        </div>

        {/* RIGHT: Image with animation */}
        <div className="hero__image-wrap">
          <span className="hero__badge">✦ New Collection 2025</span>

          {/* Conditional class: "loaded" added after delay triggers CSS transition */}
          <img
            src="/images/hero.jpeg"
            alt="Luvé Signature Collection"
            className={`hero__image ${imgLoaded ? 'loaded' : ''}`}
          />

          {/* Floating info card */}
          <div className="hero__float-card">
            <p>New Arrival</p>
            <p>Citrus Glow 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
