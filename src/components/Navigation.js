import { animate, stagger, utils } from 'animejs';
import './navigation.css';

export class Navigation {
  constructor() {
    this.currentSection = 0;
    this.sections = ['hero', 'projects', 'connect'];
  }

  render() {
    return `
      <nav id="main-nav" class="main-nav">
        <div class="nav-logo">
          <svg viewBox="0 0 100 100" class="logo-svg">
            <circle class="logo-ring" cx="50" cy="50" r="40" />
            <text x="50" y="60" class="logo-text">SA</text>
          </svg>
          <div class="logo-text-wrap">
            <span class="logo-title">Student Affairs</span>
            <span class="logo-subtitle">FET • Jain University</span>
          </div>
        </div>
        
        <div class="nav-menu">
          <a href="#hero" class="nav-link active" data-section="hero">
            <span class="nav-link-text">Home</span>
            <span class="nav-link-dot"></span>
          </a>
          <a href="#projects" class="nav-link" data-section="projects">
            <span class="nav-link-text">Projects</span>
            <span class="nav-link-dot"></span>
          </a>
          <a href="#connect" class="nav-link" data-section="connect">
            <span class="nav-link-text">Connect</span>
            <span class="nav-link-dot"></span>
          </a>
        </div>

        <div class="nav-indicator">
          <div class="nav-indicator-line"></div>
        </div>
      </nav>
    `;
  }

  init() {
    this.animateIn();
    this.bindEvents();
  }

  animateIn() {
    animate('.main-nav', {
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutExpo'
    });

    animate('.logo-ring', {
      strokeDashoffset: [utils.get('.logo-ring', 'strokeDashoffset'), 0],
      duration: 2000,
      easing: 'easeInOutQuad',
      delay: 300
    });

    animate('.nav-link', {
      translateY: [-30, 0],
      opacity: [0, 1],
      duration: 800,
      delay: stagger(100, { from: 'first', start: 500 }),
      easing: 'easeOutExpo'
    });
  }

  bindEvents() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.currentTarget.dataset.section;
        this.navigateTo(section);
      });
    });

    // Scroll spy
    window.addEventListener('scroll', () => this.updateActiveSection());
  }

  navigateTo(section) {
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      this.setActiveLink(section);
    }
  }

  setActiveLink(section) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.section === section);
    });

    const activeLink = document.querySelector(`[data-section="${section}"]`);
    if (activeLink) {
      const indicator = document.querySelector('.nav-indicator-line');
      const linkRect = activeLink.getBoundingClientRect();
      const navRect = document.querySelector('.nav-menu').getBoundingClientRect();
      
      animate(indicator, {
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        duration: 600,
        easing: 'easeOutExpo'
      });
    }
  }

  updateActiveSection() {
    const scrollPos = window.scrollY + 100;
    this.sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          this.setActiveLink(section);
        }
      }
    });
  }
}
