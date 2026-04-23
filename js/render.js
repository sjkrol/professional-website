const isMobile = () => matchMedia('(max-width: 760px)').matches;
const el = (html) => { const d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstElementChild; };

// Home project rows
(function(){
  const tbl = document.getElementById('homeTable');
  PROJECTS.forEach((p, i) => {
    const status = p.active ? '<span class="status-active">● active</span>' : '<span class="status-done">○ done</span>';
    const tags = p.tags.join(' · ');
    const row = el(`<div class="row body proj-cols ${i%2 ? 'alt' : ''}">
      <span class="dim">${String(i+1).padStart(2,'0')}</span>
      <span>${status}</span>
      <span style="color:var(--ink)">${p.title}</span>
      <span class="accent2" style="font-size:11px">${tags}</span>
      <span class="accent" style="text-align:right">→</span>
    </div>`);
    row.innerHTML += `<div class="m-stack">
      <div class="m-row"><span class="m-k">#${String(i+1).padStart(2,'0')}</span><span>${status}</span></div>
      <div class="m-title">${p.title}</div>
      <div class="m-sub">${p.blurb}</div>
      <div class="m-foot"><span class="accent2">${tags}</span><span class="accent">open →</span></div>
    </div>`;
    tbl.appendChild(row);
  });
})();

// Research cards
(function(){
  const wrap = document.getElementById('researchCards');
  PROJECTS.forEach((p, i) => {
    wrap.appendChild(el(`<div class="card ${p.active ? 'active' : ''}">
      <div class="card-meta">
        <span class="lbl" style="color:${p.active ? 'var(--accent)' : 'var(--ink-fade)'}">./proj_${String(i+1).padStart(2,'0')}</span>
        <span class="lbl" style="color:${p.active ? 'var(--accent)' : 'var(--ink-fade)'}">${p.active ? '● active' : '○ shipped'}</span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.blurb}</p>
      <div class="card-foot">
        <span class="accent2">${p.tags.join(' · ')}</span>
        <span class="accent">open →</span>
      </div>
    </div>`));
  });
})();

// Publications
(function(){
  const tbl = document.getElementById('pubTable');
  const filters = document.getElementById('pubFilters');
  const allTags = [...new Set(PUBS.flatMap(p => p.tags))];
  allTags.forEach(t => filters.appendChild(el(`<span class="chip" data-tag="${t}">${t}</span>`)));

  function render(tag){
    tbl.querySelectorAll('.row.body').forEach(n => n.remove());
    PUBS.forEach((p, i) => {
      if (tag !== 'all' && !p.tags.includes(tag)) return;
      const row = el(`<div class="row body pub-cols ${i%2 ? 'alt' : ''}">
        <span class="accent" style="font-size:14px">${p.year}</span>
        <span class="accent2" style="font-size:11px;text-transform:uppercase;letter-spacing:.12em;padding-top:3px">${p.venue}</span>
        <div>
          <div class="pub-title">${p.title}</div>
          <div class="pub-auth">${p.authors}</div>
        </div>
        <span style="font-size:11px;color:var(--ink-soft);padding-top:3px">${p.tags.join(' · ')}</span>
        <div class="pub-act">
          <a href="${p.url}" target="_blank" rel="noopener">pdf</a><span class="sep">·</span><span style="color:var(--ink-fade)">bib</span>
        </div>
      </div>`);
      row.innerHTML += `<div class="m-stack">
        <div class="m-row"><span class="m-k">${p.year} · ${p.venue}</span><a href="${p.url}" target="_blank" rel="noopener" class="accent" style="font-size:11px">pdf</a></div>
        <div class="m-title">${p.title}</div>
        <div class="m-sub" style="font-style:italic">${p.authors}</div>
        <div class="m-foot"><span class="accent2">${p.tags.join(' · ')}</span></div>
      </div>`;
      tbl.appendChild(row);
    });
  }
  render('all');

  filters.addEventListener('click', e => {
    const chip = e.target.closest('.chip'); if (!chip) return;
    filters.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
    chip.classList.add('on');
    render(chip.dataset.tag);
  });
})();

// Teaching
(function(){
  const tbl = document.getElementById('teachTable');
  TEACH.forEach((t, i) => {
    const row = el(`<div class="row body teach-cols ${i%2 ? 'alt' : ''}">
      <span class="accent">${t.code}</span>
      <span class="accent2" style="font-size:11px">${t.term}</span>
      <div>
        <div class="teach-title">${t.title}</div>
        <div class="teach-note">${t.blurb}</div>
      </div>
      <span class="role-tag">${t.role}</span>
    </div>`);
    row.innerHTML += `<div class="m-stack">
      <div class="m-row"><span class="m-k">${t.code} · ${t.term}</span><span class="accent" style="font-size:11px">${t.role}</span></div>
      <div class="m-title">${t.title}</div>
      <div class="m-sub">${t.blurb}</div>
    </div>`;
    tbl.appendChild(row);
  });
})();

// Mobile row visibility toggle
const styleEl = document.createElement('style');
styleEl.textContent = `
  .tbl .row.body > .m-stack{display:none}
  @media (max-width: 960px){
    .tbl .row.body > span, .tbl .row.body > div:not(.m-stack){display:none !important}
    .tbl .row.body > .m-stack{display:block}
  }
`;
document.head.appendChild(styleEl);

// Wire up clicks on home table rows and research cards
document.getElementById('homeTable').addEventListener('click', e => {
  const row = e.target.closest('.row.body');
  if (!row) return;
  const i = [...row.parentNode.querySelectorAll('.row.body')].indexOf(row);
  if (i >= 0) window.location.href = `projects/${PROJECTS[i].id}.html`;
});
document.getElementById('researchCards').addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  const i = [...card.parentNode.children].indexOf(card);
  if (i >= 0) window.location.href = `projects/${PROJECTS[i].id}.html`;
});
