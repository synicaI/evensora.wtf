const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
const stars = [];

function fitCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars(count = 170) {
  stars.length = 0;
  for (let i = 0; i < count; i += 1) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.7 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.012 + 0.003,
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const s of stars) {
    s.alpha += s.speed;
    if (s.alpha >= 1 || s.alpha <= 0) s.speed *= -1;

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(180,235,255,${Math.abs(s.alpha)})`;
    ctx.fill();
  }
  requestAnimationFrame(drawStars);
}

fitCanvas();
createStars();
drawStars();
window.addEventListener('resize', () => {
  fitCanvas();
  createStars();
});

const logo = document.querySelector('.logo-mark');
const root = document.documentElement;
window.addEventListener('mousemove', (event) => {
  root.style.setProperty('--mx', `${event.clientX}px`);
  root.style.setProperty('--my', `${event.clientY}px`);

  if (!logo) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 10;
  const y = (event.clientY / window.innerHeight - 0.5) * -10;
  logo.style.transform = `translate(${x}px, ${y}px)`;
});

const introOverlay = document.getElementById('introOverlay');
window.addEventListener('load', () => {
  setTimeout(() => {
    introOverlay?.classList.add('hidden');
  }, 1300);
});
