const tl = gsap.timeline();

tl.from("header div, .contactUp h1, .contactUp div, .contactDown span", {
  delay: 1,
  stagger: {
    amount: 0.4,
  },
  y: -50,
  opacity: 0,
});
