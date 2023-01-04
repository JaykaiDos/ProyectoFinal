window.addEventListener("DOMContentLoaded", (event) => {
const botton = document.getElementById("main-botton");
const navWrapper = document.getElementById("nav");

  botton.addEventListener("click", (event) => {
  botton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    botton.classList.remove("close");
  }
});
});