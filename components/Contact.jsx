function Contact() {
  return (
    <section className="section wrap" id="contact" data-screen-label="08 Contact">
      <div className="section-header">
        <div className="eyebrow"><span className="num">§ 08</span> Start a conversation</div>
        <div>
          <h2 className="h2">Free 20-minute scoping call. Remote, nationwide.</h2>
        </div>
      </div>

      <div className="contact-block">
        <div className="contact-left">
          <h3 className="h1">Have a workflow in mind?</h3>
          <p className="lede">Tell me what's eating the most hours per week. If it's a fit, we'll have something working in four.</p>
          <div className="contact-rows">
            <div className="contact-row">
              <div className="k">Direct line</div>
              <div className="v"><a href="tel:7176695308">(717) 669-5308</a></div>
            </div>
            <div className="contact-row">
              <div className="k">LinkedIn</div>
              <div className="v"><a href="https://www.linkedin.com/in/scott-garcia-651276283/" target="_blank" rel="noreferrer">/in/scott-garcia-651276283</a></div>
            </div>
            <div className="contact-row">
              <div className="k">Based</div>
              <div className="v">State College, Pennsylvania</div>
            </div>
            <div className="contact-row">
              <div className="k">Coverage</div>
              <div className="v">Remote · U.S. nationwide</div>
            </div>
            <div className="contact-row">
              <div className="k">Availability</div>
              <div className="v">May 1–31, 2026 · one slot</div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="calendly-card">
            <div className="label">⌬ Direct booking</div>
            <h4>30-minute scoping call</h4>
            <div className="sub">No prep needed. Bring the workflow you wish you didn't do.</div>
            <a href="https://calendly.com/scottdgarciajr/30min" target="_blank" rel="noreferrer" className="btn" style={{ marginTop: 24 }}>
              Open calendar <span className="arrow">→</span>
            </a>
          </div>
          <p className="small" style={{ marginTop: 28, fontFamily: 'var(--serif)', textTransform: 'none', letterSpacing: 0, fontStyle: 'italic', fontSize: 15, color: 'var(--ink-3)', lineHeight: 1.6 }}>
            "Working software, not a slide deck. A system you own, not a subscription."
          </p>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
