"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiGmail, SiX } from "react-icons/si";
import { motion } from "framer-motion";
import StarBackground from "../components/StarBackground";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-24 overflow-hidden">
      <StarBackground />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 text-transparent bg-clip-text"
        >
          Contact Me
        </motion.h2>
        <p className="text-lg text-slate-300 mb-14 max-w-2xl mx-auto">
          I'm open to freelance work, collaborations, or full-time opportunities. Let’s create something amazing together!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-sky-500/20 shadow-2xl"
          >
            <ContactItem
              icon={<FaEnvelope className="text-sky-400 text-2xl" />}
              label="Email"
              value="hpariya195@gmail.com"
            />
            <ContactItem
              icon={<FaPhoneAlt className="text-emerald-400 text-2xl" />}
              label="Phone"
              value="+91 9601986209"
            />
            <ContactItem
              icon={<FaMapMarkerAlt className="text-indigo-400 text-2xl" />}
              label="Location"
              value="Ahmedabad, Gujarat, India"
            />
          </motion.div>

          {/* Social & Message CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <p className="text-emerald-300 font-semibold text-lg mb-2">
                ✅ Available for Freelance
              </p>
              <p className="text-slate-400 mb-6">
                Ready to collaborate on exciting projects and opportunities.
              </p>

              <div className="flex justify-center md:justify-start gap-6 text-2xl text-slate-300 mb-8">
                <SocialIcon
                  href="https://github.com/HarshPariya"
                  icon={<FaGithub />}
                  hover="text-emerald-400"
                />
                <SocialIcon
                  href="https://linkedin.com/in/harsh-pariya"
                  icon={<FaLinkedin />}
                  hover="text-sky-400"
                />
                <SocialIcon
                  href="https://x.com/HarshPariya"
                  icon={<SiX />}
                  hover="text-blue-400"
                />
                <SocialIcon
                  href="mailto:hpariya195@gmail.com"
                  icon={<SiGmail />}
                  hover="text-red-400"
                />
              </div>
            </div>

            <a
              href="mailto:hpariya195@gmail.com"
              className="inline-block text-center bg-gradient-to-r from-sky-500 to-purple-500 px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              📬 Send a Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-5 mb-6">
      {icon}
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon, hover }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition duration-300 hover:scale-110 ${hover}`}
    >
      {icon}
    </a>
  );
}
