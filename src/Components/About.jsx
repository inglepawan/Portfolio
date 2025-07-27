import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="w-full flex items-center justify-center py-24 px-6 md:px-20 text-white"
        >
            <div className="max-w-5xl w-full">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-5xl font-bold text-stone-200 mb-12"
                >
                    About Me
                </motion.h2>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                    className="text-xl leading-loose text-stone-300 p-1"
                >
                    <p>
                        I'm a <span className="text-stone-100 font-bold text-xl">Frontend Developer</span> skilled in <span className="text-stone-100 font-bold text-xl">React.js</span>, <span className="text-stone-100 font-bold text-xl">Tailwind CSS</span>, <span className="text-stone-100 font-bold text-xl">Modern JavaScript</span>, and <span className="text-stone-100 font-bold text-xl">Modern UI libraries</span> and more. I've built and deployed <span className="text-stone-100 font-bold text-xl">9+ real-world projects</span> focused on performance, accessibility, and scalability.
                    </p>

                    <p className="mt-6">
                        My prior experience in <span className="text-stone-100 font-bold text-xl">customer support and QA</span> has enhanced my problem-solving, communication, and user-first thinking. This background helps me build interfaces that aren't just beautiful—but functional and intuitive.
                    </p>

                    <p className="mt-6">
                        I'm currently pursuing an <span className="text-stone-100 font-bold text-xl">MCA in Full Stack Development</span> from Chandigarh University to deepen my backend and architectural knowledge.
                    </p>

                    <p className="mt-6">
                        🚀 <span className="text-stone-100 font-bold text-xl">Open to freelance and full-time opportunities</span> where I can contribute to real-world products and scalable frontend systems.
                    </p>

                    {/* Centered motion buttons */}
                    <div className="mt-10 flex justify-center gap-6 flex-wrap">
                        <motion.a
                            href="https://github.com/inglepawan"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white text-stone-800 text-sm font-semibold px-6 py-3 rounded-full hover:bg-stone-200 transition"
                            aria-label="Visit my GitHub"
                        >
                            GitHub
                        </motion.a>
                        <motion.a
                            href="https://in.linkedin.com/in/pawan-ingle-732357243"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white text-stone-800 text-sm font-semibold px-6 py-3 rounded-full hover:bg-stone-200 transition"
                            aria-label="Visit my LinkedIn"
                        >
                            LinkedIn
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}