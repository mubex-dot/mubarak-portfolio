import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

const Content = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 md:w-10/12 lg:w-9/12">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default Content;
