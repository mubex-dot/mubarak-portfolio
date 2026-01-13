import { ExternalLink } from "lucide-react";

const FeaturedProjects = () => {
  return (
    <div id="projects">
      {featuredProjects.map((project) => (
        <div className="w-full " key={project.id}>
          <div
            className={`block md:flex gap-6 ${
              project.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div
              className={`w-full md:w-3/5 flex flex-col gap-4 items-start ${
                project.id % 2 === 0 ? "md:items-start" : "md:items-end"
              }`}
            >
              <p className="text-primary font-secondary">Featured Project</p>
              <h4 className="text-[#FCFBF8] text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl shrink-0 whitespace-nowrap">
                {project.projectName}
              </h4>
              <div className="bg-[#0B111E] border border-[#16213C] w-full p-6 rounded-lg">
                {project.projectDesc}
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {project.projectStack.map((stack) => (
                  <p
                    key={stack.id}
                    className="font-secondary hover:text-primary transition delay-100 duration-200 ease-in-out text-xs"
                  >
                    {stack.stackName}
                  </p>
                ))}
              </div>
              <div>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition delay-100 duration-200 ease-in-out"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`block md:flex gap-6 ${
              project.id % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } w-full`}
          >
            <div className="my-10 w-full md:w-3/5 h-full rounded-xl flex items-center justify-center bg-[#0b1326] border border-primary/80 shadow-[0_0_25px_rgba(0,255,255,0.9)]">
              <iframe
                src={project.projectLink}
                className="w-full h-100 rounded-xl"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const featuredProjects = [
  {
    id: 1,
    projectName: "Schoola (Landing Page & LMS.)",
    projectDesc:
      "A gamified learning solution that drives engagement for K12 schools elearning and uses AI for analytics and agnostic content generation increasing performance of teachers and learners.",
    projectStack: [
      { id: 1, stackName: "React" },
      { id: 2, stackName: "TypeScript" },
      { id: 3, stackName: "Material UI" },
      { id: 4, stackName: "Redux Toolkit" },
    ],
    projectLink: "https://www.schoola.app",
  },
  {
    id: 2,
    projectName: "ConnectED (Frontend & Backend)",
    projectDesc:
      "An SMS-based radio that will connect Organizations with the Underserved.",
    projectStack: [
      { id: 1, stackName: "React" },
      { id: 2, stackName: "TypeScript" },
      { id: 3, stackName: "Tailwind CSS" },
      { id: 4, stackName: "Redux Toolkit" },
      { id: 5, stackName: "Python" },
      { id: 6, stackName: "PostgreSQL" },
    ],
    projectLink: "https://www.connectedai.net",
  },
];

export default FeaturedProjects;
