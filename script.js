/* ---------- DATOS DE LA CARTA (verificados en menu.fu.do el 04-09-2026) ---------- */
/* Cada item admite opcionalmente 'img': URL de una foto del producto. Si no se define, el ítem se muestra solo con texto. */
const MENU = {
  cafe: {
    label: 'Coffee lovers',
    groups: [{ title: 'Café', items: [
      { n: 'Espresso doble carga', p: 2200, d: 'Doble carga de café de especialidad, servido en taza de 80 ml' },
      { n: 'Capu Avellana', p: 3500 },
      { n: 'Capu Caramelo', p: 3500, d: 'Shot de espresso con leche texturizada y syrup de caramelo, en taza de 250 ml' },
      { n: 'Capu Coco', p: 3500, d: 'Shot de espresso con leche texturizada y syrup de coco, en taza de 250 ml' },
      { n: 'Capu Vainilla', p: 3500, d: 'Shot de espresso con leche texturizada y syrup de vainilla, en taza de 250 ml' },
      { n: 'Capu Avellana (leche vegetal)', p: 3900, v: 1 },
      { n: 'Latte Caramelo', p: 3800 },
      { n: 'Mocaccino', p: 3800 },
      { n: 'Moca Menta', p: 4200 },
      { n: 'Agregado crema para café', p: 600 },
      { n: 'Carga de café', p: 500 },
    ]}]
  },
  chocolateTe: {
    label: 'Chocolate y Té',
    groups: [
      { title: 'Chocolate caliente', items: [
        { n: 'Chocolate espeso', p: 5590, d: 'Preparación de la casa con chocolate belga y cacao — el favorito según las reseñas', img: 'fotos/p_chocolate_espeso.jpg' },
        { n: 'Chocolate americano', p: 4900, d: 'Con marshmallows y decorado con chocolate en rama' },
      ]},
      { title: 'Tecitos', items: [
        { n: 'Taza de té', p: 2500, d: 'Solicita la carta sensorial de té' },
        { n: 'Tetera para dos', p: 4500, d: 'Rellena de un sabor a elección, según carta sensorial' },
        { n: 'Té con leche', p: 3500, d: 'Infusión de té negro, con canela opcional y leche texturizada' },
        { n: 'Té helado Ceylán canela', p: 3290, d: 'Té negro frío con canela, servido con hielo y naranja' },
        { n: 'Té helado Chai', p: 3290, d: 'Té negro frío con cardamomo, jengibre, pimienta, canela y clavo de olor' },
        { n: 'Jarrita de leche', p: 1000 },
      ]}
    ]
  },
  jugos: {
    label: 'Jugos y Smoothies',
    groups: [
      { title: 'Bebidas frías', items: [
        { n: 'Jugo mango maracuyá', p: 3590, d: 'Jugo de pulpa guallarauco' },
        { n: 'Sprite Zero', p: 2000 },
      ]},
      { title: 'Café frío', items: [
        { n: 'Café helado', p: 5590, d: 'Dulce helado de vainilla, leche sin lactosa y un shot de espresso, decorado con crema chantilly y galleta wafer', img: 'fotos/p_cafe_helado.jpg' },
        { n: 'Latte frío', p: 4800, d: 'Shot de espresso con leche fría endulzada con syrup de sabor a elección y hielo', img: 'fotos/p_latte_frio.jpg' },
        { n: 'Affogato', p: 4590, d: 'Shot de espresso doble acompañado de helado de vainilla bravissimo y galleta de champaña', img: 'fotos/p_affogato.jpg' },
        { n: 'Espresso Tónica', p: 3890, d: 'Preparación fría de bebida tónica acompañada de espresso con doble carga y hielo', img: 'fotos/p_espresso_tonica.jpg' },
      ]},
    ]
  },
  pasteleria: {
    label: 'Pastelería',
    groups: [
      { title: 'Pasteles tradicionales', items: [
        { n: 'Alfajor tradicional', p: 1990, d: 'Triple galleta artesanal rellena de manjar' },
        { n: 'Galleta diseño', p: 1990 },
        { n: 'Baclawa', p: 2590, d: 'Dulce árabe de masa filo relleno de nueces y almendras' },
        { n: 'Ceregli tradicional', p: 2990, d: 'Dulce árabe relleno de nuez y almendra con almíbar' },
        { n: 'Ceregli choco nuez', p: 2990, d: 'Masa filo de chocolate rellena de nuez y almendras' },
        { n: 'Ceregli pistacho', p: 3990, d: 'Masa filo rellena de pistacho y almíbar' },
        { n: 'Fatayer manzana', p: 3290, d: 'Dulce árabe de masa filo relleno de manzana y canela' },
        { n: 'Pie de limón entero', p: 24000, d: 'Una de las estrellas de la casa' },
      ]},
      { title: 'Sin azúcar', items: [
        { n: 'Clásica sin azúcar', p: 4900, d: 'Bizcocho de vainilla, manjar, duraznos y crema pastelera, con chantilly' },
        { n: 'Selva VIP sin azúcar', p: 5500, d: 'Bizcocho de chocolate, trufa, manjar, hojarascas y mermelada de guinda' },
      ]},
      { title: 'Sin gluten', items: [
        { n: 'Mini alfajores sin gluten y sin lactosa', p: 5990, d: 'Cinco mini alfajores tipo chilenitos' },
        { n: 'Cheesecake frambuesa (sin gluten, con azúcar)', p: 5990, d: 'Con mermelada de frambuesa y queso philadelphia' },
        { n: 'Cheesecake maracuyá (sin gluten, con azúcar)', p: 5990, v: 1 },
        { n: 'Tres leches (sin gluten y sin lactosa)', p: 5990 },
      ]},
    ]
  },
  sandwich: {
    label: 'Sándwiches',
    groups: [{ title: 'Sándwiches (pan marraqueta sin gluten)', items: [
      { n: 'Muskaria', p: 8490, v: 1, d: 'Tomate, pesto de albahaca, palta y queso de cabra fundido — avisar si eres celíaco' },
      { n: 'Oronja', p: 8490, d: 'Queso crema, tomate, ave mayo, cebolla caramelizada y palta — avisar si eres celíaco' },
    ]}]
  }
};

