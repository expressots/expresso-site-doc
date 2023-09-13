---
sidebar_position: 3
---

# In Memory DB

In Memory DB is a provider that uses a simple in memory database to store data. It is a class injected in the ExpressoTS dependency injection system as a singleton.

This class manages tables, represented by key-value pairs, where the key is the table name and the value is an array of entities.

The InMemoryDB class provides a simple and efficient way to simulate a database entirely in-memory, which can be particularly useful for testing and rapid development where a full-fledged database might be overkill.

## DB Inspector

Another cool feature added to the InMemoryDB class is the ability to print tables to the console using console.table. This feature is particularly useful for debugging and testing purposes. It can also be used to quickly inspect the contents of a table.

The table content will be printed to the console every time the repository is used by any endpoint that have operations that read or write to the database.

Here is an image showing the output in the console of the InMemoryDB when we create a new user:

![Application Overview](../overview/img/inMemoryDB.png)

:::info
The DB inspector is enabled by default. As soon as you create a new entity and extend the BaseRepository class, the InMemoryDB will print the table to the console.
:::

## Class Definition

Detail explanation of InMemoryDB class definition.

```typescript
@provideSingleton(InMemoryDB)
class InMemoryDB {
  private tables: Record<string, IEntity[]> = {};
  // Method definitions ...
}
```

This decorator indicates that the InMemoryDB class is a Singleton within the dependency injection system.

```typescript
@provideSingleton(InMemoryDB)
```

Class Properties tables is a private property that holds the in-memory tables. Each table is a key-value pair where the key is the table name, and the value is an array of entities (IEntity[]).

```typescript
private tables: Record<string, IEntity[]> = {};
```

## Class Methods

InMemoryDB class provides the following methods:

### Get Table Method

```typescript
getTable(tableName: string): IEntity[]
```

Parameters

- tableName (string): The name of the table to retrieve.
- Returns: IEntity[]: An array of entities stored in the specified table.
- Description: Retrieves a table by its name from the in-memory database. If the table doesn't exist, it initializes an empty table.

### Show Tables Method

```typescript
showTables(): void
```

Description: Prints a list of all existing tables in the in-memory database to the standard output. If no tables exist, it outputs "No tables exist."

### Print Table Method

```typescript
printTable(tableName: string): void
```

Parameters

- tableName (string): The name of the table whose records should be printed.
- Description: Prints all records in a specific table to the console using console.table. If the table doesn't exist or is empty, it notifies the user through standard output.

:::info
In the opinionated template the InMemoryDB is already implemented in the BaseRepository class. You don't need to use it directly.
:::

## How to Extend BaseRepository

Here is a code snippet that shows how to extend the BaseRepository class to implement a custom repository.

```typescript
@provide(UserRepository)
class UserRepository extends BaseRepository<User> {
  constructor() {
    super("users");
  }
}
```

The UserRepository class is a specialized repository tailored for managing User entities. It extends the generic BaseRepository class and sets its table name to "users" upon construction. This class is part of the dependency injection system and is marked by the @provide decorator.

Any custom methods can be added to the UserRepository class. For example, the following code snippet shows how to implement a findByEmail method that searches for a user by email.

```typescript
@provide(UserRepository)
class UserRepository extends BaseRepository<User> {
  constructor() {
    super("users");
  }

  // Custom method implemented for the UserRepository only
  findByEmail(email: string): User | null {
    const user = this.table.find((item) => item.email === email);
    return user || null;
  }
}
```

:::caution SPOILER ALERT
In the future, we plan to extend the repository pattern to support various databases, all easily scaffoldable through our CLI
:::

---

## Support the Project

ExpressoTS is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to your support. If you'd like to help, please consider:

- Become a **[sponsor on GitHub](https://github.com/sponsors/expressots)**
- Follow the **[organization](https://github.com/expressots)** on GitHub and Star ⭐ the project
- Subscribe to the Twitch channel: **[Richard Zampieri](https://www.twitch.tv/richardzampieri)**
- Join our **[Discord](https://discord.com/invite/PyPJfGK)**
- Contribute submitting **[issues and pull requests](https://github.com/expressots/expressots/issues/new/choose)**
- Share the project with your friends and colleagues
