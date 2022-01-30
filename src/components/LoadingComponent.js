import React from "react";

export const LoadingSpinner = () => {
    return <div className="d-flex justify-content-center" style={{padding : "10%"}}>
        <div className="spinner-border text-danger" role="status" style={{height : "5rem", width : "5rem", padding:"10px"}}>
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>;
}