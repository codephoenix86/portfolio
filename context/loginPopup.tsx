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
          <div className="absolute inset-0 bg-black/50"></div>
          <Login
            class="w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            closeLoginPopup={() => setLoginPopupOpened(false)}
          />
        </>
      )}
    </LoginPopupContext.Provider>
  );
};

function Login(props) {
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const { isLoggedIn, setLoggedIn } = useContext(LoginContext);
  return (
    <div className={`bg-black p-8 rounded-xl shadow-lg ${props.class}`}>
      <h2 className="text-2xl text-center font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
        Admin Login
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (
            process.env.NEXT_PUBLIC_EMAIL === inputEmailRef.current.value &&
            process.env.NEXT_PUBLIC_PASSWORD === inputPasswordRef.current.value
          )
          {
            setLoggedIn(true);
            props.closeLoginPopup()
          }
        }}
        className={`space-y-6`}
      >
        <div className="">
          <input
            type="text"
            ref={inputEmailRef}
            placeholder="enter your email"
            className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
          />
        </div>
        <div className="">
          <input
            type="password"
            ref={inputPasswordRef}
            placeholder="enter your password"
            className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
          >
            Log In
          </button>
          <button
            type="submit"
            onClick={props.closeLoginPopup}
            className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
