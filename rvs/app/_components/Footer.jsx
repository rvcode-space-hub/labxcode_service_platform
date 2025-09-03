"use client"
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="relative overflow-hidden bg-emerald-400 text-white">
      {/* Animated Wave panding  */}


      <h2 className="text-3xl font-bold pt-7 text-black text-center">Contant</h2> 
      
      {/* Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 py-12 px-4"
      >
        {/* Left */}
        <div className="md:w-1/2 space-y-4">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="p-3 rounded-lg text-black"
            />
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded-lg text-black"
            />
            <textarea
              placeholder="Your message"
              className="p-3 rounded-lg text-black h-28"
            ></textarea>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/3 h-90 bg-[#4E4562] p-6 rounded-lg space-y-4"
        >
          <h3 className="text-2xl font-semibold">Contact Info</h3>
          <p className="text-xl ">📍  504, Space Time Mangement Savitri Cinema Complex NEW DELHI-110048</p>
          <p className="text-xl ">📞 +91 9871585013</p>
          <p className="text-xl ">infowebservices2024@gmail.com</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Footer;
