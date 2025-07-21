// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Projects data - Add your projects here as you create them
const projects = [
    {
        id: 1,
        title: "Love Calculator",
        type: "JavaScript Game",
        description: "Fun compatibility calculator that generates love percentages between two names with beautiful animations.",
        technologies: ["HTML", "CSS", "JavaScript"],
        demoUrl: "./projects/love-caculator/index.html",
        icon: "fas fa-heart"
    },
    {
        id: 2,
        title: "Artist Search",
        type: "Web Application",
        description: "Interactive artist information website featuring detailed artist profiles, albums, and related artists.",
        technologies: ["HTML", "CSS", "JavaScript"],
        demoUrl: "./projects/artistSearch/searchArtist.html",
        icon: "fas fa-music"
    }
    // Example project structure - remove these when you add your real projects
    // {
    //     id: 3,
    //     title: "Calculator App",
    //     type: "JavaScript Exercise",
    //     description: "A functional calculator built with HTML, CSS, and JavaScript featuring basic arithmetic operations.",
    //     technologies: ["HTML", "CSS", "JavaScript"],
    //     demoUrl: "./projects/calculator/index.html",
    //     icon: "fas fa-calculator"
    // }
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card fade-in">
            <div class="project-header">
                <div class="project-icon">
                    <i class="${project.icon}"></i>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <div class="project-type">${project.type}</div>
                </div>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.demoUrl}" class="project-link demo-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    Live Demo
                </a>
            </div>
        </div>
    `;
}

// Function to load projects
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
        
        // Trigger fade-in animation
        setTimeout(() => {
            document.querySelectorAll('.project-card').forEach(card => {
                card.classList.add('visible');
            });
        }, 100);
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Function to add animation to elements
function addAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    addAnimations();
});

// Add active nav link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Function to add a new project (you can use this to easily add projects later)
function addProject(projectData) {
    projects.push({
        id: projects.length + 1,
        ...projectData
    });
    loadProjects();
}

// Export for potential future use
window.portfolioAPI = {
    addProject,
    projects
};
