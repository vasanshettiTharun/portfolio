document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contact .contact-form form");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = contactForm.querySelector("input[name='name']").value;
    const email = contactForm.querySelector("input[name='email']").value;
    const message = contactForm.querySelector("textarea[name='message']").value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
  });
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});



