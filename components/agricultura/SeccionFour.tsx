import React from "react";
import { FaGears, FaHouseSignal } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function SeccionFour() {
  const t = useTranslations();
  return (
    <div className="bg-slate-50 py-10">
      <div className="w-full text-center">
        <p className="lg:text-5xl font-bold uppercase">{t("we-promote")}</p>
      </div>
      <div className="w-full lg:flex lg:px-96 py-10 gap-5 justify-center items-center">
        <div className="lg:w-1/2 flex flex-col items-center justify-center gap-10">
          <FaGears size={150} className="sanam-green" />
          <p className="uppercase shadow-md p-5 rounded-xl shadow-green-700 text-center">
          {t("ag-sustainable")}
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center justify-center gap-10">
          <FaHouseSignal size={150} className="sanam-green" />
          <p className="uppercase shadow-md p-5 rounded-xl shadow-green-700 text-center">
            {t("recoring-soils")}
          </p>
        </div>
      </div>
    </div>
  );
}
