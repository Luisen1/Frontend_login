import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Bienvenido al Dashboard</h1>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Dashboard;
