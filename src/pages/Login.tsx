import React from "react";
import useAuthorization from "../hooks/useAuthorization";
import logo from "../assets/tklink.webp";

const Login: React.FC = () => {
  const { handleSubmit } = useAuthorization();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <section>
          <img src={logo} alt="logo" className="mx-auto mb-4" />
        </section>
        <h2 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        {/* Descripcion */}
        <p className="text-gray-700 text-center">
          Inicia sesión con tu cuenta Tapo.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Form fields go here */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              // Add necessary props and event handlers
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              // Add necessary props and event handlers
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Acceder al Hub
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
