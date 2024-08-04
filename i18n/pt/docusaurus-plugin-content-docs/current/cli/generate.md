---
sidebar_position: 2
---

# Gerar recursos

Para oferecer uma melhor experiência ao desenvolvedor, o CLI do ExpressoTS fornece um conjunto de comandos que ajudam a criar os recursos da aplicação, como casos de uso, controladores, DTOs, provedores e serviços. Isso permite que os desenvolvedores se concentrem na lógica de negócios, gerando automaticamente o código boilerplate.

## Comandos

O comando para gerar recursos podem ser expressados de duas formas:

```bash
expressots generate <recurso> <estrutura> [opções]
```

Ou em sua forma curta:

```bash
expressots g <recurso> <estrutura> [opções]
```

### Estrutura de comando

Nós fornecemos duas estruturas diferentes para estruturar os recursos:

-   **[abreviada]**: `expressots generate service user-create`
    Isso criará esta estrutura de pastas: `/user/create` e o arquivo: `user-create.[recurso].ts`

-   **[pasta/subpasta/recurso]**: `expressots generate service user/create`
    Isso criará esta estrutura de pastas: `/user/create` e o arquivo: `create.[recurso].ts`

    Se você adicionar `/` no final da estrutura, o CLI criará o recurso dentro da pasta. Exemplo: `expressots generate service user/create/`
    Estrutura: `user/create/` e o arquivo: `create.[recurso].ts`

### Pasta raiz do recurso

-   A pasta raiz de todos os recursos é a `src`. Isso pode ser alterado no arquivo `expressots.config.ts`.
-   No modo opinativo, a pasta raiz é o `src` e os recursos montados com `service, usecase, dto, controller` são criados dentro do `useCases`.
-   As entidades são criadas dentro do `entities`, e provedores dentro do `providers`.

## Tipos de recursos

Recursos disponíveis atualmente:

| Forma longa | Abreviação | Comando                    | Resultado esperado                                                                     |
| ----------- | ---------- | -------------------------- | -------------------------------------------------------------------------------------- |
| useCase     | u          | expressots g u user/find   | Caso de uso para ser criado na pasta `useCases` com esta estrutura de pasta: user/find |
| controller  | c          | expressots g c user/find   | Controlador para ser criado na pasta `useCases` dentro de user/find                    |
| dto         | d          | expressots g d user/find   | DTO a ser criado na pasta `useCases` dentro de user/find                               |
| provider    | p          | expressots g p email/email | Provedor a ser criado na pasta `providers` dentro de user/find                         |
| service     | s          | expressots g s user/find   | Serviço cria caso de uso, controladora e dto e os adiciona na pasta user/find          |
| entity      | e          | expressots g e user        | Entidade a ser criada na pasta `entities` com esta estrutura de pasta: user            |
| middleware  | mi         | expressots g m auth        | Middleware a ser criado na pasta `middlewares` com esta estrutura de pasta: auth       |
| module      | mo         | expressots g mo user       | Módulo a ser criado na pasta onde `controllers` e `usecases` estão localizados         |

Todos os recursos podem ser criados usando a estrutura `pasta/subpasta/recurso.`

## Gerando recursos com Operação Abreviada

Para serviços, você pode aproveitar para criar o caso de uso, controlador e DTO de uma vez usando a estrutura `entidade_acao ` ou `entidade-acao `. Exemplo:

```bash
expressots g s user-create
```

:::info
O arquivo de configuração `expressots.config.ts`, localizado na pasta raiz do projeto, determina onde todos os recursos serão criados. Também é possível configurar o padrão de nomenclatura dos recursos e se o CLI deve seguir uma estrutura de pasta com opinião.
:::

Leia mais sobre a [configuração do projeto](/i18n/pt/docusaurus-plugin-content-docs/current/overview/expressots-config.md).

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
