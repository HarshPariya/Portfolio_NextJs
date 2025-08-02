"use client";

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import StarBackground from "../components/StarBackground";

const categories = ["All", "Frontend", "Fullstack"];

const projectsData = [
  {
    title: "Quiz App",
    description: "A feature-rich React-based quiz app with lifelines, timer, and leaderboard.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    live: "https://quiz-app-by-harsh.netlify.app/",
    github: "https://github.com/HarshPariya/Quiz-App-Frontend",
    category: "Fullstack",
  },
  {
    title: "Todo List App",
    description: "A responsive to-do list app with CRUD and backend integration.",
    tech: ["React", "Express", "MongoDB", "Tailwind CSS"],
    live: "https://todo-list-by-harshp.netlify.app/",
    github: "https://github.com/HarshPariya/Todo-list-Frontend",
    category: "Frontend",
  },
  {
    title: "Student Management System",
    description: "A student portal with weather API integration and responsive layout.",
    tech: ["React", "CSS"],
    live: "https://student-managment-system-by-harshp.netlify.app/",
    github: "https://github.com/HarshPariya/Student-Management-System",
    category: "Frontend",
  },
  {
    title: "Portfolio Website",
    description: "Animated personal portfolio using React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "#",
    github: "https://github.com/HarshPariya/Portfolio",
    category: "Frontend",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-24 px-6 overflow-hidden min-h-screen">
      <StarBackground />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 text-transparent bg-clip-text"
        >
          My Projects
        </motion.h2>
        <p className="text-lg text-slate-300 mb-14 max-w-3xl mx-auto">
          Real-world applications built using the MERN stack and modern frontend technologies.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl border text-sm font-medium transition duration-300 shadow-sm
                ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white border-transparent shadow-lg scale-105"
                    : "border-slate-600 text-slate-300 hover:text-white hover:border-sky-400 hover:scale-105"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-slate-700/40 rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-sky-500/20"
            >
              <h3 className="text-xl font-semibold text-sky-400 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-sky-700/80 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 text-sm justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-sky-300 transition-all"
                >
                  <FaGithub /> GitHub
                </a>
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-sky-300 transition-all"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center bg-white/5 backdrop-blur-md rounded-2xl px-8 py-10 border border-slate-700/30 shadow-xl"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-purple-400 text-transparent bg-clip-text">
            Let’s Build Together
          </h3>
          <p className="text-slate-300 mb-6 text-lg max-w-2xl mx-auto">
            I’m open for freelance projects, collaborations, or full-time roles. Reach out and let’s create something meaningful.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
