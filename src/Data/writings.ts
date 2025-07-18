// src/data/writings.ts

export interface Writing {
  id: number;
  title: string;
  publication: string; // e.g., "Medium", "Dev.to", "Personal Blog"
  description: string;
  articleUrl: string;
}

export const writings: Writing[] = [
  {
    id: 1,
    title: "A Deep Dive into C++ Memory Management",
    publication: "Medium",
    description: "Exploring the intricacies of manual memory management in C++, from pointers and references to smart pointers and RAII.",
    articleUrl: "#", // Replace with the actual URL to your article
  },
  {
    id: 2,
    title: "Understanding React Hooks for State Management",
    publication: "Personal Blog",
    description: "A beginner-friendly guide to mastering useState and useEffect for powerful and clean state logic in React applications.",
    articleUrl: "#", // Replace with the actual URL to your article
  },
];