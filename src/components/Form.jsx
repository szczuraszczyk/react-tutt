import { useState } from "react";

export const Form = ({ onAddPerson }) => {

    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [city, setCity] = useState("");

    return <form onSubmit={(e) => {
        e.preventDefault();
        onAddPerson({ name, tel, city });
    }}>
        <div>
            <input defaultValue={name}
                onChange={(e) => { setName(e.target.value); }} type="text" name="name" id="Imię" />
        </div>

        <div>
            <input defaultValue={tel} onChange={(e) => { setTel(e.target.value); }} type="tel" name="tel" id="Telefon" />
        </div>

        <div>
            <input defaultValue={city} onChange={(e) => { setCity(e.target.value); }} type="text" name="city" id="Miasto" />
        </div>
        
        <button disabled={name.length === 0 || tel.length === 0}>Zapisz</button>
    </form>
}