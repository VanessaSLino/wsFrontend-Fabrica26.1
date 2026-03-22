# Rick and Morty - Personagens

Frontend desenvolvido em **React + Vite + Tailwind**, criado como desafio para a **Fábrica de Software 2026.1**.

O projeto permite explorar, favoritar e visualizar informações detalhadas sobre os personagens da série Rick and Morty, utilizando a [Rick and Morty API](https://rickandmortyapi.com/).

## Funcionalidades

- **Página Inicial**
  - Lista de personagens paginada
  - Barra de busca para filtrar pelo nome em tempo real
  - Favoritar/desfavoritar personagens
  - Alternância entre visualização em Grade e Lista
  - Cada card é clicável e leva para a página de detalhes

- **Página de Favoritos**
  - Mostra apenas os personagens que foram favoritados

- **Página de Detalhes**
  - Exibe dados detalhados de um personagem selecionado:
    - Nome e ID
    - Imagem do personagem
    - Status (Vivo, Morto ou Desconhecido)
    - Espécie e Gênero
    - Planeta de origem
    - Localização atual
    - Quantidade de episódios em que apareceu
  - Botão para favoritar/desfavoritar diretamente na página

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)
- [Rick and Morty API](https://rickandmortyapi.com/)

## Estrutura de Páginas

- `/` → Página inicial (lista de personagens + busca + favoritar)
- `/favoritos` → Lista de personagens favoritados
- `/detalhes/:id` → Página de detalhes do personagem selecionado

## Deploy

Acesse a aplicação online:  
[Link do Vercel](https://seu-link.vercel.app)

## Como Rodar o Projeto Localmente

Pré-requisitos:
- Node.js 18+ e npm instalados

1. Clone o repositório:
```bash
git clone https://github.com/VanessaSLino/wsFrontend-Fabrica26.1.git
cd wsFrontend-Fabrica26.1
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie em modo desenvolvimento:
```bash
npm run dev
```

Acesse a aplicação em http://localhost:8080

## Autora

Desenvolvido por **Vanessa Lino**  
[GitHub](https://github.com/VanessaSLino/)