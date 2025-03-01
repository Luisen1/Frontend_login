import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import "./Dashboard.css"; // Importa el archivo CSS
import { useEffect, useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    console.log("User role from localStorage:", userRole); // Agrega este console.log
    if (userRole) {
      setRole(userRole);
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Bienvenido al Dashboard</h1>
        <span className="user-role">{role}</span>
      </div>
      <div className="dashboard-buttons">
        <button className="user-button">User</button>
        {role === "ADMIN" && <button className="admin-button">Admin</button>}
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Dashboard;
