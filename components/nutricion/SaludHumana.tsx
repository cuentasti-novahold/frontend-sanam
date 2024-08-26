import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { GiStoneStack } from "react-icons/gi";
import { useTranslations } from "next-intl";

export default function SaludHumana() {
  const t = useTranslations();
  const p_nt_urinary_stones = t("nt-urinary-stones").split("||");
  const p_nt_nutraceutical = t("nt-nutraceutical").split("||");

  return (
    <>
      <div className="w-full items-center p-10">
        <div className="w-full justify-center text-center">
          <h1 className="font-bold lg:text-7xl text-gray-600">
            {t("human-health")}
          </h1>
        </div>

        <div className="w-full flex text-center">
          <div className="w-1/2 bg-sky-300 m-5 p-5 rounded-3xl">
            <h1 className="font-bold text-4xl">{t("stones")}</h1>
          </div>
          <div className="w-1/2 bg-sky-400 m-5 p-5 rounded-3xl">
            <h1 className="font-bold text-4xl">{t("life")}</h1>
          </div>
        </div>
      </div>

      <div className="w-full flex text-center p-10">
        <div className="w-1/2 border-4 border-white rounded-xl m-5 p-10 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <GiStoneStack size={80} className="" />
          </div>
          {/* Otro contenido dentro del div */}
          <p className="text-xl mt-5 text-left">
            {p_nt_urinary_stones.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < p_nt_urinary_stones.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="w-1/2 border-4 border-white rounded-xl m-5 p-10 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FaHeartbeat size={80} />
          </div>
          {/* Otro contenido dentro del div */}
          <p className="text-xl mt-5 text-left">
            {p_nt_nutraceutical.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < p_nt_nutraceutical.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
