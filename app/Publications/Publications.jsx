// "use client";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { LoginContext } from "@/context/login";
// import { useContext, useEffect, useRef, useState } from "react";
// export default function Publications(props) {
//   const [publications, setPublications] = useState(props.data);
//   useEffect(() => {
//     AOS.init({
//       duration: 600, // animation duration
//       once: true, // run only once per element
//       easing: "ease-in-out",
//     });
//   }, [publications]);
//   const { isLoggedIn } = useContext(LoginContext);
//   const [isNewPublicationFormOpen, setNewPublicationForm] = useState(false);
//   return (
//     <div className="h-[500px] pr-2">
//       <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
//         {isLoggedIn && (
//           <div className="flex justify-end">
//             <button
//               onClick={() => setNewPublicationForm(true)}
//               className="border px-2.5 py-1 rounded-xl"
//             >
//               add new
//             </button>
//           </div>
//         )}
//         {publications.map((pub, index) => (
//           <div data-aos="fade-up" key={index}>
//             <div className="bg-gray-500/5 transition-all duration-500 ease-out hover:shadow-[0_0_15px_#fc4100] hover:scale-[1.01] hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-4 hover:border-[var(--primary-color)] cursor-pointer">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
//                   {pub.year}
//                 </h3>
//                 {isLoggedIn && (
//                   <button
//                     onClick={async () => {
//                       const response = await fetch(
//                         `http://localhost:5000/publications/${pub._id}`,
//                         { method: "DELETE" }
//                       );
//                       if (response.ok)
//                         setPublications((prev) =>
//                           prev.filter((item) => item._id !== pub._id)
//                         );
//                     }}
//                     className="border px-2.5 py-1 rounded-xl cursor-pointer"
//                   >
//                     delete
//                   </button>
//                 )}
//               </div>
//               <h4 className="text-xl font-normal font-unbounded mb-1">
//                 {pub.title}
//               </h4>
//               <div className="text-gray-400 flex items-center gap-2 text-sm mt-2">
//                 <div className="flex items-center">
//                   <span className="text-[color:var(--primary-color)] text-2xl pe-2">
//                     •
//                   </span>{" "}
//                   {pub.vanue}
//                 </div>
//                 <div className="flex items-center">
//                   <span className="text-[color:var(--primary-color)] text-2xl pe-2">
//                     •
//                   </span>{" "}
//                   {pub.citations} Citations
//                 </div>
//               </div>
//               <div className="flex flex-wrap items-center gap-4 mt-2">
//                 {pub.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="bg-gray-500/10 transition-all hover:scale-105 hover:bg-[var(--primary-color)] hover:text-white text-gray-500 rounded-full py-1 px-1.75 text-[12px]"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {isNewPublicationFormOpen && (
//         <NewPublicationForm
//           closeNewPublicationForm={() => setNewPublicationForm(false)}
//           class="w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//         />
//       )}
//     </div>
//   );
// }

// function NewPublicationForm(props) {
//   const inputTitleRef = useRef(null);
//   const inputYearRef = useRef(null);
//   const inputVanueRef = useRef(null);
//   const inputCitationsRef = useRef(null);
//   return (
//     <div className={`bg-black p-8 rounded-xl shadow-lg ${props.class}`}>
//       <h2 className="text-2xl text-center font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
//         Create New Publication
//       </h2>
//       <form
//         onSubmit={async (e) => {
//           const data = {
//             title: inputTitleRef.current.value,
//             year: inputYearRef.current.value,
//             vanue: inputVanueRef.current.value,
//             citations: inputCitationsRef.current.value,
//           };

//           await fetch("http://localhost:5000/publications", {
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
//             ref={inputCitationsRef}
//             type="text"
//             placeholder="citations"
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
//             onClick={props.closeNewPublicationForm}
//             className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// "use client";
// import { useContext, useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { LoginContext } from "@/context/login";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// export default function Publications({ data }) {
//   const [publications, setPublications] = useState(data);
//   const [isNewPublicationFormOpen, setIsNewPublicationFormOpen] =
//     useState(false);
//   const { isLoggedIn } = useContext(LoginContext);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/publications/${id}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) throw new Error("Failed to delete publication");
//       setPublications((prev) => prev.filter((item) => item._id !== id));
//     } catch (error) {
//       console.error("Error deleting publication:", error);
//       alert("Failed to delete publication. Please try again.");
//     }
//   };

