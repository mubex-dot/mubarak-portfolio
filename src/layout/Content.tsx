import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";

const Content = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-10/12 lg:w-9/12">
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Content;
