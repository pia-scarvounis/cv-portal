import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import SkillsLanguagesForm from "./components/SkillsLanguagesForm";
import SavedMessage from "./components/SavedMessage";
import CVPreview from "./components/CVPreview";
import MyCV from "./components/MyCV"; 
import LoginForm from "./components/LoginForm"; 

function App() {
    const [personalInfo, setPersonalInfo] = useState({});
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [savedMessage, setSavedMessage] = useState("");
    const [savedCVs, setSavedCVs] = useState([]);

    // 🚀 Lagre en CV
    const handleSave = () => {
        const newCV = { personalInfo, education, experience, skills, languages };
        setSavedCVs([...savedCVs, newCV]); 
        console.log("CV lagret:", newCV); 
    
        setSavedMessage("Alle opplysninger er lagret! ✅");
        setTimeout(() => setSavedMessage(""), 3000);
    };

    // 🗑️ Slett en CV
    const handleDeleteCV = (index) => {
        const updatedCVs = savedCVs.filter((_, i) => i !== index);
        setSavedCVs(updatedCVs);
    };

    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <h2>Velkommen til CV-portalen</h2>
                            <p>Her kan du lage og administrere dine CV-er</p>
                            <PersonalInfoForm setPersonalInfo={setPersonalInfo} />
                            <EducationForm setEducation={setEducation} />
                            <ExperienceForm setExperience={setExperience} />
                            <SkillsLanguagesForm setSkills={setSkills} setLanguages={setLanguages} />
                            <SavedMessage message={savedMessage} />
                            <button type="button" onClick={handleSave}>Lagre alle opplysninger</button>
                            <CVPreview 
                                personalInfo={personalInfo} 
                                education={education} 
                                experience={experience} 
                                skills={skills} 
                                languages={languages} 
                            />
                        </>
                    } />

                    {/* ✅ Sender savedCVs og handleDeleteCV til MyCV */}
                    <Route path="/my-cv" element={<MyCV savedCVs={savedCVs} onDeleteCV={handleDeleteCV} />} />

                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </main>
        </div>
    )
}

export default App;







