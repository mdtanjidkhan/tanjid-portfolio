
"use client";

import { motion } from "framer-motion";

// import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaRocket,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

const stats = [
  {
    end: 10,
    suffix: "+",
    label: "Projects Completed",
    icon: FaRocket,
  },
  {
    end: 15,
    suffix: "+",
    label: "Technologies",
    icon: FaCode,
  },
  {
    end: 1,
    suffix: "+",
    label: "Years Learning",
    icon: FaLaptopCode,
  },
  {
    end: 100,
    suffix: "%",
    label: "Responsive Design",
    icon: FaMobileAlt,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const About = () => {
  return (
    <section className="container mx-auto px-5 py-16 md:py-24 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-10 md:mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          About{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 90 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-primary rounded-full mx-auto mt-3"
        />
      </motion.div>

      {/* About Text */}
      <motion.p
        initial={{
          opacity: 0,
          x: -100,
          filter: "blur(8px)",
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        }}
        viewport={{
          once: false,
          amount: 0.4,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg leading-8 md:leading-9 text-base-content/80"
      >
        I'm{" "}
        <span className="font-semibold text-primary">
          Md. Tanjid Hasan
        </span>
        , a{" "}
        <span className="font-semibold">
          Full-Stack JavaScript Developer
        </span>{" "}
        and a Diploma Engineering student passionate about building modern,
        scalable web applications. I specialize in{" "}
        <span className="font-semibold text-secondary">
          JavaScript, React, Next.js, Node.js, Express.js, MongoDB, and
          Tailwind CSS
        </span>
        , focusing on clean code, responsive design, and seamless user
        experiences while continuously learning and solving real-world
        problems.
      </motion.p>

   {/*  */}

   <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-14 max-w-5xl mx-auto"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-base-content/10 bg-base-200/40 backdrop-blur-xl p-4 md:p-6 shadow-xl"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Glow */}
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Icon */}
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.15,
              }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto mb-3 flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl bg-primary/10 text-lg md:text-2xl text-primary"
            >
              <Icon />
            </motion.div>

            {/* Number */}
            <h3 className="relative text-center text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                <CountUp
                  start={0}
                  end={stat.end}
                  duration={2}
                //   enableScrollSpy
                //   scrollSpyOnce
                />
                {stat.suffix}
              </span>
            </h3>

            {/* Label */}
            <p className="relative  text-center mt-2 text-xs sm:text-sm md:text-base text-base-content/70 leading-5">
              {stat.label}
            </p>

            {/* Bottom Border Animation */}
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.35 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary"
            />
          </motion.div>
        );
      })}
    </motion.div>


    </section>
  );
};

export default About;