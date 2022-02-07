'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarLink = document.querySelector('.navbar__logo__link');
const navbarLogo = document.querySelector('.navbar__logo');
const active = document.querySelector('.active');

const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
    navbarMenu.classList.add('color--white');
    navbarLink.classList.add('color--white');
    navbarLogo.classList.add('color--white');
  } else {
    navbar.classList.remove('navbar--dark');
    navbarMenu.classList.remove('color--white');
    navbarLink.classList.remove('color--white');
    navbarLogo.classList.remove('color--white');
  }
});

// Handle scrolling when tapping on the navbar menu.
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Handle click on "Contact me" button on home.
const homeContactBtn = document.querySelector('.home__contact');

homeContactBtn.addEventListener('click', (event) => {
  scrollIntoView('#contact');
});

// Make "Home" transparent when it is scrolling down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  const homeOpacity = 1 - window.scrollY / homeHeight;
  home.style.opacity = homeOpacity;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
