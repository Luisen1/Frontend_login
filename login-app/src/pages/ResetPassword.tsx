import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { resetPassword } from "../services/authService";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setMessage("Revisa tu correo para restablecer tu contraseña.");
    } catch {
      setMessage("Error al enviar la solicitud. Intenta nuevamente.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleResetPassword}>
        <h2 className="text-lg font-bold mb-4">Recuperar Contraseña</h2>
        <input
          className="w-full p-2 border rounded mb-2"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white w-full p-2 rounded">Enviar enlace</button>
        {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
        <p className="text-sm text-blue-500 cursor-pointer mt-2" onClick={() => navigate("/")}>
            Volver al Login<Link to="/Login" className="text-blue-500"> Aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default ResetPassword;
