import React from "react";
import "../styles/table.css";

function table(props) {
    return (
        <>
        <th scope="row"><img className="personImage" alt={props.name} src={props.img} /></th>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        </>
    )
}

export default table; 
