import React from "react";
import TarjetaBandera from "./TarjetaBandera";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Banderas() {
  const t = useTranslations();

  return (
    <>
      <div className="w-full py-5">
        <h1 className="text-5xl uppercase font-bold py-2">
          {t("our")} {t("presence")}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 py-10">
        <div className="w-full p-4 relative flex items-center">
          <div className="w-full lg:w-1/3">
            <div className="flex justify-center items-center bg-white rounded-md w-full mb-3">
              <h2 className="text-3xl font-bold m-2">Colombia</h2>
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
              <div className="flex justify-center items-center bg-white rounded-md w-full ">
                <h2 className="text-3xl font-bold m-2">{t("home-presence")}</h2>
              </div>

              <p className="text-center font-bold pt-3"></p>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="flex justify-center items-center bg-white rounded-md w-full mb-3">
              <h2 className="text-3xl font-bold m-2">Costa Rica</h2>
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
    </>
  );
}
