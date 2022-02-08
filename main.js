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

  const active = document.querySelector('.navbar__menu__item.active');
  active.classList.remove('active');
  target.classList.add('active');

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

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// Show selected works only

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove "selection" from the previous and select the new one
  const active = document.querySelector('.categories__btn.selected');
  active.classList.remove('selected');
  console.log(e.target.nodeName);
  const target = e.target.nodeName == 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter == project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
