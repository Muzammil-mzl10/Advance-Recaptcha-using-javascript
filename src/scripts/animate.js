const tl = gsap.timeline();

tl.from(".rotateObject , .animateText", {
  delay: 1,
  stagger: {
    amount: 0.5,
  },
  y: -50,
  opacity: 0,
});
const loader = gsap.timeline({
  paused: "true",
});
const loadingScreen = document.querySelector(".loading-screen");
window.addEventListener("keydown", function () {
  loader.play();
});
loader.to(".rotateObject , .animateText", {
  stagger: {
    amount: 0.5,
  },
  y: 50,
  opacity: 0,
});
loader.to(".loading-screen", {
  display: "none",
});

loader.from("header div, .homeScreen span", {
  stagger: {
    amount: 0.5,
  },
  y: -50,
  opacity: 0,
});
