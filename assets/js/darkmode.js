document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.createElement('button');
  toggle.textContent = 'Toggle Dark Mode';
  toggle.onclick = () => document.body.classList.toggle('dark');
  document.body.insertBefore(toggle, document.body.firstChild);
});