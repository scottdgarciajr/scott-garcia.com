const CASES = [
  {
    no: '— 01',
    client: 'Forte Mental Fitness',
    year: '2026',
    role: 'AI Architect — 5-week contract',
    title: 'A 6-agent outbound system across 1,000+ CRM contacts.',
    lede: 'Replaced a stalled outreach motion with a production multi-agent pipeline — qualification, enrichment, drafting, sending, observability.',
    blocks: [
      { h: 'The problem', p: '24 stalled MQL deals. A CRM with thousands of contacts and no time to reach them. Generic sequences had been tried; nothing was landing.' },
      { h: 'What I built', p: 'A six-agent system on Anthropic Claude with a RAG layer over the CRM and a BANT qualification engine. Adversarial stress-tested with 225+ prompts before going live.' },
      { h: 'The hand-off', p: 'Full source, prompts, eval suite, and an observability pipeline so the team could see exactly what each agent decided and why.' },
      { h: 'The result', p: 'Operated across 1,000+ contacts. $377K+ in pipeline generated during the engagement. The system kept running after I left.' },
    ],
    stats: [
      { v: '$377K+', l: 'Pipeline generated' },
      { v: '6', l: 'Agents in production' },
      { v: '1,000+', l: 'CRM contacts handled' },
      { v: '225+', l: 'Adversarial prompts tested' },
    ],
  },
  {
    no: '— 02',
    client: 'Fenner Precision Polymers',
    year: '2025',
    role: 'Cybersecurity intern',
    title: 'Three months of annual audit work, automated.',
    lede: 'Built workflow automation for the security team at a global manufacturer — replacing manual benchmark review with reproducible Python and Ansible.',
    blocks: [
      { h: 'The problem', p: 'Quarterly CIS-style audits across a sprawling Azure estate were being done by hand. Analysts were burning weeks on data collection before any actual analysis.' },
      { h: 'What I built', p: 'Python and Ansible modules that pull, normalize and diff 82,900+ benchmark datapoints against policy. Drop-in for the existing audit process.' },
      { h: 'The hand-off', p: 'Documented playbooks the team could run themselves on every cycle. No new tools to license; no consultant on retainer.' },
      { h: 'The result', p: 'An estimated three months of manual effort recovered each year — redirected to actual remediation work.' },
    ],
    stats: [
      { v: '~3 mo', l: 'Annual time saved' },
      { v: '82,900+', l: 'Datapoints analyzed' },
      { v: 'Azure', l: 'Cloud estate' },
      { v: '0', l: 'New licenses required' },
    ],
  },
];

function CaseStudies() {
  return (
    <section className="section wrap" id="case-studies" data-screen-label="04 Case Studies">
      <div className="section-header">
        <div className="eyebrow"><span className="num">§ 04</span> Case studies</div>
        <div>
          <h2 className="h2">Two engagements, two different stacks, both shipped.</h2>
        </div>
      </div>

      {CASES.map((c) => (
        <div className="case" key={c.client}>
          <div className="meta">
            <div><span className="label">{c.no}</span></div>
            <div>{c.client}</div>
            <div>{c.year}</div>
            <div>{c.role}</div>
          </div>
          <div className="case-body">
            <h3>{c.title}</h3>
            <p className="lede">{c.lede}</p>
            <div className="case-grid">
              {c.blocks.map((b) => (
                <div key={b.h}>
                  <h4>{b.h}</h4>
                  <p className="body">{b.p}</p>
                </div>
              ))}
            </div>
            <div className="case-stats">
              {c.stats.map((s) => (
                <div className="case-stat" key={s.l}>
                  <div className="v">{s.v}</div>
                  <div className="l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

window.CaseStudies = CaseStudies;
