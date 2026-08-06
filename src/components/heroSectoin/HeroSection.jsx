"use client"
import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaReact, FaTwitter } from 'react-icons/fa';
import { RxLinkedinLogo } from 'react-icons/rx';
import { SiGithub } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-11/12 mx-auto px-4 md:px-8 mt-8">
      <div className=" flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="ml-4">
          <h1 className="text-2xl sm:text-xl md:text-2xl font-extrabold tracking-tight leading-tight">
            Hello 👋
          </h1>
          <h2 className="text-2xl sm:text-xl md:text-2xl font-extrabold tracking-tight leading-tight mt-2"> I'm <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tanjid Khan</span>,</h2>
          <p className="text-2xl font-bold md:text-3xl md:font-semibold text-secondary mt-4 min-h-[40px]">
            {" "}
            <span className="border-r-2 border-primary pr-1 font-bold text-primary">
              <Typewriter
                words={["Full-Stack Web Developer_", "MERN Stack Developer_"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={80}
                delaySpeed={1500}
              />
            </span>
          </p>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-base-content/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I build responsive, secure, and production-ready full-stack applications,
            bridging the gap between clean code and great user experience.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-6 mt-8 opacity-80">
            <span className="w-18 h-[1px] bg-base-content/30"></span>

            {/* GitHub */}
            <a href="https://github.com/mdtanjidkhan" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors text-2xl">
              <SiGithub />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/md-tanjid-khan" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors text-2xl">
              <RxLinkedinLogo />
            </a>
            {/*  */}
            <a href=""
              className='hover:text-primary transition-colors text-2xl'>
              <FaTwitter />
            </a>
              <a
     href="https://mail.google.com/mail/?view=cm&fs=1&to=mdtanjidkhan152@gmail.com&su=Portfolio%20Inquiry"
     target="_blank"
     rel="noopener noreferrer"
     className="hover:text-primary transition-colors text-2xl"
>
  <FaEnvelope />
</a>

            <span className="w-18 h-[1px] bg-base-content/30"></span>
          </div>

          <div className="flex justify-center lg:justify-start items-center gap-4 mt-10">
             <a href="/tanjid-khan-is-p (2).pdf"  target="_blank"
               rel="noopener noreferrer" >
               <button className="btn btn-primary shadow-lg shadow-primary/20 px-8 rounded-xl gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Resume
            </button>
             </a>
            <Link href='#projects'><button className="btn btn-outline btn-secondary px-8 rounded-xl gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              View Projects
            </button></Link>
          </div>
        </div>

{/* 
        <div className=" flex justify-center order-1 lg:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-primary to-secondary shadow-2xl shadow-primary/30 animate-pulse-slow">
            <div className="w-full h-full rounded-full bg-base-100 p-2 overflow-hidden">

              <img
                src="https://i.ibb.co.com/sxHqJYf/Whats-App-Image-2026-05-26-at-8-53-31-AM.jpg"
                alt="Tanjid Hasan"
                className="w-full h-full object-cover rounded-full bg-base-300"
              />
            </div>
            <div className="absolute -top-2 -left-2 bg-slate-800 p-2 rounded-full border border-cyan-500 shadow-lg shadow-cyan-500/30 animate-bounce [animation-duration:3s] flex items-center justify-center">
              <RiReactjsLine className="text-cyan-400 text-3xl" />
            </div>


            <div className="absolute -bottom-2 -right-2 bg-slate-800 p-2 rounded-full border border-white shadow-lg shadow-white/20 animate-bounce [animation-duration:4s] flex items-center justify-center">

              <TbBrandNextjs className="text-white text-3xl" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-xl opacity-30 -z-10"></div>
          </div>

        </div> */}

        <div className="flex justify-center order-1 lg:order-2">
  <div
    className="group relative w-72 h-72 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] lg:w-[28rem] lg:h-[28rem] xl:w-[31rem] xl:h-[31rem] rounded-full p-[6px] bg-gradient-to-tr from-primary via-secondary to-primary shadow-[0_20px_60px_rgba(59,130,246,0.35)] animate-[float_6s_ease-in-out_infinite]"
  >
    {/* Image */}
    <div className="relative w-full h-full rounded-full overflow-hidden bg-base-100 p-2">

      <Image
        src="https://i.ibb.co.com/sxHqJYf/Whats-App-Image-2026-05-26-at-8-53-31-AM.jpg"
        alt="Tanjid Khan"
        fill
        priority
       sizes="(max-width: 768px) 18rem, (max-width: 1024px) 26rem, 33rem"
        className="rounded-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
      />

      {/* Shine Effect */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute -left-full top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[160%] transition-all duration-1000"></div>
      </div>

    </div>

    {/* React Icon */}
    <div className="absolute -top-3 -left-3 bg-slate-800 p-3 rounded-full border border-cyan-400 shadow-lg shadow-cyan-500/40 animate-[float_4s_ease-in-out_infinite]">
      <RiReactjsLine className="text-cyan-400 text-3xl" />
    </div>

    {/* Next.js Icon */}
    <div className="absolute -bottom-3 -right-3 bg-slate-800 p-3 rounded-full border border-white shadow-lg shadow-white/30 animate-[float_5s_ease-in-out_infinite]">
      <TbBrandNextjs className="text-white text-3xl" />
    </div>

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-primary blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-700 -z-10"></div>
  </div>
</div>

      </div>
    </div>

  );
};

export default HeroSection;







