const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
const stars = [];

function fitCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars(count = 90) {
  stars.length = 0;
  for (let i = 0; i < count; i += 1) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.7 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.2 + 0.03,
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
    ctx.fillStyle = `rgba(255,255,255,${Math.abs(s.alpha)})`;
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

const ambient = document.getElementById('ambient');
const musicToggle = document.getElementById('musicToggle');

musicToggle.addEventListener('click', async () => {
  if (ambient.paused) {
    await ambient.play();
    musicToggle.textContent = '♫ Ambience: ON';
  } else {
    ambient.pause();
    musicToggle.textContent = '♫ Ambience: OFF';
  }
});
