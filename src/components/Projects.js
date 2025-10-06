import { animate, createTimeline, stagger } from 'animejs';
import './projects.css';

export class Projects {
  constructor() {
    this.projects = [
      {
        title: 'Attendance Portal',
        url: 'https://attendance.sa-fet.com',
        description: 'Comprehensive attendance management system for faculty members',
        icon: 'M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01',
        color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        stats: { faculty: '150+', accuracy: '99.9%' },
        gradient2: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
      },
      {
        title: 'FET Hub',
        url: 'https://hub.sa-fet.com',
        description: 'Discover and track all ongoing cultural, sports, and tech events at FET campus',
        icon: 'M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z',
        color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        stats: { events: '50+', students: '3K+' },
        gradient2: 'linear-gradient(45deg, rgba(240, 147, 251, 0.1) 0%, rgba(245, 87, 108, 0.1) 100%)'
      }
    ];

    this.programs = [
      { name: 'Academic Support', icon: '📚', status: 'Coming Soon' },
      { name: 'Career Guidance', icon: '💼', status: 'Coming Soon' },
      { name: 'Mental Wellness', icon: '🧠', status: 'Coming Soon' },
      { name: 'Sports & Clubs', icon: '⚽', status: 'Coming Soon' },
      { name: 'Cultural Events', icon: '🎭', status: 'Coming Soon' },
      { name: 'Tech Workshops', icon: '💻', status: 'Coming Soon' }
    ];
  }

  render() {
    return `
      <section id="projects" class="projects-section section">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Our Ecosystem</span>
            <h2 class="section-title">Current Projects</h2>
            <p class="section-description">
              Innovative platforms built to enhance your university experience
            </p>
          </div>

          <div class="projects-grid">
            ${this.projects.map((project, index) => `
              <div class="project-card glass hover-lift" data-index="${index}">
                <div class="project-background" style="background: ${project.color}"></div>
                <div class="project-mesh" style="background: ${project.gradient2 || project.color}"></div>
                <div class="project-pattern"></div>
                <div class="project-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="${project.icon}" />
                  </svg>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-stats">
                  ${Object.entries(project.stats).map(([key, value]) => `
                    <div class="stat">
                      <span class="stat-value">${value}</span>
                      <span class="stat-key">${key}</span>
                    </div>
                  `).join('')}
                </div>
                <a href="${project.url}" target="_blank" class="project-link">
                  <span>Visit Portal</span>
                  <svg class="link-arrow" viewBox="0 0 24 24">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                  </svg>
                </a>
                <div class="card-shimmer"></div>
              </div>
            `).join('')}
          </div>

          <div class="programs-section">
            <h3 class="programs-title">Program Speed Dial</h3>
            <div class="programs-dial">
              ${this.programs.map((program, index) => `
                <div class="dial-item" data-index="${index}">
                  <div class="dial-icon">${program.icon}</div>
                  <span class="dial-name">${program.name}</span>
                  <span class="dial-status">${program.status}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  init() {
    this.animateOnScroll();
    this.bindEvents();
  }

  animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateIn();
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(document.getElementById('projects'));
  }

  animateIn() {
    createTimeline()
      .add('.section-badge', {
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo'
      })
      .add('.section-title', {
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      }, '-=600')
      .add('.section-description', {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo'
      }, '-=800')
      .add('.project-card', {
        translateY: [60, 0],
        opacity: [0, 1],
        duration: 1200,
        delay: stagger(150),
        easing: 'easeOutExpo'
      }, '-=400')
      .add('.dial-item', {
        scale: [0, 1],
        opacity: [0, 1],
        duration: 600,
        delay: stagger(50),
        easing: 'easeOutElastic(1, .8)'
      }, '-=800');
  }

  bindEvents() {
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        animate(e.currentTarget.querySelector('.project-background'), {
          scale: 1.1,
          opacity: 0.3,
          duration: 400,
          easing: 'easeOutQuad'
        });

        animate(e.currentTarget.querySelector('.card-shimmer'), {
          translateX: ['-100%', '100%'],
          duration: 800,
          easing: 'easeInOutQuad'
        });
      });

      card.addEventListener('mouseleave', (e) => {
        animate(e.currentTarget.querySelector('.project-background'), {
          scale: 1,
          opacity: 0.15,
          duration: 400,
          easing: 'easeOutQuad'
        });
      });
    });

    document.querySelectorAll('.dial-item').forEach(item => {
      item.addEventListener('mouseenter', (e) => {
        animate(e.currentTarget, {
          scale: 1.1,
          rotate: 5,
          duration: 300,
          easing: 'easeOutQuad'
        });
      });

      item.addEventListener('mouseleave', (e) => {
        animate(e.currentTarget, {
          scale: 1,
          rotate: 0,
          duration: 300,
          easing: 'easeOutQuad'
        });
      });
    });
  }
}
