/**
 * Kritika Sharma — Student Portfolio Data
 * B.Tech 2nd-Year Student | JECRC University, Jaipur
 */

const portfolioData = {
  personal: {
    fullName: "Kritika Sharma",
    title: "B.Tech 2nd-Year Student | Aspiring Software Developer",
    subtitle: "B.Tech Student | Aspiring Software Developer | Python & C++ Programmer",
    university: "JECRC University, Jaipur",
    email: "ks5099571@gmail.com",
    phone: "6376974507",
    phoneDisplay: "+91 63769 74507",
    address: "Narayan Niwas, Infront of MGUMST, Vidhani, Jaipur, Rajasthan, India",
    cityState: "Jaipur, Rajasthan, India",
    githubProfile: "https://github.com/ks5099571-dotcom?tab=projects",
    heroIntro: "I am a second-year B.Tech student at JECRC University, Jaipur, passionate about programming, problem-solving, and building practical software projects. I enjoy learning new technologies and improving my coding skills through hands-on assignments and projects.",
    aboutIntroParagraph1: "I am Kritika Sharma, a second-year B.Tech student at JECRC University, Jaipur. I am building a strong foundation in programming and computer science through academic learning and practical projects. I have experience working with Python, C++, Java, and C at a student learning level. My current focus is improving my problem-solving abilities, writing clean code, understanding software development concepts, and building projects that demonstrate my learning and creativity.",
    aboutIntroParagraph2: "I believe in continuous learning and enjoy using modern development tools and AI-assisted coding tools to understand problems, improve code quality, and develop better programming practices."
  },

  skills: {
    languages: [
      {
        name: "Python",
        description: "Core syntax, functions, object-oriented concepts, and academic assignment scripts.",
        level: "Academic Learning & Practice",
        icon: "python"
      },
      {
        name: "C++",
        description: "Problem-solving fundamentals, basic algorithms, and structured programming.",
        level: "Academic Learning & Practice",
        icon: "cpp"
      },
      {
        name: "Java",
        description: "Object-oriented principles, classes, methods, and syntax foundations.",
        level: "Academic Learning & Practice",
        icon: "java"
      },
      {
        name: "C",
        description: "Procedural programming fundamentals, control structures, and basic memory concepts.",
        level: "Academic Learning & Practice",
        icon: "c"
      }
    ],

    technical: [
      {
        name: "Basic Programming",
        description: "Writing structured logic, control flow, loops, and modular functions.",
        icon: "code"
      },
      {
        name: "Problem Solving",
        description: "Translating computational problems into systematic algorithmic steps.",
        icon: "puzzle"
      },
      {
        name: "Data Structures Fundamentals",
        description: "Understanding arrays, lists, structures, stacks, and foundational data organization.",
        icon: "database"
      },
      {
        name: "Algorithms Fundamentals",
        description: "Factorial, Fibonacci, searching, sorting, and algorithmic thinking.",
        icon: "cpu"
      },
      {
        name: "Debugging & Code Improvement",
        description: "Error identification, syntax troubleshooting, and refactoring for clean code.",
        icon: "bug"
      },
      {
        name: "Git & GitHub Basics",
        description: "Repository creation, commits, branches, pushing code, and README documentation.",
        icon: "git-branch"
      }
    ],

    tools: [
      {
        name: "Cursor AI",
        description: "AI-assisted code editor used for refactoring, understanding errors, and code quality improvement.",
        badge: "Assignment Tool",
        icon: "sparkles"
      },
      {
        name: "GitHub",
        description: "Version control platform hosting academic assignments and program repositories.",
        badge: "Version Control",
        icon: "github"
      },
      {
        name: "Visual Studio Code",
        description: "Modern code editor used for writing, organizing, and debugging programming assignments.",
        badge: "Code Editor",
        icon: "terminal"
      },
      {
        name: "AI-Assisted Programming Tools",
        description: "Using LLM tools ethically to comprehend errors, clarify logic, and refine code readability.",
        badge: "Modern Workflow",
        icon: "bot"
      }
    ]
  },

  projects: [
    {
      id: "01",
      number: "01",
      title: "Python Programs Collection",
      category: "python",
      categoryLabel: "Python & Core Logic",
      tag: "Academic Assignment",
      description: "A collection of Python programs demonstrating fundamental programming concepts, including factorial calculation, Fibonacci sequence generation, and structure-to-dictionary conversion. The repository also includes an updated README file explaining the programs and how to use them.",
      programsIncluded: [
        "Factorial Calculator (recursive & iterative approaches)",
        "Fibonacci Sequence Generator (series progression)",
        "Structure-to-Dictionary Conversion (student class mapping)"
      ],
      technologies: ["Python", "Git", "GitHub", "Markdown"],
      keyFeatures: [
        "Demonstrates basic Python programming concepts.",
        "Includes multiple small programming exercises.",
        "Provides readable and organized code.",
        "Includes project documentation through README."
      ],
      githubUrl: "https://github.com/ks5099571-dotcom/python-basics-.25bcon2469",
      fallbackGithub: "https://github.com/ks5099571-dotcom?tab=projects",
      subRepositories: [
        {
          name: "Factorial Calculator Repo",
          url: "https://github.com/ks5099571-dotcom/python-basics-.25bcon2469"
        },
        {
          name: "Fibonacci Series Repo",
          url: "https://github.com/ks5099571-dotcom/python-basics_01_25bcon2469"
        },
        {
          name: "Student Class / Struct Repo",
          url: "https://github.com/ks5099571-dotcom/python-basics_02_25bcon2469"
        }
      ],
      liveDemoType: "none", // CLI project
      iconType: "terminal"
    },
    {
      id: "02",
      number: "02",
      title: "Messy Python Code Improvement Using AI",
      category: "ai",
      categoryLabel: "AI-Assisted Development",
      tag: "Code Quality & Refactoring",
      description: "A Python code improvement project in which an initially messy or poorly organized Python script is reviewed and improved with AI assistance. The project demonstrates how code readability, structure, naming conventions, and maintainability can be improved.",
      technologies: ["Python", "Cursor AI", "AI-Assisted Programming"],
      keyFeatures: [
        "Improves code readability and organization.",
        "Uses meaningful variable and function names.",
        "Removes unnecessary repetition where appropriate.",
        "Applies clean coding practices.",
        "Helps explain the differences between the original and improved code."
      ],
      academicNote: "Academic code-improvement project demonstrating practical refactoring with AI assistance.",
      githubUrl: "https://github.com/ks5099571-dotcom?tab=projects",
      fallbackGithub: "https://github.com/ks5099571-dotcom?tab=projects",
      liveDemoType: "none",
      iconType: "sparkles"
    },
    {
      id: "03",
      number: "03",
      title: "Bug Fixing Using Cursor AI",
      category: "ai",
      categoryLabel: "AI-Assisted Development",
      tag: "Debugging & Verification",
      description: "A debugging project that demonstrates identifying and correcting errors in an incorrect or buggy program using Cursor AI. The project focuses on understanding errors, correcting the code, and testing the corrected solution.",
      technologies: ["Python", "Cursor AI", "Debugging"],
      keyFeatures: [
        "Identifies programming errors accurately.",
        "Uses AI assistance to understand possible causes.",
        "Corrects bugs while maintaining the intended program functionality.",
        "Tests the corrected code thoroughly.",
        "Documents the original issue and the solution."
      ],
      githubUrl: "https://github.com/ks5099571-dotcom?tab=projects",
      fallbackGithub: "https://github.com/ks5099571-dotcom?tab=projects",
      liveDemoType: "none",
      iconType: "bug"
    },
    {
      id: "04",
      number: "04",
      title: "Interactive Quiz Application",
      category: "web",
      categoryLabel: "Web Applications",
      tag: "Lecture 10 Project",
      description: "An interactive quiz application developed as part of Lecture 10. The application allows users to answer questions, select options, and view their results. It demonstrates basic programming logic and user interaction.",
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
      keyFeatures: [
        "Displays quiz questions and answer options clearly.",
        "Allows users to select answers interactively.",
        "Checks answers and calculates real-time scores.",
        "Displays the final quiz result with performance feedback.",
        "Provides a simple, user-friendly, responsive interface."
      ],
      githubUrl: "https://github.com/ks5099571-dotcom?tab=projects",
      fallbackGithub: "https://github.com/ks5099571-dotcom?tab=projects",
      liveDemoType: "quiz-interactive", // Has fully working playable demo inside portfolio modal!
      liveDemoLabel: "Try Live Demo",
      iconType: "help-circle"
    },
    {
      id: "05",
      number: "05",
      title: "Book Reading List Application",
      category: "web",
      categoryLabel: "Web Applications",
      tag: "Lecture 11 Project",
      description: "A book reading list application developed as part of Lecture 11. It helps users organize their reading lists and keep track of books they want to read or have already read.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      keyFeatures: [
        "Displays a curated list of books.",
        "Helps users organize and categorize reading lists.",
        "Allows users to track reading status (Want to Read / In Progress / Finished).",
        "Provides a clear, simple, and responsive user interface.",
        "Includes updated README documentation with deployed links when available."
      ],
      githubUrl: "https://github.com/ks5099571-dotcom?tab=projects",
      fallbackGithub: "https://github.com/ks5099571-dotcom?tab=projects",
      liveDemoType: "coming-soon", // Exactly per instructions: "show a non-clickable 'Deployment Coming Soon' label instead of inventing a URL"
      iconType: "book-open"
    }
  ],

  education: {
    degree: "Bachelor of Technology (B.Tech)",
    year: "Second Year (2nd Year)",
    institution: "JECRC University, Jaipur, Rajasthan, India",
    status: "Currently Enrolled",
    focusAreas: [
      "Programming Fundamentals",
      "Data Structures and Algorithms",
      "Computer Science Fundamentals",
      "Software Development",
      "Practical Programming Assignments"
    ]
  },

  // Interactive sample quiz for Lecture 10 live demo
  quizSampleQuestions: [
    {
      q: "What does the abbreviation 'CPU' stand for in computer systems?",
      options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Processing Unit"],
      correct: 1,
      explanation: "CPU stands for Central Processing Unit, the primary component that executes instructions."
    },
    {
      q: "Which data structure operates on a Last-In, First-Out (LIFO) principle?",
      options: ["Queue", "Array", "Stack", "Linked List"],
      correct: 2,
      explanation: "A Stack follows LIFO, where the last element inserted is the first one removed."
    },
    {
      q: "In Python, which keyword is used to define a function?",
      options: ["func", "def", "function", "lambda"],
      correct: 1,
      explanation: "In Python, the 'def' keyword is used to declare user-defined functions."
    },
    {
      q: "What is the primary role of Git in software development?",
      options: ["Database management", "Version control and source code tracking", "Compiling C++ programs", "Cloud server hosting"],
      correct: 1,
      explanation: "Git is a distributed version control system that tracks changes in source code."
    },
    {
      q: "Which C++ header file is commonly included for standard input and output streams?",
      options: ["<iostream>", "<stdio.h>", "<conio.h>", "<stdlib.h>"],
      correct: 0,
      explanation: "<iostream> provides cin, cout, cerr, and clog streams in modern C++."
    }
  ]
};

