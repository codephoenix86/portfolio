// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useContext } from "react";
// import { LoginPopupContext } from "@/context/loginPopup";
// import { LoginContext } from "@/context/login";

// export default function Nav() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { setLoginPopupOpened } = useContext(LoginPopupContext);
//   const { isLoggedIn, setLoggedIn } = useContext(LoginContext);
//   const pathname = usePathname();
//   const [isWorkMenuOpen, setWorkMenuOpen] = useState(false);
//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Research", href: "/Services" },
//     { name: "Work", href: "/Resume" },
//     { name: "Students", href: "/Work" },
//     { name: "Contact", href: "/Contact" },
//   ];
//   return (
//     <nav className="w-full z-[99999] transition-all duration-300">
//       <div className="flex justify-end items-center px-[8%] lg:px-[16%] py-6">
//         <div className="flex items-center gap-3">
//           <div className="hidden lg:flex nav-menu items-center space-x-5">
//             {navLinks.map((link) => (
//               <div
//                 key={link.name}
//                 onMouseEnter={() => {
//                   console.log(link.name);
//                   if (link.name === "Work") setWorkMenuOpen(true);
//                 }}
//                 onMouseLeave={() => {
//                   if (link.name === "Work") setWorkMenuOpen(false);
//                 }}
//                 className="relative"
//               >
//                 <Link
//                   href={link.href}
//                   className={`nav-link text-base font-bold transition-all text-white relative px-2 py-2 rounded hover:text-[var(--primary-color)] ${
//                     pathname === link.href
//                       ? "active-links text-[--primary-color]"
//                       : " "
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//                 {link.name === "Work" && <WorkMenu open={isWorkMenuOpen} />}
//               </div>
//             ))}
//           </div>
//           <div
//             onClick={() => {
//               if (isLoggedIn) setLoggedIn(false);
//               else setLoginPopupOpened(true);
//             }}
//             className="bg-[var(--primary-color)] px-5 py-2 text-lg text-white font-semibold cursor-pointer rounded-lg transition-all duration-300 hover:bg-transparent shadow-md hover:shadow-[0px_2px_5px_var(--primary-color)]"
//           >
//             {isLoggedIn ? "Log Out" : "Admin"}
//           </div>
//         </div>
//         {/* {Mobile menu Button} */}
//         <button
//           className="lg:hidden text-2xl"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <i className="ri-menu-2-fill text-white"></i>
//         </button>
//       </div>
//       {/* {Side Menu with Smooth Transition} */}
//       <div
//         className={`lg:hidden bg-[#1c1b21] text-white border-y border-[--primary-color] px-[8%] overflow-hidden transition-all duration-500 ease-in-out ${
//           isMenuOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
//         }`}
//       >
//         <ul className="space-y-4 menu">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <Link
//                 href={link.href}
//                 className="block text-base relative"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// function WorkMenu(props) {
//   return (
//     <div
//       className={`origin-top bg-gray-900 border-gray-700 rounded-lg shadow-lg p-3 min-w-[200px] z-50 mt-4 absolute flex flex-col ease-in-out border transition-all duration-300 ${
//         props.open
//           ? "opacity-100 visible scale-y-100"
//           : "opacity-0 invisible scale-y-0"
//       }`}
//     >
//       <Link
//         className="block text-white px-4 py-3 rounded-lg
//           font-medium text-[0.95rem] transition-all duration-200
//           hover:bg-[var(--primary-color)] hover:text-white"
//         href="/Publications"
//       >
//         Publications
//       </Link>
//       <Link
//         className="block text-white px-4 py-3 rounded-lg
//           font-medium text-[0.95rem] transition-all duration-200
//           hover:bg-[var(--primary-color)] hover:text-white"
//         href="/Conferences"
//       >
//         Conferences
//       </Link>
//       <Link
//         className="block text-white px-4 py-3 rounded-lg
//           font-medium text-[0.95rem] transition-all duration-200
//           hover:bg-[var(--primary-color)] hover:text-white"
//         href="/Books"
//       >
//         Books
//       </Link>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext, useEffect, useRef } from "react";
import { LoginPopupContext } from "@/context/loginPopup";
import { LoginContext } from "@/context/login";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorkMenuOpen, setWorkMenuOpen] = useState(false);
  const { setLoginPopupOpened } = useContext(LoginPopupContext);
  const { isLoggedIn, setLoggedIn } = useContext(LoginContext);
  const pathname = usePathname();
  const workMenuRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/", icon: "ri-home-line" },
    { name: "Research", href: "/Services", icon: "ri-flask-line" },
    {
      name: "Work",
      href: "/Resume",
      icon: "ri-briefcase-line",
      hasDropdown: true,
    },
    { name: "Students", href: "/Work", icon: "ri-group-line" },
    { name: "Contact", href: "/Contact", icon: "ri-mail-line" },
  ];

  const workDropdownItems = [
    { name: "Publications", href: "/Publications", icon: "ri-article-line" },
    { name: "Conferences", href: "/Conferences", icon: "ri-presentation-line" },
    { name: "Books", href: "/Books", icon: "ri-book-line" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (workMenuRef.current && !workMenuRef.current.contains(event.target)) {
        setWorkMenuOpen(false);
      }
    };

    if (isWorkMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isWorkMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isWorkActive = [
    "/Publications",
    "/Conferences",
    "/Books",
    "/Resume",
  ].includes(pathname);

  return (
    <nav className="w-full z-[99999] sticky top-0 backdrop-blur-md bg-[#0e0f12]/80 border-b border-gray-800/50">
      <div className="flex justify-between items-center px-[8%] lg:px-[16%] py-4">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-color)]/70 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="hidden sm:block text-white font-bold text-lg">
            Research
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <div
              key={link.name}
              ref={link.hasDropdown ? workMenuRef : null}
              onMouseEnter={() => {
                if (link.hasDropdown) setWorkMenuOpen(true);
              }}
              onMouseLeave={() => {
                if (link.hasDropdown) setWorkMenuOpen(false);
              }}
              className="relative"
            >
              <Link
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 relative group
                  ${
                    pathname === link.href || (link.hasDropdown && isWorkActive)
                      ? "text-[var(--primary-color)] bg-[var(--primary-color)]/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                <i className={`${link.icon} text-base`}></i>
                <span>{link.name}</span>
                {link.hasDropdown && (
                  <i
                    className={`ri-arrow-down-s-line text-sm transition-transform duration-300 ${
                      isWorkMenuOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                )}
              </Link>
              {link.hasDropdown && (
                <WorkMenu
                  open={isWorkMenuOpen}
                  items={workDropdownItems}
                  currentPath={pathname}
                />
              )}
            </div>
          ))}

          {/* Admin/Logout Button */}
          <button
            onClick={() => {
              if (isLoggedIn) setLoggedIn(false);
              else setLoginPopupOpened(true);
            }}
            className="flex items-center gap-2 ml-4 bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-[0_4px_15px_rgba(var(--primary-color-rgb),0.3)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <i
              className={`${
                isLoggedIn ? "ri-logout-box-line" : "ri-admin-line"
              } text-lg`}
            ></i>
            <span>{isLoggedIn ? "Log Out" : "Admin"}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i
            className={`${
              isMenuOpen ? "ri-close-line" : "ri-menu-line"
            } transition-transform duration-300`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#1c1b21] border-t border-gray-800 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-[8%] py-6 space-y-2">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                onClick={() => !link.hasDropdown && setIsMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
                  ${
                    pathname === link.href
                      ? "text-[var(--primary-color)] bg-[var(--primary-color)]/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                <span className="flex items-center gap-3">
                  <i className={`${link.icon} text-xl`}></i>
                  {link.name}
                </span>
                {link.hasDropdown && (
                  <i className="ri-arrow-right-s-line text-lg"></i>
                )}
              </Link>

              {/* Mobile Dropdown Items */}
              {link.hasDropdown && (
                <div className="ml-8 mt-2 space-y-1">
                  {workDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-300
                        ${
                          pathname === item.href
                            ? "text-[var(--primary-color)] bg-[var(--primary-color)]/10"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <i className={`${item.icon} text-base`}></i>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Admin Button */}
          <button
            onClick={() => {
              if (isLoggedIn) setLoggedIn(false);
              else setLoginPopupOpened(true);
              setIsMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 mt-4 bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-5 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <i
              className={`${
                isLoggedIn ? "ri-logout-box-line" : "ri-admin-line"
              } text-lg`}
            ></i>
            <span>{isLoggedIn ? "Log Out" : "Admin"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function WorkMenu({ open, items, currentPath }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 
        bg-[#1c1b21] border border-gray-800 rounded-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(var(--primary-color-rgb),0.1)]
        py-2 min-w-[220px] z-50
        transition-all duration-300 ease-out origin-top
        ${
          open
            ? "opacity-100 visible scale-100 translate-y-0"
            : "opacity-0 invisible scale-95 -translate-y-2"
        }`}
    >
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-all duration-200
            ${
              currentPath === item.href
                ? "text-white bg-[var(--primary-color)]"
                : "text-gray-300 hover:text-white hover:bg-[var(--primary-color)]/10"
            }`}
        >
          <i className={`${item.icon} text-base`}></i>
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
