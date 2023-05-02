---
sidebar_position: 5
---

# Controladores

Os Controladores atuam como a principal interface entre o cliente e o servidor em aplicações Node.js. Eles lidam com as requisições recebidas, validam os dados conforme o DTO de entrada, e retornam as respostas no formato DTO. Em essência, os controllers atuam como a ponte entre os clientes e as camadas de serviço, também conhecidas como casos de uso.

O Data Transfer Object (DTO) é um padrão de design comumente usado em aplicações Node.js que padroniza os formatos de dados para a comunicação entre diferentes camadas da aplicação, incluindo cliente-servidor ou módulos de servidor. O DTO serve como uma interface para a troca de dados, garantindo estruturas claras e padronizadas para os dados de entrada e saída. Ao separar a lógica de negócios da lógica de comunicação, ajuda a reduzir a complexidade da aplicação e desacoplar diferentes camadas.

O uso de DTOs pode melhorar o desempenho e a escalabilidade da aplicação, reduzindo a transferência de dados entre o cliente e o servidor e fornecendo maneiras mais eficientes de processar e manipular dados dentro da aplicação.

Por exemplo, imagine um cenário de registro de usuário em que são coletados nome, e-mail e senha, e o ID é gerado automaticamente. O objeto DTO de usuário para entrada e resposta pode ter possíveis formatos, como mostrado abaixo:

```typescript
// UserCreateInputDTO
interface UserCreateInputDTO {
    name: string;
    email: string;
    password: string;
}

// UserCreateResponseDTO
interface UserCreateResponseDTO {
    id: string;
    name: string;
    status: string;
}

// Payload json formato
{
    "name": string,
    "email": string,
    "password": string
}
```

Ter dois formatos diferentes de DTO é essencial nesse caso, porque ao registrar um usuário, não queremos retornar a senha para o cliente por motivos de segurança. Portanto, criamos um DTO diferente para a resposta, adicionando um campo complementar chamado status, onde é enviada uma mensagem ao cliente, indicando que o usuário foi criado com sucesso.

Como resultado, os DTOs ajudam a segregar e filtrar os dados enviados ao cliente, reduzindo a quantidade de dados processados pela aplicação.

## Classe Controller

