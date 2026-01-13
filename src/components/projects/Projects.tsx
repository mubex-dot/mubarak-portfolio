import SectionHeader from "../ui/SectionHeader";
import FeaturedProjects from "./FeaturedProjects";
import NoteworthyProjects from "./NoteworthyProjects";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-10">
      <SectionHeader sectionNumber={"03"} sectionName={"Featured Projects"} />
      <FeaturedProjects />
      <NoteworthyProjects />
    </div>
  );
};

export default Projects;
