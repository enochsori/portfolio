// const navbar = document.querySelector('#navbar');
// const navbarMenu = document.querySelector('.navbar__menu');

// window.addEventListener('scroll', (e) => {
//   let scrollLocation = document.documentElement.scrollTop;
//   navbar.style.backgroundColor = 'var(--color-pink)';
//   navbarMenu.style.color = 'var(--color-white)';
//   console.log(scrollLocation);

//   if (scrollLocation < 10) {
//     navbar.style.backgroundColor = 'transparent';
//     navbarMenu.style.color = 'var(--color-black)';
//   }
// });

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

// Handle scrolling when tapping on the navbar menu
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});
