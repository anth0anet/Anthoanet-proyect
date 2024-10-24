document.getElementById("registrar-asistencia-docente").addEventListener("click", function() {
    const nombreDocente = document.getElementById("nombre-docente").value;
    const fecha = new Date();
    const fechaHora = fecha.toLocaleString(); // Formato de fecha y hora

    // Mostrar mensaje y detalles de asistencia del docente
    document.getElementById("docente-asistencia").textContent = 
        `Nombre: ${nombreDocente}, Fecha y Hora: ${fechaHora}`;
    
    document.getElementById("asistencia-docente-message").style.display = "block";
    document.getElementById("asistencia-docente-details").style.display = "block";
});

document.getElementById("habilitar-asistencia-alumnos").addEventListener("click", function() {
    // Mostrar la tabla de asistencia de alumnos
    document.getElementById("asistencia-alumnos").style.display = "block";
});

document.getElementById("guardar-asistencia-alumnos").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".asistencia-alumno");
    let asistenciaRegistrada = [];
    const fecha = new Date();
    const fechaHora = fecha.toLocaleString(); // Formato de fecha y hora

    checkboxes.forEach(checkbox => {
        const nombreAlumno = checkbox.closest('tr').children[0].textContent;
        if (checkbox.checked) {
            asistenciaRegistrada.push({
                nombre: nombreAlumno,
                fecha: fechaHora // Agregar fecha y hora a cada registro
            });
        }
    });

    // Mostrar las asistencias registradas en la tabla
    const asistenciasBody = document.getElementById("asistencias-body");
    asistenciasBody.innerHTML = ''; // Limpiar tabla anterior

    if (asistenciaRegistrada.length > 0) {
        asistenciaRegistrada.forEach(asistencia => {
            const tr = document.createElement("tr");
            const tdNombre = document.createElement("td");
            const tdFecha = document.createElement("td");

            tdNombre.textContent = asistencia.nombre;
            tdFecha.textContent = asistencia.fecha;

            tr.appendChild(tdNombre);
            tr.appendChild(tdFecha);
            asistenciasBody.appendChild(tr);
        });

        document.getElementById("asistencias-registradas").style.display = "table"; // Mostrar tabla
    } else {
        alert("No se registró ninguna asistencia.");
    }
});
