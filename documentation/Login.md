# Login

Login

- **displayName** - Login

## Data

| Name    | Type     | Description | Initial value                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------- | -------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `form`  | `object` |             | `{"email":{"type":"string","value":"","raw":"\"\""},"password":{"type":"string","value":"","raw":"\"\""}}`                                                                                                                                                                                                                                                                                                     |
| `rules` | `object` |             | `{"email":{"type":"array","value":"[ { required: true, message: \"Please input email\", trigger: \"blur\" } ]","raw":"[ { required: true, message: \"Please input email\", trigger: \"blur\" } ]"},"password":{"type":"array","value":"[ { required: true, message: \"Please input password\", trigger: \"blur\" } ]","raw":"[ { required: true, message: \"Please input password\", trigger: \"blur\" } ]"}}` |

## Methods

### submitForm()

Валидация полей и вызов действвия логина

**Syntax**

```typescript
submitForm(formName: string): void
```

### login()

Логин в системе

**Syntax**

```typescript
login(): void
```

