import About from "@/components/about-section/About";
import Contacts from "@/components/contact/Contacts";
import HeroSection from "@/components/heroSectoin/HeroSection";
import Projects from "@/components/projects/Projects";
import SkeletonCard from "@/components/SkeletonCard";
import Skills from "@/components/skillsSection/Skills";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
   <>
            <section id="home" className="bg-base-100  flex items-center py-12 md:py-20 mt-7">
              <Suspense fallback={<SkeletonCard />}>
                  <HeroSection></HeroSection>
              </Suspense>
         </section>
       <section id="about" className="bg-base-100">
        <Suspense fallback={<SkeletonCard />}>
          <About></About>
        </Suspense> 
          </section>
          {/*  */}
       <section id="skills" className="bg-base-100 md:py-20 mt-10">
           <Suspense fallback={<SkeletonCard />}>
            <Skills></Skills>
           </Suspense>
          </section>
       <section id="projects" className="bg-base-100">
            <Suspense fallback={<SkeletonCard />}>
               <Projects></Projects>
            </Suspense>
          </section>
          <section id="contact" className="bg-base-100">
           <Suspense fallback={<SkeletonCard />}>
             <Contacts></Contacts>
           </Suspense>
          </section>

   </>
      
  );
}
