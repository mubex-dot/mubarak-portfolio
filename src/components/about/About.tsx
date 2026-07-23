import SectionHeader from "../ui/SectionHeader";
import MubarakImage from "@/assets/images/mubarak.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <SectionHeader sectionNumber={"01"} sectionName={"About"} />
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="w-full md:w-3/6 flex flex-col gap-6">
          <p>
            Hello! I'm Mubarak, a software developer based in Nigeria. I
            specialize in building digital experiences that live at the
            intersection of design and engineering. My goal is to develop
            pixel-perfect, high-performance products that are as functional as
            they are visually compelling.
          </p>
          <p>
            I started my journey as a developer in 2021 when I decided to try
            creating a website. It turns out hacking together HTML & CSS taught
            me a lot about web development! Fast-forward to today, and I've had
            the privilege of working at a startup, a tech corporation, and small
            businesses as well.
          </p>
          <p>
            My main focus these days is building accessible, inclusive products
            and digital experiences. I'm also passionate about{" "}
            <span className="text-primary">performance optimization</span> and{" "}
            <span className="text-primary">clean architecture</span>.
          </p>
        </div>
        <div className="w-full md:w-2/6 mt-10 md:mt-0 flex items-center justify-center">
          <div className=" w-full h-full rounded-xl flex items-center justify-center bg-[#0b1326] border border-primary/80 shadow-[0_0_25px_rgba(0,255,255,0.9)]">
            <img
              src={MubarakImage}
              alt="Mubarak's image"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
