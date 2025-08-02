"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import StarBackground from "../components/StarBackground";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4 sm:px-6 py-24 min-h-screen overflow-hidden flex items-center justify-center">
      <StarBackground />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center justify-center text-center space-y-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg shadow-emerald-400/30"
        >
          <img
            src="/harsh1.JPG"
            alt="Harsh Pariya"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 text-transparent bg-clip-text leading-tight">
            <Typewriter
              options={{
                strings: [
                  "Hi, I'm Harsh Pariya!",
                  "Aspiring Full-Stack Developer!",
                  "Code. Design. Build.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I build fast, scalable, and modern web applications using the latest tech stack like React, Node.js, MongoDB & Tailwind CSS. Let's create something amazing together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"
            >
              View Projects
            </Link>
            <a
              href="/Resume.pdf"
              download
              className="flex items-center justify-center gap-2 border border-emerald-400 text-emerald-300 px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-emerald-600 hover:text-white hover:scale-105 transition-all duration-300 font-semibold"
            >
              <HiOutlineDownload className="text-xl" /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mt-6 text-2xl text-slate-300">
            <a
              href="https://github.com/HarshPariya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-pariya/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/harshpariya_01"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 hover:scale-110 transition-all duration-300"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Toggle About */}
          <button
            onClick={() => setShowAbout(!showAbout)}
            className="mt-4 text-sm underline text-slate-400 hover:text-emerald-300 transition-all duration-300"
          >
            {showAbout ? "Hide About Me" : "Read More About Me"}
          </button>

          {showAbout && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-slate-300 bg-white/5 backdrop-blur-md mt-4 rounded-lg p-4 border border-slate-700/50"
            >
              I'm currently learning Full-Stack Development, building real-time
              applications, and diving into beautifully animated UIs using Next.js, React,
              Tailwind CSS, and Framer Motion.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
