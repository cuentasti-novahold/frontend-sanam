import Image from "next/image";
import { useTranslations } from "next-intl";
export default function SectionFour() {
  const t = useTranslations();
  return (
    <>
      <div className="flex items-center justify-center xl:mt-12">
        <h1 className="text-4xl text-center font-semibold">
          {t("our-awards")}
        </h1>
      </div>

      <div className="flex flex-col mx-6 ">
        <div className="flex gap-4 mt-6 justify-center">
          <div className="m-4">
            <Image
              className=""
              width={150}
              height={130}
              src={"/img/proceso/reconocimientos/reconocimiento-uno.png"}
              alt="Reconocimiento uno"
            />
          </div>

          <div className="m-4">
            <Image
              className=""
              width={140}
              height={140}
              src={"/img/proceso/reconocimientos/reconocimiento-dos.png"}
              alt="Reconocimiento dos"
            />
          </div>

          <div className="m-4">
            <Image
              className=""
              width={140}
              height={130}
              src={"/img/proceso/reconocimientos/reconocimiento-tres.png"}
              alt="Reconocimiento tres"
            />
          </div>

          <div className="m-4">
            <Image
              className=""
              width={140}
              height={130}
              src={"/img/proceso/reconocimientos/reconocimiento-cuatro.png"}
              alt="Reconocimiento cuatro"
            />
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <div className="m-4">
            <Image
              className=""
              width={140}
              height={130}
              src={"/img/proceso/reconocimientos/reconocimiento-cinco.png"}
              alt="Reconocimiento cinco"
            />
          </div>
          <div className="m-4">
            <Image
              className=""
              width={140}
              height={130}
              src={"/img/proceso/reconocimientos/reconocimiento-ocho.png"}
              alt="Reconocimiento seis"
            />
          </div>
          <div className="m-4">
            <Image
              className=""
              width={140}
              height={140}
              src={"/img/proceso/reconocimientos/reconocimiento-siete.png"}
              alt="Reconocimiento siete"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-6 justify-center">
          <div className="m-4">
            <Image
              className=""
              width={140}
              height={130}
              src={"/img/proceso/reconocimientos/reconocimiento-nueve.png"}
              alt="Reconocimiento ocho"
            />
          </div>
          <div className="m-4">
            <Image
              className=""
              width={140}
              height={130}
              src={"/img/proceso/reconocimientos/reconocimiento-diez.png"}
              alt="Reconocimiento nueve"
            />
          </div>
          <div className="m-4">
            <Image
              className=""
              width={140}
              height={100}
              src={"/img/proceso/reconocimientos/reconocimiento-seis.png"}
              alt="Reconocimiento diez"
            />
          </div>
        </div>
      </div>
    </>
  );
}
