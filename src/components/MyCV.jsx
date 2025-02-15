import React from "react";

function MyCV({ savedCVs, onDeleteCV }) {
    return (
        <div>
            {savedCVs.length > 0 ? (
                savedCVs.map((cv, index) => (
                    <div key={index} style={{ border: "2px solid black", padding: "20px", marginBottom: "20px" }}>
                        <h2>📂 {cv.personalInfo.name ? `${cv.personalInfo.name}'s CV` : "Min CV"}</h2>

                        {/* Personlig informasjon */}
                        <h3>👤 Personlig informasjon</h3>
                        <p><strong>Navn:</strong> {cv.personalInfo.name || "Ikke fylt inn"}</p>
                        <p><strong>E-post:</strong> {cv.personalInfo.email || "Ikke fylt inn"}</p>
                        <p><strong>Telefon:</strong> {cv.personalInfo.phone || "Ikke fylt inn"}</p>
                        <p><strong>Fødselsdato:</strong> {cv.personalInfo.dob || "Ikke fylt inn"}</p>
                        <p><strong>Adresse:</strong> {cv.personalInfo.address || "Ikke fylt inn"}</p>


                        {/* Utdanning */}
                        {cv.education.length > 0 && (
                            <div>
                                <h3>🎓 Utdanning</h3>
                                <ul>
                                    {cv.education.map((edu, i) => (
                                        <li key={i}>{edu.title} - {edu.school} - {edu.degree} ({edu.year})</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Arbeidserfaring */}
                        {cv.experience.length > 0 && (
                            <div>
                                <h3>💼 Arbeidserfaring</h3>
                                <ul>
                                    {cv.experience.map((exp, i) => (
                                        <li key={i}>{exp.jobTitle} hos {exp.company} ({exp.startDate} - {exp.endDate})</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Ferdigheter */}
                        {cv.skills.length > 0 && (
                            <div>
                                <h3>🛠 Ferdigheter</h3>
                                <p>{cv.skills.join(", ")}</p>
                            </div>
                        )}

                        {/* Språk */}
                        {cv.languages.length > 0 && (
                            <div>
                                <h3>🌍 Språk</h3>
                                <p>{cv.languages.join(", ")}</p>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <h2>Min CV</h2>
            )}
        </div>
    );
}

export default MyCV;





