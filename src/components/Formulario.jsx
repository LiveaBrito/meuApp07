import { useState } from "react";
import ReactDOM from 'react-dom/client';

function Formulario(){
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDeFault();
        alert(`The name you entered was: ${name}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name: 
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <input type="submit" />
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Formulario/>);

export default Formulario