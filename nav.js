// Charge automatiquement le header sur toutes les pages
fetch('header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;
  });

// Menu hamburger
function toggleMenu() {
  var links = document.getElementById('nav-links');
  var btn = document.querySelector('.hamburger');
  links.classList.toggle('open');
  btn.innerHTML = links.classList.contains('open') ? '&#10005;' : '&#9776;';
}
