const WEEKS = [
  {
    n: 'I',
    label: 'Week one',
    h: 'Scope &\u00A0baseline',
    p: 'A scoping call, then I shadow the existing process. We pick the one workflow with the highest hours-saved-per-week ceiling and lock the spec.',
    items: ['Scoping call', 'Process audit', 'Spec sign-off'],
  },
  {
    n: 'II',
    label: 'Week two',
    h: 'Build the\u00A0core',
    p: 'I build the agent or workflow end-to-end against real data. You see working output by Friday.',
    items: ['Agent + tools', 'Real-data wiring', 'First demo'],
  },
  {
    n: 'III',
    label: 'Week three',
    h: 'Harden &\u00A0test',
    p: 'Adversarial prompts, eval suite, observability. Edge cases get caught here, not in production.',
    items: ['Eval suite', 'Stress testing', 'Observability'],
  },
  {
    n: 'IV',
    label: 'Week four',
    h: 'Ship &\u00A0hand off',
    p: 'Deploy, document, train the team. Two-week support window included for anything that comes up.',
    items: ['Deploy to prod', 'Docs & runbook', '2-week support'],
  },
];

function Process() {
  return (
    <section className="section wrap" id="process" data-screen-label="05 Process">
      <div className="section-header">
        <div className="eyebrow"><span className="num">§ 05</span> Process</div>
        <div>
          <h2 className="h2">Four weeks. One workflow. Working software.</h2>
        </div>
      </div>

      <div className="process">
        {WEEKS.map((w) => (
          <div className="week" key={w.n}>
            <div className="wno">{w.n}</div>
            <div className="wlbl">{w.label}</div>
            <h4>{w.h}</h4>
            <p className="body">{w.p}</p>
            <ul>
              {w.items.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Process = Process;
