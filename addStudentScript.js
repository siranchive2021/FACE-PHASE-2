document.getElementById("addStudentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const regNumber = document.getElementById("regNumber").value;
    const email = document.getElementById("email").value;

    if (regNumber && email) {
        alert(`Student with Register Number: ${regNumber} and Email: ${email} has been added successfully!`);
        document.getElementById("addStudentForm").reset();
    } else {
        alert("Please fill in all fields before submitting.");
    }
});
