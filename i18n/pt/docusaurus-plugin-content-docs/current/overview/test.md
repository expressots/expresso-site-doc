---
sidebar_position: 14
---

# Teste

Os testes de unidade e os testes de integração são importantes em qualquer processo de desenvolvimento de aplicativos porque servem a propósitos diferentes.

- **Testes de unidade**: focam na realização de testes em unidades individuais de código, como uma única função ou método, isoladamente do restante do aplicativo. Eles normalmente envolvem simulação de dependências e serviços externos para garantir que a unidade sendo testada se comporte como esperado em um ambiente controlado. Os testes de unidade são importantes porque permitem que os desenvolvedores identifiquem bugs e erros precocemente no processo de desenvolvimento, quando são mais fáceis e baratos de corrigir. Eles também ajudam a garantir que unidades individuais de código estejam funcionando corretamente, o que pode facilitar a depuração e solução de problemas mais tarde.

- **Testes de integração**: por outro lado, testam as interações entre diferentes componentes ou módulos do aplicativo, incluindo como eles interagem com dependências e serviços externos. Ao contrário dos testes de unidade, os testes de integração envolvem testar o aplicativo como um todo, em vez de unidades individuais de forma isolada. Os testes de integração são importantes porque ajudam a garantir que o aplicativo esteja funcionando corretamente como um todo e que os diferentes componentes estejam trabalhando juntos conforme o esperado.

:::tip
Combinar testes unitários e testes de integração pode ser benéfico porque permite que os desenvolvedores testem tanto unidades individuais de código quanto o aplicativo como um todo. Isso ajuda a garantir que cada parte do código esteja funcionando corretamente por si só e em conjunto com outras partes do aplicativo. Além disso, a combinação de testes pode fornecer uma cobertura de teste mais completa e identificar problemas em diferentes níveis de abstração, desde funções individuais até a interação completa do sistema com componentes externos.
:::

## Exemplo usando Jest como exector de teste

Abaixo estamos testando o retorno do endpoint PingUseCase. Estamos utilizando o **[Jest](https://jestjs.io/)** como test runner e **[ts-jest](https://www.npmjs.com/package/ts-jest)** como pre-processador TypeScript.

```typescript
describe("PingUseCase", () => {
    let pingUseCase: PingUseCase;

    beforeEach(() => {
        pingUseCase = new PingUseCase();
    });

    it("should return a valid PingResponseDTO", () => {
        const start: Date = new Date();
        const response = pingUseCase.execute(start);
        const end: Date = new Date(response.end);
        const ttl = parseFloat(response.ttl.split(" ")[0]);

        expect(response).toHaveProperty("start");
        expect(response).toHaveProperty("end");
        expect(response).toHaveProperty("ttl");
        expect(response).toHaveProperty("message");
        expect(response.message).toBe("Pong!");
        expect(start <= end).toBe(true);
        expect(ttl >= 0).toBe(true);
    });
});
```

---

## Apoie o projeto

Expresso TS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas