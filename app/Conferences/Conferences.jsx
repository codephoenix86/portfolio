// "use client";
// import { LoginContext } from "@/context/login";
// import { useContext, useEffect, useRef, useState } from "react";
// export default function Conferences(props) {
//   const [conferences, setConferences] = useState(props.data);
//   const { isLoggedIn } = useContext(LoginContext);
//   const [isNewConferenceFormOpen, setNewConferenceForm] = useState(false);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const response = await fetch("http://localhost:5000/conferences");
//   //     const data = await response.json();
//   //     setConferences(data);
//   //   };
//   //   fetchData();
//   // }, []);
//   return (
//     <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
//       <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
//         {isLoggedIn && (
//           <div className="flex justify-end">
//             <button
//               onClick={() => setNewConferenceForm(true)}
//               className="border px-2.5 py-1 rounded-xl"
//             >
//               add new
//             </button>
//           </div>
//         )}
//         {conferences.map((conf, index) => (
//           <div
//             key={index}
//             className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-4 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
//           >
//             <div className="flex items-center justify-between">
//               <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
//                 {conf.year}
//               </h3>
//               {isLoggedIn && (
//                 <button
//                   onClick={async () => {
//                     const response = await fetch(
//                       `http://localhost:5000/conferences/${conf._id}`,
//                       { method: "DELETE" }
//                     );
//                     if (response.ok)
//                       setConferences((prev) =>
//                         prev.filter((item) => item._id !== conf._id)
//                       );
//                   }}
//                   className="border px-2.5 py-1 rounded-xl cursor-pointer"
//                 >
//                   delete
//                 </button>
//               )}
//             </div>

//             <h4 className="text-xl font-normal font-unbounded mb-1">
//               {conf.title}
//             </h4>
//             <div className="text-gray-400 flex items-center gap-2 text-sm mt-2">
//               <div className="flex items-center">
//                 <span className="text-[color:var(--primary-color)] text-2xl pe-2">
//                   •
//                 </span>{" "}
//                 {conf.name}
//               </div>
//               <div className="flex items-center">
//                 <span className="text-[color:var(--primary-color)] text-2xl pe-2">
//                   •
//                 </span>{" "}
//                 {conf.vanue}
//               </div>
//             </div>
//             <div className="flex flex-wrap items-center gap-4 mt-2">
//               {conf.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-gray-500/10 text-gray-500 rounded-full py-1 px-1.75 text-[12px]"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       {isNewConferenceFormOpen && (
//         <NewConferenceForm
//           closeNewConferenceForm={() => setNewConferenceForm(false)}
//           class="w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//         />
//       )}
//     </div>
//   );
// }

// function NewConferenceForm(props) {
//   const inputTitleRef = useRef(null);
//   const inputYearRef = useRef(null);
//   const inputVanueRef = useRef(null);
//   const inputNameRef = useRef(null);
//   return (
//     <div className={`bg-black p-8 rounded-xl shadow-lg ${props.class}`}>
//       <h2 className="text-2xl text-center font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
//         Create New Conference
//       </h2>
//       <form
//         onSubmit={async (e) => {
//           const data = {
//             title: inputTitleRef.current.value,
//             year: inputYearRef.current.value,
//             vanue: inputVanueRef.current.value,
//             name: inputNameRef.current.value,
//           };

//           await fetch("http://localhost:5000/conferences", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json", // important!
//             },
//             body: JSON.stringify(data), // convert JS object to JSON
//           });
//         }}
//         className={`space-y-6`}
//       >
//         <div className="">
//           <input
//             ref={inputTitleRef}
//             type="text"
//             placeholder="title"
//             className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//           />
//         </div>
//         <div className="">
//           <input
//             ref={inputYearRef}
//             type="text"
//             placeholder="year"
//             className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//           />
//         </div>
//         <div className="">
//           <input
//             ref={inputVanueRef}
//             type="text"
//             placeholder="vanue"
//             className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//           />
//         </div>
//         <div className="">
//           <input
//             ref={inputNameRef}
//             type="text"
//             placeholder="name"
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
//             onClick={props.closeNewConferenceForm}
//             className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default function Conferences({ data }) {
//   const [conferences, setConferences] = useState(data);
//   const [isNewConferenceFormOpen, setIsNewConferenceFormOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortBy, setSortBy] = useState("default");
//   const { isLoggedIn } = useContext(LoginContext);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   // Filter and sort conferences
//   const filteredAndSortedConferences = useMemo(() => {
//     let filtered = conferences.filter((conf) => {
//       const searchLower = searchQuery.toLowerCase();
//       const titleMatch = conf.title?.toLowerCase().includes(searchLower);
//       const venueMatch = conf.venue?.toLowerCase().includes(searchLower);
//       const locationMatch = conf.location?.toLowerCase().includes(searchLower);
//       return titleMatch || venueMatch || locationMatch;
//     });

//     // Sort conferences
//     if (sortBy === "date") {
//       filtered = [...filtered].sort((a, b) => {
//         const dateA = new Date(a.date || 0);
//         const dateB = new Date(b.date || 0);
//         return dateB - dateA; // Newest first
//       });
//     } else if (sortBy === "title") {
//       filtered = [...filtered].sort((a, b) =>
//         (a.title || "").localeCompare(b.title || "")
//       );
//     } else if (sortBy === "venue") {
//       filtered = [...filtered].sort((a, b) =>
//         (a.venue || "").localeCompare(b.venue || "")
//       );
//     }
//     // "default" keeps original order

//     return filtered;
//   }, [conferences, searchQuery, sortBy]);

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/conferences/${id}`, {
//         method: "DELETE",
//       });
//       if (!response.ok) throw new Error("Failed to delete conference");
//       setConferences((prev) => prev.filter((item) => item._id !== id));
//     } catch (error) {
//       console.error("Error deleting conference:", error);
//       alert("Failed to delete conference. Please try again.");
//     }
//   };

//   const handleAddConference = (newConference) => {
//     setConferences((prev) => [newConference, ...prev]);
//     setIsNewConferenceFormOpen(false);
//   };

//   return (
//     <div className="min-h-screen relative">
//       {/* Header Section */}
//       <div className="mb-12" data-aos="fade-down">
//         <div className="flex items-end justify-between mb-6">
//           <div>
//             <h1 className="text-5xl font-unbounded font-bold bg-gradient-to-r from-[var(--primary-color)] via-orange-400 to-[var(--primary-color)] bg-clip-text text-transparent mb-3">
//               Conferences
//             </h1>
//             <p className="text-gray-400 text-lg">
//               Conference presentations and proceedings
//             </p>
//           </div>
//           {isLoggedIn && (
//             <button
//               onClick={() => setIsNewConferenceFormOpen(true)}
//               className="group relative px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-orange-500 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(252,65,0,0.5)] hover:scale-105"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 <svg
//                   className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 4v16m8-8H4"
//                   />
//                 </svg>
//                 Add New
//               </span>
//               <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//             </button>
//           )}
//         </div>

//         {/* Stats Bar */}
//         <div className="flex gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl backdrop-blur-sm">
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
//               <svg
//                 className="w-6 h-6 text-[var(--primary-color)]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 />
//               </svg>
//             </div>
//             <div>
//               <p className="text-3xl font-bold text-white">
//                 {conferences.length}
//               </p>
//               <p className="text-sm text-gray-400">Total Conferences</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search and Sort Bar */}
//       <div className="mb-8 flex flex-col sm:flex-row gap-4" data-aos="fade-up">
//         {/* Search Bar */}
//         <div className="flex-1 relative">
//           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//             <svg
//               className="w-5 h-5 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </div>
//           <input
//             type="text"
//             placeholder="Search by title, venue, or location..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-12 pr-4 py-3 bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-800 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary-color)]/50 focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all duration-300"
//           />
//           {searchQuery && (
//             <button
//               onClick={() => setSearchQuery("")}
//               className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
//             >
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           )}
//         </div>

//         {/* Sort Dropdown */}
//         <div className="relative group">
//           <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//               <svg
//                 className="w-5 h-5 text-[var(--primary-color)] group-hover:scale-110 transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
//                 />
//               </svg>
//             </div>
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="appearance-none w-full sm:w-auto pl-12 pr-12 py-3 bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-800 rounded-xl text-white font-medium focus:outline-none focus:border-[var(--primary-color)]/50 focus:ring-2 focus:ring-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/30 hover:shadow-[0_0_20px_rgba(252,65,0,0.2)] transition-all duration-300 cursor-pointer [&>option]:bg-gray-900 [&>option]:text-white [&>option]:py-2 relative z-10"
//             >
//               <option value="default" className="bg-gray-900 text-white">
//                 📋 Default Order
//               </option>
//               <option value="date" className="bg-gray-900 text-white">
//                 📅 Date (Newest First)
//               </option>
//               <option value="title" className="bg-gray-900 text-white">
//                 🔤 Title (A-Z)
//               </option>
//               <option value="venue" className="bg-gray-900 text-white">
//                 🏢 Venue (A-Z)
//               </option>
//             </select>
//             <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none z-10">
//               <svg
//                 className="w-5 h-5 text-[var(--primary-color)] group-hover:scale-110 group-hover:rotate-180 transition-all duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Results Count */}
//       {searchQuery && (
//         <div className="mb-4 text-gray-400 text-sm" data-aos="fade-up">
//           Found {filteredAndSortedConferences.length} conference
//           {filteredAndSortedConferences.length !== 1 ? "s" : ""}
//         </div>
//       )}

//       {/* Conferences Grid */}
//       {filteredAndSortedConferences.length === 0 ? (
//         <div className="text-center py-20" data-aos="fade-up">
//           <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-800/50 flex items-center justify-center">
//             <svg
//               className="w-16 h-16 text-gray-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {searchQuery ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 />
//               )}
//             </svg>
//           </div>
//           <h3 className="text-2xl font-semibold text-gray-400 mb-2">
//             {searchQuery
//               ? "No matching conferences found"
//               : "No conferences yet"}
//           </h3>
//           <p className="text-gray-500">
//             {searchQuery
//               ? "Try adjusting your search terms"
//               : "Start by adding your first conference"}
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 gap-6">
//           {filteredAndSortedConferences.map((conf, index) => (
//             <div key={conf._id} data-aos="fade-up" data-aos-delay={index * 50}>
//               <ConferenceCard
//                 conference={conf}
//                 isLoggedIn={isLoggedIn}
//                 onDelete={handleDelete}
//                 index={index}
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       {isNewConferenceFormOpen && (
//         <NewConferenceForm
//           onClose={() => setIsNewConferenceFormOpen(false)}
//           onSuccess={handleAddConference}
//         />
//       )}
//     </div>
//   );
// }

"use client";
import { useContext, useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LoginContext } from "@/context/login";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Conferences({ data }) {
  const [conferences, setConferences] = useState(data);
  const [isNewConferenceFormOpen, setIsNewConferenceFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Filter and sort conferences
  const filteredAndSortedConferences = useMemo(() => {
    let filtered = conferences.filter((conf) => {
      const searchLower = searchQuery.toLowerCase();
      const titleMatch = conf.title.toLowerCase().includes(searchLower);
      const nameMatch = conf.name?.toLowerCase().includes(searchLower);
      const tagsMatch = conf.tags?.some((tag) =>
        tag.toLowerCase().includes(searchLower)
      );
      const venueMatch = conf.vanue?.toLowerCase().includes(searchLower);
      return titleMatch || nameMatch || tagsMatch || venueMatch;
    });

    // Sort conferences
    if (sortBy === "year") {
      filtered = [...filtered].sort((a, b) => {
        const yearA = parseInt(a.year) || 0;
        const yearB = parseInt(b.year) || 0;
        return yearB - yearA; // Descending order
      });
    }
    // "default" keeps original order

    return filtered;
  }, [conferences, searchQuery, sortBy]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/conferences/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete conference");
      setConferences((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting conference:", error);
      alert("Failed to delete conference. Please try again.");
    }
  };

  const handleAddConference = (newConference) => {
    setConferences((prev) => [newConference, ...prev]);
    setIsNewConferenceFormOpen(false);
  };

  return (
    <div className="min-h-screen relative">
      {/* Header Section */}
      <div className="mb-12" data-aos="fade-down">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h1 className="text-5xl font-unbounded font-bold bg-gradient-to-r from-[var(--primary-color)] via-orange-400 to-[var(--primary-color)] bg-clip-text text-transparent mb-3">
              Conferences
            </h1>
            <p className="text-gray-400 text-lg">
              Conference presentations and proceedings
            </p>
          </div>
          {isLoggedIn && (
            <button
              onClick={() => setIsNewConferenceFormOpen(true)}
              className="group relative px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-orange-500 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(252,65,0,0.5)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add New
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          )}
        </div>

        {/* Stats Bar */}
        <div className="flex gap-6 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[var(--primary-color)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">
                {conferences.length}
              </p>
              <p className="text-sm text-gray-400">Total Conferences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Sort Bar */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4" data-aos="fade-up">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by title, name, venue, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-800 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary-color)]/50 focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-[var(--primary-color)] group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                />
              </svg>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none w-full sm:w-auto pl-12 pr-12 py-3 bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-800 rounded-xl text-white font-medium focus:outline-none focus:border-[var(--primary-color)]/50 focus:ring-2 focus:ring-[var(--primary-color)]/20 hover:border-[var(--primary-color)]/30 hover:shadow-[0_0_20px_rgba(252,65,0,0.2)] transition-all duration-300 cursor-pointer [&>option]:bg-gray-900 [&>option]:text-white [&>option]:py-2 relative z-10"
            >
              <option value="default" className="bg-gray-900 text-white">
                📋 Default Order
              </option>
              <option value="year" className="bg-gray-900 text-white">
                📅 Year (Newest First)
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none z-10">
              <svg
                className="w-5 h-5 text-[var(--primary-color)] group-hover:scale-110 group-hover:rotate-180 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      {searchQuery && (
        <div className="mb-4 text-gray-400 text-sm" data-aos="fade-up">
          Found {filteredAndSortedConferences.length} conference
          {filteredAndSortedConferences.length !== 1 ? "s" : ""}
        </div>
      )}

      {/* Conferences Grid */}
      {filteredAndSortedConferences.length === 0 ? (
        <div className="text-center py-20" data-aos="fade-up">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-800/50 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {searchQuery ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              )}
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-400 mb-2">
            {searchQuery
              ? "No matching conferences found"
              : "No conferences yet"}
          </h3>
          <p className="text-gray-500">
            {searchQuery
              ? "Try adjusting your search terms"
              : "Start by adding your first conference"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredAndSortedConferences.map((conf, index) => (
            <ConferenceCard
              key={conf._id}
              conference={conf}
              isLoggedIn={isLoggedIn}
              onDelete={handleDelete}
              index={index}
            />
          ))}
        </div>
      )}

      {isNewConferenceFormOpen && (
        <NewConferenceForm
          onClose={() => setIsNewConferenceFormOpen(false)}
          onSuccess={handleAddConference}
        />
      )}
    </div>
  );
}

function ConferenceCard({ conference, isLoggedIn, onDelete, index }) {
  const { _id, year, title, name, vanue, tags = [], link } = conference;
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 50}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        onClick={handleCardClick}
        className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm transition-all duration-500 ease-out hover:shadow-[0_0_40px_rgba(252,65,0,0.3)] hover:scale-[1.02] border border-gray-800/50 hover:border-[var(--primary-color)]/50 rounded-2xl p-6 overflow-hidden ${
          link ? "cursor-pointer" : ""
        }`}
      >
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Glowing corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-color)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 rounded-xl backdrop-blur-sm">
                <span className="text-[var(--primary-color)] font-bold text-lg">
                  {year}
                </span>
              </div>
            </div>
            {isLoggedIn && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(_id);
                }}
                className="px-4 py-2 border border-gray-700 rounded-xl hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 text-gray-400 transition-all duration-300 hover:scale-105"
              >
                Delete
              </button>
            )}
          </div>

          {/* Title */}
          <h4 className="text-2xl font-unbounded font-semibold mb-3 text-white group-hover:text-[var(--primary-color)] transition-colors duration-300 leading-tight">
            {title}
          </h4>

          {/* Conference Details */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2 text-gray-300">
              <svg
                className="w-5 h-5 text-[var(--primary-color)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-base">{name}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg
                className="w-5 h-5 text-[var(--primary-color)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-base">{vanue}</span>
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, tagIndex) => (
                <span
                  key={`${tag}-${tagIndex}`}
                  className="px-3 py-1.5 bg-gray-800/80 border border-gray-700 rounded-full text-xs font-medium text-gray-300 hover:bg-[var(--primary-color)]/20 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Hover indicator */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[var(--primary-color)] to-orange-500 transition-all duration-500 ${
            isHovered ? "w-full" : "w-0"
          }`}
        />
      </div>
    </div>
  );
}

function NewConferenceForm({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    name: "",
    vanue: "",
    tags: "",
    link: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setError("");
    setIsSubmitting(true);

    try {
      const payload = {
        title: formData.title,
        year: formData.year,
        name: formData.name,
        vanue: formData.vanue,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        link: formData.link,
      };

      const response = await fetch(`${API_BASE_URL}/conferences`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to create conference");
      const newConference = await response.json();
      onSuccess(newConference);
    } catch (err) {
      console.error("Error creating conference:", err);
      setError("Failed to create conference. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100000]"
        onClick={onClose}
        style={{ animation: "fadeIn 0.3s ease-out" }}
      />

      {/* Modal */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[100001] px-4 max-h-[80vh] overflow-y-auto"
        style={{ animation: "scaleIn 0.3s ease-out" }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black p-5 rounded-xl shadow-[0_0_50px_rgba(252,65,0,0.3)] border border-[var(--primary-color)]/30">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[var(--primary-color)]"
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
            </div>
            <h2 className="text-xl font-unbounded font-bold bg-gradient-to-r from-[var(--primary-color)] to-orange-400 bg-clip-text text-transparent">
              New Conference
            </h2>
            <p className="text-gray-400 mt-1 text-xs">Add conference details</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-3 p-2.5 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-xs flex items-center gap-2">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {error}
            </div>
          )}

          {/* Form Fields */}
          <div className="space-y-2.5">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-300">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter conference title"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-300">
                  Year
                </label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="2024"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Conference name"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-300">Venue</label>
              <input
                type="text"
                name="vanue"
                value={formData.vanue}
                onChange={handleChange}
                placeholder="Location"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-300">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="AI, ML, Deep Learning"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-300">Link</label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="https://example.com/conference"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-2.5 pt-1">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-[var(--primary-color)] to-orange-500 hover:shadow-[0_0_30px_rgba(252,65,0,0.5)] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                {isSubmitting ? "Creating..." : "Create"}
              </button>
              <button
                onClick={onClose}
                disabled={isSubmitting}
                className="px-5 border border-gray-700 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 text-gray-300 rounded-lg font-semibold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}
