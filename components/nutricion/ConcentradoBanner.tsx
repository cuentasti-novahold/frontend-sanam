import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function ConcentradoBanner() {
  const t = useTranslations();
  return (
    <>
      {/* <Image width={1920} height={500} src={'/img/nutricion-humana/imagen-banner.jpeg'} alt='imagen semilla' className='w-[600px]' /> */}
      {/* <Image width={1200} height={600} src={'https://placehold.co/1200x600/000000/FFFFFF.png'} alt='imagen semilla' className='' /> */}
      <Image
        width={1200}
        height={400}
        src={"/img/nutricion-humana/imagen-banner.jpeg"}
        alt="imagen semilla"
        className=""
      />
      {/* <Image width={1200} height={400} src={'https://cdn.pixabay.com/photo/2020/03/10/20/45/lemon-4920227_1280.jpg'} alt='imagen semilla' className='' /> */}
      <p className="absolute right-20 bottom-52 uppercase bg-[#663300] rounded-full p-5 text-white font-bold">
        {t("coffe-fruit")} {t("in")} {t("the")} {t("nutrition-industry")}
      </p>
      <p className="text-xl p-10">{t('nt-benefits')}</p>
    </>
/*  */
  );
}
