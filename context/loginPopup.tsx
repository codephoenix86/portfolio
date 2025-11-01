"use client";
import { createContext, useRef, useState, useContext } from "react";
import { LoginContext } from "@/context/login";
// Create a context object
export const LoginPopupContext = createContext();

export const LoginPopupProvider = ({ children }) => {
  const [isLoginPopupOpened, setLoginPopupOpened] = useState(false);

  return (
    <LoginPopupContext.Provider
      value={{ isLoginPopupOpened, setLoginPopupOpened }}
    >
      {children}
      {isLoginPopupOpened && (
        <>
          {/* <div className="absolute inset-0 bg-black/50"></div> */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100000]"
            onClick={() => setLoginPopupOpened(false)}
          ></div>
          {/* <Login
            class="w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            closeLoginPopup={() => setLoginPopupOpened(false)}
          /> */}
          <Login
            class="w-full max-w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100001] mx-4"
            closeLoginPopup={() => setLoginPopupOpened(false)}
          />
        </>
      )}
    </LoginPopupContext.Provider>
  );
};

// function Login(props) {
//   const inputEmailRef = useRef(null);
//   const inputPasswordRef = useRef(null);
//   const { isLoggedIn, setLoggedIn } = useContext(LoginContext);
//   return (
//     <div className={`bg-black p-8 rounded-xl shadow-lg ${props.class}`}>
//       <h2 className="text-2xl text-center font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
//         Admin Login
//       </h2>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault()
//           if (
//             process.env.NEXT_PUBLIC_EMAIL === inputEmailRef.current.value &&
//             process.env.NEXT_PUBLIC_PASSWORD === inputPasswordRef.current.value
//           )
//           {
//             setLoggedIn(true);
//             props.closeLoginPopup()
//           }
//         }}
//         className={`space-y-6`}
//       >
//         <div className="">
//           <input
//             type="text"
//             ref={inputEmailRef}
//             placeholder="enter your email"
//             className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//           />
//         </div>
//         <div className="">
//           <input
//             type="password"
//             ref={inputPasswordRef}
//             placeholder="enter your password"
//             className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//           />
//         </div>
//         <div className="flex justify-between">
//           <button
//             type="submit"
//             className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
//           >
//             Log In
//           </button>
//           <button
//             type="submit"
//             onClick={props.closeLoginPopup}
//             className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

function Login(props) {
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const { isLoggedIn, setLoggedIn } = useContext(LoginContext);

  return (
    <div
      className={`bg-gradient-to-br from-[#1c1b21] to-[#0e0f12] p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_40px_rgba(var(--primary-color-rgb),0.15)] border border-[var(--primary-color)]/30 ${props.class}`}
    >
      {/* Header with icon */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 mb-4">
          <i className="ri-admin-line text-3xl text-[var(--primary-color)]"></i>
        </div>
        <h2 className="text-3xl font-unbounded font-bold text-[var(--primary-color)] mb-2">
          Admin Login
        </h2>
        <p className="text-gray-400 text-sm">
          Enter your credentials to continue
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (
            process.env.NEXT_PUBLIC_EMAIL === inputEmailRef.current.value &&
            process.env.NEXT_PUBLIC_PASSWORD === inputPasswordRef.current.value
          ) {
            setLoggedIn(true);
            props.closeLoginPopup();
          }
        }}
        className="space-y-5"
      >
        {/* Email Input */}
        <div className="relative group">
          <label className="block text-gray-300 text-sm font-medium mb-2 ml-1">
            Email Address
          </label>
          <div className="relative">
            <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--primary-color)] transition-colors duration-300"></i>
            <input
              type="text"
              ref={inputEmailRef}
              placeholder="admin@example.com"
              className="w-full bg-[#0e0f12] border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white text-sm placeholder:text-gray-600 
                focus:outline-none focus:border-[var(--primary-color)] focus:shadow-[0_0_20px_rgba(var(--primary-color-rgb),0.2)]
                transition-all duration-300"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="relative group">
          <label className="block text-gray-300 text-sm font-medium mb-2 ml-1">
            Password
          </label>
          <div className="relative">
            <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--primary-color)] transition-colors duration-300"></i>
            <input
              type="password"
              ref={inputPasswordRef}
              placeholder="••••••••"
              className="w-full bg-[#0e0f12] border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white text-sm placeholder:text-gray-600
                focus:outline-none focus:border-[var(--primary-color)] focus:shadow-[0_0_20px_rgba(var(--primary-color-rgb),0.2)]
                transition-all duration-300"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3.5 rounded-xl font-semibold 
              transition-all duration-300 cursor-pointer
              shadow-[0_4px_15px_rgba(var(--primary-color-rgb),0.3)]
              hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)]
              hover:scale-[1.02] active:scale-[0.98]
              relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <i className="ri-login-box-line"></i>
              Log In
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>

          <button
            type="button"
            onClick={props.closeLoginPopup}
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3.5 rounded-xl font-semibold 
              transition-all duration-300 cursor-pointer border border-gray-700 hover:border-gray-600
              hover:scale-[1.02] active:scale-[0.98]"
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
