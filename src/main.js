import './styles/main.scss'

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const overlay = document.getElementById('drawerOverlay');
  const panel = document.getElementById('drawerPanel');

  const toggleDrawer = () => {
    overlay.classList.toggle('is-open');
    panel.classList.toggle('is-open');
  };

  menuBtn.addEventListener('click', toggleDrawer);
  closeBtn.addEventListener('click', toggleDrawer);
  overlay.addEventListener('click', toggleDrawer);
});

