import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Bienestar() {
  const t = useTranslations();
  return (
    <section className="py-20 flex flex-wrap items-center justify-center">
      {/* <button type="button" className="bg-green-400 hover:bg-green-900 text-white my-5 p-2 rounded-2xl w-full text-xl font-bold">Leer más</button> */}
      <div className="w-full justify-center p-5">
        <p className="text-4xl uppercase font-bold">
          {t("home-impact")} {t("coffe-fruit")}
        </p>
      </div>

      <div className="w-full lg:w-full flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-1/3 p-5">
          <Image
            width={500}
            height={500}
            src={"https://via.placeholder.com/500x500/?wellness"}
            alt="bienestar"
          />
          <h1 className="font-bold text-3xl uppercase pt-5">{t("welfare")}</h1>
          <p className="pt-5">{t("home-welfare")}</p>
        </div>
        <div className="w-full lg:w-1/3 p-5">
          <Image
            width={500}
            height={500}
            src={"https://via.placeholder.com/500x500/?inclusion"}
            alt="inclusión"
          />
          <h1 className="font-bold text-3xl uppercase pt-5">
            {t("inclusion")}
          </h1>
          <p className="pt-5">{t("home-inclusion")}</p>
        </div>
        <div className="w-full lg:w-1/3 p-5">
          <Image
            width={500}
            height={500}
            src={"https://via.placeholder.com/500x500/?sustainability plant"}
            alt="sostenibilidad"
          />
          <h1 className="font-bold text-3xl uppercase pt-5">
            {t("sustainability")}
          </h1>
          <p className="pt-5">{t("home-sustainability")}</p>
        </div>
      </div>

      <div className="w-full flex justify-center gap-5 mt-5">
        <button
          type="button"
          className="bg-green-400 hover:bg-green-900 text-white p-2 rounded-2xl w-1/3 text-xl font-bold"
        >
          {t("read-more")}
        </button>
        <button
          type="button"
          className="bg-green-400 hover:bg-green-900 text-white p-2 rounded-2xl w-1/3 text-xl font-bold"
        >
          {t("read-more")}
        </button>
        <button
          type="button"
          className="bg-green-400 hover:bg-green-900 text-white p-2 rounded-2xl w-1/3 text-xl font-bold"
        >
          {t("read-more")}
        </button>
      </div>
    </section>
  );
}
