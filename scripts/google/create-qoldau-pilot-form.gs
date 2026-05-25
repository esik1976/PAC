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
    .setTitle("Когда впервые поняли, что нужна помощь?")
    .setChoiceValues([
      "В течение последнего месяца",
      "1-3 месяца назад",
      "3-6 месяцев назад",
      "Больше 6 месяцев назад",
      "Не применимо, я специалист или центр",
    ])
    .setRequired(true);

  form
    .addCheckboxItem()
    .setTitle("Что уже пробовали делать?")
    .setChoiceValues([
      "Обращались в поликлинику или к врачу",
      "Проходили ПМПК",
      "Искали специалиста через знакомых",
      "Искали специалиста в Instagram или соцсетях",
      "Писали в частный центр",
      "Ходили на консультацию",
      "Пока ничего не делали",
      "Не применимо, я специалист или центр",
    ])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle("Куда обращались за последние 3 месяца?")
    .setHelpText(
      "Можно указать тип места без названий и документов: поликлиника, частный центр, логопед, психолог, ABA-специалист, фонд, другое."
    )
    .setRequired(false);

  form
    .addMultipleChoiceItem()
    .setTitle("Удалось ли записаться на консультацию?")
    .setChoiceValues([
      "Да, уже записались",
      "Да, уже сходили",
      "Нет, пока ищем",
      "Нет, не получилось выбрать",
      "Нет, дорого или нет мест",
      "Не применимо, я специалист или центр",
    ])
    .setRequired(true);

  form
    .addCheckboxItem()
    .setTitle("Что было самым сложным?")
    .setChoiceValues([
      "Понять, куда обращаться первым шагом",
      "Найти проверенного специалиста",
      "Понять, кому можно доверять",
      "Найти свободное время или место",
      "Понять стоимость и условия",
      "Получить понятные рекомендации",
      "Собрать документы",
      "Другое",
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Платили ли уже за консультации или занятия?")
    .setChoiceValues([
      "Да, за консультацию",
      "Да, за занятия",
      "Да, за диагностику или оценку",
      "Нет, пока не платили",
      "Не хочу отвечать",
      "Не применимо, я специалист или центр",
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Что было бы самым полезным сейчас?")
    .setChoiceValues([
      "Понять первый шаг",
      "Получить 1-3 проверенных варианта",
      "Чтобы помогли записаться",
      "Понять, какой специалист нужен",
      "Найти центр рядом",
      "Я специалист или центр и хочу получать подходящие заявки",
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Готовы ли рассмотреть платную помощь с навигацией?")
    .setChoiceValues([
      "Да, если будет понятный результат",
      "Возможно, зависит от стоимости",
      "Нет, ищу только бесплатные варианты",
      "Скорее должен платить центр или специалист",
      "Не применимо, я специалист или центр",
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Какой формат оплаты кажется справедливым?")
    .setChoiceValues([
      "Небольшая оплата за подбор",
      "Оплата только если удалось записаться",
      "Комиссия от специалиста или центра",
      "Бесплатно для семьи",
      "Затрудняюсь ответить",
      "Не применимо, я специалист или центр",
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Можно ли написать вам для уточнения?")
    .setChoiceValues(["Да", "Нет", "Только если понадобится для подбора"])
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
    values["Когда впервые поняли, что нужна помощь?"] || "",
    joinValue_(values["Что уже пробовали делать?"]),
    values["Куда обращались за последние 3 месяца?"] || "",
    values["Удалось ли записаться на консультацию?"] || "",
    joinValue_(values["Что было самым сложным?"]),
    values["Платили ли уже за консультации или занятия?"] || "",
    values["Что было бы самым полезным сейчас?"] || "",
    values["Готовы ли рассмотреть платную помощь с навигацией?"] || "",
    values["Какой формат оплаты кажется справедливым?"] || "",
    values["Можно ли написать вам для уточнения?"] || "",
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
    "Когда нужна помощь",
    "Что уже пробовали",
    "Куда обращались",
    "Удалось ли записаться",
    "Что было сложным",
    "Платили ли уже",
    "Самое полезное сейчас",
    "Готовность к платной навигации",
    "Предпочтительная оплата",
    "Можно уточнить",
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

function joinValue_(value) {
  if (Array.isArray(value)) {
    return value.join(", ");
  }
  return value || "";
}

function getFormValues_(response) {
  const values = {};
  response.getItemResponses().forEach((itemResponse) => {
    values[itemResponse.getItem().getTitle()] = itemResponse.getResponse();
  });
  return values;
}
