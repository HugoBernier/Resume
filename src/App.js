import "./App.css";
import React, { useState } from "react";
import DefaultHeader from "./components/defaultHeader";
import image from "./images/home.jpg";

function App() {
  const [section, setSection] = useState("home");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DefaultHeader setSection={setSection} section={section} />
      <div className="flex-grow flex flex-col items-center">
        {section === "home" && (
          <div className="flex flex-col items-center w-full">
            <div className="h-48 w-full">
              <img
                className="object-cover w-full h-full blur-sm"
                src={image}
                alt="développeur"
              />
            </div>
            <h1 className="text-6xl text-white mt-4">Home</h1>
          </div>
        )}
        {section === "skills" && (
          <div className="flex flex-col items-center">
            <h1 className="text-6xl text-white">Compétences</h1>
          </div>
        )}
        {section === "experiences" && (
          <div className="flex flex-col items-center">
            <h1 className="text-6xl text-white">Expériences</h1>
          </div>
        )}
        {section === "educations" && (
          <div className="flex flex-col items-center">
            <h1 className="text-6xl text-white">Formations</h1>
          </div>
        )}
        {section === "contact" && (
          <div className="flex flex-col items-center">
            <h1 className="text-6xl text-white">Contact</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
