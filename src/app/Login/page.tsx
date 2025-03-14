"use client";

import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Faça seu login</h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Para logar preencha as informações abaixo
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
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Senha</label>
            <input
              type="password"
              placeholder="Senha"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-purple-300"
            />
          </div>
          <div className="text-left text-sm hover:underline mb-4">
            <p>Esqueceu a Senha?</p>
            <a href="/recuperar-senha" className="text-purple-600 text-sm hover:underline">
              Recuperar senha
            </a>
          </div>
          <div className="space-y-4">

            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-full hover:bg-purple-800 transition-all"
            >
              Entrar
            </button>

            <button
              type="button"
              className="w-full border border-purple-700 text-purple-700 py-2 rounded-full hover:bg-purple-50 transition-all"
            >
              Voltar para home
            </button>
          </div>
        </form>
        <Image src={logo} alt="Logo" className="mt-4 mx-auto" />
      </div>
    </div>
  );
}
