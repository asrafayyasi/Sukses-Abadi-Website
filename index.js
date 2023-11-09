const icons = document.querySelectorAll('.icon');
const menu = document.querySelector('.menu');
const input = document.querySelector('.icon input');
icons.forEach((icon) => {
  icon.addEventListener('click', (event) => {
    icon.classList.toggle('open');
  });
});

input.addEventListener('change', (e) => {
  if (e.target.checked) {
    menu.classList.add('slide');
  } else {
    menu.classList.remove('slide');
  }
});

