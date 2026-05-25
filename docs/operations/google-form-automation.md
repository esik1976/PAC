# Google Form Automation

## Цель

Автоматически создать Google Form для пилота Qoldau Autism Care и привязать ответы к Google Sheets.

## Скрипт

Готовый Apps Script находится здесь:

```text
scripts/google/create-qoldau-pilot-form.gs
```

## Как запустить

1. Открыть `https://script.google.com/`.
2. Создать новый проект.
3. Вставить код из `scripts/google/create-qoldau-pilot-form.gs`.
4. Нажать `Run` для функции `createQoldauPilotForm`.
5. Разрешить доступ к Google Forms и Google Sheets.
6. Открыть `Executions` или `Logs` и скопировать:
   - `Published form URL`;
   - `Edit form URL`;
   - `Responses spreadsheet URL`.

## После создания формы

Публичную ссылку `Published form URL` нужно вставить в лендинг:

```text
src/web/landing/app.js
```

В константу:

```js
const GOOGLE_FORM_URL = "PASTE_GOOGLE_FORM_URL_HERE";
```

## Ограничения

Форма специально не собирает:

- ИИН;
- ФИО ребенка;
- точную дату рождения;
- диагнозы;
- медицинские заключения;
- документы и фотографии справок.

## Почему Apps Script

Google Forms API тоже может создавать формы, но он требует отдельной настройки OAuth/API-проекта. Для текущего MVP Apps Script проще: пользователь запускает скрипт в своем Google-аккаунте, а форма и таблица сразу создаются в его Google Drive.
