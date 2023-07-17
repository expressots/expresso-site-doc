---
sidebar_position: 1
---

# Validator de ambiente

O provedor de validação de ambiente é um provedor que o ExpressoTS oferece por padrão. Ele é usado para validar a existência do arquivo `.env` e seu conteúdo.
Ele ajuda o desenvolvedor a evitar erros em tempo de execução causados por variáveis de ambiente ausentes.

:::tip
Ele está incluso apenas no modelo opinativo ou quando você cria uma classe que estende a classe `Application`.
:::

Você pode encontrá-lo na pasta `src/providers/application` no modelo opinativo.

O `application.provider` é o provedor principal do aplicativo responsável por controlar o  **[Application Lifecycle](../overview/application.md#application-lifecycle-hooks)**.

Dentro da classe Application você pode encontrar três métodos que são chamados na seguinte ordem:

- `configureServices()` : Configura serviços que devem ser inicializados antes do início do servidor.
- `postServerInitialization()` : Configura serviços que devem ser executados após o início do servidor.
- `serverShutdown()` : Realiza ações ou limpezas após o desligamento do servidor.

O provedor de validação de ambiente é chamado no método `configureServices()`, prevenindo que o aplicativo inicie se o arquivo `.env` estiver faltando ou se tiver variáveis de ambiente ausentes.

```typescript
protected configureServices(): void {
    Environments.checkAll();
}
```

O provedor de validação de ambiente também tem um método chamado `get()` que retorna o valor de uma variável de ambiente. Ele é usado para obter um valor específico de variável de ambiente passando seu nome como parâmetro.

```typescript
Environments.get("PORT");
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