"use client";

import { useState } from "react";
import { FaBootstrap, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCss3, SiHtml5, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("Experience");
  const tabs = ["Experience", "Education", "Skills", "About me"];
  // Experience
  const experiences = [
    {
      date: "2025 - Present",
      role: "Full Stack Developer",
      company: "Tech Solutions Inc.",
    },
    {
      date: "Summer 2021",
      role: "Front-End Developer Intern",
      company: "Web Design Studio",
    },
    {
      date: "2019 - 2020",
      role: "Teaching Assistant",
      company: "Tech Academy",
    },
    {
      date: "2018 - 2019",
      role: "Diploma in Graphic Design",
      company: "Design School",
    },
    {
      date: "2015 - 2017",
      role: "Associate Degree in Computer Science",
      company: "Community College",
    },
  ];
  // Education
  const educations = [
    {
      year: "2021 - 2023",
      degree: "M.Sc. Computer Science",
      institute: "XYZ university",
    },
    {
      year: "2018 - 2021",
      degree: "B.Sc. Computer Science",
      institute: "ABC university",
    },
    {
      year: "2016 - 2018",
      degree: "High School",
      institute: "DEF university",
    },
  ];
  // Skills
  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScipt", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
  ];
  return (
    <section className="px-[8%] lg:px-[16%] py-20 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left SideBar */}
        <div>
          <h2 className="text-4xl font-unbounded font-bold mb-4">
            Why hire me?
          </h2>
          <p className="text-gray-400 mt-6 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            fugit pariatur facere voluptatum doloremque consequatur.
          </p>
          <div className="flex flex-col gap-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-left rounded-md font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[var(--primary-color)] text-white"
                    : "bg-gray-500/5 text-gray-400 hover:gray-500/20 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* Right Content */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-unbounded font-bold mb-4">
            {activeTab}
          </h2>
          <p className="text-gray-400 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, eum!
          </p>
          {/* Experience */}
          {activeTab === "Experience" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-10 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                      {exp.date}
                    </h3>
                    <h4 className="text-3xl font-normal font-unbounded mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-gray-400 flex items-center text-sm mt-2">
                      <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                        •
                      </span>{" "}
                      {exp.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Education */}
          {activeTab === "Education" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educations.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-10 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                      {edu.year}
                    </h3>
                    <h4 className="text-3xl font-normal font-unbounded mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 flex items-center text-sm mt-2">
                      <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                        •
                      </span>{" "}
                      {edu.institute}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Skills */}
          {activeTab === "Skills" && (
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-gray-200 mt-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="relative cursor-pointer bg-gray-500/5 rounded py-11 flex flex-col items-center group"
                >
                  <i className="text-6xl group-hover:text-[color:var(--primary-color)] transition-all duration-500">
                    {skill.icon}
                  </i>
                  {/* Tooltip */}
                  <span className="absolute bottom-[5px] scale-0 rounded bg-gray-800 px-2 py-1 font-semibold text-1xl text-white transition-all duration-300 group-hover:scale-100 group-hover:text-[color:var(--primary-color)]">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {/* About */}
          {activeTab === "About me" && (
            <div className="text-gray-400 space-y-4">
              <p>
                Hi! I'm{" "}
                <span className="text-[color:var(--primary-color)] font-semibold">
                  Tyler Knox
                </span>
                a passionate full-stack developer who enjoys crafting modern web
                applications and sleek, user-friendly interfaces
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Experience</strong> 8+ year in Web Development
                </li>
                <li>
                  <strong>Nationality</strong> American
                </li>
                <li>
                  <strong>Freelance</strong> Available for projects
                </li>
                <li>
                  <strong>Phone:</strong> (+1) 123 4567 890
                </li>
                <li>
                  <strong>Email:</strong> tyler.Example@gmail.com
                </li>
                <li>
                  <strong>Languages:</strong> English, Spanish
                </li>
              </ul>
              <p>
                I specialize in React, Next.js, Node.js, and Tailwind CSS. I
                love turning ideas into functional elegant web solutions that
                users enjoy
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
