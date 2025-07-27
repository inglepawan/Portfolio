import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  "React.js & Advanced Patterns",
  "Modern JavaScript", 
  "Modern CSS (Tailwind)",
  "State Management (Redux)",
  "API Integration & Error Handling",
  "Responsive Design & Mobile-First",
  "Performance Optimization",
  "UI Libraries & Bootstrap",
  "Version Control (Git)",
];

const Skills = () => {
  return (
    <div 
    id="skills"
    className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="group bg-stone-900/20 border border-stone-800 p-6 rounded-2xl hover:border-stone-700 transition-all duration-300 hover:shadow-lg text-center"
          >
            <motion.h3 
              className="text-xl font-semibold text-stone-100 group-hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {skill}
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;