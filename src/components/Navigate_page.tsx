import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

export function NavBar() {
  const [isBizz, setIsBizz] = useState(false)

  useEffect(() => {
    const isBizzUser = ReactSession.get("bizz")
    setIsBizz(Boolean(isBizzUser))
  }, [])

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(true)
    const user = ReactSession.get("_id");
    if (!user || user.length === 0) {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    ReactSession.remove("_id")
    ReactSession.remove("bizz")
    setIsLoggedIn(false);
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="nav-link active" exact to="/">
          BookStore
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/contact">
                Contact
              </NavLink>
            </li>
            {isBizz && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/addBook">
                    Add Book
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/yourBooks">
                    Your Books
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink className="nav-link active" to="/shop">
                shoping basket
              </NavLink>
            </li>
          </ul>
          {isLoggedIn ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="nav-link active" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/register">
                  Register
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
