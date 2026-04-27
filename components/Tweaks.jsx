function TweaksUI() {
  const [tweaks, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', tweaks.accent);
    r.setAttribute('data-theme', tweaks.dark ? 'dark' : 'light');
    r.setAttribute('data-density', tweaks.density);
    r.setAttribute('data-headline', tweaks.headline);
  }, [tweaks]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Accent">
        <TweakColor label="Color" value={tweaks.accent} onChange={(v) => setTweak('accent', v)} />
        <TweakRadio
          label="Preset"
          value={tweaks.accent}
          onChange={(v) => setTweak('accent', v)}
          options={[
            { label: 'Oxblood', value: '#7A2E2A' },
            { label: 'Ink', value: '#1A1A1A' },
            { label: 'Forest', value: '#2F5A3D' },
            { label: 'Indigo', value: '#3742A6' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Display">
        <TweakRadio
          label="Headlines"
          value={tweaks.headline}
          onChange={(v) => setTweak('headline', v)}
          options={[
            { label: 'Serif', value: 'serif' },
            { label: 'Sans', value: 'sans' },
          ]}
        />
        <TweakRadio
          label="Density"
          value={tweaks.density}
          onChange={(v) => setTweak('density', v)}
          options={[
            { label: 'Roomy', value: 'roomy' },
            { label: 'Compact', value: 'compact' },
          ]}
        />
        <TweakToggle label="Dark mode" value={tweaks.dark} onChange={(v) => setTweak('dark', v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

window.TweaksUI = TweaksUI;
