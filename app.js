'use strict';
function stopAudio() {
  document.querySelectorAll('audio').forEach(audio => audio.pause());
}
document.querySelectorAll('[data-tab]').forEach(button => {
  button.addEventListener('click', () => {
    stopAudio();
    document.querySelectorAll('[data-tab]').forEach(item => {
      const active = item === button;
      item.setAttribute('aria-pressed', String(active));
      document.getElementById(item.dataset.tab).hidden = !active;
    });
  });
});
document.querySelectorAll('[data-experiment]').forEach(select => {
  select.addEventListener('change', () => {
    stopAudio();
    document.getElementById(select.dataset.experiment).querySelectorAll('.voice').forEach(voice => {
      voice.hidden = voice.dataset.gender !== select.value;
    });
  });
});
document.addEventListener('play', event => {
  if (event.target.tagName !== 'AUDIO') return;
  document.querySelectorAll('audio').forEach(audio => {
    if (audio !== event.target) audio.pause();
  });
}, true);
