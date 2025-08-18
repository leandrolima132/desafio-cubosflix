# 🎬 Cubos Movies — Desafio Frontend

## 📌 Objetivo

Desenvolver um aplicativo web responsivo que consome a [API do TMDB](https://developer.themoviedb.org/docs), permitindo aos usuários pesquisar por filmes e visualizar detalhes completos de cada título. A proposta é entregar uma experiência funcional, intuitiva e visualmente alinhada ao design fornecido.

---

## 🖼️ Design

O layout base foi disponibilizado via Figma, com referências para larguras de 1366px e 414px. Para larguras intermediárias ou maiores, foi adotada uma abordagem responsiva baseada em **flexbox** e **grid**, garantindo fluidez e consistência visual.

### 🎨 Cores e Temas

Utilizamos o [Radix Colors](https://www.radix-ui.com/colors) como sistema de cores, com foco em acessibilidade e flexibilidade. O tema principal é **escuro**, mas o app oferece alternância para o **modo claro** via botão no canto superior direito.

> Obs: O uso do Radix Colors é independente da biblioteca de componentes Radix. Os componentes foram desenvolvidos com liberdade técnica.

---

## 🔍 Funcionalidades

### 🏠 Página Inicial (Pesquisa de Filmes)

- Exibe uma lista paginada de filmes (10 por página), mesmo sem pesquisa ativa.
- Campo de busca com atualização dinâmica dos resultados.
- Área de filtros personalizável, com inputs visuais alinhados ao design.
- Navegação para a página de detalhes ao clicar em um filme.

### 🎛️ Filtros

- Localizados abaixo do campo de busca.
- Implementados com base nas possibilidades da API TMDB.
- Permitem refinar resultados por critérios como gênero, idioma, ano, etc.

### 📄 Página de Detalhes do Filme

- Exibe informações como:
  - Título e título original
  - Data de lançamento
  - Sinopse
  - Orçamento, receita e lucro
  - Popularidade, votos e nota média
  - Status do filme (traduzido para português)
- Trailer oficial embutido (quando disponível)

---

## 🧰 Stack Utilizada

- **React** com Vite
- **TypeScript**
- **Tailwind CSS** para estilização
- **React Query** para gerenciamento de dados
- **React Router** para navegação
- **Axios** para requisições HTTP
- **Radix Colors** para sistema de cores

> A stack foi escolhida por sua performance, modularidade e facilidade de manutenção.

---

## 🧪 Critérios de Avaliação

- Fidelidade ao design proposto
- Funcionalidade completa e fluida
- Organização e legibilidade do código
- Boas práticas de acessibilidade e responsividade
- Clareza nas decisões técnicas

---

## 📦 Assets

Na pasta `assets/` do projeto, você encontrará:

- `logo.svg` — logotipo da Cubos
- `background.jpg` — imagem de fundo usada no design

---

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js 18+
- Gerenciador de pacotes (npm ou yarn)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cubos-movies.git
cd cubos-movies

# Instale as dependências
npm install
```
