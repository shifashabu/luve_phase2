// ─────────────────────────────────────────────────────────
// components/ContactForm.jsx
//
// PHASE 2 LESSON: Controlled Forms
//
// In React, form inputs are "controlled" — meaning React
// state is the single source of truth for input values.
// Every keystroke updates state → state updates the input.
// ─────────────────────────────────────────────────────────

import { useState } from 'react';
import useReveal from '../hooks/useReveal';

// Initial form state — defined outside component to avoid re-creation
const INITIAL_FORM = { name: '', email: '', message: '' };

function ContactForm({ onToast }) {
  // STATE: one object holds all form field values
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const revealRef = useReveal();

  // CONTROLLED INPUT HANDLER
  // One function handles ALL inputs using computed property names
  // e.target.name matches the "name" attribute on each input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    //                          ↑ [name] is a dynamic key — same as form.name, form.email, etc.
  };

  // FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent browser from refreshing page

    // Basic validation
    if (!form.name.trim() || !form.email.trim()) {
      onToast('Please fill in all required fields', '⚠️');
      return;
    }

    // In Phase 4 this will be: await fetch('/api/contact', { method: 'POST', body: form })
    console.log('Form submitted:', form);

    setSubmitted(true);
    setForm(INITIAL_FORM); // reset form
    onToast(`Thank you ${form.name}! We'll be in touch soon. 🌹`, '✦');

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__inner reveal" ref={revealRef}>
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title">
          We'd Love to <em>Hear from You</em>
        </h2>

        {submitted ? (
          <div style={{ marginTop: '48px', padding: '40px', background: '#fff', borderRadius: '16px' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: 'var(--dark)', marginBottom: '8px' }}>
              Thank you for reaching out! ✦
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Each input has name= that matches the form state key */}
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={form.name}       // controlled: value FROM state
              onChange={handleChange} // updates state on each keystroke
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
            />
            <button type="submit" className="btn-gold">
              Send Message ✦
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