const money = n => '$' + n.toLocaleString('es-CL');

const tabsEl = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');
const catKeys = Object.keys(MENU);

catKeys.forEach((key, i) => {
  const tab = document.createElement('button');
  tab.className = 'menu-tab' + (i===0 ? ' active':'');
  tab.textContent = MENU[key].label;
  tab.addEventListener('click', () => showTab(key));
  tab.dataset.key = key;
  tabsEl.appendChild(tab);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i===0 ? ' active':'');
  panel.id = 'panel-' + key;

  MENU[key].groups.forEach(group => {
    if(group.title && MENU[key].groups.length > 1){
      const h = document.createElement('div');
      h.style.cssText = 'font-family:Space Mono,monospace;font-size:0.7rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--rust);margin:28px 0 12px;font-weight:700;';
      h.textContent = group.title;
      panel.appendChild(h);
    }
    const grid = document.createElement('div');
    grid.className = 'menu-grid';
    group.items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'menu-item';
      row.addEventListener('click', () => openModal(item));

      if(item.img){
        const photo = document.createElement('div');
        photo.className = 'menu-item-photo';
        const photoImg = document.createElement('img');
        photoImg.src = item.img;
        photoImg.alt = item.n;
        photo.appendChild(photoImg);
        row.appendChild(photo);
      }

      const textWrap = document.createElement('div');
      textWrap.className = 'menu-item-text';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'name';
      nameSpan.textContent = item.n;
      textWrap.appendChild(nameSpan);

      if(item.v){
        const vegTag = document.createElement('span');
        vegTag.className = 'veg-tag';
        vegTag.textContent = 'VEG';
        textWrap.appendChild(vegTag);
      }

      if(item.d){
        const descDiv = document.createElement('div');
        descDiv.className = 'desc';
        descDiv.textContent = item.d;
        textWrap.appendChild(descDiv);
      }

      const priceDiv = document.createElement('div');
      priceDiv.className = 'price mono';
      priceDiv.textContent = money(item.p);

      row.appendChild(textWrap);
      row.appendChild(priceDiv);
      grid.appendChild(row);
    });
    panel.appendChild(grid);
  });
  panelsEl.appendChild(panel);
});

function showTab(key){
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.toggle('active', t.dataset.key === key));
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + key));
}

