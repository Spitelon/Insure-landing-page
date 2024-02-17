document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menuIcon');
  const navMenu = document.getElementById('navMenu');

  menuIcon.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    menuIcon.innerHTML = navMenu.classList.contains('active') ? '&#10006;' : '&#9776;';
  });
});

