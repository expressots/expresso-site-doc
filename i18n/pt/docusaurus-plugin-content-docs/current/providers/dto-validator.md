---
sidebar_position: 1
---

# Validador de DTO

O provedor Validador de DTO é um recurso que o ExpressoTS oferece nativamente. É usado para validar os dados vindos do cliente. Ajuda o desenvolvedor a evitar erros em tempo de execução causados por dados faltantes ou inválidos.

Quando você cria um novo projeto, o provedor Validador de DTO já vem incluído como um middleware que pode ser usado em qualquer endpoint. O middleware é chamado `validateDTO`.

## Pré-requisitos

O validador de DTO é baseado nos pacotes class-validator e class-transformer. Utiliza decoradores para validar os DTOs.

:::tip
Se você não tiver [class-validator](https://www.npmjs.com/package/class-validator) e [class-transformer](https://www.npmjs.com/package/class-transformer) instalados e tentar usar o validador de DTO, você receberá uma mensagem de aviso no console indicando que você precisa instalar os pacotes.
:::

Outra coisa importante a mencionar é que o validador de DTO funciona apenas com classes, já que interfaces não existem em tempo de execução. Portanto, se você deseja usar o validador de DTO, você precisa criar uma classe que represente seu DTO em vez da interface atual fornecida pelo ExpressoTS.

## Como Usar

Você pode usar o validador de DTO em qualquer endpoint, adicionando o middleware validateDTO na rota do endpoint.

Endpoint que cria um novo usuário:

```typescript
@httpPost("/", ValidateDTO(CreateUserDTO))
execute(@requestBody() payload: CreateUserDTO, @response() res: Response) {
  return res.status(StatusCode.Created).json(this.createUserUseCase.execute(payload));
}
```

Aqui está a classe `CreateUserDTO`:

```typescript
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

class CreateUserDTO {
  @IsNotEmpty()
  @MinLength(10)
  name: string;
  @IsNotEmpty()
  @IsEmail({}, { message: "Invalid email" })
  email: string;
}

export { CreateUserDTO };
```

:::info
Para mais informações sobre os decoradores, consulte o pacote [class-validator](https://www.npmjs.com/package/class-validator).
:::

## Mensagens de Erro do Validador de DTO

Se você enviar um payload que não corresponde ao DTO CreateUserDTO acima, o validador de DTO retornará uma mensagem de erro com o seguinte formato:

**Payload:**

```json
{
  "name": "",
  "email": ""
}
```

**Resposta:**

```json
{
  "errorCode": 400,
  "errorMessage": "Bad Request",
  "DTO": [
    {
      "property": "name",
      "messages": [
        "name must be longer than or equal to 10 characters",
        "name should not be empty"
      ]
    },
    {
      "property": "email",
      "messages": ["invalid email", "email should not be empty"]
    }
  ]
}
```

As mensagens são divididas por propriedade, facilitando a identificação de qual propriedade tem um erro e qual é a mensagem de erro. Isso é útil quando você tem um DTO com muitas propriedades, pois permite identificar facilmente qual propriedade tem um erro. Também ajuda a aplicação frontend a receber as mensagens de erro de forma mais fácil.

:::caution ALERTA DE SPOILER
O ValidateDTO faz parte das funcionalidades que o ExpressoTS oferece nativamente para ajudá-lo a construir sua aplicação mais rapidamente. Nas próximas versões do ExpressoTS para cada funcionalidade que o ExpressoTS oferece nativamente, forneceremos uma maneira de você personalizá-la ou usar sua própria implementação baseada em seu pacote ou biblioteca favorita.
:::

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas
