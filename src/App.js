import "./App.css";
import React, { useState } from "react";
import DefaultHeader from "./components/defaultHeader";

function App() {
  const [section, setSection] = useState("home");

  return (
    <div className="min-h-lvh bg-background h-full flex flex-col">
      <DefaultHeader setSection={setSection} section={section} />
      {section === "home" && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-6xl text-white">Home</h1>
        </div>
      )}
      {section === "skills" && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-6xl text-white">Compétences</h1>
        </div>
      )}
      {section === "experiences" && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-6xl text-white">Expériences</h1>
        </div>
      )}
      {section === "educations" && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-6xl text-white">Formations</h1>
        </div>
      )}
      {section === "contact" && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-6xl text-white">Contact</h1>
        </div>
      )}
    </div>
  );
}

export default App;
