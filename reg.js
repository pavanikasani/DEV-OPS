function registerUser() {
    // Get the form elements by their ids
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var event = document.getElementById("event");

    // Check if the name field is empty
    if (name.value == "") {
        alert("Please enter your name");
        return false;
    }

    // Check if the email field is valid
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Check if the phone field is valid
    var phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.value)) {
        alert("Please enter a valid phone number");
        return false;
    }

    // Check if the event field is selected
    if (event.value == "Select") {
        alert("Please select an event");
        return false;
    }

    // If all the validations are passed, submit the form data
    alert("You have successfully registered for the event: " + event.value);
    return true;
}