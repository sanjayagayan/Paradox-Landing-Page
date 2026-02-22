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

const tabData = {
  render: {
    heading: '8x',
    headingClass: 'stats__heading--large',
    subtitle: 'Faster live render than other 3D design app for web.',
    image: './src/assets/stat1.png'
  },
  materials: {
    heading: 'Realistic\nmaterials',
    headingClass: 'stats__heading--medium',
    subtitle: 'High-quality textures that respond to lighting in real-time.',
    image: './src/assets/stat2.png'
  },
  interaction: {
    heading: 'Live\ninteraction',
    headingClass: 'stats__heading--medium',
    subtitle: 'Engage your users with interactive 3D elements directly in the browser.',
    image: './src/assets/stat3.png'
  }
};

document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('is-active'));
    button.classList.add('is-active');

    const key = button.getAttribute('data-tab');
    const data = tabData[key];

    const headingEl = document.getElementById('stats-heading');
    const subtitleEl = document.getElementById('stats-subtitle');
    const imageEl = document.getElementById('stats-image');

    headingEl.innerText = data.heading;
    headingEl.className = `stats__heading ${data.headingClass}`;
    subtitleEl.innerText = data.subtitle;
    imageEl.src = data.image;

    imageEl.classList.remove('fade-in');
    void imageEl.offsetWidth; 
    imageEl.classList.add('fade-in');

  });
});

