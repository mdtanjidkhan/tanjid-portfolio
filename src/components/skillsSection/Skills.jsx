
"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

// --- Framer Motion Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// --- Icon Idle Animation Props ---
const getIconAnimationProps = (animType) => {
  switch (animType) {
    case "spin":
      return {
        animate: { rotate: 360 },
        transition: { repeat: Infinity, duration: 14, ease: "linear" },
      };
    case "pulse":
      return {
        animate: { scale: [1, 1.12, 1] },
        transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
      };
    case "bounce":
      return {
        animate: { y: [0, -5, 0] },
        transition: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
      };
    case "float":
      return {
        animate: { y: [0, -4, 0] },
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
      };
    default:
      return {};
  }
};

export default function Skills() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      className="relative py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Subtle Aurora Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[600px] h-[250px] sm:h-[350px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Heading Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-base-content">
          Technical <span className="text-primary">Skills</span> & Expertise
        </h2>
        <p className="mt-4 text-base-content/70 text-sm sm:text-base md:text-lg leading-relaxed">
          A specialized toolkit focused on building modern, high-performance, and scalable web applications.
        </p>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      {/* Balanced 2-Column Grid */}
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-2xl p-[1px] bg-base-300/60 hover:bg-gradient-to-br hover:from-primary/40 hover:via-secondary/20 hover:to-transparent transition-all duration-500 shadow-md hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
          >
            {/* Glassmorphism Inner Card */}
            <div className="w-full h-full rounded-2xl bg-base-100/70 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-start border border-base-300/50 group-hover:border-primary/30 transition-colors duration-300">
              
              {/* Category Header */}
              <div className="mb-6 border-b border-base-300/60 pb-3 flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-base-content group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <span className="badge badge-primary badge-outline text-xs px-2.5 py-1 font-semibold">
                  {category.skills.length} Techs
                </span>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  const iconAnimProps = getIconAnimationProps(skill.animType);

                  return (
                    <div key={skill.name} className="flex flex-col gap-2">
                      {/* Skill Info Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {/* Icon Container */}
                          <motion.div
                            {...iconAnimProps}
                            whileHover={
                              skill.animType === "nextRotate" || skill.animType === "githubRotate"
                                ? { rotate: 20, scale: 1.2 }
                                : { scale: 1.2 }
                            }
                            transition={{ duration: 0.2 }}
                            className="p-2 rounded-xl bg-base-200 text-primary border border-base-300 shadow-inner group-hover:border-primary/40 transition-colors"
                          >
                            <IconComponent className="text-xl sm:text-2xl" />
                          </motion.div>

                          {/* Skill Name */}
                          <span className="font-semibold text-sm sm:text-base text-base-content">
                            {skill.name}
                          </span>
                        </div>

                        {/* Experience Level Badge */}
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-base-200 text-base-content/70 border border-base-300">
                          {skill.level}
                        </span>
                      </div>

                      {/* Animated Visual Progress Bar */}
                      <div 
                        className="h-1.5 w-full rounded-full bg-base-200 overflow-hidden"
                        role="progressbar"
                        aria-label={`${skill.name} proficiency`}
                        aria-valuenow={skill.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.progress}%` }}
                          viewport={{ once: false }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

// import React from "react";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
//   FaKey,
//   FaLock,
//   FaGlobe,
// } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiTailwindcss,
//   SiDaisyui,
//   SiExpress,
//   SiMongodb,
//   SiMongoose,
//   SiPostman,
//   SiStripe,
//   SiVercel,
//   SiNetlify,
//   SiTypescript,
// } from "react-icons/si";

// const skillCategories = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "HTML5", icon: FaHtml5 },
//       { name: "CSS3", icon: FaCss3Alt },
//       { name: "JavaScript", icon: FaJs },
//       { name: "React", icon: FaReact },
//       { name: "Next.js", icon: SiNextdotjs },
//       { name: "Tailwind CSS", icon: SiTailwindcss },
//       { name: "DaisyUI", icon: SiDaisyui },
//     ],
//   },
//   {
//     title: "Backend & Database",
//     skills: [
//       { name: "Node.js", icon: FaNodeJs },
//       { name: "Express.js", icon: SiExpress },
//       { name: "REST API", icon: FaGlobe },
//       { name: "JWT", icon: FaKey },
//       { name: "Better Auth", icon: FaLock },
//       { name: "MongoDB", icon: SiMongodb },
//       { name: "Mongoose", icon: SiMongoose },
//     ],
//   },
//   {
//     title: "Tools & Services",
//     skills: [
//       { name: "Git", icon: FaGitAlt },
//       { name: "GitHub", icon: FaGithub },
//       { name: "Postman", icon: SiPostman },
//       { name: "Stripe", icon: SiStripe },
//       { name: "Vercel", icon: SiVercel },
//       { name: "Netlify", icon: SiNetlify },
//     ],
//   },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="py-8 md:py-12">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header - Fixed light text issue */}
//         <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
//           <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
//             Skills
//           </h2>
//           <p className="mt-1.5 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
//             Technologies and tools I use to build modern web applications.
//           </p>
//         </div>

//         {/* Grid Container */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
//           {skillCategories.map((category) => (
//             <div
//               key={category.title}
//               className="p-4 rounded-xl bg-neutral-100/60 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800"
//             >
//               <h3 className="text-sm font-semibold mb-3 text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-800 pb-2">
//                 {category.title}
//               </h3>

//               {/* Items Grid */}
//               <div className="grid grid-cols-2 gap-2">
//                 {category.skills.map((skill) => {
//                   const Icon = skill.icon;
//                   return (
//                     <div
//                       key={skill.name}
//                       tabIndex={0}
//                       className="group flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/60 text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-500 hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5"
//                     >
//                       <Icon
//                         aria-hidden="true"
//                         className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:scale-110 group-hover:text-neutral-900 dark:group-hover:text-white transition-transform duration-200 shrink-0"
//                       />
//                       <span className="text-xs font-medium truncate">
//                         {skill.name}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Learning Badge */}
//         <div className="mt-6 md:mt-8 text-center">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//             </span>
//             <span>Currently learning</span>
//             <span className="text-neutral-300 dark:text-neutral-600">•</span>
//             <span className="inline-flex items-center gap-1 text-neutral-900 dark:text-white font-semibold">
//               <SiTypescript aria-hidden="true" className="w-3.5 h-3.5 text-[#3178C6]" />
//               TypeScript
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



