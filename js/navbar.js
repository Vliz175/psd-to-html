const toggle = document.getElementById("toggle-navbar");
const hide = document.getElementById("hide");
const list = document.querySelectorAll(".site_navbar a");
toggle.addEventListener("click", () => {
  hide.classList.toggle("hide");
});
list.forEach((link) => {
  link.addEventListener("click", () => {
    hide.classList.toggle("hide");
  });
});
