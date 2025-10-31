"use client";

import { useEffect, useState, useRef, useContext } from "react";
import { FaBootstrap, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { LoginContext } from "@/context/login";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("Publications");
  const tabs = ["Publications", "Conferences", "Books", "Timeline"];
  return (
    <section className="px-[8%] lg:px-[16%] py-20 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left SideBar */}
        <div>
          <div className="flex flex-col gap-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-left rounded-md font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[var(--primary-color)] text-white"
                    : "bg-gray-500/5 text-gray-400 hover:gray-500/20 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* Right Content */}
        <div className="md:col-span-2">
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Search publications"
              className="bg-[#0e0f12] w-full border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
            />
            <select className="bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500 appearance-none">
              <option>Years</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
            <select className="bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500 appearance-none">
              <option>Relevance</option>
              <option>Citations</option>
              <option>H-index</option>
            </select>
          </div>
          <p className="text-gray-400 mb-10">
            Peer-reviewed journal papers and technical contributions
          </p>
          {/* Experience */}
          {activeTab === "Publications" && <Publications />}
          {/* Education */}
          {activeTab === "Conferences" && <Conferences />}
          {/* Skills */}
          {activeTab === "Books" && <Books />}
          {/* About */}
          {activeTab === "Timeline" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {conferences.map((conf, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-4 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                      {conf.date}
                    </h3>
                    <h4 className="text-lg font-normal font-unbounded mb-1">
                      {conf.title}
                    </h4>
                    <div className="text-gray-400 flex items-center gap-2 text-sm mt-2">
                      <div className="flex items-center">
                        <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                          •
                        </span>{" "}
                        {conf.vanue}
                      </div>
                      <div className="flex items-center">
                        <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                          •
                        </span>{" "}
                        {conf.citations}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      {conf.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-500/10 text-gray-500 rounded-full py-1 px-1.75 text-[12px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Publications() {
  const [publications, setPublications] = useState([]);
  const { isLoggedIn } = useContext(LoginContext);
  const [isNewPublicationFormOpen, setNewPublicationForm] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/publications");
      const data = await response.json();
      setPublications(data);
    };
    fetchData();
  }, []);
  return (
    <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {isLoggedIn && (
          <div className="flex justify-end">
            <button
              onClick={() => setNewPublicationForm(true)}
              className="border px-2.5 py-1 rounded-xl"
            >
              add new
            </button>
          </div>
        )}
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-4 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                {pub.year}
              </h3>
              {isLoggedIn && (
                <button
                  onClick={async () => {
                    const response = await fetch(
                      `http://localhost:5000/publications/${pub._id}`,
                      { method: "DELETE" }
                    );
                    if (response.ok)
                      setPublications((prev) =>
                        prev.filter((item) => item._id !== pub._id)
                      );
                  }}
                  className="border px-2.5 py-1 rounded-xl cursor-pointer"
                >
                  delete
                </button>
              )}
            </div>
            <h4 className="text-lg font-normal font-unbounded mb-1">
              {pub.title}
            </h4>
            <div className="text-gray-400 flex items-center gap-2 text-sm mt-2">
              <div className="flex items-center">
                <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                  •
                </span>{" "}
                {pub.vanue}
              </div>
              <div className="flex items-center">
                <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                  •
                </span>{" "}
                {pub.citations} Citations
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              {pub.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-500/10 text-gray-500 rounded-full py-1 px-1.75 text-[12px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {isNewPublicationFormOpen && (
        <NewPublicationForm
          closeNewPublicationForm={() => setNewPublicationForm(false)}
          class="w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
    </div>
  );
}
function Conferences() {
  const [conferences, setConferences] = useState([]);
  const { isLoggedIn } = useContext(LoginContext);
  const [isNewConferenceFormOpen, setNewConferenceForm] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/conferences");
      const data = await response.json();
      setConferences(data);
    };
    fetchData();
  }, []);
  return (
    <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {isLoggedIn && (
          <div className="flex justify-end">
            <button
              onClick={() => setNewConferenceForm(true)}
              className="border px-2.5 py-1 rounded-xl"
            >
              add new
            </button>
          </div>
        )}
        {conferences.map((conf, index) => (
          <div
            key={index}
            className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-4 hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                {conf.year}
              </h3>
              {isLoggedIn && (
                <button
                  onClick={async () => {
                    const response = await fetch(
                      `http://localhost:5000/conferences/${conf._id}`,
                      { method: "DELETE" }
                    );
                    if (response.ok)
                      setConferences((prev) =>
                        prev.filter((item) => item._id !== conf._id)
                      );
                  }}
                  className="border px-2.5 py-1 rounded-xl cursor-pointer"
                >
                  delete
                </button>
              )}
            </div>

            <h4 className="text-lg font-normal font-unbounded mb-1">
              {conf.title}
            </h4>
            <div className="text-gray-400 flex items-center gap-2 text-sm mt-2">
              <div className="flex items-center">
                <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                  •
                </span>{" "}
                {conf.name}
              </div>
              <div className="flex items-center">
                <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                  •
                </span>{" "}
                {conf.vanue}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              {conf.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-500/10 text-gray-500 rounded-full py-1 px-1.75 text-[12px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {isNewConferenceFormOpen && (
        <NewConferenceForm
          closeNewConferenceForm={() => setNewConferenceForm(false)}
          class="w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
    </div>
  );
}
function Books() {
  const [books, setBooks] = useState([]);
  const { isLoggedIn } = useContext(LoginContext);
  const [isNewBookFormOpen, setNewBookForm] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/books");
      const data = await response.json();
      setBooks(data);
    };
    fetchData();
  }, []);
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
            <h4 className="text-lg font-normal font-unbounded mb-1">
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

function NewPublicationForm(props) {
  const inputTitleRef = useRef(null);
  const inputYearRef = useRef(null);
  const inputVanueRef = useRef(null);
  const inputCitationsRef = useRef(null);
  return (
    <div className={`bg-black p-8 rounded-xl shadow-lg ${props.class}`}>
      <h2 className="text-2xl text-center font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
        Create New Publication
      </h2>
      <form
        onSubmit={async (e) => {
          const data = {
            title: inputTitleRef.current.value,
            year: inputYearRef.current.value,
            vanue: inputVanueRef.current.value,
            citations: inputCitationsRef.current.value,
          };

          await fetch("http://localhost:5000/publications", {
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
            ref={inputVanueRef}
            type="text"
            placeholder="vanue"
            className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
          />
        </div>
        <div className="">
          <input
            ref={inputCitationsRef}
            type="text"
            placeholder="citations"
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
            onClick={props.closeNewPublicationForm}
            className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
function NewConferenceForm(props) {
  const inputTitleRef = useRef(null);
  const inputYearRef = useRef(null);
  const inputVanueRef = useRef(null);
  const inputNameRef = useRef(null);
  return (
    <div className={`bg-black p-8 rounded-xl shadow-lg ${props.class}`}>
      <h2 className="text-2xl text-center font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
        Create New Conference
      </h2>
      <form
        onSubmit={async (e) => {
          const data = {
            title: inputTitleRef.current.value,
            year: inputYearRef.current.value,
            vanue: inputVanueRef.current.value,
            name: inputNameRef.current.value,
          };

          await fetch("http://localhost:5000/conferences", {
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
            ref={inputVanueRef}
            type="text"
            placeholder="vanue"
            className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
          />
        </div>
        <div className="">
          <input
            ref={inputNameRef}
            type="text"
            placeholder="name"
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
            onClick={props.closeNewConferenceForm}
            className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
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
