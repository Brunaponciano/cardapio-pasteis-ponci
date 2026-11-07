/**
 * PASTÉIS PONCI - CARDÁPIO DIGITAL
 * Lógica do cardápio, filtros, pesquisa, jantinha e geração de QR Code
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==================== DADOS DO CARDÁPIO ====================
  const menuItems = [
    {
      id: 'pastel-tradicional',
      title: 'Pastel Especial Ponci',
      price: 14.00,
      category: 'pasteis',
      image: 'assets/img/item-pastel.jpg',
      tag: 'Mais Pedido',
      tagType: 'gold',
      description: 'Massa artesanal super crocante, sequinha e bem recheada. Frito na hora com sabor inconfundível!',
      extras: {
        title: 'Sabores Populares Disponíveis no Balcão:',
        items: ['Carne Temperada', 'Queijo Mussarela', 'Frango c/ Catupiry', 'Pizza', 'Carne c/ Queijo', 'Calabresa c/ Queijo', 'Bauru', 'Romeu & Julieta (Doce)']
      }
    },
    {
      id: 'mini-pizza',
      title: 'Mini Pizza Ponci',
      price: 8.00,
      category: 'pizzas',
      image: 'assets/img/item-mini-pizza.jpg',
      tag: 'Novidade!',
      tagType: 'novo',
      description: 'A qualidade e o sabor dos pastéis agora também em Mini Pizza! Massa fofinha com borda crocante e queijo derretido.',
      extras: {
        title: 'Destaques:',
        items: ['Massa artesanal assada na hora', 'Molho de tomate especial', 'Queijo mussarela gratinado', 'Orégano e temperos finos']
      }
    },
    {
      id: 'salgados-copo',
      title: 'Salgados no Copo',
      price: 12.00,
      category: 'pasteis',
      image: 'assets/img/item-salgados-copo.jpg',
      tag: 'Sucesso',
      tagType: 'gold',
      description: 'Copo generoso repleto de mini salgadinhos sortidos fritos na hora. Crocantes por fora e macios por dentro!',
      extras: {
        title: 'Sortimento no Copo:',
        items: ['Mini Coxinhas douradas', 'Bolinhas de Queijo cremosas', 'Kibes tradicionais crocantes']
      }
    },
    {
      id: 'cuscuz-paulista',
      title: 'Cuscuz Recheado',
      price: 18.00,
      category: 'pratos',
      image: 'assets/img/item-cuscuz.jpg',
      tag: 'Especial',
      tagType: 'gold',
      description: 'Cuscuz quentinho, temperado no capricho e super recheado. Aquele gostinho caseiro tradicional que conforta.',
      extras: {
        title: 'Ingredientes e Recheio:',
        items: ['Farinha de milho flocada no vapor', 'Carne temperada / Frango', 'Ovo, azeitonas, cheiro verde e especiarias']
      }
    },
    {
      id: 'macarrao-pote-pequeno',
      title: 'Macarrão de Pote (Pequeno)',
      price: 15.00,
      category: 'massas',
      image: 'assets/img/item-macarrao-pote-pequeno.jpg',
      tag: 'Individual',
      tagType: 'default',
      description: 'Porção individual prática no pote térmico para manter bem quentinho. Molho encorpado e massa no ponto!',
      extras: {
        title: 'Opções de Massas:',
        items: ['Raviole artesanal', 'Capelete recheado', 'Inhoque tradicional']
      }
    },
    {
      id: 'macarrao-pote-grande',
      title: 'Macarrão de Pote (Grande)',
      price: 20.00,
      category: 'massas',
      image: 'assets/img/item-macarrao-pote-grande.jpg',
      tag: 'Bem Servido',
      tagType: 'gold',
      description: 'Porção reforçada de massa no pote térmico. Perfeito para quem tem muita fome ou para dividir!',
      extras: {
        title: 'Opções de Massas:',
        items: ['Raviole artesanal', 'Capelete recheado', 'Inhoque tradicional']
      }
    },
    {
      id: 'jantinha-segunda',
      title: 'Marmitex: Espaguete à Bolonhesa',
      price: 18.00,
      category: 'jantinha',
      image: 'assets/img/jantinha-segunda-espaguete.jpg',
      tag: 'Segunda-feira',
      tagType: 'novo',
      description: 'Marmitex Jantinha La Mama Mia (18h às 21h). Espaguete caseiro com molho bolonhesa encorpado e bastante mussarela.',
      extras: {
        title: 'Horário de Venda:',
        items: ['Segunda-feira das 18:00 às 21:00', 'Queijo mussarela gratinado', 'Molho artesanal com carne selecionada']
      }
    },
    {
      id: 'jantinha-terca',
      title: 'Marmitex: Penne ao Molho Branco',
      price: 18.00,
      category: 'jantinha',
      image: 'assets/img/jantinha-terca-penne.jpg',
      tag: 'Terça-feira',
      tagType: 'novo',
      description: 'Marmitex Jantinha La Mama Mia (18h às 21h). Penne al dente ao molho branco cremoso com pedacinhos de bacon e brócolis.',
      extras: {
        title: 'Horário de Venda:',
        items: ['Terça-feira das 18:00 às 21:00', 'Bacon crocante', 'Brócolis fresco', 'Molho branco cremoso']
      }
    },
    {
      id: 'jantinha-quarta',
      title: 'Marmitex: Parafuso ao Molho Rosé',
      price: 18.00,
      category: 'jantinha',
      image: 'assets/img/jantinha-quarta-parafuso.jpg',
      tag: 'Quarta-feira',
      tagType: 'novo',
      description: 'Marmitex Jantinha La Mama Mia (18h às 21h). Macarrão parafuso envolvido em saboroso molho rosé com rodelas de calabresa.',
      extras: {
        title: 'Horário de Venda:',
        items: ['Quarta-feira das 18:00 às 21:00', 'Calabresa fatiada douradinha', 'Molho rosé cremoso']
      }
    },
    {
      id: 'jantinha-quinta',
      title: 'Marmitex: Capelete ao Molho Rosé',
      price: 18.00,
      category: 'jantinha',
      image: 'assets/img/jantinha-quinta-capelete.jpg',
      tag: 'Quinta-feira',
      tagType: 'novo',
      description: 'Marmitex Jantinha La Mama Mia (18h às 21h). Capeletes artesanais recheados cobertos com molho rosé suave e temperado.',
      extras: {
        title: 'Horário de Venda:',
        items: ['Quinta-feira das 18:00 às 21:00', 'Massa recheada artesanal', 'Molho rosé da casa']
      }
    },
    {
      id: 'jantinha-sexta',
      title: 'Marmitex: Lasanha Tradicional',
      price: 22.00,
      category: 'jantinha',
      image: 'assets/img/jantinha-sexta-lasanha.jpg',
      tag: 'Sexta-feira',
      tagType: 'novo',
      description: 'Marmitex Jantinha La Mama Mia (18h às 21h). Lasanha artesanal em camadas generosas de queijo, presunto, carne e molho especial.',
      extras: {
        title: 'Horário de Venda:',
        items: ['Sexta-feira das 18:00 às 21:00', 'Camadas fartas de queijo derretido', 'Molho especial bolonhesa']
      }
    },
    {
      id: 'coquinha-garrafinha',
      title: 'Coquinha Garrafinha',
      price: 3.50,
      category: 'bebidas',
      image: 'assets/img/item-coquinha.jpg',
      tag: 'Geladinha',
      tagType: 'default',
      description: 'Garrafinha clássica de Coca-Cola bem gelada. O acompanhamento perfeito e tradicional para o seu pastel.',
      extras: {
        title: 'Detalhes:',
        items: ['Garrafinha de vidro tradicional', 'Trincando de gelada!']
      }
    },
    {
      id: 'refrigerante-lata',
      title: 'Refrigerante Lata',
      price: 6.00,
      category: 'bebidas',
      image: 'assets/img/item-refrigerante-lata.jpg',
      tag: 'Diversos',
      tagType: 'default',
      description: 'Refrigerantes em lata 350ml sempre trincando de gelados.',
      extras: {
        title: 'Opções no Balcão:',
        items: ['Coca-Cola Original', 'Coca-Cola Zero', 'Guaraná Antarctica', 'Fanta Laranja / Uva']
      }
    },
    {
      id: 'cervejas-lata',
      title: 'Cervejas em Lata',
      price: 5.00,
      category: 'bebidas',
      image: 'assets/img/item-cervejas-lata.jpg',
      tag: 'Trincando',
      tagType: 'default',
      description: 'Cervejas geladas em lata para refrescar seu momento na Pastelaria Ponci.',
      extras: {
        title: 'Marcas Disponíveis:',
        items: ['Skol', 'Amstel', 'Heineken', 'Budweiser', 'Consulte outras marcas no balcão']
      }
    },
    {
      id: 'balde-cerveja',
      title: 'Balde com 10 Latas',
      price: 50.00,
      category: 'bebidas',
      image: 'assets/img/item-balde-cerveja.jpg',
      tag: 'Super Combo',
      tagType: 'gold',
      description: 'Balde com gelo contendo 10 cervejas em lata super geladas. A melhor economia para a mesa com amigos e família!',
      extras: {
        title: 'Detalhes do Combo:',
        items: ['10 Latas de cerveja', 'Servido no balde com bastante gelo', 'Mantenha suas bebidas trincando a noite toda']
      }
    }
  ];

  // Dados dos Pratos da Semana da Marmitex Jantinha
  const jantinhaDays = {
    segunda: {
      name: 'Segunda-feira',
      dish: 'Espaguete ao Molho Bolonhesa e Mussarela',
      desc: 'Massa espaguete clássica servida quentinha com molho de carne moída selecionada e queijo mussarela derretido por cima.',
      image: 'assets/img/jantinha-segunda-espaguete.jpg',
      time: '18:00 às 21:00'
    },
    terca: {
      name: 'Terça-feira',
      dish: 'Penne ao Molho Branco com Bacon e Brócolis',
      desc: 'Massa penne envolvida em molho bechamel cremoso, pedacinhos dourados e crocantes de bacon e brócolis fresco.',
      image: 'assets/img/jantinha-terca-penne.jpg',
      time: '18:00 às 21:00'
    },
    quarta: {
      name: 'Quarta-feira',
      dish: 'Parafuso ao Molho Rosé e Calabresa',
      desc: 'Fusilli (parafuso) saboroso com fatias de calabresa defumada dourada e o aveludado molho rosé artesanal.',
      image: 'assets/img/jantinha-quarta-parafuso.jpg',
      time: '18:00 às 21:00'
    },
    quinta: {
      name: 'Quinta-feira',
      dish: 'Capelete ao Molho Rosé',
      desc: 'Capeletes recheados de tradição italiana, regados com molho rosé suave e folhas de manjericão fresco.',
      image: 'assets/img/jantinha-quinta-capelete.jpg',
      time: '18:00 às 21:00'
    },
    sexta: {
      name: 'Sexta-feira',
      dish: 'Lasanha Tradicional da Mama Mia',
      desc: 'Nossa campeã de sexta! Lasanha montada em fartas camadas de massa fresca, presunto, mussarela e molho bolonhesa gratinado.',
      image: 'assets/img/jantinha-sexta-lasanha.jpg',
      time: '18:00 às 21:00'
    }
  };

  // Flyers images dictionary
  const flyersMap = {
    'cardapio-geral': 'assets/img/cardapio-geral.jpg',
    'mini-pizza': 'assets/img/banner-mini-pizza.jpg',
    'jantinha': 'assets/img/flyer-jantinha.jpg',
    'massas': 'assets/img/flyer-massas.jpg',
    'jantinha-ilustrada': 'assets/img/flyer-jantinha-ilustrada.jpg'
  };

  // State
  let currentCategory = 'todos';
  let searchTerm = '';

  // DOM Elements
  const menuGrid = document.getElementById('menuGrid');
  const emptyState = document.getElementById('emptyState');
  const searchInput = document.getElementById('searchInput');
  const btnClearSearch = document.getElementById('btnClearSearch');
  const btnResetFilter = document.getElementById('btnResetFilter');
  const categoryChips = document.querySelectorAll('.cat-chip');

  // Modals
  const itemModal = document.getElementById('itemModal');
  const qrModal = document.getElementById('qrModal');
  const flyersModal = document.getElementById('flyersModal');
  const saboresModal = document.getElementById('saboresModal');

  // Close buttons
  const btnCloseItemModal = document.getElementById('btnCloseItemModal');
  const btnCloseQrModal = document.getElementById('btnCloseQrModal');
  const btnCloseFlyersModal = document.getElementById('btnCloseFlyersModal');
  const btnCloseSaboresModal = document.getElementById('btnCloseSaboresModal');

  // Triggers
  const btnOpenQrModal = document.getElementById('btnOpenQrModal');
  const btnFooterQr = document.getElementById('btnFooterQr');
  const btnFloatingQr = document.getElementById('btnFloatingQr');
  const btnOpenFlyers = document.getElementById('btnOpenFlyers');
  const btnVerSabores = document.getElementById('btnVerSabores');

  // Jantinha Elements
  const weekdayTabs = document.querySelectorAll('.day-tab');
  const jantinhaSpotlight = document.getElementById('jantinhaSpotlight');

  // QR elements
  const qrCodeContainer = document.getElementById('qrCodeContainer');
  const printQrCodeContainer = document.getElementById('printQrCodeContainer');
  const customUrlInput = document.getElementById('customUrlInput');
  const btnUpdateQr = document.getElementById('btnUpdateQr');
  const btnPrintTableTent = document.getElementById('btnPrintTableTent');
  const btnDownloadQr = document.getElementById('btnDownloadQr');
  const btnCopyLink = document.getElementById('btnCopyLink');
  const copyLinkText = document.getElementById('copyLinkText');
  const btnShareWhatsApp = document.getElementById('btnShareWhatsApp');

  // ==================== FORMAT HELPERS ====================
  function formatMoney(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  // ==================== RENDER MENU ====================
  function updateCategoryCounts() {
    const counts = {
      todos: menuItems.length,
      pasteis: menuItems.filter(i => i.category === 'pasteis').length,
      massas: menuItems.filter(i => i.category === 'massas').length,
      jantinha: menuItems.filter(i => i.category === 'jantinha').length,
      pratos: menuItems.filter(i => i.category === 'pratos').length,
      pizzas: menuItems.filter(i => i.category === 'pizzas').length,
      bebidas: menuItems.filter(i => i.category === 'bebidas').length,
    };

    for (const [cat, count] of Object.entries(counts)) {
      const el = document.getElementById(`count-${cat}`);
      if (el) el.textContent = count;
    }
  }

  function renderMenu() {
    const filtered = menuItems.filter(item => {
      const matchesCategory = currentCategory === 'todos' || item.category === currentCategory;
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch = !term ||
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        (item.extras && item.extras.items.some(extra => extra.toLowerCase().includes(term)));
      
      return matchesCategory && matchesSearch;
    });

    menuGrid.innerHTML = '';

    if (filtered.length === 0) {
      emptyState.style.display = 'block';
    } else {
      emptyState.style.display = 'none';

      filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
          <div class="card-img-wrapper">
            <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy">
            <span class="card-tag ${item.tagType === 'novo' ? 'novo' : ''}">${item.tag || 'Destaque'}</span>
          </div>
          <div class="card-body">
            <div class="card-title-row">
              <h3 class="card-title">${item.title}</h3>
              <span class="card-price">${formatMoney(item.price)}</span>
            </div>
            <p class="card-desc">${item.description}</p>
            <div class="card-actions">
              <button class="btn-card-details" data-id="${item.id}">
                <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>Ver Detalhes & Sabores</span>
              </button>
            </div>
          </div>
        `;
        menuGrid.appendChild(card);
      });

      // Bind card detail clicks
      document.querySelectorAll('.btn-card-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const itemId = e.currentTarget.getAttribute('data-id');
          openItemModal(itemId);
        });
      });
    }
  }

  // ==================== ITEM MODAL ====================
  function openItemModal(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    document.getElementById('modalItemImage').src = item.image;
    document.getElementById('modalItemImage').alt = item.title;
    document.getElementById('modalItemCategory').textContent = item.tag || 'Ponci';
    document.getElementById('modalItemTitle').textContent = item.title;
    document.getElementById('modalItemPrice').textContent = formatMoney(item.price);
    document.getElementById('modalItemDescription').textContent = item.description;

    const extraBox = document.getElementById('modalExtraSection');
    if (item.extras && item.extras.items.length > 0) {
      extraBox.style.display = 'block';
      let html = `<h4>${item.extras.title}</h4><ul style="list-style: inside disc; font-size: 0.88rem; color: #e2e8f0; line-height: 1.6;">`;
      item.extras.items.forEach(it => {
        html += `<li>${it}</li>`;
      });
      html += `</ul>`;
      extraBox.innerHTML = html;
    } else {
      extraBox.style.display = 'none';
    }

    openModal(itemModal);
  }

  // ==================== MARMITEX JANTINHA SPOTLIGHT ====================
  function renderJantinhaDay(dayKey) {
    const data = jantinhaDays[dayKey];
    if (!data) return;

    // Update active tab styling
    weekdayTabs.forEach(tab => {
      if (tab.getAttribute('data-day') === dayKey) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    jantinhaSpotlight.innerHTML = `
      <img src="${data.image}" alt="${data.dish}" class="jantinha-spotlight-img">
      <div class="jantinha-spotlight-info">
        <span class="jantinha-spotlight-daytag">🇮🇹 Prato de ${data.name}</span>
        <h3>${data.dish}</h3>
        <p class="jantinha-spotlight-desc">${data.desc}</p>
        <div class="jantinha-spotlight-footer">
          <span class="jantinha-time-pill">⏰ Horário: <strong>${data.time}</strong></span>
          <button class="btn btn-outline-gold btn-sm" id="btnVerCardapioJantinha" style="padding: 0.35rem 0.8rem; font-size: 0.82rem;">
            Ver no Cardápio
          </button>
        </div>
      </div>
    `;

    const btnVer = document.getElementById('btnVerCardapioJantinha');
    if (btnVer) {
      btnVer.addEventListener('click', () => {
        currentCategory = 'jantinha';
        categoryChips.forEach(c => c.classList.remove('active'));
        const jantinhaChip = document.querySelector('[data-category="jantinha"]');
        if (jantinhaChip) jantinhaChip.classList.add('active');
        renderMenu();
        const cardapioSection = document.getElementById('cardapio');
        if (cardapioSection) cardapioSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // Auto-detect current weekday
  function setupTodayJantinha() {
    const dayIndex = new Date().getDay(); // 0=Dom, 1=Seg, 2=Ter, 3=Qua, 4=Qui, 5=Sex, 6=Sab
    const dayMap = {
      1: 'segunda',
      2: 'terca',
      3: 'quarta',
      4: 'quinta',
      5: 'sexta'
    };

    const targetDay = dayMap[dayIndex] || 'segunda';

    // Mark 'HOJE' badge if today is Monday to Friday
    if (dayMap[dayIndex]) {
      const todayTab = document.querySelector(`[data-day="${dayMap[dayIndex]}"]`);
      if (todayTab) todayTab.classList.add('is-today');
    }

    renderJantinhaDay(targetDay);
  }

  weekdayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const day = tab.getAttribute('data-day');
      renderJantinhaDay(day);
    });
  });

  // ==================== SEARCH & CATEGORY FILTERS ====================
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.getAttribute('data-category');
      renderMenu();
    });
  });

  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    btnClearSearch.style.display = searchTerm ? 'block' : 'none';
    renderMenu();
  });

  btnClearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchTerm = '';
    btnClearSearch.style.display = 'none';
    searchInput.focus();
    renderMenu();
  });

  btnResetFilter.addEventListener('click', () => {
    searchInput.value = '';
    searchTerm = '';
    btnClearSearch.style.display = 'none';
    currentCategory = 'todos';
    categoryChips.forEach(c => c.classList.remove('active'));
    document.querySelector('[data-category="todos"]').classList.add('active');
    renderMenu();
  });

  // ==================== QR CODE GENERATOR ====================
  let modalQrInstance = null;
  let printQrInstance = null;

  function getCardapioUrl() {
    let url = window.location.href.split('#')[0];
    if (url.startsWith('file://')) {
      // If opened locally via file protocol, provide a friendly default or placeholder
      return 'https://pasteisponci.com.br';
    }
    return url;
  }

  function generateQrCodes(url) {
    if (!window.QRCode) {
      console.warn('QRCode library not loaded yet.');
      return;
    }

    // Modal QR
    qrCodeContainer.innerHTML = '';
    modalQrInstance = new QRCode(qrCodeContainer, {
      text: url,
      width: 200,
      height: 200,
      colorDark: '#121212',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });

    // Printable Stand QR
    printQrCodeContainer.innerHTML = '';
    printQrInstance = new QRCode(printQrCodeContainer, {
      text: url,
      width: 220,
      height: 220,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  function initQrSystem() {
    const defaultUrl = getCardapioUrl();
    customUrlInput.value = defaultUrl;
    generateQrCodes(defaultUrl);
  }

  btnUpdateQr.addEventListener('click', () => {
    const val = customUrlInput.value.trim();
    if (val) {
      generateQrCodes(val);
      showToast('QR Code atualizado com sucesso!');
    }
  });

  btnPrintTableTent.addEventListener('click', () => {
    window.print();
  });

  btnDownloadQr.addEventListener('click', () => {
    const canvas = qrCodeContainer.querySelector('canvas');
    if (!canvas) {
      const img = qrCodeContainer.querySelector('img');
      if (img && img.src) {
        downloadDataUrl(img.src, 'qrcode-pasteis-ponci.png');
        return;
      }
      alert('QR Code ainda sendo gerado, tente novamente em alguns segundos.');
      return;
    }
    const dataUrl = canvas.toDataURL('image/png');
    downloadDataUrl(dataUrl, 'qrcode-pasteis-ponci.png');
  });

  function downloadDataUrl(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  btnCopyLink.addEventListener('click', () => {
    const url = customUrlInput.value.trim() || getCardapioUrl();
    navigator.clipboard.writeText(url).then(() => {
      copyLinkText.textContent = 'Link Copiado com Sucesso! ✓';
      setTimeout(() => {
        copyLinkText.textContent = 'Copiar Link do Cardápio';
      }, 2500);
    }).catch(() => {
      prompt('Copie o link abaixo:', url);
    });
  });

  btnShareWhatsApp.addEventListener('click', () => {
    const url = customUrlInput.value.trim() || getCardapioUrl();
    const msg = encodeURIComponent(`Olá! Confira o cardápio digital dos Pastéis Ponci com preços e novidades deliciosas: ${url} 🥟`);
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  });

  // ==================== FLYERS MODAL ====================
  const flyerTabs = document.querySelectorAll('.flyer-tab-btn');
  const flyerViewerImg = document.getElementById('flyerViewerImg');

  flyerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      flyerTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.getAttribute('data-flyer');
      if (flyersMap[key]) {
        flyerViewerImg.src = flyersMap[key];
      }
    });
  });

  // ==================== MODAL HELPERS ====================
  function openModal(modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('open');
    if (!document.querySelector('.modal-backdrop.open')) {
      document.body.style.overflow = '';
    }
  }

  // Bind close buttons
  btnCloseItemModal.addEventListener('click', () => closeModal(itemModal));
  btnCloseQrModal.addEventListener('click', () => closeModal(qrModal));
  btnCloseFlyersModal.addEventListener('click', () => closeModal(flyersModal));
  btnCloseSaboresModal.addEventListener('click', () => closeModal(saboresModal));

  // Bind trigger buttons
  btnOpenQrModal.addEventListener('click', () => {
    initQrSystem();
    openModal(qrModal);
  });

  btnFooterQr.addEventListener('click', () => {
    initQrSystem();
    openModal(qrModal);
  });

  btnFloatingQr.addEventListener('click', () => {
    initQrSystem();
    openModal(qrModal);
  });

  btnOpenFlyers.addEventListener('click', () => openModal(flyersModal));
  btnVerSabores.addEventListener('click', () => openModal(saboresModal));

  // Close when clicking backdrop
  [itemModal, qrModal, flyersModal, saboresModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [itemModal, qrModal, flyersModal, saboresModal].forEach(m => closeModal(m));
    }
  });

  // Toast notification
  function showToast(text) {
    let toast = document.getElementById('ponciToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'ponciToast';
      toast.style.position = 'fixed';
      toast.style.bottom = '80px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.background = '#f59e0b';
      toast.style.color = '#111';
      toast.style.fontWeight = '700';
      toast.style.padding = '10px 20px';
      toast.style.borderRadius = '30px';
      toast.style.boxShadow = '0 6px 20px rgba(0,0,0,0.5)';
      toast.style.zIndex = '999';
      toast.style.transition = 'opacity 0.3s ease';
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.opacity = '0';
    }, 2500);
  }

  // ==================== INITIALIZATION ====================
  updateCategoryCounts();
  renderMenu();
  setupTodayJantinha();
  initQrSystem();
});
