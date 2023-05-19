---
sidebar_position: 12
---

# Dependencies

The purpose of this section is to list all dependencies used by ExpressoTS and our vision about dependency management.

## Dependency management

We know that having dependencies accelerates the development process, but it also increases the project complexity and the maintenance cost. Also, another aspect that we consider is the security risks that a dependency can bring to the project.

Our goal is to keep the number of dependencies as low as possible, trying to use only the ones that are really necessary and not part of our core Expresso TS framework mechanics. With that in mind we have in the Roadmap some of the dependencies that we would like to replace by our own implementation. More news about that soon.

In this meanwhile we will keep watching closely the dependencies, using tools like **[Dependabot](https://dependabot.com/)** to keep them up to date and also using tools like **[Snyk](https://snyk.io/)** to keep an eye of the security risks.

## Utilities

- @commitlint/cli: Lint commit messages
- @commitLint/config-conventional: Lint commit messages
- @release-it/conventional-changelog: Generate changelog
- chalk: Terminal string styling
- dotenv: Loads environment variables from .env file
- husky: Git hooks
- prettier: Code formatter
- eslint: Linting code
- ts-node-dev: Typescript runner
- tsconfig-paths: Resolve paths from tsconfig.json

## Core packages

- express: Http server framework
- inversify: IoC container
- inversify-express-utils: Express integration for inversify
- inversify-binding-decorators: Decorators for inversify
- winston: Logging library
- reflect-metadata: Polyfill for metadata reflection API

## Test

- jest: Testing framework
- ts-jest: Typescript support for jest

---

## Support the project

Expresso TS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on **[Sponsor no GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues