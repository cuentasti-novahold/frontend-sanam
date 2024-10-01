import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Bienestar() {
  const t = useTranslations();
  return (
    <section className="flex flex-wrap justify-center items-center text-center py-[3rem]">
      <div className="w-full mb-2 p-2 ">
        <p className="text-2xl font-bold">
          {t("home-impact")} {t("coffe-fruit")}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:w-full md:gap-5">
        <div className="w-full flex flex-col justify-center items-center lg:w-1/3 p-5 ">
          <Image
            width={300}
            height={500}
            src="/img/inicio/icons/web_icono bienestar.png"
            alt="bienestar"
          />
          <h1 className="text-2xl pt-3 font-bold uppercase">{t("welfare")}</h1>
          <p className="pt-2">{t("home-welfare")}</p>
        </div>

        <div className="w-full flex flex-col justify-center items-center lg:w-1/3 p-5 ">
          <Image
            width={300}
            height={500}
            src="/img/inicio/icons/web_icono inclusion.png"
            alt="inclusión"
          />
          <h1 className="text-2xl pt-3 font-bold uppercase">
            {t("inclusion")}
          </h1>
          <p className="pt-2">{t("home-inclusion")}</p>
        </div>

        <div className="w-full flex flex-col justify-center items-center lg:w-1/3 p-5 ">
          <Image
            width={300}
            height={500}
            src="/img/inicio/icons/web_icono sostenibilidad.png"
            alt="sostenibilidad"
          />
          <h1 className="text-2xl pt-3 font-bold uppercase">
            {t("sustainability")}
          </h1>
          <p className="pt-2">{t("home-sustainability")}</p>
        </div>
      </div>

      <div className="flex justify-center items-center mx-2 w-full gap-2 md:gap-10 mt-1 ">
        <button
          type="button"
          className="p-2 rounded-2xl w-1/3 text-md md:text-xl font-bold text-white bg-[#04AF30] hover:bg-green-900"
        >
          {t("lear-more")}
        </button>

        <button
          type="button"
          className="p-2 rounded-2xl w-1/3 text-md md:text-xl font-bold text-white bg-[#04AF30] hover:bg-green-900"
        >
          {t("lear-more")}
        </button>

        <button
          type="button"
          className="p-2 rounded-2xl w-1/3 text-md md:text-xl font-bold text-white bg-[#04AF30] hover:bg-green-900"
        >
          {t("lear-more")}
        </button>
      </div>
    </section>
  );
}
