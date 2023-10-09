import { NavLink, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


function Menu() {
  return (
    <div >
      <header>
        <div className="navbar navbar-extend-lg bg-danger text-light">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/form">Formulaire</NavLink>
          <NavLink to="/contact">Contacter</NavLink>
          <NavLink to="/about">A Propos</NavLink>
        </div>
      </header>
      <Outlet />
      <p>Mon pied de page</p>
    </div>
  );
}

export default Menu