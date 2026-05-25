const form = document.querySelector("#pilotForm");
const statusNode = document.querySelector("#formStatus");

function readLeads() {
  try {
    return JSON.parse(localStorage.getItem("qoldauPilotLeads") || "[]");
  } catch {
    return [];
  }
}

function saveLead(lead) {
  const leads = readLeads();
  leads.push(lead);
  localStorage.setItem("qoldauPilotLeads", JSON.stringify(leads));
  return leads.length;
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const lead = {
    role: data.get("role"),
    city: data.get("city"),
    contact: data.get("contact"),
    need: data.get("need"),
    createdAt: new Date().toISOString(),
  };

  const total = saveLead(lead);
  form.reset();

  statusNode.textContent = `Заявка сохранена для демо. Всего локальных заявок: ${total}.`;
});
