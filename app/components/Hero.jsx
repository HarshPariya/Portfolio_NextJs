"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import StarBackground from "./StarBackground";

const Hero = () => {
  return (
    <section className="relative text-white min-h-screen flex items-center justify-center px-6">
      <StarBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-90 z-0" />

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 relative z-10">
        {/* Left content */}
        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Harsh Pariya
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300">
            Aspiring Software Developer
          </h2>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0">
            Passionate coder and problem solver. I love building smart solutions
            for real-world problems and exploring the latest in tech. 🚀💻
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg text-white font-medium shadow-md transition duration-300"
            >
              Explore My Work →
            </Link>
            <Link
              href="/Resume.pdf"
              download
              className="border border-indigo-400 hover:bg-indigo-600 hover:text-white text-indigo-300 px-6 py-3 rounded-lg transition duration-300"
            >
              Download CV ↓
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-xl pt-6 justify-center md:justify-start">
            <a
              href="https://github.com/HarshPariya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/harsh-pariya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:hpariya195@gmail.com"
              className="hover:text-indigo-400 transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="relative w-60 h-60 rounded-full border-4 border-purple-500 p-2 shadow-lg">
          <Image
            src="/harsh1.JPG"
            alt="Harsh"
            fill
            className="rounded-full object-cover"
          />
          <span className="absolute top-4 left-4 w-3 h-3 bg-pink-400 rounded-full blur-sm animate-ping"></span>
          <span className="absolute bottom-6 right-6 w-4 h-4 bg-blue-400 rounded-full blur-sm animate-pulse"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
