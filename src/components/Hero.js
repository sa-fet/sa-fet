import { animate, createTimeline, stagger, utils } from 'animejs';
import './hero.css';

export class Hero {
  render() {
    return `
      <section id="hero" class="hero-section section">
        <div class="hero-background">
          <div class="hero-gradient"></div>
          <div class="hero-grid"></div>
        </div>
        
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge">
              <svg class="badge-icon" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>Empowering Students Since 2024</span>
            </div>

            <h1 class="hero-title">
              <span class="title-line">Student Affairs</span>
              <span class="title-line">Committee</span>
            </h1>

            <div class="hero-subtitle">
              <div class="subtitle-item">
                <div class="subtitle-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                </div>
                <div>
                  <p class="subtitle-main">Faculty of Engineering & Technology</p>
                  <p class="subtitle-sub">Jain (Deemed-to-be University)</p>
                </div>
              </div>
              <div class="subtitle-item">
                <div class="subtitle-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5S14.5 7.62 14.5 9 13.38 11.5 12 11.5Z" />
                  </svg>
                </div>
                <div>
                  <p class="subtitle-main">Jain Global Campus</p>
                  <p class="subtitle-sub">Kanakapura, Karnataka 562112</p>
                </div>
              </div>
            </div>

            <div class="hero-cta">
              <button class="cta-primary" data-scroll-to="connect">
                <span>Get In Touch</span>
                <svg class="cta-icon" viewBox="0 0 24 24">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                </svg>
              </button>
              <button class="cta-secondary" data-scroll-to="projects">
                <span>Explore Projects</span>
              </button>
            </div>

            <div class="hero-stats">
              <div class="stat-item" data-count="5000">
                <span class="stat-number">0</span>
                <span class="stat-label">Students</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item" data-count="50">
                <span class="stat-number">0</span>
                <span class="stat-label">Events/Year</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item" data-count="100">
                <span class="stat-number">0</span>
                <span class="stat-label">% Satisfaction</span>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="visual-orb orb-1"></div>
            <div class="visual-orb orb-2"></div>
            <div class="visual-orb orb-3"></div>
            <svg class="hero-shape" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#003d82;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path class="shape-path" d="M200,50 L350,150 L350,250 L200,350 L50,250 L50,150 Z" />
            </svg>
          </div>
        </div>

        <div class="scroll-indicator">
          <div class="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </section>
    `;
  }

  init() {
    this.animateIn();
    this.bindEvents();
    this.animateStats();
  }

  animateIn() {
    createTimeline({ autoplay: true })
      .add('.hero-badge', {
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      }, 0)
      .add('.title-line', {
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 1200,
        delay: stagger(150),
        easing: 'easeOutExpo'
      }, 200)
      .add('.subtitle-item', {
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: stagger(100),
        easing: 'easeOutExpo'
      }, 600)
      .add('.hero-cta button', {
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        delay: stagger(100),
        easing: 'easeOutElastic(1, .8)'
      }, 1000)
      .add('.hero-visual', {
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1500,
        easing: 'easeOutExpo'
      }, 800);

    // Animate orbs
    animate('.visual-orb', {
      translateY: [0, -20, 0],
      duration: 4000,
      delay: stagger(500),
      loop: true,
      easing: 'easeInOutQuad'
    });

    // Morph shape
    const shapePath = document.querySelector('.shape-path');
    if (shapePath) {
      const paths = [
        'M200,50 L350,150 L350,250 L200,350 L50,250 L50,150 Z',
        'M200,70 L330,140 L360,260 L210,340 L60,260 L40,140 Z',
        'M200,50 L350,150 L350,250 L200,350 L50,250 L50,150 Z'
      ];

      let pathIndex = 0;
      setInterval(() => {
        pathIndex = (pathIndex + 1) % paths.length;
        animate(shapePath, {
          d: paths[pathIndex],
          duration: 2000,
          easing: 'easeInOutQuad'
        });
      }, 3000);
    }

    // Scroll indicator animation
    animate('.scroll-line', {
      scaleY: [0, 1],
      duration: 1500,
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate'
    });
  }

  bindEvents() {
    document.querySelectorAll('[data-scroll-to]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget.dataset.scrollTo;
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  animateStats() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.stat-item').forEach(item => {
            const target = parseInt(item.dataset.count);
            const number = item.querySelector('.stat-number');
            const obj = { value: 0 };
            
            animate(obj, {
              value: target,
              duration: 2000,
              easing: 'easeOutExpo',
              update: () => {
                number.textContent = Math.round(obj.value);
              }
            });
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) observer.observe(statsSection);
  }
}
