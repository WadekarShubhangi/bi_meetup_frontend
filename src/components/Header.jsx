import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="container-fluid">
        <nav className="navbar">
          <div className="mx-2">
            <NavLink className="navbar-brand" to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Meetup_1.svg/1200px-Meetup_1.svg.png?20180201012710"
                className="img-fluid pt-2"
                alt="logo"
                style={{ width: "100px", height: "auto" }}
              />
            </NavLink>
          </div>
        </nav>
        <hr className="my-2" />
      </header>
    </>
  );
};
export default Header;
