// ─────────────────────────────────────────────────────────
// hooks/useCart.js
//
// PHASE 2 LESSON: Custom Hooks
// A custom hook is just a function that starts with "use"
// and can use other React hooks inside it.
//
// This hook manages ALL cart logic in one place.
// Any component that needs the cart just calls useCart().
// ─────────────────────────────────────────────────────────

import { useState, useCallback } from 'react';

function useCart() {
  // STATE: our cart is an array of items
  // Each item = { id, name, price, image, quantity }
  const [items, setItems] = useState([]);

  // DERIVED STATE: computed from items
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ADD ITEM
  // useCallback prevents this function from being recreated on every render
  const addItem = useCallback((product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);

      if (existing) {
        // Already in cart — just increase quantity
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      // Not in cart — add as new item with quantity 1
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      }];
    });
  }, []);

  // REMOVE ITEM
  const removeItem = useCallback((productId) => {
    setItems(prev => prev.filter(i => i.id !== productId));
  }, []);

  // UPDATE QUANTITY
  const updateQuantity = useCallback((productId, newQty) => {
    if (newQty < 1) return; // don't allow 0 or negative
    setItems(prev =>
      prev.map(i => i.id === productId ? { ...i, quantity: newQty } : i)
    );
  }, []);

  // CLEAR CART
  const clearCart = useCallback(() => setItems([]), []);

  // Return everything components need
  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
}

export default useCart;
