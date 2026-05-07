import { PersonInfo } from "./components/PersonInfo";

const people = [
  {name: "Filip", tel: 123456111, city: "Kraków"},
  {name: "Kacper", tel: 123456222, city: "Kraków"},
];

const PersonInfoElements = people.map(person => <PersonInfo name={person.name} tel={person.tel} city={person.city}/>);

function App() {


  return (
    <>
      <h1>Lista kontaktów</h1>
      {PersonInfoElements}
    </>
  )
}

export default App
