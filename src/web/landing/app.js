const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfeIPOzwqfa3gmmqI_r2bGoBEc-j8CNiXp_iBNJLHJhQPp_kg/viewform";

const formLink = document.querySelector("#googleFormLink");
const statusNode = document.querySelector("#formStatus");

if (formLink) {
  if (GOOGLE_FORM_URL) {
    formLink.href = GOOGLE_FORM_URL;
    formLink.target = "_blank";
    formLink.removeAttribute("aria-disabled");
    statusNode.textContent = "Форма откроется в новой вкладке Google Forms.";
  } else {
    formLink.setAttribute("aria-disabled", "true");
    formLink.addEventListener("click", (event) => {
      event.preventDefault();
      statusNode.textContent =
        "Google Form еще не подключена. Создайте форму по спецификации и вставьте ссылку в GOOGLE_FORM_URL.";
    });
  }
}
