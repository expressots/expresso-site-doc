---
sidebar_position: 1
---

# Primeiros Passos

Nesta seção, você vai conhecer alguns dos conceitos fundamentais do ExpressoTS. Para se familiarizar com o framework e seus blocos de construção, vamos guiá-lo através do processo de criação de um projeto simples. Isso ajudará você a entender alguns dos conceitos iniciais do framework e começar a trabalhar com o ExpressoTS.

## ExpressoTS, A ideia 

Nós acreditamos no poder das linguagens fortemente tipadas, e o **[TypeScript](https://www.typescriptlang.org/)** é essencial quando se trata de estruturar ou construir aplicações em larga escala no **[NodeJS](https://nodejs.org/)**. No exemplo que demonstraremos, utilizaremos principalmente o TypeScript, e aqui estão os motivos pelos quais o TypeScript é benéfico para o seu projeto:

- Melhora na qualidade do código: A tipagem forte ajuda a capturar erros e bugs no momento da compilação, em vez de em tempo de execução, o que ajuda a melhorar a qualidade geral do código. Isso pode levar a menos falhas e problemas com o código em produção.

- Melhor escalabilidade: A tipagem forte pode ajudar a tornar o código mais escalável, permitindo refatoração e manutenção mais fácil. Isso ocorre porque a tipagem forte garante que as mudanças no código sejam consistentes e previsíveis, tornando mais fácil adicionar novos recursos ou modificar os existentes.

- Aumento de produtividade: A tipagem forte pode aumentar a produtividade do desenvolvedor, fornecendo uma melhor ferramenta e suporte do editor, como preenchimento automático de código, inferência de tipo e refatoração automática. Isso pode ajudar os desenvolvedores a escreverem código mais rápido e com menos erros.

- Melhora na colaboração: A tipagem forte pode tornar mais fácil para os desenvolvedores colaborarem, fornecendo uma compreensão compartilhada dos tipos e interfaces usados na base de código. Isso pode ajudar a reduzir mal-entendidos e inconsistências e tornar mais fácil para os desenvolvedores trabalharem juntos na mesma base de código.

- Melhoria na documentação: A tipagem forte pode ajudar a tornar o código mais auto-documentado, fornecendo uma descrição clara e concisa dos tipos e interfaces usados no código. Isso pode ajudar a reduzir a necessidade de extensos comentários e documentação, tornando o código mais fácil de entender e manter.

## Pre-requisito

Por favor, verifique se o [Node.js](https://nodejs.org) `version >=18.10.0` está instalado no seu sistema operacional.

## Setup

Configurar um novo projeto ExpressoTS é bastante simples com a **[ExpressoTS CLI](../cli/overview.md)**. Com o `NPM` instalar ExpressoTS CLI Globalmente executando o seguinte comando:

```bash
npm i -g @expressots/cli
```

Com a CLI `expressots`, você pode criar um novo projeto executando o seguinte comando:

```bash
expressots new <nome-do-projeto>
```

Ou adicionar o nome do modelo e o gerenciador de pacotes como argumentos:

```bash
expressots new <nome-do-projeto> -t <template> -p <gerenciado-de-pacotes>
```

:::tip
Expresso TS oferece duas opções de modelos de projetos:

- **opinativo**: O modelo opinativo é feito para projetos mais complexos, já que fornece uma estrutura de projeto mais robusta e uma arquitetura em camadas.
- **não-opinativo**: Quer ter a liberdade de construir e estruturar seu projeto como desejar? O modelo não-opinativo oferece uma estrutura simples, com apenas os arquivos necessários para começar.
:::

Depois de criar seu projeto, com o `nome-do-projeto` desejado e dependendo do tipo de projeto selecionado, seu projeto terá uma estrutura de pasta e arquivo diferente. Aqui estão as estruturas específicas de pasta e arquivo para cada tipo de projeto:

### Template não-opinativo

```tree
nome-do-projeto/
├── src/
│   ├── app-container.ts
│   ├── app-controller.ts
│   ├── app-module.ts
│   ├── app-usecase.ts
│   ├── main.ts
├── test/
│   ├── app.usecase.spec.ts
```

| Nome do Arquivo       | Descrição
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `app-container.ts`    | O container do Inversify Server é responsável por organizar todos os módulos da aplicação em uma unidade coesa.      |
| `app.controller.ts`   | Um controller básico com uma rota simples.                                                                           |
| `app.module.ts`       | Módulo da aplicação.                                                                                                 |
| `app.usecase.ts`      | Um caso de uso com único método, chamado `execute()`.                                                                |
| `main.ts`             | O ponto de partida de uma aplicação **ExpressoTS**.                                                                  |
| `app.usecase.spec.ts` | Exemplo de test unitário do **app.usecase**.                                                                         |

### Template opinativo

No modelo de projeto de opinião, fornecemos um exemplo CRUD completo para uma entidade de usuário, com todas as camadas e arquivos necessários para você começar.

```tree
nome-do-projeto/
├── src/
│   ├── entities/
│   │   └── base.entity.ts
│   │   └── user.entity.ts
│   ├── providers/
│   │   └── application/
│   │       └── application.provider.ts
│   │   └── bindingType/
│   │       └── singleton.provider.ts
│   │   └── db-in-memory/
│   │       └── db-in-memory.provider.ts
│   ├── repositories/
│   │   └── user/
│   │       └── user-repository.ts
│   │   └── base-repository.interface.ts
│   │   └── base-repository.ts
│   ├── useCases/
│   │   └── app/
│   │       └── app.controller.ts
│   │       └── app.module.ts
│   │   └── ping/
│   │       └── ping.controller.ts
│   │       └── ping.dto.ts
│   │       └── ping.module.ts
│   │       └── ping.usecase.ts
│   │   └── user/
│   │       └── create/
│   │           └── create-user.controller.ts
│   │           └── create-user.dto.ts
│   │           └── create-user.usecase.ts
│   │       └── findall/
│   │           └── findall-user.controller.ts
│   │           └── findall-user.dto.ts
│   │           └── findall-user.usecase.ts
│   │       └── user.module.ts
│   ├── app-container.ts
│   ├── env.ts
│   ├── main.ts
├── test/
│   ├── ping.usecase.spec.ts
```

| Nome do Arquivo       | Descrição
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `entities/`             | Esta pasta contém as definições de classe, ou modelos com seus atributos, propriedades e métodos.                         |
| `providers/`            | Esta pasta contém a camada responsável por fornecer recursos externos para a aplicação, também conhecida como adaptadores.|
| `repositories/`         | Pasta adicional contendo um exemplo de implementação do padrão de repositório, comunicação com a camada do banco de dados.|
| `useCases/`             | A pasta de casos de uso contém a implementação dos casos de uso das operações que podem ser realizadas na aplicação.      |
| `app.container.ts`      | O container do Inversify Server é responsável por organizar todos os módulos da aplicação em uma unidade coesa.           |
| `env.ts`               | Este é um recurso de utilidade que mapeia as variáveis .env.                                                              |
| `main.ts`               | O ponto de entrada principal de uma aplicação ExpressoTS.                                                                 |
| `ping.usecase.spec.ts`  | Um teste unitário básico para o ping.usecase.                                                                             |

Informações adicionais sobre **[Provedores](./providers.md)**, **[Casos de Uso](./usecase.md)** e o exemplo **[Main](./application.md)** fornecidos no projeto modelo Opinionated.

#### Provedores

Existe 3 provedores:

- **application**: Esse provedor permite estender a classe Application do @expressots/core, que fornece os **[Life Cycle Hooks](application.md#lifecycle-hooks)**.

- **bindingType/singleton**: Esse provedor permite ligar uma classe como um singleton. Usamos esse provedor para vincular a classe InMemoryDB como um singleton, para que possamos usar a mesma instância da classe InMemoryDB em toda a aplicação.

- **db-in-memory**: Esse é um provedor de banco de dados simples em memória que permite armazenar dados em memória. Usamos esse provedor nos casos de uso de usuário para armazenar e recuperar dados de usuário.

:::info
**bindingType and InMemoryDB** Os provedores são exemplos fornecidos para ajudá-lo a começar. Você pode removê-los se desejar.
:::

#### Caso de uso

Os casos de uso no modelo Opinativo são organizados em 3 módulos:

- AppModule, PingModule e UserModule, fornecendo alguns exemplos de utilização dos recursos do ExpressoTS. Para obter mais informações sobre os módulos, consulte a **[Seção de Módulos](./module.md)**.

Aqui estão os endpoints em cada módulo:

- **[AppModule]/app.controller**: retorna `Hello from Expresso TS App`
- **[UserModule]/user-create.controller**: cria um novo usuário no banco de dados na memória
- **[UserModule]/user-delete.controller**: excluir um usuário por `id` no banco de dados na memória
- **[UserModule]/user-find.controller**: retornar um usuário do banco de dados na memória
- **[UserModule]/user-findall.controller**: retorna todos os usuários do banco de dados na memória
- **[UserModule]/user-update.controller**: atualizar as informações de um usuário do banco de dados na memória

#### Main

O arquivo `main.ts` inclui uma função assíncrona que inicializa a aplicação ExpressoTS.

##### Opinativo em sua forma simples

```typescript
// Usando o projeto de início opinativo onde o App estende a classe Application do @expressots/core
async function bootstrap() {
  const app = App.create(container);
  app.listen(3000, ServerEnvironment.Production);
}
```

##### Opinativo usando .env

```typescript
// Usando o projeto inicial opinativo em que App estende a classe Application de @expressots/core
async function bootstrap() {
  const app = App.create(container);
  app.listen(3000, ServerEnvironment.Production, {
    appName: ENV.Application.APP_NAME,
    appVersion: ENV.Application.APP_VERSION,
  });
}

// Ou de .env
async function bootstrap() {
  const app = App.create(container);
  app.listen(
    ENV.Application.PORT,
    ServerEnvironment[ENV.Application.ENVIRONMENT],
    {
      appName: ENV.Application.APP_NAME,
      appVersion: ENV.Application.APP_VERSION,
    }
  );
}

bootstrap();
```

##### Não opinativo

```typescript
// Usando o projeto inicial não opinativo em que AppInstance é uma instância da classe Application de @expressots/core
async function bootstrap() {
  const app = AppInstance.create(container);
  app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

## Application ou AppInstance

Para inicializar um aplicativo ExpressoTS, existem duas maneiras:

- Usando o AppInstance: que é uma instância da classe Application que fornece os métodos `create()` e `listen()`.
- Estendendo a classe Application. Ao estender a classe Application, você pode tirar proveito de seus mecanismos integrados para controlar o **[ganchos do ciclo de vida do aplicativo](application.md#application-lifecycle-hooks)**, como injetar e executar serviços antes, depois e durante o desligamento do aplicativo.

Application Instance

```typescript
import { AppInstance, ServerEnvironment } from "@expressots/core";
import { container } from "./app-container";

export async function bootstrap() {
  const app = AppInstance.create(container);
  app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

Estendendo a classe Application. Dentro da pasta do provedor, crie uma pasta chamada `application` e crie um novo arquivo chamado `application.provider.ts` e adicione o seguinte código:

```typescript
import { Application, Environments, LogLevel, log } from "@expressots/core";
import { provide } from "inversify-binding-decorators";

@provide(App)
class App extends Application {
  protected configureServices(): void {
    Environments.checkAll();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected postServerInitialization(): void {}

  protected serverShutdown(): void {
    log(LogLevel.Info, "Server is shutting down", "logger-provider");
    super.serverShutdown();
  }
}

const appInstance = new App();

export { appInstance as App };
```

Application Bootstrap iniciado pela classe Application estendida

```typescript
import { App } from "@providers/application/application.provider";
import { container } from "app-container";
import { ServerEnvironment } from "@expressots/core";

async function bootstrap() {
  const app = App.create(container);
  app.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

## O Container

No ExpressoTS, criar um servidor de aplicativos para ouvir as solicitações HTTP de entrada não é suficiente. O framework exige a criação de um contêiner que organize todos os módulos de aplicativos em uma unidade coesa. Normalmente, esse contêiner é criado no arquivo app-container.ts. Leia mais sobre o `app-container` na seção **[App Container](app-container.md)**.

### A aplicação usa o Container

Após a criação do container no arquivo `app-container`, a aplicação pode ser criada passando o container como parâmetro para o método `AppInstance.create(container)` ou estendendo a classe Application.

### Injetando módulos no Container

Uma vez criado o container, módulos podem ser injetados na aplicação. Esses módulos são os blocos de construção de uma aplicação ExpressoTS e são responsáveis por organizar a lógica de negócio da aplicação em camadas, incluindo controladores e casos de uso.
Leia mais sobre os módulos na seção **[Módulos](module.md)**.

### Injetando controladores nos módulos

A camada do controlador lida com as solicitações recebidas e retorna as respostas apropriadas; elas são o ponto de entrada do aplicativo para cada terminal. Leia mais sobre os controladores na seção **[Controllers](controller.md)**. Para tornar um controlador funcional, ele deve ser injetado em um módulo. Isso pode ser feito passando o controlador como um parâmetro para o método `CreateModule`.

### Fluxo de aplicação totalmente conectado

Após a criação de um módulo, o módulo pode ser adicionado ao contêiner e, após a criação dos controladores, os controladores podem ser injetados no módulo, resultando em um fluxo de aplicativo totalmente conectado. O trecho de código a seguir demonstra esse processo:

#### Criação da aplicação

```typescript
const app = AppInstance.create(container);
```

#### Injeção de módulos

```typescript
const appContainer = new AppContainer();

const container = appContainer.create([
  // Adicione seus módulos aqui
  AppModule,
]);
```

##### Injeção de controler

```typescript
const appModule = CreateModule([
  // Adicione seus controlers aqui
  AppController,
])
```

:::info
É importante ressaltar que um projeto criado com o ExpressoTS CLI vem com uma estrutura de projeto inicial que promove a adesão a uma convenção específica definida pelo framework. Isso garante que cada módulo tenha seu próprio diretório dedicado, ajudando os desenvolvedores a manter a consistência em todo o código.
:::

## Executando a aplicação

Assim que o processo de instalação for concluído, você pode começar a ouvir as solicitações HTTP com base no ponto de extremidade do controlador definido que invocará o caso de uso correspondente para gerar a resposta. Para fazer isso, basta executar o seguinte comando no terminal do seu sistema operacional:

### Executando a aplicação em modo de desenvolvimento

```bash
npm run dev
```

### Gerando a build de produção

```bash
npm run build
```

### Executando a aplicação em modo de produção

```bash
npm run prod
```

:::tip
Uma vez que a aplicação está em execução, você pode acessá-la navegando para `http://localhost:3000/` no projeto starter sem opinião.
:::

## Resumo

ExpressoTS é um framework versátil que não está vinculado a nenhuma plataforma ou tecnologia específica. Aproveitando bibliotecas populares do Node.js como InversifyJS e ExpressJS, ele é projetado para ser leve, modular, personalizável e fácil de usar. Os desenvolvedores podem expandir as capacidades do framework criando novos provedores que podem ser incorporados em suas aplicações.

Atualmente, estamos trabalhando na construção da RoadMap do projeto e planejamos adicionar suporte para outros populares frameworks HTTP do Node.js, como o Fastify e o Koa, à plataforma. Além disso, à medida que avançamos para o futuro, pretendemos eliminar algumas das dependências que atualmente fazem parte do núcleo do framework, como IoC e decoradores.

---

## Apoie o projeto

Expresso TS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas