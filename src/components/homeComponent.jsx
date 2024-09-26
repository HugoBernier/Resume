import React from "react";
import homeImage from "../images/home.jpg";
import linkedinImage from "../images/linkedin.png";
import githubImage from "../images/github.png";

const HomeComponent = () => {
return (
    <div className="flex flex-col items-center w-full">
        <div className="h-48 w-full">
            <img
                className="object-cover w-full h-full blur-sm"
                src={homeImage}
                alt="développeur"
            />
        </div>
        <h1 className="text-6xl text-white mt-8">BERNIER Hugo</h1>
        <h2 className="text-2xl text-gray-300 mt-2">
            Développeur Web, PHP/Laravel, ReactJS
        </h2>

        <div className="mt-4 flex gap-6">
            <div className="text-center">
                <h3 className="text-xl text-white mt-2">Développement backend</h3>
            </div>
            <div className="text-center">
                <h3 className="text-xl text-white mt-2">Développement Front</h3>
            </div>
            <div className="text-center">
                <h3 className="text-xl text-white mt-2">Algorithmie</h3>
            </div>
        </div>

        <div className="flex flex-col text-center text-lg text-yellow-300 font-bold mt-4">
            <p>Recherche alternance de Janvier 2025 à Septembre 2027</p>
        </div>

        <div className="flex flex-col text-center text-lg text-gray-400 italic mt-4">
            <p>En cours de formation dans le parcours MSc Pro d'Epitech</p>
        </div>

        <div className="mt-8 flex flex-row gap-6 items-center">
            <a
                href="https://www.linkedin.com/in/hugo-bernier-0b4094252"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
            >
                <img
                    src={linkedinImage}
                    alt="LinkedIn"
                    className="w-8 h-8 hover:opacity-75"
                />
                <span className="text-white">LinkedIn</span>
            </a>
            <a
                href="https://github.com/hugo-bernier"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
            >
                <img
                    src={githubImage}
                    alt="GitHub"
                    className="w-8 h-8 hover:opacity-75"
                />
                <span className="text-white">GitHub</span>
            </a>
        </div>
    </div>
);
};

export default HomeComponent;
