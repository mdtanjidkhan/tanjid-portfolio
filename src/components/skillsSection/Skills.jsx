import React from "react";
import Marquee from "react-fast-marquee";

const skillsData = {
  skills: [
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Stripe", img: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
    { name: "JWT", img: "https://jwt.io/img/pic_logo.svg" },
  ]
};

const Skills = () => {
  const SkillRow = ({ skills, direction }) => (
    <div className="pt-3 ">
      <div className=" rounded-xl">
        <Marquee direction={direction} gradient={false} speed={50} >
          {/* pauseOnHover={true} */}
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center mx-6">
              <img src={skill.img} alt={skill.name} className="sm:w-16 w-10 sm:h-16 h-10 object-contain" />
              <p className="mt-2 text-sm">{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );

  return (
    <div  id="skills" className="w-11/12 mx-auto px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        My Skills
      </h2>
      <SkillRow  skills={skillsData.skills} direction="left" />
    </div>
  );
};

export default Skills;