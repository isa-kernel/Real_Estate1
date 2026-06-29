import Navbar from "../components/layout/Navbar";
import "../styles/adminlayout.css";

function AdminLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="admin-content">
        {children}
      </main>
    </>
  );
}

export default AdminLayout;