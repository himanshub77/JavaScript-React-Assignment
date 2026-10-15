const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const successMessage = document.getElementById("successMessage");
    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";
    successMessage.innerText = "";
    document.getElementById("name").classList.remove("error", "success");
    document.getElementById("email").classList.remove("error", "success");
    document.getElementById("phone").classList.remove("error", "success");
    document.getElementById("password").classList.remove("error", "success");
    document.getElementById("confirmPassword").classList.remove("error", "success");
    let isValid = true;
    if (name === "") {
        nameError.innerText = "Name is required.";
        document.getElementById("name").classList.add("error");
        isValid = false;
    } else if (name.length < 3) {
        nameError.innerText = "Name must contain at least 3 characters.";
        document.getElementById("name").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("name").classList.add("success");
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.innerText = "Email is required.";
        document.getElementById("email").classList.add("error");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerText = "Please enter a valid email address.";
        document.getElementById("email").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("email").classList.add("success");
    }
    const phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        phoneError.innerText = "Phone number is required.";
        document.getElementById("phone").classList.add("error");
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        phoneError.innerText = "Phone number must contain exactly 10 digits.";
        document.getElementById("phone").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("phone").classList.add("success");
    }
    if (password === "") {
        passwordError.innerText = "Password is required.";
        document.getElementById("password").classList.add("error");
        isValid = false;
    } else if (password.length < 6) {
        passwordError.innerText = "Password must contain at least 6 characters.";
        document.getElementById("password").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("password").classList.add("success");
    }
    if (confirmPassword === "") {
        confirmPasswordError.innerText = "Please confirm your password.";
        document.getElementById("confirmPassword").classList.add("error");
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match.";
        document.getElementById("confirmPassword").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("confirmPassword").classList.add("success");
    }
    if (isValid) {
        successMessage.innerText = "✓ Registration successful!";
        form.reset();
        document.getElementById("name").classList.remove("success");
        document.getElementById("email").classList.remove("success");
        document.getElementById("phone").classList.remove("success");
        document.getElementById("password").classList.remove("success");
        document.getElementById("confirmPassword").classList.remove("success");
    }
});