---
sidebar_position: 2
---

# Aplicação

A Visão Geral da Aplicação oferece uma demonstração abrangente dos principais componentes de uma aplicação ExpressoTS. No coração de uma aplicação ExpressoTS está a classe Application. Ela serve como base para criar e configurar o servidor. Além disso, a classe Application utiliza o container de aplicação do Inversify para carregar todos os módulos, incluindo suas respectivas rotas [controladores]. Isso garante um processo eficiente para lidar com solicitações recebidas e entregar as respostas apropriadas.

![Visão Geral da Aplicação](./img/app-overview.png)

ExpressoTS é um framework de aplicação web que fornece um invólucro em torno de servidores HTTP populares, incluindo **[Express](https://expressjs.com)** e **[Fastify](https://www.fastify.io/)**.

:::info
Atualmente, apenas o Express foi completamente testado pela equipe ExpressoTS. O adaptador Fastify está em desenvolvimento.
:::

A arquitetura de uma aplicação ExpressoTS é construída em torno do container IoC **[Inversify](https://inversify.io/)**, que é usado para identificar e injetar dependências nos construtores das classes. Essa abordagem permite que o container IoC carregue todos os módulos necessários, incluindo suas respectivas rotas (controladores). Ao utilizar casos de uso e provedores conforme necessário, os roteadores podem lidar com solicitações recebidas.

Ao aproveitar o poder do Inversify, o ExpressoTS fornece um sistema personalizado de Injeção de Dependência que é escalável e modular. Isso cria uma arquitetura que ajuda a desacoplar componentes e melhorar a manutenibilidade, permitindo que os desenvolvedores se concentrem em escrever código limpo e sustentável.

## Descrição dos Componentes da Aplicação

| Componente   | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DTO IN / OUT | Objeto de transferência de dados que define o formato da carga útil de entrada e saída da aplicação.                                                                                                                                                                                                                                                                                                                                                             |
| Controlador  | Componente responsável pelo processamento de solicitações e respostas com base na URL e no método HTTP. Também valida a conformidade dos dados recebidos.                                                                                                                                                                                                                                                                                                        |
| Caso de Uso  | Componente responsável por implementar a lógica necessária para lidar com solicitações recebidas do controlador. Quando o controlador recebe uma solicitação HTTP e valida os dados recebidos, ele aciona o caso de uso relevante, passando os dados validados para processamento. O caso de uso executa as operações necessárias com base na solicitação e retorna a resposta apropriada ao controlador, que, em seguida, envia a resposta de volta ao cliente. |
| Provedor     | Componente responsável por fornecer funcionalidade externa à aplicação.                                                                                                                                                                                                                                                                                                                                                                                          |
| Repositório  | Componente responsável por fornecer camada de comunicação com o banco de dados. Facilitando conexão e operações CRUD.                                                                                                                                                                                                                                                                                                                                            |

:::info
Provedores e Repositórios são componentes opcionais. Você pode usá-los se precisar fornecer funcionalidade extra à sua aplicação, como integração de banco de dados, sistema de logs, autenticação, email, etc.
:::

## Fluxo de Trabalho

O fluxo de trabalho de uma aplicação ExpressoTS é direto, como mostrado no diagrama acima.

1. Após inicializar a aplicação com todos os seus componentes, incluindo o container, módulos e controladores, o servidor começa a escutar por solicitações recebidas.
2. Quando uma solicitação é recebida, o servidor procura pela rota correspondente e executa o controlador associado, que normalmente expõe endpoints.
3. O controlador então chama o caso de uso relevante, que por sua vez chama o provedor apropriado quando necessário. Provedores são componentes externos que oferecem funcionalidade adicional à aplicação.

:::warning Inicializando a Aplicação sem um controlador
O ExpressoTS impedirá você de inicializar a Aplicação sem um controlador, já que não há ouvintes para lidar com solicitações recebidas. Você verá a seguinte mensagem no console:
**_Nenhum controlador foi encontrado! Certifique-se de ter registrado pelo menos um Controlador._**
:::

## Classe AppExpress

A classe AppExpress oferece uma forma de criar e configurar o servidor, passando **[middlewares do Express.js](https://expressjs.com/en/guide/writing-middleware.html)** ou outros middlewares na criação do servidor.

Para criar uma instância de aplicação ExpressoTS, usamos a classe `AppFactory`, que é responsável por criar a instância da aplicação e inicializar o container, módulos e controladores. A função `create()` retorna um IApplicationExpress que fornece um conjunto de métodos para configurar o servidor, incluindo o método `listen()`, que inicia o servidor e escuta por solicitações recebidas.

### Definição da Classe AppExpress

```typescript
class AppExpress {
  /**
   * Configure serviços que devem ser inicializados antes do início do servidor.
   */
  protected configureServices(): void {}

  /**
   * Configure serviços que devem ser executados após o início do servidor.
   */
  protected postServerInitialization(): void {}

  /**
   * Execute ações ou limpeza após o encerramento do servidor.
   */
  protected serverShutdown(): void {}

  public async create(
    container: Container,
    middlewares: Array<express.RequestHandler> = []
  ): Promise<ApplicationExpress> {}

  public async listen(
    port: number,
    environment: ServerEnvironment,
    consoleMessage?: IApplicationMessageToConsole
  ): Promise<void> {}
}
```

### Método Create

O método `create()` permite aos desenvolvedores passar o container, middlewares e adaptadores de servidor HTTP para o servidor. Para passar um middleware, você não precisa usar `app.use()`, basta passar o middleware e sua configuração como demonstrado abaixo:

```typescript
async function Bootstrap() {
  await AppFactory.create(container, [
    express.json(),
    express.urlencoded({ extended: true }),
    cors({
      origin: "*",
    }),
  ]);
}
```

:::info
Adaptadores são usados para criar o servidor. Atualmente, o Express é o único adaptador disponível. O adaptador Fastify está em desenvolvimento.
Ao criar uma instância de aplicação, você pode passar o adaptador como o terceiro parâmetro. Se você não passar o adaptador, o Express é usado por padrão.
:::

### Método Listen

O método `listen()` inicia o servidor e fica à espera de solicitações recebidas. No método listen, os desenvolvedores podem definir o número da porta e o ambiente do servidor, que pode ser desenvolvimento, homologação ou produção. Os desenvolvedores também podem configurar o nome e a versão do aplicativo para serem exibidos no console quando o servidor for iniciado, conforme mostrado no exemplo a seguir:

```typescript
// App listen method
app.listen(3000, ServerEnvironment.Development, {
  appName: "Your App Name",
  appVersion: "v1.0.0",
});
```

:::tip
O nome e a versão do seu aplicativo podem ser configurados por meio do arquivo .env ou do arquivo package.json. No template opinativo, usamos o arquivo package.json para recuperar o nome e a versão do aplicativo.
:::

### Ambiente do Servidor da Aplicação

Este é um enum que define o ambiente do servidor. Atualmente, os ambientes suportados são desenvolvimento e produção. Após a inicialização do servidor, a estrutura subjacente procurará a variável de ambiente NODE_ENV e definirá o ambiente do servidor de acordo. Se a variável de ambiente NODE_ENV não for definida, o ambiente do servidor será configurado como desenvolvimento por padrão.

Além disso, no provedor da aplicação, o usuário pode realizar lógica condicional com base no ambiente do servidor.

```typescript
if (this.isDevelopment()) {
  // your logic here
}
```

Aqui estão os valores do enum disponíveis para ambientes de servidor:

```typescript
ServerEnvironment.Development;
ServerEnvironment.Production;
```

## Provedor da Classe App

O provedor da classe App é o coração do template opinativo da aplicação. É responsável por inicializar a aplicação e fornecer funcionalidades a serem configuradas no processo de inicialização do servidor. Você pode fazer uso dos middlewares e provedores integrados para configurar sua aplicação.

```typescript
class App extends AppExpress {
  private middleware: IMiddleware;
  private provider: IProvider;

  constructor() {
    super();
    this.middleware = container.get<IMiddleware>(Middleware);
    this.provider = container.get<IProvider>(Provider);
  }

  protected configureServices(): void {
    this.middleware.addBodyParser();
    this.middleware.setErrorHandler();
  }

  protected postServerInitialization(): void {
    if (this.isDevelopment()) {
      this.provider.envValidator.checkAll();
    }
  }

  protected serverShutdown(): void {}
}
```

O provedor da classe App oferece um conjunto de middlewares e provedores prontos para uso que podem ser usados para configurar sua aplicação. Explore as interfaces `IMiddleware` e `IProvider` para ver o que está disponível.

## Hooks do Ciclo de Vida da Classe App

Outro aspecto importante da classe de Aplicação são os hooks do ciclo de vida. Esses hooks permitem que os desenvolvedores executem código antes, depois e na desligamento do servidor. É importante observar que, para tirar proveito desses hooks, os desenvolvedores devem criar uma classe App que estenda a classe Application e substituir os métodos conforme necessário. O seguinte exemplo mostra os hooks do ciclo de vida disponíveis no momento:

```typescript
    /* Add any service that you want to be initialized before the server starts */
    protected configureServices(): void { }

    /* Add any service that you want to execute after the server starts */
    protected postServerInitialization(): void { }

    /* Add any service that you want to execute after server is shutdown */
    protected serverShutdown(): void { }
```

### Hooks Execution Order

![Application Lifecycle Hooks](./img/app-life-cycle.png)

## Scripts da Aplicação

Abaixo estão os scripts usados para executar, construir e testar sua aplicação.
A coluna de comandos mostra o NPM como gerenciador de pacotes, mas você pode usar o gerenciador de pacotes de sua escolha.

| Script     | Descrição                                             | Comando            |
| ---------- | ----------------------------------------------------- | ------------------ |
| build      | Constrói o pacote de produção na pasta ./dist.        | npm run build      |
| dev        | Executa em modo de desenvolvimento com observação.    | npm run dev        |
| prod       | Executa em modo de produção com base no pacote built. | npm run prod       |
| test       | Executa os testes localizados na pasta test.          | npm run test       |
| test:watch | Executa os testes em modo de observação e interativo. | npm run test:watch |
| test:cov   | Gera relatorio de cobertura de testes.                | npm run test:cov   |
| format     | Formatar código usando prettier.                      | npm run format     |
| lint       | Lint código usando eslint.                            | npm run lint       |

## Executando a aplicação

```bash
npm run dev
```

Dependendo do ambiente em que está executando a aplicação, você verá a seguinte mensagem no console:

`expressots-demo version 1.0.0 is running on port 3000 - Environment: development`
