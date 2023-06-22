---
sidebar_position: 1
---

# Visão geral

O CLI do ExpressoTS é uma ferramenta de interface de linha de comando que ajuda a `criar` projetos ExpressoTS e `scaffolds` de recursos da aplicação, como casos de uso, controladores, DTOs, provedores e serviços.

:::info
Neste tutorial, usamos o gerenciador de pacotes `npm`, mas você pode usar o seu gerenciador de pacotes favorito, como `yarn` ou `pnpm`.
:::

## Instalação

Primeiro instalamos o CLI globalmente usando o comando abaixo:

```bash
npm install -g @expressots/cli
```

## Uso básico

```bash
expressots <command> [options]
```

### Ajuda

Para verificar os comandos e opções disponíveis:

```bash
expressots --help
```

### Informação

Informações dos provedores sobre seu Sistema Operacional, Projeto e versão CLI:

```bash
expressots info
```

## Criando um projeto ExpressoTS

Há duas opções para criar um novo projeto, interativamente ou silenciosamente (passando as opções como argumentos).
Aqui está a sintaxe completa do comando:

```bash
expressots new <nome-do-projeto> -p <gerenciador-de-pacote> -t <template> -d <diretório>
```

### Criando projeto interativamente

```bash
expressots new <nome-do-projeto>
```

### Criando projeto silenciosamente

```bash
expressots new <nome-do-projeto> -p <gerenciador-de-pacote> -t <template> -d <diretório>
```

- **gerenciador-de-pacote**: `npm`, `yarn` or `pnpm`
- **template**: `opinionated` or `non-opinionated`
- **directory**: `./meu-projeto`

A flag `-d` é opcional e serve para especificar o diretório onde o projeto será criado. Se não for especificado, o projeto será criado no diretório atual.

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas