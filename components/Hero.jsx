function Hero() {
  return (
    <section className="hero wrap" id="top" data-screen-label="01 Hero">
      <div className="hero-meta reveal">
        <div className="eyebrow"><span className="num">§ 01</span> Capabilities · 2026</div>
        <div className="eyebrow" style={{ textAlign: 'center' }}>Remote · U.S. Nationwide</div>
        <div className="meta-right">
          <span className="status-pill">
            <span className="live" />
            One slot — May 2026
          </span>
        </div>
      </div>

      <h1 className="display reveal" style={{ transitionDelay: '.1s' }}>
        Custom AI<br />
        automation,<br />
        <span className="accent">built in four weeks</span>—<br />
        yours to keep.
      </h1>

      <div className="hero-sub reveal" style={{ transitionDelay: '.2s' }}>
        <div className="eyebrow">Built for SMBs</div>
        <p className="lede">
          I design and ship AI systems that replace the repetitive work eating your team's week — intake, scheduling, follow-up, document review.
        </p>
        <div>
          <p className="body">
            Flat fee. Fixed timeline. Full source code and documentation handed over at the end. No retainer, no scope creep, no slide deck.
          </p>
          <p className="body">
            If the system doesn't pay for itself within 12 months, I refund every dollar.
          </p>
        </div>
      </div>

      <div className="hero-cta reveal" style={{ transitionDelay: '.3s' }}>
        <a href="https://calendly.com/scottdgarciajr/30min" target="_blank" rel="noreferrer" className="btn">
          Book a 20-minute scoping call <span className="arrow">→</span>
        </a>
        <a href="#work" className="btn btn-ghost">
          See the work
        </a>
        <span className="small" style={{ marginLeft: 8 }}>Free · No commitment</span>
      </div>
    </section>
  );
}

window.Hero = Hero;
