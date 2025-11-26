document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("input[type='text']");
    const email = document.querySelector("input[type='email']");
    const message = document.querySelector("textarea");

    let errors = [];

    if (name.value.trim() === "") {
        errors.push("Please enter your full name.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        errors.push("Please enter a valid email address.");
    }

    if (message.value.trim() === "") {
        errors.push("Please tell us how you heard about us.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Thank you! Your message has been sent successfully 🤍");
        this.reset(); // Reset form after success
    }
});
