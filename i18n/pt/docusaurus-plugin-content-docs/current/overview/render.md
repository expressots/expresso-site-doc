---
sidebar_position: 17
---

# Motor de Renderização

**[ExpressoTS](https://expresso-ts.com/)** melhora as capacidades do servidor web do Express.js, proporcionando uma experiência simplificada para renderização de views. ExpressoTS suporta vários motores de renderização prontos para uso, incluindo EJS, PUG e Handlebars (HBS). Isso facilita para os desenvolvedores começarem a renderizar views sem necessidade de configuração adicional, pois são fornecidas configurações padrão para cada motor suportado.

## Motores de Renderização Suportados

ExpressoTS suporta os seguintes motores de renderização:

-   EJS
-   PUG
-   HBS (Handlebars)

### Opções de Configuração do Handlebars

```typescript
export type HandlebarsOptions = {
    viewEngine?: string; // O motor de visualização a ser usado
    viewsDir?: string; // O caminho para a pasta de views
    partialsDir?: string; // O caminho para a pasta de partials
};
```

### Opções de configuração padrão do Handlebars

```typescript
{
    viewEngine: "hbs",
    viewsDir: <root>/views,
    partialsDir: <root>/views/partials,
}
```

### Estrutura de Pastas Padrão

Estrutura de pastas padrão para Handlebars:

```tree
src
views
|--partials
|   |--partial.hbs
|--index.hbs
```

Todos os outros motores seguem a mesma estrutura, com exceção da pasta `partials`, que é específica para Handlebars.

### Exemplo de Arquivo Handlebars

```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Exemplo HBS</title>
    </head>
    <body>
        <h1>Olá do HBS</h1>
        <p>Renderizar partial: {{> partial}}</p>
    </body>
</html>
```

## Outras Opções de Configuração de Motores

### Opções de Configuração do Pug

```typescript
export type PugOptions = {
    viewEngine?: string; // O motor de visualização a ser usado
    viewsDir?: string; // O caminho para a pasta de views
};
```

### Opções de configuração padrão do Pug

```typescript
{
    viewEngine: "pug",
    viewsDir: <root>/views,
}
```

### Opções de Configuração do EJS

```typescript
export type EjsOptions = {
    viewEngine?: string; // O motor de visualização a ser usado
    viewsDir?: string; // O caminho para a pasta de views
};
```

### Opções de configuração padrão do EJS

```typescript
{
    viewEngine: "ejs",
    viewsDir: <root>/views,
    serverOptions: {
        cache: true,
        compileDebug: false,
        debug: false,
        delimiter: "%",
        strict: false,
    },
}
```

## Como Usar

Aqui está como você pode configurar o ExpressoTS para usar um motor de renderização como HBS (handlebars) em sua aplicação:

Na configuração do `app.provider`, você pode definir o motor de renderização:

```typescript
export class App extends AppExpress {
    private middleware: IMiddleware;
    private provider: ProviderManager;

    constructor() {
        super();
        this.middleware = container.get<IMiddleware>(Middleware);
        this.provider = container.get(ProviderManager);
    }

    protected configureServices(): void {
        // Definir o motor de renderização como HBS
        this.setEngine(Engine.HBS);

        this.middleware.setErrorHandler();
    }

    protected async postServerInitialization(): Promise<void> {
        if (this.isDevelopment()) {
            this.provider.get(Env).checkAll();
        }
    }

    protected serverShutdown(): void {}
}
```

:::note
Se você deseja passar opções personalizadas para o motor de renderização, você pode fazer isso passando um objeto com as opções desejadas para o método `setEngine`. Por exemplo, para definir o diretório de views para um caminho personalizado, você pode fazer o seguinte:

```typescript
this.setEngine<HBS>(Engine.HBS, { viewsDir: <<custom-path>> });
```

:::

### Como Renderizar Views no ExpressoTS

Para renderizar uma view no ExpressoTS, você pode usar o método `render` fornecido pelo objeto `Response`. Aqui está um exemplo de como você pode renderizar uma view no ExpressoTS:

```typescript
@Get("/")
root(@response() res: Response) {
    res.render("index", { date: new Date(), name: "Informação Aleatória" });
}
```

No exemplo acima, o método render é chamado no objeto Response, passando o nome da view a ser renderizada e um objeto com os dados a serem passados para a view. O motor de visualização renderizará a view com os dados fornecidos e retornará o HTML renderizado para o cliente.

### Decorador Render

O decorador `@Render` pode ser usado em métodos de controladores para renderizar views usando o motor de visualização especificado. Aqui está um exemplo de como você pode usar o decorador `@Render` para renderizar uma view no ExpressoTS:

#### Renderização passando a view e dados padrão no decorador

```typescript
@Get("/")
@Render("index", { date: new Date(), name: "Informação Aleatória" })
root() {}
```

#### Renderização passando apenas a view no decorador

```typescript
@Get("/")
@Render("index")
root() {
    return { date: new Date(), name: "Informação Aleatória" };
}
```

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
