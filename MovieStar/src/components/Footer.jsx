import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-azulprincipal text-gray-400 text-center p-4 text-sm w-full">
      <div className="flex justify-around">
        <div>
          <p>Contactanos</p>
          <p>777 123 4567</p>
          <p>algo_alguien@example.com</p>
        </div>
        <div>
          <p>Información</p>
          <p>Paquetes y formas de pago</p>
        </div>
      </div>
      <p className="mt-4">© 2020 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
