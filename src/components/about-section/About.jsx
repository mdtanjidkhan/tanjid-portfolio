
// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// const stats = [
//   {
//     value: 4,
//     suffix: "+",
//     label: "Projects Built",
//     description: "Hands-on project experience",
//   },
//   {
//     value: 10,
//     suffix: "+",
//     label: "Technologies",
//     description: "Tools and technologies explored",
//   },
//   {
//     value: 3,
//     suffix: "",
//     label: "Development Areas",
//     description: "Frontend, backend and database",
//   },
//   {
//     value: null,
//     suffix: "",
//     label: "Always Learning",
//     description: "Improving through hands-on practice",
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 25 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// export default function About() {
//   const [activeStat, setActiveStat] = useState(null);

//   return (
//     <section id="about" className="mt-16">
//       <div className="mx-auto max-w-6xl">
//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="mb-12 text-center"
//         >
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
//             Get to know me
//           </p>

//           <h2 className="text-3xl font-bold text-base-content sm:text-4xl">
//             About <span className="text-primary">Me</span>
//           </h2>

//           <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
//         </motion.div>

//         {/* About Description */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto mb-12 max-w-3xl"
//         >
//           <p className="text-center text-base leading-8 text-base-content/70 sm:text-lg">
//             I'm{" "}
//             <span className="font-semibold text-base-content">
//               Md. Tanjid Khan
//             </span>
//             , a Full-Stack JavaScript Developer passionate about building
//             modern, responsive, and user-friendly web applications. I specialize
//             in{" "}
//             <span className="font-medium text-primary">
//               React, Next.js, Node.js, Express.js, and MongoDB
//             </span>
//             , with hands-on experience developing full-stack applications, REST
//             APIs, and authentication systems. I focus on writing clean,
//             maintainable code, solving practical problems, and creating
//             seamless user experiences while continuously improving my skills.
//           </p>
//         </motion.div>

//         {/* Stats Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
//         >
//           {stats.map((stat, index) => (
//             <motion.button
//               key={stat.label}
//               type="button"
//               variants={cardVariants}
//               whileHover={{ y: -6 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() =>
//                 setActiveStat(activeStat === index ? null : index)
//               }
//               aria-pressed={activeStat === index}
//               className={`group rounded-2xl border p-6 text-center transition-all duration-300 ${
//                 activeStat === index
//                   ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
//                   : "border-base-300 bg-base-100 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5"
//               }`}
//             >
//               <div className="mb-3 text-3xl font-bold text-primary sm:text-4xl">
//                 {stat.value !== null ? (
//                   <CountUp
//                     end={stat.value}
//                     duration={1.8}
//                     suffix={stat.suffix}
//                     enableScrollSpy
//                     scrollSpyOnce
//                   />
//                 ) : (
//                   <span className="text-2xl sm:text-3xl">Always</span>
//                 )}
//               </div>

//               <h3 className="mb-2 text-base font-semibold text-base-content sm:text-lg">
//                 {stat.label}
//               </h3>

//               <p className="text-sm leading-6 text-base-content/60">
//                 {stat.description}
//               </p>

//               <div
//                 className={`mx-auto mt-4 h-1 rounded-full bg-primary transition-all duration-300 ${
//                   activeStat === index
//                     ? "w-16"
//                     : "w-8 group-hover:w-16"
//                 }`}
//               />
//             </motion.button>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaLayerGroup,
  FaArrowRight,
} from "react-icons/fa";

const highlights = [
  {
    icon: FaLaptopCode,
    title: "Full-Stack Development",
    description:
      "Building responsive web applications with modern frontend and backend technologies.",
  },
  {
    icon: FaCode,
    title: "Clean & Maintainable Code",
    description:
      "Focusing on reusable components, structured code, and practical problem-solving.",
  },
  {
    icon: FaLayerGroup,
    title: "Real-World Projects",
    description:
      "Developing applications involving authentication, APIs, databases, and AI features.",
  },
];

const facts = [
  { value: "4+", label: "Projects Built" },
  { value: "10+", label: "Technologies Used" },
  { value: "3", label: "Core Development Areas" },
  { value: "TS", label: "Currently Learning TypeScript" },
];

export default function About() {
  return (
    <section
      id="about"
      className="pt-16 sm:pt-20 lg:pt-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-primary" />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h3 className="mb-5 text-xl font-semibold text-base-content sm:text-2xl">
            Building ideas into useful digital experiences.
          </h3>

             <p className="mx-auto max-w-2xl px-2 text-center text-sm leading-7 text-base-content/70 sm:px-0 sm:text-base sm:leading-8">
  I'm a Full-Stack JavaScript Developer passionate about
  building modern web applications. I work with{" "}
  <span className="font-medium text-primary">
    React, Next.js, Node.js, and MongoDB
  </span>{" "}
  to create practical digital solutions with clean code
  and great user experiences.
</p>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45 },
                  },
                }}
                className="rounded-2xl border border-base-300 bg-base-100 p-6 transition-colors duration-300 hover:border-primary/50"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary">
                  <Icon aria-hidden="true" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-base-content">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-base-content/65">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-base-300 px-4 py-5 text-center"
            >
              <p className="mb-2 text-2xl font-bold text-primary sm:text-3xl">
                {fact.value}
              </p>

              <p className="text-sm leading-6 text-base-content/65">
                {fact.label}
              </p>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#projects"
            className="btn btn-primary rounded-xl"
          >
            Explore My Projects
            <FaArrowRight aria-hidden="true" />
          </Link>

          <a
            href="https://github.com/mdtanjidkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline rounded-xl"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
