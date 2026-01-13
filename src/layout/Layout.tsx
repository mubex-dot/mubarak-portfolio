import { useState } from "react";
import Main from "./Main";
import SideNav from "./SideNav";
import Content from "./Content";

function Layout({ isLoadingComplete }: { isLoadingComplete: boolean }) {
  const drawerWidth = 265;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="flex">
      <SideNav
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />

      <Main
        drawerWidth={drawerWidth}
        children={<Content isLoadingComplete={isLoadingComplete} />}
        handleDrawerToggle={handleDrawerToggle}
      />
    </div>
  );
}

export default Layout;
