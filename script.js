function actualizarHora() {
  const ahora = new Date();

  // Formato :)
  const horas = ahora.getHours().toString().padStart(2, "0");
  const minutos = ahora.getMinutes().toString().padStart(2, "0");
  const segundos = ahora.getSeconds().toString().padStart(2, "0");

  document.getElementById("reloj").textContent =
    `${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarHora, 1000);

window.onload = actualizarHora;

const opciones = {
  timeZone: "America/Argentina/Buenos_Aires",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const hora = new Intl.DateTimeFormat("es-ES", opciones).format(new Date());
document.getElementById("reloj").textContent = hora;

/*document.addEventListener("contextmenu", (e) => e.preventDefault());*/
