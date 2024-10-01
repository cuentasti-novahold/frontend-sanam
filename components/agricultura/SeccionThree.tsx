import React from "react";
import { FaPlus } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function SeccionThree() {
  const t = useTranslations();

  const ag_natural = t("ag-natural");
  const ag_reduce = t("ag-reduce");
  const ag_prevent = t("ag-prevent");
  const ag_mitigate = t("ag-mitigate");
  const ag_advantages = t("ag-advantages");
  const ag_soils = t("ag-soils");
  const ag_cost_benefit = t("ag-cost-benefit");

  const items = [
    ag_natural,
    ag_reduce,
    ag_prevent,
    ag_mitigate,
    ag_advantages,
    ag_soils,
    ag_cost_benefit,
  ];

  return (
    <>
      <div className="lg:p-16 p-5">
        <div className="w-full flex justify-center">
          <p className="text-3xl lg:text-5xl p-5 font-bold text-green-800 uppercase">
            {t("our-advantages")}
          </p>
        </div>

        <div className="w-full lg:flex">
          <div className="lg:w-1/2 lg:flex lg:flex-col lg:p-10">
            <div className="space-y-4 ">
              {" "}
              {/* Alineación vertical con espacio entre elementos */}
              {items.map((item, index) => (
                <div key={index} className="flex items-center">
                  {/* Alinear horizontalmente */}
                  <FaPlus className="sanam-green mx-3 text-2xl" /> {/* Ícono */}
                  <p className="sanam-gray font-bold text-2xl">{item}</p>
                  {/* Texto */}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 bg-[#004a22] px-16 py-5 lg:flex flex-col justify-center rounded-3xl">
            <h1 className="text-3xl lg:text-6xl text-yellow-500">
              {t("ag-ton")} {t("terax")}
            </h1>
            <p className="lg:text-3xl text-white">{t("ag-equivalent")}</p>
            <h1 className="text-3xl lg:text-6xl text-yellow-500">
              450.000 {t("people")}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
