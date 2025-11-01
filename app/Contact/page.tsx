// import {
//   BiPhone,
//   BiEnvelope,
//   BiMap,
//   BiTime,
//   BiMessageDetail,
//   BiGlobe,
// } from "react-icons/bi";

// export default function Contact() {
//   return (
//     <div className="px-[8%] lg:px-[16%] py-15 text-white">
//       <div className="grid lg:grid-cols-2 gap-12 w-full">
//         {/* Contact Form */}
//         <div className="bg-gray-500/5 p-8 rounded-xl shadow-lg">
//           <h2 className="text-2xl font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
//             Contact & Collaboration
//           </h2>
//           <p className="text-sm text-gray-400 mb-8">
//             Open to research collaborations,, PhD supervision and industry
//             partnerships
//           </p>
//           <form className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="FirstName"
//                 className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//               />
//               <input
//                 type="text"
//                 placeholder="LastName"
//                 className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//               />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//               />
//             </div>
//             <textarea
//               rows={5}
//               placeholder="Type your Message here..."
//               className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//         {/* Contact Info */}
//         <div className="flex flex-col space-y-6 justify-center">
//           <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
//             <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
//               <BiPhone size={24} />
//             </span>
//             <div>
//               <p className="text-sm text-gray-400">Phone</p>
//               <p className="font-medium">(+91) 123 456 789</p>
//             </div>
//           </div>
//           <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
//             <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
//               <BiEnvelope size={24} />
//             </span>
//             <div>
//               <p className="text-sm text-gray-400">Email</p>
//               <p className="font-medium">jitu_sikar@nitdelhi.ac.in</p>
//               <p className="font-medium">jitu_smariya@gmail.com</p>
//             </div>
//           </div>
//           <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
//             <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
//               <BiMap size={24} />
//             </span>
//             <div>
//               <p className="text-sm text-gray-400">Office Address</p>
//               <p className="font-medium">Department of CSE/IT IIIT Sonepat Haryana, India</p>
//             </div>
//           </div>
//           {/* <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
//             <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
//               <BiTime size={24} />
//             </span>
//             <div>
//               <p className="text-sm text-gray-400">Working Hours</p>
//               <p className="font-medium">Mon - Fri 9:00 - 18:00</p>
//               <p className="font-medium">Sat - 10:00 - 14:00</p>
//             </div>
//           </div> */}
//           {/* <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
//             <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
//               <BiMessageDetail size={24} />
//             </span>
//             <div>
//               <p className="text-sm text-gray-400">WhatsApp</p>
//               <p className="font-medium">+91 123 456 789</p>
//             </div>
//           </div> */}
//           <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
//             <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
//               <BiGlobe size={24} />
//             </span>
//             <div>
//               <p className="text-sm text-gray-400">Research Interests</p>
//               <p className="font-medium">Cloud Computing, IoT Security, Machine Learning, Blockchain, Energy-aware Computing</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import {
  BiPhone,
  BiEnvelope,
  BiMap,
  BiGlobe,
  BiSend,
  BiUser,
  BiCheckCircle,
} from "react-icons/bi";
import AOS from "aos";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      id: "phone",
      icon: BiPhone,
      title: "Phone",
      content: [
        <a
          key="phone-link"
          href="tel:+91123456789"
          className="font-medium text-white hover:text-[var(--primary-color)] transition-colors duration-300"
        >
          (+91) 123 456 789
        </a>,
      ],
      delay: 0,
    },
    {
      id: "email",
      icon: BiEnvelope,
      title: "Email",
      content: [
        <a
          key="email-1"
          href="mailto:jitu_sikar@nitdelhi.ac.in"
          className="block font-medium text-white hover:text-[var(--primary-color)] transition-colors duration-300 mb-1"
        >
          jitu_sikar@nitdelhi.ac.in
        </a>,
        <a
          key="email-2"
          href="mailto:jitu_smariya@gmail.com"
          className="block font-medium text-white hover:text-[var(--primary-color)] transition-colors duration-300"
        >
          jitu_smariya@gmail.com
        </a>,
      ],
      delay: 100,
    },
    {
      id: "address",
      icon: BiMap,
      title: "Office Address",
      content: [
        <p
          key="address-text"
          className="font-medium text-white leading-relaxed"
        >
          Department of CSE/IT
          <br />
          IIIT Sonepat
          <br />
          Haryana, India
        </p>,
      ],
      delay: 200,
    },
    {
      id: "research",
      icon: BiGlobe,
      title: "Research Interests",
      content: [
        <div key="tags" className="flex flex-wrap gap-2">
          {[
            "Cloud Computing",
            "IoT Security",
            "Machine Learning",
            "Blockchain",
            "Energy-aware Computing",
          ].map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-gray-800/80 border border-gray-700 rounded-full text-xs font-medium text-gray-300 hover:bg-[var(--primary-color)]/20 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] hover:scale-105 transition-all duration-300 cursor-default animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {interest}
            </span>
          ))}
        </div>,
      ],
      delay: 300,
    },
  ];

  return (
    <div className="min-h-screen px-[8%] lg:px-[16%] py-20 text-white">
      {/* Header Section */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-5xl font-unbounded font-bold bg-gradient-to-r from-[var(--primary-color)] via-orange-400 to-[var(--primary-color)] bg-clip-text text-transparent mb-4 animate-gradient">
          Get In Touch
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Open to research collaborations, PhD supervision, and industry
          partnerships. Let's discuss how we can work together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 w-full">
        {/* Contact Form */}
        <div
          className="group relative"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {/* Animated glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary-color)]/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 animate-pulse-slow" />

          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-[var(--primary-color)]/50 transition-all duration-500">
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <div
                className="absolute w-2 h-2 bg-[var(--primary-color)]/30 rounded-full animate-float"
                style={{ top: "10%", left: "20%", animationDelay: "0s" }}
              />
              <div
                className="absolute w-2 h-2 bg-orange-500/30 rounded-full animate-float"
                style={{ top: "60%", left: "80%", animationDelay: "2s" }}
              />
              <div
                className="absolute w-2 h-2 bg-[var(--primary-color)]/30 rounded-full animate-float"
                style={{ top: "80%", left: "30%", animationDelay: "4s" }}
              />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <BiSend
                  className="text-[var(--primary-color)] group-hover:translate-x-1 transition-transform duration-300"
                  size={24}
                />
              </div>
              <div>
                <h2 className="text-2xl font-unbounded font-semibold text-white">
                  Send a Message
                </h2>
                <p className="text-sm text-gray-400">Fill out the form below</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group/input">
                  <BiUser
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      focusedField === "firstName"
                        ? "text-[var(--primary-color)] scale-110"
                        : "text-gray-400"
                    }`}
                    size={20}
                  />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("firstName")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="First Name"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary-color)]/50 focus:ring-2 focus:ring-[var(--primary-color)]/20 focus:scale-[1.02] transition-all duration-300"
                  />
                </div>
                <div className="relative group/input">
                  <BiUser
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      focusedField === "lastName"
                        ? "text-[var(--primary-color)] scale-110"
                        : "text-gray-400"
                    }`}
                    size={20}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("lastName")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Last Name"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary-color)]/50 focus:ring-2 focus:ring-[var(--primary-color)]/20 focus:scale-[1.02] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group/input">
                  <BiEnvelope
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      focusedField === "email"
                        ? "text-[var(--primary-color)] scale-110"
                        : "text-gray-400"
                    }`}
                    size={20}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Email Address"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary-color)]/50 focus:ring-2 focus:ring-[var(--primary-color)]/20 focus:scale-[1.02] transition-all duration-300"
                  />
                </div>
                <div className="relative group/input">
                  <BiPhone
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      focusedField === "phone"
                        ? "text-[var(--primary-color)] scale-110"
                        : "text-gray-400"
                    }`}
                    size={20}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Phone Number"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary-color)]/50 focus:ring-2 focus:ring-[var(--primary-color)]/20 focus:scale-[1.02] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative group/input">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  placeholder="Type your message here..."
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary-color)]/50 focus:ring-2 focus:ring-[var(--primary-color)]/20 focus:scale-[1.02] transition-all duration-300 resize-none"
                ></textarea>
                {focusedField === "message" && (
                  <div className="absolute bottom-4 right-4 text-xs text-gray-500 animate-fadeIn">
                    {formData.message.length} characters
                  </div>
                )}
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-400 text-sm flex items-center gap-2 animate-slideIn">
                  <BiCheckCircle
                    className="text-green-400 animate-bounce"
                    size={20}
                  />
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group/btn relative w-full px-6 py-4 bg-gradient-to-r from-[var(--primary-color)] to-orange-500 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(252,65,0,0.6)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <BiSend
                        size={20}
                        className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300"
                      />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />

                {/* Ripple effect */}
                {!isSubmitting && (
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:animate-ripple" />
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-6">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative"
                data-aos="fade-left"
                data-aos-delay={item.delay}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r from-[var(--primary-color)]/10 to-orange-500/10 rounded-2xl blur-xl transition-all duration-500 ${
                    hoveredCard === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`relative flex items-start space-x-4 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 transition-all duration-500 ${
                    hoveredCard === item.id
                      ? "border-[var(--primary-color)]/50 scale-[1.02] shadow-[0_0_30px_rgba(252,65,0,0.2)]"
                      : ""
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-14 h-14 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      hoveredCard === item.id ? "scale-110 rotate-12" : ""
                    }`}
                  >
                    <Icon
                      className={`text-[var(--primary-color)] transition-transform duration-300 ${
                        hoveredCard === item.id ? "animate-pulse" : ""
                      }`}
                      size={24}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-2">{item.title}</p>
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.5;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
