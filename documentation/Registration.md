# Registration

Registration

- **displayName** - Registration

## Data

| Name    | Type     | Description | Initial value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `form`  | `object` |             | `{"fName":{"type":"string","value":"","raw":"\"\""},"sName":{"type":"string","value":"","raw":"\"\""},"email":{"type":"string","value":"","raw":"\"\""},"password":{"type":"string","value":"","raw":"\"\""}}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `rules` | `object` |             | `{"fName":{"type":"array","value":"[ { required: true, message: \"Please input you're first name\", trigger: \"blur\" } ]","raw":"[ { required: true, message: \"Please input you're first name\", trigger: \"blur\" } ]"},"sName":{"type":"array","value":"[ { required: true, message: \"Please input you're second name\", trigger: \"blur\" } ]","raw":"[ { required: true, message: \"Please input you're second name\", trigger: \"blur\" } ]"},"email":{"type":"array","value":"[ { required: true, message: \"Please input email\", trigger: \"blur\" } ]","raw":"[ { required: true, message: \"Please input email\", trigger: \"blur\" } ]"},"password":{"type":"array","value":"[ { required: true, message: \"Please input password\", trigger: \"blur\" } ]","raw":"[ { required: true, message: \"Please input password\", trigger: \"blur\" } ]"}}` |

## Methods

### submitForm()

Валидация и вызов действия регистрации

**Syntax**

```typescript
submitForm(formName: string): void
```

### signup()

Регистрация

**Syntax**

```typescript
signup(): void
```

