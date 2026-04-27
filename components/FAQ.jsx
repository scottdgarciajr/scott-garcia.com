const FAQS = [
  {
    q: "You're a student — do you have real production experience?",
    a: "Yes. Forte Mental Fitness paid me to build a six-agent system that generated $377K+ in pipeline across 1,000+ contacts. Fenner Precision Polymers had me automate cybersecurity workflows that recover three months of audit time annually. This summer I join PwC as a Cyber Strategy & Risk intern. Most consultants charging 3× my rate have less production AI work shipped."
  },
  {
    q: "We've tried automation software before and it didn't stick.",
    a: "Off-the-shelf automation fails because it forces your process into someone else's schema. I build to your specific workflow — your CRM, your forms, your SOP — so there's nothing to bend around. And you keep the source, so it changes when your business changes."
  },
  {
    q: "We're too small to need AI.",
    a: "If you have a repetitive task that eats 10+ hours a week, you're the right size. The ROI math is actually better for small teams: a single workflow can be the difference between hiring and not hiring."
  },
  {
    q: "We don't have time to implement it.",
    a: "You don't. I handle the build end-to-end. Your team spends about an hour total — the scoping call, a check-in mid-build, and a hand-off review. Working software shows up at the end."
  },
  {
    q: "What happens if it breaks after you're gone?",
    a: "Two-week post-launch support is included for anything that comes up. After that, you have full source code and a runbook documenting every part of the system. Most clients don't need a thing; some keep me on for new projects."
  },
  {
    q: "Will my data be safe?",
    a: "I'm cybersecurity-trained and I treat your data accordingly. No models trained on your content, no third-party data sharing, no surprise cloud dependencies. Everything runs in infrastructure you own and control."
  },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section wrap" id="faq" data-screen-label="07 FAQ">
      <div className="section-header">
        <div className="eyebrow"><span className="num">§ 07</span> Frequently asked</div>
        <div>
          <h2 className="h2">The questions every prospect actually asks me first.</h2>
        </div>
      </div>

      <div className="faq">
        {FAQS.map((f, i) => (
          <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span className="n">— {String(i + 1).padStart(2, '0')}</span>
              <span className="question">{f.q}</span>
              <span className="toggle">+</span>
            </button>
            <div className="faq-a">
              <div>
                <div className="body-inner">{f.a}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.FAQ = FAQ;
