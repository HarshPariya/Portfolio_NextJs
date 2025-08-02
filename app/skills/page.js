"use client";

import { useState } from "react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiRedux, SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";
import StarBackground from "../components/StarBackground";

const skillsData = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  ],
  Other: [
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "Responsive Design", icon: "📱" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Problem Solving", icon: "🧠" },
  ],
};

const tabs = ["All", "Frontend", "Backend", "Other"];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills =
    activeTab === "All"
      ? [...skillsData.Frontend, ...skillsData.Backend, ...skillsData.Other]
      : skillsData[activeTab];

  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-24 min-h-screen overflow-hidden">
      <StarBackground />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 text-transparent bg-clip-text">
          My Skills
        </h2>
        <p className="text-lg text-slate-300 mb-14 max-w-3xl mx-auto">
          I specialize in building fast, scalable full-stack applications with modern technologies and clean architecture.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl border text-sm font-medium transition duration-300 shadow-sm
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white border-transparent shadow-lg scale-105"
                    : "border-slate-600 text-slate-300 hover:text-white hover:border-sky-400 hover:scale-105"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center"
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl w-36 h-36 flex flex-col items-center justify-center backdrop-blur-md border border-slate-700/40 shadow-lg transform transition duration-300 hover:scale-110"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-sm text-slate-200 font-semibold text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
