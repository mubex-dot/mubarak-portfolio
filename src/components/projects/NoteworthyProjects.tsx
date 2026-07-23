import { ExternalLink, Folder, Github } from "lucide-react";

const NoteworthyProjects = () => {
  return (
    <div className="w-full">
      <h4 className="text-[#FCFBF8] text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl shrink-0 whitespace-nowrap mb-20">
        Other Noteworthy Projects
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {noteworthyProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0B111E] border border-[#16213C] w-full h-80 sm:h-60 md:h-55 p-6 rounded-lg flex flex-col gap-4 overflow-hidden"
          >
            <div className="flex justify-between items-center">
              <Folder className="text-primary" />
              <div className="flex justify-center items-center gap-3">
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition delay-100 duration-200 ease-in-out"
                  >
                    <ExternalLink />
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition delay-100 duration-200 ease-in-out"
                  >
                    <Github />
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1 overflow-hidden">
              <h5 className="text-[#FCFBF8] text-md font-bold sm:text-lg md:text-xl lg:text-2xl shrink-0">
                {project.projectName}
              </h5>
              <p className="text-sm line-clamp-2">{project.projectDesc}</p>
              <div className="flex flex-wrap gap-3 mt-1 overflow-hidden">
                {project.projectStack.map((stack) => (
                  <p
                    key={stack.id}
                    className="font-secondary hover:text-primary transition delay-100 duration-200 ease-in-out text-xs"
                  >
                    {stack.stackName}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const noteworthyProjects = [
  {
    id: 1,
    projectName: "Simplifi Africa (Backend)",
    projectDesc:
      "Personal finance companion designed to help take control of spending",
    projectStack: [
      { id: 1, stackName: "Python flask" },
      { id: 2, stackName: "PostgreSQL" },
      { id: 3, stackName: "Redis" },
      // { id: 4, stackName: "Redux Toolkit" },
    ],
    // projectLink: "https://simplifi.africa/",
    // githubLink: "https://github.com/Agrotrade-ng/web-agrotrade",
  },
  // {
  //   id: 6,
  //   projectName: "AgroTrade",
  //   projectDesc:
  //     "P2P Marketplace for Agricultural Trade and Byproduct Exchange",
  //   projectStack: [
  //     { id: 1, stackName: "React" },
  //     { id: 2, stackName: "TypeScript" },
  //     { id: 3, stackName: "Tailwind CSS" },
  //     { id: 4, stackName: "Redux Toolkit" },
  //   ],
  //   projectLink: "https://web-agrotrade.onrender.com",
  //   // githubLink: "https://github.com/Agrotrade-ng/web-agrotrade",
  // },
  {
    id: 2,
    projectName: "Nigerian Air Force College of Nursing Sciences Portal",
    projectDesc: "A portal for the NAFCONS",
    projectStack: [
      { id: 1, stackName: "React" },
      { id: 2, stackName: "TypeScript" },
      { id: 3, stackName: "Tailwind CSS" },
      { id: 4, stackName: "Redux Toolkit" },
      { id: 5, stackName: "Python Flask" },
      { id: 7, stackName: "PostgreSQL" },
    ],
    // projectLink: "https://wrap2grow-frontend.onrender.com",
    // githubLink: "https://github.com/mubex-dot/wrap2grow-frontend",
  },
  {
    id: 7,
    projectName: "Aeromedicals",
    projectDesc:
      "Official aviation medical assessment and certification for aircrew and applicants, delivered with excellence, integrity and care",
    projectStack: [
      { id: 1, stackName: "React" },
      { id: 2, stackName: "TypeScript" },
      { id: 3, stackName: "Tailwind CSS" },
      { id: 5, stackName: "Python Flask" },
      { id: 7, stackName: "PostgreSQL" },
    ],
    // projectLink: "https://wrap2grow-frontend.onrender.com",
    // githubLink: "https://github.com/mubex-dot/wrap2grow-frontend",
  },
  // {
  //   id: 5,
  //   projectName: "Wrap2Grow (Frontend & Backend)",
  //   projectDesc:
  //     "A smart application providing farmers with real-time data on the degradation timelines of waste-derived agricultural wraps.",
  //   projectStack: [
  //     { id: 1, stackName: "React" },
  //     { id: 2, stackName: "TypeScript" },
  //     { id: 3, stackName: "Tailwind CSS" },
  //     { id: 4, stackName: "Redux Toolkit" },
  //     { id: 5, stackName: "Python Flask" },
  //     { id: 7, stackName: "PostgreSQL" },
  //   ],
  //   projectLink: "https://wrap2grow-frontend.onrender.com",
  //   githubLink: "https://github.com/mubex-dot/wrap2grow-frontend",
  // },
  {
    id: 3,
    projectName: "City Explorer",
    projectDesc:
      "A smart platform that helps people discover restaurants, events, and businesses in their city with AI-powered recommendations.",
    projectStack: [
      { id: 1, stackName: "React" },
      { id: 2, stackName: "TypeScript" },
      { id: 3, stackName: "Material UI" },
      { id: 4, stackName: "Redux Toolkit" },
    ],
    projectLink: "https://city-explorer-bi24.onrender.com/",
    githubLink:
      "https://github.com/Habibat-Yinusa/City_Explorer_Merged/tree/client",
  },
  {
    id: 4,
    projectName: "Network based IDS",
    projectDesc:
      "A functional network-based IDS using SVM and DT that effectively detects unauthorized or malicious activities on a computer network in real time.",
    projectStack: [
      { id: 1, stackName: "Python" },
      { id: 2, stackName: "Scikit-Learn" },
      { id: 3, stackName: "Pandas" },
      { id: 4, stackName: "NumPy" },
      { id: 5, stackName: "Suricata" },
      { id: 6, stackName: "Linux OS" },
    ],
    // projectLink: "https://city-explorer-bi24.onrender.com/",
    githubLink: "https://github.com/mubex-dot/ids_project",
  },
];

export default NoteworthyProjects;
