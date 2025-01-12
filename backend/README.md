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
method: `POST`

URL: "http://127.0.0.1:5000/api/transactions/add_transactions"

Body: Select `raw` and `JSON` format, then input:
```
{
    "user_id": 5,
    "type": "credit",
    "category": "salary",
    "amount": 5000,
    "description": "Monthly Salary"
}
```

### For displaying balance
method: `GET`

URL: "http://127.0.0.1:5000/api/transactions/get_balance?user_id=5"

### For what-if scenerios
method: `POST`

URL: "http://127.0.0.1:5000/api/transactions/add_transactions"

Body: Select `raw` and `JSON` format, then input:
```
{
    "user_id": 5,
    "question": "How can I save 1000 rs in 6 months?"
}
```
