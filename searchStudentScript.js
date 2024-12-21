// Sample data for demonstration
const students = [
    { regNumber: "101", email: "student1@example.com" },
    { regNumber: "102", email: "student2@example.com" },
    { regNumber: "103", email: "student3@example.com" }
];

// Function to search for a student by register number
document.getElementById("searchStudentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const searchRegNumber = document.getElementById("searchRegNumber").value;
    const resultMessage = document.getElementById("resultMessage");
    const searchResult = document.getElementById("searchResult");

    const student = students.find(s => s.regNumber === searchRegNumber);

    if (student) {
        resultMessage.textContent = `Register Number: ${student.regNumber}, Email: ${student.email}`;
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "No student found with the given register number.";
        resultMessage.style.color = "red";
    }

    searchResult.style.display = "block";
});
