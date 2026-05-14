import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";

const people = [
  {name: "Filip", tel: 123456111, city: "Kraków", id: crypto.randomUUID()},
  {name: "Kacper", tel: 123456222, city: "Kraków", id: crypto.randomUUID()},
  {name: "Pati", tel: 123456333, id: crypto.randomUUID()},
];

// const PersonInfoElements = people.map(person => <PersonInfo name={person.name} tel={person.tel} city={person.city}/>);

function App() {

  const [isFormShown, setIsFormShown] = useState(false);
  const handleShownFormClick = () => setIsFormShown(true);

  return (
    <>
      <h1>Lista kontaktów</h1>
      {isFormShown ? (<Form />) : (<button onClick={handleShownFormClick}>Dodaj</button>)}
      {people.map(person => <PersonInfo name={person.name} tel={person.tel} city={person.city}/>)}
    </>
  )
}

export default App
