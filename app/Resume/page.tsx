"use client";

import { useState } from "react";
import { FaBootstrap, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCss3, SiHtml5, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("Publications");
  const tabs = ["Publications", "Conferences", "Books", "Timeline"];
  // Experience
  const publications = [
    {
      date: 2023,
      title:
        "Adversarial ML-Based Secured Cloud Architecture for Consumer Internet of Things of Smart Healthcare",
      vanue: "IEEE Transactions on Consumer Electronics",
      citations: 59,
      tags: [
        "Fog Computing",
        "IoT",
        "Workload Prediction",
        "Resource Allocation",
      ],
    },
    {
      date: 2024,
      title:
        "Adversarial ML-Based Secured Cloud Architecture for Consumer Internet of Things of Smart Healthcare",
      vanue: "IEEE Transactions on Consumer Electronics",
      citations: 20,
      tags: ["Adversial ML", "Cloud Security", "IoT", "Healthcare"],
    },
    {
      date: 2024,
      title:
        "Blockchain and Reinforcement Neural Network for Trusted Cloud-Enabled IoT Network",
      vanue: "IEEE Transactions on Consumer Electronics",
      citations: 20,
      tags: [],
    },
  ];
  // Conferences
  const conferences = [
    {
      date: 2023,
      title:
        "Towards 6G-Enabled Edge-Cloud Continuum Computing - Initial Assessment",
      vanue: "Advanced Communication and Intelligent Systems (ICACIS)",
      citations: "online",
      tags: [
        "Fog Computing",
        "IoT",
        "Workload Prediction",
        "Resource Allocation",
      ],
    },
    {
      date: 2024,
      title:
        "Adversarial ML-Based Secured Cloud Architecture for Consumer Internet of Things of Smart Healthcare",
      vanue: "IEEE Transactions on Consumer Electronics",
      citations: 20,
      tags: ["Adversial ML", "Cloud Security", "IoT", "Healthcare"],
    },
    {
      date: 2024,
      title:
        "Blockchain and Reinforcement Neural Network for Trusted Cloud-Enabled IoT Network",
      vanue: "IEEE Transactions on Consumer Electronics",
      citations: 20,
      tags: [],
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
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Search publications"
              className="bg-[#0e0f12] w-full border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
            />
            <select className="bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500 appearance-none">
              <option>Years</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
            <select className="bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500 appearance-none">
              <option>Relevance</option>
              <option>Citations</option>
              <option>H-index</option>
            </select>
          </div>
          <p className="text-gray-400 mb-10">
            Peer-reviewed journal papers and technical contributions
          </p>
          {/* Experience */}
          {activeTab === "Publications" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {publications.map((pub, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-4 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                      {pub.date}
                    </h3>
                    <h4 className="text-lg font-normal font-unbounded mb-1">
                      {pub.title}
                    </h4>
                    <div className="text-gray-400 flex items-center gap-2 text-sm mt-2">
                      <div className="flex items-center">
                        <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                          •
                        </span>{" "}
                        {pub.vanue}
                      </div>
                      <div className="flex items-center">
                        <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                          •
                        </span>{" "}
                        {pub.citations} Citations
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      {pub.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-500/10 text-gray-500 rounded-full py-1 px-1.75 text-[12px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Education */}
          {activeTab === "Conferences" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {conferences.map((conf, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-4 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                      {conf.date}
                    </h3>
                    <h4 className="text-lg font-normal font-unbounded mb-1">
                      {conf.title}
                    </h4>
                    <div className="text-gray-400 flex items-center gap-2 text-sm mt-2">
                      <div className="flex items-center">
                        <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                          •
                        </span>{" "}
                        {conf.vanue}
                      </div>
                      <div className="flex items-center">
                        <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                          •
                        </span>{" "}
                        {conf.citations}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      {conf.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-500/10 text-gray-500 rounded-full py-1 px-1.75 text-[12px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Skills */}
          {activeTab === "Books" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {conferences.map((conf, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-4 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                      {conf.date}
                    </h3>
                    <h4 className="text-lg font-normal font-unbounded mb-1">
                      {conf.title}
                    </h4>
                    <div className="text-gray-400 flex items-center gap-2 text-sm mt-2">
                      <div className="flex items-center">
                        <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                          •
                        </span>{" "}
                        {conf.vanue}
                      </div>
                      <div className="flex items-center">
                        <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                          •
                        </span>{" "}
                        {conf.citations}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      {conf.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-500/10 text-gray-500 rounded-full py-1 px-1.75 text-[12px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* About */}
          {activeTab === "Timeline" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {conferences.map((conf, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-4 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                      {conf.date}
                    </h3>
                    <h4 className="text-lg font-normal font-unbounded mb-1">
                      {conf.title}
                    </h4>
                    <div className="text-gray-400 flex items-center gap-2 text-sm mt-2">
                      <div className="flex items-center">
                        <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                          •
                        </span>{" "}
                        {conf.vanue}
                      </div>
                      <div className="flex items-center">
                        <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                          •
                        </span>{" "}
                        {conf.citations}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      {conf.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-500/10 text-gray-500 rounded-full py-1 px-1.75 text-[12px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
