# 🌹 Luvé — Phase 2: React

## 📁 File Structure

```
src/
├── data/
│   └── products.js        ← your data (Phase 4: moves to MongoDB)
│
├── hooks/
│   ├── useCart.js         ← cart logic (add, remove, update qty)
│   ├── useToast.js        ← toast notifications
│   └── useReveal.js       ← scroll reveal animations
│
├── components/
│   ├── Navbar.jsx         ← fixed nav, scrolled state
│   ├── Hero.jsx           ← hero section, image animation
│   ├── ProductCard.jsx    ← single product card (reusable)
│   ├── ProductList.jsx    ← grid of cards + filter tabs
│   ├── About.jsx          ← about section
│   ├── CartSidebar.jsx    ← slide-in cart panel
│   ├── ContactForm.jsx    ← controlled form
│   ├── ToastContainer.jsx ← toast notification UI
│   └── Footer.jsx         ← site footer
│
├── App.jsx                ← ROOT — all state lives here
├── index.js               ← entry point
└── index.css              ← all styles
```

---
In Phase 2

### 1. Functional Components
Every UI piece is a function that returns JSX.
```jsx
function ProductCard({ product, onAddToCart }) {
  return <div className="product-card">...</div>;
}
```

### 2. Props
Data flows DOWN from parent to child via props.
```jsx
// Parent passes data:
<ProductCard product={myProduct} onAddToCart={handleAdd} />

// Child receives it:
function ProductCard({ product, onAddToCart }) { ... }
```

### 3. State (useState)
State is data that can change and causes re-renders.
```jsx
const [cartOpen, setCartOpen] = useState(false);
// Read:  cartOpen
// Write: setCartOpen(true)
```

### 4. useEffect
Runs code after render — for timers, events, API calls.
```jsx
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll); // cleanup
}, []); // [] = run once
```

### 5. Custom Hooks
Reusable logic extracted into functions starting with "use".
```jsx
// useCart.js — can be used in ANY component
const { items, addItem, totalPrice } = useCart();
```

### 6. Controlled Forms
React state is the single source of truth for inputs.
```jsx
const [form, setForm] = useState({ name: '', email: '' });
<input value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
```

### 7. Array Methods in JSX
```jsx
// .map() → render a component per item
products.map(p => <ProductCard key={p.id} product={p} />)

// .filter() → show only matching items
products.filter(p => p.category === 'floral')
```

### 8. Lifting State Up
Shared state lives in the closest common parent.
Cart state lives in App.jsx and is passed to Navbar + CartSidebar.

### 9. Conditional Rendering
```jsx
{cartCount > 0 && <span>{cartCount}</span>}
{isOpen ? <CartSidebar /> : null}
```

In Phase 3 you'll convert this to Next.js App Router:
- Each "page" (/, /shop, /product/[id]) becomes a separate file
- Images use Next.js `<Image>` component (faster loading)
- SEO metadata added per page
- Server Components vs Client Components