/* ---------- MODAL PRODUCTO ---------- */
let currentItem = null;
function openModal(item){
  currentItem = item;
  document.getElementById('modalName').textContent = item.n + (item.v ? ' (vegetariano)' : '');
  document.getElementById('modalPrice').textContent = money(item.p);
  document.getElementById('modalDesc').textContent = item.d || 'Preparado del día en Café Muskaria.';
  const photoWrap = document.getElementById('modalPhoto');
  if(item.img){
    photoWrap.innerHTML = '';
    const photoImg = document.createElement('img');
    photoImg.src = item.img;
    photoImg.alt = item.n;
    photoWrap.appendChild(photoImg);
    photoWrap.style.display = 'block';
  } else {
    photoWrap.style.display = 'none';
  }
  toggleModal(true);
}
document.getElementById('modalAddBtn').addEventListener('click', () => {
  addToCart(currentItem);
  toggleModal(false);
  toggleCart(true);
});
function toggleModal(open){ document.getElementById('modalOverlay').classList.toggle('open', open); }

/* ---------- CARRITO ---------- */
let cart = [];
function addToCart(item){
  const existing = cart.find(c => c.n === item.n);
  if(existing){ existing.qty++; } else { cart.push({...item, qty:1}); }
  renderCart();
}
function changeQty(name, delta){
  const line = cart.find(c => c.n === name);
  if(!line) return;
  line.qty += delta;
  if(line.qty <= 0) cart = cart.filter(c => c.n !== name);
  renderCart();
}
function renderCart(){
  const linesEl = document.getElementById('cartLines');
  const totalEl = document.getElementById('cartTotal');
  const countEl = document.getElementById('cartCount');
  const totalQty = cart.reduce((s,c) => s + c.qty, 0);
  countEl.textContent = totalQty;
  if(cart.length === 0){
    linesEl.innerHTML = '<p class="cart-empty">Todavía no agregaste nada.</p>';
    totalEl.textContent = money(0);
    return;
  }
  linesEl.innerHTML = '';
  let total = 0;
  cart.forEach(line => {
    total += line.p * line.qty;
    const div = document.createElement('div');
    div.className = 'cart-line';
    div.innerHTML = `
      <div>
        <div class="name">${line.n}</div>
        <div class="qty-ctrl">
          <button class="qty-btn" data-name="${line.n}" data-delta="-1">−</button>
          <span class="mono">${line.qty}</span>
          <button class="qty-btn" data-name="${line.n}" data-delta="1">+</button>
        </div>
      </div>
      <div class="price mono">${money(line.p * line.qty)}</div>
    `;
    linesEl.appendChild(div);
  });
  totalEl.textContent = money(total);
  linesEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => changeQty(btn.dataset.name, parseInt(btn.dataset.delta)));
  });
  const summary = cart.map(c => `${c.qty}x ${c.n}`).join(', ');
  document.getElementById('checkoutBtn').href = 'https://instagram.com/muskaria.cafe';
}
document.getElementById('cartBtn').addEventListener('click', () => toggleCart(true));
document.getElementById('cartCloseBtn').addEventListener('click', () => toggleCart(false));
function toggleCart(open){ document.getElementById('cartOverlay').classList.toggle('open', open); }

document.getElementById('modalCloseBtn').addEventListener('click', () => toggleModal(false));
[document.getElementById('cartOverlay'), document.getElementById('modalOverlay')].forEach(ov => {
  ov.addEventListener('click', (e) => { if(e.target === ov) ov.classList.remove('open'); });
});

/* ---------- NAV MÓVIL Y NAVEGACIÓN POR PESTAÑAS ---------- */
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

const panels = document.querySelectorAll('.tab-panel');
function goToTab(tabId){
  panels.forEach(p => p.classList.toggle('active', p.dataset.tabPanel === tabId));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.tab === tabId));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    goToTab(el.dataset.tab);
  });
});

/* ---------- INDICADOR ABIERTO/CERRADO EN VIVO (Lun-Vie 8:30-21:30, Sáb-Dom 9:30-21:30) ---------- */
function updateOpenStatus(dotId, textId){
  const dot = document.getElementById(dotId);
  const text = document.getElementById(textId);
  if(!dot || !text) return;
  const now = new Date();
  const day = now.getDay(); // 0 dom ... 6 sáb
  const minutes = now.getHours()*60 + now.getMinutes();
  const openMin = (day === 0 || day === 6) ? (9*60+30) : (8*60+30);
  const closeMin = 21*60+30;
  const isOpen = minutes >= openMin && minutes < closeMin;
  text.textContent = isOpen ? 'Abierto ahora' : 'Cerrado ahora';
  dot.classList.toggle('closed', !isOpen);
}
updateOpenStatus('statusDot', 'statusText');
updateOpenStatus('statusDot2', 'statusText2');
