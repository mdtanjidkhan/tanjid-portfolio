"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

// SVG Icons
const BackArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function ProjectDetailsPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Active gallery image state (Default: Cover image)
  const [activeImage, setActiveImage] = useState(project.coverImage);

  // Combine cover image with gallery for thumbnail preview
  const allImages = [project.coverImage, ...(project.gallery || [])];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="container mx-auto px-4 md:px-8 py-12 max-w-6xl"
    >
      {/* Top Navigation */}
      <motion.div variants={fadeInUp} className="mt-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-base-content/70 hover:text-primary transition-colors group"
        >
          <span className="p-2 rounded-xl bg-base-200 group-hover:-translate-x-1 transition-transform">
            <BackArrowIcon />
          </span>
          Back to Projects
        </Link>
      </motion.div>

      {/* Header Info */}
      <motion.div variants={fadeInUp} className="mb-10 mt-4">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="badge badge-primary font-medium px-3 py-1">
            {project.category}
          </span>
          <span className="badge badge-outline text-xs">
            {project.status}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          {project.title}
        </h1>

        <p className="text-base-content/80 text-lg max-w-3xl leading-relaxed">
          {project.shortDescription}
        </p>
      </motion.div>

      {/* Action Links & Meta Info */}
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 p-6 rounded-2xl border border-base-content/10 bg-base-200/40 backdrop-blur-md"
      >
        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-base-content/10 pb-4 lg:pb-0 lg:pr-4">
          <p className="text-xs font-semibold text-base-content/50 uppercase tracking-wider mb-1">Role</p>
          <p className="font-bold text-base-content">{project.role}</p>
        </div>

        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-base-content/10 pb-4 lg:pb-0 lg:pr-4">
          <p className="text-xs font-semibold text-base-content/50 uppercase tracking-wider mb-1">Team & Duration</p>
          <p className="font-bold text-base-content">{project.team} • {project.duration}</p>
        </div>

        <div className="lg:col-span-2 flex flex-wrap items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm md:btn-md rounded-xl font-semibold gap-2 shadow-md hover:scale-[1.02] transition-transform"
            >
              <ExternalLinkIcon /> Live Preview
            </a>
          )}

          {project.client && (
            <a
              href={project.client}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm md:btn-md rounded-xl font-semibold gap-2 hover:scale-[1.02] transition-transform"
            >
              <GithubIcon /> Client Repo
            </a>
          )}

          {project.server && (
            <a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm md:btn-md rounded-xl font-semibold gap-2 hover:scale-[1.02] transition-transform"
            >
              <GithubIcon /> Server Repo
            </a>
          )}
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="relative h-[280px] sm:h-[420px] md:h-[520px] w-full rounded-2xl overflow-hidden border border-base-content/10 bg-base-300 shadow-xl mb-4">
          <Image
            src={activeImage}
            alt={project.title}
            fill
            priority
            className="object-cover transition-all duration-500"
          />
        </div>

        {/* Gallery Thumbnails */}
        {allImages.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  activeImage === img
                    ? "border-primary scale-105 shadow-md"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left 2 Columns: Overview, Features & Case Study */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold mb-4 border-b border-base-content/10 pb-2">
              Overview
            </h2>
            <p className="text-base-content/80 leading-relaxed text-base md:text-lg">
              {project.description}
            </p>
          </motion.section>

          {/* Key Features */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold mb-6 border-b border-base-content/10 pb-2">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-base-content/5 bg-base-200/30"
                >
                  <CheckIcon />
                  <span className="text-sm font-medium text-base-content/90">{feature}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Challenges & Solutions */}
          {(project.challenges?.length > 0 || project.solutions?.length > 0) && (
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 border-b border-base-content/10 pb-2">
                Engineering Challenges & Solutions
              </h2>

              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl border border-base-content/10 bg-base-200/20"
                  >
                    <div className="mb-3">
                      <span className="text-xs font-bold text-error uppercase tracking-wider">Challenge</span>
                      <p className="text-base font-semibold text-base-content mt-1">{challenge}</p>
                    </div>

                    {project.solutions[index] && (
                      <div className="pt-3 border-t border-base-content/5">
                        <span className="text-xs font-bold text-success uppercase tracking-wider">Solution</span>
                        <p className="text-sm text-base-content/80 mt-1">{project.solutions[index]}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Future Improvements */}
          {project.futureImprovements?.length > 0 && (
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-4 border-b border-base-content/10 pb-2">
                Future Roadmap
              </h2>
              <ul className="list-disc list-inside space-y-2 text-base-content/80 text-sm md:text-base">
                {project.futureImprovements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.section>
          )}
        </div>

        {/* Right 1 Column: Tech Stack Sidebar */}
        <motion.aside variants={fadeInUp} className="space-y-8">
          <div className="p-6 rounded-2xl border border-base-content/10 bg-base-200/30 backdrop-blur-md sticky top-24">
            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-base-content/10">
              Technologies Used
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="badge badge-neutral py-3 px-3.5 text-xs font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.main>
  );
}