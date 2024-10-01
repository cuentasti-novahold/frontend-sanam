import Image from "next/image";
import { useTranslations } from "next-intl";

export default function End() {
  const t = useTranslations();
  return (
    <>
      <div className="flex m-5 items-center justify-center">
        <h1 className="uppercase text-4xl text-center font-semibold">
          {t("allows-generate")}
        </h1>
      </div>

      <div className="xl:flex xl:justify-center xl:h-[28rem] bg-[#2d5c2a]">
        {/* Seccion 1 */}
        <div className="flex-initial w-50">
          <div className="flex flex-col ">
            <h1 className="uppercase xl:text-xl 2xl:text-2xl text-center mt-3 xl:m-3 font-semibold text-white">
              {t("environmental-impact")}
            </h1>

            <div className="text-center m-4 xl:m-8">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    className="p-3"
                    width={100}
                    height={100}
                    src={"/img/proceso/icons/section-three/contaminacion.svg"}
                    alt="Contaminacion"
                  />
                  <p className="text-sm xl:text-base w-[10rem] mx-[9rem] px-10 xl:p-4 h-[2rem] text-[#f6f7f2]">
                    {t("reduce-pollution")}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <Image
                    className="p-3"
                    width={100}
                    height={100}
                    src={"/img/proceso/icons/section-three/fertilidad.svg"}
                    alt="Fertilidad"
                  />
                  <p className="text-sm xl:text-base w-[10rem] mx-[9rem] px-10 xl:p-4 h-[2rem] text-[#f6f7f2]">
                    {t("favor-fertility")}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <Image
                    className="p-3"
                    width={100}
                    height={100}
                    src={"/img/proceso/icons/section-three/gases.svg"}
                    alt="Gases"
                  />
                  <p className="text-sm xl:text-base w-[10rem] mx-[9rem] px-10 xl:p-4 h-[2rem] text-[#f6f7f2]">
                    {t("reduce-emission")}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <Image
                    className="p-3"
                    width={100}
                    height={100}
                    src={"/img/proceso/icons/section-three/ambientales.svg"}
                    alt="Ambientales"
                  />
                  <p className="text-sm xl:text-base w-[7rem] xl:w-[10rem] mx-[9rem] px-3 xl:px-5 2xl:px-1 xl:p-4 h-[2rem] text-[#f6f7f2]">
                    {t("promote-circular-economy")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row mt-[8rem] xl:mt-[7rem] ml-5 items-center">
            <div className=" rounded-full mr-2 bg-[#87d35b]">
              <Image
                className="p-1 xl:p-1 2xl:m-[0.5rem] xl:ml-[0.4rem] mr-4 my-2"
                width={50}
                height={50}
                src={"/img/proceso/icons/section-three/bolsa.svg"}
                alt="Bolsa"
              />
            </div>
            <p className="xl:text-lg text-[#d9dad7]">
              {t("p-redue-pollution")}
            </p>
          </div>
        </div>

        {/* Seccion 2 */}
        <div className="flex-initial w-50">
          <div className="flex flex-col">
            <h1 className="uppercase xl:text-xl 2xl:text-2xl text-center mt-3 xl:m-3 font-semibold text-white">
              {t("social-impact")}
            </h1>

            <div className="text-center m-4 xl:m-8">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    className="p-3"
                    width={100}
                    height={100}
                    src={"/img/proceso/icons/section-three/empleo.svg"}
                    alt="Empleo"
                  />
                  <p className="text-sm xl:text-base w-[10rem] mx-[9rem] px-10 xl:p-4 h-[2rem] text-[#f6f7f2]">
                    {t("generaion-jobs")}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <Image
                    className="p-3"
                    width={100}
                    height={100}
                    src={"/img/proceso/icons/section-three/dinero.svg"}
                    alt="Dinero"
                  />
                  <p className="text-sm xl:text-base w-[10rem] mx-[9rem] px-6 xl:p-4 h-[2rem] text-[#f6f7f2]">
                    {t("economically-producers")}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <Image
                    className="p-3"
                    width={100}
                    height={100}
                    src={"/img/proceso/icons/section-three/economia.svg"}
                    alt="Ecnonomia"
                  />
                  <p className="text-sm xl:text-base w-[10rem] mx-[9rem] px-10 xl:p-4 h-[2rem] text-[#f6f7f2]">
                    {t("promote-rural-areas")}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <Image
                    className="p-3"
                    width={100}
                    height={100}
                    src={"/img/proceso/icons/section-three/vida.svg"}
                    alt="Vida"
                  />
                  <p className="text-sm xl:text-base w-[7rem] mx-[10rem] px-5 xl:px-5 2xl:px-1 xl:p-4 h-[2rem] text-[#f6f7f2]">
                    {t("increase-life")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-[6rem] xl:mt-[7rem] items-center justify-center">
            <p className="text-[#d9dad7] mb-5">{t("p-benefit-farmers")}</p>
          </div>
        </div>
      </div>

      {/* Seccion 3 */}
      <div className="flex mt-5 items-center justify-center">
        <h1 className="uppercase text-4xl text-center font-semibold">
          {t("the-end")}
        </h1>
      </div>

      <div className="xl:h-[43rem] m-6 2xl:mx-[20rem]">
        <h1 className="text-4xl text-center mx-10 mb-4 pt-2 font-semibold">
          {t("our-contribution")}
        </h1>
        <div className="flex flex-col items-center xl:items-end justify-center xl:mx-[15rem]">
          <div className="flex flex-row items-center xl:items-end justify-center ">
            <Image
              className="mx-2"
              width={100}
              height={100}
              src={"/img/proceso/icons/planeta.svg"}
              alt="Planeta"
            />
            <p className="text-sm xl:text-lg xl:mr-10 2xl:mr-0 w-[16rem] xl:w-[20rem] text-[#333333]">
              {t("cleaner-planet")}
            </p>
          </div>

          <div className="flex flex-row items-center xl:items-end">
            <Image
              className="mx-2"
              width={100}
              height={100}
              src={"/img/proceso/icons/personas.svg"}
              alt="Personas"
            />
            <p className="text-sm xl:text-lg w-[16rem] xl:w-[20rem] xl:mr-[5rem] text-[#333333]">
              {t("quality-consumers")}
            </p>
          </div>

          <div className="flex flex-row items-center xl:items-end">
            <Image
              className="mx-2"
              width={100}
              height={100}
              src={"/img/proceso/icons/bol.svg"}
              alt="Bol"
            />
            <p className="text-sm xl:text-lg w-[16rem] xl:w-[20rem] xl:mr-[10rem] text-[#333333]">
              {t("develop-sustainable")}
            </p>
          </div>

          <div className="flex flex-row items-center xl:items-end">
            <Image
              className="mx-2"
              width={100}
              height={100}
              src={"/img/proceso/icons/arbol.svg"}
              alt="Arbol"
            />{" "}
            <p className="text-sm xl:text-lg w-[16rem] xl:w-[20rem] xl:mr-[15rem] text-[#333333]">
              {t("social-economic-development")}
            </p>
          </div>

          <div className="flex flex-row items-center xl:items-end mt-3">
            <Image
              className="mx-2"
              width={100}
              height={100}
              src={"/img/proceso/icons/planta.svg"}
              alt="Planta"
            />{" "}
            <p className="text-sm xl:text-lg w-[16rem] xl:w-[20rem] xl:mr-[20rem] text-[#333333]">
              {t("promote-sustainable")}
            </p>
          </div>

          <div className="flex flex-row items-center xl:items-end mt-3">
            <Image
              className="mx-2 mt-2 md:mt-[-1rem]"
              width={100}
              height={100}
              src={"/img/proceso/icons/caja.svg"}
              alt="Caja"
            />
            <p className="text-sm xl:text-lg w-[16rem] xl:w-[20rem] 2xl:w-[20rem] xl:mr-[30rem] 2xl:mr-[30rem] text-[#333333]">
              {t("recover-clean")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
