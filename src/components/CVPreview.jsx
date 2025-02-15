import React from "react";
import { useNavigate } from "react-router-dom"; // Brukes for å navigere tilbake til skjemaet

function CVPreview({ personalInfo, education, experience, skills, languages }) {
    const navigate = useNavigate(); // 📌 Bruker navigasjon for å gå tilbake til skjemaene

    return (
        <div style={{ border: "2px solid black", padding: "20px", marginTop: "20px" }}>
            <h2>📄 Forhåndsvisning av din CV</h2>


            {/* 👤 Personlig informasjon */}
            {personalInfo.name && (
                <div>
                    <h3>👤 Personlig informasjon</h3>
                    <p><strong>Navn:</strong> {personalInfo.name}</p>
                    <p><strong>Fødselsdato:</strong> {personalInfo.dob}</p>
                    <p><strong>E-post:</strong> {personalInfo.email}</p>
                    <p><strong>Telefon:</strong> {personalInfo.phone}</p>
                    <p><strong>Adresse:</strong> {personalInfo.address}</p>
                </div>
            )}

            {/* 🎓 Utdanning */}
            {education.length > 0 && (
                <div>
                    <h3>🎓 Utdanning</h3>
                    <ul>
                        {education.map((edu, index) => (
                            <li key={index}>{edu.title} - {edu.school} - {edu.degree} ({edu.year})</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* 💼 Arbeidserfaring */}
            {experience.length > 0 && (
                <div>
                    <h3>💼 Arbeidserfaring</h3>
                    <ul>
                        {experience.map((exp, index) => (
                            <li key={index}>{exp.jobTitle} hos {exp.company} ({exp.startDate} - {exp.endDate})</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* 🛠 Ferdigheter */}
            {skills.length > 0 && (
                <div>
                    <h3>🛠 Ferdigheter</h3>
                    <p>{skills.join(", ")}</p>
                </div>
            )}

            {/* 🌍 Språk */}
            {languages.length > 0 && (
                <div>
                    <h3>🌍 Språk</h3>
                    <p>{languages.join(", ")}</p>
                </div>
            )}
        </div>
    );
}

export default CVPreview;

