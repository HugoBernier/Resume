import React from "react";
import homeImage from "../images/home.jpg";
import linkedinImage from "../images/linkedin.png";
import githubImage from "../images/github.png";

const HomeComponent = () => {
    return (
        <div className="relative flex flex-grow flex-col items-center w-full h-full">
            <div className="relative w-full">
                <img
                    className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 blur-sm"
                    src={homeImage}
                    alt="développeur"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl text-black">BERNIER Hugo</h1>
                </div>
            </div>
            <div className="flex flex-col items-center text-center flex-grow px-4 sm:px-8 md:px-16 lg:px-32 mt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 md:mt-8">
                    Développeur Web, PHP/Laravel, ReactJS
                </h2>

                <div className="mt-6 flex flex-wrap gap-4 sm:gap-6 justify-center">
                    <div className="text-center">
                        <h3 className="text-lg sm:text-xl text-white mt-2">Développement backend</h3>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg sm:text-xl text-white mt-2">Développement Front</h3>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg sm:text-xl text-white mt-2">Algorithmie</h3>
                    </div>
                </div>

                <div className="flex flex-col text-center text-base sm:text-lg text-accent-700 font-bold sm:mt-8">
                    <p>Recherche alternance de Janvier 2025 à Septembre 2027</p>
                </div>

                <div className="flex flex-col text-center text-base sm:text-lg text-gray-400 italic sm:mt-2">
                    <p>En cours de formation dans le parcours MSc Pro d'Epitech</p>
                </div>

                <div className="mt-8 sm:mt-12 flex flex-row gap-4 sm:gap-6 items-center">
                    <a
                        href="https://www.linkedin.com/in/hugo-bernier-0b4094252"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        <img
                            src={linkedinImage}
                            alt="LinkedIn"
                            className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-75"
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
                            className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-75"
                        />
                        <span className="text-white">GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;
