
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

// UI Icons
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
  const textLeftToRightProps = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  const cardFloatUpProps = {
    initial: { opacity: 0, y: 60, scale: 0.96 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  const buttonTapProps = {
    whileHover: { scale: 1.03, y: -1 },
    whileTap: { scale: 0.97, y: 0 },
    transition: { type: "spring", stiffness: 400, damping: 20 },
  };

  return (
    <section className="container mx-auto px-4 md:px-8 py-16 relative">
      {/* Header Section */}
      <div className="mb-10 text-center overflow-hidden">
        <motion.h2 
          {...textLeftToRightProps} 
          className="text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          My Recent <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p 
          {...textLeftToRightProps}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} 
          className="text-base-content/70 text-sm max-w-xl mx-auto mt-3 leading-relaxed font-normal"
        >
          A collection of full-stack web applications built with modern
          technologies, focusing on performance and user experience.
        </motion.p>

        <motion.div 
          {...textLeftToRightProps}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-1 bg-gradient-to-r from-primary/80 to-primary mx-auto mt-3 rounded-full shadow-sm" 
        />
      </div>

      {/* Projects Container: Compact Static Grid for 3 Projects */}
      <div className="max-w-6xl mx-auto">
        <motion.div {...cardFloatUpProps} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ 
                y: -6, 
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
              }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-base-content/10 bg-base-200/30 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image Container - Height reduced to h-44 */}
              <div className="relative h-44 w-full overflow-hidden bg-base-300">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-base-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                <span className="absolute top-3 right-3 badge badge-secondary font-semibold shadow-sm px-2.5 py-0.5 text-[10px]">
                  {project.status}
                </span>
              </div>

              {/* Content Area */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                <div>
                  <span className="badge badge-outline badge-primary text-[11px] font-medium mb-2 px-2 py-0.5">
                    {project.category}
                  </span>

                  <h3 className="text-lg font-bold mb-1.5 group-hover:text-primary transition-colors duration-200 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description line-clamp reduced to 2 lines */}
                  <p className="text-base-content/70 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="badge badge-neutral text-[10px] py-1.5 px-2 font-medium cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-1.5 pt-2 border-t border-base-content/5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1"
                  >
                    <motion.button 
                      {...buttonTapProps}
                      className="btn btn-primary btn-xs sm:btn-sm rounded-lg w-full text-[11px] sm:text-xs font-semibold shadow-sm flex items-center justify-center gap-1"
                    >
                      <EyeIcon /> Details
                    </motion.button>
                  </Link>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <motion.button 
                      {...buttonTapProps}
                      className="btn btn-outline btn-xs sm:btn-sm rounded-lg w-full text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1"
                    >
                      <ExternalLinkIcon /> Live
                    </motion.button>
                  </a>

                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <motion.button 
                      {...buttonTapProps}
                      className="btn btn-outline btn-xs sm:btn-sm rounded-lg w-full text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1"
                    >
                      <GithubIcon /> Code
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}