const INDUSTRIES = [
  {
    n: '01',
    title: 'Dental practices',
    blurb: 'Insurance verification and patient follow-up that runs without a coordinator chasing it.',
    items: ['Insurance benefits lookup', 'Recall & no-show recovery', 'Treatment plan follow-up'],
  },
  {
    n: '02',
    title: 'Law firms',
    blurb: 'Intake triage and document summarization for the work that fills paralegal hours.',
    items: ['Conflict checks & intake forms', 'Discovery summarization', 'Deposition exhibit indexing'],
  },
  {
    n: '03',
    title: 'HVAC & trades',
    blurb: 'Dispatch scheduling and quote generation that doesn\'t live in someone\'s inbox.',
    items: ['Inbound lead routing', 'Quote drafting from photos', 'After-hours triage agent'],
  },
  {
    n: '04',
    title: 'Accounting firms',
    blurb: 'Client onboarding and reconciliation prep handled before the bookkeeper opens the file.',
    items: ['1099 & W-9 collection', 'Receipt & invoice extraction', 'Month-end variance flags'],
  },
];

function Services() {
  return (
    <section className="section wrap" id="work" data-screen-label="02 Work">
      <div className="section-header">
        <div className="eyebrow"><span className="num">§ 02</span> What I build</div>
        <div>
          <h2 className="h2">Productized AI for small &amp; mid-sized businesses.</h2>
        </div>
      </div>

      <div className="industries">
        {INDUSTRIES.map((it) => (
          <div className="industry" key={it.n}>
            <div className="num">— {it.n}</div>
            <h3>{it.title}</h3>
            <p className="body">{it.blurb}</p>
            <ul>
              {it.items.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Services = Services;
