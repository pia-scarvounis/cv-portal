import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";  // 🔹 Importerer EditButton

function SkillsLanguagesForm({ setSkills, setLanguages }) {
    const [skills, setLocalSkills] = useState([]);
    const [languages, setLocalLanguages] = useState([]);
    const [skill, setSkill] = useState("");
    const [language, setLanguage] = useState(""); // ✅ Rettet opp feilen

    const handleAddSkill = () => {
        if (skill) {
            const newSkills = [...skills, skill];
            setLocalSkills(newSkills);
            setSkills(newSkills);
            setSkill("");
        }
    };

    const handleAddLanguage = () => {
        if (language) {
            const newLanguages = [...languages, language];
            setLocalLanguages(newLanguages);
            setLanguages(newLanguages);
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

    const handleEditSkill = (index) => {
        setSkill(skills[index]);
        handleDeleteSkill(index);
    };

    const handleEditLanguage = (index) => {
        setLanguage(languages[index]);
        handleDeleteLanguage(index);
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
                        {sk}  
                        <EditButton onEdit={() => handleEditSkill(index)} />
                        <DeleteButton onDelete={() => handleDeleteSkill(index)} />
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
                        {lang}  
                        <EditButton onEdit={() => handleEditLanguage(index)} />
                        <DeleteButton onDelete={() => handleDeleteLanguage(index)} />
                    </li>
                ))}
            </ul>
        </fieldset>
    );
}

export default SkillsLanguagesForm;





