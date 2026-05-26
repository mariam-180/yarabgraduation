import { createContext, useState, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  function login(data) {
    const userData = {
      userId: data.userId,
      email: data.email,
      fullName: data.fullName,
      role: data.role,
    };

    setUser(userData);
    setToken(data.token);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", data.token);
    localStorage.setItem("refreshToken", data.refreshToken); // ← save refreshToken
  }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  }

  function updateUser(updatedFields) {
    setUser(prev => {
      const updated = { ...prev, ...updatedFields };
      localStorage.setItem("user", JSON.stringify(updated));
      return updated;
    });
  }

  // Called automatically when any request gets a 401
  async function refreshAccessToken() {
    const currentToken = localStorage.getItem("token");
    const currentRefreshToken = localStorage.getItem("refreshToken");

    if (!currentToken || !currentRefreshToken) {
      logout();
      return null;
    }

    try {
      const response = await axios.post(
        "https://lungcancer.runasp.net/api/Auth/refresh-token",
        {
          token: currentToken,
          refreshToken: currentRefreshToken,
        }
      );

      const data = response.data.data;

      // Update token + refreshToken in state and localStorage
      setToken(data.token);
      localStorage.setItem("token", data.token);
      localStorage.setItem("refreshToken", data.refreshToken);

      return data.token; // return new token so the failed request can retry
    } catch (err) {
      // Refresh failed → force logout
      logout();
      return null;
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, updateUser, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}