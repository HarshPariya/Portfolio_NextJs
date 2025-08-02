"use client";

import { useState } from "react";
import { FaLaptopCode, FaPaintBrush, FaCogs, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import StarBackground from "../components/StarBackground";

const servicesData = [
  {
    title: "Full-Stack Web Development",
    description:
      "Responsive, scalable web apps using React, Node.js, Express & MongoDB.",
    icon: <FaLaptopCode className="text-emerald-400 text-5xl mb-4" />,
    borderColor: "border-emerald-500/30",
    hoverShadow: "hover:shadow-emerald-400/30",
    category: "development",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, intuitive designs focused on great user experience and aesthetics.",
    icon: <FaPaintBrush className="text-sky-400 text-5xl mb-4" />,
    borderColor: "border-sky-500/30",
    hoverShadow: "hover:shadow-sky-400/30",
    category: "design",
  },
  {
    title: "API Integration",
    description:
      "Efficiently integrate REST APIs to enable seamless backend communication.",
    icon: <FaCogs className="text-indigo-400 text-5xl mb-4" />,
    borderColor: "border-indigo-500/30",
    hoverShadow: "hover:shadow-indigo-400/30",
    category: "development",
  },
  {
    title: "Freelance Development",
    description:
      "Custom projects built to client specs with clear timelines and results.",
    icon: <FaBriefcase className="text-pink-400 text-5xl mb-4" />,
    borderColor: "border-pink-500/30",
    hoverShadow: "hover:shadow-pink-400/30",
    category: "freelance",
  },
];

const tabs = ["All", "Development", "Design", "Freelance"];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredServices =
    activeTab === "All"
      ? servicesData
      : servicesData.filter(
          (service) =>
            service.category.toLowerCase() === activeTab.toLowerCase()
        );

  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-24 min-h-screen overflow-hidden">
      <StarBackground />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 text-transparent bg-clip-text"
        >
          My Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-slate-300 mb-14 max-w-3xl mx-auto"
        >
          I deliver professional full-stack development and design services tailored for modern web solutions.
        </motion.p>

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

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-white/5 p-6 rounded-2xl w-64 h-64 flex flex-col items-center justify-center text-center backdrop-blur-md border ${service.borderColor} shadow-lg ${service.hoverShadow} transition-all`}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
