---
sidebar_position: 2
---

# Gerar recursos

Para proporcionar uma melhor experiência de desenvolvedor, a CLI do ExpressoTS fornece um conjunto de comandos para ajudar a criar os recursos da aplicação, como casos de uso, controladores, DTOs, provedores e serviços.

Este comando permite que os desenvolvedores estejam à frente da curva, gerando o código boilerplate para a aplicação, para que possam se concentrar na lógica de negócios.

## Comandos

O comando para gerar recursos podem ser expressados de duas formas:

```bash
expressots generate <recurso> <estrutura>
```

Ou em sua forma curta:

```bash
expressots g <recurso> <estrutura>
```

### Estrutura de comando

Nós fornecemos duas estruturas diferentes para estruturar os recursos:

-   **[entidade-ação]**: `expressots generate service user-create`
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
| -----------| --- | --------------- | -------------------------------------------------------------------------------------- |
| useCase | u | expressots g u user/find   | Caso de uso para ser criado na pasta `useCases` com esta estrutura de pasta: user/find |
| controller | c | expressots g c user/find   | Controlador para ser criado na pasta `useCases` dentro de user/find                    |
| dto | d | expressots g d user/find   | DTO a ser criado na pasta `useCases` dentro de user/find                               |
| provider | p | expressots g p email/email | Provedor a ser criado na pasta `providers` dentro de user/find                         |
| service | s | expressots g s user/find   | Serviço cria caso de uso, controladora e dto e os adiciona na pasta user/find          |
| entity | e | expressots g e user        | Entidade a ser criada na pasta `entities` com esta estrutura de pasta: user            |
| middleware | mi | expressots g m auth        | Middleware a ser criado na pasta `middlewares` com esta estrutura de pasta: auth       |
| module	| mo	| expressots g mo user	| Módulo a ser criado na pasta onde `controllers` e `usecases` estão localizados |

Todos os recursos podem ser criados usando a estrutura `pasta/subpasta/recurso.`

## Gerando recursos com hífen nos nomes

Para serviços, você pode aproveitar para criar o caso de uso, controlador e DTO de uma vez usando a estrutura `entidade_acao ` ou `entidade-acao `. Exemplo: `expressots g s user-create`.

:::info
O arquivo de configuração `expressots.config.ts`, localizado na pasta raiz do projeto, determina onde todos os recursos serão criados.
:::

## ExpressoTS arquivo de configuração

O arquivo de configuração está localizado na pasta raiz do projeto e é chamado de `expressots.config.ts`. Este arquivo é usado para configurar o CLI e o projeto.

Aqui está o arquivo de configuração atual com todas as opções disponíveis:

```typescript
import { ExpressoConfig, Pattern } from "@expressots/core";

const config: ExpressoConfig = {
    sourceRoot: "src",
    scaffoldPattern: Pattern.KEBAB_CASE,
    opinionated: true,
    scaffoldSchematics: {
        entity: "entity",
        provider: "provider",
        module: "module",
        controller: "controller",
        dto: "dto",
        middleware: "middleware",
        usecase: "useCases",
    },
};

export default config;
```

-   **sourceRoot**: a pasta raiz que será usada pelo CLI para criar os recursos. Padrão: `src`
-   **scaffoldPattern**: o padrão que será usado para criar os recursos. Padrão: `Pattern.KEBAB_CASE`. Exemplo: `user-create`
-   **opinionated**: se for verdadeiro, o CLI criará os recursos usando a estrutura de pasta com opinião.
-   **scaffoldSchematics**: os nomes de convenção de pastas para cada recurso. Padrão: `useCases`, `entities`, `providers`, `middlewares`, `controllers`, `dtos`

## Recomendações

Tente usar o máximo de formas diferentes de criar recursos possível. Isso ajudará você a entender como o CLI funciona e como usá-lo a seu favor. Também nos ajuda a melhorar o CLI para torná-lo mais robusto.

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
