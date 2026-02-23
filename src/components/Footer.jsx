// components/Footer.jsx

function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <span className="footer__brand-name">Luvé</span>
          <p className="footer__brand-desc">
            Luxury perfume crafted with love for those who live and love beautifully.
          </p>
        </div>

        {[
          {
            title: 'Shop',
            links: ['All Fragrances', 'Rose Bliss', 'Vanilla Whisper', 'Citrus Glow', 'Gift Sets'],
          },
          {
            title: 'Brand',
            links: ['Our Story', 'Ingredients', 'Sustainability', 'Press'],
          },
          {
            title: 'Help',
            links: ['Contact Us', 'Shipping & Returns', 'FAQ', 'Track Order'],
          },
        ].map(col => (
          <div key={col.title}>
            <span className="footer__col-title">{col.title}</span>
            <ul className="footer__links">
              {col.links.map(link => (
                <li key={link}>
                  <a onClick={() => scrollTo('products')}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">© {year} Luvé — Crafted by Love. All rights reserved.</p>
        <div className="footer__socials">
          {['Instagram', 'TikTok', 'Pinterest'].map(s => (
            <a key={s} href="#">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
