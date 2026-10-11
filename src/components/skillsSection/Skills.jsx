
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/data/skills";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px] sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
            My Expertise
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl md:text-5xl">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-base-content/65 sm:text-base">
            Technologies and tools I use to build modern,
            responsive, and full-stack web applications.
          </p>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-primary" />
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
          className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.article
              key={category.title}
              variants={cardVariants}
              transition={{ duration: reduceMotion ? 0 : 0.45 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group relative flex h-full flex-col rounded-2xl border border-base-300/80 bg-base-100/80 p-5 shadow-sm backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 sm:p-6"
            >
              {/* Card Header */}
              <div className="mb-5 border-b border-base-300/70 pb-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold leading-snug text-base-content sm:text-xl">
                    {category.title}
                  </h3>

                  <span className="shrink-0 rounded-full border border-base-300 bg-base-200/70 px-2.5 py-1 text-xs font-semibold text-base-content/70">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-base-content/60">
                  {category.description}
                </p>
              </div>

              {/* Two-column Skills Grid */}
              <div className="grid flex-1 grid-cols-2 content-start gap-2.5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  const skillId = `${category.title}-${skill.name}`;
                  const isActive = activeSkill === skillId;

                  return (
                    <button
                      key={skill.name}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() =>
                        setActiveSkill((current) =>
                          current === skillId ? null : skillId
                        )
                      }
                      className={`group/skill flex min-h-[58px] min-w-0 items-center gap-2.5 rounded-xl border px-3 py-3  text-left transition-all duration-200 focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2  focus-visible:ring-offset-base-100
                        ${
                          isActive
                            ? "border-primary bg-primary/10 shadow-sm"
                            : "border-base-300/80 bg-base-200/40 hover:border-primary/60 hover:bg-primary/5"
                        }`}
                    >
                      <Icon
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 transition-colors duration-200 ${
                          isActive
                            ? "text-primary"
                            : "text-base-content/65 group-hover/skill:text-primary"
                        }`}
                      />

                      <span
                        className={`min-w-0 text-xs font-semibold leading-snug sm:text-sm ${
                          isActive
                            ? "text-primary"
                            : "text-base-content"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}










