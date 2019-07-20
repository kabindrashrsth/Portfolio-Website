//Select DOM(Document Object Model) Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
//const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set Initial State Of Menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    //menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    //menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}

// Scroll reveal

window.sr = ScrollReveal();
sr.reveal(".lg-heading", {
  duration: 1800,
  origin: "top",
  distance: "30px"
});

sr.reveal(".ktm-img", {
  duration: 1800,
  origin: "bottom",
  distance: "100px"
});

sr.reveal(".sm-heading", {
  duration: 1800,
  origin: "top"
});

// Scrolling and highlighing

let navItem = document.querySelectorAll(".nav-item");
// let about = document.getElementById("about");

// about.addEventListener("mouseover", h);

// function h() {
//   console.log(7);
//   for (let i = 0; i < 5; i++) {
//     navItem[i].classList.remove("current");
//   }
//   navItem[1].classList.add("current");
// }

for (let i = 0; i < 5; i++) {
  navItem[i].addEventListener("click", highlight);
}

function highlight(e) {
  for (let i = 0; i < 5; i++) {
    navItem[i].classList.remove("current");
  }

  e.target.parentNode.classList.add("current");
}
