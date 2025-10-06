import './style.css'
import { ParticleSystem } from './utils/animations.js'
import { Navigation } from './components/Navigation.js'
import { Hero } from './components/Hero.js'
import { Projects } from './components/Projects.js'
import { Connect } from './components/Connect.js'

class App {
  constructor() {
    this.init();
  }

  init() {
    this.render();
    this.initParticles();
    this.initComponents();
    this.addFooter();
  }

  render() {
    const app = document.querySelector('#app');
    
    const navigation = new Navigation();
    const hero = new Hero();
    const projects = new Projects();
    const connect = new Connect();

    app.innerHTML = `
      ${navigation.render()}
      ${hero.render()}
      ${projects.render()}
      ${connect.render()}
    `;
  }

  initParticles() {
    const canvas = document.getElementById('particle-canvas');
    const particles = new ParticleSystem(canvas);
    particles.start();
  }

  initComponents() {
    const navigation = new Navigation();
    navigation.init();

    const hero = new Hero();
    hero.init();

    const projects = new Projects();
    projects.init();

    const connect = new Connect();
    connect.init();
  }

  addFooter() {
    const app = document.querySelector('#app');
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Student Affairs Committee</h4>
            <p>Faculty of Engineering & Technology<br>Jain (Deemed-to-be University)</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <a href="https://attendance.sa-fet.com" target="_blank">Attendance Portal</a>
            <a href="https://hub.sa-fet.com" target="_blank">FET Hub</a>
          </div>
          <div class="footer-section">
            <h4>Contact</h4>
            <p>Jain Global Campus<br>Kanakapura, Karnataka 562112</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Student Affairs Committee, FET - Jain University. All rights reserved.</p>
        </div>
      </div>
    `;
    app.appendChild(footer);
    this.addFooterStyles();
  }

  addFooterStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .site-footer {
        background: rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 3rem 0 1.5rem;
        margin-top: 4rem;
      }
      .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }
      .footer-section h4 {
        color: var(--accent);
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }
      .footer-section p {
        color: var(--gray);
        line-height: 1.6;
      }
      .footer-section a {
        display: block;
        color: var(--gray);
        margin-bottom: 0.5rem;
        transition: color 0.3s ease;
      }
      .footer-section a:hover {
        color: var(--accent);
      }
      .footer-bottom {
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
        color: var(--gray);
        font-size: 0.9rem;
      }
    `;
    document.head.appendChild(style);
  }
}

new App();
