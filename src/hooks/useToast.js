// ─────────────────────────────────────────────────────────
// hooks/useToast.js
// Manages toast notification state
// ─────────────────────────────────────────────────────────

import { useState, useCallback } from 'react';

function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, icon = '✦') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, icon }]);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  return { toasts, addToast };
}

export default useToast;
