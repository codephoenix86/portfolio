"use client";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/public/Hero.jpeg";
import { CountUp } from "countup.js";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  // statsData
  const [loginPopup, setLoginPopup] = useState(false);
  const statsData = [
    { value: 606, label: "Citations" },
    { value: 15, label: "H-Index" },
    { value: 18, label: "i10-Index" },
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
    <header className="text-white py-12 relative">
      {/* BG elements */}
      {loginPopup && <div className="absolute inset-0 bg-black/50"></div>}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10"></div>
      <div className="absolute top-0 right-0 w-[700px] h-full rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-[20%] w-[500px] h-full rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10"></div>
      <div className="flex flex-col lg:flex-row justify-between px-[8%] lg:px-[16%]">
        {/* Left Content */}
        <div className="lg:w-1/2 text-start md:text-left">
          <p className="text-lg mb-2 text-gray-400">
            Assistant Professor, IIIT Sonepat
          </p>
          <h1 className="text-5xl text-start lg:text-5xl font-unbounded font-normal mb-2">
            {/* Hello I'm{" "} */}
            <span className="text-[color:var(--primary-color)]">
              Dr. Jitendra Kumar Samriya
            </span>
          </h1>
          <p className="text-gray-400 text-md lg:text-md font-normal font-sora my-8">
            I am passionate about advancing research and innovation in computer
            science, with expertise in modern technologies and data-driven
            solutions.
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
      <div className="stats px-[8%] lg:px-[16%] mt-24 hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {statsData.map((stat, index) => (
          <div key={index} className="flex gap-2 items-center">
            <h1
              ref={(el) => (countRefs.current[index] = el)}
              className="text-5xl font-unbounded font-bold"
            >
              0
            </h1>
            <p className="text-lg ps-4 text-gray-400 font-semibold whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      {loginPopup && (
        <Login class="w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      )}
    </header>
  );
}

function Login(props) {
  return (
    <div className={`bg-black p-8 rounded-xl shadow-lg ${props.class}`}>
      <h2 className="text-2xl text-center font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
        Admin Login
      </h2>
      <form className={`space-y-6`}>
        <div className="">
          <input
            type="text"
            placeholder="enter your email"
            className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
          />
        </div>
        <div className="">
          <input
            type="password"
            placeholder="enter your password"
            className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
          />
        </div>
        <button
          type="submit"
          className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
