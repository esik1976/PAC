# Data Model

## ER diagram

```mermaid
erDiagram
    USER ||--o{ ORDER : creates
    ORDER ||--o{ ORDER_ITEM : contains

    USER {
        uuid id PK
        string email
        string name
        datetime created_at
    }

    ORDER {
        uuid id PK
        uuid user_id FK
        string status
        datetime created_at
    }

    ORDER_ITEM {
        uuid id PK
        uuid order_id FK
        string title
        int quantity
    }
```

## Entities

### EntityName

| Field | Type | Required | Notes |
|---|---|---|---|
| id | uuid | yes | Primary key |

## Indexes

- TBD

## Constraints

- TBD

## Data lifecycle

- Create:
- Update:
- Delete/archive:
