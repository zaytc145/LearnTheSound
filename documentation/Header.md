# Header

Header

- **displayName** - Header

## Computed Properties

| Name           | Description                                                          |
| -------------- | -------------------------------------------------------------------- |
| `routes`       | Получение списка маршрутов<br/>**Dependencies:** `$router`, `isAuth` |
| `isAuth`       | Проверка статука авторизации<br/>**Dependencies:** `$store`          |
| `userFullName` | Получение польного имени пользователя<br/>**Dependencies:** `$store` |

## Methods

### logout()

Выход из системы

**Syntax**

```typescript
logout(): void
```

