/* =========================
   CUSTOM CURSOR (Smoother version)
========================= */
const crsr = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");

if (crsr && blur) {
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  gsap.to({}, {
    duration: 0.016, // ~60fps
    repeat: -1,
    onUpdate: () => {
      gsap.set(crsr, { left: mouseX, top: mouseY });
      gsap.set(blur, { left: mouseX, top: mouseY, delay: 0.05 });
    }
  });
}

/* =========================
   NAVIGATION HOVER (Cursor scale)
========================= */
const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    if (crsr) {
      crsr.style.transform = "translate(-50%, -50%) scale(2)";
      crsr.style.border = "1px solid #fff";
      crsr.style.backgroundColor = "transparent";
    }
  });

  elem.addEventListener("mouseleave", function () {
    if (crsr) {
      crsr.style.transform = "translate(-50%, -50%) scale(1)";
      crsr.style.border = "none";
      crsr.style.backgroundColor = "#95c11e";
    }
  });
});

/* =========================
   GSAP SCROLLTRIGGER
========================= */
gsap.registerPlugin(ScrollTrigger);

/* =========================
   NAVBAR ANIMATION
========================= */
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1
  }
});

/* =========================
   MAIN BACKGROUND
========================= */
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -75%",
    scrub: 2
  }
});

/* =========================
   ABOUT US ANIMATION
========================= */
gsap.from("#about-us img, #about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1
  }
});

/* =========================
   CARDS ANIMATION
========================= */
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#cards-container",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1
  }
});

/* =========================
   LEFT QUOTE ANIMATION
========================= */
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
});

/* =========================
   RIGHT QUOTE ANIMATION
========================= */
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
});

/* =========================
   PAGE 4 HEADING
========================= */
gsap.from("#page4 h1", {
  y: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3
  }
});