A classe controller no Expresso TS representa o endpoint que você deseja criar para a sua aplicação. Você pode definir a rota e o método HTTP para o controller usando o decorador `@controller()` do [Inversify Express Utils package](https://github.com/inversify/inversify-express-utils).

Cada classe de controlador contém um único método chamado `execute()` que manipula a solicitação e envia a resposta. Este método é anotado **[@httpMethods()](./decorators.md)** com decorador do mesmo pacote Inversify. Adicionalmente os parâmetros do método `execute()` pode também ser anotados.

Aqui está um exemplo de uma classe de controlador Expresso TS:

```typescript
@controller("/")
class AppController {
  
  @httpGet("/")
  execute(@response() res: any) {
    return res.send("Hello from Expresso TS!");
  }
}
```

:::info
Na classe AppController acima, estamos usando res como qualquer res:any, mas você pode definitivamente usar o tipo res: Response do pacote express, pois expomos seus tipos. Isso permitirá que você use todos os métodos que a classe **[Response](https://expressjs.com/en/4x/api.html#res)** oferece.  
:::

## Classe BaseController

A classe `BaseController` é utilizada como base para as classes de controller, oferecendo no construtor um parâmetro que o desenvolvedor pode indicar qual serviço ou domínio ele está atualmente construindo. Isso ajuda o sistema de log a lançar erros com mais informações sobre o contexto do erro e onde o erro ocorreu.

Outra vantagem de usar a classe `BaseController` é que ela oferece um método em duas versões diferentes, assíncrona e síncrona, que é o `callUseCase()` ou `callUseCaseAsync()`.

Esses métodos reforçam a ideia de um caso de uso por controller e são responsáveis por chamar o caso de uso que irá implementar a lógica de negócio do controller.

:::tip
Os métodos callUseCase, disponíveis nas versões síncrona e assíncrona, são adequados para retornar status e respostas JSON aos clientes, pois os usuários precisam apenas passar o retorno do useCase, res: Response e o código de status.
:::

Esta é a assinatura do método `callUseCase`:

```typescript
callUseCase(useCase: any, res: any, successStatusCode: number);
```

- `useCase`: O caso de uso a ser chamado. O caso de uso é injetado no construtor do controler.
- `res`: O objeto resposta do tipe express Response.
- `successStatusCode`: O código de status indica o resultado da solicitação HTTP e é enviado ao cliente quando o caso de uso é executado com êxito. Para mais informações sobre Status code visite **[Http Status Code](./status-code.md)**.

Resposta padrão:

```typescript
return res.status(successStatusCode).json(dataReturn);
```

Um exemplo mais completo de uma classe de controlador que herda da classe BaseController é mostrado abaixo:

```typescript
@controller("/")
class AppController extends BaseController {
  constructor(private appUseCase: AppUseCase) {
    super("app-controller");
  }

  @httpGet("/")
  execute(@response() res: any): IAppResponseDTO {
    return this.callUseCase(this.appUseCase.execute(),
            res,
            StatusCode.OK
    );
  }
}
```

## Métodos HTTP e decoradores de parametros

Os decoradores de métodos HTTP e parâmetros são um conjunto de anotações usadas em aplicações Expresso TS para definir o roteamento e o tratamento de solicitações HTTP.

Os decoradores de métodos HTTP incluem @httpGet(), @httpPost(), @httpPut(), @httpPatch(), @httpHead(), @httpDelete() e @httpMethod(). Esses decoradores são usados para definir o método HTTP e o caminho de uma rota específica na aplicação.

Os decoradores de parâmetros incluem @queryParam(), @requestParam(), @requestBody(), @requestHeaders(), @cookies(), @next() e @request(). Esses decoradores são usados para recuperar dados de solicitações HTTP, como parâmetros de consulta, cabeçalhos de solicitação e corpo da solicitação.

O uso desses decoradores pode simplificar o roteamento e o tratamento de solicitações HTTP em aplicações Node.js e tornar o código mais legível e fácil de manter.

### Decoradores de métodos HTTP

Aqui está uma lista de todos os decoradores `@httpMethods()` disponíveis no Expresso TS, juntamente com sua descrição e uso:

| Decorador   | Descrição                                                          | Uso                          |
| ----------- | ------------------------------------------------------------------ | ---------------------------- |
| @httpGet    | Vincula um método de controlador a um verbo HTTP GET.              | @httpGet("/path")            |
| @httpPost   | Vincula um método de controlador a um verbo HTTP POST.             | @httpPost("/path")           |
| @httpPut    | Vincula um método de controlador a um verbo HTTP PUT.              | @httpPut("/path")            |
| @httpPatch  | Vincula um método de controlador a um verbo HTTP PATCH.            | @httpPatch("/path")          |
| @httpHead   | Vincula um método de controlador a um verbo HTTP HEAD.             | @httpHead("/path")           |
| @httpDelete | Vincula um método de controlador a um verbo HTTP DELETE.           | @httpDelete("/path")         |
| @httpMethod | Vincula um método de controlador a um verbo HTTP especificado.     | @httpMethod("verb", "/path") |

### Decoradores de parâmetros

Aqui está uma lista de todos os decoradores de parâmetros disponíveis no Expresso TS, juntamente com sua descrição e uso:

| Decorator	                           | Description	                                        | Usage
| ------------------------------------ | ------------------------------------------------------ | -------------------------------------------------------- |
| @request()	                         | Injeta objeto Express Request	                    | execute(@request() req: Request)
| @response()	                         | Injeta objeto Express Response	                | execute(@response() res: Response)
| @requestParam(paramName?: string)	   | Injeta um parâmetro da URL da solicitação	        | execute(@requestParam('id') id: string)
| @queryParam(paramName?: string)	     | Injeta um parâmetro da string de consulta da URL da solicitação | execute(@queryParam('searchTerm') searchTerm: string)
| @requestBody()	                     | Injeta a carga útil do corpo da solicitação	                    | execute(@requestBody() body: MyDTO)
| @requestHeaders(headerName?: string) | Injeta um cabeçalho dos cabeçalhos da solicitação            | execute(@requestHeaders('authorization') auth: string)
| @cookies(cookieName?: string)	       | Injeta um cookie dos cookies da solicitação   | execute(@cookies('session') session: string)
| @next()	                           | Injeta o objeto NextFunction do Express	            | execute(@next() next: NextFunction)

---

## Apoie o projeto

Expresso TS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas