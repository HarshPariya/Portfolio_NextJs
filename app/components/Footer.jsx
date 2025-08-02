"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-slate-400 text-sm mt-24 border-t border-slate-700/40">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
          Let's Work Together
        </h3>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
          I'm always excited to collaborate on new projects or just chat tech!
          Feel free to reach out or connect with me online.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Contact Me
        </Link>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-700/30">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-indigo-400 font-semibold">Harsh Pariya</span>. All rights reserved.
        </p>

        {/* <div className="flex space-x-8">
          <Link href="privacy" className="hover:text-emerald-400 transition-all duration-300 hover:scale-105">
            Privacy
          </Link>
          <Link href="terms" className="hover:text-sky-400 transition-all duration-300 hover:scale-105">
            Terms
          </Link>
        </div> */}

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/HarshPariya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-pariya/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/harshpariya_01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            href="mailto:hpariya195@gmail.com"
            className="hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="text-center py-8">
        <button
          onClick={scrollToTop}
          className="text-white bg-white/10 border border-slate-700 rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
          aria-label="Scroll to Top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
