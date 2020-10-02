import React from "react";
import "../styles/header.css"

function header() {
    return (
        <header className="header">
            <h2 className="heading">Employee Directory</h2>
            <p className="intro">Click on carrots to filter by heading or use the search box to narrow your results.</p>
        </header>
    )
}

export default header;