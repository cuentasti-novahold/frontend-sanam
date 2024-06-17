import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AQuienServimos() {

  const classBtn = 'inline-block bg-green-500 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-green-700';
  return (
    <div className='px-40'>
        <section className="agricultura-regenerativa bg-gray-100 py-8 flex items-center justify-center">
          <div className="container mx-auto flex items-center justify-between">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">Agricultura Regenerativa</h2>
              <p className="text-lg mb-4">Texto descriptivo sobre agricultura regenerativa...</p>
              <Link href="/a-quien-servimos/agricultura-regenerativa" className={classBtn}>Leer más</Link>
            </div>
            <div className="max-w-md">
              <Image width={450} height={450} className="w-full" src="https://via.placeholder.com/450x450/?agricultura-regenerativa" alt="Agricultura Regenerativa" />
            </div>
          </div>
        </section>

        <section className="nutricion-humana bg-gray-200 py-8 flex items-center justify-center">
          <div className="container mx-auto flex items-center justify-between">
            <div className="max-w-md">
              <Image width={450} height={450} className="w-full" src="https://via.placeholder.com/450x450/?nutricion-humana" alt="Nutrición Humana" />
            </div>
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">Nutrición Humana</h2>
              <p className="text-lg mb-4">Texto descriptivo sobre nutrición humana...</p>
              <Link href="/a-quien-servimos/nutricion-humana" className={classBtn}>Leer más</Link>
            </div>
          </div>
        </section>

        <section className="cuidado-personal bg-gray-300 py-8 flex items-center justify-center">
          <div className="container mx-auto flex items-center justify-between">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">Cuidado Personal</h2>
              <p className="text-lg mb-4">Texto descriptivo sobre cuidado personal...</p>
              <Link href="/a-quien-servimos/cuidado-personal" className={classBtn}>Leer más</Link>
            </div>
            <div className="max-w-md">
              <Image width={450} height={450} className="w-full" src="https://via.placeholder.com/450x450/?cuidado-personal" alt="Cuidado Personal" />
            </div>
          </div>
        </section>
    </div>
  )
}
