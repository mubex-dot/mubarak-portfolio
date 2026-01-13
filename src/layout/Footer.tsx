import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear().toString();

  const footerIcons = [
    { id: 1, icon: <Github />, iconLink: "#" },
    { id: 2, icon: <Linkedin />, iconLink: "#" },
    { id: 3, icon: <Mail />, iconLink: "#" },
  ];

  return (
    <div className="px-2.5 py-10  text-center border-t border-[#16213C] flex justify-center items-center">
      <div className="w-11/12 ">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center gap-8">
            {footerIcons.map((icon) => (
              <a
                href={icon.iconLink}
                key={icon.id}
                className="hover:text-primary transition delay-100 duration-200 ease-in-out hover:-translate-y-1"
              >
                {icon.icon}
              </a>
            ))}
          </div>
          <p className="font-secondary">Built by Mubarak</p>
          <p className="font-secondary text-xs text-[#7588A380]">
            &copy; {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
