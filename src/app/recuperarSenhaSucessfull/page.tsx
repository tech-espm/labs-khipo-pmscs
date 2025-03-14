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
                Enviamos um e-mail para email@email.com com o link para 
                recuperar sua senha. Por favor confira sua caixa de entrada.
                </p>

                <div className="text-center">
                    <a href="/recuperar-senha" className="text-purple-600 text-sm hover:underline">
                        Voltar para login
                    </a>
                </div>

                <Image src={logo} alt="Logo" className="mt-4 mx-auto" />

            </div >
        </div>  
            );
}
