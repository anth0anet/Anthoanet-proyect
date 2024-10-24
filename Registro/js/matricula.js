// Definir los horarios para cada turno con dos matrículas por turno
const horarios = {
    manana: {
        matricula1: [
            ["08:00 - 09:00", "Matemáticas", "", "Desarrollo Humano", "", "Machine Learning", "", ""],
            ["09:20 - 10:20", "Inglés II", "Backend Developer Web", "", "", "", "", ""],
            ["10:30 - 11:30", "Programación", "", "Java Fundamentals", "Desarrollo Humano", "", "", ""]
        ],
        matricula2: [
            ["08:00 - 09:00", "Física", "", "", "Matemáticas Avanzadas", "", "", ""],
            ["09:20 - 10:20", "Inglés II", "", "", "Bases de Datos", "", "", ""],
            ["10:30 - 11:30", "", "Ingeniería de Software", "Técnicas de Comunicación", "", "", "", ""]
        ]
    },
    tarde: {
        matricula1: [
            ["14:00 - 15:00", "Bases de Datos", "", "Técnicas de Comunicación", "", "", "", ""],
            ["15:15 - 16:15", "Inglés II", "Frontend Web", "", "Diseño UX/UI", "", "", ""]
        ],
        matricula2: [
            ["14:00 - 15:00", "Programación Avanzada", "", "Backend Developer", "Desarrollo Humano", "", "", ""],
            ["15:15 - 16:15", "", "Ingeniería de Software", "Técnicas de Comunicación", "", "", "", ""]
        ]
    },
    noche: {
        matricula1: [
            ["18:00 - 19:00", "Matemáticas", "Inglés II", "", "Fundamentos de Java", "", "", ""],
            ["19:15 - 20:15", "Diseño UX/UI", "", "Técnicas de Comunicación", "Bases de Datos", "", "", ""]
        ],
        matricula2: [
            ["18:00 - 19:00", "Backend Developer", "", "", "", "", "Bases de Datos II", ""],
            ["19:15 - 20:15", "", "Frontend Developer", "Bases de Datos", "", "", "", ""]
        ]
    }
};

// Función para mostrar el formulario de inscripción
function mostrarFormulario() {
    document.getElementById("form-inscripcion").style.display = "block";
    document.getElementById("turnos-container").style.display = "none";  
}

// Función para procesar el formulario y luego mostrar las matrículas
function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const idEstudiante = document.getElementById("id-estudiante").value;

    if (nombre && apellido && idEstudiante) {
        alert(`Bienvenido/a ${nombre} ${apellido}. ID de estudiante: ${idEstudiante}`);
        document.getElementById("form-inscripcion").style.display = "none"; 
        document.getElementById("turnos-container").style.display = "block"; 
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para mostrar los horarios según el turno y matricula seleccionada
function mostrarTurno(turno) {
    const container = document.getElementById("matriculas-container");
    container.innerHTML = ""; 

    const matriculas = horarios[turno];

    // Mostrar cada matrícula 
    for (const [matricula, horario] of Object.entries(matriculas)) {
        // Crear un contenedor para la matrícula
        const matriculaDiv = document.createElement("div");
        matriculaDiv.className = "matricula";
        
        
        const matriculaTitle = document.createElement("h3");
        matriculaTitle.textContent = matricula === 'matricula1' ? "Matrícula 1" : "Matrícula 2";
        matriculaDiv.appendChild(matriculaTitle);

        // Crear la tabla de horarios para la matrícula
        const table = document.createElement("table");
        table.className = "schedule";
        
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].forEach(day => {
            const th = document.createElement("th");
            th.textContent = day;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        
        const tbody = document.createElement("tbody");
        horario.forEach(row => {
            const tr = document.createElement("tr");
            row.forEach(cell => {
                const td = document.createElement("td");
                td.textContent = cell;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        matriculaDiv.appendChild(table);

        const button = document.createElement("button");
        button.textContent = `Inscribirse en ${matricula === 'matricula1' ? "Matrícula 1" : "Matrícula 2"}`;
        button.style.display = "block";
        button.style.marginTop = "10px";
        button.onclick = () => alert(`Inscrito en: ${matricula === 'matricula1' ? "Matrícula 1" : "Matrícula 2"}`);
        matriculaDiv.appendChild(button);

        
        container.appendChild(matriculaDiv);
    }
}

