"use client";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/public/Hero.png";
import { CountUp } from "countup.js";
import { useEffect, useRef } from "react";

export default function Header() {
  // statsData
  const statsData = [
    { value: 12, label: "Years of\nExperience" },
    { value: 22, label: "Projects\nCompleted" },
    { value: 7, label: "Technogies\nMastered" },
    { value: 450, label: "Code\nCommits" },
  ];

  const countRefs = useRef([]);

  useEffect(() => {
    countRefs.current.forEach((el, index) => {
      if (el) {
        const countUp = new CountUp(el, statsData[index].value, {
          duration: 3,
          separator: ",",
        });
        if (!countUp.error) countUp.start();
        else console.log(countUp.error);
      }
    });
  }, []);

  return (
    <header className="h-[100vh] text-white py-12 relative">
      {/* BG elements */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10"></div>
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[700px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10"></div>
      <div className="flex pt-10 flex-col lg:flex-row items-center justify-between px-[8%] lg:px-[16%]">
        {/* Left Content */}
        <div className="lg:w-1/2 text-start md:text-left">
          <p className="text-lg mb-2 text-gray-400">Web Developer</p>
          <h1 className="text-7xl text-start lg:text-7xl font-unbounded font-normal mb-2">
            Hello I'm{" "}
            <span className="text-[color:var(--primary-color)]">
              Tyler Knox
            </span>
          </h1>
          <p className="text-gray-400 text-md lg:text-md font-normal font-sora my-8">
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and technologies
          </p>
          {/* Buttons */}
          <div className="flex flex-wrap gap-8 items-center">
            <Link
              href="#"
              className="border border-[var(--primary-color)] font-bold text-[var(--primary-color)] px-6 py-3 rounded hover:bg-[var(--primary-color)] hover:text-white transition-all duration-500"
            >
              <i className="bi bi-download me-2"></i> Download CV
            </Link>
            <div className="flex hero-social gap-2 text-xl">
              <i className="bi bi-github"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-twitter"></i>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center relative">
          <div className="relative rounded-full flex items-center justify-center">
            <div className="relative hero-image w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[var(--hero-image-from)] to-[var(--hero-image-to)]">
              <Image
                src={Hero}
                alt="Portfolio Picture"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="stats px-[8%] lg:px-[16%] mt-30 hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <div key={index} className="flex gap-2 items-center">
            <h1
              ref={(el) => (countRefs.current[index] = el)}
              className="text-7xl font-unbounded font-bold"
            >
              0
            </h1>
            <p className="text-xl ps-4 text-gray-400 font-semibold whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
}
