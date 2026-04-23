const paths = { home:'~', research:'~/research', pub:'~/publications', teaching:'~/teaching', contact:'~/contact', project:'~/research/project' };
const KEY = 'sjk.tab';
function setTab(name){
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('on', t.dataset.tab === name));
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('on', p.dataset.page === name));
  document.getElementById('chromePath').textContent = paths[name] || '~';
  try { localStorage.setItem(KEY, name); } catch(e){}
  window.scrollTo({ top: 0, behavior: 'instant' });
}
document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => setTab(t.dataset.tab)));
try { const saved = localStorage.getItem(KEY); if (saved && paths[saved]) setTab(saved); } catch(e){}