//   const handleAddPublication = (newPublication) => {
//     setPublications((prev) => [newPublication, ...prev]);
//     setIsNewPublicationFormOpen(false);
//   };

//   return (
//     <div className="min-h-screen relative">
//       {/* Header Section */}
//       <div className="mb-12" data-aos="fade-down">
//         <div className="flex items-end justify-between mb-6">
//           <div>
//             <h1 className="text-5xl font-unbounded font-bold bg-gradient-to-r from-[var(--primary-color)] via-orange-400 to-[var(--primary-color)] bg-clip-text text-transparent mb-3">
//               Publications
//             </h1>
//             <p className="text-gray-400 text-lg">
//               Research papers and academic contributions
//             </p>
//           </div>
//           {isLoggedIn && (
//             <button
//               onClick={() => setIsNewPublicationFormOpen(true)}
//               className="group relative px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-orange-500 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(252,65,0,0.5)] hover:scale-105"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 <svg
//                   className="w-5 h-5"
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
//                   d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                 />
//               </svg>
//             </div>
//             <div>
//               <p className="text-3xl font-bold text-white">
//                 {publications.length}
//               </p>
//               <p className="text-sm text-gray-400">Total Publications</p>
//             </div>
//           </div>
//           <div className="w-px bg-gray-700" />
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
//                   d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
//                 />
//               </svg>
//             </div>
//             <div>
//               <p className="text-3xl font-bold text-white">
//                 {publications.reduce(
//                   (sum, pub) => sum + (pub.citations || 0),
//                   0
//                 )}
//               </p>
//               <p className="text-sm text-gray-400">Total Citations</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Publications Grid */}
//       {publications.length === 0 ? (
//         <div className="text-center py-20" data-aos="fade-up">
//           <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-800/50 flex items-center justify-center">
//             <svg
//               className="w-16 h-16 text-gray-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//               />
//             </svg>
//           </div>
//           <h3 className="text-2xl font-semibold text-gray-400 mb-2">
//             No publications yet
//           </h3>
//           <p className="text-gray-500">
//             Start by adding your first publication
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 gap-6">
//           {publications.map((pub, index) => (
//             <PublicationCard
//               key={pub._id}
//               publication={pub}
//               isLoggedIn={isLoggedIn}
//               onDelete={handleDelete}
//               index={index}
//             />
//           ))}
//         </div>
//       )}

//       {isNewPublicationFormOpen && (
//         <NewPublicationForm
//           onClose={() => setIsNewPublicationFormOpen(false)}
//           onSuccess={handleAddPublication}
//         />
//       )}
//     </div>
//   );
// }

// function PublicationCard({ publication, isLoggedIn, onDelete, index }) {
//   const { _id, year, title, vanue, citations, tags = [] } = publication;
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       data-aos="fade-up"
//       data-aos-delay={index * 50}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm transition-all duration-500 ease-out hover:shadow-[0_0_40px_rgba(252,65,0,0.3)] hover:scale-[1.02] border border-gray-800/50 hover:border-[var(--primary-color)]/50 rounded-2xl p-6 overflow-hidden">
//         {/* Animated background gradient */}
//         <div
//           className={`absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//         />

//         {/* Glowing corner accent */}
//         <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-color)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//         <div className="relative z-10">
//           {/* Header */}
//           <div className="flex justify-between items-start mb-4">
//             <div className="flex items-center gap-4">
//               <div className="px-4 py-2 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 rounded-xl backdrop-blur-sm">
//                 <span className="text-[var(--primary-color)] font-bold text-lg">
//                   {year}
//                 </span>
//               </div>
//               <div className="flex items-center gap-2 text-sm text-gray-400">
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
//                   />
//                 </svg>
//                 <span className="font-semibold text-white">{citations}</span>{" "}
//                 citations
//               </div>
//             </div>
//             {isLoggedIn && (
//               <button
//                 onClick={() => onDelete(_id)}
//                 className="px-4 py-2 border border-gray-700 rounded-xl hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 text-gray-400 transition-all duration-300 hover:scale-105"
//               >
//                 Delete
//               </button>
//             )}
//           </div>

//           {/* Title */}
//           <h4 className="text-2xl font-unbounded font-semibold mb-3 text-white group-hover:text-[var(--primary-color)] transition-colors duration-300 leading-tight">
//             {title}
//           </h4>

//           {/* Venue */}
//           <div className="flex items-center gap-2 text-gray-300 mb-4">
//             <svg
//               className="w-5 h-5 text-[var(--primary-color)]"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//               />
//             </svg>
//             <span className="text-base">{vanue}</span>
//           </div>

