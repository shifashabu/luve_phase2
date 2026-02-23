// ─────────────────────────────────────────────────────────
// components/About.jsx
// LESSON: useReveal hook + props (onShopClick)
// ─────────────────────────────────────────────────────────

import useReveal from '../hooks/useReveal';

function About({ onShopClick }) {
  const imgRef  = useReveal();
  const textRef = useReveal();

  return (
    <section className="about-section" id="about">
      <div className="about-section__inner">

        {/* IMAGE */}
        <div className="about-section__img-wrap reveal" ref={imgRef}>
          <img
            src="/images/bag.jpeg"
            alt="Luvé gift collection"
            className="about-section__img"
          />
          <div className="about-section__badge">
            <span className="about-section__badge-brand">Luvé</span>
            <span className="about-section__badge-year">Est. 2025</span>
          </div>
        </div>

        {/* TEXT */}
        <div className="about-section__text reveal" ref={textRef}>
          <span className="section-label">Our Story</span>
          <h2 className="section-title">
            Born from <em>Passion</em>
          </h2>
          <div className="about-section__divider" />

          <p className="about-section__body">
            At <strong>Luvé</strong>, every perfume is crafted with love and attention to detail.
            We blend the finest ingredients to create timeless, luxurious scents that linger and inspire.
          </p>
          <p className="about-section__body">
            Our collections are designed for those who appreciate elegance, sophistication,
            and the art of fragrance — from delicate floral notes to warm, captivating aromas.
          </p>
          <p className="about-section__body">
            Every bottle is a love letter to the art of scent.
          </p>

          <button className="btn-gold" onClick={onShopClick} style={{ marginTop: '12px' }}>
            Explore Collection
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;
