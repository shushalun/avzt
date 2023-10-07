window.addEventListener('scroll', function() {
  let nav = document.querySelector('nav.main-nav');
  let header = document.querySelector('header');
  let contacts = document.querySelector('.main-header__contacts');

  let scrollThreshold = contacts.offsetTop + contacts.offsetHeight;

  if (window.pageYOffset > scrollThreshold) {
    nav.classList.add('main-nav--fixed');
  } else {
    nav.classList.remove('main-nav--fixed');
  }
});
