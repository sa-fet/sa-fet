import { animate, createTimeline, stagger } from 'animejs';
import './connect.css';

export class Connect {
  constructor() {
    this.activeTab = 'contact';
    this.leads = [
      {
        name: 'Example Name',
        role: 'Example Role',
        email: 'example@jainuniversity.ac.in',
        phone: '+91 98765 43210',
        linkedin: 'https://linkedin.com/in/dr-benaka-prasad-s-b-7bb524203',
        avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQEdB2M9uKYfkA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1609965589011?e=1762387200&v=beta&t=njk562OHwXigAGclSCCzdfYqPfc-0Emi-kly5CHUSVI'
      },
      {
        name: 'Example Name',
        role: 'Student Head',
        email: 'example@jainuniversity.ac.in',
        phone: '+91 98765 43211',
        instagram: 'https://instagram.com/safet_ju',
        avatar: 'url'
      },
      {
        name: 'Example Name',
        role: 'Event Coordinator',
        email: 'example@jainuniversity.ac.in',
        phone: '+91 98765 43212',
        github: 'https://github.com/safet-ju',
        avatar: 'url'
      }
    ];
  }

  render() {
    return `
      <section id="connect" class="connect-section section">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Get Connected</span>
            <h2 class="section-title">Let's Talk</h2>
          </div>

          <div class="connect-layout">
            <div class="tab-selector">
              <div class="tab-track">
                <div class="tab-indicator"></div>
              </div>
              <button class="tab-btn active" data-tab="contact">
                <svg class="tab-icon" viewBox="0 0 24 24">
                  <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
                  <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
                </svg>
                <span>Contact Team</span>
              </button>
              <button class="tab-btn" data-tab="event">
                <svg class="tab-icon" viewBox="0 0 24 24">
                  <rect x="3" y="6" width="18" height="15" rx="2" />
                  <path d="M3 10H21M7 3V6M17 3V6" />
                </svg>
                <span>Request Event</span>
              </button>
              <button class="tab-btn" data-tab="grievance">
                <svg class="tab-icon" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8V12M12 16H12.01" />
                </svg>
                <span>Submit Grievance</span>
              </button>
            </div>

            <div class="tab-content-container">
              <div class="tab-content active" data-content="contact">
                ${this.renderContactTab()}
              </div>
              <div class="tab-content" data-content="event">
                ${this.renderEventTab()}
              </div>
              <div class="tab-content" data-content="grievance">
                ${this.renderGrievanceTab()}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderContactTab() {
    return `
      <div class="contact-grid" style="grid-template-columns: repeat(2, 1fr);">
      ${this.leads.map((lead, index) => `
      <div class="lead-card glass" data-index="${index}">
        <div class="lead-avatar">
        ${
          lead.avatar && lead.avatar.startsWith('http')
          ? `<img src="${lead.avatar}" alt="${lead.name}" />`
          : (lead.avatar || '')
        }
        </div>
        <h3 class="lead-name">${lead.name}</h3>
        <p class="lead-role">${lead.role}</p>
        <div class="lead-contacts">
        <a href="mailto:${lead.email}" class="contact-btn" title="Email">
          <svg viewBox="0 0 24 24">
          <path d="M3 8L10.89 13.26C11.5427 13.6727 12.4573 13.6727 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" />
          </svg>
        </a>
        <a href="tel:${lead.phone}" class="contact-btn" title="Phone">
          <svg viewBox="0 0 24 24">
          <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" />
          </svg>
        </a>
        ${lead.linkedin ? `
        <a href="${lead.linkedin}" target="_blank" class="contact-btn" title="LinkedIn">
          <svg viewBox="0 0 24 24">
          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        ` : ''}
        ${lead.instagram ? `
        <a href="${lead.instagram}" target="_blank" class="contact-btn" title="Instagram">
          <svg viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" />
          <path d="M17.5 6.5H17.51" />
          </svg>
        </a>
        ` : ''}
        ${lead.github ? `
        <a href="${lead.github}" target="_blank" class="contact-btn" title="GitHub">
          <svg viewBox="0 0 24 24">
          <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.65 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.65 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" />
          </svg>
        </a>
        ` : ''}
        </div>
      </div>
      `).join('')}
      </div>
    `;
  }

  renderEventTab() {
    return `
      <form class="connect-form" id="event-form">
        <div class="form-group">
          <label class="form-label">Event Name</label>
          <input type="text" name="eventName" class="form-input" required />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Event Date</label>
            <input type="date" name="eventDate" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Expected Attendees</label>
            <input type="number" name="attendees" class="form-input" required />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Organizer Name</label>
          <input type="text" name="organizerName" class="form-input" required />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" name="email" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Phone</label>
            <input type="tel" name="phone" class="form-input" required />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Event Category</label>
          <select name="category" class="form-input" required>
            <option value="">Select Category</option>
            <option value="cultural">Cultural</option>
            <option value="technical">Technical</option>
            <option value="sports">Sports</option>
            <option value="academic">Academic</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Event Description</label>
          <textarea name="description" class="form-input" rows="4" required></textarea>
        </div>
        <button type="submit" class="form-submit">
          <span>Send Request</span>
          <svg class="submit-icon" viewBox="0 0 24 24">
            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
          </svg>
        </button>
      </form>
    `;
  }

  renderGrievanceTab() {
    return `
      <form class="connect-form" id="grievance-form">
        <div class="form-group">
          <label class="form-label">Your Name</label>
          <input type="text" name="name" class="form-input" required />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" name="email" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Student ID</label>
            <input type="text" name="studentId" class="form-input" required />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Category</label>
          <select name="category" class="form-input" required>
            <option value="">Select Category</option>
            <option value="academic">Academic</option>
            <option value="facilities">Facilities</option>
            <option value="harassment">Harassment</option>
            <option value="discrimination">Discrimination</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Subject</label>
          <input type="text" name="subject" class="form-input" required />
        </div>
        <div class="form-group">
          <label class="form-label">Detailed Description</label>
          <textarea name="description" class="form-input" rows="5" required></textarea>
        </div>
        <div class="form-group">
          <label class="form-checkbox">
            <input type="checkbox" name="anonymous" />
            <span>Submit anonymously</span>
          </label>
        </div>
        <button type="submit" class="form-submit">
          <span>Submit Grievance</span>
          <svg class="submit-icon" viewBox="0 0 24 24">
            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
          </svg>
        </button>
      </form>
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

    observer.observe(document.getElementById('connect'));
  }

