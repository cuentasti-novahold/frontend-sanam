"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const flagImages = [
  {
    country: "Australia",
    url: "https://cdn.pixabay.com/photo/2013/07/13/14/14/australia-162232_1280.png",
  },
  {
    country: "China",
    url: "https://cdn.pixabay.com/photo/2013/07/13/14/16/china-162389_640.png",
  },
  {
    country: "Ecuador",
    url: "https://cdn.pixabay.com/photo/2012/04/10/23/23/ecuador-26986_640.png",
  },
  {
    country: "España",
    url: "https://cdn.pixabay.com/photo/2013/07/13/14/17/spain-162428_640.png",
  },
  {
    country: "Estados Unidos",
    url: "https://cdn.pixabay.com/photo/2017/02/06/15/09/american-flag-2043285_640.png",
  },
  {
    country: "Holanda",
    url: "https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486_640.png",
  },
  {
    country: "Israel",
    url: "https://cdn.pixabay.com/photo/2013/07/13/14/15/israel-162325_640.png",
  },
  {
    country: "Japón",
    url: "https://cdn.pixabay.com/photo/2013/07/13/14/15/japan-162328_640.png",
  },
  {
    country: "Panamá",
    url: "https://cdn.pixabay.com/photo/2012/04/10/23/26/panama-26998_640.png",
  },
  {
    country: "Reino Unido",
    url: "https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_640.jpg",
  },
  {
    country: "México",
    url: "https://cdn.pixabay.com/photo/2012/04/10/23/24/mexico-26989_1280.png",
  },
  {
    country: "Brasil",
    url: "https://cdn.pixabay.com/photo/2014/04/02/11/12/brazil-305531_1280.png",
  },
];

export default function PresenciaBanderas() {
  const t = useTranslations();
  const refCarrusel = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1);

  useEffect(() => {
    const carrusel = refCarrusel.current;
    const interval = 2000;

    const scroll = () => {
      const scrollAmount = carrusel.clientWidth;
      if (carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth) {
        setScrollDirection(-1);
      } else if (carrusel.scrollLeft <= 0) {
        setScrollDirection(1);
      }

      carrusel.scrollLeft += scrollAmount * scrollDirection;
    };

    const intervalId = setInterval(scroll, interval);

    return () => clearInterval(intervalId);
  }, [scrollDirection]);

  return (
    <>
      <div className="p-5 lg:px-40 xl:px-40 w-full bg-white">
        <h1 className="text-5xl uppercase font-bold py-2">
          {t("our-products")}
        </h1>
      </div>
      <div className="w-full py-10 flex justify-center items-center bg-white">
        <div
          className="w-full flex overflow-x-hidden scroll-smooth"
          ref={refCarrusel}
          style={{ scrollBehavior: "smooth" }}
        >
          {flagImages.map((flag, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 justify-center flex flex-col items-center"
            >
              <Image
                src={flag.url}
                alt={`Bandera de ${flag.country}`}
                width={250}
                height={150}
                className="object-contain rounded-lg shadow-xl mb-4"
              />
              <p className="text-center mt-2 font-bold text-2xl">
                {flag.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
