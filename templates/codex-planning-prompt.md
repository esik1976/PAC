# Codex prompt for system analysis

```text
Ты работаешь как системный аналитик и AI-driven архитектор.

Нужно спроектировать fullstack-проект:
[описание идеи]

Сначала не пиши код.

Создай проектную документацию:
1. docs/product-brief.md
2. docs/requirements.md
3. docs/technical-spec.md
4. docs/architecture.md
5. docs/data-model.md
6. docs/integrations.md
7. docs/adr/0001-tech-stack.md
8. docs/roadmap.md
9. docs/task-decomposition.md

Требования к результату:
- требования должны быть проверяемыми;
- roadmap должен быть итерационным;
- задачи должны иметь acceptance criteria;
- стек должен быть обоснован;
- архитектура и модель данных должны содержать Mermaid-диаграммы;
- ADR должен фиксировать контекст, варианты, решение и последствия.

После создания документации дай краткий отчет:
- что создано;
- какие ключевые решения приняты;
- какой первый инкремент реализации.
```
