//Select DOM(Document Object Model) Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
//const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

// Listen for outside click
window.addEventListener("click", outsideMenuClick);

// Function to close menu if outside click
function outsideMenuClick(e) {
  if (e.target == menu) {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    //menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}

// Function for menu
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
  duration: 1850,
  origin: "bottom",
  distance: "30px"
});

sr.reveal(".item", {
  duration: 1850,
  origin: "bottom",
  distance: "30px"
});

sr.reveal("#about", {
  duration: 1850,
  origin: "bottom",
  distance: "30px"
});

// Scrolling and highlighing

let navItem = document.querySelectorAll(".nav-item");

for (let i = 0; i < 5; i++) {
  navItem[i].addEventListener("click", highlight);
}

function highlight(e) {
  for (let i = 0; i < 5; i++) {
    navItem[i].classList.remove("current");
  }

  e.target.parentNode.classList.add("current");
}

// Get modal element
var modal = document.getElementById("simpleModal");

// Get open modal button
var modalBtn = document.getElementById("modalBtn");

// Get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for open click
modalBtn.addEventListener("click", openModal);

// Listen for close click
closeBtn.addEventListener("click", closeModal);

// Listen for outside click
window.addEventListener("click", outsideClick);

// Function to open modal
function openModal() {
  modal.style.display = "block";
}

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}

// Function to close modal if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
