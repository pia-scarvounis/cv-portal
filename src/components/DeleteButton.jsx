import React from "react";

function DeleteButton({ onDelete }) {
    return (
        <button 
            type="button" 
            onClick={onDelete} 
            style={{ marginLeft: "10px", cursor: "pointer", background: "none", border: "none", fontSize: "17px" }}
        >
            🗑️
        </button>
    );
}

export default DeleteButton;
