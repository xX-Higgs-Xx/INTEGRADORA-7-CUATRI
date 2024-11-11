import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div
      className="flex flex-col bg-cover bg-center "
      style={{ backgroundImage: "url('/backgroundLOGIN.jpg')" }}
    >
      <div className="flex flex-col justify-center items-center flex-grow h-screen bg-black bg-opacity-70">
        <div className="backdrop-blur-md p-10 rounded-lg text-white text-center max-w-xs w-full shadow-2xl">
          <h2 className="text-2xl mb-4">Inicia sesión</h2>
          <InputField type="email" placeholder="Email" />
          <InputField type="password" placeholder="Contraseña" />
          <div className="flex space-x-4 mt-4">
            <Button text="Iniciar Sesión" styleType="primary" />
            <Button text="Crear Cuenta" styleType="secondary" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
