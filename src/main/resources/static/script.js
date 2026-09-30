document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const genderElement = document.querySelector('input[name="gender"]:checked');

    const departments = [];
    document.querySelectorAll('input[name="department"]:checked')
        .forEach(function(checkbox) {
            departments.push(checkbox.value);
        });

    const student = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        fatherName: document.getElementById("fatherName").value,
        motherName: document.getElementById("motherName").value,

        dob:
            document.getElementById("day").value + "/" +
            document.getElementById("month").value + "/" +
            document.getElementById("year").value,

        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,

        gender: genderElement ? genderElement.value : null,

        department: departments.join(","),

        course: document.getElementById("course").value,

        city: document.getElementById("city").value,
        address: document.getElementById("address").value
    };

    fetch("/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to save student");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert("Student registered successfully!");

            document.getElementById("studentForm").reset();
        })
        .catch(error => {
            console.error(error);
            alert("Error while saving student!");
        });

});