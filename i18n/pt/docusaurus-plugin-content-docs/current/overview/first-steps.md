---
sidebar_position: 1
---

# Primeiros Passos

Comece sua jornada com o ExpressoTS, um framework TypeScript para construir aplicações Node.js escaláveis e mantíveis. Esta seção orienta você através dos conceitos fundamentais, configuração e arquitetura do ExpressoTS.

## Por que TypeScript?

**[TypeScript](https://www.typescriptlang.org/)** é um elemento chave no desenvolvimento de aplicações robustas do lado do servidor devido à sua tipagem forte, que melhora significativamente a qualidade do código, escalabilidade, produtividade e colaboração. A tipagem forte não apenas ajuda a capturar erros precocemente, mas também aprimora a documentação e manutenção do código, fazendo do TypeScript uma escolha excelente para aplicações de grande escala.

## Pre-requisito

Por favor, verifique se o [Node.js](https://nodejs.org) `version >=18.10.0` está instalado no seu sistema operacional.

## Setup

Instale o **[CLI do ExpressoTS](../cli/overview.md)** globalmente usando o NPM para começar a configuração do seu projeto:

Configurar um novo projeto ExpressoTS é bastante simples com o CLI do ExpressoTS. Primeiro, instale o CLI globalmente com o `NPM`:

```bash
npm i -g @expressots/cli
```
Crie um novo projeto executando:

```bash
expressots new <nome-do-projeto>
```

Para uma estrutura de projeto específica e gerenciador de pacotes, especifique diretamente o template e o gerenciador de pacotes:

```bash
expressots new <nome-do-projeto> -p <gerenciador-de-pacotes> -t <nome-do-template>
```

## Templates de projeto

O ExpressoTS oferece dois modelos de projeto para atender a diferentes necessidades de desenvolvimento:

-   Não opinativo (Non-opinionated): Oferece flexibilidade na estruturação do projeto com uma configuração mínima.
-   Opinativo (Opinionated): Vem pré-configurado para projetos complexos, reforçando uma estrutura de projeto específica e um padrão de scaffolding.

### Estrutura de projeto não opinativa

```tree
project-name/
├── src/
│   ├── app.container.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.provider.ts
│   ├── main.ts
├── test/
│   ├── app.controller.spec.ts
```

| Nome do Arquivo          | Descrição                                                               |
| ------------------------ | ----------------------------------------------------------------------- |
| `app.container.ts`       | Contêiner de injeção de dependências. Organiza os módulos da aplicação. |
| `app.controller.ts`      | Um controlador básico com uma única rota.                               |
| `app.module.ts`          | Módulo raiz da aplicação.                                               |
| `app.provider.ts`        | Gerenciador do ciclo de vida da aplicação.                              |
| `main.ts`                | O ponto de entrada principal de uma aplicação ExpressoTS.               |
| `app.controller.spec.ts` | Teste unitário para o app.controller.                                   |

### Estrutura de projeto opinativo


```tree
project-name/
├── src/
│   ├── providers/
│   │   └── app/
│   │       └── app.provider.ts
│   ├── useCases/
│   │   └── app/
│   │       └── app.controller.ts
│   │       └── app.module.ts
│   │       └── app.usecase.ts
│   ├── app.container.ts
│   ├── env.ts
│   ├── main.ts
├── test/
│   ├── app.usecase.spec.ts
```

| Nome do Arquivo       | Descrição                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `providers/`          | Esta pasta contém a camada responsável por fornecer recursos externos à aplicação, também conhecidos como adaptadores. |
| `app/app.provider.ts` | Gerenciador do ciclo de vida da aplicação.                                                                             |
| `useCases/`           | A pasta de casos de uso contém a implementação dos casos de uso de operações que podem ser realizadas na aplicação.    |
| `app.container.ts`    | Contêiner de injeção de dependências. Organiza os módulos da aplicação.                                                |
| `env.ts`              | Este é um recurso de utilidade que mapeia variáveis .env.                                                              |
| `main.ts`             | O ponto de entrada principal de uma aplicação ExpressoTS.                                                              |
| `app.usecase.spec.ts` | Um teste unitário básico para o app.usecase.                                                                           |

Essa estrutura fornece um framework robusto para o desenvolvimento de endpoints de API, mostrando as capacidades de organização e camadas do ExpressoTS.

## Inicialização e configuração da aplicação

Inicialize sua aplicação com o método `AppFactory.create()`, passando o contêiner e uma classe App para gerenciamento do ciclo de vida. Esta etapa é crucial para configurar a injeção de dependência e a configuração de middleware da sua aplicação.

Executando sua aplicação
Com sua aplicação configurada, inicie seu servidor de desenvolvimento ou construa sua aplicação com os seguintes comandos:

-   Modo de Desenvolvimento: `npm run dev`
-   Construção para Produção: `npm run build`
-   Modo de Produção: `npm run prod`

:::info
Uma vez que a aplicação esteja em funcionamento, você pode acessá-la navegando para `http://localhost:3000/`.
:::

## Flexibilidade do framework

ExpressoTS é um framework versátil que não está vinculado a nenhuma plataforma ou tecnologia específica. Utilizando bibliotecas populares do Node.js, como InversifyJS e Express.js, ele foi projetado para ser leve, modular, personalizável e fácil de usar. Os desenvolvedores podem expandir as capacidades do framework criando novos provedores que podem ser incorporados às suas aplicações.

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
