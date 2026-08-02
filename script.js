// Actualiza el reloj de la portada con la hora actual.
function actualizarHora() {
  const reloj = document.getElementById("reloj");
  if (!reloj) return;

  const ahora = new Date();
  const horas24 = ahora.getHours();
  const horas = ((horas24 + 11) % 12 + 1).toString().padStart(2, "0");
  const minutos = ahora.getMinutes().toString().padStart(2, "0");
  const segundos = ahora.getSeconds().toString().padStart(2, "0");
  const ampm = horas24 >= 12 ? "PM" : "AM";

  reloj.textContent = `${horas}:${minutos}:${segundos} ${ampm}`;
}

setInterval(actualizarHora, 1000);
window.onload = actualizarHora;

// Lista de imágenes que pueden usarse como hero diario.
const heroImageSources = [
  "../img/home by Peter Aldington.jpg",
  //"../img/Manuel Esteve Guerrero.jpg",
  //"../img/Leonidas.jpg",
  //"../img/Steve.jpg",
  //"../img/James.jpg",
  //"../img/Libertador.jpg",
  "../img/Messi.jpg",
];

// Precarga las imágenes para que el cambio sea más fluido.
function preloadHeroImages(sources) {
  return sources.map((src) => {
    const image = new Image();
    image.src = src;
    return image;
  });
}

// Elige una imagen distinta según el día, así cambia de forma automática.
function getDailyHeroImageSource() {
  if (!heroImageSources.length) return null;

  const today = new Date();
  const dayIndex = Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000);
  return heroImageSources[dayIndex % heroImageSources.length];
}

// Cambia la imagen visible en la página según la selección del día.
function setDailyHeroImage() {
  const heroImage = document.querySelector(".hero-image");
  if (!heroImage) return;

  const selectedSrc = getDailyHeroImageSource();
  if (!selectedSrc) return;

  heroImage.src = selectedSrc;
}

preloadHeroImages(heroImageSources);

// Configuración para mostrar la hora en formato argentino.
const opciones = {
  timeZone: "America/Argentina/Buenos_Aires",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
};

const reloj = document.getElementById("reloj");
if (reloj) {
  const hora = new Intl.DateTimeFormat("es-ES", opciones).format(new Date());
  reloj.textContent = `${hora} ${new Date().getHours() >= 12 ? "PM" : "AM"}`;
}

