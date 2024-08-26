"use client";
import "../../styles/about-section.css";
import NavigationSanam from "../shared/NavigationSanam";
import { FaHandHoldingHeart, FaSeedling } from "react-icons/fa";
import { FaPlateWheat } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Industrias() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1]; // Extrae el idioma de la ruta
  return (
    <section className="py-20">
      <div className="grid grid-cols-3 gap-10 justify-center items-center text-center">
        <NavigationSanam
          route={`/${locale}/agricultura`}
          styleDiv="rounded-lg p-4 shadow-lg flex flex-col justify-center items-center"
          styleSpan="text-xl font-bold text-gray-800 uppercase"
          title={t("agriculture")}
          Icon={FaSeedling}
          styleIcon={"text-green-500 mt-8"}
        />
        <NavigationSanam
          route={`/${locale}/nutricion`}
          styleDiv="rounded-lg p-4 shadow-lg flex flex-col justify-center items-center"
          styleSpan="text-xl font-bold text-gray-800 uppercase "
          title={t("nutrition") + " " + t("and") + " " + t("human-health")}
          Icon={FaPlateWheat}
          styleIcon={"text-yellow-500 mt-10"}
        />
        <NavigationSanam
          route={`/${locale}/cuidado-personal`}
          styleDiv="rounded-lg p-4 shadow-lg flex flex-col justify-center items-center"
          styleSpan="text-xl font-bold text-gray-800 uppercase"
          title={t("care")}
          Icon={FaHandHoldingHeart}
          styleIcon={"text-red-600 mt-8"}
        />
      </div>
    </section>
  );
}
