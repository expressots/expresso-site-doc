---
sidebar_position: 9
---

# Repositories

In ExpressoTS, a repository class typically includes methods such as create, update, find, findOne, and delete, which correspond to common CRUD (Create, Read, Update, Delete) operations on the data store. These methods can be implemented using a database library or ORM (Object-Relational Mapping) tool such as **[TypeORM](https://typeorm.io/), [Prisma](https://www.prisma.io/), [Sequelize](https://sequelize.org/),** etc.

## The repository pattern

The repository pattern is a design pattern commonly used in software development that provides a way to abstract the data persistence layer of an application. In TypeScript, this pattern can be implemented using classes that represent repositories, which are responsible for retrieving, storing, updating, and deleting data from a data store, such as a database.

We do offer an example of how to implement a repository pattern in the opinionated template. You can find it directly in the **[repository](https://github.com/expressots/expressots/tree/main/templates/opinionated/src/repositories)** folder of the ExpressoTS application.

## Goal of the repository pattern

The main goal of the repository pattern is to separate business logic from data access logic. This allows developers to write code that is more focused on the business requirements of the application, rather than the technical details of how data is stored and accessed.

## Benefit of using the repository pattern

By using the repository pattern, we can easily swap out the underlying data storage mechanism without affecting the rest of the application. For example, we can switch from using a relational database to a NoSQL database, or even a completely different storage mechanism like a web API, with minimal changes to the rest of the application code. Additionally, the repository pattern can make it easier to test the application, as we can use mock repositories to simulate data storage for testing purposes. Here are some of the benefits of using the repository pattern:

-   Centralization of data access logic: all data access logic is contained within the repository, making it easier to maintain and change the data store implementation without impacting the rest of the application.

-   Abstraction of data store details: the repository provides an abstraction layer that hides the details of how data is stored and accessed, allowing the application to work with data in a more abstract and consistent way.

-   Separation of concerns: the repository separates business logic from data access logic, making the code easier to read, test, and maintain.

-   Improved testability: the repository can be easily mocked or stubbed in unit tests, allowing for more thorough testing of the business logic without needing to connect to a real data store.

Overall, the repository pattern is a powerful tool that can help developers build scalable and maintainable TypeScript applications that are more focused on business requirements and less on technical implementation details.

## Example

We offer an example of a Repository pattern implementation in the opinionated template of ExpressoTS.

:::info
In ExpressoTS, we implement the repository pattern in a specific folder called **"repositories"**, intentionally separated from the **"provider"** folder. We do this to emphasize the difference in repositories and providers, and how decoupling the two could benefit application development.
:::

### Base repository interface

```typescript
interface IEntity {
    Id: string;
}

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
class BaseRepository<T extends IEntity> implements IBaseRepository<T> {
    private readonly DB: T[] = [];

    create(item: T): T | null {
        this.DB.push(item);
        return item;
    }

    update(item: T) {
        this.DB.push(item);
        return item;
    }

    delete(id: string): boolean {
        const index: number = this.DB.findIndex((item) => item.Id === id);

        if (index != -1) {
            this.DB.splice(index, 1);
            return true;
        }
        return false;
    }

    find(id: string): T | null {
        const user = this.DB.find((item) => item.Id === id);
        return user || null;
    }

    findAll(): T[] {
        return this.DB;
    }
}
```

### User repository

```typescript
@provide(UserRepository)
class UserRepository extends BaseRepository<User> {
    constructor() {
        super();
    }
}
```

---

## Support the project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

-   Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
-   Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
-   Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
-   Join our **[Discord](https://discord.com/invite/PyPJfGK)**
-   Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
-   Share the project with your friends and colleagues
