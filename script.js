const small = document.querySelector("small");
const arrow = document.querySelector(".arrow");
const input = document.querySelector("input");

arrow.addEventListener("click", (e) => {
  if (input.value.trim() === "") {
    e.preventDefault();
    input.style.border = "2px solid hsl(0, 93%, 68%)";
    small.style.visibility = "visible";
  }
});
