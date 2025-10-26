"use client";

import { useEffect, useRef, useState, useContext } from "react";
import { LoginContext } from "@/context/login";

export default function Services() {
  const [researchAreas, setResearchAreas] = useState([]);
  const [isNewResearchFormOpen, setNewResearchFormOpen] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/research-areas");
      const data = await response.json();
      setResearchAreas(data);
    };
    fetchData();
  }, []);

  return (
    <section className="px-[8%] lg:px-[16%] py-15 text-white">
      <div className="flex justify-end mb-4">
        {isLoggedIn && (
          <button
            onClick={() => setNewResearchFormOpen(true)}
            className="border rounded-lg py-1 px-2.5 cursor-pointer"
          >
            add new
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {researchAreas.map((research, index) => (
          <div
            key={index}
            className="service-card group py-15 px-10 border border-gray-800 rounded-xl transition-all duration-500 cursor-pointer hover:border-[--primary-color]"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-5xl stroke-text font-bold text-gray-400 transition-colors duration-300 group-hover:text-[--primary-color]">
                {index + 1}
              </h3>
              <div>
                <img
                  src={`http://localhost:5000/research-icons/${research.icon}`}
                  alt="cloud icon"
                  className="h-14 w-auto"
                />
              </div>
            </div>
            <h2 className="text-3xl font-normal font-unbounded mb-5 transition-colors duration-300 group-hover:text-[var(--primary-color)]">
              {research.name}
            </h2>
            <p className="text-gray-400 text-lg">{research.description}</p>
            <div className="flex justify-end">
              {isLoggedIn && (
                <button
                  onClick={async () => {
                    const response = await fetch(
                      `http://localhost:5000/research-areas/${research._id}`,
                      { method: "DELETE" }
                    );
                    if (response.ok)
                      setResearchAreas((prev) =>
                        prev.filter((item) => item._id !== research._id)
                      );
                  }}
                  className="border rounded-lg py-1 px-2.5 cursor-pointer"
                >
                  delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {isNewResearchFormOpen && (
        <NewResearchForm
          setResearchAreas={setResearchAreas}
          closeNewResearchForm={() => setNewResearchFormOpen(false)}
          class="w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
    </section>
  );
}

function NewResearchForm(props) {
  const inputNameRef = useRef(null);
  const inputDescriptionRef = useRef(null);
  const inputIconRef = useRef(null);
  return (
    <div className={`bg-black p-8 rounded-xl shadow-lg ${props.class}`}>
      <h2 className="text-2xl text-center font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
        Create New Research Area
      </h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const formData = new FormData();
          formData.append("name", inputNameRef.current.value);
          formData.append("description", inputDescriptionRef.current.value);
          formData.append("icon", inputIconRef.current.files[0]);
          const response = await fetch("http://localhost:5000/research-areas", {
            method: "POST",
            body: formData,
          });
        }}
        className={`space-y-6`}
      >
        <div className="">
          <input
            ref={inputNameRef}
            type="text"
            placeholder="Name"
            className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
          />
        </div>
        <div className="">
          <input
            ref={inputDescriptionRef}
            type="text"
            placeholder="description"
            className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
          />
        </div>
        <div className="">
          <input
            ref={inputIconRef}
            type="file"
            accept=".jpg,.png,.jpeg"
            className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
          >
            Create
          </button>
          <button
            onClick={props.closeNewResearchForm}
            className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
