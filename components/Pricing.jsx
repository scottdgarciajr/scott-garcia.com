function Pricing() {
  return (
    <section className="section wrap" id="pricing" data-screen-label="06 Pricing">
      <div className="section-header">
        <div className="eyebrow"><span className="num">§ 06</span> Investment</div>
        <div>
          <h2 className="h2">Flat-rate. One time. You own everything at the end.</h2>
        </div>
      </div>

      <div className="pricing">
        <div className="pricing-main">
          <div className="eyebrow"><span className="num">—</span> Per project</div>
          <div className="price">$1,500<small>&nbsp;–&nbsp;</small>$4,000</div>
          <p className="lede" style={{ maxWidth: '34ch', marginBottom: 0 }}>
            One workflow, scoped on a 20-minute call. Priced by complexity, not hours.
          </p>
          <div className="price-rows">
            <div className="price-row"><div className="k">Engagement</div><div className="v">4 weeks · scoped, shipped, supported</div></div>
            <div className="price-row"><div className="k">Payment</div><div className="v">50% to start · 50% on hand-off</div></div>
            <div className="price-row"><div className="k">Ownership</div><div className="v">100% — code, prompts, infra, docs</div></div>
            <div className="price-row"><div className="k">Support</div><div className="v">Two-week post-launch window included</div></div>
            <div className="price-row"><div className="k">Retainer</div><div className="v" style={{ fontStyle: 'italic', color: 'var(--ink-3)' }}>None. Ever.</div></div>
          </div>
        </div>

        <div className="pricing-side">
          <div className="guarantee">
            <div className="seal">⌬ The Guarantee</div>
            <h4>If the system doesn't pay for itself within 12&nbsp;months, I refund every dollar.</h4>
            <p className="body">Most clients save 15–35 hours/week on the automated process. At minimum wage that's $600–$1,400/month. The math usually works inside the first month.</p>
          </div>
          <p className="small" style={{ marginTop: 24, lineHeight: 1.7, textTransform: 'none', letterSpacing: 0, fontFamily: 'var(--serif)', fontSize: 15, fontStyle: 'italic', color: 'var(--ink-3)' }}>
            Why so low? I'm a Schreyer Honors student finishing my B.S. in Cybersecurity at Penn State. I take 1–2 client projects per semester. The rate reflects the schedule — not the work.
          </p>
        </div>
      </div>
    </section>
  );
}

window.Pricing = Pricing;
