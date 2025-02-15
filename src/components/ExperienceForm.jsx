import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton"; // 🔹 Importer redigeringsknappen

function ExperienceForm({ setExperience }) {
    const [experiences, setExperiences] = useState([]);
    const [jobTitle, setJobTitle] = useState("");
    const [company, setCompany] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [currentlyWorking, setCurrentlyWorking] = useState(false);
    const [editIndex, setEditIndex] = useState(null); // 🔹 Holder styr på hva som redigeres

    const handleAddExperience = () => {
        if (jobTitle && company && startDate) {
            const newExperience = [...experiences];

            if (editIndex !== null) {
                newExperience[editIndex] = { jobTitle, company, startDate, endDate: currentlyWorking ? "Nåværende" : endDate };
                setEditIndex(null);
            } else {
                newExperience.push({ jobTitle, company, startDate, endDate: currentlyWorking ? "Nåværende" : endDate });
            }

            setExperiences(newExperience);
            setExperience(newExperience);
            setJobTitle("");
            setCompany("");
            setStartDate("");
            setEndDate("");
            setCurrentlyWorking(false);
        }
    };

    const handleEditExperience = (index) => {
        const exp = experiences[index];
        setJobTitle(exp.jobTitle);
        setCompany(exp.company);
        setStartDate(exp.startDate);
        setEndDate(exp.endDate);
        setEditIndex(index);
    };

    const handleDeleteExperience = (index) => {
        const updatedExperience = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperience);
        setExperience(updatedExperience);
    };

    return (
        <fieldset>
            <legend>Arbeidserfaring</legend>

            <label>Stillingstittel:</label>
            <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Skriv inn stilling"/>

            <label>Bedrift:</label>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Skriv inn bedriftsnavn"/>

            <label>Startdato:</label>
            <input type="month" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>

            <label>Sluttdato:</label>
            <input type="month" value={endDate} onChange={(e) => setEndDate(e.target.value)} disabled={currentlyWorking}/>

            <label>
                <input type="checkbox" checked={currentlyWorking} onChange={() => setCurrentlyWorking(!currentlyWorking)}/>
                Arbeider her nå
            </label>

            <button type="button" onClick={handleAddExperience}>{editIndex !== null ? "Oppdater erfaring" : "Legg til erfaring"}</button>

            <ul>
                {experiences.map((exp, index) => (
                    <li key={index}>
                        {exp.jobTitle} hos {exp.company} ({exp.startDate} - {exp.endDate})
                        <EditButton onEdit={() => handleEditExperience(index)} /> {/* 🔹 Legger til redigeringsknapp */}
                        <DeleteButton onDelete={() => handleDeleteExperience(index)} />
                    </li>
                ))}
            </ul>
        </fieldset>
    );
}

export default ExperienceForm;



