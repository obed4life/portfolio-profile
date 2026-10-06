const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Git",
  "Responsive UI",
];

const projects = [
  {
    tag: "Business Website",
    title: "Engineering Company Website",
    description:
      "A modern website for a mining and engineering company, designed to promote services and share business information clearly.",
  },
  {
    tag: "Academic Project",
    title: "Final Year Project Site",
    description:
      "A portfolio-style website that presents academic work, technical skills, and project outcomes in a structured and engaging way.",
  },
  {
    tag: "Product Concept",
    title: "Portfolio Redesign",
    description:
      "A polished personal brand website concept focused on clarity, good UX, and a strong developer-first visual identity.",
  },
];

function createSkillCard(skillName) {
  const card = document.createElement("div");
  card.className = "skill-card";

  const label = document.createElement("span");
  label.textContent = skillName;

  card.appendChild(label);
  return card;
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const tag = document.createElement("div");
  tag.className = "project-tag";
  tag.textContent = project.tag;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  card.append(tag, title, description);
  return card;
}

function renderCollection(container, items, createItem) {
  if (!container) return;

  container.innerHTML = "";
  items.forEach((item) => container.appendChild(createItem(item)));
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const skillsGrid = document.querySelector(".skills-grid");
  renderCollection(
    skillsGrid,
    skills,
    (skillName) => createSkillCard(skillName)
  );

  const projectsGrid = document.querySelector(".projects-grid");
  renderCollection(
    projectsGrid,
    projects,
    (project) => createProjectCard(project)
  );

  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
});
