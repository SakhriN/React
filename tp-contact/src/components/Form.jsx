import { useState } from "react";

function Formu() {
    const [formData, setFormData] = useState({
        nom: null,
        prenom: null,
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
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom :</label>
                <input type="text" name="nom" value={formData.nom || ''} onChange={handleInputChange} />
            </div>
            <div>
                <label>Prénom :</label>
                <input type="text" name="prenom" value={formData.prenom || ''} onChange={handleInputChange} />
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
