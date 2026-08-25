import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const journey = [
  {
    number: "01",
    title: "IT Student",
    subtitle: "Bachelor's in Information Technology",
    period: "Currently Studying",
    text: "Learning programming, web development, software development, databases, networking, and other areas of information technology.",
  },
  {
    number: "02",
    title: "Web Developer",
    subtitle: "Personal & Academic Projects",
    period: "2025 - Present",
    text: "Building responsive websites and interactive digital experiences while improving my skills in HTML, CSS, JavaScript, React, and modern development practices.",
  },
  {
    number: "03",
    title: "UI/UX Enthusiast",
    subtitle: "Design & Prototyping",
    period: "2025 - Present",
    text: "Creating modern interfaces and prototypes in Figma while learning about user experience, visual hierarchy, typography, spacing, and responsive design.",
  },
];

const services = [
  ["Web Development", "Building responsive and modern websites with clean layouts and interactive experiences."],
  ["UI/UX Design", "Designing clean, intuitive, and visually appealing interfaces with a focus on usability."],
  ["Programming", "Using programming and problem-solving skills to build practical applications and projects."],
  ["Continuous Learning", "Exploring new technologies and improving my skills through hands-on projects."],
];

const approach = [
  ["01", "Learn", "Explore new technologies and understand how they work."],
  ["02", "Build", "Turn ideas and knowledge into practical projects."],
  ["03", "Improve", "Learn from every project and continuously improve my skills."],
];

const tags = ["HTML", "CSS", "JavaScript", "React", "Python", "Java", "Git", "GitHub", "Figma"];

const highlights = [
  ["Creative", "I enjoy turning ideas into attractive digital experiences."],
  ["Curious", "I’m always exploring new technologies and learning how things work."],
  ["Problem Solver", "I enjoy breaking problems down and finding practical solutions."],
];

