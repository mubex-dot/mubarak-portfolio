import { ArrowDownIcon, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  const heroIcons = [
    { id: 1, icon: <Github />, iconLink: "#" },
    { id: 2, icon: <Linkedin />, iconLink: "#" },
    { id: 3, icon: <Mail />, iconLink: "#" },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div className="flex flex-col gap-2">
        <p className="font-secondary text-primary">Hi, My name is</p>
        <h1 className="text-[#FCFBF8] text-5xl md:text-6xl font-bold">
          Mubarak
        </h1>
        <h2 className="text-4xl md:text-5xl">I build things for the web.</h2>
        <p>
          I'm a frontend developer specializing in building exceptional digital
          experiences.
        </p>
        <p>
          Currently focused on creating accessible, human-centered products with{" "}
          <span className="text-primary">React</span> and modern web
          technologies.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
        <Button variant="default">View My Work</Button>
        <Button variant="outline">Get In Touch</Button>
      </div>
      <div className="flex justify-center items-center">
        <ArrowDownIcon className="animate-bounce m-7" />
      </div>
      <div className="flex justify-center items-center gap-8">
        {heroIcons.map((icon) => (
          <a
            href={icon.iconLink}
            key={icon.id}
            className="hover:text-primary transition delay-100 duration-200 ease-in-out hover:-translate-y-1"
          >
            {icon.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
