window.TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#7A2E2A",
  "headline": "serif",
  "density": "roomy",
  "dark": false
}/*EDITMODE-END*/;

function App() {
  const [scrollPct, setScrollPct] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setScrollPct(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    // Immediately reveal anything already in (or above) the viewport
    const vh = window.innerHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.95) el.classList.add('in');
    });
    // Safety net: ensure everything becomes visible even if IO never fires
    const fallback = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
    }, 600);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    els.forEach((el) => { if (!el.classList.contains('in')) io.observe(el); });

    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);

  return (
    <React.Fragment>
      <Nav scrollPct={scrollPct} />
      <Hero />
      <Services />
      <Results />
      <CaseStudies />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <TweaksUI />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
