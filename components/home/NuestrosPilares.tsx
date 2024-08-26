import React from 'react'
import { useTranslations } from "next-intl";

export default function NuestrosPilares() {
    const t = useTranslations();
    return (
        <div className='w-full flex h-screen my-5'>
            <div className="w-1/2 bg-cover relative bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/inicio/experiencia-inicio.JPG')" }}>
                <div className="absolute bottom-0 left-0 transform rotate-180 ">
                    <div className="capitalize writing-mode-vertical-rl text-white bg-black bg-opacity-55 p-2 text-5xl">
                        {t("experience")}
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 mb-2 mr-2 text-white bg-black bg-opacity-50 p-2 text-base rounded-md text-right ">
                    {t("home-experience")} {t("coffe-fruit")}
                </div>
            </div>
            <div className="w-1/2 grid">
                <div className="w-full bg-indigo-300 relative bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url('/img/inicio/tecnologia-inicio.jpg')" }}>
                    <div className="absolute bottom-0 left-0 transform rotate-180 ">
                        <div className="capitalize writing-mode-vertical-rl text-white bg-black bg-opacity-55 p-2 text-5xl">
                            {t("technology")}
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 mb-2 mr-2 text-white bg-black bg-opacity-50 p-2 text-base rounded-md text-right ">
                        {t("home-technology")}
                    </div>
                </div>
                <div className="w-full bg-fuchsia-300 relative bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url('/img/inicio/innovacion-inicio.jpg')" }}>
                    <div className="absolute bottom-0 left-0 transform rotate-180 ">
                        <div className="capitalize writing-mode-vertical-rl text-white bg-black bg-opacity-55 p-2 text-5xl">
                            {t("innovation")}
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 mb-2 mr-2 text-white bg-black bg-opacity-50 p-2 text-base rounded-md text-right">
                        {t("home-innovation")}
                    </div>
                </div>
            </div>
        </div>
    )
}
