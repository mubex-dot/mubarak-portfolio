import { ChevronLeft } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
};

function SideNav({ handleDrawerToggle, mobileOpen }: Props) {
  const sideNavRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close mobile drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileOpen &&
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target as Node)
      ) {
        handleDrawerToggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen, handleDrawerToggle]);

  const navItems = [
    {
      text: "Dashboard",
      link: "/dashboard",
    },
    {
      text: "Wrap Management",
      link: "/wrap-management",
    },
    {
      text: "Environment",
      link: "/environment",
    },
  ];

  const drawer = (
    <div className="px-4 h-full overflow-auto">
      <div className="my-12 flex justify-center items-center flex-col">
        <div className="flex items-center gap-2 w-full justify-between">
          <div className="w-full"></div>
          <button onClick={handleDrawerToggle} className="block sm:hidden">
            <ChevronLeft className="text-[#95969D] cursor-pointer" />
          </button>
        </div>

        <div className="flex items-center gap-4 w-full">
          {/* <img src={sidenavImg} alt="Wrap2Grow icon" /> */}
          <div>
            <h3 className="font-bold text-foreground">Wrap2Grow</h3>
            <p className="text-text-primary">Green Degrade Tracker</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between h-[75%]">
        <ul className="space-y-1">
          {navItems.map((item, index) => {
            return (
              <li key={index} className="py-1">
                <a href={item.link} className="text-text-primary block w-full">
                  <div
                    className="flex items-center gap-2 p-3"
                    onClick={handleDrawerToggle}
                  >
                    <span className="text-sm md:text-base font-lexend">
                      {item.text}
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Overlay for mobile when drawer is open */}
      <div
        className={`
          fixed inset-0 bg-black/50 z-30 sm:hidden
          transition-opacity duration-300 ease-in-out
          ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
      />

      <nav className="sm:w-(--drawer-width) sm:shrink-0">
        {/* Mobile drawer */}
        <div
          ref={sideNavRef}
          className={`
            fixed inset-y-0 left-0 z-40 
            w-(--drawer-width) 
            transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out
            bg-bg-primary border-none
            block sm:hidden bg-background
          `}
        >
          <div className="h-full overflow-y-auto">{drawer}</div>
        </div>
      </nav>
    </>
  );
}

export default SideNav;
