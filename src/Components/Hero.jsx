import React, { useState, useEffect, useRef } from 'react';
import Profile from "../assets/Pawan.jpg";
import { HERO_CONTENT } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={containerVariants}
    >
      <div className="flex flex-wrap lg:flex-row-reverse pt-12">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={Profile}
              alt="Pawan Ingle"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2 variants={childVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Pawan Ingle
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              FrontEnd Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <div className="flex gap-4">
              <motion.a
                variants={childVariants}
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white rounded-full p-4 text-sm text-stone-800"
              >
                Download Resume
              </motion.a>

              <motion.button
                variants={childVariants}
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white rounded-full p-4 text-sm hover:bg-zinc-800 transition"
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="relative w-full max-w-xl bg-zinc-900 text-white p-2 rounded-xl shadow-xl border border-zinc-700 scale-90"
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
            >
              {/*Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-4 text-5xl text-zinc-400 hover:text-red-500 cursor-pointer transition font-bold"
              >
                &times;
              </button>

              <div className="scale-90 max-h-135">
                <ContactForm variant="modal" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Hero;