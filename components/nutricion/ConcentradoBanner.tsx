import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function ConcentradoBanner() {
  const t = useTranslations();
  return (
    <>
      <Image
        width={1200}
        height={400}
        src={"/img/nutricion-humana/imagen-banner.jpeg"}
        alt="imagen semilla"
        className=""
      />

      <p className="absolute right-20 bottom-52 uppercase bg-[#663300] rounded-full p-5 text-white font-bold">
        {t("coffe-fruit")} {t("in")} {t("the")} {t("nutrition-industry")}
      </p>
      <p className="text-xl p-10">{t("nt-benefits")}</p>
    </>
  );
}
