// Navigation Declaration

let nav = document.querySelector(".nav");
let hamburger = document.querySelector(".hamburger");
let hamburger1 = document.querySelector(".hamburger > div:first-child");
let hamburger2 = document.querySelector(".hamburger > div:nth-child(2)");
let hamburger3 = document.querySelector(".hamburger > div:last-child");

// All Interactivity Begins

// Navigation Action
hamburger.addEventListener("click", () => {
  if (nav.style.left === "0%") {
    // Close The Nav Bar

    document.body.classList.remove("no-scroll");
    nav.style.left = "-100%";

    hamburger1.style.transform = "rotate(360deg) translate(0px, 0px)";
    hamburger1.style.transition = "0.2s";
    hamburger1.style.width = "30px";

    hamburger2.style.transform = "rotate(360deg) translate(0px, 0px)";
    hamburger2.style.transition = "0.2s";

    hamburger3.style.transform = "rotate(0deg) translate(0px, 0px)";
    hamburger3.style.transition = "0.2s";
    hamburger3.style.width = "30px";
  } else {
    // Open The Nav Bar
    document.body.classList.add("no-scroll");
    nav.style.left = "0%";

    hamburger1.style.transform = "rotate(225deg) translate(-7px, -10px)";
    hamburger1.style.transition = "0.2s";
    hamburger1.style.width = "14px";

    hamburger2.style.transform = "rotate(180deg) translateX(0px)";
    hamburger2.style.transition = "0.2s";

    hamburger3.style.transform = "rotate(135deg) translate(-7px, 11px)";
    hamburger3.style.transition = "0.2s";
    hamburger3.style.width = "15px";
  }
});
