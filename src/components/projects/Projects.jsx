"use client";
import Link from 'next/link';
import React from 'react';

export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: "Book Borrowing Platform",
      description: "A robust full-stack platform featuring real-time stock tracking, secure user auth, and user specific history management.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop", // 
      liveLink: "https://online-book-borrowing-platform-b13.vercel.app/",
      githubLink: "https://github.com/mdtanjidkhan/Online-Book-Borrowing-Platform-B13",
    },
    {
      id: 2,
      title: "KinKeeper App",
      description: "A premium family connectivity and memory-keeping Next.js web application built with optimized server components.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop", // 
      isProgress: true,
      liveLink: "https://keep-in-touch-tawny.vercel.app/",
      githubLink: "https://github.com/mdtanjidkhan/keep-in-touch",
    },
    {
      id: 3,
      title: "Tanjid.dev Portfolio",
      description: "My personal developer portfolio built with React, daisyUI, features fluid theme switching and infinite marquees.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", // 
      liveLink: "#",
      githubLink: "#",
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-16">

      {/*  */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          My Recent <span className="text-primary">Projects</span>
        </h2>
        <p className="text-base-content/60 text-sm sm:text-base max-w-md mx-auto mt-3 leading-relaxed">
          A showcase of my recent full-stack development journey, featuring real-world applications and modern tech stacks.
        </p>
        <div className="w-16 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
      </div>

      {/* */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projectList.slice(0,2).map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between bg-base-200/40 backdrop-blur-md border border-base-content/10 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 group"
          >
            {/* */}
            <div className="relative h-48 w-full overflow-hidden bg-base-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* */}
              {project.isProgress && (
                <span className="absolute top-3 right-3 badge badge-secondary font-semibold text-xs py-2 px-2.5 shadow-md">
                  ⏳ In Progress
                </span>
              )}
            </div>

            {/**/}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                {/*  */}
                <h3 className="text-xl font-bold text-base-content mb-2 tracking-wide group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* ) */}
                <p className="text-base-content/70 text-sm sm:text-base leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <a
                  href={project.liveLink}
                  className="btn btn-primary btn-sm rounded-xl normal-case font-semibold shadow-md flex items-center justify-center text-xs sm:text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  <span>Live Demo</span>
                </a>
                <Link
                  href={project.githubLink}
                  className="btn btn-outline btn-sm rounded-xl normal-case font-medium flex items-center justify-center text-xs sm:text-sm hover:bg-base-content hover:text-base-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span>GitHub Code</span>
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}