function Nav({ scrollPct }) {
  return (
    <React.Fragment>
      <div className="scroll-bar"><i style={{ transform: `scaleX(${scrollPct})` }} /></div>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <span className="dot" />
            <span><b>Scott Garcia</b></span>
            <span className="brand-mark">AI Architect</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#results">Results</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href="#contact" className="nav-cta">
            Book a call <span className="arrow">→</span>
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
}

window.Nav = Nav;
