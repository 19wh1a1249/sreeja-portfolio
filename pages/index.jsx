import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const experiences = [
  {
    role: "Full Stack Web Developer",
    company: "Park My Ride, LLC",
    location: "Houston, Texas, USA",
    period: "Jan 2026 — Present",
    accent: "lime",
    summary:
      "Building an end-to-end event parking platform with secure authentication, interactive maps, booking flows, payments, and responsive marketing experiences.",
    wins: [
      "Built RESTful APIs and JWT authentication with Next.js, Tailwind CSS, and Django.",
      "Created interactive garage maps, detail popups, and event-driven navigation.",
      "Improved data retrieval by 30%, deployment time by 20%, and reduced bugs by 15%.",
    ],
    tech: ["Next.js", "Django", "Tailwind CSS", "REST APIs", "JWT", "WordPress"],
  },
  {
    role: "Software Engineer Intern",
    company: "Irenix Empowerment Foundation",
    location: "Sheridan, Wyoming, USA",
    period: "Sep 2025 — Dec 2025",
    accent: "peach",
    summary:
      "Designed a HIPAA-compliant EHR platform that made client care, provider matching, billing, and reporting simpler and more secure.",
    wins: [
      "Protected 100% of client records with role-based access control.",
      "Improved appointment booking efficiency by 40% with intelligent matching.",
      "Reduced administrative time by 30% and billing errors by 25%.",
    ],
    tech: ["React", "Healthcare", "RBAC", "Billing", "Dashboards", "Audit Logs"],
  },
  {
    role: "Software Engineer",
    company: "Accenture",
    location: "Pune, Maharashtra, India",
    period: "Aug 2023 — Dec 2023",
    accent: "blue",
    summary:
      "Engineered reliable banking workflows across SQL Server, C#, and ASP.NET Core for high-volume customer loan systems.",
    wins: [
      "Improved data retrieval performance by 30% through stored procedure optimization.",
      "Built business logic across 10+ loan validation and repayment modules.",
      "Resolved 50+ priority defects and reduced post-deployment issues by 40%.",
    ],
    tech: ["C#", "ASP.NET Core", "SQL Server", "Banking", "Testing", "UAT"],
  },
  {
    role: "Full Stack Software Developer",
    company: "SMC-HNV",
    location: "Bengaluru, Karnataka, India",
    period: "Jul 2022 — Jun 2023",
    accent: "lavender",
    summary:
      "Developed a cloud-based construction management product with scheduling, appointments, calendars, invoices, and mobile-ready dashboards.",
    wins: [
      "Reduced scheduling errors by 35% with a React component architecture.",
      "Integrated 8 REST APIs and webhooks, improving booking efficiency by 40%.",
      "Deployed with GitHub CI/CD to Vercel and Railway for 24/7 availability.",
    ],
    tech: ["React", "Webhooks", "REST APIs", "Vercel", "Railway", "CI/CD"],
  },
  {
    role: "Software Engineer",
    company: "SMC-HNV",
    location: "Bengaluru, Karnataka, India",
    period: "Jun 2021 — Jun 2022",
    accent: "yellow",
    summary:
      "Built a secure construction cost estimation tool with real-time budgets, automated alerts, reporting, and project search.",
    wins: [
      "Implemented secure owner-only authentication and encrypted credentials.",
      "Added automated alerts at 80% and 100% budget thresholds.",
      "Improved budget accuracy by 20% and streamlined reporting with PDF export.",
    ],
    tech: ["Full Stack", "Authentication", "Budgets", "PDF Export", "Search"],
  },
];

const projects = [
  {
    number: "01",
    title: "Uber Data Analysis",
    eyebrow: "Data story",
    text: "Analyzed 50,000+ ride records to reveal travel patterns and demand clusters, improving clustering accuracy by 30% with elbow method and k-means.",
    stack: "Tableau · Python · Data Visualization",
    visual: "uber",
  },
  {
    number: "02",
    title: "Underwater Image Enhancement",
    eyebrow: "Machine learning",
    text: "Used ML models and OpenCV to correct underwater contrast and distortion—improving color vibrancy and clarity by 40% across test datasets.",
    stack: "Python · Machine Learning · OpenCV",
    visual: "ocean",
  },
  {
    number: "03",
    title: "E-Commerce Platform",
    eyebrow: "Web experience",
    text: "Created a scalable commerce platform with scheduling, secure data handling, and real-time notifications, cutting manual booking time by nearly 50%.",
    stack: "HTML · CSS · JavaScript · PHP",
    visual: "commerce",
  },
];

const skills = {
  Frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Figma"],
  Backend: ["Node.js", "Express.js", "Python", "Django", "Java", "C#", "C++", "ASP.NET Core", ".NET", "RESTful APIs", "Webhooks"],
  "Data & Cloud": ["MySQL", "PostgreSQL", "SQL Server", "AWS", "GCP", "Vercel", "Railway"],
  Toolkit: ["Docker", "Git", "GitHub", "Jira", "Agile/Scrum", "Power BI", "Tableau", "WordPress", "Elementor", "HubSpot", "CI/CD"],
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);

  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Sreeja Vaddi home">SV<span>.</span></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button className="menu-close" onClick={closeMenu} aria-label="Close menu"><X /></button>
          <a href="#work" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="mailto:sreejavaddi168@gmail.com" onClick={closeMenu}>Let’s talk <ArrowUpRight size={16} /></a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
      </nav>

      <header id="top" className="hero shell">
        <div className="availability"><i /> Open to opportunities · Open to relocation</div>
        <h1>I build digital products that <em>move</em> ideas forward.</h1>
        <div className="hero-bottom">
          <p>Full Stack Developer with 3+ years of experience crafting scalable products across healthcare, fintech, SaaS, and construction.</p>
          <a className="round-link" href="#work" aria-label="Explore my work"><ArrowDownRight /></a>
        </div>
        <div className="hero-stage" aria-hidden="true">
          <div className="stage-orbit orbit-one"><span>React</span></div>
          <div className="stage-orbit orbit-two"><span>Python</span></div>
          <div className="stage-card card-code"><Code2 /><b>Clean code</b><small>Built to scale</small></div>
          <div className="stage-card card-impact"><Sparkles /><strong>40%</strong><small>booking efficiency</small></div>
          <div className="stage-center"><span>S</span><div>FULL STACK<br/>DEVELOPER</div></div>
          <div className="stage-pill pill-one">Thoughtful UX</div>
          <div className="stage-pill pill-two">Reliable systems</div>
        </div>
      </header>

      <section className="marquee" aria-label="Core technologies">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, i) =>
            ["React", "Next.js", "Node.js", "Django", "TypeScript", "AWS", "SQL", "Figma"].map((item) => (
              <React.Fragment key={`${i}-${item}`}><span>{item}</span><i>✦</i></React.Fragment>
            ))
          )}
        </div>
      </section>

      <section className="proof shell">
        <div className="section-head">
          <div><span className="kicker">Impact, not just output</span><h2>Built with purpose.<br/>Measured by results.</h2></div>
          <p>I care about the details behind the interface: fast data, dependable workflows, accessible experiences, and outcomes teams can feel.</p>
        </div>
        <div className="metric-grid">
          <article className="metric metric-main"><span>01 / Performance</span><strong>30%</strong><p>faster data retrieval through optimized APIs and database queries.</p><div className="metric-bars"><i/><i/><i/><i/></div></article>
          <article className="metric metric-dark"><span>02 / Reliability</span><strong>50+</strong><p>high-priority defects resolved to support zero-defect releases.</p><Code2 /></article>
          <article className="metric metric-light"><span>03 / Efficiency</span><strong>40%</strong><p>improvement in booking workflows across healthcare and construction products.</p><Sparkles /></article>
        </div>
      </section>

      <section id="work" className="experience">
        <div className="shell">
          <div className="section-head compact">
            <div><span className="kicker">Selected experience</span><h2>From first sketch<br/>to shipped software.</h2></div>
            <BriefcaseBusiness size={42} strokeWidth={1.3} />
          </div>
          <div className="experience-layout">
            <div className="experience-tabs" role="tablist" aria-label="Work experience">
              {experiences.map((item, index) => (
                <button
                  key={`${item.company}-${item.period}`}
                  className={activeExperience === index ? "active" : ""}
                  onClick={() => setActiveExperience(index)}
                  role="tab"
                  aria-selected={activeExperience === index}
                >
                  <span>0{index + 1}</span><div><b>{item.company}</b><small>{item.period}</small></div><ArrowUpRight />
                </button>
              ))}
            </div>
            <article className={`experience-card ${experiences[activeExperience].accent}`} key={activeExperience}>
              <div className="experience-meta">
                <span>{experiences[activeExperience].role}</span>
                <span><MapPin size={14}/>{experiences[activeExperience].location}</span>
              </div>
              <h3>{experiences[activeExperience].company}</h3>
              <p className="experience-summary">{experiences[activeExperience].summary}</p>
              <ul>{experiences[activeExperience].wins.map((win) => <li key={win}>{win}</li>)}</ul>
              <div className="tags">{experiences[activeExperience].tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="projects shell">
        <div className="section-head compact">
          <div><span className="kicker">Independent projects</span><h2>Curiosity, turned<br/>into something real.</h2></div>
          <p>Selected explorations across data, machine learning, and product development.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-visual ${project.visual}`}>
                <span className="project-number">{project.number}</span>
                {project.visual === "uber" && <div className="chart"><i/><i/><i/><i/><i/><i/></div>}
                {project.visual === "ocean" && <div className="bubbles"><i/><i/><i/><i/><i/></div>}
                {project.visual === "commerce" && <div className="shop-card"><span>NEW ORDER</span><strong>01</strong><small>Ready to ship</small></div>}
              </div>
              <div className="project-copy">
                <span className="kicker">{project.eyebrow}</span><h3>{project.title}</h3><p>{project.text}</p><small>{project.stack}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="shell">
          <div className="about-intro">
            <span className="kicker">The toolkit</span>
            <h2>Versatile by design.<br/><em>Full stack</em> by practice.</h2>
            <p>My favorite work lives where strong systems meet clear, human-centered interfaces.</p>
          </div>
          <div className="skill-grid">
            {Object.entries(skills).map(([group, items], index) => (
              <article key={group}><span>0{index + 1}</span><h3>{group}</h3><div>{items.map(item => <i key={item}>{item}</i>)}</div></article>
            ))}
          </div>
          <div className="education-grid">
            <article><GraduationCap/><div><span>2024 — 2025</span><h3>MS, Information Technology</h3><p>Arizona State University</p><small>Data Visualization · Advanced Big Data Analytics · NLP for IT · Analyzing Big Data</small></div></article>
            <article><GraduationCap/><div><span>2019 — 2023</span><h3>B.Tech, Information Technology</h3><p>BVRIT Hyderabad</p><small>Networks · Data Structures · Data Analytics · Machine Learning · Web Programming</small></div></article>
          </div>
          <div className="credentials">
            <div><span>Certified by AWS</span><strong>Fundamentals of ML and AI</strong></div>
            <div><span>Certified by AWS</span><strong>Foundations of Prompt Engineering</strong></div>
            <div><span>Beyond the screen</span><strong>Led 5 cultural events for 200+ participants</strong></div>
          </div>
        </div>
      </section>

      <section className="contact shell">
        <span className="kicker">Have a role or idea in mind?</span>
        <h2>Let’s build something<br/><em>worth using.</em></h2>
        <a className="email-link" href="mailto:sreejavaddi168@gmail.com">sreejavaddi168@gmail.com <ArrowUpRight /></a>
        <div className="contact-details">
          <span><MapPin/> Phoenix, Arizona · Open to relocation</span>
          <a href="tel:+16233206836">+1 (623) 320-6836</a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div className="brand footer-brand">SV<span>.</span></div>
          <p>Full stack thinking.<br/>Human-centered results.</p>
          <div className="footer-links">
            <a href="https://linkedin.com/in/sreeja-vaddi-b90149221" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
            <a href="/Sreeja-Vaddi-Resume.pdf" download><Download/> Resume</a>
            <a href="mailto:sreejavaddi168@gmail.com"><Mail/> Email</a>
          </div>
          <small>© {new Date().getFullYear()} Sreeja Vaddi. Designed and built with care.</small>
        </div>
      </footer>
    </main>
  );
}
