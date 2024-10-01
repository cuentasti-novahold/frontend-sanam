import React from "react";
import BeneficiosCMC from "./BeneficiosCMC";
import { useTranslations } from "next-intl";

export default function AtributosFruta() {
  const t = useTranslations();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 gap-10">
      {/* Primer beneficio */}
      <BeneficiosCMC
        iconName={"vegano"}
        title={t("natural") + " " + t("and") + " " + t("vegan")}
        subtitle={""}
      />
      {/* Segundo beneficio */}
      <BeneficiosCMC
        iconName={"antioxidantes"}
        title={t("nt-relevant-antioxidants")}
        subtitle={
          <>
            <p className="mt-2 text-xs">{t("acid-caffeic-catechins")}</p>
          </>
        }
      />
      {/* Tercer beneficio */}
      <BeneficiosCMC
        iconName={"calorías"}
        title={t("low-calories")}
        subtitle={""}
      />
      {/* Cuarto beneficio */}
      <BeneficiosCMC
        iconName={"azúcares"}
        title={t("simple-sugars")}
        subtitle={
          <>
            <p className="mt-2 text-xs">{t("glucose-fructose")}</p>
          </>
        }
      />
      {/* Quinto beneficio */}
      <BeneficiosCMC
        iconName={"vegetal"}
        title={t("vegetable-protein")}
        subtitle={""}
      />
      {/* Sexto beneficio */}
      <BeneficiosCMC
        iconName={"carbohidratos"}
        title={t("nt-carbohydrates")}
        subtitle={""}
      />
      {/* Séptimo beneficio */}
      <BeneficiosCMC
        iconName={"cafeína"}
        title={t("natural-caffeine")}
        subtitle={""}
      />
    </div>
  );
}
