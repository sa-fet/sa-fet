import { animate, stagger } from 'animejs';

export const AnimationPresets = {
  fadeInUp: (targets, delay = 0) => ({
    targets,
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1200,
    delay,
    easing: 'easeOutExpo'
  }),

  fadeInScale: (targets, delay = 0) => ({
    targets,
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 1000,
    delay,
    easing: 'easeOutElastic(1, .8)'
  }),

  morphPath: (targets, path) => ({
    targets,
    d: path,
    duration: 1500,
    easing: 'easeInOutQuad'
  }),

  staggerText: (targets) => ({
    targets,
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 800,
    delay: stagger(50),
    easing: 'easeOutExpo'
  }),

  pulseGlow: (targets) => ({
    targets,
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    duration: 2000,
    easing: 'easeInOutQuad',
    loop: true
  }),

  rotateIn: (targets, delay = 0) => ({
    targets,
    rotate: [90, 0],
    opacity: [0, 1],
    duration: 1000,
    delay,
    easing: 'easeOutExpo'
  })
};

export class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.connections = [];
    this.mouse = { x: 0, y: 0 };
    this.resize();
    this.init();
    this.bindEvents();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      // Mouse interaction
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        p.x -= dx * 0.01;
        p.y -= dy * 0.01;
      }

      // Boundaries
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
      this.ctx.fill();

      // Draw connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - dist / 120)})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    });

    requestAnimationFrame(() => this.update());
  }

  start() {
    this.update();
  }
}

export class ConnectedUI {
  static createConnection(from, to, color = '#00d4ff') {
    const line = document.createElement('div');
    line.className = 'connection-line';
    
    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    
    const x1 = fromRect.left + fromRect.width / 2;
    const y1 = fromRect.top + fromRect.height / 2;
    const x2 = toRect.left + toRect.width / 2;
    const y2 = toRect.top + toRect.height / 2;
    
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
    
    line.style.width = `${distance}px`;
    line.style.left = `${x1}px`;
    line.style.top = `${y1}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.background = `linear-gradient(90deg, transparent, ${color}, transparent)`;
    
    document.body.appendChild(line);
    
    animate(line, {
      opacity: [0, 1],
      scaleX: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo'
    });
    
    return line;
  }

  static createNode(x, y, color = '#00d4ff') {
    const node = document.createElement('div');
    node.className = 'connection-node';
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    node.style.background = color;
    node.style.boxShadow = `0 0 20px ${color}`;
    
    document.body.appendChild(node);
    
    animate(node, {
      scale: [0, 1],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutElastic(1, .8)'
    });
    
    return node;
  }
}

export const animateOnScroll = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('[data-aos]').forEach((el) => observer.observe(el));
};
