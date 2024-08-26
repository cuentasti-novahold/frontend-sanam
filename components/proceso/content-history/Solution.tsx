"use client";

import "@/styles/proceso.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import React from "react";

export default function Solution() {
  const t = useTranslations();
  const patent_certificate_parts = t("patent-certificate-registration").split(
    "||"
  );

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <>
      <div className="flex m-5 items-center justify-center">
        <h1 className="uppercase text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
          {t("the-solution")}
        </h1>
      </div>

      <div
        className="relative xl:flex items-center justify-center h-[25rem] xl:h-[30rem] 2xl:h-[40rem] "
        data-aos="fade-down"
      >
        <Image
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          src={"/img/proceso/solucion.jpg"}
          alt="banner proceso"
        />

        <div className="absolute inset-0 opacity-50 rounded-lg bg-gray-700"></div>

        <div className="absolute flex inset-0 sm:gap-10 md:gap-10 xl:gap-10 2xl:gap-20 items-center justify-center">
          <div className="flex-initial w-[40rem] xl:w-[35rem]">
            <p className="text-sm xl:text-xl mt-[14rem] xl:mt-[20rem] 2xl:mt-[30rem] ml-3 xl:ml-[1rem] 2xl:ml-[-2rem] text-[#bbb9b9]">
              {patent_certificate_parts.map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < patent_certificate_parts.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className="flex-initial w-50 mb-[5rem] 2xl:mb-[10rem] mr-2 xl:ml-[9rem] 2xl:ml-[30rem]">
            <div className="grid place-items-center">
              <h1 className="text-lg xl:text-5xl 2xl:text-6xl text-center font-bold text-white">
                {t("patented-technology")}
              </h1>
              <p className="text-sm xl:text-2xl text-center mt-1 xl:mt-5 xl:w-[26rem] 2xl:w-[28rem] mx-auto text-[#c9c9c9]">
                {t("p-technology-solution")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
