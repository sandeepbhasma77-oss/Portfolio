import { useCallback, useEffect, useRef, useState } from "react";

const filters = ["All", "Web Development", "Mobile Apps", "UI/UX", "Academic"];

const projects = [
  {
    number: "01",
    title: "MedStore Inventory Management System",
    category: ["Academic"],
    label: "ACADEMIC PROJECT · PYTHON",
    description: "A Python-based inventory management system designed to manage medicines, stock levels, sales, restocking, discounts, and invoice generation.",
    technologies: ["Python", "OOP", "File Handling", "Data Management"],
    features: ["Medicine inventory management", "Sales and restocking", "Automatic invoice generation", "Discount calculation", "Inventory file updates"],
    image: "/images/medstore-dashboard.svg",
    problem: "Small medicine stores need a simple way to track stock and sales without relying on scattered manual records.",
    solution: "A focused Python application organizes inventory actions, calculates totals and discounts, and keeps file data updated.",
    role: "Designed and developed the application logic, file workflows, and user-facing inventory actions.",
    learned: "Object-oriented programming, file handling, data validation, and practical problem solving.",
  },
  {
    number: "02",
    title: "Portfolio Website",
    category: ["Web Development", "UI/UX"],
    label: "WEB DEVELOPMENT",
    description: "A modern personal portfolio website created to showcase my development skills, projects, education, and creative work as an IT student.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    features: ["Responsive design", "Modern UI", "Interactive animations", "Project showcase", "Responsive navigation"],
    image: "/images/sandeep-portfolio-dashboard.svg",
    problem: "A student portfolio should make skills and projects easy to understand at a glance.",
    solution: "A responsive portfolio organizes personal work into focused pages with clear navigation and interactive presentation.",
    role: "Designed the interface and developed the React components, page structure, animations, and responsive layouts.",
    learned: "Component architecture, responsive CSS, animation timing, and deploying a real portfolio workflow.",
  },
  {
    number: "03",
    title: "Library Management System",
    category: ["Academic"],
    label: "ACADEMIC PROJECT",
    description: "A practical library management application designed to organize books, users, borrowing records, and returns while applying programming and database concepts.",
    technologies: ["Java", "OOP", "Database"],
    features: ["Book management", "User management", "Borrow and return system", "Search functionality", "Data management"],
    image: "/images/library-dashboard.svg",
    problem: "Managing books and borrowing records manually makes it difficult to find accurate availability information.",
    solution: "A structured application connects book, user, and borrowing records into one searchable workflow.",
    role: "Planned the data flow and developed the core management features as an academic project.",
    learned: "Java OOP, database concepts, structured data, and designing CRUD-style workflows.",
  },
  {
    number: "04",
    title: "E-Commerce Website",
    category: ["Web Development", "UI/UX"],
    label: "WEB DEVELOPMENT · UI/UX",
    description: "A responsive e-commerce website focused on creating a clean shopping experience with product browsing, collections, product details, and modern interface design.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    features: ["Product browsing", "Product details", "Collection pages", "Responsive layout", "Modern UI"],
    image: "/images/ecommerce-dashboard.svg",
    problem: "Online shopping interfaces can become difficult to scan when product information lacks a clear visual hierarchy.",
    solution: "A considered layout gives product browsing, collections, and details a consistent, responsive experience.",
    role: "Designed the interface direction and built the responsive product-focused screens.",
    learned: "UI hierarchy, responsive layouts, reusable interface patterns, and prototyping in Figma.",
  },
  {
    number: "05",
    title: "Mobile Application",
    category: ["Mobile Apps"],
    label: "MOBILE DEVELOPMENT",
    description: "A cross-platform mobile application built while exploring React Native and Expo, focusing on intuitive navigation, responsive interfaces, and practical functionality.",
    technologies: ["React Native", "Expo", "JavaScript"],
    features: ["Mobile-first interface", "Navigation", "Interactive components", "Responsive screens", "Modern UI"],
    image: "/images/mobile-app-mockup.svg",
    problem: "Mobile experiences need clear navigation and touch-friendly layouts across different screen sizes.",
    solution: "A cross-platform prototype explores reusable screens, intuitive navigation, and practical interactions.",
    role: "Built the mobile-first screens and experimented with navigation and reusable components.",
    learned: "React Native fundamentals, Expo workflows, mobile layouts, and interaction design.",
  },
];

const ProjectVisual = ({ project, featured = false }) => {
  const visualRef = useRef(null);

  const handleMouseMove = (event) => {
    const bounds = visualRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * -10;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10;
    visualRef.current.style.setProperty("--parallax-x", `${x}px`);
    visualRef.current.style.setProperty("--parallax-y", `${y}px`);
  };

  const resetParallax = () => {
    visualRef.current.style.setProperty("--parallax-x", "0px");
    visualRef.current.style.setProperty("--parallax-y", "0px");
  };

  return (
  <div ref={visualRef} className={`projects-visual ${featured ? "projects-visual-featured" : ""}`} onMouseMove={handleMouseMove} onMouseLeave={resetParallax}>
    <div className="projects-browser-bar"><span /><span /><span /><small>{project.title.toLowerCase().replaceAll(" ", "-")}.app</small></div>
    {project.image ? <img src={project.image} alt={`${project.title} preview`} /> : <div className="projects-placeholder"><strong>PROJECT PREVIEW</strong><span>{project.title}</span></div>}
    <div className="projects-scanline" />
  </div>
  );
};

const ProjectsCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;
    const cursor = cursorRef.current;
    const handleMove = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    const handleOver = (event) => {
      cursor.classList.toggle("is-project", Boolean(event.target.closest(".projects-card, .projects-featured")));
      cursor.classList.toggle("is-link", Boolean(event.target.closest("a, button")));
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return <span ref={cursorRef} className="projects-cursor" aria-hidden="true"><span>VIEW</span></span>;
};

const ScrollProgress = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    let frameId;
    const updateProgress = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        progressRef.current.style.transform = `scaleX(${progress})`;
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div ref={progressRef} className="projects-progress" aria-hidden="true" />;
};

const ProjectDetails = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    window.setTimeout(onClose, 280);
  }, [onClose]);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && handleClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [handleClose]);

  return (
    <div className={`projects-modal-backdrop ${isClosing ? "is-closing" : ""}`} role="presentation" onClick={handleClose}>
      <article className="projects-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="projects-modal-close" type="button" onClick={handleClose} aria-label="Close project details">×</button>
        <span className="projects-eyebrow">{project.label}</span>
        <h2 id="project-modal-title">{project.title}</h2>
        <div className="projects-modal-grid">
          <div><h3>Project Overview</h3><p>{project.description}</p><h3>Problem</h3><p>{project.problem}</p><h3>Solution</h3><p>{project.solution}</p></div>
          <div><h3>Key Features</h3><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><h3>Technologies</h3><div className="projects-tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
        </div>
        <div className="projects-modal-bottom"><div><h3>My Role</h3><p>{project.role}</p></div><div><h3>What I Learned</h3><p>{project.learned}</p></div></div>
        <div className="projects-modal-links"><a href="https://github.com/sandeepbhasma77-oss" target="_blank" rel="noreferrer" onClick={handleClose}>GitHub ↗</a><a href="#contact" onClick={handleClose}>Live Demo ↗</a></div>
      </article>
    </div>
  );
};

const ProjectCard = ({ project, onOpen }) => (
  <article className="projects-card" data-number={project.number}>
    <ProjectVisual project={project} />
    <div className="projects-card-content"><div className="projects-card-heading"><span>{project.number}</span><small>{project.label}</small></div><h3>{project.title}</h3><p>{project.description}</p><div className="projects-tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="projects-card-actions"><button type="button" className="projects-view-button" onClick={() => onOpen(project)}>View Project <b>↗</b></button><a className="projects-text-link" href="https://github.com/sandeepbhasma77-oss" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
  </article>
);

const ProjectStats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const stats = statsRef.current.querySelectorAll("[data-stat-value]");
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      stats.forEach((stat) => {
        const target = Number(stat.dataset.statValue);
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / 800, 1);
          stat.textContent = `${Math.round(target * progress)}+`;
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      });
      observer.disconnect();
    }, { threshold: 0.35 });

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={statsRef} className="projects-stats projects-reveal">
      <div><strong data-stat-value="5">00+</strong><span>Projects Built</span></div>
      <div><strong data-stat-value="10">00+</strong><span>Technologies Used</span></div>
      <div><strong>Web &amp; Full-Stack</strong><span>Currently Learning</span></div>
    </section>
  );
};

const AppShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = projects.filter((project) => activeFilter === "All" || project.category.includes(activeFilter));
  const featuredProject = projects[0];
  const showFeatured = activeFilter === "All" || featuredProject.category.includes(activeFilter);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".projects-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <main id="work" className="projects-page">
      <ScrollProgress />
      <ProjectsCursor />
      <section className="projects-hero projects-reveal"><div><span className="projects-eyebrow">MY PROJECTS</span><h1>Things I’ve Built <em>&amp;</em> Created</h1><p>A collection of academic, personal, and creative projects where I turn ideas into practical digital experiences while continuously improving my development and design skills.</p></div><div className="projects-code-art"><span>&lt;/&gt;</span><i>01</i><i>010</i><i>101</i></div></section>
      <section className="projects-content"><div className="projects-filter" aria-label="Project categories">{filters.map((filter) => <button type="button" className={activeFilter === filter ? "active" : ""} key={filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
        {showFeatured && <article className="projects-featured projects-reveal" data-number={featuredProject.number}><ProjectVisual project={featuredProject} featured /><div className="projects-featured-copy"><div className="projects-card-heading"><span>{featuredProject.number}</span><small>{featuredProject.label}</small></div><h2>{featuredProject.title}</h2><p>{featuredProject.description}</p><div className="projects-tech-list">{featuredProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><h4>FEATURES</h4><ul>{featuredProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><button type="button" className="projects-primary-button" onClick={() => setSelectedProject(featuredProject)}>View Project <b>↗</b></button><a className="projects-text-link" href="https://github.com/sandeepbhasma77-oss" target="_blank" rel="noreferrer">GitHub ↗</a></div></article>}
        <div className="projects-grid">{visibleProjects.filter((project) => project.number !== "01").map((project) => <div className="projects-reveal" key={`${activeFilter}-${project.number}`}><ProjectCard project={project} onOpen={setSelectedProject} /></div>)}</div>
      </section>
      <ProjectStats />
      <section className="projects-cta projects-reveal"><span className="projects-eyebrow">NEXT PROJECT</span><h2>Have an idea worth building?</h2><p>I’m always interested in learning, experimenting, and building new things. Let’s turn an idea into a project.</p><div><a href="#contact">Contact Me</a><a href="#home">Back to Home</a></div></section>
      {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  );
};

export default AppShowcase;
