"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaBullseye,
  FaRocket,
} from "react-icons/fa";
import StarBackground from "../components/StarBackground";

const aboutItems = [
  {
    icon: <FaRocket className="text-indigo-400 text-4xl" />,
    title: "Passionate Developer",
    description:
      "I thrive on building impactful software. My passion for technology drives me to constantly learn, experiment, and turn ideas into functional experiences.",
    border: "border-indigo-500/30",
    shadow: "hover:shadow-indigo-400/40",
    text: "text-indigo-400",
  },
  {
    icon: <FaCode className="text-purple-400 text-4xl" />,
    title: "Full-Stack Expertise",
    description:
      "Skilled in both frontend and backend, I create full-stack solutions using React, Node.js, Express, and MongoDB that are clean, scalable, and efficient.",
    border: "border-purple-500/30",
    shadow: "hover:shadow-purple-400/40",
    text: "text-purple-400",
  },
  {
    icon: <FaGraduationCap className="text-emerald-400 text-4xl" />,
    title: "Educational Background",
    description:
      "Currently pursuing B.Tech in Computer Science at Rai University, I've developed strong foundations in problem solving, data structures, and software engineering.",
    border: "border-emerald-500/30",
    shadow: "hover:shadow-emerald-400/40",
    text: "text-emerald-400",
  },
  {
    icon: <FaBullseye className="text-pink-400 text-4xl" />,
    title: "Future Goals",
    description:
      "Aspiring to become a creative and technically sound Tech Architect, leading impactful projects and empowering the developer community through mentorship.",
    border: "border-pink-500/30",
    shadow: "hover:shadow-pink-400/40",
    text: "text-pink-400",
  },
];

const timeline = [
  { year: "2024", event: "Started B.Tech in Computer Science at Rai University" },
  { year: "2025", event: "Built multiple full-stack projects using MERN stack" },
  { year: "2026", event: "Will do Internship in Tech Company" },
  { year: "2027", event: "Will focus on performance, testing, deployment, and DevOps" },
  { year: "2028+", event: "Aim to become a tech architect & team leader" },
];

const tabs = ["About", "Timeline"];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-24 min-h-screen overflow-hidden">
      <StarBackground />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="text-lg text-slate-300 mb-14 max-w-3xl mx-auto">
          Learn more about my journey, what drives me, and my future vision as a full-stack developer.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl border text-sm font-medium transition duration-300 shadow-sm
              ${
                activeTab === tab
                  ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white border-transparent shadow-lg scale-105"
                  : "border-slate-600 text-slate-300 hover:text-white hover:border-sky-400 hover:scale-105"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* About Cards */}
        {activeTab === "About" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center"
          >
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`w-full max-w-md bg-white/5 backdrop-blur-md rounded-2xl p-8 border ${item.border} ${item.shadow} ${item.text} shadow-lg hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-slate-300 text-base">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Timeline Section */}
        {activeTab === "Timeline" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-left space-y-10"
          >
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative border-l-4 border-indigo-500 pl-8 bg-white/5 backdrop-blur-md rounded-r-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-indigo-400/30 hover:scale-[1.02]"
              >
                <div className="absolute top-6 left-[-12px] w-6 h-6 bg-indigo-500 rounded-full shadow-md" />
                <h4 className="text-xl font-semibold text-indigo-300 mb-2">{item.year}</h4>
                <p className="text-slate-300 text-lg">{item.event}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
