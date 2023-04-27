---
sidebar_position: 8
---

# Repositories

The repository pattern is a design pattern commonly used in software development that provides a way to abstract the data persistence layer of an application. In TypeScript, this pattern can be implemented using classes that represent repositories, which are responsible for retrieving, storing, updating, and deleting data from a data store, such as a database.

We do offer an example of how to implement a repository patterns in the opinionated template. You can find it using the [CLI tool](https://www.npmjs.com/package/@expressots/cli) or directly in the [templates](https://github.com/expressots/expressots/tree/main/templates) folder of the Expresso TS repository.

The main goal of the repository pattern is to separate the business logic from the data access logic, allowing developers to write code that is more focused on the business requirements of the application, rather than the technical details of how data is stored and accessed.

In Expresso TS, a repository class typically includes methods such as find, findOne, create, update, and delete, which correspond to common CRUD (Create, Read, Update, Delete) operations on the data store. These methods can be implemented using a database library or ORM (Object-Relational Mapping) tool such as TypeORM or Sequelize, etc.

By using a repository, the application can benefit from several advantages, such as:

- Centralization of data access logic: all data access logic is contained within the repository, making it easier to maintain and change the data store implementation without impacting the rest of the application.
- Abstraction of data store details: the repository provides an abstraction layer that hides the details of how data is stored and accessed, allowing the application to work with data in a more abstract and consistent way.
- Separation of concerns: the repository separates the business logic from the data access logic, making the code easier to read, test, and maintain.
- Improved testability: the repository can be easily mocked or stubbed in unit tests, allowing for more thorough testing of the business logic without needing to connect to a real data store.
- Overall, the repository pattern is a powerful tool that can help developers build scalable and maintainable TypeScript applications that are more focused on business requirements and less on technical implementation details.

We offer an example of Repository pattern implementation in the opinionated template of Expresso TS.

:::note
In Expresso TS, we implement the repository pattern in a specific folder called "repository", which is separated from the "provider" folder even though it could be considered as a type of provider. We did this to give more emphasis to the repository pattern and make it clear to developers that it should be used in the application.

By using the repository pattern, we can easily swap out the underlying data storage mechanism without affecting the rest of the application. For example, we can switch from using a relational database to a NoSQL database, or even a completely different storage mechanism like a web API, with minimal changes to the rest of the application code. Additionally, the repository pattern can make it easier to test the application, as we can use mock repositories to simulate data storage for testing purposes.
:::

Here a code example of a simple repository implementation:

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

@provide(BaseRepository)
class BaseRepository<T extends IEntity> implements IBaseRepository<T> {
  private readonly USERDB: T[] = [];

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

---

## Support the project

Expresso TS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a sponsor on GitHub (work in progress)
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our [Discord](https://discord.com/invite/PyPJfGK)
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues