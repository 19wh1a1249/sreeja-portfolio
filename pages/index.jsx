import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  Github,
  MapPin,
  Sparkles,
} from "lucide-react";
import SiteHeader from "../src/components/layout/SiteHeader";
import SiteFooter from "../src/components/layout/SiteFooter";
import AnimatedHeading from "../src/components/ui/AnimatedHeading";
import Reveal, { motionEase as ease } from "../src/components/ui/Reveal";
import SpectralField from "../src/components/visuals/SpectralField";
import {
  certifications,
  education,
  experience,
  impactStats,
  profile,
  projects,
  skillGroups,
} from "../src/data/portfolio";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });
  const titleY = useTransform(smooth, [0, 0.45], [0, -90]);
  const titleOpacity = useTransform(smooth, [0, 0.4], [1, 0]);
  const glowScale = useTransform(smooth, [0, 1], [0.8, 1.2]);
  const mediaY = useTransform(smooth, [0, 0.95], [28, 0]);
  const mediaHeight = useTransform(smooth, [0, 0.95], [36, 68]);
  const mediaWidth = useTransform(smooth, [0, 0.95], [78, 90]);
  const mediaRadius = useTransform(smooth, [0, 0.95], [22, 18]);
  const mediaBorder = useTransform(smooth, [0, 0.95], [4, 3]);
  const height = useMotionTemplate`${mediaHeight}vh`;
  const width = useMotionTemplate`${mediaWidth}vw`;
  const borderRadius = useMotionTemplate`${mediaRadius}px ${mediaRadius}px 0 0`;
  const edgeBorder = useMotionTemplate`${mediaBorder}px`;

  return (
    <section className="hero-scroll" ref={ref} id="home" aria-labelledby="hero-name">
      <div className="hero-sticky">
        <motion.div className="hero-copy" style={{ y: titleY, opacity: titleOpacity }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            {profile.role}
          </motion.p>
          <h1 id="hero-name" className="hero-name">
            <motion.span
              initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease }}
            >
              {profile.name.split(" ")[0]}
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.1, ease }}
            >
              {profile.name.split(" ")[1]}
            </motion.span>
          </h1>
          <Reveal delay={0.12}>
            <p className="hero-line">
              Full stack solutions for <em>complex</em> ideas
            </p>
            <p className="hero-summary">{profile.summary}</p>
          </Reveal>
        </motion.div>

        <motion.div className="hero-glow" style={{ scale: glowScale }} aria-hidden="true">
          <SpectralField className="hero-field" />
        </motion.div>

        <motion.div
          className="hero-media"
          style={{
            y: mediaY,
            height,
            width,
            borderRadius,
            borderTopWidth: edgeBorder,
            borderLeftWidth: edgeBorder,
            borderRightWidth: edgeBorder,
          }}
        >
          <div className="screen-chrome">
            <i /><i /><i />
            <span>sreeja.build</span>
          </div>
          <div className="screen-body">
            <div className="editor-lines">
              <div className="editor-line"><b>01</b><span>const</span> product = <em>buildWithCare()</em>;</div>
              <div className="editor-line"><b>02</b><span>const</span> impact = <em>measureResults()</em>;</div>
            </div>

            <div className="screen-main">
              <div className="metric-col left" aria-hidden="true">
                {[
                  { color: "yellow", icon: Code2, value: "30%", label: "faster retrieval" },
                  { color: "pink", icon: Sparkles, value: "40%", label: "booking lift" },
                ].map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={metric.label}
                      className={`float-card ${metric.color}`}
                      animate={{ y: [0, index === 0 ? -8 : 8, 0] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      <Icon />
                      <span>{metric.value}</span>
                      <small>{metric.label}</small>
                    </motion.div>
                  );
                })}
              </div>

              <div className="code-window">
                <motion.strong
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Let’s talk
                </motion.strong>
                <div className="hero-window-actions">
                  {[
                    { label: "Email", href: `mailto:${profile.email}` },
                    { label: "Resume", href: profile.resume, download: true },
                    { label: "GitHub", href: profile.github, external: true },
                  ].map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      download={action.download || undefined}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noreferrer" : undefined}
                    >
                      <span>{action.label}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="metric-col right" aria-hidden="true">
                {[
                  { color: "violet", icon: Database, value: "50k+", label: "records analyzed" },
                  { color: "blue", icon: Cloud, value: "24/7", label: "cloud uptime" },
                ].map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={metric.label}
                      className={`float-card ${metric.color}`}
                      animate={{ y: [0, index === 0 ? -8 : 8, 0] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      <Icon />
                      <span>{metric.value}</span>
                      <small>{metric.label}</small>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="wrap about-layout">
        <Reveal>
          <p className="eyebrow">About</p>
          <AnimatedHeading effect="blur">
            Built to own it.
            <em> Smart enough to evolve it.</em>
          </AnimatedHeading>
        </Reveal>
        <Reveal delay={0.1} className="about-copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="about-meta">
            <span><MapPin size={14} /> {profile.location}</span>
            <span>{profile.availability}</span>
          </div>
        </Reveal>
        <div className="about-visual" aria-hidden="true">
          <SpectralField className="about-field" grid />
          <svg className="flow-lines" viewBox="0 0 800 520" preserveAspectRatio="none">
            <motion.path
              d="M400 90V175H160V250M400 175V250M400 175H640V250M160 300V390H300M400 300V390M640 300V390H500"
              fill="none"
              stroke="url(#flowStroke)"
              strokeWidth="2.5"
              initial={{ pathLength: 0, opacity: 0.2 }}
              whileInView={{ pathLength: 1, opacity: 0.85 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease }}
            />
            <defs>
              <linearGradient id="flowStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd52d" />
                <stop offset="45%" stopColor="#ef3fc4" />
                <stop offset="100%" stopColor="#6550f5" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flow-nodes">
            {[
              { label: "Product goal", className: "root", x: [0, 8, -6, 0], y: [0, -10, 8, 0], duration: 4.6 },
              { label: "Understand", className: "n1", x: [0, 14, -8, 0], y: [0, -18, 10, 0], duration: 5.2 },
              { label: "Design", className: "n2", x: [0, -12, 16, 0], y: [0, 14, -12, 0], duration: 6.1 },
              { label: "Build", className: "n3", x: [0, 18, -10, 0], y: [0, -10, 16, 0], duration: 4.8 },
              { label: "Measure", className: "n4", x: [0, -16, 12, 0], y: [0, 12, -14, 0], duration: 5.7 },
              { label: "Improve", className: "n5", x: [0, 10, -14, 0], y: [0, -16, 8, 0], duration: 6.4 },
            ].map((node, index) => (
              <motion.span
                key={node.label}
                className={`flow-node ${node.className}`}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ x: node.x, y: node.y }}
                transition={{
                  opacity: { delay: 0.1 * index, duration: 0.5 },
                  scale: { delay: 0.1 * index, type: "spring", stiffness: 120, damping: 14 },
                  x: { duration: node.duration, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: node.duration, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                {node.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const progressHeight = useMotionTemplate`${progress}%`;

  return (
    <section className="section experience-section" id="experience">
      <div className="wrap">
        <div className="section-intro">
          <Reveal>
            <p className="eyebrow">Experience</p>
            <AnimatedHeading effect="slide">
              Proof, not
              <em> promises.</em>
            </AnimatedHeading>
          </Reveal>
          <Reveal delay={0.08}>
            <p>Every role solved a real problem. Every release left a measurable result.</p>
          </Reveal>
        </div>

        <div className="exp-timeline" ref={trackRef}>
          <aside className="exp-rail" aria-label="Roles">
            <div className="exp-rail-line" aria-hidden="true">
              <motion.span style={{ height: progressHeight }} />
            </div>
            {experience.map((role, index) => {
              const isPresent = /present/i.test(role.period);
              return (
                <button
                  key={`${role.company}-${role.period}-rail`}
                  type="button"
                  className={`exp-rail-item ${active === index ? "active" : ""}`}
                  onClick={() => {
                    const el = document.getElementById(`exp-step-${index}`);
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  <i />
                  <span>
                    {isPresent ? "Present" : role.period.split("—")[0].trim()}
                  </span>
                  <strong>{role.company}</strong>
                </button>
              );
            })}
          </aside>

          <div className="exp-steps">
            {experience.map((role, index) => {
              const isPresent = /present/i.test(role.period);
              return (
                <div
                  key={`${role.company}-${role.period}`}
                  className="exp-step"
                  id={`exp-step-${index}`}
                >
                  <motion.article
                    className={`exp-panel ${role.color}`}
                    onViewportEnter={() => setActive(index)}
                    viewport={{ amount: 0.55 }}
                    initial={{ opacity: 0.55, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <div className="exp-panel-top">
                      <span>
                        {isPresent && <b className="exp-present">Present</b>}
                        {role.period} · {role.location}
                      </span>
                      <div className="exp-stat">
                        <b>{role.highlight.value}</b>
                        <small>{role.highlight.label}</small>
                      </div>
                    </div>
                    <h3>{role.company}</h3>
                    <p className="exp-role">{role.role}</p>
                    <p>{role.summary}</p>
                    <ul>
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>

        <div className="impact-row">
          {impactStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring" }}
            >
              <strong>{stat.value}</strong>
              <h3>{stat.label}</h3>
              <p>{stat.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="wrap">
        <div className="section-intro">
          <Reveal>
            <p className="eyebrow">Projects</p>
            <AnimatedHeading effect="spring">
              Knows the playbook.
              <em> Runs the play.</em>
            </AnimatedHeading>
          </Reveal>
          <Reveal delay={0.08}>
            <p>Three projects. Three different kinds of problem solving.</p>
          </Reveal>
        </div>

        <div className="project-fan">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`project-card ${project.color}`}
              initial={{ opacity: 0, y: 120, rotate: (index - 1) * 10 }}
              whileInView={{ opacity: 1, y: index === 1 ? -28 : 0, rotate: (index - 1) * 5 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.85, delay: index * 0.1, ease }}
              whileHover={{ y: -48, rotate: 0, zIndex: 5 }}
            >
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="project-stack">
                {project.stack.map((tech) => <i key={tech}>{tech}</i>)}
              </div>
              <strong>{project.result}</strong>
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github size={15} /> View on GitHub <ArrowUpRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="wrap">
        <div className="section-intro">
          <Reveal>
            <p className="eyebrow">Skills</p>
            <AnimatedHeading effect="slide">
              Your idea.
              <em> My complete toolkit.</em>
            </AnimatedHeading>
          </Reveal>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className={`skill-card tone-${index + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
              transition={{
                opacity: { duration: 0.55, delay: index * 0.06 },
                y: { duration: 4.5 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
              }}
              whileHover={{ scale: 1.02, y: -6 }}
            >
              <span>{group.title}</span>
              {group.skills.map((skill) => (
                <b key={skill}>{skill}</b>
              ))}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="wrap">
        <div className="section-intro">
          <Reveal>
            <p className="eyebrow">Education & credentials</p>
            <AnimatedHeading effect="rotate">
              Education that
              <em> powers the work.</em>
            </AnimatedHeading>
          </Reveal>
        </div>
        <div className="education-row">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              className={`education-card ${item.tone}`}
              initial={{ opacity: 0, y: 50, rotate: index ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.08, ease }}
            >
              <div className="education-orbit" aria-hidden="true" />
              <span>{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <small>{item.detail}</small>
              <b>{item.label}</b>
            </motion.article>
          ))}
        </div>
        <div className="cert-row">
          {certifications.map((item, index) => (
            <Reveal delay={index * 0.06} key={`${item.issuer}-${item.title}`}>
              <article>
                <span>{item.issuer}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <SiteFooter />
      </main>
    </>
  );
}
