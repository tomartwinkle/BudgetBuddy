# Budget Buddy Backend

## Test prompts

### For user signup
method: `POST`

URL: "http://127.0.0.1:5000/api/users/signup"

Body: Select `raw` and `JSON` format, then input:
```
{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "password": "securepassword123"
}
```

### For user login
method: `POST`

URL: "http://127.0.0.1:5000/api/users/login"

Body: Select `raw` and `JSON` format, then input:
```
{
    "email": "jane@example.com",
    "password": "securepassword123"
}
```

### For adding transactions

### For displaying balance

### For what-if scenerios
