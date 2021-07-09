let menuOpen = document.getElementsByClassName("menu-open");
let menuClose = document.getElementsByClassName("menu-close");
let moblieMenu = document.getElementById("mobile-menu");

menuOpen[0].addEventListener("click", function () {
    setMenuOpen();
}, false);

menuOpen[1].addEventListener("click", function () {
    setMenuOpen();
}, false);

menuClose[0].addEventListener("click", function () {
    setMenuClose();
}, false);

function setMenuOpen() {
    moblieMenu.style.display = "block";
}

function setMenuClose() {
    moblieMenu.style.display = "none";
}