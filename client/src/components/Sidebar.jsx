import { Link } from "react-router-dom";

import {
  FaHome,
  FaBuilding,
  FaMap,
  FaEnvelope,
  FaCalendarAlt,
  FaSignOutAlt
}
from "react-icons/fa";

import "../styles/sidebar.css";

function Sidebar() {

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";

  };

  return (
    <aside className="sidebar">

      {/* <h2>Prime Estates</h2> */}
      <p>
        
      </p>

      <nav>

        <Link to="/dashboard">
          <FaHome />
          Dashboard
        </Link>

        <Link to="/manage-properties">
          <FaBuilding />
          Properties
        </Link>

        {/* <Link to="/manage-lands">
          <FaMap />
          Lands
        </Link> */}

        <Link to="/manage-inquiries">
          <FaEnvelope />
          Inquiries
        </Link>

        {/* <Link to="/manage-bookings">
          <FaCalendarAlt />
          Bookings
        </Link> */}

        <button onClick={logout}>
          <FaSignOutAlt />
          Logout
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;