// Freeze data to avoid accidental mutations
if (typeof Object.freeze === 'function') {
  Object.freeze(portfolioData);
}


/**
 * Kritika Sharma — Student Portfolio Application Logic
 * Implements Theme Toggle, Mobile Nav, ScrollSpy, Project Filtering,
 * Interactive Quiz Demo, Project Modals, Form Validation, and Accessibility.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initAvatarDetection();
  renderDynamicData();
  initProjectFiltering();
  initModals();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. THEME TOGGLE (DARK / LIGHT MODE - DEFAULT DARK)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIconSun = document.getElementById('themeIconSun');
  const themeIconMoon = document.getElementById('themeIconMoon');

  // Default theme is explicitly 'dark'
  const savedTheme = localStorage.getItem('kritika_theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('kritika_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIconSun && themeIconMoon) {
      if (theme === 'dark') {
        themeIconSun.style.display = 'block';
        themeIconMoon.style.display = 'none';
        if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
      } else {
        themeIconSun.style.display = 'none';
        themeIconMoon.style.display = 'block';
        if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
  }
}

/* ==========================================================================
   2. NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll elevation shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', false);
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', false);
      }
    });
  }

  // Active section spy
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (activeLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          activeLink.classList.add('active');
        } else {
          activeLink.classList.remove('active');
        }
      }
    });
  }
}

/* ==========================================================================
   3. AVATAR / PROFILE PHOTO AUTO-DETECTION
   ========================================================================== */
