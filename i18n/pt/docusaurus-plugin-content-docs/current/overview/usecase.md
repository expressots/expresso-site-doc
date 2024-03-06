---
sidebar_position: 7
---

# Casos de Uso

Do ponto de vista da UML, os casos de uso fornecem uma maneira de modelar as interações entre usuários, outros sistemas e um aplicativo de software. Um caso de uso descreve um cenário específico ou fluxo de eventos entre os atores e o sistema, levando a um determinado resultado.

No contexto do ExpressoTS, os casos de uso servem para representar a lógica de negócios da aplicação, permitindo uma clara separação entre o controlador e a execução da solicitação.

## Nós recomendamos

Apesar de você poder usar qualquer padrão de design que desejar como **[MVC](controller.md#a-mvc-approach)**, no template opinativo do ExpressoTS reforçamos o uso da **[Arquitetura Limpa](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)** e **[princípios SOLID](https://medium.com/backticks-tildes/the-s-o-l-i-d-princípios-em-imagens-b34ce2f1e898)**. Acreditamos que essa abordagem ajudará você a criar um aplicativo mais sustentável e escalável.

É uma prática recomendada ter um caso de uso por controlador, sendo o controlador responsável por chamar o caso de uso correspondente que irá implementar a lógica de negócios da solicitação. A carga útil da solicitação, também conhecida como DTO de solicitação no ExpressoTS, contém as informações necessárias para executar o caso de uso.

Um caso de uso no ExpressoTS contém apenas a lógica de negócios da aplicação, mantendo-a separada da lógica do controlador. É comum ter DTOs de resposta como parte do caso de uso, definindo o formato de resposta da solicitação. O caso de uso normalmente contém uma única função chamada "execute", responsável por executar a lógica desse caso de uso específico.

:::tip
Vale ressaltar que ter vários casos de uso implementados em uma única classe viola o princípio da responsabilidade única e deve ser evitado.
:::

## Exemplo

Aqui está um exemplo de diagrama de casos de uso para um projeto x:

![Projeto X Diagrama de Caso de Uso](./img/use-case-project-x.png)

Na diagrama de caso de uso acima, o ator representa o usuário interagindo com o sistema. Para executar o caso de uso de login, o usuário deve fornecer informações específicas conhecidas como payload ou, no caso do ExpressoTS, o DTO de solicitação. Essas informações são necessárias para acionar o caso de uso e para o sistema fornecer o resultado desejado.

É importante observar que o caso de uso deve conter exclusivamente a lógica de negócios da aplicação, sem funcionalidades adicionais ou não relacionadas. Essa abordagem ajuda a garantir uma clara separação de preocupações, promovendo a manutenibilidade e escalabilidade do sistema.

Aqui está nossa implementação simples do caso de uso no ExpressoTS:

```typescript
@provide(LoginUserUseCase)
class LoginUserUseCase {
    execute(payload: ILoginUserRequestDTO): boolean {
        const { email, password } = payload;

        if (isAuthenticated(email, password)) {
            return true;
        }

        return false;
    }
}

export { LoginUserUseCase };
```

## Explicação

A implementação de casos de uso no ExpressoTS segue as melhores práticas de design de software, em que cada caso de uso é responsável por implementar uma lógica de negócios específica. Como mostrado no exemplo de código, um caso de uso geralmente contém apenas uma função, chamada execute, que é responsável por executar a lógica de negócios definida naquele caso de uso. O caso de uso também pode incluir um DTO de resposta que define o formato da resposta para aquele caso de uso específico.

Além disso, é comum usar construtores nos casos de uso para injetar dependências, como provedores e repositórios. Isso permite uma melhor modularidade e testabilidade do código.

### Injeção de construtor

Com o sistema ExpressoTS **[Dependency Injection](di.md)** podemos usar o construtor nos casos de uso para injetar dependências, como provedores, repositórios, entidades ou qualquer outra classe auxiliar necessária para entregar a resposta do caso de uso. Isso permite uma melhor modularidade e testabilidade do código.

Aqui está um exemplo de um caso de uso com injeção de construtor:

```typescript
class ExampleUseCase {
    constructor(private yourInjection1: Injection1, private yourInjection2: Injection2) {}

    execute() {
        this.yourInjection1.foo();
        this.yourInjection2.bar();
    }
}
```

:::info
É importante aderir ao princípio da responsabilidade única ao implementar casos de uso. Cada caso de uso deve lidar apenas com uma lógica de negócios específica, e se você se encontrar implementando vários casos de uso em uma única classe, é hora de revisar sua implementação para garantir que cada caso de uso tenha uma responsabilidade clara e concisa.
:::

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

-   Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
-   Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
-   Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Compartilhe o projeto com seus amigos e colegas