//           {/* Tags */}
//           {tags.length > 0 && (
//             <div className="flex flex-wrap gap-2">
//               {tags.map((tag, tagIndex) => (
//                 <span
//                   key={`${tag}-${tagIndex}`}
//                   className="px-3 py-1.5 bg-gray-800/80 border border-gray-700 rounded-full text-xs font-medium text-gray-300 hover:bg-[var(--primary-color)]/20 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] hover:scale-105 transition-all duration-300 cursor-default"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Hover indicator */}
//         <div
//           className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[var(--primary-color)] to-orange-500 transition-all duration-500 ${
//             isHovered ? "w-full" : "w-0"
//           }`}
//         />
//       </div>
//     </div>
//   );
// }

// function NewPublicationForm({ onClose, onSuccess }) {
//   const [formData, setFormData] = useState({
//     title: "",
//     year: "",
//     vanue: "",
//     citations: "",
//     tags: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsSubmitting(true);

//     try {
//       const payload = {
//         title: formData.title,
//         year: formData.year,
//         vanue: formData.vanue,
//         citations: parseInt(formData.citations) || 0,
//         tags: formData.tags
//           .split(",")
//           .map((tag) => tag.trim())
//           .filter(Boolean),
//       };

//       const response = await fetch(`${API_BASE_URL}/publications`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error("Failed to create publication");
//       const newPublication = await response.json();
//       onSuccess(newPublication);
//     } catch (err) {
//       console.error("Error creating publication:", err);
//       setError("Failed to create publication. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       {/* Backdrop with blur */}
//       <div
//         className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 animate-fadeIn"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50 px-4 animate-scaleIn">
//         <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-[0_0_50px_rgba(252,65,0,0.3)] border border-[var(--primary-color)]/30">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
//               <svg
//                 className="w-8 h-8 text-[var(--primary-color)]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 4v16m8-8H4"
//                 />
//               </svg>
//             </div>
//             <h2 className="text-3xl font-unbounded font-bold bg-gradient-to-r from-[var(--primary-color)] to-orange-400 bg-clip-text text-transparent">
//               New Publication
//             </h2>
//             <p className="text-gray-400 mt-2">
//               Add your research paper details
//             </p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm flex items-center gap-3">
//               <svg
//                 className="w-5 h-5 flex-shrink-0"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               {error}
//             </div>
//           )}

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-300">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 placeholder="Enter publication title"
//                 required
//                 className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-300">
//                   Year
//                 </label>
//                 <input
//                   type="text"
//                   name="year"
//                   value={formData.year}
//                   onChange={handleChange}
//                   placeholder="2024"
//                   required
//                   className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-300">
//                   Citations
//                 </label>
//                 <input
//                   type="number"
//                   name="citations"
//                   value={formData.citations}
//                   onChange={handleChange}
//                   placeholder="0"
//                   required
//                   min="0"
//                   className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-300">Venue</label>
//               <input
//                 type="text"
//                 name="vanue"
//                 value={formData.vanue}
//                 onChange={handleChange}
//                 placeholder="Conference or journal name"
//                 required
//                 className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-300">Tags</label>
//               <input
//                 type="text"
//                 name="tags"
//                 value={formData.tags}
//                 onChange={handleChange}
//                 placeholder="AI, Machine Learning, Deep Learning (comma-separated)"
//                 className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-4 pt-4">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="flex-1 bg-gradient-to-r from-[var(--primary-color)] to-orange-500 hover:shadow-[0_0_30px_rgba(252,65,0,0.5)] text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
//               >
//                 {isSubmitting ? "Creating..." : "Create Publication"}
//               </button>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 disabled={isSubmitting}
//                 className="px-8 border border-gray-700 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 text-gray-300 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: translate(-50%, -50%) scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: translate(-50%, -50%) scale(1);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out;
//         }
//       `}</style>
//     </>
//   );
// }

