"use client";

import Image from "next/image";
import cloud from "@/public/cloud-service.png";
import iot from "@/public/Internet-icon.svg.png";
import computing from "@/public/machine-learning.png";
import security from "@/public/lock.png";

// Services Data

const ServicesData = [
  {
    id: "01",
    title: "Cloud Computing",
    disc: "Resource allocation, energy optimization, QoS-aware scheduling, and virtualization in distributed computing environments.",
    icon: cloud,
  },
  {
    id: "02",
    title: "Internet of Things",
    disc: "IoT security, edge computing, healthcare applications, consumer electronics, and industrial IoT systems.",
    icon: iot,
  },
  {
    id: "03",
    title: "Information Security",
    disc: "Network intrusion detection, adversarial machine learning, blockchain security, and privacy preservation techniques.",
    icon: security,
  },
  {
    id: "04",
    title: "Soft Computing",
    disc: "Machine learning, optimization algorithms, fuzzy logic, neural networks, and AI-driven solutions for complex problems.",
    icon: computing,
  },
];

export default function Services() {
  return (
    <section className="px-[8%] lg:px-[16%] py-15 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ServicesData.map((service, index) => (
          <div
            key={index}
            className="service-card group py-15 px-10 border border-gray-800 rounded-xl transition-all duration-500 cursor-pointer hover:border-[--primary-color]"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-5xl stroke-text font-bold text-gray-400 transition-colors duration-300 group-hover:text-[--primary-color]">
                {service.id}
              </h3>
              <div>
                {/* <i className="bi bi-cloud text-3xl"></i> */}
                <Image
                  src={service.icon}
                  alt="cloud icon"
                  className="h-14 w-auto invert"
                />
              </div>
            </div>
            <h2 className="text-3xl font-normal font-unbounded mb-5 transition-colors duration-300 group-hover:text-[var(--primary-color)]">
              {service.title}
            </h2>
            <p className="text-gray-400 text-lg">{service.disc}</p>
            <div className="border-t border-gray-700 group-hover:border-[var(--primary-color)] mt-5 duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
