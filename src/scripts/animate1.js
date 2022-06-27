const tl = gsap.timeline();

tl.from(
  "header div, .aboutScreen h1, .aboutScreen p, .aboutScreen li, .aboutScreen img",
  {
    delay: 1,
    stagger: {
      amount: 0.4,
    },
    y: -100,
    opacity: 0,
  }
);
