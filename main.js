// Show Side Bar
const line = document.querySelector('.line');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const menuBox = document.querySelector('aside');

menuBox.style.left = "-200%";

function show() {
  if (menuBox.style.left === "-200%") {
    line.style.position = "absolute";
    line3.style.transform = "rotate(-50deg)";
    line.style.transform = "rotate(-130deg)";
    line.style.marginTop = "7px";
    menuBox.style.left = "-10px";
    line2.style.display = "none";
  }

  else if (menuBox.style.left === "-10px") {
    line.style.position = "relative";
    line3.style.transform = "rotate(0deg)";
    line.style.transform = "rotate(0deg)";
    line2.style.display = "block";
    line.style.marginTop = "0";
    menuBox.style.left = "-200%";
  }
}

//Arrow Up Btn
const arrowUp = document.getElementById("arrow-up");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    arrowUp.style.display = "grid";
  } else {
    arrowUp.style.display = "none";
  }
});
arrowUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});