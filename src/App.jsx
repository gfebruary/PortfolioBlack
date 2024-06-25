import React from "react";
import ParticleBackground from "./ParticleBackground";
import MenuOverlay from "./MenuOverlay";
import PageContent from "./PageContent";

const App = () => {
  return (
    <div>
      <ParticleBackground />
      <PageContent />

      <MenuOverlay />
    </div>
  );
};

export default App;