function initAvatarDetection() {
  const profileImg = document.getElementById('heroProfileImg');
  if (!profileImg) return;

  // Attempt to check if a real photo 'profile.jpg' has been added
  const testImg = new Image();
  testImg.src = 'profile.jpg';
  testImg.onload = function() {
    profileImg.src = 'profile.jpg';
    profileImg.alt = 'Kritika Sharma - Profile Photo';
  };
  testImg.onerror = function() {
    // Keep high-resolution SVG placeholder illustration
    profileImg.src = 'avatar-placeholder.svg';
    profileImg.alt = 'Kritika Sharma - Student Developer Illustration';
  };
}

/* ==========================================================================
   4. RENDER DATA (PROJECTS, SKILLS, ETC.)
   ========================================================================== */
function renderDynamicData() {
  renderProjectsGrid();
}

function getIconSvg(type) {
  switch (type) {
    case 'terminal':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`;
    case 'sparkles':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`;
    case 'bug':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="14" x="8" y="6" rx="4"></rect><path d="m19 7-3 2"></path><path d="m5 7 3 2"></path><path d="m19 19-3-2"></path><path d="m5 19 3-2"></path><path d="M20 13h-4"></path><path d="M4 13h4"></path><path d="m10 4 1 2"></path><path d="m14 4-1 2"></path></svg>`;
    case 'help-circle':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
    case 'book-open':
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
  }
}

function renderProjectsGrid() {
  const container = document.getElementById('projectsContainer');
  if (!container || !portfolioData.projects) return;

  container.innerHTML = portfolioData.projects.map(project => {
    // Generate feature list items
    const featuresHtml = project.keyFeatures.map(feat => `
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${feat}</span>
      </li>
    `).join('');

    // Tech chips
    const techHtml = project.technologies.map(tech => `
      <span class="tech-chip">${tech}</span>
    `).join('');

    // Action buttons based on live demo status
    let actionButtons = `
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View ${project.title} on GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        <span>View on GitHub</span>
      </a>
    `;

    if (project.liveDemoType === 'quiz-interactive') {
      actionButtons += `
        <button type="button" class="btn btn-primary btn-sm open-quiz-btn" aria-label="Launch interactive quiz demo">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          <span>Try Live Demo</span>
        </button>
      `;
    } else if (project.liveDemoType === 'coming-soon') {
      actionButtons += `
        <span class="status-badge-soon" title="Deployment will be added upon live release">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span>Deployment Coming Soon</span>
        </span>
      `;
    }

    // Detail modal button
    actionButtons += `
      <button type="button" class="btn btn-outline btn-sm open-detail-btn" data-project-id="${project.id}" aria-label="View complete details for ${project.title}">
        <span>Details</span>
      </button>
    `;

    return `
      <article class="project-card" data-category="${project.category}">
        <div class="project-card-header">
          <span class="project-number">Project ${project.number}</span>
          <span class="project-type-tag">${project.tag}</span>
        </div>

        <div class="project-icon-wrapper">
          ${getIconSvg(project.iconType)}
        </div>

        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>

        <div class="project-features-list">
          <div class="project-features-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
            <span>Key Project Highlights</span>
          </div>
          <ul>
            ${featuresHtml}
          </ul>
        </div>

        <div class="project-tech-tags">
          ${techHtml}
        </div>

        <div class="project-card-footer">
          ${actionButtons}
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   5. PROJECT FILTERING
   ========================================================================== */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. MODALS & INTERACTIVE QUIZ APPLICATION
   ========================================================================== */
function initModals() {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContainer = document.getElementById('modalContainer');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (!modalOverlay || !modalCloseBtn) return;

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Open Project Details Modal
  document.addEventListener('click', (e) => {
    const detailBtn = e.target.closest('.open-detail-btn');
    if (detailBtn) {
      const pId = detailBtn.getAttribute('data-project-id');
      const project = portfolioData.projects.find(p => p.id === pId);
      if (project) {
        showProjectDetailsModal(project);
      }
    }

    const quizBtn = e.target.closest('.open-quiz-btn');
    if (quizBtn) {
      startInteractiveQuiz();
    }
  });

  function openModal(title, contentHtml) {
    modalTitle.textContent = title;
    modalBody.innerHTML = contentHtml;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function showProjectDetailsModal(project) {
    let subReposHtml = '';
    if (project.subRepositories && project.subRepositories.length > 0) {
      subReposHtml = `
        <div style="margin-top: 18px; padding: 14px; background: var(--bg-surface-elevated); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; margin-bottom: 8px; color: var(--accent-purple);">Related Project Repositories</h4>
          <ul style="display: flex; flex-direction: column; gap: 8px;">
            ${project.subRepositories.map(r => `
              <li>
                <a href="${r.url}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-blue); display: flex; align-items: center; gap: 6px; font-size: 0.88rem; font-weight: 600;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  <span>${r.name}</span>
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    const html = `
      <div style="line-height: 1.7;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
          <span class="tag-badge accent">${project.tag}</span>
          <span style="font-size: 0.85rem; color: var(--text-muted);">${project.categoryLabel}</span>
        </div>
        <p style="font-size: 1rem; color: var(--text-primary); margin-bottom: 16px;">${project.description}</p>
        
        <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 8px;">Technologies & Tools</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px;">
          ${project.technologies.map(t => `<span class="tech-chip">${t}</span>`).join('')}
        </div>

        <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 8px;">Key Implementation Features</h4>
        <ul style="margin-bottom: 18px; padding-left: 20px; list-style-type: disc; color: var(--text-secondary); font-size: 0.9rem;">
          ${project.keyFeatures.map(f => `<li style="margin-bottom: 6px;">${f}</li>`).join('')}
        </ul>

        ${subReposHtml}

        <div style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <span>Open Repository on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
    `;

    openModal(`Project ${project.number}: ${project.title}`, html);
  }

  // Live Interactive Quiz Runner for Lecture 10 Project
  function startInteractiveQuiz() {
    let currentIdx = 0;
    let score = 0;
    const questions = portfolioData.quizSampleQuestions;

    function renderQuestion() {
      const q = questions[currentIdx];
      const progressPercent = Math.round(((currentIdx + 1) / questions.length) * 100);

      const html = `
        <div class="quiz-runner">
          <div class="quiz-progress-bar">
            <span>Question ${currentIdx + 1} of ${questions.length}</span>
            <span>Current Score: ${score}/${questions.length}</span>
          </div>
          <div class="quiz-meter">
            <div class="quiz-meter-fill" style="width: ${progressPercent}%;"></div>
          </div>

          <div class="quiz-question-box">
            <p class="quiz-question-text">${q.q}</p>
            <div class="quiz-options-list">
              ${q.options.map((opt, i) => `
                <button type="button" class="quiz-option-btn" data-index="${i}">
                  <span><strong>${String.fromCharCode(65 + i)}.</strong> ${opt}</span>
                </button>
              `).join('')}
            </div>
            <div class="quiz-explanation" id="quizExplanation"></div>
          </div>

          <div style="display: flex; justify-content: flex-end;">
            <button type="button" class="btn btn-primary btn-sm" id="quizNextBtn" style="display: none;">
              <span>${currentIdx < questions.length - 1 ? 'Next Question' : 'View Results'}</span>
            </button>
          </div>
        </div>
      `;

      openModal('Lecture 10: Interactive Quiz Demonstration', html);

      const optionBtns = document.querySelectorAll('.quiz-option-btn');
      const explanationBox = document.getElementById('quizExplanation');
      const nextBtn = document.getElementById('quizNextBtn');

      optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const chosenIdx = parseInt(btn.getAttribute('data-index'), 10);
          optionBtns.forEach(b => b.disabled = true);

          if (chosenIdx === q.correct) {
            score++;
            btn.classList.add('correct');
          } else {
            btn.classList.add('wrong');
            optionBtns[q.correct].classList.add('correct');
          }

          if (explanationBox) {
            explanationBox.innerHTML = `<strong>Explanation:</strong> ${q.explanation}`;
            explanationBox.style.display = 'block';
          }

          if (nextBtn) {
            nextBtn.style.display = 'inline-flex';
            nextBtn.focus();
            nextBtn.onclick = () => {
              if (currentIdx < questions.length - 1) {
                currentIdx++;
                renderQuestion();
              } else {
                renderResults();
              }
            };
          }
        });
      });
    }

    function renderResults() {
      const percentage = Math.round((score / questions.length) * 100);
      let feedback = "Good effort! Keep reviewing computer science fundamentals.";
      if (percentage >= 80) {
        feedback = "Outstanding! Excellent understanding of core computing concepts.";
      } else if (percentage >= 60) {
        feedback = "Solid foundation! A great demonstration of basic programming logic.";
      }

      const html = `
        <div class="quiz-results-card">
          <div class="quiz-score-badge">${score} / ${questions.length}</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 8px;">Quiz Completed! (${percentage}%)</h3>
          <p style="color: var(--text-secondary); margin-bottom: 24px;">${feedback}</p>
          <div style="display: flex; justify-content: center; gap: 12px;">
            <button type="button" class="btn btn-primary btn-sm" id="retryQuizBtn">
              <span>Retake Quiz</span>
            </button>
            <a href="${portfolioData.projects[3].githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <span>View Project Repository</span>
            </a>
          </div>
        </div>
      `;

      openModal('Lecture 10: Quiz Results', html);

      const retryBtn = document.getElementById('retryQuizBtn');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => {
          currentIdx = 0;
          score = 0;
          renderQuestion();
        });
      }
    }

    renderQuestion();
  }
}

