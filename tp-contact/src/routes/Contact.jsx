import Formu from "../components/Form";
import ContactsList from "../components/ContactsList"; // Importez ContactsList ici

function Contact() {

  return (
    <div>
      <Formu />
      <hr />
      <table>
        <thead>{/* Entêtes de table */}</thead>
        <tbody>{/* Contenu de la table */}</tbody>
      </table>
      {/* Utilisez directement le tableau contactlist ici */}
      {ContactsList.map((contact, index) => (
        <div key={index}>
          <p>Prénom : {contact.firstname}</p>
          <p>Nom : {contact.lastname}</p>
          <p>Numéro de téléphone : {contact.numero}</p>
          <p>Email : {contact.email}</p>
        </div>
      ),[ContactsList])}
    </div>
  );
}

export default Contact;