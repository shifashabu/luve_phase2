// components/ToastContainer.jsx
// Renders all active toast notifications

function ToastContainer({ toasts }) {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className="toast">
          <span className="toast__icon">{toast.icon}</span>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
