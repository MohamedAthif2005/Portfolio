function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_7ucxofz","template_a639kg9",params)
    .then(() => sent())
    .catch(() => alert("Something went wrong"));
}
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMail();         
});
function sent() {
    const type = document.querySelector(".type");

    type.textContent = "Email Sent Successfully 😊";

    setTimeout(() => {
        type.textContent = "";
    }, 3000);
    form.reset();
}
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
