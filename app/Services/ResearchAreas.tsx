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

export default function ResearchAreas(props) {
  const [researchAreas, setResearchAreas] = useState(props.researchAreas);
  const [isNewResearchFormOpen, setNewResearchFormOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [areaToDelete, setAreaToDelete] = useState(null);
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
    });
  }, [researchAreas]);

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
    <section className="px-[8%] lg:px-[16%] py-15 text-white">
      {/* Header Section with Add Button */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white font-unbounded mb-2">
            Research Areas
          </h2>
          <p className="text-gray-400">
            Explore our cutting-edge research domains
          </p>
        </div>
        {isLoggedIn && (
          <button
            onClick={() => setNewResearchFormOpen(true)}
            className="flex items-center gap-2 bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(var(--primary-color-rgb),0.3)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <i className="ri-add-line text-xl"></i>
            <span>Add New Area</span>
          </button>
        )}
      </div>

      {/* Research Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {researchAreas.map((research, index) => (
          <div data-aos="fade-up" key={index}>
            <div className="service-card h-full hover:scale-101 hover:shadow-[0_0_15px_#fc4100] group py-15 px-10 border border-gray-800 rounded-xl transition-all duration-300 cursor-pointer hover:border-[--primary-color] relative">
              {/* Delete Button - Top Right Corner */}
              {isLoggedIn && (
                <button
                  onClick={() => {
                    setAreaToDelete(research);
                    setDeleteModalOpen(true);
                  }}
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white p-2 rounded-lg border border-red-500/30 hover:border-red-500"
                  title="Delete research area"
                >
                  <i className="ri-delete-bin-line text-lg"></i>
                </button>
              )}

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-4xl stroke-text font-bold text-gray-400 transition-colors duration-300 group-hover:text-[--primary-color]">
                  {index + 1}
                </h3>
                <div>
                  <img
                    src={`http://localhost:5000/research-icons/${research.icon}`}
                    alt="research icon"
                    className="h-14 w-auto"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-normal font-unbounded mb-5 transition-colors duration-300 group-hover:text-[var(--primary-color)]">
                {research.name}
              </h2>
              <p className="text-gray-400 text-md">{research.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Research Form Modal */}
      {isNewResearchFormOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setNewResearchFormOpen(false)}
          ></div>
          <NewResearchForm
            setResearchAreas={setResearchAreas}
            closeNewResearchForm={() => setNewResearchFormOpen(false)}
            class="w-full max-w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100000]"
          />
        </>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => {
              setDeleteModalOpen(false);
              setAreaToDelete(null);
            }}
          ></div>
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-gradient-to-br from-[#1c1b21] to-[#0e0f12] p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-red-500/30 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
                <i className="ri-alert-line text-3xl text-red-500"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Delete Research Area?
              </h3>
              <p className="text-gray-400">
                Are you sure you want to delete{" "}
                <span className="text-white font-semibold">
                  "{areaToDelete?.name}"
                </span>
                ? This action cannot be undone.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setDeleteModalOpen(false);
                  setAreaToDelete(null);
                }}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteArea}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(239,68,68,0.3)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.4)]"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
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