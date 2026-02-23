// ─────────────────────────────────────────────────────────
// components/CartSidebar.jsx
//
// PHASE 2 LESSON: Controlled components + lifting state up
//
// Props:
//   isOpen        — boolean, controls whether sidebar shows
//   onClose       — function to close the sidebar
//   items         — array of cart items (from parent state)
//   totalPrice    — number
//   onRemove      — function(id)
//   onUpdateQty   — function(id, qty)
//   onClear       — function
// ─────────────────────────────────────────────────────────

function CartSidebar({ isOpen, onClose, items, totalPrice, onRemove, onUpdateQty, onClear }) {
  // If cart is closed, render nothing
  // This is CONDITIONAL RENDERING — React pattern
  if (!isOpen) return null;

  return (
    <>
      {/* OVERLAY — clicking it closes the cart */}
      <div className="cart-overlay" onClick={onClose} />

      {/* SIDEBAR PANEL */}
      <aside className="cart-sidebar">

        {/* HEADER */}
        <div className="cart-sidebar__header">
          <h2 className="cart-sidebar__title">
            Your <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Cart</em>
          </h2>
          <button className="cart-sidebar__close" onClick={onClose}>×</button>
        </div>

        {/* BODY */}
        <div className="cart-sidebar__body">
          {items.length === 0 ? (
            /* EMPTY STATE */
            <div className="cart-empty">
              <p>Your cart is empty</p>
              <button className="btn-outline" onClick={onClose}>Continue Shopping</button>
            </div>
          ) : (
            /* ITEM LIST — map over items array */
            items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item__img" />

                <div className="cart-item__info">
                  <p className="cart-item__name">{item.name}</p>
                  <p className="cart-item__price">${item.price}</p>

                  {/* QUANTITY CONTROLS */}
                  <div className="cart-item__qty">
                    <button
                      className="cart-item__qty-btn"
                      onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                    >−</button>

                    <span className="cart-item__qty-num">{item.quantity}</span>

                    <button
                      className="cart-item__qty-btn"
                      onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                </div>

                {/* SUBTOTAL for this item */}
                <div style={{ textAlign: 'right', minWidth: '60px' }}>
                  <p style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* REMOVE BUTTON */}
                <button className="cart-item__remove" onClick={() => onRemove(item.id)}>×</button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER — only shows when cart has items */}
        {items.length > 0 && (
          <div className="cart-sidebar__footer">
            <div className="cart-sidebar__subtotal">
              <span>Shipping</span>
              <span style={{ color: 'var(--gold)' }}>Free</span>
            </div>
            <div className="cart-sidebar__total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="btn-gold cart-sidebar__checkout">
              Proceed to Checkout
            </button>
            <button
              onClick={onClear}
              style={{ display: 'block', width: '100%', textAlign: 'center', marginTop: '12px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', fontSize: '0.75rem', letterSpacing: '0.1em' }}
            >
              Clear Cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

export default CartSidebar;
