"use client";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

export default function Stats(props) {
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
  );
}
