const buttons = document.querySelectorAll(".btn");
const selected = document.querySelector(".selected");
const btn1 = document.querySelector("btn-1");
const btn2 = document.querySelector("btn-2");
const btn3 = document.querySelector("btn-3");
const btn4 = document.querySelector("btn-4");
const btn5 = document.querySelector("btn-5");
const header = document.querySelector(".header");
const hidden = document.querySelector(".hidden-box");
const submit = document.querySelector(".submit");
const again = document.querySelector(".again");
const rating = document.querySelector("#rating");

submit.addEventListener("click", () => {
  header.classList.add("hide");
  hidden.classList.remove("hide");
});

again.addEventListener("click", () => {
  header.classList.remove("hide");
  hidden.classList.add("hide");
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating.innerHTML = btn.innerHTML;
  });
});
