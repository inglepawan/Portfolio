import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Frontend Development",
    description:
      "I build responsive, high-performance web interfaces using React.js, Tailwind CSS, and modular JavaScript. My focus is on clean architecture, mobile-first design, and scalable components tailored for real-world use.",
  },
  {
    title: "UI/UX Design",
    description:
      "I craft intuitive and accessible user interfaces that deliver seamless user experiences. With attention to usability, responsiveness, and accessibility (WCAG), I ensure your users stay engaged and satisfied.",
  },
  {
    title: "API Integration",
    description:
      "I integrate REST APIs efficiently and securely into React apps to fetch and manage dynamic data. Whether it's handling authentication, error states, or transforming responses, I ensure data-driven UI flows smoothly.",
  },
  {
    title: "Personal & Brand Portfolios",
    description:
      "I design and develop modern, eye-catching portfolio websites for individuals and brands to showcase their work. Fully responsive, fast-loading, and SEO-optimized — your online presence will stand out.",
  },
  {
    title: "Landing Pages & Marketing Sites",
    description:
      "I create fast, conversion-focused landing pages optimized for performance and SEO. Whether for a product launch or personal brand, my pages engage visitors and boost conversions.",
  },
  {
    title: "Code Review & Optimization",
    description:
      "I audit existing codebases to improve performance, maintainability, and accessibility. From lazy-loading to refactoring and bundle optimization — I help speed up and clean up frontend applications.",
  },
];

export default function Services() {
  return (
    <section
    id="services"
      className="w-full min-h-screen py-20 px-6 md:px-20 text-white bg-transparent"
      
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-bold text-stone-200 mb-16"
      >
        What I Can Do for You
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-stone-800/40 border border-stone-700 p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-stone-100 mb-3">
              {service.title}
            </h3>
            <p className="text-stone-300 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
