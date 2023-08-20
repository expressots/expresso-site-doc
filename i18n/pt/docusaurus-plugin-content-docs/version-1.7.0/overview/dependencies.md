---
sidebar_position: 12
---

# Dependências

O propósito desta seção é listar todas as dependências usadas pelo ExpressoTS e nossa visão sobre o gerenciamento de dependências.

## Gestão de dependências

Sabemos que ter dependências acelera o processo de desenvolvimento, mas também aumenta a complexidade do projeto e o custo de manutenção. Além disso, outro aspecto que consideramos é o risco de segurança que uma dependência pode trazer para o projeto.

Nosso objetivo é manter o número de dependências o mais baixo possível, tentando usar apenas as que são realmente necessárias e que não fazem parte dos mecanismos principais do framework ExpressoTS. Com isso em mente, temos em nosso Roadmap algumas dependências que gostaríamos de substituir por nossa própria implementação. Mais notícias em breve.

Enquanto isso, vamos continuar monitorando de perto as dependências, utilizando ferramentas como o **[Dependabot](https://dependabot.com/)** para mantê-las atualizadas e também utilizando ferramentas como o **[Snyk](https://snyk.io/)** para ficar de olho nos riscos de segurança.

## Pacotes Utilitários

- @commitlint/cli: Lint mensagens de commit
- @commitLint/config-conventional: Lint mensagens de commit
- @release-it/conventional-changelog: Gera changelog
- chalk: Estilo para terminal
- dotenv: Carregar variáveis de ambiente
- husky: Git hooks
- prettier: Formatador de códigos
- eslint: Linting code
- ts-node-dev: Executa arquivos de typescript
- tsconfig-paths: Resolve caminhos através do tsconfig.json

## Pacotes Core

- express: Servidor Http
- inversify: IoC container
- inversify-express-utils: Integração do inversify para o Express
- inversify-binding-decorators: Decoradores do inversify
- winston: Lib de log
- reflect-metadata: Polyfill para metadados e reflexão

## Teste

- jest: Framework de teste
- ts-jest: Suporte para typescript no jest

---

## Apoie o projeto

ExpressoTS é um projeto de código aberto licenciado sob o MIT. É um projeto independente com desenvolvimento contínuo possibilitado graças ao seu suporte. Se você deseja ajudar, por favor considere:

- Se tornar um **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Siga a **[organização](https://github.com/expressots)** no GitHub e de um Star ⭐ no projeto
- Subscreva no nosso canal na Twitch: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Entre no nosso **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribua submetendo **[issues e pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Compartilhe o projeto com seus amigos e colegas