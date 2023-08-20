---
sidebar_position: 16
---

# Renderizacão

**[Express.js](https://expressjs.com/en/5x/api.html#res.render)** oferece um método `render` para renderizar uma visualização e enviar a sequência HTML renderizada para o cliente.

No ExpressoTS, como oferecemos suporte ao Express.js, também oferecemos suporte à capacidade de renderização oferecida pelo objeto de resposta HTTP.

O ExpressoTS implementa um suporte básico para mecanismos de renderização na classe `Application`. No momento, o número de mecanismos de renderização suportados é limitado ao Handlebars.

Criamos a interface RenderTemplateOptions para fornecer uma estrutura para as opções de configuração de futuros mecanismos de renderização.
Atualmente, oferecemos suporte a um número muito limitado de opções para o Handlebars, mas expandiremos isso no futuro, não apenas as opções, mas também o número de mecanismos de renderização suportados.

## IHandlebars interface example

```typescript
interface IHandlebars {
    /**
     * Especifica o nome da extensão para os templates do Handlebars.
    */
    extName: string;

    /**
     * Especifica o caminho para o diretório que contém os templates do Handlebars.
    */
    viewPath: string;

    /**
     * Especifica a função para renderizar os templates do Handlebars.
    */
    engine: Engine;
}

type RenderTemplateOptions = IHandlebars;
```

## Como usar

```typescript
import { AppInstance, IHandlebars, ServerEnvironment } from "@expressots/core";

async function bootstrap() {
    AppInstance.create(container);
    
    // Configurando handlebars como motor de renderização.
    AppInstance.setEngine<IHandlebars>({
        extName: "hbs",
        viewPath: path.join(__dirname, "..", "views"),
        engine: engine({ defaultLayout: "layout", extname: "hbs" }),
    });

    AppInstance.listen(3000, ServerEnvironment.Development);
}

bootstrap();
```

:::tip
Para que o código acima funcione, você precisa instalar o pacote **[express-handlebars](https://www.npmjs.com/package/express-handlebars)**, além de ter uma estrutura de pastas semelhante à apresentada abaixo.
:::

## Estrutura de pastas

```tree
src
|--views
|   |--layouts
|   |   |--layout.hbs
|   |--index.hbs
```

## Instalando express-handlebars

```bash
npm i express-handlebars
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