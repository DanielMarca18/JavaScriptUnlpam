
const students = [];
let currentStudent = {};

document.getElementById("add-student").addEventListener("click", () => {
    // Código para agregar estudiantes
    const nameInput = document.getElementById("name");
            const name = nameInput.value.trim();
            if (!name) {
                alert("Por favor, complete el nombre del estudiante.");
                return;
            }

            currentStudent = { name, grades: [] };
            students.push(currentStudent);

            nameInput.value = "";
            nameInput.focus();
});

document.getElementById("add-grade").addEventListener("click", () => {
    // Código para agregar calificaciones
    if (!currentStudent) {
        alert("Agregue un estudiante antes de ingresar calificaciones.");
        return;
    }

    const gradeInput = document.getElementById("grade");
    const grade = parseFloat(gradeInput.value);

    if (isNaN(grade) || grade < 0 || grade > 10) {
        alert("Ingrese una calificación válida entre 0 y 10.");
        return;
    }

    currentStudent.grades.push(grade);
    gradeInput.value = "";
    gradeInput.focus();
});

document.getElementById("calculate-average").addEventListener("click", () => {
    // Código para calcular promedios
    const resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "";

            students.forEach(student => {
                const average = student.grades.reduce((total, grade) => total + grade, 0) / student.grades.length;
                resultsDiv.innerHTML += `<p>${student.name}: El promedio de Calificaciones es: ${average.toFixed(2)}</p>`;
            });
});

document.getElementById("reset-form").addEventListener("click", () => {
    // Código para reiniciar el formulario
    students.length = 0;
            currentStudent = null;
            document.getElementById("results").innerHTML = "";
});
