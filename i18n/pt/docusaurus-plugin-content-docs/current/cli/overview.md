---
sidebar_position: 1
---

# Visão geral

O CLI do ExpressoTS é uma ferramenta de interface de linha de comando que ajuda você a `criar` projetos ExpressoTS e `scaffold` recursos do ExpressoTS.

:::info
Usamos o gerenciador de pacotes `npm` neste tutorial para simplicidade. No entanto, você também pode usar `yarn` ou `pnpm`.
:::

## Instalação

Primeiro instalamos o CLI globalmente usando o comando abaixo:

```bash
npm install -g @expressots/cli
```

## Comandos disponíveis

| Name        | Alias  | Description                                        |
| ----------- | ------ | -------------------------------------------------- |
| new project | new    | Cria um novo projeto                               |
| info        | i      | Informações do projeto                             |
| resources   | r      | Exibe comandos e recursos do CLI                   |
| help        | h      | Mostra ajuda do comando                            |
| service     | g s    | Gera um serviço [controller, usecase, dto, module] |
| controller  | g c    | Gera um controlador                                |
| usecase     | g u    | Gera um caso de uso                                |
| dto         | g d    | Gera um DTO                                        |
| entity      | g e    | Gera uma entidade                                  |
| provider    | g p    | Gera um provedor interno                           |
| provider    | add    | Adiciona provedor externo ao projeto               |
| provider    | create | Cria provedor externo                              |
| module      | g mo   | Gera um módulo                                     |
| middleware  | g mi   | Gera um middleware                                 |

## Exemplos de uso

O CLI tem a seguinte sintaxe:

```bash
expressots <command> [options]
```

### Ajuda

Para verificar os comandos e opções disponíveis:

```bash
expressots help
```

### Informação

Informações dos provedores sobre seu Sistema Operacional, Projeto e versão CLI:

```bash
expressots info
```

### Lista de recursos

Lista todos os recursos disponíveis para scaffolding:

```bash
expressots resources (Alias: r)
```

### Criando um projeto ExpressoTS

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

-   **gerenciador-de-pacote**: `npm`, `yarn` or `pnpm`
-   **template**: `opinionated` or `non-opinionated`
-   **directory**: `./meu-projeto`

A flag `-d` é opcional e serve para especificar o diretório onde o projeto será criado. Se não for especificado, o projeto será criado no diretório atual.

### Adicionando provedor externo

Adiciona um provedor externo ao projeto:

```bash
expressots add <nome-do-provedor>
```

### Criando provedor externo

Crie um provedor externo. Para mais informações sobre provedores, consulte a seção [Provedores](/i18n/pt/docusaurus-plugin-content-docs/current/overview/providers.md#criando-e-registrando-um-provedor-externo).

```bash
expressots create <nome-do-provedor>
```

### Gerando um serviço

A CLI fornece comandos para criar serviços, controladores, casos de uso e DTOs, Modulos e Middlewares. Aqui está a sintaxe completa:

```bash
expressots generate <recurso> <estrutura> [opções]
```

Os recursos são criados no diretório `src` por padrão. Eles também podem ser gerados de duas maneiras diferentes: `passando o caminho` ou usando a `operação abreviada`.

:::caution
As operações de geração de recursos produzem resultados diferentes com base no template de projeto utilizado. O template `opinionado` oferece uma estrutura de projeto mais organizada, enquanto o template `não-opinionado` proporciona uma estrutura de projeto mais flexível.
:::

### Gerando serviço no NÃO-OPINIONADO

#### Passando o caminho

```bash
expressots g c usuario/cadastrar
```

O comando acima cria a seguinte estrutura de pastas: `/usuario/cadastrar` e o arquivo: `cadastrar.[recurso].ts`

```bash
src
└── usuario
    └── cadastrar.controller.ts
```

#### Operação abreviada

```bash
expressots g s usuario-cadastrar
```

O comando acima cria a seguinte estrutura de pastas: `/usuario/cadastrar` e os arquivos: `cadastrar.[recurso].ts`

```bash
src
└── usuario
    └── cadastrar
        ├── cadastrar.controller.ts
        ├── cadastrar.usecase.ts
        └── cadastrar.dto.ts
```

### Gerando serviço no OPINIONADO

No template `opinionado`, os recursos são criados seguindo uma estrutura predefinida.

-   [@providers](/i18n/pt/docusaurus-plugin-content-docs/current/overview/providers.md)
-   [@entities](/i18n/pt/docusaurus-plugin-content-docs/current/overview/entities.md)
-   [@useCases](/i18n/pt/docusaurus-plugin-content-docs/current/overview/usecase.md)
-   [@repositories](/i18n/pt/docusaurus-plugin-content-docs/current/overview/repositories.md)

#### Passando o caminho

```bash
expressots g c usuario/cadastrar
```

O comando acima cria a seguinte estrutura de pastas: `/usuario/cadastrar` e o arquivo: `cadastrar.[recurso].ts`

```bash
src
└── useCases
    └── usuario
        └── cadastrar.controller.ts
```

:::info
DTOs, casos de uso, controladores e módulos são criados no diretório `useCases`.
:::

#### Operação abreviada

```bash
expressots g s usuario-cadastrar
```

O comando acima cria a seguinte estrutura de pastas: `/usuario/cadastrar` e os arquivos: `cadastrar.[recurso].ts`

```bash
src
└── useCases
    └── usuario
        └── cadastrar
            ├── cadastrar.controller.ts
            ├── cadastrar.usecase.ts
            └── cadastrar.dto.ts
```

:::info
Usar a operação abreviada no template opinionado oferece benefícios significativos. Ela cria um projeto bem estruturado, que é mais fácil de navegar e entender. Quando você gera o projeto com a operação abreviada, a CLI coloca automaticamente os recursos nos diretórios corretos, adiciona os controladores aos seus respectivos módulos e integra o módulo ao container.
:::

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas

```

```
