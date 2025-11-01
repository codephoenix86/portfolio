// "use client";
// import { LoginContext } from "@/context/login";
// import { useContext, useEffect, useRef, useState } from "react";
// export default function Books(props) {
//   const [books, setBooks] = useState(props.data);
//   const { isLoggedIn } = useContext(LoginContext);
//   const [isNewBookFormOpen, setNewBookForm] = useState(false);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const response = await fetch("http://localhost:5000/books");
//   //     const data = await response.json();
//   //     setBooks(data);
//   //   };
//   //   fetchData();
//   // }, []);
//   return (
//     <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
//       <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
//         {isLoggedIn && (
//           <div className="flex justify-end">
//             <button
//               onClick={() => setNewBookForm(true)}
//               className="border px-2.5 py-1 rounded-xl"
//             >
//               add new
//             </button>
//           </div>
//         )}
//         {books.map((book, index) => (
//           <div
//             key={index}
//             className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-4 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
//           >
//             <div className="flex justify-between">
//               <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
//                 {book.year}
//               </h3>
//               {isLoggedIn && (
//                 <button
//                   onClick={async () => {
//                     const response = await fetch(
//                       `http://localhost:5000/books/${book._id}`,
//                       { method: "DELETE" }
//                     );
//                     if (response.ok)
//                       setBooks((prev) =>
//                         prev.filter((item) => item._id !== book._id)
//                       );
//                   }}
//                   className="border py-1 px-2.5 rounded-xl cursor-pointer"
//                 >
//                   delete
//                 </button>
//               )}
//             </div>
//             <h4 className="text-xl font-normal font-unbounded mb-1">
//               {book.title}
//             </h4>
//             <div className="text-gray-400 flex items-center gap-2 text-sm mt-2">
//               <div className="flex items-center">
//                 <span className="text-[color:var(--primary-color)] text-2xl pe-2">
//                   •
//                 </span>{" "}
//                 {book.publisher}
//               </div>
//               <div className="flex items-center">
//                 <span className="text-[color:var(--primary-color)] text-2xl pe-2">
//                   •
//                 </span>{" "}
//                 {book.ISBN}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {isNewBookFormOpen && (
//         <NewBookForm
//           closeNewBookForm={() => setNewBookForm(false)}
//           class="w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//         />
//       )}
//     </div>
//   );
// }

// function NewBookForm(props) {
//   const inputTitleRef = useRef(null);
//   const inputYearRef = useRef(null);
//   const inputPublisherRef = useRef(null);
//   const inputISBNRef = useRef(null);
//   return (
//     <div className={`bg-black p-8 rounded-xl shadow-lg ${props.class}`}>
//       <h2 className="text-2xl text-center font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
//         Create New Book
//       </h2>
//       <form
//         onSubmit={async (e) => {
//           const data = {
//             title: inputTitleRef.current.value,
//             year: inputYearRef.current.value,
//             publisher: inputPublisherRef.current.value,
//             ISBN: inputISBNRef.current.value,
//           };

//           await fetch("http://localhost:5000/books", {
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
//             ref={inputPublisherRef}
//             type="text"
//             placeholder="publisher"
//             className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//           />
//         </div>
//         <div className="">
//           <input
//             ref={inputISBNRef}
//             type="text"
//             placeholder="ISBN"
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
//             onClick={props.closeNewBookForm}
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
import { LoginContext } from "@/context/login";
import { useContext, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Books(props) {
  const [books, setBooks] = useState(props.data);
  const { isLoggedIn } = useContext(LoginContext);
  const [isNewBookFormOpen, setNewBookForm] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/books/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete book");
      setBooks((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Failed to delete book. Please try again.");
    }
  };

  const handleAddBook = (newBook) => {
    setBooks((prev) => [newBook, ...prev]);
    setNewBookForm(false);
  };

  return (
    <div className="min-h-screen relative">
      {/* Header Section */}
      <div className="mb-12" data-aos="fade-down">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h1 className="text-5xl font-unbounded font-bold bg-gradient-to-r from-[var(--primary-color)] via-orange-400 to-[var(--primary-color)] bg-clip-text text-transparent mb-3">
              Books
            </h1>
            <p className="text-gray-400 text-lg">
              Published works and authored books
            </p>
          </div>
          {isLoggedIn && (
            <button
              onClick={() => setNewBookForm(true)}
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{books.length}</p>
              <p className="text-sm text-gray-400">Total Books</p>
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">
                {books.length > 0
                  ? Math.max(...books.map((b) => parseInt(b.year) || 0))
                  : "-"}
              </p>
              <p className="text-sm text-gray-400">Latest Publication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      {books.length === 0 ? (
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-400 mb-2">
            No books yet
          </h3>
          <p className="text-gray-500">Start by adding your first book</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {books.map((book, index) => (
            <BookCard
              key={book._id}
              book={book}
              isLoggedIn={isLoggedIn}
              onDelete={handleDelete}
              index={index}
            />
          ))}
        </div>
      )}

      {isNewBookFormOpen && (
        <NewBookForm
          closeNewBookForm={() => setNewBookForm(false)}
          onSuccess={handleAddBook}
        />
      )}
    </div>
  );
}

function BookCard({ book, isLoggedIn, onDelete, index }) {
  const { _id, year, title, publisher, ISBN, link } = book;
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
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glowing corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-color)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="px-4 py-2 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 rounded-xl backdrop-blur-sm">
              <span className="text-[var(--primary-color)] font-bold text-lg">
                {year}
              </span>
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

          {/* Details */}
          <div className="space-y-2">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="text-base">{publisher}</span>
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
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                />
              </svg>
              <span className="text-base font-mono">{ISBN}</span>
            </div>
          </div>
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

function NewBookForm(props) {
  const inputTitleRef = useRef(null);
  const inputYearRef = useRef(null);
  const inputPublisherRef = useRef(null);
  const inputISBNRef = useRef(null);
  const inputLinkRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const data = {
        title: inputTitleRef.current.value,
        year: inputYearRef.current.value,
        publisher: inputPublisherRef.current.value,
        ISBN: inputISBNRef.current.value,
        link: inputLinkRef.current.value,
      };

      const response = await fetch(`${API_BASE_URL}/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to create book");
      const newBook = await response.json();
      props.onSuccess(newBook);
    } catch (err) {
      console.error("Error creating book:", err);
      setError("Failed to create book. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100000]"
        onClick={props.closeNewBookForm}
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
              Create New Book
            </h2>
            <p className="text-gray-400 mt-1 text-xs">Add your book details</p>
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
          <form onSubmit={handleSubmit} className="space-y-2.5">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-300">Title</label>
              <input
                ref={inputTitleRef}
                type="text"
                placeholder="Enter book title"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-300">Year</label>
              <input
                ref={inputYearRef}
                type="text"
                placeholder="2024"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-300">
                Publisher
              </label>
              <input
                ref={inputPublisherRef}
                type="text"
                placeholder="Publisher name"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-300">ISBN</label>
              <input
                ref={inputISBNRef}
                type="text"
                placeholder="978-0-262-04630-0"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-300">
                Link to Book
              </label>
              <input
                ref={inputLinkRef}
                type="url"
                placeholder="https://example.com/book"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-600"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-2.5 pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-[var(--primary-color)] to-orange-500 hover:shadow-[0_0_30px_rgba(252,65,0,0.5)] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                {isSubmitting ? "Creating..." : "Create"}
              </button>
              <button
                type="button"
                onClick={props.closeNewBookForm}
                disabled={isSubmitting}
                className="px-5 border border-gray-700 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 text-gray-300 rounded-lg font-semibold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </form>
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
