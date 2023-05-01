const header = document.querySelector('#header');
const logoHeader = document.querySelector('#logo-header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 70) {
      header.classList.remove('p-5');
      header.classList.add('p-1');
      logoHeader.width = logoHeader.height = "100";
    } else {
      header.classList.remove('p-1');
      header.classList.add('p-5');
      logoHeader.width = logoHeader.height = "200";
    }
  });