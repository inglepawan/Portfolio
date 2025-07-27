  import React from 'react';
  import { RiReactjsLine } from 'react-icons/ri';
  import { SiTailwindcss, SiJavascript, SiRedux } from 'react-icons/si';
  import { FiUploadCloud } from 'react-icons/fi';
  import { motion } from 'framer-motion';

  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  });

  const Technologies = () => {
    return (
      <div
      id="technologies"
        className="">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="pt-20 flex flex-wrap items-center justify-center gap-6"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <SiTailwindcss className="text-7xl text-sky-400" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4"
          >
            <SiJavascript className="text-7xl text-yellow-400" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <SiRedux className="text-7xl text-purple-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
            className="p-4"
          >
            <FiUploadCloud className="text-7xl text-indigo-300" />
          </motion.div>
        </motion.div>
      </div>
    );
  };

  export default Technologies;
