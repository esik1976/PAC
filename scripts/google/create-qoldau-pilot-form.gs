function createQoldauPilotForm() {
  const spreadsheet = SpreadsheetApp.create(
    "Qoldau Autism Care - заявки на пилот"
  );
  setupLeadsSheet_(spreadsheet);

  const form = FormApp.create("Qoldau Autism Care - заявка на пилот");
  form.setDescription(
    [
      "Оставьте заявку, если хотите получить ручную помощь с поиском подходящего специалиста или центра для ребенка с особенностями развития.",
      "",
      "Не указывайте ИИН, ФИО ребенка, точную дату рождения, диагнозы, медицинские заключения и не загружайте документы.",
      "Форма нужна только для первичной связи и понимания запроса.",
    ].join("\n")
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage(
    "Спасибо. Мы получили заявку и свяжемся с вами по указанному контакту."
  );

  form
    .addMultipleChoiceItem()
    .setTitle("Кто вы?")
    .setChoiceValues([
      "Родитель или законный представитель",
      "Специалист",
      "Центр или клиника",
      "Фонд или партнер",
    ])
    .setRequired(true);

  form
    .addTextItem()
    .setTitle("Город")
    .setHelpText("Например: Астана")
    .setRequired(true);

  form
    .addTextItem()
    .setTitle("Контакт для связи")
    .setHelpText("Телефон, WhatsApp или email")
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle("Главная боль")
    .setHelpText(
      "Коротко опишите, что сейчас нужно решить. Не указывайте ИИН, ФИО ребенка, диагнозы, медицинские документы и подробную медицинскую историю."
    )
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Готов к интервью?")
    .setChoiceValues(["Да", "Нет", "Можно написать в WhatsApp"])
    .setRequired(true);

  form
    .addCheckboxItem()
    .setTitle("Согласие на связь")
    .setChoiceValues([
      "Я согласен/согласна, чтобы со мной связались по этой заявке. Я понимаю, что эта форма не заменяет консультацию врача и не предназначена для передачи медицинских документов.",
    ])
    .setRequired(true);

  form.setDestination(
    FormApp.DestinationType.SPREADSHEET,
    spreadsheet.getId()
  );
  PropertiesService.getScriptProperties().setProperty(
    "QOLDAU_LEADS_SPREADSHEET_ID",
    spreadsheet.getId()
  );
  ScriptApp.newTrigger("handleQoldauPilotFormSubmit")
    .forForm(form)
    .onFormSubmit()
    .create();

  Logger.log("Published form URL: " + form.getPublishedUrl());
  Logger.log("Edit form URL: " + form.getEditUrl());
  Logger.log("Responses spreadsheet URL: " + spreadsheet.getUrl());
  Logger.log("Processing sheet name: Leads");
}

function handleQoldauPilotFormSubmit(event) {
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty(
    "QOLDAU_LEADS_SPREADSHEET_ID"
  );
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const leadsSheet = setupLeadsSheet_(spreadsheet);
  const values = getFormValues_(event.response);

  leadsSheet.appendRow([
    new Date(),
    values["Кто вы?"] || "",
    values["Город"] || "",
    values["Контакт для связи"] || "",
    values["Главная боль"] || "",
    values["Готов к интервью?"] || "",
    "Новая",
    "",
    "",
  ]);
}

function setupLeadsSheet_(spreadsheet) {
  const sheetName = "Leads";
  const headers = [
    "Дата",
    "Роль",
    "Город",
    "Контакт",
    "Главная боль",
    "Готов к интервью",
    "Статус",
    "Следующее действие",
    "Заметки оператора",
  ];

  const existingSheet = spreadsheet.getSheetByName(sheetName);
  const sheet = existingSheet || spreadsheet.insertSheet(sheetName, 0);
  const currentHeaders = sheet
    .getRange(1, 1, 1, headers.length)
    .getValues()[0];

  if (currentHeaders.join("") === "") {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, headers.length);
  }

  return sheet;
}

function getFormValues_(response) {
  const values = {};
  response.getItemResponses().forEach((itemResponse) => {
    values[itemResponse.getItem().getTitle()] = itemResponse.getResponse();
  });
  return values;
}
