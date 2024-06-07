---
sidebar_position: 11
---

# Decoradores

Aqui está uma lista completa de todos os decoradores que estão disponíveis no ExpressoTS, bem como uma breve descrição do que eles fazem.

## Decoradores de classes

Decoradores disponíveis para suas classes.

| Decoradores       | Descrição                                                                       |
| ----------------- | ------------------------------------------------------------------------------- |
| @provide          | Vincula a classe ao container de injeção de dependência.                        |
| @provideSingleton | Vincula a classe ao contêiner de injeção de dependência como Singleton.         |
| @provideTransient | Vincula a classe ao contêiner de injeção de dependência como Transient.         |
| @injectable       | Marca a classe como disponível para ser injetada.                               |
| @inject           | Marca a classe como disponível para ser injetada no construtor de outra classe. |

## Decoradores do controlador

Decoradores disponíveis para seus controladores.

| Decoradores | Descrição                                  | Exemplo de Uso                                               |
| ----------- | ------------------------------------------ | ------------------------------------------------------------ |
| @controller | Marca a classe como controlador injetável. | @controller("/path", middleware[])                           |
| @scope      | Vincula um controlador a um escopo.        | @scope(BindingScopeEnum.Singleton, ou Request, ou Transient) |

### Decoradores de métodos HTTP

Decoradores disponíveis para seus métodos de controlador.

| Decorador | Descrição                                                      | Uso                      |
| --------- | -------------------------------------------------------------- | ------------------------ |
| @Get      | Vincula um método de controlador a um verbo HTTP GET.          | @Get("/path")            |
| @Post     | Vincula um método de controlador a um verbo HTTP POST.         | @Post("/path")           |
| @Put      | Vincula um método de controlador a um verbo HTTP PUT.          | @Put("/path")            |
| @Patch    | Vincula um método de controlador a um verbo HTTP PATCH.        | @Patch("/path")          |
| @Head     | Vincula um método de controlador a um verbo HTTP HEAD.         | @Head("/path")           |
| @Delete   | Vincula um método de controlador a um verbo HTTP DELETE.       | @Delete("/path")         |
| @Method   | Vincula um método de controlador a um verbo HTTP especificado. | @Method("verb", "/path") |
| @Http     | Define o código de status HTTP para a resposta.                | @Http(200)               |

### Decoradores de parâmetros

Aqui está uma lista de todos os decoradores de parâmetros disponíveis no ExpressoTS, juntamente com sua descrição e uso:

| Decorador                     | Descrição                                                        | Uso                                              |
| ----------------------------- | ---------------------------------------------------------------- | ------------------------------------------------ |
| @request()                    | Injeta objeto Express Request.                                   | execute(@request() req: Request)                 |
| @response()                   | Injeta objeto Express Response.                                  | execute(@response() res: Response)               |
| @param(paramName?: string)    | Injeta um parâmetro da URL da solicitação.                       | execute(@param('id') id: string)                 |
| @query(paramName?: string)    | Injeta um parâmetro da string de consulta da URL da solicitação. | execute(@query('searchTerm') searchTerm: string) |
| @body()                       | Injeta a carga útil do corpo da solicitação.                     | execute(@body() body: MyDTO)                     |
| @headers(headerName?: string) | Injeta um cabeçalho dos cabeçalhos da solicitação.               | execute(@headers('authorization') auth: string)  |
| @cookies(cookieName?: string) | Injeta um cookie dos cookies da solicitação.                     | execute(@cookies('session') session: string)     |
| @next()                       | Injeta o objeto NextFunction do Express.                         | execute(@next() next: NextFunction)              |

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
