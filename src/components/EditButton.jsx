import React from "react";

function EditButton({ onEdit }) {
    return (
        <button 
            type="button" 
            onClick={onEdit} 
            style={{ marginLeft: "10px", cursor: "pointer", background: "none", border: "none", fontSize: "17px" }}
        >
            ✏️
        </button>
    );
}

export default EditButton;