"use client";
import { useContext, useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LoginContext } from "@/context/login";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Publications({ data }) {
  const [publications, setPublications] = useState(data);
  const [isNewPublicationFormOpen, setIsNewPublicationFormOpen] =
    useState(false);
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

  // Filter and sort publications
  const filteredAndSortedPublications = useMemo(() => {
    let filtered = publications.filter((pub) => {
      const searchLower = searchQuery.toLowerCase();
      const titleMatch = pub.title.toLowerCase().includes(searchLower);
      const tagsMatch = pub.tags?.some((tag) =>
        tag.toLowerCase().includes(searchLower)
      );
      const venueMatch = pub.vanue?.toLowerCase().includes(searchLower);
      return titleMatch || tagsMatch || venueMatch;
    });

    // Sort publications
    if (sortBy === "year") {
      filtered = [...filtered].sort((a, b) => {
        const yearA = parseInt(a.year) || 0;
        const yearB = parseInt(b.year) || 0;
        return yearB - yearA; // Descending order
      });
    } else if (sortBy === "citations") {
      filtered = [...filtered].sort((a, b) => {
        const citA = a.citations || 0;
        const citB = b.citations || 0;
        return citB - citA; // Descending order
      });
    }
    // "default" keeps original order

    return filtered;
  }, [publications, searchQuery, sortBy]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/publications/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete publication");
      setPublications((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting publication:", error);
      alert("Failed to delete publication. Please try again.");
    }
  };

  const handleAddPublication = (newPublication) => {
    setPublications((prev) => [newPublication, ...prev]);
    setIsNewPublicationFormOpen(false);
  };

  return (
    <div className="min-h-screen relative">
      {/* Header Section */}
      <div className="mb-12" data-aos="fade-down">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h1 className="text-5xl font-unbounded font-bold bg-gradient-to-r from-[var(--primary-color)] via-orange-400 to-[var(--primary-color)] bg-clip-text text-transparent mb-3">
              Publications
            </h1>
            <p className="text-gray-400 text-lg">
              Research papers and academic contributions
            </p>
          </div>
          {isLoggedIn && (
            <button
              onClick={() => setIsNewPublicationFormOpen(true)}
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">
                {publications.length}
              </p>
              <p className="text-sm text-gray-400">Total Publications</p>
            </div>
          </div>
          <div className="w-px bg-gray-700" />
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
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">
                {publications.reduce(
                  (sum, pub) => sum + (pub.citations || 0),
                  0
                )}
              </p>
              <p className="text-sm text-gray-400">Total Citations</p>
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
            placeholder="Search by title, venue, or tags..."
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
              <option value="citations" className="bg-gray-900 text-white">
                ⭐ Most Citations
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
          Found {filteredAndSortedPublications.length} publication
          {filteredAndSortedPublications.length !== 1 ? "s" : ""}
        </div>
      )}

      {/* Publications Grid */}
      {filteredAndSortedPublications.length === 0 ? (
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              )}
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-400 mb-2">
            {searchQuery
              ? "No matching publications found"
              : "No publications yet"}
          </h3>
          <p className="text-gray-500">
            {searchQuery
              ? "Try adjusting your search terms"
              : "Start by adding your first publication"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredAndSortedPublications.map((pub, index) => (
            <PublicationCard
              key={pub._id}
              publication={pub}
              isLoggedIn={isLoggedIn}
              onDelete={handleDelete}
              index={index}
            />
          ))}
        </div>
      )}

      {isNewPublicationFormOpen && (
        <NewPublicationForm
          onClose={() => setIsNewPublicationFormOpen(false)}
          onSuccess={handleAddPublication}
        />
      )}
    </div>
  );
}

function PublicationCard({ publication, isLoggedIn, onDelete, index }) {
  const { _id, year, title, vanue, citations, tags = [], link } = publication;
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
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <span className="font-semibold text-white">{citations}</span>{" "}
                citations
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

          {/* Venue */}
          <div className="flex items-center gap-2 text-gray-300 mb-4">
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="text-base">{vanue}</span>
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

function NewPublicationForm({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    vanue: "",
    citations: "",
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
        vanue: formData.vanue,
        citations: parseInt(formData.citations) || 0,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        link: formData.link,
      };

      const response = await fetch(`${API_BASE_URL}/publications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to create publication");
      const newPublication = await response.json();
      onSuccess(newPublication);
    } catch (err) {
      console.error("Error creating publication:", err);
      setError("Failed to create publication. Please try again.");
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
              New Publication
            </h2>
            <p className="text-gray-400 mt-1 text-xs">
              Add your research paper details
            </p>
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
                placeholder="Enter publication title"
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
                  Citations
                </label>
                <input
                  type="number"
                  name="citations"
                  value={formData.citations}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
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
                placeholder="Conference or journal name"
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
              <label className="text-xs font-medium text-gray-300">
                Link to Paper
              </label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="https://example.com/paper.pdf"
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
