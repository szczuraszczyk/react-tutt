import { useState } from "react";
import { Tel } from "./Tel";

import "./Personinfo.css";

export const PersonInfo = ({ id, name, tel, city, onDelPerson }) => {
  let stateArray = useState(false);
  let isExpanded = stateArray[0];
  let setIsExpanded = stateArray[1];

  const buttonEl = (
    <button onClick={() => {
      setIsExpanded(!isExpanded);
      // alert("klik")
    }}>{isExpanded ? "Schowaj" : "Pokaż"}</button>
  )

  return (
    <li className={isExpanded ? "active" : ""}>
      <h2>{name}</h2>
      {buttonEl}
      {isExpanded && (
        <>
          <h3>Telefon: <Tel tel={tel} /></h3>
          {city && <h3>Miasto: {city}</h3>  /*ternary operator aka if else, można też !== undefined A*/}
          <button onClick={() => { onDelPerson(id) }}>Usuń użytkownika</button>
        </>
      )}
    </li>
  )
}

