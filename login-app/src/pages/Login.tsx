import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";
import "./Login.css"; // Importa el archivo CSS

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Iniciar Sesión</h2>
        <input
          className="login-input"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button">Entrar</button>
        {error && <p className="login-error">{error}</p>}
        <p className="login-link">
          ¿No tienes una cuenta? <Link to="/register" className="text-blue-500">Regístrate</Link>
        </p>
        <p className="login-link">
          Recuperar contraseña <Link to="/reset-password" className="text-blue-500">Aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
