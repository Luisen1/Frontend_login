import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export async function login(email: string, password: string) {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem("token", response.data.token);
}

export function logout() {
  localStorage.removeItem("token");
}
export const register = async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { name, email, password });
      return response.data;
    } catch (error) {
      throw new Error("Error al registrar usuario");
    }}
    export const resetPassword = async (email: string) => {
        try {
          const response = await axios.post(`${API_URL}/reset-password`, { email });
          return response.data;
        } catch (error) {
          throw new Error("Error al enviar la solicitud de restablecimiento de contraseña");
        }
      };