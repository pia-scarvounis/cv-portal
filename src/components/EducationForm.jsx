import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton"; // 🔹 Importer redigeringsknappen

function EducationForm({ setEducation }) {
    const [educations, setEducations] = useState([]);
    const [title, setTitle] = useState("");
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [year, setYear] = useState("");
    const [editIndex, setEditIndex] = useState(null); // 🔹 Holder styr på hva som redigeres

    const handleAddEducation = () => {
        if (title && school && degree && year) {
            const newEducation = [...educations];

            if (editIndex !== null) {
                newEducation[editIndex] = { title, school, degree, year }; // Oppdaterer eksisterende
                setEditIndex(null);
            } else {
                newEducation.push({ title, school, degree, year }); // Legger til ny utdanning
            }

            setEducations(newEducation);
            setEducation(newEducation);
            setTitle("");
            setSchool("");
            setDegree("");
            setYear("");
        }
    };

    const handleEditEducation = (index) => {
        const edu = educations[index];
        setTitle(edu.title);
        setSchool(edu.school);
        setDegree(edu.degree);
        setYear(edu.year);
        setEditIndex(index); // 🔹 Setter hvilket element som redigeres
    };

    const handleDeleteEducation = (index) => {
        const updatedEducation = educations.filter((_, i) => i !== index);
        setEducations(updatedEducation);
        setEducation(updatedEducation);
    };

    return (
        <fieldset>
            <legend>Utdanning</legend>

            <label>Tittel:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Skriv inn din tittel"/>

            <label>Skole/Universitet:</label>
            <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="Skriv inn skole/universitet"/>

            <label>Grad:</label>
            <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} placeholder="Skriv inn grad"/>

            <label>Fullført:</label>
            <input type="month" value={year} onChange={(e) => setYear(e.target.value)}/>

            <button type="button" onClick={handleAddEducation}>{editIndex !== null ? "Oppdater utdanning" : "Legg til utdanning"}</button>

            <ul>
                {educations.map((edu, index) => (
                    <li key={index}>
                        {edu.title} - {edu.school} - {edu.degree} ({edu.year})
                        <EditButton onEdit={() => handleEditEducation(index)} /> {/* 🔹 Legger til redigeringsknapp */}
                        <DeleteButton onDelete={() => handleDeleteEducation(index)} />
                    </li>
                ))}
            </ul>
        </fieldset>
    );
}

export default EducationForm;




