import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../services/authService"; // Asegúrate de tener esta función en tu servicio
import "./ChangesPassword.css"; // Importa el archivo CSS

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      await changePassword(email, password, code);
      setSuccess("Contraseña cambiada exitosamente.");
      setTimeout(() => navigate("/"), 2000); // Redirige a la página de inicio de sesión
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    }
  };

  return (
    <div className="change-container">
      <form className="change-form" onSubmit={handleChangePassword}>
        <h2 className="change-title">Cambiar Contraseña</h2>
        <input
          className="change-input"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="change-input"
          type="password"
          placeholder="Nueva Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="change-input"
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input
          className="change-input"
          type="text"
          placeholder="Código de Seguridad"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button className="change-button">Cambiar</button>
        {error && <p className="change-error">{error}</p>}
        {success && <p className="change-success">{success}</p>}
      </form>
    </div>
  );
}

export default ChangePassword;