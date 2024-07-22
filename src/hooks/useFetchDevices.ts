import { useState, useEffect } from "react";

const useFetchDevices = () => {
  const [devices, setDevices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch("http://0.0.0.0:8000/devices");
        if (!response.ok) {
          throw new Error("Error fetching devices");
        }
        const data = await response.json();
        setDevices(data.devices);
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
