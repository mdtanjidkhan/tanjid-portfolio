"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

// UI Icons
const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        if (window.innerWidth < 1024) {
          setVisibleCount(2);
        } else {
          setVisibleCount(3);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setDirection("right");
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection("left");
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const visibleProjects = isMobile
    ? projects
    : projects.slice(currentIndex, currentIndex + visibleCount);

  // Framer Motion Variants for Smooth Rise Up Animation
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageRiseVariants = {
    hidden: { opacity: 0, y: 20, scale: 1.05 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (dir) => ({
      x: dir === "right" ? -50 : 50,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }}
      variants={containerVariants}
      className="container mx-auto px-4 md:px-8 py-20 relative"
    >
      {/* Section Heading */}
      <motion.div variants={cardVariants} className="mb-14 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          My Recent <span className="text-primary">Projects</span>
        </h2>

        <p className="text-base-content/70 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          A collection of full-stack web applications built with modern
          technologies, focusing on performance, user experience, and scalable
          architecture.
        </p>

        <div className="w-20 h-1.5 bg-gradient-to-r from-primary/80 to-primary mx-auto mt-4 rounded-full shadow-sm" />
      </motion.div>

      {/* Projects Container */}
      <div className="max-w-7xl mx-auto min-h-[540px] flex flex-col justify-between">
        {/* Mobile: 1 Column Vertical List */}
        {isMobile ? (
          <div className="grid grid-cols-1 gap-8">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-base-content/10 bg-base-200/30 backdrop-blur-md shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl"
              >
                {/* Image Area with Rise Up Effect */}
                <div className="relative h-56 w-full overflow-hidden bg-base-300">
                  <motion.div
                    variants={imageRiseVariants}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-base-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <span className="absolute top-4 right-4 badge badge-secondary font-semibold shadow-md px-3 py-1 text-xs">
                    {project.status}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="badge badge-outline badge-primary text-xs font-medium mb-3 px-2.5 py-1">
                      {project.category}
                    </span>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-base-content/70 text-sm leading-relaxed line-clamp-3 mb-5">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="badge badge-neutral text-[11px] py-2 px-2.5 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons with Icons */}
                  <div className="flex items-center gap-2 pt-2 border-t border-base-content/5">
                    <Link href={`/projects/${project.slug}`} className="flex-1">
                      <button className="btn btn-primary btn-sm rounded-xl w-full text-xs font-semibold shadow-sm flex items-center justify-center gap-1.5">
                        <EyeIcon /> Details
                      </button>
                    </Link>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="btn btn-outline btn-sm rounded-xl w-full text-xs font-semibold flex items-center justify-center gap-1.5">
                        <ExternalLinkIcon /> Live
                      </button>
                    </a>

                    <a
                      href={project.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="btn btn-outline btn-sm rounded-xl w-full text-xs font-semibold flex items-center justify-center gap-1.5">
                        <GithubIcon /> Code
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Desktop/Tablet Slider */
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-base-content/10 bg-base-200/30 backdrop-blur-md shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
                >
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-base-300">
                    <motion.div
                      variants={imageRiseVariants}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-base-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <span className="absolute top-4 right-4 badge badge-secondary font-semibold shadow-md px-3 py-1 text-xs">
                      {project.status}
                    </span>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="badge badge-outline badge-primary text-xs font-medium mb-3 px-2.5 py-1">
                        {project.category}
                      </span>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-base-content/70 text-sm leading-relaxed line-clamp-3 mb-5">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="badge badge-neutral text-[11px] py-2 px-2.5 font-medium transition-transform duration-200 hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons with Icons */}
                    <div className="flex items-center gap-2 pt-2 border-t border-base-content/5">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex-1"
                      >
                        <button className="btn btn-primary btn-sm rounded-xl w-full text-xs font-semibold shadow-sm transition-all duration-200 hover:shadow-md hover:shadow-primary/20 hover:scale-[1.02] flex items-center justify-center gap-1.5">
                          <EyeIcon /> Details
                        </button>
                      </Link>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button className="btn btn-outline btn-sm rounded-xl w-full text-xs font-semibold transition-all duration-200 hover:bg-primary hover:border-primary hover:text-primary-content hover:scale-[1.02] flex items-center justify-center gap-1.5">
                          <ExternalLinkIcon /> Live
                        </button>
                      </a>

                      <a
                        href={project.client}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button className="btn btn-outline btn-sm rounded-xl w-full text-xs font-semibold transition-all duration-200 hover:bg-base-content hover:text-base-100 hover:scale-[1.02] flex items-center justify-center gap-1.5">
                          <GithubIcon /> Code
                        </button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Navigation Controls */}
        {!isMobile && (
          <motion.div
            variants={cardVariants}
            className="mt-12 flex items-center justify-between gap-6 px-2 border-t border-base-content/10 pt-6"
          >
            {/* Page Counter */}
            <div className="text-sm font-mono tracking-wider text-base-content/70">
              <span className="text-primary font-bold text-lg">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>{" "}
              / {String(projects.length).padStart(2, "0")}
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] sm:max-w-none py-1">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? "right" : "left");
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-base-content/20 hover:bg-base-content/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous Project"
                className="btn btn-circle btn-outline btn-sm hover:btn-primary disabled:opacity-30 transition-all duration-200"
              >
                <ArrowLeftIcon />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next Project"
                className="btn btn-circle btn-outline btn-sm hover:btn-primary disabled:opacity-30 transition-all duration-200"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}