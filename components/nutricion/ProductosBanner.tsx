import React from "react";
import { GiCoffeeMug, GiDrinkMe, GiDrinking, GiKetchup } from "react-icons/gi";
import { SiJusteat } from "react-icons/si";
import { SlEnergy } from "react-icons/sl";
import { useTranslations } from "next-intl";

export default function ProductosBanner() {
  const t = useTranslations();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 justify-center items-center pb-10">
      <div className="flex flex-col items-center">
        <GiCoffeeMug
          size={140}
          className="rounded-full bg-[#663300] p-2 text-white"
        />
        <p className="text-center mt-2">
          {t('coffe-alternative')} {t('and')} {t('tea')}
        </p>
      </div>

      <div className="flex flex-col items-center">
        <GiDrinking
          size={140}
          className="rounded-full bg-[#663300] p-2 text-white"
        />
        <p className="text-center mt-2">{t('energy-drink')}</p>
      </div>

      <div className="flex flex-col items-center">
        <GiDrinkMe
          size={140}
          className="rounded-full bg-[#663300] p-2 text-white"
        />
        <p className="text-center mt-2">{t('nt-hard')}</p>
      </div>

      <div className="flex flex-col items-center">
        <SlEnergy
          size={140}
          className="rounded-full bg-[#663300] p-2 text-white"
        />
        <p className="text-center mt-2">{t('nt-gels')}</p>
      </div>

      <div className="flex flex-col items-center">
        <SiJusteat
          size={140}
          className="rounded-full bg-[#663300] p-2 text-white"
        />
        <p className="text-center mt-2">{t('snacks')}</p>
      </div>

      <div className="flex flex-col items-center">
        <GiKetchup
          size={140}
          className="rounded-full bg-[#663300] p-2 text-white"
        />
        <p className="text-center mt-2">{t('sauces')} {t('and')} {t('dressings')}</p>
      </div>
    </div>
  );
}
