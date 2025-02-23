import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { resetPassword } from "../services/authService";
import "./ResetPassword.css"; // Importa el archivo CSS

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setSuccess("Solicitud de restablecimiento de contraseña enviada. Revisa tu correo.");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    }
  };

  return (
    <div className="reset-container">
      <form className="reset-form" onSubmit={handleResetPassword}>
        <h2 className="reset-title">Restablecer Contraseña</h2>
        <input
          className="reset-input"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="reset-button">Enviar</button>
        {error && <p className="reset-error">{error}</p>}
        {success && <p className="reset-success">{success}</p>}
        <p className="reset-link">
          ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
}

export default ResetPassword;
