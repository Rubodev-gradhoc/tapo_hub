import React, { useEffect } from "react";
import useFetchDevices from "../hooks/useFetchDevices";
import useToggleDevice from "../hooks/useToggleDevice";
import DeviceCard from "../components/DeviceCard";
import { useHistory } from "react-router-dom";
import Spinner from "../components/Spinner";
import Error404 from "../components/Error404";
import Header from "../components/Header";

const Hub = () => {
  const { devices, loading, error } = useFetchDevices();
  const { toggleDevice } = useToggleDevice();
  const navigate = useHistory();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (!email && !password) {
      navigate.push("/login");
    }
  }, []);

  const handleToggle = async (deviceHost, state) => {
    try {
      await toggleDevice(deviceHost, state);
      // Optionally, refresh the device list after toggling a device
      // setDevices(await fetchDevices());
    } catch (error: any) {
      console.error("Error toggling device:", error.message);
    }
  };

  if (loading) {
    return (
      <section className="h-screen flex items-center justify-center">
        <Spinner />
      </section>
    );
  }

  if (error || devices.length === 0) {
    return (
      <>
        <Header />
        <Error404 />
      </>
    );
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 pt-20">
        <div className="flex flex-wrap justify-center">
          {devices.map((device) => (
            <DeviceCard
              key={device.ip}
              device={device}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hub;
