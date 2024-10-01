import React from "react";
import SlideImagenes from "../SlideImagenes";
import { ISlideContent } from "@/types/SlideContent";
import { GiFruitBowl } from "react-icons/gi";
import { useTranslations } from "next-intl";

const images = [
  { text: "" },
  { text: "" },
  {
    text: "Es la primera bebida diseñada para ayudar a prevenir la formación de cálculos urinarios. La combinación de las dosis adecuadas de sales de citrato con fruta de café, hacen que se eviten la formación de los cristales productores de los cálculos",
  },
  {
    text: "Producto nutracéutico codesarrollado con la Fundación Cardiovascular de Colombia, que mejora la función y estructura muscular esquelética y respiratoria en humanos.",
  },
];

export default function SlideProductos() {
  const t = useTranslations();

  const slideContent: ISlideContent[] = [
    {
      background: "url(/img/nuestros-productos/naox.png)",
      color: "#f00a0a",
      title: "",
      subtitle: t("coffe-fruit") + " " + t("np-perfect-anywhere"),
      icon: <GiFruitBowl size={80} />,
    },
    {
      background: "url(/img/nuestros-productos/naox-vital.png)",
      color: "#084930",
      title: "",
      subtitle:
        t("coffe-fruit") + " " + t("in") + " " + t("np-four-ingredients"),
      icon: <GiFruitBowl size={80} />,
    },
    {
      background: "url(/img/nuestros-productos/naox-stone.png)",
      color: "#8a9216",
      title: "",
      subtitle: t("np-drink-designed-prevent"),
      icon: <GiFruitBowl size={80} />,
    },
    {
      background: "url(/img/nuestros-productos/naox-life.png)",
      color: "#463a8d",
      title: "",
      subtitle: t("np-product-developed-cardiovascular"),
      icon: <GiFruitBowl size={80} />,
    },
  ];
  return <SlideImagenes /* slideContent={slideContent} */ />;
}
