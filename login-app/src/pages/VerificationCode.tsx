import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyCode } from "../services/authService"; // Asegúrate de tener esta función en tu servicio
import "./VerificationCode.css"; // Importa el archivo CSS

function VerificationCode() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await verifyCode(code);
      setSuccess("Código verificado exitosamente.");
      setTimeout(() => navigate("/change-password"), 2000); // Redirige a la página de cambio de contraseña
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    }
  };

  return (
    <div className="verification-container">
      <form className="verification-form" onSubmit={handleVerifyCode}>
        <h2 className="verification-title">Verificar Código</h2>
        <input
          className="verification-input"
          type="text"
          placeholder="Código"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button className="verification-button">Verificar</button>
        {error && <p className="verification-error">{error}</p>}
        {success && <p className="verification-success">{success}</p>}
      </form>
    </div>
  );
}

export default VerificationCode;