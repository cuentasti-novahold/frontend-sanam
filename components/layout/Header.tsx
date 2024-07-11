"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import NavbarCustom from './Navbar';
import IndicatorNav from './IndicatorNav';
import { FaX } from 'react-icons/fa6';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Control del menú principal
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (event: any) => {
    setActiveLink(event.target.textContent); // Identifica el enlace activo
  };

  return (
    <nav className="px-5 lg:px-40 bg-transparent text-gray-700 py-6 fixed w-screen z-20 flex justify-center">
      <div className="flex justify-around items-center font-bold lg:p-8 lg:w-3/4 bg-white text-black">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold px-10" onClick={handleClick}>
          <Image width={200} height={80} src="/img/logo-sanam.JPG" alt="Logo Sanam" />
        </Link>

        {/* Menú principal */}
        <div className="hidden md:flex space-x-8 ">
          <NavbarCustom
            activeLink={activeLink}
            handleClick={handleClick}
          />
        </div>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FaBars size={40} />
          </button>
        </div>
      </div>

      <div className="hidden md:flex lg:flex justify-end items-center font-bold p-8 w-1/4 bg-white/80 text-black">
        <div className="hidden md:flex w-full">
          <IndicatorNav activeLink={activeLink} />
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <div className="absolute left-0 w-full bg-white p-6 flex flex-col space-y-8 md:hidden">

          <div className="flex justify-around">
            <Link href="/" className="text-2xl font-bold px-10" onClick={handleClick}>
              <Image width={200} height={80} src="/img/logo-sanam.JPG" alt="Logo Sanam" />
            </Link>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <FaX size={40} />
              </button>
            </div>
          </div>

          <NavbarCustom
            handleClick={handleClick}
            activeLink={activeLink}
          />

          <IndicatorNav activeLink={activeLink} />
        </div>
      )}
    </nav>
  );
}
