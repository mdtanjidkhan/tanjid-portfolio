"use client"
import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 md:py-16 flex flex-col items-center text-center">
      <motion.div initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10">
        
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
      
      </motion.div>

      {/*  */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} // 
        viewport={{ once: true, amount: 0.2 }} // 
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
        className="max-w-3xl mx-auto bg-base-200/50 backdrop-blur-md border border-base-content/10 p-6 sm:p-10 rounded-3xl shadow-xl space-y-6 text-base-content/80 text-base sm:text-lg md:text-xl leading-relaxed text-center"
      >
       <p>
          Hello! I'm <span className="text-primary font-semibold">Tanjid Hasan</span>,
          a passionate Full-Stack Web Developer and Diploma Engineering student in
          Electrical Technology.
        </p>
        <p> I specialize in modern technologies like
          <span className="text-secondary font-medium"> JavaScript, React, Next.js, and Tailwind CSS</span>, building responsive and user-friendly web applications with clean UI and smooth user experience.
        </p>
        <p>
          I enjoy learning new technologies, solving real-world problems, and creating
          scalable web solutions that combine performance with beautiful design.
        </p>

      </motion.div>

    </div>


  );
};

export default About;