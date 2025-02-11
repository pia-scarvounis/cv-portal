import React from "react"; 

function SavedMessage({ message }) {
   if (!message) return null;
   return <p style={{ color: "blue", fontWeight: "bold"}}>{message}</p>;} 


export default SavedMessage;