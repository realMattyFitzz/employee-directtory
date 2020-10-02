import React from "react";
import "../styles/search.css";

function search(props) {
    return(
        <form>
            <input 
            className="seachBar"
            value = {props.search}
            onCharge = {props.handleInputChange}
            name = "search"
            type = "text">
            </input>
        </form>
    )
}

export default search; 