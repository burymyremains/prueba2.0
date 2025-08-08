const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('manual-dark');
});

const observer = window.matchMedia('(prefers-color-scheme: dark)');
observer.addEventListener('change', () => {
  document.body.classList.remove('manual-dark');
});
