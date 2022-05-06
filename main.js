const $header = document.querySelector(".header");
const SHOW = "show";

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 200) {
    $header.classList.add(SHOW);
  } else {
    $header.classList.remove(SHOW);
  }
});
