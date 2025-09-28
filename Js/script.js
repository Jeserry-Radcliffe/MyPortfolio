function protectLink(linkID) {
  const link = document.getElementById(linkID);
  const correctPassword = "password";

  link.addEventListener("click", function (event) {
    event.preventDefault();

    const userPassword = prompt(
      "Sorry this is confidential. Please enter the password to proceed. "
    );
    if (userPassword === correctPassword) {
      //if correct, enter the link
      window.location.href = "../Html/03_credentials.html";
    } else {
      //if incorrect, show an alert
      alert("Incorrect password. Access Denied.");
    }
  });
}

protectLink("protected-link");
protectLink("footer-protected-link");

// Media Query
// document.querySelector(".hamburger").addEventListener("click", function() {
//   document.querySelector(".nav-links").classList.toggle("show");
// });

// const btn = document.getElementById("menuBtn");
// btn.addEventListener("click", () => {
//   btn.classList.toggle("active");
// });

const btn = document.getElementById("menuBtn");
const nav = document.getElementById("navMenu");

btn.addEventListener("click", () => {
  btn.classList.toggle("active"); // animate button
  nav.classList.toggle("active"); // show/hide nav

});

//btn pre -- btn next
document.querySelectorAll(".slider").forEach((slider) => {
  const slidesContainer = slider.querySelector(".slides");
  const slides = slider.querySelectorAll(".myProject0");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  let index = 0;
  const total = slides.length;

  function showSlide(i) {
    index = (i + total) % total; // wrap-around
    slidesContainer.style.transform = `translateX(${-index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));

  // Init each slider
  showSlide(index);

  // Auto slide
  // setInterval(() => showSlide(index + 1), 3000);
});

window.addEventListener("load", () => {
  document.querySelector(".hamburger").classList.add("ready");
});

//show password
const togglePassword = document.getElementById("togglePassword");
const passkey = document.getElementById("passkey");

togglePassword.addEventListener("change", () => {
  passkey.type = togglePassword.checked ? "text" : "password";
});
