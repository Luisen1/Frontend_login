import axios from "axios";

const API_URL = "http://localhost:8080/auth";
const API_URL_USER = "http://localhost:8080/user";
const API_URL_RECOVERY = "http://localhost:8080/email";

export async function login(email: string, password: string) {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem("token", response.data.jwtToken);
  localStorage.setItem("role", response.data.roles[0].name); // Almacena el rol del usuario
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role"); // Elimina el rol del usuario
}

export const register = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL_USER}/register`, { username, email, password });
    return response.data;
  } catch (error) {
    throw new Error("Error al registrar usuario");
  }
};

export const resetPassword = async (email: string) => {
  try {
    const response = await axios.post(`${API_URL_RECOVERY}/password-recovery`, { email });
    return response.data;
  } catch (error) {
    throw new Error("Error al enviar la solicitud de restablecimiento de contraseña");
  }
};

export const changePassword = async (password: string) => {
  try {
    const response = await axios.post(`${API_URL_USER}/change-password`, { password });
    return response.data;
  } catch (error) {
    throw new Error("Error al cambiar la contraseña");
  }
};

export const verifyCode = async (code: string) => {
  try {
    const response = await axios.post(`${API_URL_USER}/validate-code`, { code });
    return response.data;
  } catch (error) {
    throw new Error("Error al verificar el código");
  }
};