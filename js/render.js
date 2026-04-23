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

function renderProject(id){
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const d = PROJECT_DETAIL[id] || null;
  const title = (d && d.title) || p.title;
  const sub = (d && d.sub) || p.blurb;
  const meta = (d && d.meta) || [
    ['status', p.active ? 'In progress' : 'Completed'],
    ['focus', p.tags.join(' · ')],
    ['collab','Monash · SensiLab'],
  ];
  const idx = PROJECTS.indexOf(p);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  const metaRows = meta.map(([k,v]) => `<div class="kv"><span>${k}</span><span>${v}</span></div>`).join('');

  const rqs = d && d.rqs ? `
    <div class="proj-section">
      <h3><span class="num">// 02</span>Research questions</h3>
      <ol class="rq-list">${d.rqs.map(q => `<li>${q}</li>`).join('')}</ol>
    </div>` : '';

  const approach = d && d.archItems ? `
    <div class="proj-section">
      <h3><span class="num">// 03</span>Approach</h3>
      <div class="proj-body"><p>${d.approachLede}</p></div>
      <div class="findings" style="margin-top:18px">
        ${d.archItems.map(a => `<div class="finding"><div class="tag">${a.tag}</div><h4>${a.title}</h4><p>${a.body}</p></div>`).join('')}
      </div>
    </div>` : '';

  const evalSec = d && d.evalText ? `
    <div class="proj-section">
      <h3><span class="num">// 04</span>Evaluation</h3>
      <div class="proj-body"><p>${d.evalText}</p></div>
    </div>` : '';

  const findings = d && d.findings ? `
    <div class="proj-section">
      <h3><span class="num">// 05</span>Key outcomes</h3>
      <div class="findings">${d.findings.map(f => `<div class="finding"><div class="tag">${f.tag}</div><h4>${f.title}</h4><p>${f.body}</p></div>`).join('')}</div>
    </div>` : '';

  const links = d && d.links ? `
    <div class="proj-section">
      <h3><span class="num">// 06</span>Publications &amp; code</h3>
      <div class="links-block">
        ${d.links.map(l => `<a class="link-row" href="${l.url}" target="_blank" rel="noopener"><div><div class="lk-title">${l.title}</div><div class="lk-sub">${l.sub}</div></div><span class="accent">${l.action}</span></a>`).join('')}
      </div>
    </div>` : '';

  const placeholder = !d ? `
    <div class="proj-section">
      <h3><span class="num">// 02</span>Overview</h3>
      <div class="proj-body"><p>${p.blurb}</p><p style="color:var(--ink-fade);font-style:italic">Full writeup coming soon. See the research index for the current set of projects.</p></div>
    </div>` : '';

  const overviewBlock = d && d.overview ? `
    <div class="proj-section">
      <h3><span class="num">// 01</span>Overview</h3>
      <div class="proj-body">${d.overview.map(pp=>`<p>${pp}</p>`).join('')}</div>
    </div>` : '';

  document.getElementById('projectPage').innerHTML = `
    <span class="proj-back" onclick="setTab('research')">← back to research</span>
    <div class="cmd"><span class="user">sjk@sensilab</span><span class="user">:</span><span class="path">~/research/${p.id}</span><span class="user">$</span> cat README.md</div>
    <div class="proj-head">
      <div>
        <div class="label" style="color:${p.active ? 'var(--accent)' : 'var(--ink-fade)'};margin-top:10px">${p.active ? '● active' : '○ shipped'} · ${p.tags.join(' · ')}</div>
        <h2 class="proj-title">${title}</h2>
        <p class="proj-sub">${sub}</p>
      </div>
      <div class="proj-meta">
        <div class="label" style="margin-bottom:10px">// meta</div>
        ${metaRows}
      </div>
    </div>
    <div class="proj-hero"><span class="cap">hero · ${p.id} · placeholder</span></div>
    ${overviewBlock}
    ${placeholder}
    ${rqs}
    ${approach}
    ${evalSec}
    ${findings}
    ${links}
    <div class="nav-strip">
      <a onclick="openProject('${prev.id}')"><div class="lbl">← previous</div><div class="t">${prev.title}</div></a>
      <a class="next" onclick="openProject('${next.id}')"><div class="lbl">next →</div><div class="t">${next.title}</div></a>
    </div>
  `;
}

function openProject(id){
  renderProject(id);
  setTab('project');
}
window.openProject = openProject;

// Wire up clicks on home table rows and research cards
document.getElementById('homeTable').addEventListener('click', e => {
  const row = e.target.closest('.row.body');
  if (!row) return;
  const i = [...row.parentNode.querySelectorAll('.row.body')].indexOf(row);
  if (i >= 0) openProject(PROJECTS[i].id);
});
document.getElementById('researchCards').addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  const i = [...card.parentNode.children].indexOf(card);
  if (i >= 0) openProject(PROJECTS[i].id);
});
