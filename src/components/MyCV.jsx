import React from "react";
import CVPreview from "./CVPreview"; // ✅ Importerer forhåndsvisningen

function MyCV({ savedCVs }) { // ✅ Tar imot lagrede CV-er fra App.jsx
    return (
        <div>
            <h2>📂 Mine CV-er</h2>
            {savedCVs.length === 0 ? (
                <p>Ingen lagrede CV-er ennå.</p>
            ) : (
                savedCVs.map((cv, index) => (
                    <div key={index} style={{ marginBottom: "20px", border: "1px solid gray", padding: "10px" }}>
                        <h3>📝 CV {index + 1}</h3>
                        <CVPreview 
                            personalInfo={cv.personalInfo} 
                            education={cv.education} 
                            experience={cv.experience} 
                            skills={cv.skills} 
                            languages={cv.languages} 
                        />
                    </div>
                ))
            )}
        </div>
    );
}

export default MyCV;



