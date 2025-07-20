// src/Components/ContactView.tsx
import UIOverlay from './UIOverlay';

// --- Placeholder URLs ---
// You can replace these with your actual profile links
const socialLinks = {
  github: "https://github.com/Ashirwad-Mishra",
  linkedin: "https://www.linkedin.com/in/ashirwad-mishra-6248b8292/",
  twitter: "https://twitter.com/your-handle",
  leetCode: "https://leetcode.com/u/Champians_Knight/",
};

type ContactViewProps = {
  visible: boolean;
  onBack: () => void;
};

export default function ContactView({ visible, onBack }: ContactViewProps) {
  return (
    <UIOverlay visible={visible} onBack={onBack}>
      <div className="contact-view-wrapper">
        <div className="contact-form-section">
          <h2 className="view-title">Let's Connect</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hello? Drop me a line.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={4}></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">Send Message</button>
            </div>
          </form>
        </div>
        <div className="socials-section">
          <h3>Or find me on</h3>
          <div className="social-links-grid">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
              GitHub
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
              LinkedIn
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" alt="Twitter" />
              Twitter
            </a>
            <a href={socialLinks.leetCode} target="_blank" rel="noopener noreferrer">
              <img src="https://miro.medium.com/v2/resize:fit:947/1*oz2LpDFoQQJjXmxEPe2RsA.png" alt="LeetCode" />
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </UIOverlay>
  );
}