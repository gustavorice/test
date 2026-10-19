import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-600.css';
import '@fontsource/dm-sans/latin-700.css';
import '@fontsource/dm-sans/latin-800.css';
import '@fontsource/dm-sans/latin-900.css';
import '@fontsource/instrument-serif/latin-400-italic.css';
import './style.css';
import { store } from './store.js';
import { speaker, homeAudio, lighting, tools, carCare } from './art.js';

const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const external = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const instagram = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>';
const contactUrl = store.whatsapp ? `https://wa.me/${store.whatsapp}` : store.instagram;
const contactLabel = store.whatsapp ? 'Falar no WhatsApp' : 'Falar com a Danni';
const logo = '<span class="logo">danni<span class="logo-sound">som<span class="logo-dot">.</span></span><span class="logo-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span></span>';
const products = [
 {name:'A sua casa. Outra experiência.',type:'Áudio & vídeo residencial',category:'audio',number:'01',art:homeAudio()},
 {name:'Som para reunir pessoas.',type:'Igrejas & academias',category:'audio',number:'02',art:speaker('card-box','box')},
 {name:'Acenda novas possibilidades.',type:'LED & tecnologia',category:'tecnologia',number:'03',art:lighting()},
 {name:'O seu caminho tem trilha.',type:'Som & acessórios automotivos',category:'automotivo',number:'04',art:speaker('card-woofer')},
 {name:'Para colocar a mão na massa.',type:'Ferramentas',category:'ferramentas',number:'05',art:tools()},
 {name:'Cuidado em cada detalhe.',type:'Cuidados automotivos',category:'automotivo',number:'06',art:carCare()},
];

