"use client";
import { useState, useContext } from "react";
import Hero from "@/public/Hero.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import { LoginContext } from "@/context/login";

export default function Profile(props) {
  const socialLinks = [
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=4zbw62wAAAAJ&hl=en",
      icon: "ri-graduation-cap-line",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-400",
      hoverBorder: "hover:border-blue-500/50",
    },
    {
      name: "Research Gate",
      url: "https://www.researchgate.net/profile/Jitendra-Samriya",
      icon: "ri-flask-line",
      bgColor: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-400",
      hoverBorder: "hover:border-green-500/50",
    },
    {
      name: "IIIT Sonepat",
      url: "https://iiitsonepat.ac.in/",
      icon: "ri-building-line",
      bgColor: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-400",
      hoverBorder: "hover:border-purple-500/50",
    },
  ];
  const [role, setRole] = useState(props.profile.role);
  const [name, setName] = useState(props.profile.name);
  const [bio, setBio] = useState(props.profile.bio);
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <div className="flex flex-col gap-6 lg:flex-row justify-between px-[8%] lg:px-[16%]">
      {/* Left Content */}
      <div className="lg:w-1/2 text-start md:text-left">
        {/* <p className="text-lg mb-2 text-gray-400">{profile.role}</p> */}
        <input
          type="text"
          readOnly={!isLoggedIn}
          value={role}
          onBlur={async (e) => {
            const body = { ...props.profile, role };
            const response = await fetch("http://localhost:5000/profile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            });
          }}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          className="profile-role w-full text-lg mb-2 text-gray-400 focus:outline-none focus:ring-0"
        />
        <h1 className="profile-name text-5xl text-start lg:text-5xl font-unbounded font-normal mb-2">
          <textarea
            onChange={(e) => setName(e.target.value)}
            readOnly={!isLoggedIn}
            onBlur={async (e) => {
              const body = { ...props.profile, name };
              const response = await fetch("http://localhost:5000/profile", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
              });
            }}
            value={name}
            className="w-full focus:outline-none text-[color:var(--primary-color)] overflow-hidden resize-none"
          ></textarea>
        </h1>
        <textarea
          onChange={(e) => setBio(e.target.value)}
          readOnly={!isLoggedIn}
          onBlur={async (e) => {
            const body = { ...props.profile, bio };
            const response = await fetch("http://localhost:5000/profile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            });
          }}
          value={bio}
          className="profile-bio text-gray-400 text-md lg:text-md font-normal font-sora my-2 w-full resize-none focus:outline-none"
        >
          {/* {props.profile.bio} */}
        </textarea>
        {/* Buttons */}
        {/* <div className="profile-links grid grid-cols-3 gap-2 items-center">
          <a
            href="https://scholar.google.com/citations?user=4zbw62wAAAAJ&hl=en"
            className="flex hero-social gap-2 text-md items-center cursor-pointer"
          >
            <i className="bi bi-link-45deg text-lg"></i>
            <span>google scholar</span>
          </a>
          <a
            href="https://www.researchgate.net/profile/Jitendra-Samriya"
            className="flex hero-social gap-2 text-md items-center cursor-pointer"
          >
            <i className="bi bi-link-45deg text-lg"></i>
            <span>research gate</span>
          </a>
          <a
            href="https://iiitsonepat.ac.in/"
            className="flex hero-social gap-2 text-md items-center cursor-pointer"
          >
            <i className="bi bi-link-45deg text-lg"></i>
            <span>IIIT Sonepat</span>
          </a>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative overflow-hidden bg-gradient-to-br ${link.bgColor} border border-gray-800 ${link.hoverBorder} rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-color-rgb),0.2)]`}
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <div className="flex items-center gap-3 relative z-10">
                {/* Icon container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${link.bgColor} border border-gray-700 group-hover:border-gray-600`}
                >
                  <i
                    className={`${link.icon} text-xl ${link.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  ></i>
                </motion.div>

                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                    {link.name}
                  </span>
                  <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    View Profile
                  </span>
                </div>

                {/* Arrow icon */}
                <i className="ri-arrow-right-up-line text-gray-600 group-hover:text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${link.bgColor.replace(
                  "/10",
                  ""
                )} w-0 group-hover:w-full transition-all duration-500`}
              />
            </motion.a>
          ))}
        </div>
      </div>
      {/* Right Image */}
      {/* <div className="profile-image lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center relative">
        <div className="relative rounded-full flex items-center justify-center">
          <div className="shadow-[0_0_15px_#fc4100] transition-all relative hero-image w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[var(--hero-image-from)] to-[var(--hero-image-to)] transform hover:scale-105 duration-300">
            <Image
              src={Hero}
              alt="Portfolio Picture"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div> */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="profile-image lg:w-1/2 w-full flex justify-center relative"
      >
        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--primary-color)]/20 scale-110"
          />

          {/* Image container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[var(--hero-image-from)] to-[var(--hero-image-to)] shadow-[0_0_40px_rgba(var(--primary-color-rgb),0.3)] hover:shadow-[0_0_60px_rgba(var(--primary-color-rgb),0.5)] transition-shadow duration-500 border-4 border-[var(--primary-color)]/30"
          >
            <Image
              src={Hero}
              alt="Portfolio Picture"
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
