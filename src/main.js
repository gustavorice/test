import '@fontsource/barlow-condensed/latin-600.css';
import '@fontsource/barlow-condensed/latin-700.css';
import '@fontsource/barlow-condensed/latin-800.css';
import '@fontsource/ibm-plex-sans/latin-400.css';
import '@fontsource/ibm-plex-sans/latin-500.css';
import '@fontsource/ibm-plex-sans/latin-600.css';
import './style.css';
import { store } from './store.js';

const image = name => `${import.meta.env.BASE_URL}images/${name}`;
const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"/></svg>';
const diagonal = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.6"/></svg>';
const instagram = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>';
const whatsapp = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m3 21 1.7-5A9 9 0 1 1 8 19.7L3 21Z" stroke="currentColor" stroke-width="1.5"/><path d="M8 7c-1 3 2 7 6 9l2-2-3-2-1 1-2-2 1-1-2-3H8Z" fill="currentColor"/></svg>';
const pin = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>';
const play = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 5 11 7-11 7V5Z" fill="currentColor"/></svg>';
const soundMark = '<span class="sound-mark" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>';
const brand = `<span class="brand-image"><img src="${image('encontro-frahm.jpg')}" alt="Danni Som" width="1080" height="1351"></span>`;
const contact = `https://wa.me/${store.whatsapp}`;
const message = text => `${contact}?text=${encodeURIComponent(text)}`;
const route = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.mapQuery)}`;
const departments = [
 { name:'Som & áudio', detail:'Residencial, igrejas e academias. Vamos conversar sobre o som que o seu ambiente precisa.', label:'Sonorização na prática', photo:'encontro-frahm.jpg', alt:'Publicação da Danni Som sobre o encontro Frahm Class, com os participantes reunidos', post:'DdpTfxNiex7',position:'50% 65%', caption:'Frahm Class · Encontro na Danni Som' },
 { name:'Automotivo', detail:'Som, acessórios, palhetas e cuidados. Do que toca no carro ao que cuida dele.', label:'Para cuidar do seu carro', photo:'cuidados-automotivos.jpg', alt:'Integrante da equipe da Danni Som apresentando cuidados automotivos ao lado de um carro', post:'DeSfNyipYXa',position:'50% 45%',caption:'Cuidados automotivos · Direto da loja' },
 { name:'Ferramentas', detail:'Alicates, chaves de fenda, Phillips e muito mais. Conte para a equipe o que você procura.', label:'A ferramenta certa está aqui', photo:'loja-ferramentas.jpg', alt:'Atendimento da Danni Som mostrando ferramentas nas prateleiras da loja',post:'Decrjt9JBlX',position:'50% 39%',caption:'Ferramentas · Direto das nossas prateleiras' },
 { name:'Iluminação & LED', detail:'Iluminação, LED e tecnologia. Traga a sua ideia e veja as opções com a nossa equipe.',label:'Para o seu próximo projeto',photo:'eletrica.jpg',alt:'Publicação oficial da Danni Som em homenagem ao Dia do Eletricista',post:'Del5Gc7PR-L',position:'50% 58%',caption:'Uma homenagem da Danni Som aos eletricistas' },
 { name:'Vídeo & acessórios', detail:'Áudio e vídeo, cabos e componentes eletrônicos. A conexão que falta no seu dia a dia.',label:'Conecte o que você precisa',photo:'loja-acessorios.jpg',alt:'Integrante da equipe da Danni Som no corredor de acessórios da loja',post:'DeNT-jcp23W',position:'50% 37%',caption:'Acessórios · A equipe que atende você' },
];

 document.querySelector('#app').innerHTML = `
 <header class="header">
  <a class="brand" href="#inicio" aria-label="Danni Som — início">${brand}</a>
  <span class="header-location">RIO CLARO, SP<br><strong>26 ANOS DE HISTÓRIA</strong></span>
  <nav aria-label="Navegação principal"><a href="#departamentos">O que você procura</a><a href="#loja">Nossa loja</a><a href="#visite">Como chegar</a></nav>
  <a class="header-contact" href="${contact}" target="_blank" rel="noopener noreferrer">${whatsapp}<span>Fale com a gente</span>${diagonal}</a>
  <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Abrir menu"><span></span><span></span></button>
  <nav id="mobile-nav" class="mobile-nav" aria-label="Navegação no celular" hidden><a href="#departamentos">O que você procura ${arrow}</a><a href="#loja">Nossa loja ${arrow}</a><a href="#visite">Como chegar ${arrow}</a></nav>
 </header>
 <main id="conteudo">
  <section class="hero" id="inicio" aria-labelledby="hero-title">
   <div class="hero-copy">
    <div class="hero-kicker">ÁUDIO / TECNOLOGIA / SOLUÇÕES</div>
    <h1 id="hero-title"><span>MUITO MAIS</span><span>QUE <em>SOM.</em></span></h1>
    <div class="hero-description"><span class="hero-rule"></span><p>Você conhece pelo som.<br>Vai voltar por tudo o que encontra aqui.</p></div>
    <a href="#departamentos" class="hero-discover">ENCONTRE O QUE PRECISA <span>${arrow}</span></a>
    <div class="hero-signature">${soundMark}<span>DANNI SOM<br>RUA 9, 2419 · RIO CLARO</span><button type="button" class="motion-toggle" aria-label="Pausar animações" aria-pressed="false"><span>Ⅱ</span></button></div>
   </div>
   <div class="hero-photo"><img src="${image('loja-ferramentas.jpg')}" alt="A equipe da Danni Som e as prateleiras de ferramentas da loja em Rio Claro" fetchpriority="high" width="720" height="1280"><span class="photo-edge">GENTE DE VERDADE. LOJA DE VERDADE.</span><a href="https://www.instagram.com/reel/Decrjt9JBlX/" target="_blank" rel="noopener noreferrer" class="hero-film"><span class="play-button">${play}</span><span>CONHEÇA POR DENTRO<small>Direto do nosso Instagram</small></span>${diagonal}</a></div>
   <div class="hero-bottom"><span>DO PRIMEIRO PLAY AO PRÓXIMO PROJETO.</span><a href="${contact}" target="_blank" rel="noopener noreferrer">CHAMA A DANNI ${diagonal}</a></div>
  </section>
  <div class="store-index" aria-label="Áreas da loja"><span>ÁUDIO E VÍDEO</span><span>AUTOMOTIVO</span><span>FERRAMENTAS</span><span>ILUMINAÇÃO</span><span>ACESSÓRIOS</span></div>
  <section class="departments section" id="departamentos" aria-labelledby="departments-title">
   <div class="section-heading"><div><span class="section-label">01 / POR AQUI VOCÊ ENCONTRA</span><h2 id="departments-title">QUAL É O<br>SEU <span>PROJETO?</span></h2></div><p>Uma loja, muitas possibilidades.<br>Escolha por onde começar.</p></div>
   <div class="department-layout"><div class="department-selector" role="tablist" aria-orientation="vertical" aria-label="Departamentos da Danni Som">${departments.map((d,i)=>`<button type="button" class="department-tab ${i===0?'active':''}" id="department-tab-${i}" role="tab" aria-selected="${i===0}" tabindex="${i===0?'0':'-1'}" aria-controls="department-panel" data-index="${i}"><span class="department-number">0${i+1}</span><span class="department-name">${d.name}</span><span class="department-icon">${i===0?'−':'+'}</span></button>`).join('')}<div class="department-help">Não achou o que procura?<a href="${contact}" target="_blank" rel="noopener noreferrer">Pergunte para a Danni ${arrow}</a></div></div>
   <div class="department-panel" id="department-panel" role="tabpanel" tabindex="0" aria-labelledby="department-tab-0"><div class="department-photo"><img id="department-image" src="${image(departments[0].photo)}" style="object-position:${departments[0].position}" alt="${departments[0].alt}" width="1080" height="1351" loading="lazy"><a id="department-post" href="https://www.instagram.com/p/${departments[0].post}/" target="_blank" rel="noopener noreferrer" aria-label="Ver publicação no Instagram">${instagram}</a><span id="department-caption">${departments[0].caption}</span></div><div class="department-detail"><div><h3 id="department-label">${departments[0].label}</h3><p id="department-description">${departments[0].detail}</p></div><a id="department-contact" href="${message('Olá! Quero saber mais sobre som e áudio.') }" target="_blank" rel="noopener noreferrer" aria-label="Conversar sobre Som & áudio">${diagonal}</a></div></div></div>
  </section>
  <section class="story" id="loja" aria-labelledby="story-title"><div class="story-copy"><span class="section-label">02 / A DANNI QUE VOCÊ CONHECE</span><h2 id="story-title">26 ANOS.<br>A MESMA<br><span>PROXIMIDADE.</span></h2><p>Em Rio Claro, a Danni Som reúne áudio, vídeo, tecnologia e soluções para a casa, o carro e o trabalho.</p><p>E tem uma coisa que continua igual: gente de verdade para conversar com você sobre o que precisa.</p><a class="line-link" href="${contact}" target="_blank" rel="noopener noreferrer">CONVERSE COM A NOSSA EQUIPE ${arrow}</a></div><figure class="story-photo"><img src="${image('encontro-frahm.jpg')}" alt="Registro publicado pela Danni Som do evento Frahm Class, reunindo equipe e participantes" loading="lazy" width="1080" height="1351"><figcaption><span>CONHECIMENTO QUE A GENTE COMPARTILHA.</span><a href="https://www.instagram.com/p/DdpTfxNiex7/" target="_blank" rel="noopener noreferrer">Frahm Class na Danni ${diagonal}</a></figcaption></figure></section>
  <section class="social section" aria-labelledby="social-title"><div class="social-heading"><div><span class="section-label">03 / SEM FILTRO ENTRE A GENTE</span><h2 id="social-title">ACONTECE<br><span>NA DANNI.</span></h2></div><a href="${store.instagram}" class="instagram-link" target="_blank" rel="noopener noreferrer">${instagram}<span>${store.instagramHandle}</span>${diagonal}</a></div><div class="social-grid">${[{photo:'loja-ferramentas.jpg',post:'Decrjt9JBlX',category:'DENTRO DA LOJA',title:'A ferramenta certa, pertinho de você.',alt:'Equipe mostrando as ferramentas disponíveis na Danni Som',pos:'50% 30%'},{photo:'cuidados-automotivos.jpg',post:'DeSfNyipYXa',category:'CUIDADOS AUTOMOTIVOS',title:'O cuidado com o carro também passa aqui.',alt:'Equipe apresentando cuidados para o carro',pos:'50% 35%'},{photo:'loja-acessorios.jpg',post:'DeNT-jcp23W',category:'DICA DA EQUIPE',title:'Hora de trocar as palhetas?',alt:'A equipe da Danni Som apresentando palhetas automotivas',pos:'50% 30%'}].map(p=>`<a class="social-post" href="https://www.instagram.com/reel/${p.post}/" target="_blank" rel="noopener noreferrer"><div class="social-photo"><img src="${image(p.photo)}" style="object-position:${p.pos}" alt="${p.alt}" loading="lazy" width="720" height="1280"><span class="post-play">${play}</span></div><div class="post-heading"><span>${p.category}</span>${diagonal}</div><h3>${p.title}</h3></a>`).join('')}</div></section>
  <section class="visit" id="visite" aria-labelledby="visit-title"><div class="visit-info"><span class="section-label">04 / A GENTE SE ENCONTRA AQUI</span><h2 id="visit-title">PASSA<br><span>NA DANNI.</span></h2><div class="visit-address">${pin}<div><strong>Rua 9, 2419</strong><span>Santana · Rio Claro/SP</span></div></div><a class="route-button" href="${route}" target="_blank" rel="noopener noreferrer">ABRIR ROTA NO MAPS ${diagonal}</a><div class="visit-contact"><span>PREFERE CHAMAR ANTES?</span><a href="${contact}" target="_blank" rel="noopener noreferrer">${store.phoneDisplay} ${arrow}</a></div></div><div class="map-panel"><iframe title="Localização da Danni Som — Rua 9, 2419, Rio Claro" src="https://www.google.com/maps?q=${encodeURIComponent(store.mapQuery)}&hl=pt-BR&z=17&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><a class="map-fallback" href="${route}" target="_blank" rel="noopener noreferrer">${pin}<span>DANNI SOM<small>${store.address}</small></span>${diagonal}</a></div></section>
  <section class="last-call"><span>CASA. CARRO. TRABALHO.</span><a href="${contact}" target="_blank" rel="noopener noreferrer">PODE CHAMAR<br><span>A DANNI.</span><span class="last-arrow">${diagonal}</span></a></section>
 </main>
 <footer><a class="brand footer-brand" href="#inicio" aria-label="Danni Som — voltar ao início">${brand}</a><span>© ${new Date().getFullYear()} Danni Som · Rio Claro/SP</span><a href="${store.instagram}" target="_blank" rel="noopener noreferrer">INSTAGRAM ${diagonal}</a><a href="#inicio">VOLTAR AO TOPO ↑</a></footer>
