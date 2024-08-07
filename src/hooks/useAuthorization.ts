import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useAuthorization = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useHistory();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email && password) {
      setIsAuthenticated(true);
      navigate.push("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    setIsAuthenticated(true);
    navigate.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setIsAuthenticated(false);
    navigate.push("/login");
  };

  return { isAuthenticated, handleSubmit, handleLogout };
};

export default useAuthorization;
