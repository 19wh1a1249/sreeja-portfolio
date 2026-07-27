import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { profile } from "../../data/portfolio";

export default function SiteFooter() {
  return (
    <section className="final-cta" id="contact">
      <div className="footer-glow" aria-hidden="true" />
      <div className="wrap contact-inner">
        <Reveal>
          <p className="eyebrow light">Contact</p>
          <h2>
            Complex is my comfort zone.
          </h2>
          <p className="contact-lead">
            Based in {profile.location}. {profile.availability}.
          </p>
          <div className="contact-actions">
            <Button href={`mailto:${profile.email}`}>Start a conversation</Button>
            <Button href={profile.resume} download variant="secondary">
              Download resume
            </Button>
          </div>
        </Reveal>

        <div className="footer-grid">
          <div>
            <a className="footer-logo" href="#top">
              <span>✦</span> {profile.name}
            </a>
            <p>
              {profile.role}
              <br />
              {profile.location}
            </p>
          </div>
          <div>
            <span>Connect</span>
            <a href={`mailto:${profile.email}`}><Mail size={15} /> Email</a>
            <a href={profile.phoneHref}><Phone size={15} /> {profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
          </div>
          <div>
            <span>Explore</span>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href={profile.resume} download><Download size={15} /> Resume</a>
          </div>
        </div>
        <small className="copyright">© {new Date().getFullYear()} {profile.name}</small>
      </div>
    </section>
  );
}
