"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CircleImage from "./seccion-one/CircleImage";
import { ICircleImage } from "@/types/CircleImage";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function SeccionOne() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1]; // Extrae el idioma de la ruta

  const circlesImages: ICircleImage[] = [
    {
      imageUrl: "https://via.placeholder.com/250x250",
      description: t("39") + t("carbon"),
    },
    {
      imageUrl: "https://via.placeholder.com/250x250",
      description: t("41") + " " + t("carbohydrates"),
    },
    {
      imageUrl: "https://via.placeholder.com/250x250",
      description: t("ag-amino"),
    },
    {
      imageUrl: "https://via.placeholder.com/250x250",
      description: t("acid-antioxidant"),
    },
  ];

  return (
    <>
      <div className="w-full grid">
        <div className="w-full lg:flex lg:px-20">
          <div className="lg:w-1/2 bg-[#7ea977] justify-center items-center p-10 rounded-2xl m-10">
            <h1 className="text-2xl lg:text-4xl text-white py-2 lg:p-10">
              {t("ag-compound")}
            </h1>
            <p className="lg:text-3xl bg-green-950 text-white p-2 lg:p-10 rounded-2xl">
              {t("biostimulant")}
            </p>
            <p className="lg:p-10 p-2 lg:text-2xl">{t("ag-solution")}</p>

            <Link href={`/${locale}/contacto`}>
              <p className="lg:px-10 px-2 py-3 lg:text-3xl bg-sky-500 hover:bg-blue-600 cursor-pointer rounded-2xl text-white lg:w-3/4">
                {t("more-info")}{" "}
              </p>
            </Link>
          </div>

          <div className="lg:relative lg:w-1/2">
            <Image
              width={1000}
              height={750}
              src={"https://via.placeholder.com/1000x750/?seed,tierra,sembrar"}
              alt="imagen semilla"
              className="object-contain"
            />
            <div className="lg:absolute bottom-20 -left-32 bg-green-500 p-5 rounded-2xl lg:w-2/3">
              <p className="lg:text-2xl">{t("ag-increase")}</p>
              <p className="lg:absolute bg-orange-500 p-2 w-12 rounded-xl font-bold right-0 bottom-14 mr-3">
                {t("98")}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:flex justify-center items-center bg-slate-400 rounded-3xl px-20">
          {circlesImages.map((cir, index) => (
            <CircleImage
              key={index}
              imageUrl={cir.imageUrl}
              description={cir.description}
            />
          ))}
        </div>
      </div>

      <div className="bg-white w-full px-5 lg:px-40 py-10 flex flex-col justify-center items-center">
        <p className="lg:text-5xl p-5">{t("together")}</p>
        <p className="lg:text-2xl p-5">{t("energy-fields")}</p>
        <p className="lg:text-2xl p-5">
          {t("our")} {t("technology")}
          <span className="text-green-800 font-bold"> {t("terax")}</span>{" "}
          {t("ag-nutritional")}
        </p>
      </div>
    </>
  );
}
