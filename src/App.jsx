import React, { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import AuthContext from "./context/AuthContext"; // 🔹 Henter innloggingsstatus
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
    const { user } = useContext(AuthContext); // 🔹 Henter innloggingsstatus

    const [personalInfo, setPersonalInfo] = useState({});
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [savedMessage, setSavedMessage] = useState("");
    const [savedCVs, setSavedCVs] = useState([]);

    const handleSave = () => {
        const newCV = { personalInfo, education, experience, skills, languages };
        setSavedCVs([...savedCVs, newCV]); 
        console.log("CV lagret:", newCV); 
    
        setSavedMessage("Alle opplysninger er lagret! ✅");
        setTimeout(() => setSavedMessage(""), 3000);
    };

    return (
        <div>
            <Header />
            <main>
                <Routes>
                    {/* 🔹 Hvis brukeren ikke er logget inn, send til /login */}
                    <Route path="/" element={user ? (
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
                    ) : <Navigate to="/login" />} /> {/* 🔹 Hvis ikke innlogget, send til login */}

                    {/* 🔹 Krever innlogging for å se "Min CV" */}
                    <Route path="/my-cv" element={user ? <MyCV savedCVs={savedCVs} /> : <Navigate to="/login" />} />

                    {/* 🔹 Logg inn-siden er alltid tilgjengelig */}
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;








