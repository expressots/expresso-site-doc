---
sidebar_position: 18
---

# ExpressoTS Arquivo de Configuração

O arquivo de configuração do ExpressoTS está localizado na pasta raiz do projeto e é chamado de `expressots.config.ts`. Este arquivo é usado para configurar o CLI e o projeto.

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

-   **opinionated**: se verdadeiro, o CLI criará os recursos usando a estrutura de pastas opinativa

-   **scaffoldSchematics**: os nomes de convenção de pasta para cada recurso. Padrão: `useCases`, `entities`, `providers`, `middlewares`, `controllers`, `dtos`. Com esquemas de montagem, você pode personalizar os nomes de pasta e recursos.

:::caution
Os esquemas de montagem são projetados apenas para o modelo não opinativo. O modelo opinativo tem uma estrutura predefinida.
:::

## Recomendações

Tente usar o máximo de formas diferentes de criar recursos quanto possível. Isso ajudará você a entender como o CLI funciona e como usá-lo a seu favor. Também nos ajuda a melhorar o CLI para torná-lo mais robusto.

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
