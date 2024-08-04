import 'animate.css';

const themeToggle = document.querySelector('.theme-btn');
const icon = document.querySelector('.bi-brightness-high');

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
  icon?.classList.toggle('bi-moon');
});

const overlay = document.querySelector('.overlay');

const closeBtn = document.querySelector('.close-btn');

if(closeBtn){
  closeBtn.addEventListener('click', () => {
    if (overlay) {
      overlay.style.display = 'none';
    }
  })
}

document.querySelector('.list-btn')?.addEventListener('click', () => {
  if (overlay) {
    overlay.style.display = 'block';
  }
})