const burgir = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header .header__nav");
burgir.addEventListener("click", () => {
  burgir.classList.toggle("open");
  headerNav.classList.toggle("open");
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact__form");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    popup.classList.remove("hidden");
    form.reset();
  });
  closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});


const b2Top = document.querySelector(".backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    b2Top.classList.add("open");
  } else {
    b2Top.classList.remove("open");
  }
})