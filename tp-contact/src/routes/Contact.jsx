import Formu from "../components/Form";
import contactlist from "../components/ContactsList";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {

let tableau = contactlist
console.log(tableau)
  return (
    <div>
      <Formu />
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Prénom : </th>
            <th>Nom : </th>
            <th>Numéro de téléphone : </th>
            <th>Email : </th>
          </tr>
        </thead>
        <tbody>
          {contactlist.map((contact, index) => (
          <tr key={index}>
            <td>{contact.firstname}</td>
            <td>{contact.lastname}</td>
            <td>{contact.numero}</td>
            <td>{contact.email}</td>
          </tr>
          ),[contactlist])}
        </tbody>
      </table>
    </div>
  );
}

export default Contact;