/* ==========================================================================
   7. CONTACT FORM VALIDATION & CLIENT-SIDE DEMO HANDLER
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const nameInput = document.getElementById('senderName');
  const emailInput = document.getElementById('senderEmail');
  const subjectInput = document.getElementById('messageSubject');
  const messageInput = document.getElementById('messageBody');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    [nameError, emailError, subjectError, messageError].forEach(el => {
      if (el) el.classList.remove('error');
    });

    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const subjectVal = subjectInput.value.trim();
    const messageVal = messageInput.value.trim();

    // Validate Name
    if (nameVal.length < 2) {
      if (nameError) {
        nameError.textContent = 'Please enter your full name (minimum 2 characters).';
        nameError.classList.add('error');
      }
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      if (emailError) {
        emailError.textContent = 'Please provide a valid email address.';
        emailError.classList.add('error');
      }
      isValid = false;
    }

    // Validate Subject
    if (subjectVal.length < 3) {
      if (subjectError) {
        subjectError.textContent = 'Please provide a clear subject.';
        subjectError.classList.add('error');
      }
      isValid = false;
    }

    // Validate Message
    if (messageVal.length < 10) {
      if (messageError) {
        messageError.textContent = 'Please enter a message of at least 10 characters.';
        messageError.classList.add('error');
      }
      isValid = false;
    }

    if (!isValid) return;

    // Honest handling per prompt instructions:
    // "Do not pretend that a message has been sent if no backend or email service is connected.
    // If no backend is configured, explain that the form is a front-end demo or provide a working email-based alternative."
    const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent('[Portfolio Message] ' + subjectVal)}&body=${encodeURIComponent('From: ' + nameVal + ' (' + emailVal + ')\n\nMessage:\n' + messageVal)}`;

    showSubmissionDialog(nameVal, mailtoLink);
    contactForm.reset();
  });

  function showSubmissionDialog(senderName, mailtoLink) {
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalOverlay = document.getElementById('modalOverlay');

    const html = `
      <div style="line-height: 1.7; text-align: left;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(52, 211, 153, 0.2); color: var(--accent-green); display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h3 style="font-size: 1.25rem; font-weight: 700;">Thank You, ${senderName}!</h3>
        </div>

        <p style="color: var(--text-secondary); margin-bottom: 14px;">
          This contact form has successfully passed client-side validation. Because this portfolio is a client-side student project without a dedicated mail server, your message is ready to be sent directly to <strong>${portfolioData.personal.email}</strong> via your default email application.
        </p>

        <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 14px; margin-bottom: 20px;">
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Direct Recipient:</p>
          <p style="font-family: var(--font-mono); font-size: 0.95rem; color: var(--accent-blue); font-weight: 600;">${portfolioData.personal.email}</p>
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="${mailtoLink}" class="btn btn-primary btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
            <span>Launch Email App to Send</span>
          </a>
          <button type="button" class="btn btn-secondary btn-sm" id="closeFormModalBtn">
            <span>Dismiss</span>
          </button>
        </div>
      </div>
    `;

    modalTitle.textContent = "Message Validation & Transmission";
    modalBody.innerHTML = html;
    modalOverlay.classList.add('active');

    const closeBtn = document.getElementById('closeFormModalBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }
}

/* ==========================================================================
   8. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
