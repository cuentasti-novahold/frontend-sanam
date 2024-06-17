import Link from 'next/link'
import React from 'react'
import { FaBuilding, FaSalesforce } from 'react-icons/fa'

export default function QuieresDistribuir() {
  return (
    <div className="w-full px-5 lg:px-40 py-12 bg-gray-200">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-6 md:px-12">
                <Link
                    href="/nuestros-productos/terax/distribuir"
                    className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
                    <FaBuilding size={48} className="text-pink-500 mb-4" />
                    <span className="text-xl font-bold text-gray-800 uppercase">Quieres Distribuir</span>
                </Link>
                <Link
                    href="/nuestros-productos/terax/distribuidores"
                    className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
                    <FaSalesforce size={48} className="text-brown-500 mb-4" />
                    <span className="text-xl font-bold text-gray-800 uppercase">Nuestros Distribuidores</span>
                </Link>
            </div>
        </div>
  )
}
