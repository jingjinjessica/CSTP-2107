import { NavLink } from "react-router-dom";

const Nav = () => {
  
  return (
    <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorite">Fav</NavLink>
    </>
  );
}
export default Nav;