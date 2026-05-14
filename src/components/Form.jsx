export const Form = () => {
    return <form onSubmit={(e)=>{
        e.preventDefault();
        {console.log("formularz wysłany")}}}>
        <div>
            <input type="text" name="name" id="Imię" />
        </div>
        <div>
            <input type="tel" name="tel" id="Telefon" />
        </div>
        <div>
            <input type="text" name="city" id="Miasto" />
        </div>
        <button>Zapisz</button>
    </form>
}