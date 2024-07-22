import React from "react";
import useFetchDevices from "./hooks/useFetchDevices";
import useToggleDevice from "./hooks/useToggleDevice";
import DeviceCard from "./components/DeviceCard";

const App = () => {
  const { devices, loading, error } = useFetchDevices();
  const { toggleDevice } = useToggleDevice();

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center my-4">Smart Plugs</h1>
      <div className="flex flex-wrap justify-center">
        {devices.map((device) => (
          <DeviceCard key={device.ip} device={device} onToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
};

export default App;
