// Cargar el estado guardado al abrir la página
window.onload = function() {
    cargarEstado();
};

// Función para actualizar el estado de las actividades
function actualizarEstado(actividad) {
    let estado = document.getElementById(actividad).checked;
    localStorage.setItem(actividad, estado);
}

// Función para guardar las notas y gratitud
function guardarEstado() {
    localStorage.setItem('notas', document.getElementById('notas').value);
    localStorage.setItem('gratitud', document.getElementById('gratitud').value);
}

// Función para cargar el estado guardado
function cargarEstado() {
    // Cargar el estado de las actividades
    ['meditacion', 'ejercicio', 'desayuno'].forEach(function(actividad) {
        let estado = localStorage.getItem(actividad) === 'true';
        document.getElementById(actividad).checked = estado;
    });

    // Cargar las notas y gratitud
    document.getElementById('notas').value = localStorage.getItem('notas') || '';
    document.getElementById('gratitud').value = localStorage.getItem('gratitud') || '';
}