import { useState } from "react";
import contactlist from "../components/ContactsList";
function Formu() {
    const [formData, setFormData] = useState({
        lastname: null,
        firstname: null,
        email: null,
        numero: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Utilisez formData pour envoyer les données ou effectuer d'autres opérations
        console.log('Données du formulaire :', formData);
        contactlist.push(formData);
        console.log(contactlist)


    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom :</label>
                <input type="text" name="lastname" value={formData.lastname || ''} onChange={handleInputChange} />
            </div>
            <div>
                <label>Prénom :</label>
                <input type="text" name="firstname" value={formData.firstname || ''} onChange={handleInputChange} />
            </div>

            <div>
                <label>Email :</label>
                <input type="text" name="email" value={formData.email || ''} onChange={handleInputChange}  />
            </div>

            <div>
                <label>N° téléphone :</label>
                <input type="text" name="numero" value={formData.numero || ''} onChange={handleInputChange}  />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form >
    )
}

export default Formu;
