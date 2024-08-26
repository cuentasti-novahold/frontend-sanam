import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function IndicatorNav({ activeLink = "" }) {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1]; // Extrae el idioma de la ruta

  // Función para construir la nueva URL con el idioma cambiado
  const buildNewUrl = (newLocale: string) => {
    const pathParts = pathname.split("/");
    pathParts[1] = newLocale; // Reemplaza el idioma en la ruta
    return pathParts.join("/");
  };

  return (
    <div className="flex justify-stretch  w-full">
      <Link
        href={`/${locale}/proceso`}
        className={`text-gray-500 hover:text-green-400 uppercase w-1/2 ${
          activeLink === "por definirse" ? "text-green-400" : ""
        }`}
      >
        {t("process")}
      </Link>
      <p className="text-gray-500 uppercase w-1/2 ml-5"> {t("indicator")}</p>
      <div className="flex justify-center items-center ml-10 ">
        <Link href={buildNewUrl("en")}>
          <button className="p-3">EN</button>
        </Link>
        <Link href={buildNewUrl("es")}>
          <button>ES</button>
        </Link>
      </div>
    </div>
  );
}
