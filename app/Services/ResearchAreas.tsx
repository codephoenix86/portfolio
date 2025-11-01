// "use client";
// import { useEffect, useRef, useState, useContext } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { LoginContext } from "@/context/login";

// export default function ResearchAreas(props) {
//   const [researchAreas, setResearchAreas] = useState(props.researchAreas);
//   const [isNewResearchFormOpen, setNewResearchFormOpen] = useState(false);
//   const { isLoggedIn } = useContext(LoginContext);
//   useEffect(() => {
//     AOS.init({
//       duration: 600, // animation duration
//       once: true, // run only once per element
//       easing: "ease-in-out",
//     });
//   }, [researchAreas]);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const response = await fetch("http://localhost:5000/research-areas");
//   //     const data = await response.json();
//   //     setResearchAreas(data);
//   //   };
//   //   fetchData();
//   // }, []);

//   return (
//     <section className="px-[8%] lg:px-[16%] py-15 text-white">
//       <div className="flex justify-end mb-4">
//         {isLoggedIn && (
//           <button
//             onClick={() => setNewResearchFormOpen(true)}
//             className="border rounded-lg py-1 px-2.5 cursor-pointer"
//           >
//             add new
//           </button>
//         )}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {researchAreas.map((research, index) => (
//           <div data-aos="fade-up" key={index}>
//             <div className="service-card h-full hover:scale-101 hover:shadow-[0_0_15px_#fc4100] group py-15 px-10 border border-gray-800 rounded-xl transition-all duration-300 cursor-pointer hover:border-[--primary-color]">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-4xl stroke-text font-bold text-gray-400 transition-colors duration-300 group-hover:text-[--primary-color]">
//                   {index + 1}
//                 </h3>
//                 <div>
//                   <img
//                     src={`http://localhost:5000/research-icons/${research.icon}`}
//                     alt="cloud icon"
//                     className="h-14 w-auto"
//                   />
//                 </div>
//               </div>
//               <h2 className="text-2xl font-normal font-unbounded mb-5 transition-colors duration-300 group-hover:text-[var(--primary-color)]">
//                 {research.name}
//               </h2>
//               <p className="text-gray-400 text-md">{research.description}</p>
//               <div className="flex justify-end">
//                 {isLoggedIn && (
//                   <button
//                     onClick={async () => {
//                       const response = await fetch(
//                         `http://localhost:5000/research-areas/${research._id}`,
//                         { method: "DELETE" }
//                       );
//                       if (response.ok)
//                         setResearchAreas((prev) =>
//                           prev.filter((item) => item._id !== research._id)
//                         );
//                     }}
//                     className="border rounded-lg py-1 px-2.5 cursor-pointer"
//                   >
//                     delete
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {isNewResearchFormOpen && (
//         <NewResearchForm
//           setResearchAreas={setResearchAreas}
//           closeNewResearchForm={() => setNewResearchFormOpen(false)}
//           class="w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//         />
//       )}
//     </section>
//   );
// }

// function NewResearchForm(props) {
//   const inputNameRef = useRef(null);
//   const inputDescriptionRef = useRef(null);
//   const inputIconRef = useRef(null);
//   return (
//     <div className={`bg-black p-8 rounded-xl shadow-lg ${props.class}`}>
//       <h2 className="text-2xl text-center font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
//         Create New Research Area
//       </h2>
//       <form
//         onSubmit={async (e) => {
//           e.preventDefault();
//           const formData = new FormData();
//           formData.append("name", inputNameRef.current.value);
//           formData.append("description", inputDescriptionRef.current.value);
//           formData.append("icon", inputIconRef.current.files[0]);
//           const response = await fetch("http://localhost:5000/research-areas", {
//             method: "POST",
//             body: formData,
//           });
//           const data = await response.json();
//           props.setResearchAreas((prev) => [
//             ...prev,
//             {
//               _id: data._id,
//               name: data.name,
//               description: data.description,
//               icon: data.icon,
//             },
//           ]);
//           props.closeNewResearchForm();
//         }}
//         className={`space-y-6`}
//       >
//         <div className="">
//           <input
//             ref={inputNameRef}
//             type="text"
//             placeholder="Name"
//             className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//           />
//         </div>
//         <div className="">
//           <input
//             ref={inputDescriptionRef}
//             type="text"
//             placeholder="description"
//             className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//           />
//         </div>
//         <div className="">
//           <input
//             ref={inputIconRef}
//             type="file"
//             accept=".jpg,.png,.jpeg"
//             className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//           />
//         </div>
//         <div className="flex justify-between">
//           <button
//             type="submit"
//             className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
//           >
//             Create
//           </button>
//           <button
//             onClick={props.closeNewResearchForm}
//             className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

"use client";
import { useEffect, useRef, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LoginContext } from "@/context/login";

// export default function ResearchAreas(props) {
//   const [researchAreas, setResearchAreas] = useState(props.researchAreas);
//   const [isNewResearchFormOpen, setNewResearchFormOpen] = useState(false);
//   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [areaToDelete, setAreaToDelete] = useState(null);
//   const { isLoggedIn } = useContext(LoginContext);

//   useEffect(() => {
//     AOS.init({
//       duration: 600,
//       once: true,
//       easing: "ease-in-out",
//     });
//   }, [researchAreas]);

//   const handleDeleteArea = async () => {
//     const response = await fetch(
//       `http://localhost:5000/research-areas/${areaToDelete._id}`,
//       { method: "DELETE" }
//     );
//     if (response.ok) {
//       setResearchAreas((prev) =>
//         prev.filter((item) => item._id !== areaToDelete._id)
//       );
//       setDeleteModalOpen(false);
//       setAreaToDelete(null);
//     }
//   };

//   return (
//     <section className="px-[8%] lg:px-[16%] py-15 text-white">
//       {/* Header Section with Add Button */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h2 className="text-3xl font-bold text-white font-unbounded mb-2">
//             Research Areas
//           </h2>
//           <p className="text-gray-400">
//             Explore our cutting-edge research domains
//           </p>
//         </div>
//         {isLoggedIn && (
//           <button
//             onClick={() => setNewResearchFormOpen(true)}
//             className="flex items-center gap-2 bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(var(--primary-color-rgb),0.3)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98]"
//           >
//             <i className="ri-add-line text-xl"></i>
//             <span>Add New Area</span>
//           </button>
//         )}
//       </div>

//       {/* Research Areas Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {researchAreas.map((research, index) => (
//           <div data-aos="fade-up" key={index}>
//             <div className="service-card h-full hover:scale-101 hover:shadow-[0_0_15px_#fc4100] group py-15 px-10 border border-gray-800 rounded-xl transition-all duration-300 cursor-pointer hover:border-[--primary-color] relative">
//               {/* Delete Button - Top Right Corner */}
//               {isLoggedIn && (
//                 <button
//                   onClick={() => {
//                     setAreaToDelete(research);
//                     setDeleteModalOpen(true);
//                   }}
//                   className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white p-2 rounded-lg border border-red-500/30 hover:border-red-500"
//                   title="Delete research area"
//                 >
//                   <i className="ri-delete-bin-line text-lg"></i>
//                 </button>
//               )}

//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-4xl stroke-text font-bold text-gray-400 transition-colors duration-300 group-hover:text-[--primary-color]">
//                   {index + 1}
//                 </h3>
//                 <div>
//                   <img
//                     src={`http://localhost:5000/research-icons/${research.icon}`}
//                     alt="research icon"
//                     className="h-14 w-auto"
//                   />
//                 </div>
//               </div>
//               <h2 className="text-2xl font-normal font-unbounded mb-5 transition-colors duration-300 group-hover:text-[var(--primary-color)]">
//                 {research.name}
//               </h2>
//               <p className="text-gray-400 text-md">{research.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add New Research Form Modal */}
//       {isNewResearchFormOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
//             onClick={() => setNewResearchFormOpen(false)}
//           ></div>
//           <NewResearchForm
//             setResearchAreas={setResearchAreas}
//             closeNewResearchForm={() => setNewResearchFormOpen(false)}
//             class="w-full max-w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100000]"
//           />
//         </>
//       )}

//       {/* Delete Confirmation Modal */}
//       {isDeleteModalOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
//             onClick={() => {
//               setDeleteModalOpen(false);
//               setAreaToDelete(null);
//             }}
//           ></div>
//           <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-gradient-to-br from-[#1c1b21] to-[#0e0f12] p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-red-500/30 max-w-md w-full mx-4">
//             <div className="text-center mb-6">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
//                 <i className="ri-alert-line text-3xl text-red-500"></i>
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 Delete Research Area?
//               </h3>
//               <p className="text-gray-400">
//                 Are you sure you want to delete{" "}
//                 <span className="text-white font-semibold">
//                   "{areaToDelete?.name}"
//                 </span>
//                 ? This action cannot be undone.
//               </p>
//             </div>
//             <div className="flex gap-4">
//               <button
//                 onClick={() => {
//                   setDeleteModalOpen(false);
//                   setAreaToDelete(null);
//                 }}
//                 className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-700 hover:border-gray-600"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDeleteArea}
//                 className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(239,68,68,0.3)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.4)]"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </section>
//   );
// }

export default function ResearchAreas(props) {
  const [researchAreas, setResearchAreas] = useState(props.researchAreas);
  const [isNewResearchFormOpen, setNewResearchFormOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [areaToDelete, setAreaToDelete] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleDeleteArea = async () => {
    const response = await fetch(
      `http://localhost:5000/research-areas/${areaToDelete._id}`,
      { method: "DELETE" }
    );
    if (response.ok) {
      setResearchAreas((prev) =>
        prev.filter((item) => item._id !== areaToDelete._id)
      );
      setDeleteModalOpen(false);
      setAreaToDelete(null);
    }
  };

  return (
    <section className="px-[8%] lg:px-[16%] py-20 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--primary-color)]/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Header Section */}
      <div className="relative z-10 mb-16" data-aos="fade-down">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex-1">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 rounded-full text-[var(--primary-color)] text-sm font-semibold backdrop-blur-sm">
                🔬 Our Focus
              </span>
            </div>
            <h2 className="text-5xl font-bold font-unbounded mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Research Areas
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Explore our cutting-edge research domains pushing the boundaries
              of innovation and discovery
            </p>
          </div>

          {isLoggedIn && (
            <button
              onClick={() => setNewResearchFormOpen(true)}
              className="group relative px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-orange-500 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(252,65,0,0.4)] hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add New Area
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          )}
        </div>
      </div>

      {/* Research Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {researchAreas.map((research, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="group relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[var(--primary-color)]/50 hover:shadow-[0_0_50px_rgba(252,65,0,0.3)] hover:scale-[1.02]">
              {/* Animated gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/10 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Glowing corner accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--primary-color)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated border glow */}
              <div
                className={`absolute -inset-[1px] bg-gradient-to-r from-[var(--primary-color)] via-orange-500 to-[var(--primary-color)] rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`}
              />

              <div className="relative z-10 p-8">
                {/* Header with number and icon */}
                <div className="flex justify-between items-start mb-6">
                  {/* Number badge */}
                  <div className="relative">
                    <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-[var(--primary-color)]/30 group-hover:to-orange-500/30 transition-all duration-500 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="absolute inset-0 text-7xl font-black text-[var(--primary-color)] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Icon container */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-[var(--primary-color)]/20">
                      <img
                        src={`http://localhost:5000/research-icons/${research.icon}`}
                        alt="research icon"
                        className="h-10 w-auto filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                      />
                    </div>
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-[var(--primary-color)] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                  </div>

                  {/* Delete Button */}
                  {isLoggedIn && (
                    <button
                      onClick={() => {
                        setAreaToDelete(research);
                        setDeleteModalOpen(true);
                      }}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white p-2.5 rounded-xl border border-red-500/30 hover:border-red-500 hover:scale-110 z-20"
                      title="Delete research area"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-unbounded font-bold mb-4 text-white group-hover:text-[var(--primary-color)] transition-colors duration-300">
                  {research.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {research.description}
                </p>

                {/* Animated bottom border */}
                <div
                  className={`h-1 mt-6 bg-gradient-to-r from-[var(--primary-color)] to-orange-500 rounded-full transition-all duration-500 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {researchAreas.length === 0 && (
        <div className="text-center py-20" data-aos="fade-up">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-800/50 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-400 mb-2">
            No research areas yet
          </h3>
          <p className="text-gray-500">
            Start by adding your first research area
          </p>
        </div>
      )}

      {/* Add New Research Form Modal */}
      {isNewResearchFormOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100000]"
            onClick={() => setNewResearchFormOpen(false)}
            style={{ animation: "fadeIn 0.3s ease-out" }}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100001] w-full max-w-lg px-4">
            <NewResearchForm
              setResearchAreas={setResearchAreas}
              closeNewResearchForm={() => setNewResearchFormOpen(false)}
            />
          </div>
        </>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100000]"
            onClick={() => {
              setDeleteModalOpen(false);
              setAreaToDelete(null);
            }}
            style={{ animation: "fadeIn 0.3s ease-out" }}
          />
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100001] max-w-md w-full mx-4"
            style={{ animation: "scaleIn 0.3s ease-out" }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-[0_0_60px_rgba(239,68,68,0.3)] border border-red-500/30 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border-2 border-red-500/30 mb-4 animate-pulse">
                    <svg
                      className="w-10 h-10 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-unbounded text-white mb-3">
                    Delete Research Area?
                  </h3>
                  <p className="text-gray-400 text-base">
                    Are you sure you want to delete{" "}
                    <span className="text-white font-semibold bg-red-500/10 px-2 py-1 rounded">
                      {areaToDelete?.name}
                    </span>
                    ? This action cannot be undone.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setDeleteModalOpen(false);
                      setAreaToDelete(null);
                    }}
                    className="flex-1 bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-700 hover:border-gray-600 hover:scale-105 active:scale-95"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteArea}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] hover:scale-105 active:scale-95"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </section>
  );
}

function NewResearchForm(props) {
  const inputNameRef = useRef(null);
  const inputDescriptionRef = useRef(null);
  const inputIconRef = useRef(null);
  const [fileName, setFileName] = useState("");

  return (
    <div
      className={`bg-gradient-to-br from-[#1c1b21] to-[#0e0f12] p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_40px_rgba(var(--primary-color-rgb),0.15)] border border-[var(--primary-color)]/30 ${props.class}`}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 mb-4">
          <i className="ri-flask-line text-3xl text-[var(--primary-color)]"></i>
        </div>
        <h2 className="text-3xl font-unbounded font-bold text-[var(--primary-color)] mb-2">
          Add Research Area
        </h2>
        <p className="text-gray-400 text-sm">
          Create a new research focus area
        </p>
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("name", inputNameRef.current.value);
          formData.append("description", inputDescriptionRef.current.value);
          formData.append("icon", inputIconRef.current.files[0]);
          const response = await fetch("http://localhost:5000/research-areas", {
            method: "POST",
            body: formData,
          });
          const data = await response.json();
          props.setResearchAreas((prev) => [
            ...prev,
            {
              _id: data._id,
              name: data.name,
              description: data.description,
              icon: data.icon,
            },
          ]);
          props.closeNewResearchForm();
        }}
        className="space-y-5"
      >
        {/* Name Input */}
        <div className="relative group">
          <label className="block text-gray-300 text-sm font-medium mb-2 ml-1">
            Research Area Name
          </label>
          <div className="relative">
            <i className="ri-text absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--primary-color)] transition-colors duration-300"></i>
            <input
              ref={inputNameRef}
              type="text"
              placeholder="e.g., Artificial Intelligence"
              required
              className="w-full bg-[#0e0f12] border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[var(--primary-color)] focus:shadow-[0_0_20px_rgba(var(--primary-color-rgb),0.2)] transition-all duration-300"
            />
          </div>
        </div>

        {/* Description Input */}
        <div className="relative group">
          <label className="block text-gray-300 text-sm font-medium mb-2 ml-1">
            Description
          </label>
          <div className="relative">
            <i className="ri-file-text-line absolute left-4 top-4 text-gray-500 group-focus-within:text-[var(--primary-color)] transition-colors duration-300"></i>
            <textarea
              ref={inputDescriptionRef}
              placeholder="Describe the research area..."
              required
              rows="3"
              className="w-full bg-[#0e0f12] border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[var(--primary-color)] focus:shadow-[0_0_20px_rgba(var(--primary-color-rgb),0.2)] transition-all duration-300 resize-none"
            />
          </div>
        </div>

        {/* Icon Upload */}
        <div className="relative group">
          <label className="block text-gray-300 text-sm font-medium mb-2 ml-1">
            Research Icon
          </label>
          <div className="relative">
            <input
              ref={inputIconRef}
              type="file"
              accept=".jpg,.png,.jpeg,.svg"
              required
              onChange={(e) => setFileName(e.target.files[0]?.name || "")}
              className="hidden"
              id="icon-upload"
            />
            <label
              htmlFor="icon-upload"
              className="flex items-center justify-between w-full bg-[#0e0f12] border border-gray-700 rounded-xl px-4 py-4 text-sm cursor-pointer hover:border-[var(--primary-color)] transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <i className="ri-upload-cloud-line text-xl text-gray-500"></i>
                <span className="text-gray-400">
                  {fileName || "Choose icon file..."}
                </span>
              </span>
              <span className="text-[var(--primary-color)] text-xs font-medium">
                Browse
              </span>
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(var(--primary-color-rgb),0.3)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <i className="ri-add-line"></i>
              Create Area
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>

          <button
            type="button"
            onClick={props.closeNewResearchForm}
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 cursor-pointer border border-gray-700 hover:border-gray-600 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="flex items-center justify-center gap-2">
              <i className="ri-close-line"></i>
              Cancel
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
