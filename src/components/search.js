import React from "react";
import "../styles/search.css";

function search(props) {
    return(
        <form>
            <input onCharge = {props.handleInputChange} type="text"></input>
        </form>
    )
}

export default search; 