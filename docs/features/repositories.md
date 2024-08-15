---
sidebar_position: 9
---

# Repositories

The repository pattern in ExpressoTS provides an abstraction layer for data access, encapsulating CRUD (Create, Read, Update, Delete) operations within repository classes. These repositories act as intermediaries between the business logic and data mapping layers, using ORMs like **[TypeORM](https://typeorm.io/), [Prisma](https://www.prisma.io/) or [Sequelize](https://sequelize.org/)** to interact with the database.

## Understanding the repository pattern

A repository pattern is a design strategy that abstracts data persistence, allowing business logic to be agnostic of the underlying database technology or schema. ExpressoTS utilizes this pattern to facilitate maintainability and scalability.

## Goals and benefits

The main goal of the repository pattern is to separate business logic from data access logic. This allows developers to write code that is more focused on the business requirements of the application, rather than the technical details of how data is stored and accessed.

-   **Separation of Concerns**: It decouples business logic from data access logic, enabling developers to focus on business rules without worrying about database operations.
-   **Maintainability**: Centralizes data access logic within repositories, simplifying maintenance and updates to data storage implementations.
-   **Abstraction**: Hides the complexities of the data layer from the rest of the application, providing a simplified and consistent interface for data operations.
-   **Testability**: Makes testing easier by allowing the use of mock repositories or in-memory databases to simulate data persistence.

## Repository pattern implementation example

In the following example, we will create a simple repository pattern implementation using TypeScript. We will define a base repository interface and class, as well as a concrete repository class for a `User` entity.

### Base repository interface

```typescript
interface IBaseRepository<T> {
    create(item: T): T | null;
    update(item: T): T | null;
    delete(id: string): boolean;
    find(id: string): T | null;
    findAll(): T[];
}
```

### Base repository class

```typescript
@provide(BaseRepository)
class BaseRepository<T> implements IBaseRepository<T> {
    // Implement the interface methods here
}
```

### Specific repository class

```typescript
@provide(UserRepository)
class UserRepository extends BaseRepository<User> {}
```

The above example demonstrates the simplicity of creating a base repository that can be extended for specific entities like `User`.

## Repositories vs providers

While repositories focus on data interaction, providers in ExpressoTS typically offer functionalities such as environment validation or logging. Keeping repositories and providers distinct ensures clean separation and adheres to the single responsibility principle.

:::info
In ExpressoTS, repositories are housed within a dedicated "repositories" folder, distinguishing them from the "providers" folder. This structural choice emphasizes their distinct roles and facilitates a modular codebase.
:::

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

-   Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
-   Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
-   Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Join our **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Share the project with your friends and colleagues
