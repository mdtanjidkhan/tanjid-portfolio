import About from "@/components/about-section/About";
import HeroSection from "@/components/heroSectoin/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
   <>
            <section id="home" className="bg-base-100 min-h-[calc(100vh-80px)] flex items-center py-12 md:py-20 mt-7">
          <HeroSection></HeroSection>
         </section>
       <section id="about" className="bg-base-100">
            <About></About>
          </section>
   </>
  );
}
