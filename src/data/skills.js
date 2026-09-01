import { 
  FaReact, FaJs, FaNodeJs, FaGitAlt, FaGithub, FaHtml5
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, 
  SiMongoose, SiVercel, SiPostman, 
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

// src/data/skills.js

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: FaReact, level: "Advanced", progress: 95, animType: "spin" },
      { name: "Next.js", icon: SiNextdotjs, level: "Advanced", progress: 90, animType: "nextRotate" },
      { name: "JavaScript", icon: FaJs, level: "Advanced", progress: 95, animType: "pulse" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", progress: 95, animType: "float" },
      { name: "HTML5 & CSS3", icon: FaHtml5, level: "Advanced", progress: 98, animType: "subtleFloat" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: FaGitAlt, level: "Advanced", progress: 90, animType: "subtleFloat" },
      { name: "GitHub", icon: FaGithub, level: "Advanced", progress: 92, animType: "githubRotate" },
      { name: "VS Code", icon: TbBrandVscode, level: "Advanced", progress: 95, animType: "subtleFloat" },
      { name: "Postman", icon: SiPostman, level: "Intermediate", progress: 85, animType: "subtleFloat" },
      { name: "Vercel", icon: SiVercel, level: "Advanced", progress: 90, animType: "subtleFloat" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: "Advanced", progress: 90, animType: "float" },
      { name: "Express.js", icon: SiExpress, level: "Advanced", progress: 85, animType: "subtleFloat" },
    ],
  },
  {
    title: "Database Systems",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: "Advanced", progress: 90, animType: "bounce" },
      { name: "Mongoose", icon: SiMongodb, level: "Intermediate", progress: 80, animType: "subtleFloat" },
    ],
  },
];

