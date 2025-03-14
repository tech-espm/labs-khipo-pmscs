"use client";

import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";

export default function RecuperarSenhaPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Recuperar senha
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Preencha seu e-mail para recuperar senha
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-purple-300"
            />
          </div>
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-full hover:bg-purple-800 transition-all"
            >
              Entrar
            </button>

            <div className="text-center">
              <a href="/recuperar-senha" className="text-purple-600 text-sm hover:underline">
                Voltar para login
              </a>
            </div>

          </div>
        </form>
        <Image src={logo} alt="Logo" className="mt-4 mx-auto" />
      </div>
    </div>
  );
}
