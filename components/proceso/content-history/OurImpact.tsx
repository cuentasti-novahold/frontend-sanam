"use client";

import React from "react";
import Image from "next/image";
import "@/styles/proceso.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function OurImpact() {
  const t = useTranslations();

  /* Obtengo el texto y lo divido en dos partes usando los || */
  const p_impact_parts = t("p-impact-coffe").split("||");

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <div
      className="xl:flex p-2 xl:p-10 xl:items-center xl:justify-center bg-[#3e742962] xl:min-h-screen"
      data-aos="fade-right"
    >
      <div className="flex-1 w-34 m-3 xl:m-0">
        <div className="flex items-center justify-center xl:justify-between">
          <h1 className="uppercase text-3xl xl:text-4xl font-semibold mt-4 xl:mt-0 ">
            {t("our-impact")}
          </h1>
        </div>

        <div className="p-5 xl:p-0 xl:mt-[1rem] xl:mr-8">
          <p className="text-xl xl:text-2xl text-justify text-[#3b4146]">
            {p_impact_parts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < p_impact_parts.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>

      <div className="relative xl:flex flex-1 w-76 m-3 xl:items-center xl:justify-center h-[20rem] xl:h-[33rem]">
        <Image
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          src={"/img/proceso/nuestro-impacto.jpg"}
          alt="banner proceso"
        />
        <div className="absolute inset-0 opacity-15 rounded-lg bg-gray-700"></div>
      </div>
    </div>
  );
}
