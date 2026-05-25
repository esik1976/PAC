const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScLvorozd1QUMv_dk-NiU5bwQAXj69-5eyVO9m2REvUzyUbSA/viewform";

const formLink = document.querySelector("#googleFormLink");
const statusNode = document.querySelector("#formStatus");

if (formLink) {
  if (GOOGLE_FORM_URL) {
    formLink.href = GOOGLE_FORM_URL;
    formLink.target = "_blank";
    formLink.removeAttribute("aria-disabled");
    statusNode.textContent = "Заявка откроется в новой вкладке.";
  } else {
    formLink.setAttribute("aria-disabled", "true");
    formLink.addEventListener("click", (event) => {
      event.preventDefault();
      statusNode.textContent =
        "Форма заявки еще не подключена. Создайте форму по спецификации и вставьте ссылку в GOOGLE_FORM_URL.";
    });
  }
}
