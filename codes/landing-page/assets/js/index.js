const fixedBurgerIcon = document.querySelector(".fixed-burger");
const fixedLink = document.querySelector(".fixed-nav .links");
const topLink = document.querySelector(".menu-links .links");
const topBurgerIcon = document.querySelector(".burgerIcon");

fixedBurgerIcon.addEventListener('click', toggleLink);
topBurgerIcon.addEventListener('click', toggleTopLink)

function toggleLink() {
    fixedLink.classList.toggle("show-links");
}

function toggleTopLink() {
    topLink.classList.toggle("show-top-link");
}
