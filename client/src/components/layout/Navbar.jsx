import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaUser,
  FaTachometerAlt,
  FaBuilding,
  FaEnvelope,
  FaSignOutAlt,
  FaChevronDown
} from "react-icons/fa";

import "../../styles/navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [adminOpen, setAdminOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);

  const token = localStorage.getItem("token");

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {

    const close = (e) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setAdminOpen(false);
      }

    };

    document.addEventListener("mousedown", close);

    return () =>
      document.removeEventListener("mousedown", close);

  }, []);

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";

  };

  const closeMenu = () => {

    setMenuOpen(false);

  };

  return (

    <header className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="nav-container">

        <Link to="/" className="logo">

          Prime<span>Estates</span>

        </Link>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/properties" onClick={closeMenu}>
            Properties
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          {!token ? (

            <NavLink
              to="/login"
              className="login-btn"
              onClick={closeMenu}
            >
              <FaUser />
              Login
            </NavLink>

          ) : (

            <div
              className="admin-menu"
              ref={dropdownRef}
            >

              <button
                className="admin-btn"
                onClick={() => setAdminOpen(!adminOpen)}
              >

                <FaUser />

                Admin

                <FaChevronDown />

              </button>

              {adminOpen && (

                <div className="admin-dropdown">

                  <Link
                    to="/dashboard"
                    onClick={() => {
                      closeMenu();
                      setAdminOpen(false);
                    }}
                  >

                    <FaTachometerAlt />

                    Dashboard

                  </Link>

                  <Link
                    to="/manage-properties"
                    onClick={() => {
                      closeMenu();
                      setAdminOpen(false);
                    }}
                  >

                    <FaBuilding />

                    Properties

                  </Link>

                  <Link
                    to="/manage-inquiries"
                    onClick={() => {
                      closeMenu();
                      setAdminOpen(false);
                    }}
                  >

                    <FaEnvelope />

                    Inquiries

                  </Link>

                  <button onClick={logout}>

                    <FaSignOutAlt />

                    Logout

                  </button>

                </div>

              )}

            </div>

          )}

        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

    </header>

  );

}

export default Navbar;