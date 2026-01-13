import { ArrowDownIcon, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import TypingAnimation from "../ui/TypingAnimation";

const Hero = ({ isLoadingComplete }: { isLoadingComplete: boolean }) => {
  const heroIcons = [
    { id: 1, icon: <Github />, iconLink: "https://github.com/mubex-dot" },
    {
      id: 2,
      icon: <Linkedin />,
      iconLink: "http://linkedin.com/in/mubarak-ibrahim-05288a260",
    },
    { id: 3, icon: <Mail />, iconLink: "mailto:mubex.dot@gmail.com" },
  ];

  const typingPhrases = [
    "Mubarak Ibrahim",
    "a Software Developer",
    "a Web Enthusiast",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1500;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * easeInOutCubic);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center">
      <div className="flex flex-col gap-2">
        <p className="font-secondary text-primary">Hi, I am</p>
        <h1 className="text-[#FCFBF8] text-5xl md:text-6xl font-bold">
          <TypingAnimation
            phrases={typingPhrases}
            speed={80}
            delayBetweenPhrases={2000}
            textClassName="text-5xl md:text-6xl font-bold"
            shouldStart={isLoadingComplete}
          />
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
        <Button variant="default" onClick={() => scrollToSection("#projects")}>
          View My Work
        </Button>
        <Button variant="outline" onClick={() => scrollToSection("#contact")}>
          Get In Touch
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <ArrowDownIcon
          className="animate-bounce m-7 cursor-pointer"
          onClick={() => scrollToSection("#about")}
        />
      </div>
      <div className="flex justify-center items-center gap-8">
        {heroIcons.map((icon) => (
          <a
            href={icon.iconLink}
            key={icon.id}
            target="_blank"
            rel="noopener noreferrer"
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
