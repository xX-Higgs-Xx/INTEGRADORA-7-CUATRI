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
        <div className="border border-zinc-700 backdrop-blur-sm p-8 pt-7 rounded-3xl text-white text-center max-w-sm w-full shadow-md shadow-zinc-700">
          <h2 className="text-3xl mb-3 font-medium">Inicia sesión</h2>
          <div className="px-6">
            <InputField type="email" placeholder="Email" />
            <InputField type="password" placeholder="Contraseña" />
          </div>
          <div className="flex mt-9 mb-2 justify-between">
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
