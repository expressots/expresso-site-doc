---
sidebar_position: 12
---

# Dependencies

The purpose of this section is to list all dependencies used by ExpressoTS and our vision about dependency management.

## Dependency Management

We know that dependencies accelerate the development process, but it also increases the projects complexity and maintenance cost. Another aspect we consider is the potential security risks that a dependency could bring the project.

Our goal is to keep the number of dependencies as low as possible, using only those that are necessary and not part of our core ExpressoTS framework mechanics. With that in mind, the Roadmap includes some dependencies that we hope to replace by our own implementation. More information will come on this.

For now, we will keep a vigilant watch on included dependencies, using tools like **[Dependabot](https://dependabot.com/)** to keep them up to date and also using tools like **[Snyk](https://snyk.io/)** to monitor the security risks.

## Utilities (Dev Dependencies)

- @commitlint/cli: Lint commit messages
- @commitLint/config-conventional: Lint commit messages
- @release-it/conventional-changelog: Generate changelog
- dotenv: Loads environment variables from .env file
- husky: Git hooks
- prettier: Code formatter
- eslint: Linting code
- ts-node-dev: Typescript runner
- tsconfig-paths: Resolve paths from tsconfig.json

## Core Packages

- express: Http server framework
- inversify: IoC container
- inversify-binding-decorators: Decorators for inversify
- reflect-metadata: Polyfill for metadata reflection API

## Test

- vitest: Testing framework
- vite: Vitest's requirement

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
