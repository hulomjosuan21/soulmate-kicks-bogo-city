import 'animate.css';

const themeToggle = document.querySelector('.theme-btn');
const icon = document.querySelector('.bi-brightness-high');

const storedThemeData = localStorage.getItem('themeData');
const themeData = storedThemeData ? JSON.parse(storedThemeData) : [];

if (themeData.length > 0) {
  document.body.classList.add(themeData[0]);
  icon?.classList.add(themeData[1]);
}

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
  icon?.classList.toggle('bi-moon');
  
  if (document.body.classList.contains('theme-dark')) {
    localStorage.setItem('themeData', JSON.stringify(['theme-dark', 'bi-moon']));
  } else {
    localStorage.removeItem('themeData');
  }
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