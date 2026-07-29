import About from "@/components/about-section/About";
import Contacts from "@/components/contact/Contacts";
import HeroSection from "@/components/heroSectoin/HeroSection";
// import Projects from "@/components/projects/Projects";
import SkeletonCard from "@/components/SkeletonCard";
import Skills from "@/components/skillsSection/Skills";
import { Suspense } from "react";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
      <section id="home" className="bg-base-100  flex items-center py-12 md:py-20 mt-7">
        <HeroSection></HeroSection>
      </section>
      <section id="about" className="bg-base-100">
          <About></About>
      </section>
      {/*  */}
      <section id="skills" className="bg-base-100 md:py-20 mt-10">
         <Skills></Skills>
      </section>
      <section id="projects" className="bg-base-100">
         <Projects></Projects>
      </section>
      <section id="contact" className="bg-base-100">
         <Contacts></Contacts>
      </section>

    </>

  );
}
