import React, { useState } from "react";
import DeleteButton from "./DeleteButton"; // importerer gjenbrukbar DeleteButton

function EducationForm({ setEducation }) {
    const [educations, setEducations] = useState([]);
    const [title, setTitle] = useState("");
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [year, setYear] = useState("");

    const handleAddEducation = () => {
        if (title && school && degree && year) {
            const newEducation = [...educations, { title, school, degree, year }];
            setEducations(newEducation);
            setEducation(newEducation); // sender oppdatert liste til App.jsx
            setTitle("");
            setSchool("");
            setDegree("");
            setYear("");
        }
    };

    const handleDeleteEducation = (index) => {
        const updatedEducation = educations.filter((_, i) => i !== index);
        setEducations(updatedEducation);
        setEducation(updatedEducation); // sørger for at App.jsx også oppdateres
    };

    return (
        <fieldset>
            <legend>Utdanning</legend>

            <label>Tittel:</label> 
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Skriv inn din tittel (f.eks. Ingeniør, Lektor, etc.)"
            />

            <label>Skole/Universitet:</label>
            <input 
                type="text" 
                value={school} 
                onChange={(e) => setSchool(e.target.value)} 
                placeholder="Skriv inn skole/universitet" 
            />

            <label>Grad:</label>
            <input 
                type="text" 
                value={degree} 
                onChange={(e) => setDegree(e.target.value)} 
                placeholder="Skriv inn grad (Bachelor, Master, osv.)" 
            />

            <label>Fullført:</label>
            <input 
                type="month" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
            />

            <button type="button" onClick={handleAddEducation}>Legg til utdanning</button>

            <ul>
                {educations.map((edu, index) => (
                    <li key={index}>
                        {edu.title} - {edu.school} - {edu.degree} ({edu.year})
                        <DeleteButton onDelete={() => handleDeleteEducation(index)} /> {/* bruker gjenbrukbar DeleteButton */}
                    </li>
                ))}
            </ul>
        </fieldset>
    );
}

export default EducationForm;



