"use client";

import React, { useState } from "react";
import Image from "next/image";
import GreenEllipse from "../../../public/GreenEllipse.png";


const Input = ({ label, type = "text", name, value, onChange, placeholder, required = false }) => (
  <div>
    <label className="block font-semibold mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full border border-gray-300 rounded-lg p-2"
    />
  </div>
);

const Textarea = ({ label, name, value, onChange, placeholder }) => (
  <div>
    <label className="block font-semibold mb-2">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-lg p-2 h-32"
    />
  </div>
);

const Checkbox = ({ label, name, checked, onChange, required = false }) => (
  <div className="flex items-start gap-4">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      required={required}
      className="mt-1"
    />
    <label>{label}</label>
  </div>
);

export default function CadastroEmpreendedor() {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    cnpj: "",
    razaoSocial: "",
    cpf: "",
    email: "",
    telefone: "",
    areaNegocio: "",
    motivo: "",
    descricao: "",
    bairro: "",
    siteRedes: "",
    termos: false,
    termos2: false,
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
      nomeEmpresa: "",
      cnpj: "",
      razaoSocial: "",
      cpf: "",
      email: "",
      telefone: "",
      areaNegocio: "",
      motivo: "",
      descricao: "",
      bairro: "",
      siteRedes: "",
      termos: false,
      termos2: false,
    });
  };

  return (<>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-10">
        <h1 className="text-4xl font-bold mb-2 text-left">Cadastro Empreendedor</h1>
        <p className="text-lg text-gray-600 text-left">

        Este programa se destina a criar um forum online de startups conectadas ao parque tecnologico de são <br/>
        caetano, afim de incluir todas as startups que desejam participar da programaçao do parque, com <br/>
        mentorias, palestras e eventos, e network, gerando maior fomento nas atividades e relações do parque e <br/> 
        suas startups. 

        </p>
      </div>
    </div>
    <div className="bg-gray-50">

      <div className="max-w-7xl mx-auto p-10 bg-gray-50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="Nome Completo"
              name="nomeCompleto"
              value={formData.nomeCompleto}
              onChange={handleChange}
              placeholder="Nome Completo"
              required
            />
            <Input
              label="E-mail (E-mail coorporativo)"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              placeholder="E-mail (E-mail coorporativo)"
              required
            />
            <Input
              label="Razão Social (Nome da Empresa)"
              name="razaoSocial"
              value={formData.razaoSocial}
              onChange={handleChange}
              placeholder="Razão Social (Nome da Empresa)"
              required
            />
            <Input
              label="CPF"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="CPF"
              required
            />
            <Input
              label="CNPJ"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="CNPJ"
            />
            <Input
              label="Endereço"
              name="areaNegocio"
              value={formData.areaNegocio}
              onChange={handleChange}
              placeholder="Endereço"
            />
            <Input
              label="Nome do representante legal"
              name="razaoSocial"
              value={formData.razaoSocial}
              onChange={handleChange}
              placeholder="Nome do representante legal"
              required
            />
            <Input
              label="Telefone (Com DDD)"
              name="razaoSocial"
              value={formData.razaoSocial}
              onChange={handleChange}
              placeholder="Telefone (Com DDD)"
              required
            />
          </div>
          <Textarea
            label="Resumo do Projeto"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            placeholder="Resumo do Projeto"
          />
          <Textarea
            label="Modelo de negócios (Descreva abaixo, quais os modelos de negocio que a empresa possui)"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Modelo de negócios (Descreva abaixo, quais os modelos de negocio que a empresa possui)"
          />
          <Textarea
            label="Mercado (Descreva abaixo qual tipo de mercado em que a empresa atua e quais seus concorrentes diretos)"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Mercado (Descreva abaixo qual tipo de mercado em que a empresa atua e quais seus concorrentes diretos)"
          />
          <Textarea
            label="Descrição Geral do Projeto"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Descrição Geral do Projeto"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="Perfil do público alvo"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
              placeholder="Perfil do público alvo"
            />
            <Input
              label="Descrição Geral do Projeto"
              name="siteRedes"
              value={formData.siteRedes}
              onChange={handleChange}
              placeholder="Descrição Geral do Projeto"
            />
          </div>
          <Checkbox
            label="Ao preencher este formulário, 
            uma cópia do mesmo será enviada para o e-mail oficial:
            (credenciamento.startup@saocaetanodosul.sp.gov.br), 
            garantindo a inscrição conforme normas do EDITAL."
            name="termos"
            checked={formData.termos}
            onChange={handleChange}
            required
          />
          <Checkbox
            label="Declaro ter lido e ter sido suficientemente informado sobre 
            o conteúdo deste Termo e concordo com o tratamento dos meus Dados Pessoais 
            aqui descrito de forma livre e esclarecida, em observância 
            à Lei Geral de Proteção de Dados e às demais normativas sobre 
            proteção de Dados Pessoais aplicáveis."

            name="termos2"
            checked={formData.termos2}
            onChange={handleChange}
            required
          />

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
