import { projects } from './Data/Projects';
import { writings } from './Data/writings';
import './App.css';

const skills = ['Java', 'Spring Boot', 'C++', 'React', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Docker'];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Ashirwad Mishra, home"><span className="brand-mark">AM</span><span>Ashirwad Mishra</span></a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#writing">Writing</a><a href="#contact">Contact</a></nav>
        <a className="availability" href="https://www.linkedin.com/in/ashirwad-mishra-springboot-developer-problem-solver-software-developer/" target="_blank" rel="noreferrer"><i /> Let’s connect</a>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> SOFTWARE ENGINEER · INDIA</p>
            <h1>Building thoughtful<br /><em>software</em> for the web.</h1>
            <p className="hero-intro">I’m Ashirwad, a backend-first developer who enjoys turning complex problems into clear, dependable products.</p>
            <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <Arrow /></a><a className="text-link" href="#contact">Let’s talk <Arrow /></a></div>
            <div className="hero-facts"><div><strong>1,000+</strong><span>problems solved</span></div><div><strong>ICPC</strong><span>Asia Kanpur Regional</span></div><div><strong>ABES</strong><span>Computer Science</span></div></div>
          </div>
          <div className="hero-art" aria-label="A stylized abstract illustration of a software workspace">
            <div className="art-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="code-card"><div className="code-top"><span /><span /><span /><small>identity.ts</small></div><pre><span className="code-purple">const</span> engineer = {'{'}{ '\n' }  name: <span className="code-green">'Ashirwad'</span>,{ '\n' }  focus: <span className="code-green">'backend'</span>,{ '\n' }  mindset: <span className="code-green">'always learning'</span>{ '\n'}{'}'}</pre><div className="code-status"><i /> All systems curious</div></div>
            <div className="art-label"><span>01 / 04</span><span>DESIGN · ENGINEERING · IMPACT</span></div>
            <div className="art-stamp">AM<span>∞</span></div>
          </div>
          <a className="scroll-cue" href="#work"><span /> Scroll to explore</a>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Made with intent.</h2></div><p>A selection of projects exploring useful ideas, solid foundations, and the details that make software feel right.</p></div>
          <div className="project-grid">{projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.id}>
            <div className="project-visual"><div className="visual-window"><div className="visual-bar"><b /><b /><b /><span>{index === 0 ? 'gita.app' : `project_0${index + 1}`}</span></div><div className={`visual-content visual-content-${index + 1}`}><span className="visual-kicker">{project.category}</span><strong>{index === 0 ? 'Wisdom,\none verse at a time.' : project.title}</strong><span className="visual-decoration">{index === 0 ? 'ॐ' : index === 1 ? '{ }' : index === 2 ? '✳' : '✓'}</span></div></div><span className="project-number">0{index + 1}</span></div>
            <div className="project-meta"><div><p className="project-type">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>Live <Arrow /></a>}{project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code`}>Source <Arrow /></a>}</div></div>
          </article>)}</div>
        </section>

        <section className="about-section" id="about"><div className="section-wrap about-grid"><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Curiosity is my<br /><em>operating system.</em></h2></div><div className="about-copy"><p className="about-lead">I care about how things work beneath the surface—and how they feel to the person using them.</p><p>My path through computer science has taken me from competitive programming to building full-stack applications. These days I’m especially interested in backend architecture, thoughtful APIs, and the craft of making dependable products.</p><p>I’m currently pursuing a B.Tech in Computer Science and Engineering at ABES Engineering College, affiliated with AKTU.</p><a className="text-link" href="https://www.linkedin.com/in/ashirwad-mishra-springboot-developer-problem-solver-software-developer/" target="_blank" rel="noreferrer">More about my journey <Arrow /></a></div><div className="about-note"><span>HOW I LIKE TO WORK</span><p>Understand the problem.<br />Make the simple thing work.<br />Refine with care.</p></div></div></section>

        <section className="capabilities section-wrap"><div className="section-heading"><div><p className="eyebrow">TOOLS OF THE TRADE</p><h2>Built from the inside out.</h2></div><p>Backend depth, frontend fluency, and a problem-solving mindset that connects the two.</p></div><div className="skill-layout"><div className="skill-feature"><span className="skill-index">01 — THE FOUNDATION</span><h3>Reliable by design.</h3><p>From data models to API contracts, I enjoy building the systems that help products stay clear, stable, and ready to grow.</p><div className="skill-tags">{skills.slice(0, 4).map(skill => <span key={skill}>{skill}</span>)}</div></div><div className="skill-list">{skills.map((skill, index) => <div key={skill}><span>0{index + 1}</span>{skill}<b>↗</b></div>)}</div></div></section>

        <section className="writing-section" id="writing"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow">NOTES & EXPLANATIONS</p><h2>Thinking out loud.</h2></div><span className="soon-label">A learning log in progress</span></div><div className="writing-list">{writings.map((writing, index) => <article className="writing-row" key={writing.id}><span className="writing-index">0{index + 1}</span><div><p>{writing.publication}</p><h3>{writing.title}</h3><span>{writing.description}</span></div><span className="writing-arrow">↗</span></article>)}</div></div></section>

        <section className="contact-section section-wrap" id="contact"><div className="contact-top"><p className="eyebrow">HAVE SOMETHING IN MIND?</p><span>LET’S START A CONVERSATION</span></div><h2>Good work starts<br />with a <em>conversation.</em></h2><div className="contact-bottom"><a className="button button-light" href="https://www.linkedin.com/in/ashirwad-mishra-springboot-developer-problem-solver-software-developer/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a><div className="social-links"><a href="https://github.com/Ashirwad-Mishra" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/ashirwad-mishra-springboot-developer-problem-solver-software-developer/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://leetcode.com/u/Champians_Knight/" target="_blank" rel="noreferrer">LeetCode <Arrow /></a></div></div></section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#top"><span className="brand-mark">AM</span><span>Ashirwad Mishra</span></a><span>Designed with curiosity. Built with care.</span><span>© {new Date().getFullYear()} Ashirwad Mishra</span></footer>
    </div>
  );
}
