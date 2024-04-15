import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand text-center">
      <div className="container-fluid grid justify-content-center">
        <Link to="/"> Home </Link>
        &nbsp;|&nbsp;
        <Link to="/favoritos"> Favoritos </Link>
      </div>
    </nav>
  );
};
export default Navbar;
