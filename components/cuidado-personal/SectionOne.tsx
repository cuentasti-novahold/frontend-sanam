import Image from "next/image";
export default function SectionOne() {
    return (
        <div>
            <Image
                className="w-full h-auto "
                width={1200}
                height={400}
                src={"/img/cuidado-personal/banner-cuidado-personal.jpg"}
                alt="banner cuidado personal"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
            <div className="absolute flex flex-col inset-0 items-center justify-center text-white">
                <h1 className="text-6xl font-bold m-8 mr-80">Naox ® Derma</h1>
                <p className="text-2xl max-w-3xl ml-80 text-justify">
                    Un concentrado de polifenoles del fruto del café natural, patentado y
                    único en su tipo, que proporciona a la piel, nutrición profunda,
                    potente protección de las células de la piel y beneficios
                    antimicrobianos.
                </p>
                <h1 className="text-4xl font-bold mt-20">Ventajas</h1>
                <div className="flex flex-row text-center">
                    <div className="m-6">
                        <Image
                            className="p-2 text-white"
                            width={130}
                            height={130}
                            src={"/img/cuidado-personal/trade-icon.svg"}
                            alt="icon comercio"
                        />
                        <p className="text-xl">Comercio justo</p>
                    </div>
                    <div className="m-6">
                        <Image
                            className="p-2 text-white"
                            width={130}
                            height={130}
                            src={"/img/cuidado-personal/gmo-icon.svg"}
                            alt="icon gmo"
                        />
                        <p className="text-xl">Libre de GMO</p>
                    </div>
                    <div className="m-6">
                        <Image
                            className="p-2 text-white"
                            width={130}
                            height={130}
                            src={"/img/cuidado-personal/vegan-icon.svg"}
                            alt="icon vegano"
                        />
                        <p className="text-xl">Vegano</p>
                    </div>
                    <div className="m-6 ">
                        <Image
                            className="p-2 text-white"
                            width={130}
                            height={130}
                            src={"/img/cuidado-personal/freedom-icon.svg"}
                            alt="icon conejo"
                        />
                        <p className="text-xl">Libre de crueldad</p>
                    </div>
                    <div className="m-5">
                        <Image
                            className="p-2 text-white"
                            width={130}
                            height={130}
                            src={"/img/cuidado-personal/world-icon.svg"}
                            alt="icon sostenible"
                        />
                        <p className="text-xl">
                            Producido <br /> sosteniblemente
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
