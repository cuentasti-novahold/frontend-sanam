import React from "react";
import CardAplicacionesExitosas from "./CardAplicacionesExitosas";
import { useTranslations } from "next-intl";

export default function SeccionTwo() {
  const t = useTranslations();
  return (
    <div className="w-full text-center bg-neutral-200 py-10">
      <p className="text-3xl lg:text-5xl p-5 font-bold text-green-800">
        {t("our-solutions")}
      </p>

      {/* <p className="font-bold text-4xl pt-5 sanam-green">Aplicaciones Exitosas</p> */}

      <div className="lg:flex w-full lg:p-5">
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

      <div className="lg:flex w-full lg:p-5">
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

      <div className="lg:flex w-full lg:p-5">
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
