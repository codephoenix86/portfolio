"use client";
import { useState, useContext } from "react";
import Hero from "@/public/Hero.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import { LoginContext } from "@/context/login";

export default function Profile(props) {
  const [role, setRole] = useState(props.profile.role);
  const [name, setName] = useState(props.profile.name);
  const [bio, setBio] = useState(props.profile.bio);
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <div className="flex flex-col lg:flex-row justify-between px-[8%] lg:px-[16%]">
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
        <div className="profile-links grid grid-cols-3 gap-2 items-center">
          <a href="https://scholar.google.com/citations?user=4zbw62wAAAAJ&hl=en" className="flex hero-social gap-2 text-md items-center cursor-pointer">
            <i className="bi bi-link-45deg text-lg"></i>
            <span>google scholar</span>
          </a>
          <a href="https://www.researchgate.net/profile/Jitendra-Samriya" className="flex hero-social gap-2 text-md items-center cursor-pointer">
            <i className="bi bi-link-45deg text-lg"></i>
            <span>research gate</span>
          </a>
          <a href="https://iiitsonepat.ac.in/" className="flex hero-social gap-2 text-md items-center cursor-pointer">
            <i className="bi bi-link-45deg text-lg"></i>
            <span>IIIT Sonepat</span>
          </a>
        </div>
      </div>
      {/* Right Image */}
      <div className="profile-image lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center relative">
        <div className="relative rounded-full flex items-center justify-center">
          <div className="shadow-[0_0_15px_#fc4100] transition-all relative hero-image w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[var(--hero-image-from)] to-[var(--hero-image-to)] transform hover:scale-105 duration-300">
            <Image
              src={Hero}
              alt="Portfolio Picture"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
