import React, { useState } from "react";
import { GrSend } from "react-icons/gr";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen bg-[#E4D2BA] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-[#FF9F39]">
            Get in Touch
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We'd love to hear from you!
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-none bg-[#EFE3D3] relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#FF9F39] focus:border-[#FF9F39] focus:z-10 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none bg-[#EFE3D3] relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#FF9F39] focus:border-[#FF9F39] focus:z-10 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="appearance-none rounded-none bg-[#EFE3D3] relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#FF9F39] focus:border-[#FF9F39] focus:z-10 sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#FFB53A] to-[#FF9C39] hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F39]"
            >
              Send Message <GrSend className="mt-1 ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
