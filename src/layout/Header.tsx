import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

type Props = {
  handleDrawerToggle: () => void;
};

function Header({ handleDrawerToggle }: Props) {
  const headerNavItems = [
    { id: 1, linkName: "About", linkPath: "#about" },
    { id: 2, linkName: "Skills", linkPath: "#skills" },
    { id: 3, linkName: "Projects", linkPath: "#projects" },
    { id: 4, linkName: "Contact", linkPath: "#contact" },
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
    <div className="px-2.5 py-6 border-b border-[#16213C] flex justify-center items-center">
      <div className="flex items-center justify-between w-11/12">
        <div className="flex items-center justify-between w-full">
          <p className="font-secondary text-primary font-bold text-xl transition delay-100 duration-200 ease-in-out hover:-translate-y-1">
            {"<Mubarak />"}
          </p>
        </div>
        <div>
          <Button
            className="sm:hidden flex justify-center items-center"
            variant="outline"
            size="icon"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </Button>
          <div className="hidden sm:flex gap-8 font-secondary">
            {headerNavItems.map((link) => (
              <a
                className="hover:text-primary transition delay-100 duration-200 ease-in-out hover:-translate-y-1"
                key={link.id}
                href={link.linkPath}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.linkPath);
                }}
              >
                {link.linkName}
              </a>
            ))}
          </div>
        </div>
        <div className="grow"></div>
      </div>
    </div>
  );
}

export default Header;
