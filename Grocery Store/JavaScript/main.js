/* global variables */
let searchBtn = document.getElementById("search-btn");
let searchForm = document.querySelector(".search-form");
let cartBtn = document.getElementById("cart-btn");
let cartBox = document.getElementById("cart-box");
let userBtn = document.getElementById("user-btn");
let loginForm = document.getElementById("login");
let menuBtn = document.getElementById("menu-hamb");
let navBar = document.querySelector(".nav-bar");

let navButtons = [searchBtn, cartBtn, userBtn, menuBtn];
let headerBoxes = [searchForm, cartBox, loginForm, navBar];

window.onscroll = () => {
    headerBoxes.forEach((ele) => {
        ele.classList.remove("active");
    });
}

function removeActive(content) {
    content.classList.remove("active");
}

function toggleActive(content) {
    content.classList.toggle("active");
}

navButtons.forEach((ele, index) => {
    ele.addEventListener('click', () => {
        if (index == 0) {
            toggleActive(searchForm);
            removeActive(cartBox);
            removeActive(loginForm);
            removeActive(navBar);
        } else if (index == 1) {
            removeActive(searchForm);
            toggleActive(cartBox);
            removeActive(loginForm);
            removeActive(navBar);
        } else if (index == 2) {
            removeActive(searchForm);
            removeActive(cartBox);
            toggleActive(loginForm);
            removeActive(navBar);
        } else if (index == 3) {
            removeActive(searchForm);
            removeActive(cartBox);
            removeActive(loginForm);
            toggleActive(navBar);
        }
    });
})

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});