const navCollapse = document.querySelector(".navbar-collapse");

const navToggler = document.querySelector(".hamburger");

navToggler.addEventListener("click", () => {
  navCollapse.classList.toggle("active");
});
