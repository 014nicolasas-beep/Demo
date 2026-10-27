const $ = s => document.querySelector(s);
const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const photoStyle = (index,sheet) => {const cols=sheet==='tools'?3:4, rows=sheet==='food'?4:sheet==='tools'?2:3;return `background-position:${index%cols*100/(cols-1)}% ${Math.floor(index/cols)*100/(rows-1)}%`;};
function photo(p, cls='') {
 return p.image ? `<img class="${cls} original-photo" src="assets/${p.image}" alt="${p.name}" loading="lazy" width="480" height="360">` : `<div class="photo ${p.sheet||''} ${cls}" style="${photoStyle(p.photo,p.sheet)}" role="img" aria-label="Fotografia ilustrativa: ${p.name}"></div>`;
}
const catbox=$('#cat-grid'), filters=$('#filters'), grid=$('#product-grid'), input=$('#search');
catbox.innerHTML=categories.map(c=>`<button class="cat-card" data-category="${c.name}">${photo(c)}<strong>${c.name}</strong><span class="round-arrow" aria-hidden="true">→</span></button>`).join('');
let selected='Todos', limit=8;
function renderFilters(){filters.innerHTML=['Todos',...categories.map(c=>c.name)].map(c=>`<button class="filter ${selected===c?'active':''}" aria-pressed="${selected===c}" data-filter="${c}">${c}</button>`).join('');}
function renderProducts(){
 const q=normalize(input.value.trim());
 const found=products.map((p,i)=>({...p,i})).filter(p=>(selected==='Todos'||p.category===selected)&&normalize(p.name+' '+p.category).includes(q));
 grid.innerHTML=found.slice(0,limit).map(p=>`<article class="product-card">${photo(p)}<div class="pc-body"><span class="tag">${p.category}</span><h3>${p.name}</h3><button class="details" data-product="${p.i}" aria-label="Ver detalhes de ${p.name}">Ver detalhes <span aria-hidden="true">→</span></button></div></article>`).join('');
 $('#empty').hidden=found.length>0;
 $('#result-count').textContent=`${found.length} ${found.length===1?'produto encontrado':'produtos encontrados'} · catálogo demonstrativo`;
 $('#load-more').hidden=found.length<=limit;
}
function refresh(){limit=8;renderFilters();renderProducts();}
filters.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b){selected=b.dataset.filter;refresh();}});
catbox.addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b){selected=b.dataset.category;input.value='';refresh();$('#produtos').scrollIntoView();}});
input.addEventListener('input',refresh);
$('#clear-search').onclick=()=>{input.value='';selected='Todos';refresh();input.focus();};
$('#load-more').onclick=()=>{limit+=8;renderProducts();};
refresh();
const pd=$('#product-modal');
grid.addEventListener('click',e=>{const b=e.target.closest('[data-product]');if(!b)return;const p=products[+b.dataset.product];$('#m-photo').innerHTML=photo(p);$('#m-title').textContent=p.name;$('#m-cat').textContent=p.category;$('#m-desc').textContent=p.description;$('#m-note').textContent=p.note;pd.showModal();});
pd.querySelector('.close').onclick=()=>pd.close();$('#m-back').onclick=()=>pd.close();
const vd=$('#video-modal'),v=$('#video-player');
document.addEventListener('click',e=>{const b=e.target.closest('[data-video]');if(!b)return;const event=b.dataset.video==='eventos';const file=event?'eventos':'institucional';v.src=`assets/${file}.mp4`;v.poster=`assets/${file}.jpg`;$('#video-title').textContent=event?'Rancho Toro • Eventos':'Rancho Toro • Institucional';v.preload="metadata";v.load();vd.showModal();});
vd.querySelector('.close').onclick=()=>vd.close();
vd.addEventListener('close',()=>{v.pause();v.removeAttribute('src');v.load();});
[pd,vd].forEach(d=>{d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});d.addEventListener('close',()=>document.body.classList.remove('modal-open'));d.addEventListener('toggle',()=>{if(d.open)document.body.classList.add('modal-open');});});
const mb=$('#menu-btn'),mp=$('#mobile-panel');
function closeMenu(){mp.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.textContent='☰';mb.setAttribute('aria-label','Abrir menu');}
mb.onclick=()=>{const open=mp.classList.toggle('open');mb.setAttribute('aria-expanded',open);mb.textContent=open?'×':'☰';mb.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');};
mp.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a=>a.href=`https://wa.me/${SITE.phone}?text=${encodeURIComponent('Olá! Gostaria de conhecer melhor o Rancho Toro.')}`);
$('#contact-phone').textContent=SITE.phoneLabel;
