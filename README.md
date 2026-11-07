# 🥟 Pastéis Ponci — Cardápio Digital

Site moderno, responsivo e acolhedor de **Cardápio Digital** desenvolvido sob medida para a pastelaria **Pastéis Ponci** ("*Sabor que une pessoas*"), localizada no Jardim Ibirapuera.

Este cardápio foi planejado exclusivamente para **visualização de itens e preços** (sem pedidos online complexos ou carrinhos), permitindo que os clientes consultem todas as delícias pelo próprio celular escaneando um **QR Code** na mesa ou no balcão.

---

## 📸 Itens e Novidades Extraídos dos Panfletos

O cardápio contém todos os itens oficiais com suas respectivas fotos e preços:

| Item | Preço | Categoria |
| :--- | :--- | :--- |
| **Pastel Especial Ponci** | R$ 14,00 | Pastéis & Salgados |
| **Mini Pizza Ponci** *(Novidade!)* | R$ 8,00 | Mini Pizzas |
| **Salgados no Copo** *(Coxinhas, Bolinhas de Queijo, Kibes)* | R$ 12,00 | Pastéis & Salgados |
| **Cuscuz Recheado** | R$ 18,00 | Pratos Tradicionais |
| **Macarrão de Pote (Pequeno)** | R$ 15,00 | Massas & Potes |
| **Macarrão de Pote (Grande)** | R$ 20,00 | Massas & Potes |
| **Coquinha Garrafinha** | R$ 3,50 | Bebidas |
| **Refrigerante Lata 350ml** | R$ 6,00 | Bebidas |
| **Cervejas Lata** | R$ 5,00 | Bebidas |
| **Balde com 10 Latas** | R$ 50,00 | Bebidas (Combo) |

### 🇮🇹 Marmitex Jantinha "La Mama Mia" (18:00 às 21:00)
- **Segunda-feira:** Espaguete ao molho bolonhesa e mussarela
- **Terça-feira:** Penne ao molho branco com bacon e brócolis
- **Quarta-feira:** Parafuso ao molho rosé e calabresa
- **Quinta-feira:** Capelete ao molho rosé
- **Sexta-feira:** Lasanha tradicional da Mama Mia
- **Massas de Pote:** Raviole, Capelete e Inhoque

---

## ✨ Recursos do Site

1. **Acesso Fácil via QR Code:**
   - Botão **"QR Code de Mesa"** no cabeçalho e na barra flutuante.
   - Gera na hora o QR Code do link atual.
   - **Gerador de Placa de Mesa para Impressão:** clique em *"Imprimir Placa de Mesa (Display de Balcão)"* e você terá um display pronto com logotipo, instruções e QR Code grande pronto para imprimir e colocar nas mesas da pastelaria.
   - Opções para baixar o QR Code em PNG, copiar o link ou enviar direto no WhatsApp.

2. **Destaque do Prato de Hoje na Jantinha:**
   - Detecta automaticamente o dia da semana atual e destaca o prato correspondente da **Marmitex Jantinha "La Mama Mia"**.

3. **Busca Instantânea & Filtros por Categoria:**
   - Filtre por: *Todos, Pastéis & Salgados, Mini Pizza, Massas & Potes, Marmitex Jantinha, Cuscuz e Bebidas*.
   - Campo de pesquisa em tempo real (ex: busque por "queijo", "cerveja", "lasanha").

4. **Visualizador dos Panfletos Originais:**
   - Modal com galeria dos folhetos oficiais da pastelaria em alta resolução.

5. **Design Mobile-First:**
   - 100% otimizado para celulares dos clientes (Android e iPhone).

---

## 🚀 Como Executar no seu Computador

Você tem duas formas simples:

### Opção 1: Clicar duas vezes em `iniciar_cardapio.bat`
Basta dar dois cliques no arquivo `iniciar_cardapio.bat`.
Ele iniciará o servidor local e abrirá o cardápio no seu navegador. O terminal mostrará:
- Endereço no computador: `http://localhost:8080`
- Endereço no celular (mesmo Wi-Fi): `http://192.168.x.x:8080`

### Opção 2: Abrir diretamente o arquivo `index.html`
Basta dar dois cliques no arquivo `index.html` em qualquer navegador (Google Chrome, Edge, etc.).

---

## 🌐 Como Publicar na Internet Gratuitamente (Para os clientes acessarem com 3G/4G/5G)

Para que qualquer cliente possa escanear o QR code da mesa usando dados móveis (mesmo sem estar no Wi-Fi da pastelaria), você pode publicar o site de graça em 2 minutos em plataformas como:

### 1. GitHub Pages (100% Gratuito)
1. Crie uma conta no [GitHub.com](https://github.com).
2. Crie um repositório chamado `cardapio-pasteis-ponci`.
3. Suba os arquivos desta pasta (`index.html`, `style.css`, `app.js`, pasta `assets/`).
4. Nas configurações do repositório (*Settings > Pages*), selecione o branch `main` e salve.
5. Seu site ficará online em: `https://seu-usuario.github.io/cardapio-pasteis-ponci/`.

### 2. Vercel ou Netlify (Arrastar e Soltar)
1. Acesse [Netlify Drop](https://app.netlify.com/drop).
2. Arraste a pasta inteira do projeto para a tela.
3. Em 5 segundos seu cardápio estará no ar com link público HTTPS!

> **Dica do QR Code:** Após publicar, abra o site, clique em **"QR Code de Mesa"**, digite o novo endereço na caixinha, clique em **"Atualizar"** e depois em **"Imprimir Placa de Mesa"**. Pronto! Todas as plaquinhas terão o link da internet!

---

## ✏️ Como Alterar Preços ou Sabores no Futuro

Para atualizar qualquer preço ou adicionar um novo sabor, abra o arquivo `app.js` em qualquer editor de texto (como Bloco de Notas ou VS Code):
- Na lista `menuItems`, basta alterar o valor do `price` (ex: `price: 15.00`).
- Salve o arquivo e atualize a página.

---

**Pastéis Ponci** — *Sabor que une pessoas!* 🥟
