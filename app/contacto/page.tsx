import React from 'react'



export default function Contacto() {

  return (
    <div className='px-40'>

      <div className="lg:flex w-full bg-white m-10 rounded-2xl shadow-xl">
        <div className="lg:flex lg:flex-col items-center justify-center py-20 px-10 w-full lg:w-1/2">
          <form className="bg-white shadow-md rounded p-8 mb-4 lg:w-full">

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Nombre:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Correo electrónico:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Motivo de contacto:
              </label>
              <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                <option value="">Seccione una opción</option>
                <option value="1">Agricultura</option>
                <option value="2">Nutrición y salud humana</option>
                <option value="3">Cuidado personal</option>
                <option value="4">Otro</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="telefono">
                Número de contacto:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="telefono"
                type="telefono"
                placeholder="Ingresa tu Número de contacto"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Mensaje:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Escribe tu mensaje"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/2 py-20">
          <div className="items-center justify-center p-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89743.8371107084!2d-75.68659815703579!3d6.243328830165124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Medellin%2C%20Antioquia%2C%20Colombia!5e0!3m2!1sen!2sin!4v1720629117808!5m2!1sen!2sin" width="100%" height="550" loading="lazy" />
          </div>
        </div>
      </div>

    </div>
  )
}
