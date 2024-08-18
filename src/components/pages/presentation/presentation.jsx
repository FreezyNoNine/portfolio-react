import React from 'react';
import './Presentation.css';

const PagePresentation = () => {
    return (
        <div className="presentation-container">
            <section className="section-introduction">
                <h1>Bienvenue sur ma page de présentation</h1>
                <p>
                    Bonjour, je suis <strong>[Votre Nom]</strong>, un <strong>[Votre Métier]</strong> passionné par 
                    <strong>[Domaine de spécialité]</strong>. Avec <strong>[Nombre]</strong> années d'expérience, je suis spécialisé dans 
                    <strong>[Compétences principales]</strong>.
                </p>
            </section>

            <section className="section-objectives">
                <h2>Objectifs Professionnels</h2>
                <p>
                    Mon objectif est de <strong>[Décrire vos objectifs professionnels]</strong>, en utilisant mes compétences 
                    en <strong>[Compétences]</strong> pour <strong>[But principal]</strong>.
                </p>
            </section>

            <section className="section-skills">
                <h2>Compétences</h2>
                <ul>
                    <li>Compétence 1</li>
                    <li>Compétence 2</li>
                    <li>Compétence 3</li>
                    <li>Compétence 4</li>
                </ul>
            </section>

            <section className="section-experience">
                <h2>Expériences Professionnelles</h2>
                <div className="experience-item">
                    <h3>Poste 1 - [Entreprise]</h3>
                    <p>
                        Description de l'expérience, responsabilités, et réalisations clés.
                    </p>
                </div>
                <div className="experience-item">
                    <h3>Poste 2 - [Entreprise]</h3>
                    <p>
                        Description de l'expérience, responsabilités, et réalisations clés.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PagePresentation;
