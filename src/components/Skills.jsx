import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub 
} from "react-icons/fa";
import { 
  SiMongodb, SiTailwindcss, SiExpress, SiBootstrap, SiMysql 
} from "react-icons/si";

export default function Skills() {
  const frontend = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-6xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-6xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-6xl" /> },
    { 
      name: "Material UI", 
      icon: <img src="https://cdn.simpleicons.org/mui/007FFF" alt="Material UI" className="w-12 h-12" /> 
    },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-6xl" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300 text-6xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-6xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500 text-6xl" /> },
  ];

  const versionControl = [
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-6xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-white text-6xl" /> },
  ];

  const renderSkills = (title, skills) => (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-sky-400">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center hover:scale-110 hover:shadow-lg hover:shadow-sky-400/50 transition p-4 rounded-lg bg-gray-800"
          >
            {skill.icon}
            <p className="mt-2 text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-gray-900 text-white" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>

        {renderSkills("Frontend", frontend)}
        {renderSkills("Backend", backend)}
        {renderSkills("Version Control", versionControl)}
      </div>
    </section>
  );
}