  animateIn() {
    createTimeline({ autoplay: true })
      .add('.tab-selector', {
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      }, 0)
      .add('.tab-btn', {
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 600,
        delay: stagger(100),
        easing: 'easeOutExpo'
      }, 200)
      .add('.tab-content.active', {
        scale: [0.95, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo'
      }, 600);

    this.animateLeadCards();

    // Initialize indicator position after animation
    setTimeout(() => {
      const activeBtn = document.querySelector('.tab-btn.active');
      const indicator = document.querySelector('.tab-indicator');
      if (activeBtn && indicator) {
        const btnRect = activeBtn.getBoundingClientRect();
        const trackRect = document.querySelector('.tab-track').getBoundingClientRect();
        indicator.style.top = `${btnRect.top - trackRect.top}px`;
        indicator.style.height = `${btnRect.height}px`;
        indicator.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      }
    }, 1000);
  }

  animateLeadCards() {
    animate('.lead-card', {
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 800,
      delay: stagger(150),
      easing: 'easeOutExpo'
    });
  }

  bindEvents() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.switchTab(e.currentTarget.dataset.tab));
    });

    document.getElementById('event-form')?.addEventListener('submit', (e) => this.handleEventSubmit(e));
    document.getElementById('grievance-form')?.addEventListener('submit', (e) => this.handleGrievanceSubmit(e));
  }

  switchTab(tab) {
    this.activeTab = tab;

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    document.querySelectorAll('.tab-content').forEach(content => {
      if (content.dataset.content === tab) {
        content.classList.add('active');
        animate(content, {
          scale: [0.95, 1],
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutExpo'
        });
      } else {
        content.classList.remove('active');
      }
    });

    const activeBtn = document.querySelector(`[data-tab="${tab}"]`);
    const indicator = document.querySelector('.tab-indicator');
    if (activeBtn && indicator) {
      const btnRect = activeBtn.getBoundingClientRect();
      const trackRect = document.querySelector('.tab-track').getBoundingClientRect();

      animate(indicator, {
        top: btnRect.top - trackRect.top,
        height: btnRect.height,
        duration: 0,
        easing: 'easeOutExpo'
      });
    }
  }

  handleEventSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const subject = `Event Request: ${data.eventName}`;
    const body = `
Event Details:
--------------
Event Name: ${data.eventName}
Date: ${data.eventDate}
Expected Attendees: ${data.attendees}
Category: ${data.category}

Organizer Information:
----------------------
Name: ${data.organizerName}
Email: ${data.email}
Phone: ${data.phone}

Description:
-----------
${data.description}
    `.trim();

    window.location.href = `mailto:events@sa-fet.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  handleGrievanceSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const subject = `Grievance: ${data.subject}`;
    const body = `
${data.anonymous ? '[ANONYMOUS SUBMISSION]' : ''}

Student Information:
--------------------
Name: ${data.anonymous ? 'Anonymous' : data.name}
Student ID: ${data.studentId}
Email: ${data.email}

Grievance Details:
------------------
Category: ${data.category}
Subject: ${data.subject}

Description:
-----------
${data.description}
    `.trim();

    window.location.href = `mailto:grievance@sa-fet.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
