// src/Components/AboutView.tsx
import UIOverlay from './UIOverlay';

type AboutViewProps = {
  visible: boolean;
  onBack: () => void;
};

export default function AboutView({ visible, onBack }: AboutViewProps) {
  // --- Style for the resume button ---
  // You can move this to your CSS file if you prefer.
  const buttonStyle = {
    display: 'inline-block',
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#2563EB', // A nice blue color
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  };

  // Style for the button on hover
  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = '#1D4ED8'; // Darker blue on hover
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = '#2563EB'; // Revert to original color
  };


  return (
    <UIOverlay visible={visible} onBack={onBack}>
      <div className="about-container">
        <img src="https://picsum.photos/seed/ashirwad/200/200" alt="Ashirwad Mishra" className="about-image" />
        <div className="about-text">
          <h2>My Story</h2>
          <p>
            I am a software developer driven by the challenge of solving complex problems. With a rigorous background in Data Structures, Algorithms, and OOP using C++ and Java, I excel at architecting efficient and scalable solutions from the ground up.
          </p>
          <p>
            My current focus is on full-stack development, where I leverage my problem-solving skills to build dynamic and responsive user interfaces with React and TypeScript. I am passionate about writing clean, maintainable code and utilizing modern tools like Vite and Git to create a seamless development workflow.
          </p>
          <p>
            To stay on the cutting edge, I am actively learning AI, Machine Learning, and Data Science with Python, aiming to integrate intelligent features into future projects. I am seeking opportunities where I can contribute to meaningful products and continue to grow as both a problem-solver and a creator.
          </p>
          
          {/* --- Resume Button Added Here --- */}
          <a
            href="https://ashirwad-mishra.github.io/Resume/"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            My Resume
          </a>
        </div>
      </div>
    </UIOverlay>
  );
}
