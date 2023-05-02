---
sidebar_position: 2
---

# Gerar recursos

Para proporcionar uma melhor experiência de desenvolvedor, a CLI do Expresso TS fornece um conjunto de comandos para ajudar a criar os recursos da aplicação, como casos de uso, controladores, DTOs, provedores e serviços.

Este comando permite que os desenvolvedores estejam à frente da curva, gerando o código boilerplate para a aplicação, para que possam se concentrar na lógica de negócios.

## Comandos

O comando para gerar recursos podem ser expressados de duas formas:

```bash
expressots generate <resource> <structure>
```

Ou em sua forma curta:

```bash
expressots g <resource> <structure>
```

## Tipos de recursos

Recursos atualmente disponíveis para serem gerados:

| Forma longa | curta  |
| ----------- | ------ |
| usecase     | u      |
| controller  | c      |
| dto         | d      |
| provider    | p      |
| service     | s      |

## Exemplo de uso

| Comando                       | Resultado esperado  
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| expressots g u user/find      | Caso de uso para ser criado na pasta useCases com esta estrutura de pasta: user/find      |
| expressots g c user/find      | Controlador para ser criado na pasta useCases dentro de user/find                         |
| expressots g d user/find      | DTO a ser criado na pasta `useCases` dentro de user/find                                  |
| expressots g p email/email    | Provedor a ser criado na pasta `providers` dentro de user/find                            |
| expressots g s user/find      | Serviço cria caso de uso, controladora e dto e os adiciona na pasta user/find             |

Todos os recursos podem ser criados usando a estrutura `pasta/subpasta/recurso.`

Para serviços, você também pode aproveitar para criar o caso de uso, o controlador e o DTO de uma só vez usando a estrutura `entidade_ação` ou `entidade-ação`. Exemplo: `expressots g s user-create.`

:::caution
O que determina onde os recursos serão criados é o arquivo de configuração `expressots.config.ts`, localizado na pasta raiz do projeto.
:::

:::info
Todos os casos de uso, controladores e DTOs estão sendo criados dentro da pasta `useCases`. Isso não está definido em pedra e pode mudar em breve.
:::

## ExpressoTS arquivo de configuração

O arquivo de configuração está localizado na pasta raiz do projeto e é chamado de `expressots.config.ts`. Este arquivo é usado para configurar o CLI e o projeto.

Aqui está o arquivo de configuração atual com todas as opções disponíveis:

```typescript
import { ExpressoConfig, Pattern } from "@expressots/core";

const config: ExpressoConfig = {
    sourceRoot: "src",
    scaffoldPattern: Pattern.KEBAB_CASE,
    opinionated: false,
};

export default config;
```

- **sourceRoot**: a pasta raiz que será usada pelo CLI para criar os recursos. Padrão: `src`
- **scaffoldPattern**: o padrão que será usado para criar os recursos. Padrão: `Pattern.KEBAB_CASE`. Exemplo: `user-create`
- **opinionated**: se for verdadeiro, o CLI criará os recursos usando a estrutura de pasta com opinião.

## Recomendações

Tente utilizar o maior número possível de formas de criação de recursos disponíveis. Isso irá ajudá-lo a entender como a CLI funciona e como utilizá-la em seu benefício. Além disso, isso nos ajudará a melhorar a CLI e torná-la mais robusta.

---

## Apoie o projeto

Expresso TS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas