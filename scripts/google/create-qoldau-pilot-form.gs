function createQoldauPilotForm() {
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
    .addMultipleChoiceItem()
    .setTitle("Удобный канал связи")
    .setChoiceValues(["WhatsApp", "Телефон", "Email"])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Возрастная группа ребенка")
    .setChoiceValues([
      "До 3 лет",
      "3-6 лет",
      "7-10 лет",
      "11 лет и старше",
      "Не применимо, я специалист или центр",
    ])
    .setRequired(true);

  form
    .addCheckboxItem()
    .setTitle("Какая помощь нужна?")
    .setChoiceValues([
      "Понять, куда обращаться первым шагом",
      "Найти специалиста",
      "Найти центр",
      "Записаться на первичную консультацию",
      "Получить рекомендации по дальнейшему маршруту",
      "Я специалист или центр и хочу попасть в список проверенных контактов",
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle("Предпочитаемый язык общения")
    .setChoiceValues(["Русский", "Казахский", "Русский или казахский"])
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle("Коротко опишите запрос без чувствительных данных")
    .setHelpText(
      "Не указывайте ИИН, ФИО ребенка, диагнозы, медицинские документы и подробную медицинскую историю."
    )
    .setRequired(false);

  form
    .addCheckboxItem()
    .setTitle("Согласие на связь")
    .setChoiceValues([
      "Я согласен/согласна, чтобы со мной связались по этой заявке. Я понимаю, что эта форма не заменяет консультацию врача и не предназначена для передачи медицинских документов.",
    ])
    .setRequired(true);

  const spreadsheet = SpreadsheetApp.create(
    "Qoldau Autism Care - заявки на пилот"
  );
  form.setDestination(
    FormApp.DestinationType.SPREADSHEET,
    spreadsheet.getId()
  );

  const processingSheet = spreadsheet.insertSheet("Lead processing");
  processingSheet.appendRow([
    "Статус",
    "Назначенный оператор",
    "Кому предложили обратиться",
    "Дата первого контакта",
    "Дата консультации",
    "Результат",
    "Следующий шаг",
    "Комментарий",
  ]);

  Logger.log("Published form URL: " + form.getPublishedUrl());
  Logger.log("Edit form URL: " + form.getEditUrl());
  Logger.log("Responses spreadsheet URL: " + spreadsheet.getUrl());
}
