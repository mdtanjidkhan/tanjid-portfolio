

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