`;

const tabs = [...document.querySelectorAll('.department-tab')];
function selectDepartment(index, focus = false) {
 const d = departments[index];
 tabs.forEach((tab,i) => {
  tab.classList.toggle('active',i===index);
  tab.setAttribute('aria-selected',String(i===index));
  tab.tabIndex = i===index ? 0 : -1;
  tab.querySelector('.department-icon').textContent = i===index ? '−' : '+';
 });
 if (focus) tabs[index].focus();
 const panel = document.querySelector('#department-panel');
 panel.setAttribute('aria-labelledby',`department-tab-${index}`);
 const img = document.querySelector('#department-image');
 img.src = image(d.photo);img.alt=d.alt;img.style.objectPosition=d.position;
 document.querySelector('#department-post').href=`https://www.instagram.com/p/${d.post}/`;
 document.querySelector('#department-caption').textContent=d.caption;
 document.querySelector('#department-label').textContent=d.label;
 document.querySelector('#department-description').textContent=d.detail;
 const c = document.querySelector('#department-contact');
 c.href=message(`Olá! Quero saber mais sobre ${d.name.toLowerCase()}.`);
 c.setAttribute('aria-label',`Conversar sobre ${d.name}`);
 panel.classList.remove('changing');
 requestAnimationFrame(()=>{panel.classList.add('changing');});
}
tabs.forEach((tab,index)=>{
 tab.addEventListener('click',()=>selectDepartment(index));
 tab.addEventListener('keydown',event=>{
  let next=index;
  if(event.key==='ArrowDown'||event.key==='ArrowRight') next=(index+1)%tabs.length;
  else if(event.key==='ArrowUp'||event.key==='ArrowLeft') next=(index-1+tabs.length)%tabs.length;
  else if(event.key==='Home')next=0;
  else if(event.key==='End')next=tabs.length-1;
  else return;
  event.preventDefault();selectDepartment(next,true);
 });
});
const menu = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');mobileNav.hidden=true;}
menu.addEventListener('click',()=>{
 const open=menu.getAttribute('aria-expanded')!=='true';
 menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');mobileNav.hidden=!open;
});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
const motion = document.querySelector('.motion-toggle');
function setPaused(paused){
 document.documentElement.classList.toggle('motion-paused',paused);
 motion.setAttribute('aria-pressed',String(paused));motion.setAttribute('aria-label',paused?'Ativar animações':'Pausar animações');motion.querySelector('span').textContent=paused?'▷':'Ⅱ';
}
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
setPaused(reducedMotion.matches);
reducedMotion.addEventListener('change',e=>setPaused(e.matches));
motion.addEventListener('click',()=>setPaused(motion.getAttribute('aria-pressed')!=='true'));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('entered');observer.unobserve(e.target);}}),{threshold:.1});
document.querySelectorAll('.section-heading,.department-layout,.story-copy,.story-photo,.social-heading,.social-post,.visit-info').forEach(e=>{e.classList.add('reveal');observer.observe(e);});
