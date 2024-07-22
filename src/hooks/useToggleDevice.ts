const useToggleDevice = () => {
  const toggleDevice = async (deviceHost: string, state: string) => {
    try {
      const response = await fetch(`http://0.0.0.0:8000/device/${state}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ device_host: deviceHost }),
      });

      if (!response.ok) {
        throw new Error("Error toggling device");
      }

      const data = await response.json();
      return data.message;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return { toggleDevice };
};

export default useToggleDevice;
