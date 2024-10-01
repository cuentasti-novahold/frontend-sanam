import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function BeneficioFruta() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center text-center ">
      <h2 className="text-4xl font-bold text-center mb-8 pt-20 sanam-green">
        {t("benefits")} {t("coffe-juice")}
      </h2>

      <div className="w-full flex m-5">
        <div className="w-1/3 flex text-center justify-center space-x-2">
          <FaCheckCircle />
          <p>{t("nt-flavor")}</p>
        </div>
        <div className="w-1/3 flex text-center justify-center space-x-2">
          <FaCheckCircle />
          <p>{t("nt-drink")}</p>
        </div>
        <div className="w-1/3 flex text-center justify-center space-x-2">
          <FaCheckCircle />
          <p>{t("no-perishable")}</p>
        </div>
      </div>

      <div className="w-full flex m-5">
        <div className="w-2/4 flex text-center justify-center space-x-2">
          <FaCheckCircle />
          <p>{t("nt-versatile")}</p>
        </div>

        <div className="w-2/4 flex text-center justify-center space-x-2">
          <FaCheckCircle />
          <p>{t("brix")}</p>
        </div>
      </div>
    </div>
  );
}
