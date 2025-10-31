"use client";
import { LoginContext } from "@/context/login";
import { useContext, useEffect, useRef, useState } from "react";
export default function Books(props) {
  const [books, setBooks] = useState(props.data);
  const { isLoggedIn } = useContext(LoginContext);
  const [isNewBookFormOpen, setNewBookForm] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:5000/books");
  //     const data = await response.json();
  //     setBooks(data);
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {isLoggedIn && (
          <div className="flex justify-end">
            <button
              onClick={() => setNewBookForm(true)}
              className="border px-2.5 py-1 rounded-xl"
            >
              add new
            </button>
          </div>
        )}
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-4 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
          >
            <div className="flex justify-between">
              <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                {book.year}
              </h3>
              {isLoggedIn && (
                <button
                  onClick={async () => {
                    const response = await fetch(
                      `http://localhost:5000/books/${book._id}`,
                      { method: "DELETE" }
                    );
                    if (response.ok)
                      setBooks((prev) =>
                        prev.filter((item) => item._id !== book._id)
                      );
                  }}
                  className="border py-1 px-2.5 rounded-xl cursor-pointer"
                >
                  delete
                </button>
              )}
            </div>
            <h4 className="text-xl font-normal font-unbounded mb-1">
              {book.title}
            </h4>
            <div className="text-gray-400 flex items-center gap-2 text-sm mt-2">
              <div className="flex items-center">
                <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                  •
                </span>{" "}
                {book.publisher}
              </div>
              <div className="flex items-center">
                <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                  •
                </span>{" "}
                {book.ISBN}
              </div>
            </div>
          </div>
        ))}
      </div>
      {isNewBookFormOpen && (
        <NewBookForm
          closeNewBookForm={() => setNewBookForm(false)}
          class="w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
    </div>
  );
}

function NewBookForm(props) {
  const inputTitleRef = useRef(null);
  const inputYearRef = useRef(null);
  const inputPublisherRef = useRef(null);
  const inputISBNRef = useRef(null);
  return (
    <div className={`bg-black p-8 rounded-xl shadow-lg ${props.class}`}>
      <h2 className="text-2xl text-center font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
        Create New Book
      </h2>
      <form
        onSubmit={async (e) => {
          const data = {
            title: inputTitleRef.current.value,
            year: inputYearRef.current.value,
            publisher: inputPublisherRef.current.value,
            ISBN: inputISBNRef.current.value,
          };

          await fetch("http://localhost:5000/books", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // important!
            },
            body: JSON.stringify(data), // convert JS object to JSON
          });
        }}
        className={`space-y-6`}
      >
        <div className="">
          <input
            ref={inputTitleRef}
            type="text"
            placeholder="title"
            className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
          />
        </div>
        <div className="">
          <input
            ref={inputYearRef}
            type="text"
            placeholder="year"
            className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
          />
        </div>
        <div className="">
          <input
            ref={inputPublisherRef}
            type="text"
            placeholder="publisher"
            className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
          />
        </div>
        <div className="">
          <input
            ref={inputISBNRef}
            type="text"
            placeholder="ISBN"
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
            onClick={props.closeNewBookForm}
            className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
