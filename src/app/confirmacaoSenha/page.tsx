"use client";

import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";

export default function ConfirmacaoSenha() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Recuperar senha</h1>
        <p className="text-sm text-gray-500 mb-6">
          Enviamos um e-mail com instruções para redefinir sua senha.
        </p>
        <p className="text-sm text-gray-500">Confira sua caixa de entrada.</p>
        <a
          href="/login"
          className="inline-block mt-6 bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition-all"
        >
          Voltar ao login
        </a>
        <Image src={logo} alt="Logo" className="mt-4 w-32 h-32"/>
      </div>
    </div>
  );
}
