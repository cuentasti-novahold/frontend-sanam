import React from "react";
import CardAplicacionesExitosas from "./CardAplicacionesExitosas";
import { useTranslations } from "next-intl";

export default function SeccionTwo() {
  const t = useTranslations();
  return (
    <div className="w-full bg-[#6C7F7D]/20 my-6 py-8 md:space-y-0">
      <p className="text-xl lg:text-xl p-5 md:mx-52 font-bold">
        {t("our-solutions")}
      </p>

      <div className="lg:flex justify-center items-center w-full lg:p-5 gap-4 space-y-5">
        <CardAplicacionesExitosas
          iconType="frijol"
          name={t("bean")}
          subtitle={
            <>
              <p>+14% {t("productivity")}</p>
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="arroz"
          name={t("rice")}
          subtitle={
            <>
              <p>+18% {t("performance")}</p>
              <p>+4% {t("weight")}</p>
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="caña"
          name={t("sugar-cane")}
          subtitle={
            <>
              <p>{t("txhaxm")}</p>
              <p>{t("nrix")}</p>
              <p>
                {t("s-12")} {t("sucrose")}
              </p>
            </>
          }
        />
      </div>

      <div className="lg:flex justify-center items-center w-full lg:p-5 gap-4 space-y-5">
        <CardAplicacionesExitosas
          iconType="café"
          name={t("coffe")}
          subtitle={
            <>
              <p>+20% {t("productivity")}</p>
              <p>+1.5% {t("cup-profile")}</p>
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="cacao"
          name={t("cocoa")}
          subtitle={
            <>
              <p>+18% {t("productivity")}</p>
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="aguacate"
          name={t("avocado")}
          subtitle={
            <>
              <p>
                + {t("quaje")} {t("flower")}
              </p>
              <p>+ {t("leaf-area")}</p>
              <p className="text-xs">{t("refining-study")}</p>
            </>
          }
        />
      </div>

      <div className="lg:flex justify-center items-center w-full lg:p-5 mt-6 md:mt-0 gap-4 space-y-5">
        <CardAplicacionesExitosas
          iconType="Lechuga"
          name={t("lettuce")}
          subtitle={
            <>
              <p> {t("pending")}</p>
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="maíz"
          name={t("corn")}
          subtitle={
            <>
              <p>+15% {t("height")}</p>
              <p>+11% {t("sheets")}</p>
              <p>
                +9% {t("weight")} {t("in")} {t("corn")}{" "}
              </p>
            </>
          }
        />
        <CardAplicacionesExitosas
          iconType="limón"
          name={t("lemon")}
          subtitle={
            <>
              <p>
                + {t("viability")} {t("flower")}
              </p>
              <p>+ {t("productivity")}</p>
              <p className="text-xs">{t("refining-study")}</p>
            </>
          }
        />
      </div>

      <div className="lg:flex justify-center items-center w-full lg:p-5 mt-6 md:mt-0 gap-4 space-y-5">
        <CardAplicacionesExitosas
          iconType="Tomate"
          name={t("tomato")}
          subtitle={t("pending")}
        />
        <CardAplicacionesExitosas
          iconType="Uva"
          name={t("grape")}
          subtitle={t("pending")}
        />
        <CardAplicacionesExitosas
          iconType="Plátano/Banano"
          name={t("banana")}
          subtitle={
            <>
              {t("pending")}
              <p className="text-xs">{t("pending")}</p>
            </>
          }
        />
      </div>
    </div>
  );
}
