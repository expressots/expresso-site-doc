---
sidebar_position: 5
---

# Entidades


Entidades são o núcleo da sua aplicação. Elas são a representação dos seus objetos de negócio. Para mais informações sobre entidades, veja [Entidades](../overview/entities.md).

```typescript
@provide(User)
export class User {
  id: string;
  name: string;
  email: string;

  constructor() {
    this.id = randomUUID();
  }
}
```

:::caution
Não passe tipos primitivos como parâmetros para o construtor das suas entidades. O Contêiner de Injeção de Dependências não será capaz de resolvê-los.

```typescript
constructor(name: string) {
    this.name = name;
}
```

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