# Kritika Sharma — Personal Portfolio Website

A modern, responsive, high-performance student portfolio website for **Kritika Sharma**, a 2nd-year Bachelor of Technology (B.Tech) student at **JECRC University**, Jaipur, Rajasthan, India.

Built using semantic **HTML5**, modern **CSS3** (with CSS Custom Properties & responsive Flexbox/Grid), and modular vanilla **JavaScript** (ES6+).

---

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Project Structure](#-project-structure)
- [How to Run Locally](#-how-to-run-locally)
- [How to Add or Replace Profile Photo](#-how-to-add-or-replace-profile-photo)
- [How to Connect GitHub Repositories](#-how-to-connect-github-repositories)
- [How to Deploy to the Web](#-how-to-deploy-to-the-web)
- [Academic Assignment Projects Summary](#-academic-assignment-projects-summary)
- [Required Student Inputs & Customization Checklist](#-required-student-inputs--customization-checklist)

---

## 🎯 Project Overview

- **Student:** Kritika Sharma
- **Academic Year:** Second Year (2nd Year) B.Tech
- **Institution:** JECRC University, Jaipur, Rajasthan, India
- **Core Languages:** Python, C++, Java, C
- **Primary Interests:** Programming, Problem Solving, Software Development
- **GitHub Profile:** [https://github.com/ks5099571-dotcom?tab=projects](https://github.com/ks5099571-dotcom?tab=projects)
- **Email:** [ks5099571@gmail.com](mailto:ks5099571@gmail.com)
- **Phone:** +91 63769 74507
- **Address:** Narayan Niwas, Infront of MGUMST, Vidhani, Jaipur, Rajasthan, India

---

## ✨ Key Features

1. **Dark Theme Default with Instant Light Mode Toggle:**
   - Designed in dark theme featuring dark navy (`#0A0F1D`), electric blue (`#38BDF8`), and violet/purple (`#A855F7`).
   - Includes a working light/dark toggle in the top-right header that saves user preference in `localStorage`.

2. **Fixed Glassmorphism Navigation Bar:**
   - Sticky navigation with smooth backdrop blur.
   - Quick navigation to Home, About Me, Skills, Projects, Education, and Contact.
   - Active scroll-spy that highlights the section you are viewing.
   - Responsive mobile hamburger drawer.

3. **Prominent Hero Section:**
   - Displays official heading `"Hi, I'm Kritika Sharma"`.
   - Subtitle: `"B.Tech Student | Aspiring Software Developer | Python & C++ Programmer"`.
   - Dual action buttons: **Explore My Projects** (scrolls down) and **Visit My GitHub** (opens GitHub profile).
   - Cyber-themed student developer avatar illustration with rotating rings, tech badges, and automatic photo replacement support.

4. **Honest & Grounded Academic Skills:**
   - No fake percentages or exaggerated claims.
   - Categorized into:
     - **Programming Languages:** Python, C++, Java, C
     - **Technical Skills:** Basic Programming, Problem Solving, Data Structures Fundamentals, Algorithms Fundamentals, Debugging & Code Improvement, Git & GitHub Basics
     - **Development Tools:** Cursor AI, GitHub, Visual Studio Code, AI-Assisted Programming Tools

5. **All 5 Academic Projects with Interactive Demonstrations:**
   - **Project 01:** Python Programs Collection (Factorial, Fibonacci, Structure-to-Dictionary).
   - **Project 02:** Messy Python Code Improvement Using AI (Cursor AI refactoring).
   - **Project 03:** Bug Fixing Using Cursor AI (Systematic debugging).
   - **Project 04:** Interactive Quiz Application (Lecture 10 Project) — includes a **built-in interactive playable Quiz Demo** in the portfolio!
   - **Project 05:** Book Reading List Application (Lecture 11 Project) — includes an honest non-clickable `"Deployment Coming Soon"` label per assessment guidelines.
   - Category filter tabs (All, Python & Core Logic, AI-Assisted, Web Applications).
   - Reusable modal popup to view complete assignment details.

6. **Interactive Contact Form with Honest Client-Side Handling:**
   - Validates Name, Email format, Subject, and Message length.
   - Transparently informs the visitor that this is an academic front-end project and offers an instant 1-click **Launch Email App** button prefilled with the sender's input.
   - Direct clickable `mailto:` and `tel:` links.

7. **Floating Back-to-Top Button:**
   - Automatically appears once the user scrolls past 350px.
   - Smoothly glides back to the top when clicked.

---

## 📁 Flat Project Structure (No Subfolders)

All files are located directly in the root directory for simplicity, college assignment compatibility, and instant deployment:

```text
kritika portfolio/
├── index.html               # Main semantic HTML5 structure with dark theme default
├── style.css                # Complete CSS design tokens, dark/light theme, layout, components
├── script.js                # Combined dataset, interactive quiz runner, modal, theme toggle
├── avatar-placeholder.svg   # Vector student coder illustration
├── favicon.svg              # Custom "KS" gradient favicon
├── README.md                # Project documentation and usage guide
└── page-audit.md            # Quality and accessibility audit report
```

---

## 🚀 How to Run Locally

Because this project uses vanilla web standards, it has zero dependencies and requires no compilation step.

### Option A: Double-Click (Easiest)
Simply double-click `index.html` in your file explorer (Finder on macOS) to open it in Google Chrome, Safari, Firefox, or Edge.

### Option B: Local Python HTTP Server
Open your terminal and run:
```bash
# Navigate to the portfolio folder
cd "/Users/varsharana12345/Documents/kritika portfolio"

# Start a local web server (Python 3 is already installed on your Mac)
python3 -m http.server 8080
```
Then open your browser at:
[http://localhost:8080](http://localhost:8080)

---

## 📸 How to Add or Replace Profile Photo

The portfolio is programmed with an automatic image detection script in `script.js`:

1. Take your desired photo or headshot.
2. Rename the image to:
   ```text
   profile.jpg
   ```
3. Place `profile.jpg` directly in the root folder alongside `index.html`:
   ```text
   kritika portfolio/profile.jpg
   ```
4. Refresh your browser! The website will automatically detect `profile.jpg` and display your photo in the glowing hero frame. If not present, it displays the vector student coder illustration.

---

## 🔗 How to Connect GitHub Repositories

Your GitHub profile link is already connected throughout the portfolio:
`https://github.com/ks5099571-dotcom?tab=projects`

Your verified repositories are already mapped in `js/data.js`:
- **Factorial Calculator:** `https://github.com/ks5099571-dotcom/python-basics-.25bcon2469`
- **Fibonacci Series:** `https://github.com/ks5099571-dotcom/python-basics_01_25bcon2469`
- **Student Class:** `https://github.com/ks5099571-dotcom/python-basics_02_25bcon2469`

When you create individual repositories on GitHub for Projects 2, 3, 4, or 5:
1. Open [script.js](file:///Users/varsharana12345/Documents/kritika%20portfolio/script.js).
2. Locate the corresponding project object in `portfolioData.projects`.
3. Replace the `githubUrl` field:
   ```javascript
   // Example for Project 02:
   githubUrl: "https://github.com/ks5099571-dotcom/your-new-repo-name",
   ```
4. Save the file. The "View on GitHub" button will now point directly to your specific repository!

---

## 🌐 How to Deploy to the Web

### Method 1: GitHub Pages (Free & Recommended)
1. Initialize Git in the project directory:
   ```bash
   cd "/Users/varsharana12345/Documents/kritika portfolio"
   git init
   git add .
   git commit -m "Initial commit of Kritika Sharma portfolio website"
   ```
2. Create a new repository on your GitHub account (`https://github.com/new`) named:
   ```text
   kritika-portfolio
   ```
3. Link and push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/ks5099571-dotcom/kritika-portfolio.git
   git push -u origin main
   ```
4. Go to **Settings > Pages** on your GitHub repository.
5. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
6. Within 1–2 minutes, your website will be live at:
   `https://ks5099571-dotcom.github.io/kritika-portfolio/`

### Method 2: Netlify (Drag & Drop)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `kritika portfolio` folder directly onto the page.
3. Your site will instantly be deployed with a live URL.

---

## 📚 Academic Assignment Projects Summary

| # | Project Title | Course / Lecture | Technologies | Live Demo Status | GitHub Repository Link |
|---|---|---|---|---|---|
| **01** | Python Programs Collection | Academic Assignment | Python, Git, Markdown | CLI / Terminal Scripts | [python-basics-.25bcon2469](https://github.com/ks5099571-dotcom/python-basics-.25bcon2469) |
| **02** | Messy Python Code Improvement Using AI | Academic Assignment | Python, Cursor AI | Academic Refactoring | [GitHub Projects](https://github.com/ks5099571-dotcom?tab=projects) |
| **03** | Bug Fixing Using Cursor AI | Academic Assignment | Python, Cursor AI, Debugging | Code Correction | [GitHub Projects](https://github.com/ks5099571-dotcom?tab=projects) |
| **04** | Interactive Quiz Application | Lecture 10 | HTML5, CSS3, JavaScript, DOM | **Interactive Quiz Modal** | [GitHub Projects](https://github.com/ks5099571-dotcom?tab=projects) |
| **05** | Book Reading List Application | Lecture 11 | HTML5, CSS3, JavaScript, LocalStorage | Deployment Coming Soon | [GitHub Projects](https://github.com/ks5099571-dotcom?tab=projects) |

---

## ✍️ Required Student Inputs & Customization Checklist

Here are the only items that require your personal input whenever you have them ready:
- [ ] **Profile Photo:** Add `assets/profile.jpg` if you wish to display your personal photograph instead of the student developer illustration.
- [ ] **Individual Repositories:** Once individual GitHub repositories are created for Projects 2, 3, 4, and 5, update their URLs in [js/data.js](file:///Users/varsharana12345/Documents/kritika%20portfolio/js/data.js).
- [ ] **Lecture 11 Deployed Link:** When you deploy the Book Reading List application, change `liveDemoType` in `js/data.js` to `live` and paste your deployed URL!
