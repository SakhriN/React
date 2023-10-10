import { NavLink, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Menu() {
  return (
    <div >
      <header>
        <div className="navlink bg-danger text-light">
          <NavLink className="text-light nav-link-item text-decoration-none" to="/">Home</NavLink>
          <NavLink className="text-light nav-link-item text-decoration-none" to="/contact">Contacts</NavLink>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Menu