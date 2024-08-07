import { useState, useEffect } from "react";
import api from "../axiosInstance";

const useFetchDevices = () => {
  const [devices, setDevices] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        setLoading(true);
        //Coger del localStorage el email y la contraseña y pasarla por params

        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");

        if (!email || !password) {
          throw new Error("Email or password not found");
        }

        const body = {
          email,
          password,
        };

        const response = await api.post("/devices", body);

        setDevices(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  return { devices, loading, error };
};

export default useFetchDevices;
