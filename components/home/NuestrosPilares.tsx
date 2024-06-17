import React from 'react'

export default function NuestrosPilares() {
    return (
        <div className='w-full flex h-screen my-5'>
            <div className="w-1/2 bg-cover relative bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/inicio/experiencia-inicio.JPG')" }}>
                <div className="absolute bottom-0 left-0 transform rotate-180 ">
                    <div className="capitalize writing-mode-vertical-rl text-white bg-black bg-opacity-55 p-2 text-5xl">
                        Experiencia
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 mb-2 mr-2 text-white bg-black bg-opacity-50 p-2 text-base rounded-md text-right ">
                    En el desarrollo de productos a partir del concentrado de fruta de café
                </div>
            </div>
            <div className="w-1/2 grid">
                <div className="w-full bg-indigo-300 relative bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url('/img/inicio/tecnologia-inicio.jpg')" }}>
                    <div className="absolute bottom-0 left-0 transform rotate-180 ">
                        <div className="capitalize writing-mode-vertical-rl text-white bg-black bg-opacity-55 p-2 text-5xl">
                            Tecnología
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 mb-2 mr-2 text-white bg-black bg-opacity-50 p-2 text-base rounded-md text-right ">
                        Nuestros procesos de extracción cuentan con la mejor tecnología
                    </div>
                </div>
                <div className="w-full bg-fuchsia-300 relative bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url('/img/inicio/innovacion-inicio.jpg')" }}>
                    <div className="absolute bottom-0 left-0 transform rotate-180 ">
                        <div className="capitalize writing-mode-vertical-rl text-white bg-black bg-opacity-55 p-2 text-5xl">
                            Innovación
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 mb-2 mr-2 text-white bg-black bg-opacity-50 p-2 text-base rounded-md text-right">
                        Contamos con un Ingrediente Innovador
                    </div>
                </div>
            </div>
        </div>
    )
}
