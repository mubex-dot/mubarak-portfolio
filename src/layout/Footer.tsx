import githubIcon from "@/assets/icons/github-icon.svg";
import linkedinIcon from "@/assets/icons/linkedin-icon.svg";
import mailIcon from "@/assets/icons/mail-icon.svg";

function Footer() {
  const currentYear = new Date().getFullYear().toString();
  return (
    <div className="px-2.5 py-6 text-center border-t border-[#16213C] flex justify-center items-center">
      <div className="w-11/12 ">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center gap-8">
            <a href="#">
              <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="#">
              <img src={linkedinIcon} alt="LinkedIn Icon" />
            </a>
            <a href="#">
              <img src={mailIcon} alt="Mail Icon" />
            </a>
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
