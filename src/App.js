import "./App.css";
import React, { useState } from "react";
import DefaultHeader from "./components/headerComponent";
import HomeComponent from "./components/homeComponent";
import ContactForm from "./components/contactFormComponent";
import SkillsComponent from "./components/skillsComponent";
import ExperienceComponent from "./components/experienceComponent";

function App() {
  const [section, setSection] = useState("home");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DefaultHeader setSection={setSection} section={section} />
      <div className="flex-grow flex flex-col items-center">
        {section === "home" && <HomeComponent />}
        {section === "skills" && <SkillsComponent />}
        {section === "experiences" && <ExperienceComponent />}
        {section === "educations" && (
          <div className="flex flex-col items-center">
            <h1 className="text-6xl text-white">Formations</h1>
          </div>
        )}
        {section === "contact" && <ContactForm />}
      </div>
    </div>
  );
}

export default App;
