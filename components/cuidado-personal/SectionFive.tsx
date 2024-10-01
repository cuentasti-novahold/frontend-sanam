"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SectionFive() {
  const t = useTranslations();
  const p_cp_remove_makeup = t("cp-remove-makeup").split("||");
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center px-8 gap-4 w-full">
          <div className="flex-grow border-t border-[#588157]"></div>
          <span className="text-xl font-bold flex-shrink sm:text-lg md:text-3xl lg:text-4xl uppercase">
            {t("our-formulas")}
          </span>
          <div className="flex-grow border-t border-[#588157]"></div>
        </div>

        <div className="flex w-full">
          <div className="flex flex-wrap justify-center m-10 md:gap-1 2xl:gap-20">
            <div className="max-w-sm m-4 border border-gray-200 rounded-xl shadow-lg bg-[#5881573f] ">
              <div className="rounded-xl overflow-hidden mx-3 mt-3 mb-2 flex-grow">
                <Image
                  src="/img/cuidado-personal/Serum.jpeg"
                  alt="Serum Antioxidante"
                  width={400}
                  height={200}
                />
              </div>
              <div className="px-4 py-2 flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {t("serum-antioxidant")}
                </h5>
                <p className="mb-3 text-black">{t("cp-firming-hydrating")}</p>
                <h1 className="font-bold text-xl">
                  {t("concentration")}: {t("4")}
                </h1>
              </div>
            </div>

            <div className="max-w-sm m-4 border border-gray-200 rounded-xl shadow-lg bg-[#5881573f] flex flex-col">
              <div className="rounded-xl overflow-hidden mx-3 mt-3 mb-2 flex-grow">
                <Image
                  src="/img/cuidado-personal/gel-limpiador.jpeg"
                  alt="Gel limpiador"
                  width={400}
                  height={200}
                />
              </div>
              <div className="px-4  flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {t("cleansing-gel")}
                </h5>
                <p className="mb-3 text-black">{t("cp-exfoliates")}</p>
                <h1 className="mt-8 font-bold text-xl">
                  {t("concentration")}: {t("2")}
                </h1>
              </div>
            </div>

            <div className="max-w-sm m-4 border border-gray-200 rounded-xl shadow-lg bg-[#5881573f] flex flex-col">
              <div className="rounded-xl overflow-hidden mx-3 mt-3 mb-2 flex-grow">
                <Image
                  src="/img/cuidado-personal/mascarilla.jpeg"
                  alt="Mascarilla"
                  width={400}
                  height={200}
                />
              </div>
              <div className="px-4  flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {t("mask")}
                </h5>
                <p className="mb-3 text-black">{t("cp-designed-tone")}</p>
                <h1 className="font-bold text-xl">
                  {t("concentration")}: {t("8-10")}
                </h1>
              </div>
            </div>

            <div className="max-w-sm m-4 border border-gray-200 rounded-xl shadow-lg bg-[#5881573f] flex flex-col">
              <div className="rounded-xl overflow-hidden mx-3 mt-3 mb-2 flex-grow">
                <Image
                  src="/img/cuidado-personal/jabon.png"
                  alt="Jabon"
                  width={900}
                  height={100}
                />
              </div>
              <div className="px-4  flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {t("exfoliating-soap")}
                </h5>
                <p className="mb-3 text-black">{t("cp-cleansing")}</p>
                <h1 className="font-bold text-xl mb-2">
                  {t("concentration")}: {t("3-5")}
                </h1>
              </div>
            </div>

            <div className="max-w-sm m-4 border border-gray-200 rounded-xl shadow-lg bg-[#5881573f] flex flex-col">
              <div className="rounded-xl overflow-hidden mx-3 mt-3 mb-2 flex-grow">
                <Image
                  src="/img/cuidado-personal/removedor.png"
                  alt="Removedor"
                  width={400}
                  height={200}
                />
              </div>
              <div className="px-4  flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {t("makeup-remover")}
                </h5>
                <p className="mb-3 text-black">
                  {p_cp_remove_makeup.map((part, index) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < p_cp_remove_makeup.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                <h1 className="font-bold text-xl">
                  {t("concentration")}: {t("1")}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
