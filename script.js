function actualizarHora() {
    const ahora = new Date();
    
    // Formato de hora: HH:MM:SS
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    
    // Mostrar en el HTML
    document.getElementById('reloj').textContent = `${horas}:${minutos}:${segundos}`;
}

// Actualizar cada segundo
setInterval(actualizarHora, 1000);

// Ejecutar al cargar la página
window.onload = actualizarHora;   



const opciones = {
    timeZone: 'America/Argentina/Buenos_Aires', // Cambia según tu ciudad
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};

const hora = new Intl.DateTimeFormat('es-ES', opciones).format(new Date());
document.getElementById('reloj').textContent = hora;   
