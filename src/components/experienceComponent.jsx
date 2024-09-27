import React from "react";

const ExperienceComponent = () => {
    const experiences = [
        {
            company: "Circa Diem",
            role: "Stage développement Web Laravel/React",
            duration: "Février 2024 - Août 2024",
            description: "Amélioration d'une application ReactJs.",
            missions: [
                "Amélioration d'une application configurateur 3D React,",
                "Conception d'une interface administrateur pour la gestion et la modification des configurateurs,",
                "Rédaction complète de la documentation technique du projet.",
            ],
        },
        {
            company: "Circa Diem",
            role: "Alternant développement Web Laravel",
            duration: "Décembre 2022 - Décembre 2023",
            description: "Création d'applications avec Laravel.",
            missions: [
                "Développement d'une application Laravel pour l'importation et la lecture de fichiers Excel,,",
                "Intégration des données extraites avec la base de données,",
                "Création d'une interface de modification des données,",
                "Création d'un configurateur 3D interactif pour personnaliser des modèles selon des paramètres définit (couleurs, matériaux...),",
            ],
        },
        {
            company: "Inkivari",
            role: "Stagiaire Développement Web",
            duration: "Mars 2022 - Mai 2022",
            description:
                "Développement d'une application Symfony pour l'analyse des liens et cookies externes.",
            missions: [
                "Travail en autonomie,",
                "Apprentissage du framework Symfony,",
                "Découverte du RGPD,",
                "Création d'un visualisateur de liens externes (fichiers CSS, etc.) pour les sites web,",
                "Identification et fourniture d'une liste de cookies externes stockés lors de la visite d'une page web.",
            ],
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-primary">Experience</h2>
            {experiences.map((experience, index) => (
                <div
                    key={index}
                    className="border border-gray-300 p-4 mb-4 rounded-lg shadow-md shadow-primary bg-white space-y-2"
                >
                    <h3 className="text-xl font-semibold text-primary">
                        {experience.company}
                    </h3>
                    <p>
                        <strong>Role:</strong> {experience.role}
                    </p>
                    <p>
                        <strong>Durée:</strong> {experience.duration}
                    </p>
                    <p>
                        <strong>Description:</strong> {experience.description}
                    </p>
                    <p>
                        <strong>Missions:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        {experience.missions.map((mission, idx) => (
                            <li key={idx}>{mission}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ExperienceComponent;
