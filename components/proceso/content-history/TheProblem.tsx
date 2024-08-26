"use client";

import React from "react";
import "@/styles/proceso.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function TheProblem() {
  const t = useTranslations();
  const p_problem_parts = t("p-problem-love-coffe").split("||");
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <div
      className="xl:flex p-2 xl:p-10 xl:items-center xl:justify-center bg-[#64401e62] xl:min-h-screen"
      data-aos="fade-left"
    >
      <div className="relative xl:flex flex-1 w-76 m-3 xl:items-center xl:justify-center h-[20rem] xl:h-[33rem]">
        <Image
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          src={"/img/proceso/problema.jpg"}
          alt="problema"
        />
        <div className="absolute inset-0 opacity-15 rounded-lg bg-gray-700"></div>
      </div>

      <div className="flex-1 w-34 m-3 xl:m-0">
        <div className="flex flex-col items-center justify-center">
          {/* xl:justify-between */}
          <h1 className="uppercase text-3xl xl:text-4xl mt-4 xl:mt-0 font-semibold">
          {t('the-problem')}
          </h1>
          <h1 className="text-2xl xl:text-3xl m-3 xl:text-right ">
            {/* xl:text-left */}
            {t('love-coffe')}
          </h1>
        </div>

        <div className="p-5 xl:p-0 xl:mt-3 xl:m-10">
          <p className="text-xl xl:text-2xl text-justify text-[#3b4146]">
            {p_problem_parts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < p_problem_parts.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
