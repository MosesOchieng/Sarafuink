var switchEl = document.getElementById('switch');
var toggleEl = document.getElementById('switch-theme');

switchEl.addEventListener('click', e => {
  switchEl.classList.toggle('active');
});

toggleEl.addEventListener('click', e => {
  document.body.classList.toggle('dark');
});