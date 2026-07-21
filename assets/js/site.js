
const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)];
const t=q('#themeToggle'),saved=localStorage.getItem('ebr-theme');if(saved)document.documentElement.dataset.theme=saved;
t?.addEventListener('click',()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('ebr-theme',n)});
const search=q('#articleSearch'),buttons=qa('.filter-btn'),cards=qa('[data-article-card]');let category='all';
function filter(){const term=(search?.value||'').toLowerCase().trim();cards.forEach(c=>{const okCat=category==='all'||c.dataset.category===category;const okTerm=!term||(c.dataset.search||c.innerText).toLowerCase().includes(term);c.classList.toggle('hidden',!(okCat&&okTerm))})}
search?.addEventListener('input',filter);buttons.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;buttons.forEach(x=>x.classList.toggle('active',x===b));filter()}));
qa('[data-copy-link]').forEach(b=>b.addEventListener('click',async e=>{e.preventDefault();try{await navigator.clipboard.writeText(location.href);b.textContent='Link copied'}catch{prompt('Copy this link:',location.href)}}));
const y=q('#year');if(y)y.textContent=new Date().getFullYear();
