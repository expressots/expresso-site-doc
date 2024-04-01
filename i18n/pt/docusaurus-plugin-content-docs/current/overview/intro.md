---
sidebar_position: 0
---

# Introdução

O ExpressoTS oferece uma camada aprimorada sobre o **[Express.js](https://expressjs.com/)**, enriquecendo o desenvolvimento de aplicações TypeScript do lado do servidor. Ele combina a robustez do Express.js com as funcionalidades avançadas do TypeScript, facilitando a criação de aplicações escaláveis, mantíveis e legíveis.

## Filosofia

Projetado para eficiência, o ExpressoTS simplifica o desenvolvimento do lado do servidor. Ele reduz o código repetitivo (boilerplate), priorizando a clareza e a estrutura do código. A flexibilidade do framework, através de um abrangente **[Sistema de Injeção de Dependência](./di.md)**, facilita a integração de funcionalidades personalizadas com escopos predefinidos (Transient, Scoped, Singleton), promovendo um design modular e desacoplado. Seja para uma API simples ou um sistema empresarial complexo, o ExpressoTS acelera o desenvolvimento, garantindo a entrega de aplicações de alta qualidade dentro do prazo e do orçamento.

## Configuração

### Instalação

Instale o CLI do ExpressoTS globalmente:

```bash
npm i -g @expressots/cli
```

### Inicialização do projeto

Crie um novo projeto usando o CLI:

```bash
expressots new <nome-do-projeto>
```

Para uma configuração rápida, especifique o gerenciador de pacotes e o template do projeto diretamente:

```bash
expressots new <nome-do-projeto> -t <template> -p <gerenciador-de-pacotes>
```

## Templates de projeto

O ExpressoTS oferece dois templates de projeto iniciais: `opinionated` e `non-opinionated`.

-   `non-opinionated`: Oferece flexibilidade estrutural.
-   `opinionated`: Fornece uma estrutura de projeto abrangente com esquemas de scaffolding predefinidos.

## Fluxo de Trabalho de Desenvolvimento

### Acessando seu projeto

```bash
cd <seu-projeto> 
```

### Executando em modo de desenvolvimento

```bash
npm run dev
```

### Gerando compilação de produção

```bash
npm run build
```

### Executando em modo de produção

```bash
npm run prod
```

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas