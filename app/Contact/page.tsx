import {
  BiPhone,
  BiEnvelope,
  BiMap,
  BiTime,
  BiMessageDetail,
  BiGlobe,
} from "react-icons/bi";

export default function Contact() {
  return (
    <div className="px-[8%] lg:px-[16%] py-15 text-white">
      <div className="grid lg:grid-cols-2 gap-12 w-full">
        {/* Contact Form */}
        <div className="bg-gray-500/5 p-8 rounded-xl shadow-lg">
          <h2 className="text-5xl font-unbounded font-normal text-[color:var(--primary-color)] mb-4">
            Let's Work Together
          </h2>
          <p className="text-sm text-gray-400 my-8">
            Lorem ipsum dolor sit amet.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="FirstName"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
              />
              <input
                type="text"
                placeholder="LastName"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
              />
            </div>
            <select className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500 appearance-none">
              <option>Select a Service</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>SEO Optimazation</option>
            </select>
            <textarea
              rows={5}
              placeholder="Type your Message here..."
              className="w-full bg-[#0e0f12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--primary-color)] transition-all duration-500"
            ></textarea>
            <button
              type="submit"
              className="bg-[var(--primary-color)] hover:bg-white text-white hover:text-black px-6 py-3 mt-5 rounded-lg font-semibold transition-all duration-500 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col space-y-6 justify-center">
          <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
            <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
              <BiPhone size={24} />
            </span>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-medium">(+91) 123 456 789</p>
            </div>
          </div>
          <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
            <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
              <BiEnvelope size={24} />
            </span>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">tyler.example@gmail.com</p>
            </div>
          </div>
          <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
            <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
              <BiMap size={24} />
            </span>
            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p className="font-medium">Code Corner, Tech Town 13579</p>
            </div>
          </div>
          <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
            <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
              <BiTime size={24} />
            </span>
            <div>
              <p className="text-sm text-gray-400">Working Hours</p>
              <p className="font-medium">Mon - Fri 9:00 - 18:00</p>
              <p className="font-medium">Sat - 10:00 - 14:00</p>
            </div>
          </div>
          <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
            <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
              <BiMessageDetail size={24} />
            </span>
            <div>
              <p className="text-sm text-gray-400">WhatsApp</p>
              <p className="font-medium">+91 123 456 789</p>
            </div>
          </div>
          <div className="contact-col flex items-center space-x-4 border-b border-gray-600 pb-5">
            <span className="bg-[#1a1b1f] p-4 border border-[var(--primary-color)] rounded-lg text-[color:var(--primary-color)]">
              <BiGlobe size={24} />
            </span>
            <div>
              <p className="text-sm text-gray-400">Website</p>
              <p className="font-medium">www.yourwebsite.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
