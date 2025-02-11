import React, { useState } from "react";
import DeleteButton from "./DeleteButton"; // importerer den nye DeleteButton-komponenten

function SkillsLanguagesForm({ setSkills, setLanguages }) {
    const [skills, setLocalSkills] = useState([]);
    const [languages, setLocalLanguages] = useState([]);
    const [skill, setSkill] = useState("");
    const [language, setLanguage] = useState("");

    const handleAddSkill = () => {
        if (skill) {
            const newSkills = [...skills, skill];
            setLocalSkills(newSkills);
            setSkills(newSkills); // sender opp til App.jsx
            setSkill(""); 
        }
    };

    const handleAddLanguage = () => {
        if (language) {
            const newLanguages = [...languages, language];
            setLocalLanguages(newLanguages);
            setLanguages(newLanguages); // sender opp til App.jsx
            setLanguage(""); 
        }
    };

    const handleDeleteSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setLocalSkills(updatedSkills);
        setSkills(updatedSkills);
    };

    const handleDeleteLanguage = (index) => {
        const updatedLanguages = languages.filter((_, i) => i !== index);
        setLocalLanguages(updatedLanguages);
        setLanguages(updatedLanguages);
    };

    return (
        <fieldset>
            <legend>Ferdigheter og språk</legend>

            <label>Legg til ferdighet:</label>
            <input 
                type="text"
                value={skill}
                onChange={(e) => setSkill(e.target.value)} 
                placeholder="Skriv inn en ferdighet"
            />
            <button type="button" onClick={handleAddSkill}>Legg til ferdighet</button> 

            <ul>
                {skills.map((sk, index) => (
                    <li key={index}>
                        {sk} <DeleteButton onDelete={() => handleDeleteSkill(index)} /> {/* bruker DeleteButton */}
                    </li>
                ))}
            </ul>

            <label>Legg til språk:</label>
            <input 
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                placeholder="Skriv inn språk" 
            />
            <button type="button" onClick={handleAddLanguage}>Legg til språk</button> 

            <ul>
                {languages.map((lang, index) => (
                    <li key={index}>
                        {lang} <DeleteButton onDelete={() => handleDeleteLanguage(index)} /> {/* bruker DeleteButton */}
                    </li>
                ))}
            </ul>
        </fieldset>
    );
}

export default SkillsLanguagesForm;



