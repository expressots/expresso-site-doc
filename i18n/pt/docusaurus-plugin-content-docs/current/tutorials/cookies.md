---
sidebar_position: 2
---

# Cookies

Cookies são pequenos pedaços de dados que um site envia para o navegador da web de um usuário enquanto o usuário está navegando nesse site. Sempre que o usuário carrega o site, o navegador envia o cookie de volta ao servidor para notificar o site da atividade anterior do usuário.

Os cookies servem a vários propósitos primários:

1. Gerenciamento de sessão: Os cookies são frequentemente usados para lidar com sessões de usuário. Por exemplo, quando você faz login em um site, um cookie é definido para lembrar seu estado de login. Assim, enquanto você navega pelo site, você permanece logado.

2. Personalização: Os cookies podem armazenar preferências do usuário para personalizar a experiência do usuário no site. Por exemplo, cookies podem armazenar informações sobre o idioma preferido do usuário, tema ou outras configurações.

3. Rastreamento: Alguns cookies rastreiam o comportamento do usuário no site ao longo do tempo. Esses são frequentemente usados por ferramentas de análise de terceiros para entender o comportamento do usuário e otimizar o site de acordo. Anunciantes também usam cookies de rastreamento para exibir anúncios direcionados com base na atividade do usuário.

4. Segurança: Os cookies podem ser usados para suportar funções seguras do site. Por exemplo, um cookie pode ser usado para lembrar que um usuário se autenticou em um site para que o servidor saiba que o usuário já forneceu credenciais de login válidas.

Também é importante notar que existem diferentes tipos de cookies - cookies de sessão, que expiram quando a sessão do navegador termina, e cookies persistentes, que permanecem no dispositivo do usuário por um período de tempo definido ou até que sejam explicitamente excluídos.

:::caution USANDO COOKIE PARA RASTREAMENTO
Tenha em mente que o uso de cookies, especialmente para rastreamento e personalização, levantou preocupações com a privacidade, levando a regulamentações como o GDPR na Europa e o CCPA na Califórnia que exigem que os sites divulguem seu uso de cookies e obtenham o consentimento do usuário.
:::

## Pacote cookie-parser

- Facilidade de Uso: o cookie-parser torna muito fácil ler valores de cookies, que são frequentemente usados para rastrear sessões de usuários, personalização e gerenciamento de aplicações com estado. Sem esta biblioteca, você teria que analisar manualmente o cabeçalho do Cookie e lidar com as nuances da formatação de cookies.

- Cookies Assinados: O pacote também suporta cookies assinados, que são uma maneira de verificar a integridade dos cookies (ou seja, se eles foram adulterados). Esta é uma funcionalidade importante para garantir a segurança das informações sensíveis armazenadas nos cookies.

## O que considerar ao usar o cookie-parser

- Sobrecarga: Embora não seja uma biblioteca pesada, usar o cookie-parser adiciona um pouco de sobrecarga a cada requisição, pois ele analisa todos os cookies, independentemente de serem usados no manipulador de rota.

- Estado: Os cookies, por natureza, tornam uma aplicação com estado. Ao escalar uma aplicação, o estado pode ser problemático. Portanto, métodos de autenticação alternativos sem estado, como tokens, podem ser preferíveis em uma arquitetura de microserviços.

# Quando usar

Decidir quando usar o cookie-parser depende em grande parte das necessidades de sua aplicação. Se sua aplicação web requer gerenciamento de estado e você escolheu fazer isso por meio de cookies, o cookie-parser pode facilitar sua vida e tornar sua aplicação mais segura com cookies assinados.

No entanto, se seu site tem um tráfego pesado, a sobrecarga pode se tornar uma preocupação. Se sua arquitetura é baseada em serviços sem estado (comum em arquiteturas de microserviços), você pode querer evitar cookies e optar por outros métodos de manter o estado, como JWTs (JSON Web Tokens).

:::info
Caso você esteja lidando com um site de alto tráfego, considere alternativas como sessões armazenadas em um banco de dados, JWTs, ou tokens armazenados em cabeçalhos HTTP. Além disso, usar um balanceador de carga para distribuir o tráfego e módulos de armazenamento de sessão para manter dados de sessão em vários servidores pode ajudar a gerenciar alto tráfego e dados com estado.
:::

Assim como antes, a melhor abordagem geralmente envolve combinar várias técnicas, adaptadas às necessidades específicas de sua aplicação. Testar e monitorar sua aplicação sob condições realistas pode ajudar a orientar seu processo de tomada de decisão.

## Uso com ExpressoTS

Instale o middleware cookie-parser npm e a definição de tipo.

```bash
npm i cookie-parser
npm i -D @types/cookie-parser
```

Após a instalação, você pode adicionar o middleware ao seu aplicativo ExpressoTS.

```typescript
import cookieParser from "cookie-parser";

// Adicione no método de criação da aplicação no array de middleware
AppInstance.create(container, [cookieParser()]);
```

Aqui está um exemplo de como usar o cookie-parser:

Defina um cookie com um UUID aleatório como valor, que expira em 1 hora e é acessível apenas via HTTP:

```typescript
@httpGet("set-cookie")
setCookie(@response() res: Response) {
    res.cookie("authToken", randomUUID(), {
        maxAge: 60 * 60 * 1000, // 1 hora
        httpOnly: true,
    });
    return res.send("Cookie set!");
}
```

Obter um cookie:

```typescript
@httpGet("get-cookie")
getCookie(@cookies() cookieInfo: string, @response() res: Response) {
    return res.send(`Your token: ${cookieInfo["authToken"]}`);
}
```

:::tip
Note que estamos usando o decorator `@cookies()` para obter as informações do cookie. Este decorator é fornecido pelo inversify-express-utils.
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