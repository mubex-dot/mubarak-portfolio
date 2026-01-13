import type React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  drawerWidth: number;
  children: React.ReactElement;
  handleDrawerToggle: () => void;
};

function Main({ drawerWidth, children, handleDrawerToggle }: Props) {
  return (
    <main
      style={{ "--drawer-width": `${drawerWidth}px` } as React.CSSProperties}
      className="sm:w-[calc(100%-var(--drawer-width))] grow min-h-screen flex flex-col w-11/12 "
    >
      <header className="sticky top-0 z-50 bg-background">
        <Header handleDrawerToggle={handleDrawerToggle} />
      </header>

      <div className="px-5 flex-1">{children}</div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Main;
