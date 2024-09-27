import React from "react";
import phpImage from "../images/phpImage.png";
import laravelImage from "../images/laravelImage.png";
import pythonImage from "../images/pythonImage.webp";
import reactImage from "../images/reactImage.webp";
import htmlImage from "../images/htmlImage.png";
import cssImage from "../images/cssImage.png";
import tailwindImage from "../images/tailwindImage.png";
import sqlImage from "../images/sqlImage.png";
import gitImage from "../images/gitImage.png";
import dockerImage from "../images/dockerImage.png";
import jsImage from "../images/jsImage.png";

const SkillsComponent = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full p-4">
            <div className="flex flex-col justify-center items-center text-center w-full max-w-6xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-8">
                    Compétences
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <h3 className="text-2xl text-white mb-6">Développement backend</h3>
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex flex-col items-center">
                                <img
                                    src={phpImage}
                                    alt="PHP"
                                    className="w-12 h-12 sm:w-16 sm:h-16 hover:opacity-75"
                                />
                                <span className="text-white text-lg mt-2">PHP</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src={laravelImage}
                                    alt="Laravel"
                                    className="w-12 h-12 sm:w-16 sm:h-16 hover:opacity-75"
                                />
                                <span className="text-white text-lg mt-2">Laravel</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src={pythonImage}
                                    alt="Python"
                                    className="w-12 h-12 sm:w-16 sm:h-16 hover:opacity-75"
                                />
                                <span className="text-white text-lg mt-2">Python</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl text-white mb-6">Développement Front</h3>
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex flex-col items-center">
                                <img
                                    src={jsImage}
                                    alt="javaScript"
                                    className="w-12 h-12 sm:w-16 sm:h-16 hover:opacity-75"
                                />
                                <span className="text-white text-lg mt-2">javaScript</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src={reactImage}
                                    alt="ReactJS"
                                    className="w-12 h-12 sm:w-16 sm:h-16 hover:opacity-75"
                                />
                                <span className="text-white text-lg mt-2">ReactJS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src={htmlImage}
                                    alt="HTML"
                                    className="w-12 h-12 sm:w-16 sm:h-16 hover:opacity-75"
                                />
                                <span className="text-white text-lg mt-2">HTML</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src={cssImage}
                                    alt="CSS"
                                    className="w-10 h-12 sm:w-12 sm:h-16 hover:opacity-75"
                                />
                                <span className="text-white text-lg mt-2">CSS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src={tailwindImage}
                                    alt="TailwindCSS"
                                    className="w-12 h-8 sm:w-16 sm:h-10 hover:opacity-75"
                                />
                                <span className="text-white text-lg mt-2">TailwindCSS</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl text-white mb-6">Bases de données</h3>
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex flex-col items-center">
                                <img
                                    src={sqlImage}
                                    alt="SQL"
                                    className="w-12 h-12 sm:w-16 sm:h-16 hover:opacity-75"
                                />
                                <span className="text-white text-lg mt-2">SQL</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl text-white mb-6">Outils et Méthodologies</h3>
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex flex-col items-center">
                                <img
                                    src={gitImage}
                                    alt="Git"
                                    className="w-12 h-12 sm:w-16 sm:h-16 hover:opacity-75"
                                />
                                <span className="text-white text-lg mt-2">Git</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src={dockerImage}
                                    alt="Docker"
                                    className="w-12 h-12 sm:w-16 sm:h-16 hover:opacity-75"
                                />
                                <span className="text-white text-lg mt-2">Docker</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsComponent;
