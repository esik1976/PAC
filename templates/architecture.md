# Architecture

## High-level architecture

```mermaid
flowchart TD
    User["User"] --> Frontend["Frontend"]
    Frontend --> API["Backend API"]
    API --> DB["Database"]
    API --> External["External Services"]
```

## Components

| Component | Responsibility | Technology |
|---|---|---|
| Frontend | TBD | TBD |
| Backend API | TBD | TBD |
| Database | TBD | TBD |

## Data flow

```mermaid
sequenceDiagram
    actor User
    participant FE as Frontend
    participant API as Backend API
    participant DB as Database

    User->>FE: Submit form
    FE->>API: POST request
    API->>DB: Save entity
    DB-->>API: Saved
    API-->>FE: Response
    FE-->>User: Show result
```

## Security

- Auth:
- Authorization:
- Secrets:
- Sensitive data:

## Deployment

- Environment:
- Hosting:
- Build command:
- Run command:
- Variables:
