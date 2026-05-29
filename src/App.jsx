import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";

import "./App.css";

const initialPeople = [
  { name: "Filip", tel: 123456111, city: "Kraków", id: crypto.randomUUID() },
  { name: "Kacper", tel: 123456222, city: "Kraków", id: crypto.randomUUID() },
  { name: "Pati", tel: 123456333, id: crypto.randomUUID() },
];


function App() {

  const addPerson = (data) => {
    console.log(data);
    const newPeople = [...people, data];
    setPeople(newPeople);
    setIsFormShown(false);
  };

  const delPerson = (id) => {
    console.log("usun");
    const newPeople = people.filter(person => {
      if (person.id === id) {
        return false;
      } else {
        return true;
      }
    })
    setPeople(newPeople);

  }

  const [isFormShown, setIsFormShown] = useState(false);
  const [people, setPeople] = useState(initialPeople)
  const handleShownFormClick = () => setIsFormShown(true);

  return (
    <>
      <h1>Lista kontaktów</h1>
      {isFormShown ? (<Form onAddPerson={addPerson} />) : (<button onClick={handleShownFormClick}>Dodaj</button>)}
      <ul>
      {people.map(person => <PersonInfo key={person.id} id={person.id} name={person.name} tel={person.tel} city={person.city} onDelPerson={delPerson} />)}
      </ul>
    </>
  )
}

export default App