const About = () => {
  const aboutRef = useRef(null);
  const visualRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(() => {
    const revealItems = gsap.utils.toArray(".about-reveal");

    gsap.fromTo(
      ".about-hero-copy > *, .about-visual",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: 0.2,
        stagger: 0.12,
        ease: "power2.out",
      }
    );

    revealItems.forEach((item) => {
      gsap.fromTo(
        item,
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    gsap.fromTo(
      ".journey-item",
      { xPercent: -8, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.1,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".journey-list",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      ".journey-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: ".journey-list",
          start: "top 75%",
          end: "bottom 65%",
          scrub: 0.7,
        },
      }
    );

    [".service-card", ".approach-grid article", ".learning-tags span", ".highlight-grid article"].forEach((selector) => {
      gsap.fromTo(
        selector,
        { y: 25, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: selector, start: "top 88%", toggleActions: "play reverse play reverse" },
        }
      );
    });
  }, { scope: aboutRef });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const visual = visualRef.current;
    let frameId;

    const updateProgress = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      });
    };

    const moveVisual = (event) => {
      if (!visual || !isFinePointer) return;
      const bounds = visual.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * -8;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;
      visual.style.setProperty("--visual-x", `${x}px`);
      visual.style.setProperty("--visual-y", `${y}px`);
    };

    const resetVisual = () => {
      if (!visual) return;
      visual.style.setProperty("--visual-x", "0px");
      visual.style.setProperty("--visual-y", "0px");
    };

    const cursor = aboutRef.current.querySelector(".about-cursor");
    const moveCursor = (event) => {
      if (cursor && isFinePointer) cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    const updateCursorState = (event) => {
      if (!cursor || !isFinePointer) return;
      cursor.classList.toggle("is-card", Boolean(event.target.closest(".service-card, .highlight-grid article, .journey-content")));
      cursor.classList.toggle("is-button", Boolean(event.target.closest(".about-magnetic")));
    };

    const buttons = aboutRef.current.querySelectorAll(".about-magnetic");
    const moveButton = (event) => {
      const button = event.currentTarget;
      const bounds = button.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
      button.style.setProperty("--magnetic-x", `${x}px`);
      button.style.setProperty("--magnetic-y", `${y}px`);
    };
    const resetButton = (event) => {
      event.currentTarget.style.setProperty("--magnetic-x", "0px");
      event.currentTarget.style.setProperty("--magnetic-y", "0px");
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    if (isFinePointer) {
      visual?.addEventListener("pointermove", moveVisual, { passive: true });
      visual?.addEventListener("pointerleave", resetVisual);
      window.addEventListener("pointermove", moveCursor, { passive: true });
      document.addEventListener("mouseover", updateCursorState);
      buttons.forEach((button) => {
        button.addEventListener("pointermove", moveButton, { passive: true });
        button.addEventListener("pointerleave", resetButton);
      });
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      visual?.removeEventListener("pointermove", moveVisual);
      visual?.removeEventListener("pointerleave", resetVisual);
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("mouseover", updateCursorState);
      buttons.forEach((button) => {
        button.removeEventListener("pointermove", moveButton);
        button.removeEventListener("pointerleave", resetButton);
      });
    };
  }, []);

  return (
  <main ref={aboutRef} className="about-page">
    <div ref={progressRef} className="about-progress" aria-hidden="true" />
    <span className="about-cursor" aria-hidden="true"><span>EXPLORE</span></span>
    <section className="about-hero">
      <div className="about-hero-copy">
        <span className="about-eyebrow">ABOUT ME</span>
        <h1>IT Student <span>•</span> Developer <span>•</span> Lifelong Learner</h1>
        <p>I’m Sandeep, an IT student passionate about web development, UI/UX, and creating modern digital experiences. I enjoy turning ideas into responsive, practical websites while continuously learning and improving my skills.</p>
      </div>
      <div ref={visualRef} className="about-visual" aria-label="Abstract digital design visual">
        <div className="about-orbit about-orbit-one" />
        <div className="about-orbit about-orbit-two" />
        <div className="about-core"><span>S</span></div>
        <div className="about-visual-label">BUILD / LEARN / CREATE</div>
      </div>
    </section>

    <section className="about-section about-reveal">
      <div className="about-section-heading">
        <span className="about-eyebrow">01 / THE PATH</span>
        <h2>My Journey</h2>
        <p>My journey in technology is driven by curiosity, creativity, and a passion for building things. Through academic and personal projects, I’m developing my skills in programming, web development, UI/UX, and problem solving.</p>
      </div>
      <div className="journey-list">
        {journey.map((item) => (
          <article className="journey-item" key={item.number}>
            <span className="journey-number">{item.number}</span>
            <div className="journey-line" />
            <div className="journey-content">
              <div className="journey-title-row"><h3>{item.title}</h3><span>{item.period}</span></div>
              <h4>{item.subtitle}</h4>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="about-section about-services about-reveal">
      <div className="about-section-heading"><span className="about-eyebrow">02 / CAPABILITIES</span><h2>What I Do</h2></div>
      <div className="service-grid">
        {services.map(([title, text], index) => <article className="service-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section className="about-section approach-section about-reveal">
      <div className="about-section-heading"><span className="about-eyebrow">03 / THE METHOD</span><h2>Learn. Build. Improve.</h2></div>
      <div className="approach-grid">
        {approach.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section className="about-section learning-section about-reveal">
      <div className="learning-copy"><span className="about-eyebrow">04 / IN PROGRESS</span><h2>Always Learning</h2><p>I’m currently expanding my knowledge in modern web development, UI/UX, frontend frameworks, Git & GitHub, and full-stack development.</p></div>
      <div className="learning-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </section>

    <section className="about-section highlights-section about-reveal">
      <div className="about-section-heading"><span className="about-eyebrow">05 / A LITTLE MORE</span><h2>About Me</h2></div>
      <div className="highlight-grid">{highlights.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="about-cta about-reveal"><span className="about-eyebrow">06 / NEXT STEP</span><h2>Let’s Create Something Great.</h2><p>I’m always open to learning, collaborating, and working on interesting projects.</p><div><a className="about-magnetic" href="#projects">Explore My Projects</a><a className="about-magnetic" href="#contact">Get In Touch</a></div></section>
  </main>
  );
};

export default About;
