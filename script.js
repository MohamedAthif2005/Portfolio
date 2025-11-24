function sendMail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const type = document.querySelector(".type");

    if (!name || !email || !message) {
        type.textContent = "Please fill all the fields required";
        return;
    }
    if (!email.includes("@")) {
        type.textContent = "Invalid email";
        return;
    }

    let params = { name, email, message };

    emailjs.send("service_7ucxofz","template_a639kg9",params)
    .then(() => sent())
    .catch(() => alert("Something went wrong"));
}
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMail();  
    form.reset();       
});

function shownav()
{
    const ham = document.querySelector(".mobile-nav");
    ham.classList.toggle("active");
}

const mobilenav = document.querySelector(".mobile-nav");
const navlinks = document.querySelectorAll(".mobile-nav ul li a");

navlinks.forEach(link => {
    link.addEventListener("click", () => {
        mobilenav.classList.remove("active");
    });
});
