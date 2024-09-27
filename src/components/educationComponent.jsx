import React from "react";

const EducationComponent = () => {
    const educations = [
        {
            institution: "EPITECH",
            degree: "Cursus MSC PRO",
            duration: "Septembre 2024 - Septembre 2027",
            description: "École de l'excellence informatique, Cursus de formation par projets.",
        },
        {
            institution: "ALAJI - Haut-Rhin et Vosges",
            degree: "PACE 2023",
            duration: "Février 2024 - Août 2024",
            description: "Formation en stage chez Circa diem, Développement configurateur 3D.",
        },
        {
            institution: "STUDI",
            degree: "Graduate Développeur PHP/Symfony (Bac+2)",
            duration: "Décembre 2022 - Décembre 2023",
            description: "Formation en alternance chez Circa diem, Développement de la partie front-end d'une application, Développement de la partie back-end d'une application.",
        },
        {
            institution: "CNAM - Epinal",
            degree: "Intégrateur Web (Bac +1)",
            duration: "Octobre 2021 - Juin 2022",
            description: "Fondamentaux du développement, Stage de fin d'année chez Inkivari.",
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-primary">Éducation</h2>
            {educations.map((education, index) => (
                <div
                    key={index}
                    className="border border-gray-300 p-4 mb-4 rounded-lg shadow-md shadow-primary bg-white space-y-2"
                >
                    <h3 className="text-xl font-semibold text-primary">
                        {education.institution}
                    </h3>
                    <p>
                        <strong>Diplôme:</strong> {education.degree}
                    </p>
                    <p>
                        <strong>Durée:</strong> {education.duration}
                    </p>
                    <p>
                        <strong>Description:</strong> {education.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default EducationComponent;