// Textos traducidos para el cambio de idioma.
const translations = {
  es: {
    title: "Eduardo Howard Ezequiel Pavon",
    subtitle: "Hora en Argentina:",
    aboutText: "Eduardo Howard Ezequiel Pavón es estudiante de Ingeniería Mecánica y Analista Programador Universitario en la Universidad Nacional de La Plata (UNLP). Su principal interés se centra en el desarrollo de software, la arquitectura de sistemas y las tecnologías de código abierto. Actualmente participa como investigador en el LIFIA (Laboratorio de Investigación y Formación en Informática Avanzada), donde colabora en proyectos vinculados a la informática y la investigación aplicada.",
    blogTitle: "BLOG",
    blogPost1: "Primer video a principios de invierno.",
    blogPost2: "Sup, nuevo blog! Acá voy a ir publicando actualizaciones.",
    blogPostTitle1: "Primer semestre",
    blogPostTitle2: "Blog iniciado",
    contactText: "Contáctame",
    faqTitle: "PREGUNTAS FRECUENTES",
    faqText: "Practicar constantemente, yo todavía lo aplico, pero es lo que me ha dado mejores resultados.",
    faqDetails: "Detalles personales",
    faqAge: "edad",
    faqBirthday: "cumpleaños",
    faqOrigin: "¿de dónde eres?",
    faqMajor: "carrera",
    faqWho: "¿quién eres?",
    faqWhy: "¿por qué empezaste en YouTube?",
    faqStudy: "Estudiar",
    faqStudyAnswer: "Cómo mejorar mis estudios",
    faqThanks: "¡gracias!",
    faqGearQuestion: "¿qué equipo es ese?",
    gearTitle: "EQUIPO",
    gearList: ["Laptop Lenovo ThinkPad", "Samsung Galaxy A14", "Auriculares inalámbricos"],
    footer: "© Howieze 2026",
    navHome: "Inicio",
    navAbout: "Nosotros",
    navBlog: "Blog",
    navProjects: "Proyectos",
    navFaq: "Preguntas",
    navContact: "Contacto",
    homeLink: "Inicio",
    aboutLink: "Acerca de",
    blogLink: "Blog",
    gearLink: "Equipo",
    faqLink: "Preguntas",
    contactLink: "Contacto",
    madeBy: "Hecho por",
  },
  en: {
    title: "Eduardo Howard Ezequiel Pavon",
    subtitle: "Time in Argentina:",
    aboutText: "Eduardo Howard Ezequiel Pavón is a Mechanical Engineering student and a University Programmer Analyst at the National University of La Plata (UNLP). His main interests lie in software development, systems architecture, and open-source technologies. He currently participates as a researcher at LIFIA (Laboratory for Research and Training in Advanced Computing), where he collaborates on projects related to computer science and applied research.",
    blogTitle: "BLOG",
    blogPost1: "First video at the beginning of winter.",
    blogPost2: "Sup, new blog! I will post updates here.",
    blogPostTitle1: "First semester",
    blogPostTitle2: "Blog started",
    contactText: "Contact me by email",
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
    faqText: "Practice constantly, I still apply it, and it is what has given me the best results.",
    faqDetails: "Personal details",
    faqAge: "age",
    faqBirthday: "birthday",
    faqOrigin: "where are you from?",
    faqMajor: "major",
    faqWho: "who are you?",
    faqWhy: "why did you start on YouTube?",
    faqStudy: "Studying",
    faqStudyAnswer: "How to improve my studies",
    faqThanks: "thank you!",
    faqGearQuestion: "what gear is that?",
    gearTitle: "GEAR",
    gearList: ["Lenovo ThinkPad laptop", "Samsung Galaxy A14", "Wireless headphones"],
    footer: "© Howieze 2026",
    navHome: "Home",
    navAbout: "About",
    navBlog: "Blog",
    navProjects: "Projects",
    navFaq: "FAQ",
    navContact: "Contact",
    homeLink: "Home",
    aboutLink: "About",
    blogLink: "Blog",
    gearLink: "Gear",
    faqLink: "FAQ",
    contactLink: "Contact",
    madeBy: "made by"
  }
};

// Por ahora la página empieza en inglés, pero se puede ajustar luego.
function detectPreferredLanguage() {
  return "en";
}

let currentLang = detectPreferredLanguage();

// Aplica los textos correspondientes según el idioma activo.
function setLanguage(lang) {
  currentLang = lang;
  const data = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (data[key]) {
      el.textContent = data[key];
    }
  });

  document.querySelectorAll("[data-i18n-list]").forEach((list) => {
    const key = list.getAttribute("data-i18n-list");
    if (data[key]) {
      list.innerHTML = data[key].map((item) => `<li>${item}</li>`).join("");
    }
  });

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.textContent = lang === "es" ? "ES / EN" : "EN / ES";
  }
}

// Alterna entre español e inglés al hacer click en el botón.
function toggleLanguage() {
  const next = currentLang === "es" ? "en" : "es";
  setLanguage(next);
}

// Evita que las imágenes se puedan guardar o arrastrar con facilidad.
function protegerImagenes() {
  document.querySelectorAll("img").forEach((img) => {
    img.draggable = false;
    img.style.userSelect = "none";
    img.style.pointerEvents = "auto";

    img.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    img.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });

    img.addEventListener("mousedown", (event) => {
      if (event.button === 2) {
        event.preventDefault();
      }
    });

    img.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });

  document.addEventListener("keydown", (event) => {
    const isSaveShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s";
    const isPrintShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "p";
    const isInspectShortcut = event.key === "F12";

    if (isSaveShortcut || isPrintShortcut || isInspectShortcut) {
      event.preventDefault();
    }
  });

  document.addEventListener("wheel", (event) => {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  }, { passive: false });
}

// Se ejecuta cuando la página ya está lista para modificar el DOM.
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("lang-toggle");
  if (button) {
    button.addEventListener("click", toggleLanguage);
  }
  protegerImagenes();
  setDailyHeroImage();
  setLanguage(currentLang);
});
