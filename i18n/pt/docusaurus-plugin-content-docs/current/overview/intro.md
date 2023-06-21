---
sidebar_position: 0
---

# Introdução

ExpressoTS é um framework super leve desenvolvido em TypeScript para construir aplicativos escaláveis, legíveis e mantidos no lado do servidor.
O framework fornece um nível de abstração em cima de frameworks comuns como o servidor HTTP **[Express](https://expressjs.com/)** expondo suas APIs diretamente para o desenvolvedor. Isso proporciona liberdade e traz para ao desenvolvedor uma ferramenta que é bem conhecida e fácil de usar.

## Filosofia

O Expresso TS é um framework amigável ao desenvolvedor, projetado para simplificar o processo de construção de aplicativos do lado do servidor. Com foco em legibilidade, manutenibilidade e escalabilidade, o Expresso TS tem como objetivo simplificar o processo de desenvolvimento, fornecendo uma estrutura clara e concisa.

Os dias de tarefas tediosas de configuração, como desenvolver mecanismos de log, lidar com autenticação e se conectar a bancos de dados, já se foram. Com o Expresso TS, os desenvolvedores podem se concentrar no que realmente importa, escrever código. O framework cuida dos aspectos repetitivos e demorados do desenvolvimento, permitindo que os desenvolvedores trabalhem de forma mais eficiente.

Uma das principais características do Expresso TS é sua arquitetura flexível e extensível. O framework fornece um sistema de **[Injeção de Dependências](di.md)** simples, mas poderoso, que permite aos desenvolvedores estender sua funcionalidade rapidamente, criando e adicionando provedores com seu escopo obrigatório específico, como `Transient, Scoped, Singleton`. Isso permite que os desenvolvedores integrem novos recursos em toda a aplicação sem se preocupar com as complexidades da integração.

Se estiver construindo uma API simples ou um aplicativo empresarial complexo, o Expresso TS pode ajudá-lo a entregar seu projeto no prazo e dentro do orçamento. Com um conjunto abrangente de ferramentas e recursos, o Expresso TS torna fácil construir aplicativos do lado do servidor de alta qualidade, escaláveis e de fácil manutenção.

## Instalação

Para começar um novo projeto ExpressoTS, você tem duas opções: criar um novo projeto usando a [ExpressoTS CLI](../cli/overview.md) ou clonar o projeto inicial do GitHub. Embora ambos os métodos produzam o mesmo resultado, recomendamos usar o Expresso CLI para criar um novo projeto, pois oferece uma experiência mais simplificada.

### Usando a CLI

Para criar um novo projeto usando o ExpressoTS CLI, basta executar os seguintes comandos. O CLI solicitará algumas informações e em seguida criará um novo diretório de projeto com o nome que você fornecer, junto com o pacote @expressots/core e uma estrutura de projeto inicial.

```bash
npm i -g @expressots/cli
expressots new <nome-do-projeto>
```

Ou você pode criar projetos sem passar pelas questões da CLI, passando o nome do modelo (opinativo ou não opinativo) e o gerenciador de pacotes (npm, yarn ou pnpm) como argumentos.

```bash
expressots new <nome-do-projeto> -t <template> -p <gerenciador-de-pacotes>
```

:::tip
ExpressoTS oferece duas opções de projetos iniciais: opinativos e não opinativos. 

- Use o projeto inicial não opinativo para projetos simples com apenas os requisitos mínimos. 
- Escolha o projeto inicial opinativo para projetos mais complexos com um ponto de partida completo.
:::

### Clonando o projeto inicial

Para instalar o projeto inicial do TypeScript com o Git, execute os seguintes comandos:

```bash
# projeto inicial não opinativo
git clone --sparse https://github.com/expressots/expressots.git templates/non_opinionated --filter=blob:none 
```

```bash
# projeto inicial opinativo
git clone --sparse https://github.com/expressots/expressots.git templates/opinionated --filter=blob:none 
```

### Acessando seu projeto

Depois de criar seu projeto, você pode acessá-lo executando o seguinte comando:

```bash
cd <seu-projeto> 
```

### Instalar as dependências

```bash
npm install
```

### Executando em modo de desenvolvimento

```bash
npm run dev
```

### Gerando compilação de produção

```bash
npm run build
```

### Executando em modo de produção

```bash
npm run prod
```

:::note
Observe que a opção `--sparse` requer que o Git esteja instalado na versão 2.25 ou superior para funcionar corretamente.
:::

---

## Apoie o projeto

Expresso TS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas