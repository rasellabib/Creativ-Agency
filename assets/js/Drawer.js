
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
document.getElementById('hamburgerBtn').addEventListener('click', () => {
  drawer.classList.remove('translate-x-full');
  overlay.classList.remove('hidden');
});
document.getElementById('closeBtn').addEventListener('click', () => {
  drawer.classList.add('translate-x-full');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', () => {
  drawer.classList.add('translate-x-full');
  overlay.classList.add('hidden');
});