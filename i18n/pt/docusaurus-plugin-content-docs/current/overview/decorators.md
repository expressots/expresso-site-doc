---
sidebar_position: 10
---

# Decorators

Here is a complete list of all the decorators that are available in Expresso TS as wel as a brief description of what they do.
Aqui está uma lista completa de todos os decoradores que estão disponíveis no ExpressoTS, bem como uma breve descrição do que eles fazem.

## Decoradores de classes

| Decoradores | Descrição                                                                       |
| ----------- | ------------------------------------------------------------------------------- |
| @provide    | Vincula a classe ao container de injeção de dependência.                        |
| @injectable | Marca a classe como disponível para ser injetada.                               |
| @inject     | Marca a classe como disponível para ser injetada no construtor de outra classe. |

## Decoradores do controlador

| Decoradores | Descrição                                                                       |
| ----------- | ----------------------------------------- |
| @controller | Marca a classe como controller injetável. |

### Decoradores de métodos HTTP

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