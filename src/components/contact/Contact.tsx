import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import SectionHeader from "../ui/SectionHeader";
import CVFile from "@/assets/documents/Mubarak_CV.pdf";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:mubex.dot@gmail.com";
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CVFile;
    link.download = "Mubarak_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center min-h-screen py-10 text-center"
    >
      <SectionHeader sectionNumber={"04"} sectionName={"What's Next?"} />
      <div className="flex flex-col gap-3">
        <h4 className="text-primary font-secondary text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl shrink-0 whitespace-nowrap">
          Get in Touch
        </h4>
        <p>My inbox is always open.</p>
        <p>
          Whether you have a question, want to collaborate on a project, or just
          want to say hi, I'll do my best to get back to you!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
          <Button variant="outline" onClick={handleEmailClick}>
            <Mail />
            Say Hello
          </Button>
          <Button variant="default" onClick={handleDownloadCV}>
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
