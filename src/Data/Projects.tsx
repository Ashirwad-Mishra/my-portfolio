// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  liveUrl?: string; // Link to the live project
  codeUrl?: string; // Link to the GitHub repository
}

export const projects: Project[] = [
  {
    id: 1,
    title: "The Bhagavad Gita App",
    category: "Web & Spiritual Tech",
    description: "An interactive web application offering a serene and accessible way to read, search, and understand the sacred text of the Bhagavad Gita.",
    imageUrl: "https://picsum.photos/id/1015/600/400",
    liveUrl: "https://ashirwad-mishra.github.io/bhagvat-geeta-app/",
    codeUrl: "https://github.com/Ashirwad-Mishra/bhagvat-geeta-app", // --- ADDED ---
  },
  {
    id: 2,
    title: "Console Bank Management System",
    category: "C++ Application",
    description: "A robust, console-based banking application built using C++. It showcases strong object-oriented programming principles.",
    imageUrl: "https://picsum.photos/id/1016/600/400",
    codeUrl: "https://github.com/Ashirwad-Mishra/Ashirwad-s-Bank",
  },
  {
    id: 3,
    title: "Super App (In Development)",
    category: "Full-Stack Application",
    description: "Currently architecting and building an ambitious 'Super App' designed to integrate multiple services into a single, seamless user experience.",
    imageUrl: "https://picsum.photos/id/1025/600/400",
    // Add your codeUrl here when it's available
  },
  {
    id: 4,
    title: "Task Manager App",
    category: "Web Development",
    description: "A simple yet effective task management application that allows users to create, update, and delete tasks with ease.",
    imageUrl: "https://picsum.photos/id/1024/600/400",
    // liveUrl: "https://ashirwad-mishra.github.io/my-portfolio/",
    codeUrl: "https://github.com/Ashirwad-Mishra/to_do_app",
  }
];