document.querySelector('#app').innerHTML = `
 <div class="announcement"><span class="status-dot"></span> RIO CLARO, SP · 26 ANOS DE HISTÓRIA. <a href="${store.instagram}" target="_blank" rel="noopener noreferrer">ACOMPANHE NO INSTAGRAM ${external}</a></div>
 <header class="header"><a href="#" aria-label="Danni Som — início">${logo}</a><nav aria-label="Navegação principal"><a href="#universo">Nosso universo</a><a href="#danni">A Danni</a><a href="#visite">Onde estamos</a></nav><a class="button small dark header-contact" href="${contactUrl}" target="_blank" rel="noopener noreferrer">Bora conversar ${external}</a><button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span></button></header>
 <main id="conteudo">
 <section class="hero" aria-labelledby="hero-title"><div class="hero-copy"><div class="eyebrow"><span class="mini-bars" aria-hidden="true">▂ ▆ ▃ █</span> ÁUDIO, TECNOLOGIA & SOLUÇÕES</div><h1 id="hero-title">Muito mais<br>que <span class="serif">som.</span></h1><p>Da sua casa ao seu carro. Do seu negócio ao próximo projeto.<br>Há 26 anos, a Danni faz parte dessa conexão.</p><a class="button orange" href="#universo">Conheça nosso universo ${arrow}</a><div class="hero-footnote"><span class="plus">+</span> RUA 9, 2419 · RIO CLARO/SP</div></div><div class="hero-visual"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit orbit-three"></div><div class="visual-top"><span>O SOM EM PRIMEIRO PLANO</span><span>DS / 01</span></div><span class="big-sound" aria-hidden="true">SOM</span><div class="hero-speaker">${speaker()}</div><div class="sound-label"><span class="status-dot"></span> SINTA CADA BATIDA</div><div class="visual-bottom"><span>FEITO PARA<br>QUEM SENTE.</span><button id="motion-toggle" class="motion-toggle" aria-pressed="false" aria-label="Pausar animações"><span class="pause-icon">Ⅱ</span></button></div></div></section>
 <div class="ticker" aria-hidden="true"><div>${Array(4).fill('<span>ÁUDIO. VÍDEO. TECNOLOGIA.</span><span class="asterisk">✳</span><span>26 ANOS. MUITO MAIS QUE SOM.</span><span class="asterisk">✳</span>').join('')}</div></div>
 <section class="universe section" id="universo" aria-labelledby="universe-title"><div class="section-top"><div><div class="eyebrow"><span class="tiny-square"></span> O QUE VOCÊ ENCONTRA AQUI</div><h2 id="universe-title">Um universo de <span class="serif">possibilidades.</span></h2></div><p>Para sua casa, seu carro e seu negócio.<br>Encontre o que faz sentido para você.</p></div><div class="filters" role="group" aria-label="Filtrar soluções"><button class="filter active" aria-pressed="true" data-filter="all">Tudo por aqui <span>06</span></button><button class="filter" aria-pressed="false" data-filter="audio">Áudio & vídeo</button><button class="filter" aria-pressed="false" data-filter="tecnologia">LED & tecnologia</button><button class="filter" aria-pressed="false" data-filter="automotivo">Automotivo</button><button class="filter" aria-pressed="false" data-filter="ferramentas">Ferramentas</button></div><div class="product-grid">${products.map(p=>`<a class="product-card" data-category="${p.category}" href="${contactUrl}" target="_blank" rel="noopener noreferrer" aria-label="Conversar sobre ${p.type}"><div class="product-image"><span class="product-number">/ ${p.number}</span>${p.art}<span class="product-arrow">${external}</span></div><div class="product-info"><span>${p.type}</span><h3>${p.name}</h3></div></a>`).join('')}</div><p class="catalog-note">Imagens ilustrativas. Consulte a loja sobre modelos e disponibilidade.</p></section>
 <section class="manifesto" id="danni" aria-labelledby="danni-title"><div class="manifesto-side"><div class="eyebrow"><span class="tiny-square"></span> DE RIO CLARO. PARA O SEU DIA A DIA.</div><div class="waveform" aria-hidden="true">${Array.from({length:36},(_,i)=>`<i style="--h:${18+Math.sin(i*.75)**2*100}px;--delay:${i*-.11}s"></i>`).join('')}</div><span class="wave-caption">SINTONIA BOA A GENTE RECONHECE.</span></div><div class="manifesto-copy"><h2 id="danni-title">26 anos de história.<br>E muito para <span class="serif">conectar.</span></h2><p>Começou no som. Hoje, vai muito além: áudio, vídeo, LED, tecnologia, ferramentas e soluções para a sua rotina. A mesma Danni Som. Um universo de possibilidades.</p><a class="text-link" href="${contactUrl}" target="_blank" rel="noopener noreferrer">Conte o que você precisa ${arrow}</a></div></section>
 <section class="social-section section"><div class="social-heading"><div><div class="eyebrow"><span class="tiny-square"></span> AUMENTA O SOM. SEGUE A DANNI.</div><h2>O próximo play<br>começa <span class="serif">no feed.</span></h2></div><a class="social-link" href="${store.instagram}" target="_blank" rel="noopener noreferrer">${instagram} ${store.instagramHandle} ${external}</a></div><a class="instagram-banner" href="${store.instagram}" target="_blank" rel="noopener noreferrer"><div class="banner-type" aria-hidden="true">DANNI<br><span>SOM.</span></div><div class="banner-middle"><span class="vinyl"><i></i></span><span class="banner-sticker">DÊ PLAY<br>NA SUA VIBE. ${external}</span></div><div class="banner-action"><span>PRODUTOS. NOVIDADES.<br>E MUITA FREQUÊNCIA BOA.</span><span class="circle-link">${instagram}</span></div></a></section>
 <section class="visit section" id="visite" aria-labelledby="visit-title"><div class="visit-copy"><div class="eyebrow"><span class="tiny-square"></span> DA TELA PARA A VIDA REAL</div><h2 id="visit-title">O som é bom.<br>A conversa,<br><span class="serif">melhor ainda.</span></h2><p class="store-address">${store.address || 'Quer conhecer a loja de perto? Fale com a Danni e combine sua visita.'}</p><a class="store-phone" href="${contactUrl}" target="_blank" rel="noopener noreferrer">${store.phoneDisplay}</a><a class="button dark" href="${contactUrl}" target="_blank" rel="noopener noreferrer">${contactLabel} ${external}</a><a class="map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.mapQuery || 'Danni Som')}" target="_blank" rel="noopener noreferrer">Traçar rota até a loja ${external}</a></div><div class="map-panel">${store.mapQuery ? `<iframe title="Localização da Danni Som" src="https://www.google.com/maps?q=${encodeURIComponent(store.mapQuery)}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><a class="map-address-card" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.mapQuery)}" target="_blank" rel="noopener noreferrer"><span><strong>Danni Som</strong><small>${store.address}</small></span><span>Ver no Maps ${external}</span></a>` : `<div class="map-grid" aria-hidden="true"><div class="map-park park-one"></div><div class="map-park park-two"></div><div class="map-road road-one"></div><div class="map-road road-two"></div><div class="map-road road-three"></div><div class="map-road road-four"></div><div class="map-water"></div></div><a class="map-search" href="https://www.google.com/maps/search/?api=1&query=Danni%20Som" target="_blank" rel="noopener noreferrer"><span class="map-pin">${logo}</span><span>Encontre a Danni Som ${external}</span><small>Abrir busca no Google Maps</small></a><span class="map-disclaimer">Ilustração de mapa · consulte a localização da loja</span>`}</div></section>
 <section class="closing"><p>SUA PRÓXIMA<br><span class="serif">frequência.</span></p><a href="${contactUrl}" target="_blank" rel="noopener noreferrer" aria-label="Fale com a Danni Som">${external}</a><span>COMEÇA COM UM OI.</span></section>
 </main><footer><a href="#" aria-label="Voltar ao início">${logo}</a><span>© ${new Date().getFullYear()} Danni Som.</span><a href="${store.instagram}" target="_blank" rel="noopener noreferrer">Instagram ${external}</a><a href="#conteudo">Voltar ao topo ↑</a></footer>
`;

const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
 const expanded = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(expanded));
 menu.setAttribute('aria-label', expanded ? 'Fechar menu' : 'Abrir menu');
 document.querySelector('.header').classList.toggle('menu-open', expanded);
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
 menu.setAttribute('aria-expanded', 'false');
 menu.setAttribute('aria-label', 'Abrir menu');
 document.querySelector('.header').classList.remove('menu-open');
}));
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('.filter').forEach(filter => {
  const selected = filter === button;
  filter.classList.toggle('active', selected);
  filter.setAttribute('aria-pressed', String(selected));
 });
 document.querySelectorAll('.product-card').forEach(card => {
  card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
 });
}));
const motionToggle = document.querySelector('#motion-toggle');
function setPaused(paused) {
 document.documentElement.classList.toggle('motion-paused', paused);
 motionToggle.setAttribute('aria-pressed', String(paused));
 motionToggle.setAttribute('aria-label', paused ? 'Ativar animações' : 'Pausar animações');
 motionToggle.querySelector('span').textContent = paused ? '▷' : 'Ⅱ';
}
setPaused(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
motionToggle.addEventListener('click', () => setPaused(motionToggle.getAttribute('aria-pressed') !== 'true'));
const observer = new IntersectionObserver(entries => {
 entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.section-top,.product-card,.manifesto-copy,.social-heading,.visit-copy').forEach(element => {
 element.classList.add('reveal'); observer.observe(element);
});
