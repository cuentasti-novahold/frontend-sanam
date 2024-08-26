import AporteMundo from "@/components/nuestros-productos/Aporte-Mundo";
import EnlacesDistribuir from "@/components/nuestros-productos/Enlaces-Distribuir";
import BannerTop from "@/components/nutricion/productos/BannerTop";
import SlideProductos from "@/components/nutricion/productos/SlideProductos";
import { ICardContent } from "@/types/CardContent";
import React from "react";
import { useTranslations } from "next-intl";

export default function Productos() {
  const t = useTranslations();
  const cardContentProps: ICardContent[] = [
    {
      imgUrl: "/img/nuestros-productos/super-alimento.jpeg",
      alt: "SUPERALIMENTO",
      textOverlay: t("superfood"),
      description: t("np-webmd-labels"),
    },
    {
      imgUrl: "/img/nuestros-productos/apoyo-caficultores.jpeg",
      alt: "APOYAMOS LOS CAFICULTORES",
      textOverlay: t("support-growers"),
      description: t("np-opportunity-coffe"),
    },
    {
      imgUrl: "/img/nuestros-productos/beneficio-medio-ambiente.jpeg",
      alt: "BENEFICIAMOS EL MEDIO AMBIENTE",
      textOverlay: t("bennefit-environment"),
      description: t("np-transform-waste"),
    },
  ];

  return (
    <>
      <div className="px-50 py-5 w-full">
        <BannerTop />
      </div>

      <div className="h-1/2 p-14 bg-slate-500">
        <p className="uppercase text-5xl text-white">
          {/* PRESENTACION INDUSTRIAL 1 / 5 / 20 / 200 KG */}
          {t("np-industrial-presentation")}
        </p>
      </div>

      <div className="bg-indigo-500">
        {" "}
        {/* Carrusel horizontal */}
        <SlideProductos />
      </div>

      <AporteMundo cardContent={cardContentProps} />

      {/* <EnlacesDistribuir /> */}
    </>
  );
}
