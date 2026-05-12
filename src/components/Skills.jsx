import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub 
} from "react-icons/fa";
import { 
  SiMongodb, SiTailwindcss, SiExpress, SiBootstrap, SiMysql, SiMui, SiSupabase, SiFirebase 
} from "react-icons/si"; // <-- SiFirebase yahan add kiya

export default function Skills() {
  const frontend = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Material UI", icon: <SiMui className="text-[#007FFF]" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="text-[#ffffff]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }, // <-- Firebase Added (Yellow color)
    { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  ];

  const versionControl = [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "GitHub", icon: <FaGithub className="text-[#ffffff]" /> },
  ];

  const renderSkills = (title, skills) => (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-xl font-bold tracking-widest uppercase text-indigo-400">{title}</h3>
        <div className="h-[1px] bg-gray-700 flex-grow"></div>
      </div>
      
      {/* Grid updated to handle 6 items in backend row nicely */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-[#1e293b]/30 border border-white/5 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            
            <div className="relative text-5xl mb-4 transition-transform duration-500 group-hover:scale-110">
              {skill.icon}
            </div>
            <p className="relative text-xs font-medium tracking-wide text-gray-400 group-hover:text-white transition-colors">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-[#0b1120] text-white" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Proficiency
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A comprehensive overview of the tools and technologies I use to build modern web solutions.
          </p>
        </div>

        {renderSkills("Frontend Development", frontend)}
        {renderSkills("Backend & Infrastructure", backend)}
        {renderSkills("Version Control", versionControl)}
      </div>
    </section>
  );
}