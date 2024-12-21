// Sample data for demonstration
const students = [
    { regNumber: "101", email: "student1@example.com" },
    { regNumber: "102", email: "student2@example.com" },
    { regNumber: "103", email: "student3@example.com" }
];

// Function to display students in the table
function displayStudents() {
    const tableBody = document.querySelector("#studentsTable tbody");

    // Clear existing rows
    tableBody.innerHTML = "";

    // Append rows for each student
    students.forEach(student => {
        const row = document.createElement("tr");

        const regNumberCell = document.createElement("td");
        regNumberCell.textContent = student.regNumber;

        const emailCell = document.createElement("td");
        emailCell.textContent = student.email;

        row.appendChild(regNumberCell);
        row.appendChild(emailCell);

        tableBody.appendChild(row);
    });
}

// Call the function to populate the table on page load
displayStudents();
