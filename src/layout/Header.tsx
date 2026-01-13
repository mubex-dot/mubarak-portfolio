import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

type Props = {
  handleDrawerToggle: () => void;
};

function Header({ handleDrawerToggle }: Props) {
  const headerNavItems = [
    { id: 1, linkName: "About", linkPath: "#" },
    { id: 2, linkName: "Skills", linkPath: "#" },
    { id: 3, linkName: "Projects", linkPath: "#" },
    { id: 4, linkName: "Contact", linkPath: "#" },
  ];

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
