import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="container-fluid">
        <nav className="navbar">
          <div className="mx-2">
            <NavLink className="navbar-brand" to="/">
              <img src='./meetup_logo.png' className="img-fluid" alt="logo" style={{ width : "100px", height: "auto"}}/>
            </NavLink>
          </div>
        </nav>
        <hr className="my-2"/>
      </header>
    </>
  );
};
export default Header;
