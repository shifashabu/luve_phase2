// ─────────────────────────────────────────────────────────
// App.jsx — ROOT COMPONENT
//
// PHASE 2 LESSON: Component Architecture & State Lifting
//
// This is where ALL shared state lives.
// State that multiple components need is "lifted up" here,
// then passed DOWN as props.
//
// Component tree:
//   App
//   ├── Navbar      (receives: cartCount, onCartOpen)
//   ├── Hero        (receives: onShopClick)
//   ├── ProductList (receives: products, onAddToCart)
//   ├── About       (receives: onShopClick)
//   ├── ContactForm (receives: onToast)
//   ├── Footer
//   ├── CartSidebar (receives: isOpen, cart data, handlers)
//   └── ToastContainer (receives: toasts)
// ─────────────────────────────────────────────────────────

import { useState } from 'react';

// Components
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import ProductList     from './components/ProductList';
import About           from './components/About';
import ContactForm     from './components/ContactForm';
import Footer          from './components/Footer';
import CartSidebar     from './components/CartSidebar';
import ToastContainer  from './components/ToastContainer';

// Custom Hooks
import useCart         from './hooks/useCart';
import useToast        from './hooks/useToast';

// Data
import products        from './data/products';

function App() {
  // ── CART STATE (managed by custom hook) ──────────────────
  const {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCart();

  // ── TOAST STATE ───────────────────────────────────────────
  const { toasts, addToast } = useToast();

  // ── UI STATE ──────────────────────────────────────────────
  const [cartOpen, setCartOpen] = useState(false);

  // ── HANDLERS ──────────────────────────────────────────────
  // When user clicks "Add to Cart" on a ProductCard:
  const handleAddToCart = (product) => {
    addItem(product);
    addToast(`${product.name} added to cart! 🌹`);
  };

  // Scroll to shop section smoothly
  const handleShopClick = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  // ── RENDER ────────────────────────────────────────────────
  return (
    <div className="App">

      {/* NAVBAR — gets cart count and open handler as props */}
      <Navbar
        cartCount={totalItems}
        onCartOpen={() => setCartOpen(true)}
      />

      {/* HERO — gets shop navigation function as prop */}
      <Hero onShopClick={handleShopClick} />

      {/* PRODUCT LIST — gets products data and add handler */}
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
      />

      {/* ABOUT — gets shop navigation function as prop */}
      <About onShopClick={handleShopClick} />

      {/* CONTACT FORM — gets toast function as prop */}
      <ContactForm onToast={addToast} />

      {/* FOOTER — no props needed */}
      <Footer />

      {/* CART SIDEBAR — gets all cart state and handlers */}
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        totalPrice={totalPrice}
        onRemove={removeItem}
        onUpdateQty={updateQuantity}
        onClear={clearCart}
      />

      {/* TOAST NOTIFICATIONS */}
      <ToastContainer toasts={toasts} />

    </div>
  );
}

export default App;
