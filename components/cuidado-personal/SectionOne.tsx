import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SectionOne() {
  const t = useTranslations();
  const p_sustainably_produced = t("sustainably-produced").split("||");
  return (
    <div>
      <Image
        className="w-full h-auto "
        width={1200}
        height={400}
        src={"/img/cuidado-personal/banner-cuidado-personal.jpg"}
        alt="banner cuidado personal"
      />
      <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
      <div className="absolute flex flex-col inset-0 items-center justify-center text-white">
        <h1 className="text-6xl font-bold m-8 mr-80">{t("naox-derma")}</h1>
        <p className="text-2xl max-w-3xl ml-80 text-justify">
          {t("cp-concentrate-patented")}
        </p>
        <h1 className="text-4xl font-bold mt-20">{t("advantages")}</h1>
        <div className="flex flex-row text-center">
          <div className="m-6">
            <Image
              className="p-2 text-white"
              width={130}
              height={130}
              src={"/img/cuidado-personal/trade-icon.svg"}
              alt="icon comercio"
            />
            <p className="text-xl">{t("fair-trade")}</p>
          </div>
          <div className="m-6">
            <Image
              className="p-2 text-white"
              width={130}
              height={130}
              src={"/img/cuidado-personal/gmo-icon.svg"}
              alt="icon gmo"
            />
            <p className="text-xl">{t("gmo-free")}</p>
          </div>
          <div className="m-6">
            <Image
              className="p-2 text-white"
              width={130}
              height={130}
              src={"/img/cuidado-personal/vegan-icon.svg"}
              alt="icon vegano"
            />
            <p className="text-xl"> {t("vegan")}</p>
          </div>
          <div className="m-6 ">
            <Image
              className="p-2 text-white"
              width={130}
              height={130}
              src={"/img/cuidado-personal/freedom-icon.svg"}
              alt="icon conejo"
            />
            <p className="text-xl"> {t("cruelty-free")}</p>
          </div>
          <div className="m-5">
            <Image
              className="p-2 ml-2 text-white"
              width={130}
              height={130}
              src={"/img/cuidado-personal/world-icon.svg"}
              alt="icon sostenible"
            />
            <p className="text-xl text-center">
              {p_sustainably_produced.map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < p_sustainably_produced.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
