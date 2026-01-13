import SectionHeader from "../ui/SectionHeader";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-10">
      <SectionHeader
        sectionNumber={"02"}
        sectionName={"Skills & Technologies"}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {skillsCard.map((skill) => (
          <div
            className="bg-[#0B111E] border border-[#16213C] w-full h-80 sm:h-60 md:h-50 p-6 rounded-lg"
            key={skill.id}
          >
            <p className="font-secondary text-primary text-lg">
              {skill.cardName}
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {skill.skillsItems.map((item) => (
                <div className="flex" key={item.id}>
                  <div className="bg-background py-2 px-3 rounded-lg shrink-0 whitespace-nowrap hover:bg-primary hover:text-background  transition delay-100 duration-200 ease-in-out cursor-pointer">
                    <p>{item.skillName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const skillsCard = [
  {
    id: 1,
    cardName: "Languages",
    skillsItems: [
      { id: 1, skillName: "JavaScript" },
      { id: 2, skillName: "TypeScript" },
      { id: 3, skillName: "HTML5" },
      { id: 4, skillName: "CSS3" },
      { id: 5, skillName: "Python" },
      { id: 6, skillName: "Java" },
    ],
  },

  {
    id: 2,
    cardName: "Frontend",
    skillsItems: [
      { id: 1, skillName: "React" },
      { id: 2, skillName: "Tailwind CSS" },
      { id: 3, skillName: "Material UI" },
      { id: 4, skillName: "Shadcn/UI" },
      { id: 5, skillName: "React Router" },
      { id: 6, skillName: "Redux" },
      { id: 7, skillName: "Zod" },
      { id: 8, skillName: "React Hookform" },
    ],
  },

  {
    id: 3,
    cardName: "Tools",
    skillsItems: [
      { id: 1, skillName: "Git" },
      { id: 2, skillName: "Vite" },
      { id: 3, skillName: "ClickUp" },
      { id: 4, skillName: "Slack" },
      { id: 5, skillName: "Docker" },
      { id: 6, skillName: "Postman" },
    ],
  },

  {
    id: 4,
    cardName: "Backend",
    skillsItems: [
      { id: 1, skillName: "Flask" },
      { id: 2, skillName: "Fast API" },
      { id: 3, skillName: "PostgreSQL" },
      { id: 4, skillName: "Rest API" },
      { id: 5, skillName: "Redis" },
    ],
  },
];

export default Skills;
