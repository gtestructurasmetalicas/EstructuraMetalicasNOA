// IMPORTANTE: cambiá este número por el WhatsApp comercial definitivo.
const WHATSAPP_NUMBER = "5493834197342"; // Argentina + código de área, sin +, espacios ni guiones.

function openWhatsApp(message = "Hola, quisiera consultar por sus estructuras metálicas.") {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    openWhatsApp();
  });
});

document.querySelectorAll("[data-model]").forEach(button => {
  button.addEventListener("click", () => {
    openWhatsApp(`Hola, quisiera recibir información y presupuesto para el modelo: ${button.dataset.model}.`);
  });
});

document.getElementById("quoteForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const get = key => (data.get(key) || "").toString().trim();
  const message = [
    "Hola, quisiera solicitar un presupuesto para una estructura metálica.",
    "",
    `Nombre: ${get("nombre")}`,
    `Proyecto: ${get("tipo")}`,
    `Ubicación: ${get("ubicacion")}`,
    `Ancho aproximado: ${get("ancho") || "A definir"} m`,
    `Largo aproximado: ${get("largo") || "A definir"} m`,
    `Detalles: ${get("detalles") || "A conversar"}`
  ].join("\n");
  openWhatsApp(message);
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
