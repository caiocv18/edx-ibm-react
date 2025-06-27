# 🌿 PlantShop - E-commerce de Plantas de Interior

Um e-commerce moderno e responsivo desenvolvido em React + TypeScript com Redux para gerenciamento de estado, focado na venda de plantas de interior.

## 🚀 Funcionalidades Implementadas

### ✅ Redux / CartSlice
- **CartSlice** em `src/features/cart/CartSlice.ts`
- Reducers implementados:
  - `addItem()` - Adiciona item ao carrinho
  - `removeItem()` - Remove item completamente do carrinho
  - `updateQuantity()` - Incrementa/decrementa quantidade
- Actions e reducer exportados para uso no store

### ✅ Landing Page (`/`)
- Imagem de fundo full-screen com overlay
- Parágrafo sobre a empresa **PlantShop**
- Nome da empresa em destaque com estilo moderno
- Botão "Get Started" que navega para `/products`
- Design responsivo com animações suaves

### ✅ Product Listing Page (`/products`)
- **6 plantas únicas** com thumbnail, nome e preço
- **3 categorias visuais**: Folhagem, Suculentas e Floridas
- Cada planta possui:
  - Botão "Add to Cart" que incrementa o contador do carrinho
  - Botão desabilitado após adicionar (mostra "Adicionado ✓")
  - Integração completa com Redux para adicionar ao carrinho
- Layout em grid responsivo com cards modernos

### ✅ Header (comum a todas as rotas)
- Aparece em todas as páginas (`/`, `/products`, `/cart`)
- Ícone de carrinho com contador sincronizado com Redux
- Links de navegação com estados ativos
- Design sticky com gradiente verde
- Totalmente responsivo

### ✅ Shopping Cart Page (`/cart`)
- **Resumo do carrinho**: total de itens e custo total
- **Lista detalhada** de cada planta com:
  - Thumbnail, nome, quantidade e preço unitário
  - Botão **+** para incrementar quantidade
  - Botão **-** para decrementar quantidade (mínimo 1)
  - Botão **Delete** (🗑️) para remover completamente
  - Subtotal individual de cada item
- **Botão Checkout** que mostra "Coming Soon"
- **Botão Continue Shopping** que volta para `/products`
- Estado vazio do carrinho com call-to-action

## 🛠️ Tecnologias Utilizadas

- **React 19** com TypeScript
- **Redux Toolkit** para gerenciamento de estado
- **React Router DOM** para navegação
- **Vite** como bundler
- **CSS3** com Flexbox e Grid
- **Imagens via Unsplash** para as plantas

## 📦 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   └── Header.css
├── features/
│   └── cart/
│       └── CartSlice.ts    # Redux slice do carrinho
├── pages/
│   ├── LandingPage.tsx     # Página inicial
│   ├── ProductsPage.tsx    # Lista de produtos
│   ├── CartPage.tsx        # Carrinho de compras
│   └── *.css              # Estilos de cada página
├── store/
│   └── store.ts           # Configuração do Redux store
├── data/
│   └── plants.ts          # Dados das plantas
└── App.tsx                # Componente principal com rotas
```

## 🌱 Plantas Disponíveis

### Folhagem
- **Monstera Deliciosa** - R$ 45,99
- **Ficus Lyrata** - R$ 65,99

### Suculentas
- **Suculenta Echeveria** - R$ 12,99
- **Cacto Saguaro** - R$ 28,99

### Floridas
- **Orquídea Phalaenopsis** - R$ 89,99
- **Antúrio Vermelho** - R$ 35,99

## 🚀 Como Executar

1. **Instalar dependências:**
```bash
npm install
```

2. **Executar em modo desenvolvimento:**
```bash
npm run dev
```

3. **Acessar no navegador:**
```
http://localhost:5173
```

## ✨ Funcionalidades do Redux

O carrinho de compras utiliza Redux Toolkit com as seguintes funcionalidades:

- **Estado persistente** durante a navegação
- **Contador dinâmico** no header
- **Cálculos automáticos** de totais
- **Prevenção de duplicatas** (botão desabilitado)
- **Gerenciamento de quantidade** com validações

## 📱 Design Responsivo

- **Mobile-first** approach
- **Breakpoints** otimizados para tablets e desktop
- **Navegação adaptativa** para dispositivos móveis
- **Cards flexíveis** que se ajustam ao tamanho da tela

## 🎨 Paleta de Cores

- **Verde principal**: #4CAF50 (tema plantas)
- **Verde escuro**: #2E7D32 (textos e títulos)
- **Laranja**: #FF9800 (categoria Suculentas)
- **Rosa**: #E91E63 (categoria Floridas)
- **Backgrounds**: Gradientes sutis para modernidade

---

**Desenvolvido com ❤️ para amantes de plantas! 🌿**
