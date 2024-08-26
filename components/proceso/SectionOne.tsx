import { useTranslations } from "next-intl";

export default function SectionOne() {
  const t = useTranslations();
  return (
    <div className="relative overflow-hidden">
      {/* <Image
        className="w-full h-auto"
        width={1200}
        height={800}
        src={"/img/proceso/banner-proceso.jpg"}
        alt="banner proceso"
      /> */}
      <video
        className="w-full h-auto"
        width="1200"
        height="800"
        src="/img/proceso/banner-proceso-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 opacity-45 bg-gray-700"></div>

      <div className="absolute inset-0 flex gap-3 sm:gap-16 md:gap-20 xl:gap-20 2xl:gap-30 items-center justify-center text-white">
        <h1 className="uppercase text-xl xl:text-6xl 2xl:text-7xl border-double border-4 p-1 sm:p-4 md:p-5 xl:p-3 2xl:p-6 mt-20 2xl:mt-40">
          {t("rethink")}
        </h1>
        <h1 className="uppercase text-xl xl:text-6xl 2xl:text-7xl border-double border-4 p-1 sm:p-4 md:p-5 xl:p-3 2xl:p-6">
          {t("recycle")}
        </h1>
        <h1 className="uppercase text-xl xl:text-6xl 2xl:text-7xl border-double border-4 p-1 sm:p-4 md:p-5 xl:p-3 2xl:p-6 mt-20 2xl:mt-40">
          {t("empower")}
        </h1>
      </div>
    </div>
  );
}
