import React, { useState } from "react";
import DeleteButton from "./DeleteButton"; // importerer DeleteButton

function ExperienceForm({ setExperience }) { // tar imot setExperience fra App.jsx
    const [experiences, setExperiences] = useState([]);
    const [jobTitle, setJobTitle] = useState("");
    const [company, setCompany] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [currentlyWorking, setCurrentlyWorking] = useState(false);

    const handleAddExperience = () => {
        if (jobTitle && company && startDate) {
            const newExperiences = [
                ...experiences, 
                { 
                    jobTitle, 
                    company, 
                    startDate, 
                    endDate: currentlyWorking ? "dags dato" : endDate // setter "dags dato" hvis boksen er krysset av
                }
            ];
            setExperiences(newExperiences);
            setExperience(newExperiences); // sender data til App.jsx
            setJobTitle("");
            setCompany("");
            setStartDate("");
            setEndDate("");
            setCurrentlyWorking(false); // tilbakestiller avkrysningsboksen
        } 
    };

    const handleDeleteExperience = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
        setExperience(updatedExperiences); // oppdaterer også App.jsx
    };

    return (
        <div>
            <fieldset>
                <legend>Arbeidserfaring</legend>

                <label>Stillingstittel:</label>
                <input 
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Skriv inn stilling" 
                />

                <label>Bedrift:</label>
                <input 
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Skriv inn bedriftsnavn" 
                />

                <label>Startdato:</label>
                <input 
                    type="month"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)} 
                    placeholder="mm.åååå"
                />

                {/* checkbox for "Arbeider her nå" */}
                <label>
                    <input
                        type="checkbox"
                        checked={currentlyWorking}
                        onChange={() => {
                            setCurrentlyWorking(!currentlyWorking);
                            setEndDate(""); // nullstiller sluttdato hvis brukeren huker av
                        }}
                    /> Arbeider her nå
                </label>

                {/* sluttdato vises alltid, men blir tom hvis "Arbeider her nå" er krysset av */}
                {!currentlyWorking && (
                    <>
                        <label>Sluttdato:</label>
                        <input 
                            type="month"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            placeholder="mm.åååå"
                        />
                    </>
                )}

                <button type="button" onClick={handleAddExperience}>Legg til arbeidserfaring</button>

                <ul>
                    {experiences.map((exp, index) => (
                        <li key={index}>
                            {exp.jobTitle} hos {exp.company} ({exp.startDate} - {exp.endDate})
                            <DeleteButton onDelete={() => handleDeleteExperience(index)} /> {/* bruker DeleteButton */}
                        </li>
                    ))}
                </ul>
            </fieldset>
        </div>
    );
}

export default ExperienceForm;


