![Home](/public/assets/home-readme.png)
![Movie Details](/public/assets/movie-details-readme.png)

# 🎬 CubosFlix

CubosFlix é um aplicativo web responsivo que consome a API do [TMDB (The Movie Database)](https://www.themoviedb.org/documentation/api), permitindo aos usuários pesquisar por filmes e visualizar detalhes completos de cada título. O projeto foi desenvolvido como parte de um desafio técnico, com foco em performance, acessibilidade e fidelidade visual ao design proposto.

---

## 📌 Objetivo

Desenvolver uma aplicação web funcional e intuitiva que:

- Consome dados da API TMDB
- Permite pesquisa e filtragem de filmes
- Exibe detalhes completos de cada filme
- Oferece alternância entre temas claro e escuro
- Segue o design proposto no Figma com responsividade

---

## 🖌️ Design e Responsividade

O layout foi baseado em um design Figma com larguras específicas (1366px e 414px). Para larguras intermediárias e maiores, foi adotada uma abordagem **mobile-first com breakpoints personalizados**, garantindo fluidez e consistência visual em qualquer dispositivo.

### 💡 Melhorias implementadas:

- Comportamento adaptativo para larguras não especificadas
- Feedback visual em interações (hover, focus, loading)
- Animações sutis para transições de tema e navegação

---

## 🎨 Cores e Temas

Utilizamos o [Radix Colors](https://www.radix-ui.com/colors) como sistema de cores, garantindo:

- Acessibilidade e contraste adequado
- Facilidade na criação de temas claro/escuro
- Integração via CSS e JavaScript

O tema padrão é **escuro**, com opção de alternância no canto superior direito da interface.

---

## 🔍 Funcionalidades

### Página de Pesquisa (Home)

- Exibe lista de filmes mesmo sem pesquisa
- Campo de busca
- Paginação de 20 itens por página
- Filtros dinâmicos baseados na API TMDB (ex: gênero e idioma)

### Página de Detalhes

- Título e título original
- Data de lançamento
- Descrição/sinopse
- Orçamento e receita
- Imagem de capa e fundo
- Informações adicionais como nota e popularidade

---

## 🧰 Stack Tecnológica

| Tecnologia        | Finalidade                         |
| ----------------- | ---------------------------------- |
| React 19          | UI principal                       |
| Vite              | Build e dev server                 |
| TypeScript        | Tipagem estática                   |
| TailwindCSS       | Estilização responsiva             |
| Radix Colors      | Sistema de cores                   |
| React Query       | Gerenciamento de dados assíncronos |
| Axios             | Requisições HTTP                   |
| React Router DOM  | Navegação entre páginas            |
| ESLint + Prettier | Padronização e linting             |

---

## 📁 Estrutura do Projeto

![Estrutura do Projeto](/public/assets/project-structure.png)

---

## 🛠️ Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/leandrolima132/desafio-cubosflix.git
cd cubosflix

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

## 🔐 Configuração de Ambiente

Para que o projeto funcione corretamente, é necessário configurar as variáveis de ambiente com as credenciais da API do TMDB.

#✅ Passos:

- Crie uma conta gratuita no TMDB. https://developer.themoviedb.org/docs/getting-started

- Acesse API Settings no seu perfil.

- Gere um token de acesso (v4 auth).

- Na raiz do projeto, crie um arquivo chamado .env com o seguinte conteúdo:

```bash
VITE_TMDB_API_TOKEN=SEU_TOKEN_AQUI
VITE_TMDB_API_URL=https://api.themoviedb.org/3
```

⚠️ Importante: Nunca compartilhe seu token em repositórios públicos. Use o .env para manter suas credenciais seguras.
