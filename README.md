# Rick and Morty - Personagens

Aplicação frontend desenvolvida como desafio para a **Fábrica de Software 2026.1**, usando a [Rick and Morty API](https://rickandmortyapi.com/) para exibir, buscar e favoritar personagens da série.

## Acesse o projeto

[ws-frontend-fabrica26-1-phi.vercel.app](https://ws-frontend-fabrica26-1-phi.vercel.app)

## Tecnologias usadas

- React + Vite
- TypeScript
- Tailwind CSS
- Shadcn/ui
- React Router
- Lucide Icons

## Funcionalidades

**Página Inicial**
- Lista paginada de personagens
- Busca por nome em tempo real
- Alternância entre visualização em Grade e Lista
- Favoritar/desfavoritar personagens

**Página de Favoritos**
- Lista dos personagens favoritados

**Página de Detalhes**
- Nome, ID e imagem do personagem
- Status, espécie e gênero
- Planeta de origem e localização atual
- Quantidade de episódios em que apareceu
- Opção de favoritar direto na página

## Rotas

- `/` → Página inicial
- `/favoritos` → Favoritos
- `/detalhes/:id` → Detalhes do personagem

## Como rodar localmente
```bash
git clone https://github.com/VanessaSLino/wsFrontend-Fabrica26.1.git
cd wsFrontend-Fabrica26.1
npm install
npm run dev
```

Acesse em http://localhost:8080

## 👩‍💻 Autora

Desenvolvido por **Vanessa Lino** — [GitHub](https://github.com/VanessaSLino/)