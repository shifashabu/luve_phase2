// ─────────────────────────────────────────────────────────
// components/Navbar.jsx
//
// PHASE 2 LESSON: Props & State
// Props received: { cartCount, onCartOpen }
// State managed: scrolled (changes navbar bg on scroll)
// ─────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';

// Props are passed FROM App.jsx into this component
function Navbar({ cartCount, onCartOpen }) {
  // LOCAL STATE: tracks whether user has scrolled down
  const [scrolled, setScrolled] = useState(false);

  // useEffect: runs side effects (like event listeners)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // CLEANUP: remove listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // [] = only run once on mount

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* LOGO */}
      <div className="navbar__logo" onClick={() => scrollTo('home')}>
        <img src="/images/logo.png" alt="Luvé logo" className="navbar__logo-img" />
        <span className="navbar__logo-text">Luvé</span>
      </div>

      {/* NAV LINKS */}
      <ul className="navbar__links">
        <li><a onClick={() => scrollTo('home')}>Home</a></li>
        <li><a onClick={() => scrollTo('products')}>Shop</a></li>
        <li><a onClick={() => scrollTo('about')}>About</a></li>
        <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
      </ul>

      {/* CART BUTTON — uses prop passed from App */}
      <div className="navbar__actions">
        <button className="btn-gold navbar__cart-btn" onClick={onCartOpen}>
          Cart
          {/* Conditionally render badge only if cart has items */}
          {cartCount > 0 && (
            <span className="navbar__cart-count">{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
