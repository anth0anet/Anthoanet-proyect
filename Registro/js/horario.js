const schedule = [
    ["08:00 - 09:00", "Matemáticas", "", "Desarrollo Humano", "", "Módulos para Machine Learning con Python", "", ""],
    ["09:20 - 11:00", "Matemáticas", "Backend Developer Web", "Java Fundamentals", "", "", "", ""],
    ["11:00 - 12:00", "", "Backend Developer Web", "", "Técnicas de la comunicación", "", "", ""],
    ["12:15 - 13:00", "Inglés II", "", "", "Inglés II", "Desarrollo Humano", "", ""],
    ["13:15 - 14:00", "", "", "", "Inglés II", "", "", ""]
];

const scheduleBody = document.getElementById("schedule-body");

schedule.forEach(row => {
    const tr = document.createElement("tr");

    row.forEach(cell => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
    });

    scheduleBody.appendChild(tr);
});
