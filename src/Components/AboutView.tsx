// src/Components/AboutView.tsx
import UIOverlay from './UIOverlay';

type AboutViewProps = {
  visible: boolean;
  onBack: () => void;
};

export default function AboutView({ visible, onBack }: AboutViewProps) {
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
        </div>
      </div>
    </UIOverlay>
  );
}