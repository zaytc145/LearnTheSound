# Chat

Chat

- **displayName** - Chat

## Data

| Name        | Type     | Description | Initial value                                                                                                    |
| ----------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| `messages`  | `array`  |             | `[]`                                                                                                             |
| `isLoading` | `object` |             | `{"send":{"type":"boolean","value":false,"raw":"false"},"fetch":{"type":"boolean","value":false,"raw":"false"}}` |
| `message`   | `string` |             | `""`                                                                                                             |

## Computed Properties

| Name             | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| `mappedMessages` | Установка положения сообщений<br/>**Dependencies:** `messages`, `user` |
| `user`           | Получение данных пользователя<br/>**Dependencies:** `$store`           |

## Methods

### fetchMessages()

Получение списка сообщений

**Syntax**

```typescript
fetchMessages(): void
```

### sendMessage()

Отправка сообщения

**Syntax**

```typescript
sendMessage(): void
```

### scrollToBottom()

Скролл в нижнюю часть контейнера

**Syntax**

```typescript
scrollToBottom(): void
```

### getFullName()

Получение полного имени пользователя

**Syntax**

```typescript
getFullName(user: unknow): unknow
```

