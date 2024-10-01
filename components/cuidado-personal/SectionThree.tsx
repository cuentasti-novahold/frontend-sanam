"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/styles/cuidado-personal.css";
import { useTranslations } from "next-intl";

export default function SectionThree() {
  const t = useTranslations();
  return (
    <div className="body-carrusel flex">
      <Swiper
        className="text-center"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide className="rounded-lg p-5  items-center justify-center ">
          <div className="font-bold text-xl mb-2 uppercase">
            {t("antioxidant")} {t("potential")}
          </div>
          <div className="font-bold text-xl mb-2">{t("80-90")}</div>
          <p className="">{t("cp-antioxidant-capacity")}</p>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg p-5  items-center justify-center">
          <div className="font-bold text-xl mb-2">{t("five-more")}</div>
          <div className="font-bold text-xl mb-2">
            {t("polyphenols")} {t("100-gr")}
          </div>
          <p className="">{t("cp-compared-te-grapes")}</p>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg p-5  items-center justify-center">
          <div className="font-bold text-xl mb-2">
            {t("antioxidant")} {t("potential")}
          </div>
          <div className="font-bold text-xl mb-2">{t("orac")}</div>
          <p className="">{t("100-gr")}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
