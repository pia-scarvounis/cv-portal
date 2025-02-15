import React, { useState } from "react";
import DeleteButton from "./DeleteButton"; // importerer DeleteButton

function PersonalInfoForm({ setPersonalInfo }) {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(""); 
    const [address, setAddress] = useState("");
    const [savedInfo, setSavedInfo] = useState(null); // holder på lagret info for visning

    const handleSavePersonalInfo = () => {
        const newInfo = { name, dob, email, phone, address };
        setPersonalInfo(newInfo); // sender data til App.jsx
        setSavedInfo(newInfo); // oppdaterer synlig info i komponenten
    };

    const handleDeletePersonalInfo = () => {
        setPersonalInfo({}); // nullstiller i App.jsx
        setSavedInfo(null);  // nullstiller i denne komponenten
        setName("");
        setDob("");
        setEmail("");
        setPhone("");
        setAddress("");
    };

    return (
        <fieldset>
            <legend>Personlig informasjon</legend>

            <label>Fullt Navn:</label>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Skriv inn fullt navn" 
            />

            <label>Fødselsdato:</label>
            <input 
                type="date" 
                value={dob} 
                onChange={(e) => setDob(e.target.value)}
            />

            <label>E-mail:</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Skriv inn e-post" 
            />

            <label>Tlf:</label>
            <input 
                type="tel" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="Skriv inn telefonnummer" 
            />

            <label>Adresse:</label>
            <input 
                type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                placeholder="Skriv inn adresse" 
            />

            <button type="button" onClick={handleSavePersonalInfo}>Lagre personlig informasjon</button>

            {/* viser lagret informasjon hvis den finnes */}
            {savedInfo && (
                <div>
                    <h4>Personlig informasjon lagt til:</h4>
                    <ul>
                        <li>Navn: {savedInfo.name}</li>
                        <li>Fødselsdato: {savedInfo.dob}</li>
                        <li>E-mail: {savedInfo.email}</li>
                        <li>Tlf: {savedInfo.phone}</li>
                        <li>Adresse: {savedInfo.address}</li>
                    </ul>

                    {/* bruker DeleteButton til å slette hele seksjonen */}
                    <DeleteButton onDelete={handleDeletePersonalInfo} />
                </div>
            )}
        </fieldset>
    );
}

export default PersonalInfoForm;


