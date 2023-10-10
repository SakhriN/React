import { useParams, useSearchParams } from "react-router-dom"
import Formu from "../components/Form";
import contactlist from "../components/ContactsList";
function Contact() {
  const [searchParams] = useSearchParams()
  const cont = searchParams.get(contactlist) ?? "Il n'y a aucun contact"

  return (
    <div >
<Formu/>
<hr></hr>
<button> Add</button>
<h2>{cont}</h2>




    </div>
  );
}

export default Contact