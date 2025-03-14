"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import CustomButtom from "../CustomButtom";

interface BoxHomeProps {
  title: string;
  description?: string;
  color?: string;
  image_component: StaticImageData;
  isOpen?: boolean;
  onClick: () => void;
}

export default function BoxHome(props: BoxHomeProps) {
  return (
    <div className={`${props.color} flex flex-col md:flex-row transition-all ease-in`}>
      <div className="text-white min-h-[20rem] h-full w-full md:w-fit p-5 md:p-10">
        <div
          className="h-full flex flex-col justify-between gap-5 md:gap-10 py-5 items-center cursor-pointer"
          onClick={props.onClick}
        >
          <Image src={props.image_component} alt="." width={26} height={26} />
          <p
            style={{
              textOrientation: "mixed",
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
              fontSize: "24px",
              textAlign: "left",
            }}
            className="font-bold"
          >
            {props.title}
          </p>
        </div>
      </div>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: props.isOpen ? "auto" : 0, opacity: props.isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden text-white flex flex-col justify-center w-full md:w-auto"
      >
        {props.isOpen && (
          <div className="flex flex-col gap-5 p-5">
            <h1 className="text-[24px] md:text-[32px] font-bold">{props.title}</h1>
            <p className="text-[16px] md:text-[20px] font-light">{props.description}</p>
            <CustomButtom title="Saber mais" className="p-2 border-2 border-white rounded-lg" />
          </div>
        )}
      </motion.div>
    </div>
  );
}
