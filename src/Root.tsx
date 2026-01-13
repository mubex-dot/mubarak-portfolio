import { useState } from "react";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import LightbulbCursor from "./components/ui/LightbulbCursor.tsx";
import LoadingScreen from "./components/ui/LoadingScreen.tsx";

export default function Root() {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      {showLoading && (
        <LoadingScreen onComplete={() => setShowLoading(false)} />
      )}
      <BrowserRouter>
        <App isLoadingComplete={!showLoading} />
        <LightbulbCursor />
      </BrowserRouter>
    </>
  );
}
