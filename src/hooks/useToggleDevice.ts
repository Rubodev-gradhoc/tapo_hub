import api from "../axiosInstance";

const useToggleDevice = () => {
  const toggleDevice = async (deviceHost: string, state: string) => {
    try {
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");

      if (!email || !password) {
        throw new Error("Email or password not found");
      }

      const response = await api.post(`/device/${state}`, {
        device_host: deviceHost,
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return { toggleDevice };
};

export default useToggleDevice;
