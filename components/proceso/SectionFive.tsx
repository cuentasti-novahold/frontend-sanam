import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SectionFive() {
  const t = useTranslations();
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="uppercase text-center text-4xl  font-semibold">
          {t("our")} {t("presence")}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 mx-[2rem] lg:mx-[4rem]">
        <div className="lg:w-full sm:flex items-center">
          <div className="w-full lg:w-1/3">
            <div className="flex justify-center items-center rounded-md w-full mb-3">
              <h2 className="flex items-center text-2xl xl:text-xl 2xl:text-2xl font-bold m-2 text-center">
                {t("in")} {t("colombia")} {t("we-are")}
                <Image
                  src={"/img/proceso/sanam-icon.svg"} 
                  alt={"colombia"}
                  width={150}
                  height={200}
                  className="ml-2 mt-2"
                />
              </h2>
            </div>

            <Image
              src={
                "https://cdn.pixabay.com/photo/2012/04/15/21/27/colombia-35364_640.png"
              }
              alt={"country"}
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-xl mb-4"
            />
          </div>

          <div className="w-full lg:w-1/3">
            <div className="flex flex-col items-start p-5">
              <div className="flex justify-center items-center rounded-md w-full ">
                <h2 className="text-3xl font-bold m-2 text-center">
                  {t("home-presence")}
                </h2>
              </div>

              <p className="text-center font-bold pt-3"></p>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="flex justify-center items-center rounded-md w-full mb-3">
              <h2 className="flex items-center text-2xl xl:text-xl 2xl:text-2xl font-bold m-2 text-center">
                {t("in")} {t("costa-rica")} {t("we-are")}
                <Image
                  src={"/img/proceso/agrisanam.png"}
                  alt={"costa rica"}
                  width={150}
                  height={200}
                  className="ml-2"
                />
              </h2>
            </div>

            <Image
              src={
                "https://cdn.pixabay.com/photo/2013/07/13/14/14/costa-rica-162270_640.png"
              }
              alt={"country"}
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-xl mb-4"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-6 mx-16 mt-5 border shadow-xl ">
        <h1 className="text-2xl text p-5 font-semibold">
          {t("p-located-countries-coffee")}
        </h1>
      </div>
    </>
  );
}
