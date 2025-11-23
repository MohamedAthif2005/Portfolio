function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_7ucxofz","template_a639kg9",params)
    .then(() => alert("Email sent successfully"))
    .catch(() => alert("Something went wrong"));
}

const ham = document.querySelector(".hamburger");
const overlay = document.querySelector(".menu-overlay");
const overlayLinks = document.querySelectorAll(".menu-overlay a");

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlayLinks.forEach(link => {
    link.addEventListener("click", () => {
        ham.classList.remove("active");
        overlay.classList.remove("active");
    });
});
