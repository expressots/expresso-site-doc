---
sidebar_position: 11
---

# Injeção de Dependências

Dependency Injection (DI) é um padrão de design usado no desenvolvimento de software que envolve fornecer a um objeto as instâncias das classes necessárias para executar suas tarefas, em vez de fazer com que ele mesmo construa essas instâncias. Este processo de `fornecer` instâncias é chamado de `injetar` nelas, daí o termo Injeção de Dependência.

## Benefícios do DI

Aqui estão alguns dos principais benefícios do uso da injeção de dependência:

- Desacoplamento: DI ajuda a desacoplar os componentes do seu aplicativo. Em vez de os componentes criarem os objetos dos quais dependem, esses objetos são passados (injetados) por uma estrutura ou contêiner de DI. Isso significa que os componentes não precisam saber sobre o funcionamento interno de suas dependências, e as dependências podem ser trocadas sem que o componente saiba ou se importe.

- Testabilidade: DI facilita o teste de unidade. Como as dependências são injetadas, você pode facilmente fornecer objetos fictícios durante o teste. Isso permite que cada unidade de código seja testada isoladamente, com controle total sobre suas dependências.

- Código reutilizável: com DI, suas classes são normalmente projetadas para funcionar com interfaces em vez de classes concretas. Isso significa que você pode reutilizar a mesma classe em diferentes contextos, com diferentes dependências injetadas.

- Manutenção mais fácil e maior eficiência: centralizando a criação de objetos e reduzindo a quantidade de instanciação de classe codificada, a manutenção se torna mais fácil. Quando uma classe muda, normalmente você só precisa atualizar o código em um lugar.

- Configurabilidade: Você pode configurar sua estrutura de aplicação externamente, normalmente através de XML ou arquivos similares. Isso significa que você pode modificar a estrutura e as dependências de seus componentes sem precisar modificar o próprio código.

- Ciclos de vida e escopo: gerencie o ciclo de vida de objetos injetados e controle seu escopo (por exemplo, escopo singleton, escopo de solicitação).

- Gerenciamento de simultaneidade: os contêineres podem lidar automaticamente com tempos de vida de serviço em um ambiente simultâneo, o que pode ser uma tarefa complexa para lidar corretamente sem essa ferramenta.

Em conclusão, DI é uma técnica que facilita o acoplamento fraco, maior capacidade de teste e código mais flexível e de fácil manutenção.

## DI no ExpressoTS

Aqui está como o ExpressoTS implementa DI:

![Application Overview](./img/di.png)

## Divisão dos componentes DI

Aqui está uma análise dos componentes DI usados no ExpressoTS:

| Componentes   | Descrição                                            |
| ------------ | ------------------------------------------------------------------------------------------------- |
| Container    | O container DI do aplicativo ExpressoTS.                                                   |
| Module       | Um módulo de contêiner é normalmente usado para agrupar controladores relacionados e suas dependências. |
| Controller   | Interface primária entre o cliente e o servidor. Responsável por lidar com as solicitações recebidas.          |
| Classes      | Qualquer outra classe que faça parte do ecossistema ExpressoTS, por exemplo, fornecedores, entidades, ajudantes, etc.  |

### Resumo

- O contêiner tem seu escopo padrão que pode ser substituído pelo módulo. O escopo padrão é o escopo `Request`.
- Definir um escopo para um módulo força todos os controladores desse módulo a terem o mesmo escopo.
- Não definir um escopo para um módulo permite que os controladores tenham seu próprio escopo usando o decorador `@scope()`.
- Todas as outras classes cadastradas como provedores, entidades, helpers podem ter seu escopo específico baseado no decorador utilizado.
- Decoradores:

| Decoradores          | Descrição                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| @provide           | Vincula uma classe a um contêiner de injeção de dependência como RequestScope.             |
| @provideSingleton  | Vincula uma classe a um contêiner de injeção de dependência como Singleton.                |
| @provideTransient  | Vincula uma classe a um contêiner de injeção de dependência como Transient.                |

### Container

O contêiner é o principal componente do sistema DI. Ele é responsável por gerenciar o ciclo de vida dos objetos que cria e por injetar dependências nesses objetos.

O escopo padrão do contêiner é o escopo `Request`. Isso significa que o contêiner criará uma nova instância de uma classe para cada solicitação. Para obter mais informações sobre **[Contêineres](app-container.md)**, consulte a seção de contêineres do aplicativo.

### Módulos

Um módulo contêiner é usado para organizar controladores relacionados e suas dependências e unidades coerentes. Os módulos também podem ter sua própria definição de escopo específica. Para obter mais informações sobre os módulos, consulte a seção **[Módulos](module.md)**.

### Controladores

Os controladores são agrupados em módulos que geralmente representam um recurso do aplicativo. Os controladores estão sempre associados a módulos. Se um módulo tiver um escopo específico definido, todos os controladores desse módulo serão criados com o escopo do módulo. Caso o módulo não tenha um escopo definido, ele herda o escopo do container Application, que é o escopo `Request`.

Neste caso particular, controladores individuais podem ter seu próprio escopo definido usando o decorador `@scope()`. Para obter mais informações sobre controladores, consulte a seção **[Controllers](controller.md)**.

### Classes

Qualquer outra classe que faz parte do ecossistema ExpressoTS, por exemplo, provedores, entidades, classes auxiliares, etc são injetadas automaticamente no Application Container através do decorador `@provide()` no qual injeta as classes como `Request` por padrão.

Se você quiser definir um escopo diferente para sua classe, você pode usar o decorador `@provideSingleton()` para injetar a classe como um singleton ou `@provideTransient()` para injetar a classe como transiente.

Exemplo de uso:

#### Request

```typescript
@provide(MyRequest)
class MyRequest { }
```

#### Singleton

```typescript
@provideSingleton(MySingleton)
class MySingleton { }
```

#### Transient

```typescript
@provideTransient(MyTransient)
class MyTransient { }
```

:::tip
Para definir as ligações de escopo, o enum BindingScopeEnum pode ser usado.
:::

- `BindingScopeEnum.Singleton` - A dependência será criada uma vez e será compartilhada entre todas as solicitações.
- `BindingScopeEnum.Request` - A dependência será criada uma vez por solicitação.
- `BindingScopeEnum.Transient` - A dependência será criada toda vez que for solicitada.

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas