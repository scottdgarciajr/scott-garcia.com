function Footer() {
  return (
    <footer className="footer wrap">
      <hr style={{ marginBottom: 40 }} />
      <div className="footer-grid">
        <div>
          <div>Scott Garcia</div>
          <div style={{ marginTop: 6 }}>AI Architect · Independent</div>
          <div style={{ marginTop: 6 }}>Schreyer Honors · Penn State</div>
        </div>
        <div className="colophon">
          Set in Newsreader &amp; Inter Tight. Hand-built in State College, Pennsylvania, between problem sets.
        </div>
        <div className="right">
          <div>scott-garcia.com</div>
          <div style={{ marginTop: 6 }}>© MMXXVI</div>
          <div style={{ marginTop: 6 }}>v · 1.0</div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
