(() => {
  const intro = document.querySelector('.intro');
  const button = intro?.querySelector('.ocean-toggle');
  if (!button) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const syncPreference = () => {
    button.hidden = reducedMotion.matches;
    intro.dataset.wavesPaused = String(reducedMotion.matches);
    button.setAttribute('aria-pressed', 'false');
    button.textContent = 'Pause waves';
  };
  syncPreference();
  reducedMotion.addEventListener('change', syncPreference);
  button.addEventListener('click', () => {
    const paused = intro.dataset.wavesPaused !== 'true';
    intro.dataset.wavesPaused = String(paused);
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = paused ? 'Resume waves' : 'Pause waves';
  });
})();
