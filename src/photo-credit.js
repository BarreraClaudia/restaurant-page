export function createPhotoCreditEl(link, name) {
  const creditEl = document.createElement('a');
  creditEl.href = link;
  creditEl.target = '_blank';
  creditEl.rel = 'noopener noreferrer';
  creditEl.textContent = name;
  return creditEl;
}
