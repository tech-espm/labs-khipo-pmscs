"use client";

import React, { useState } from "react";
import Image from "next/image";
import GreenEllipse from "../../../public/GreenEllipse.png";

export default function CadastroMentor() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    endereco: "",
    telefone: "",
    areaAtuacao: "",
    motivo: "",
    termos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Formulário enviado com sucesso!");
    setFormData({
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      telefone: "",
      areaAtuacao: "",
      motivo: "",
      termos: false,
    });
  };

  return (<>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-10">
        <h1 className="text-4xl font-bold mb-2 text-left">Cadastro Mentor</h1>
        <p className="text-lg text-gray-600 text-left">

        Para se inscrever no programa de mentoria para Startups do Parque 
        Tecnológico de São Caetano

        </p>
      </div>
    </div>
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-10 bg-gray-50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-2">Nome (Seu nome)</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome (Seu nome)"
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">E-mail (E-mail coorporativo)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail (E-mail coorporativo)"
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">CPF</label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="CPF"
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Endereço</label>
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                placeholder="Endereço"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Telefone (Com DDD)</label>
              <input
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="Telefone (Com DDD)"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Área de atuação</label>
              <input
                type="text"
                name="areaAtuacao"
                value={formData.areaAtuacao}
                onChange={handleChange}
                placeholder="Área de atuação"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-2">Por que você gostaria de ser um mentor?</label>
            <textarea
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              placeholder="Por que você gostaria de ser um mentor?"
              className="w-full border border-gray-300 rounded-lg p-2 h-32"
            />
          </div>

          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              name="termos"
              checked={formData.termos}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <label>
              Ao preencher este formulário, uma copia do mesmo será encaminhada para o e-mail oficial:
              (credenciamento.startup@saocaetanodosul.sp.gov.br) , garantindo a inscrição conforme normas do EDITAL.
            </label>
          </div>

          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              name="termos2"
              checked={formData.termos2}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <label>
              Declaro ter lido e ter sido suficientemente informado sobre o conteúdo deste Termo e concordo com o tratamento
              dos meus Dados Pessoais aqui descrito de forma livre e esclarecida, em observância à Lei Geral de Proteção de
              Dados e às demais normativas sobre proteção de Dados Pessoais aplicáveis.
            </label>
          </div>

          <button
            type="submit"
            className="w-48 bg-[#573589] text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
          >
            Confirmar Inscrição
          </button>
        </form>
      </div>

      <Image src={GreenEllipse} alt="Imagem ilustrativa" className="absolute right-0 top-36" />
    </div>
    </>);
}