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
  // const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false); // Control del primer submenú
  // const [isSubMenuOpen2, setIsSubMenuOpen2] = useState(false); // Control del segundo submenú
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleSubMenu1 = () => {
  //   setIsSubMenuOpen1(!isSubMenuOpen1); // Alterna el primer submenú
  // };

  // const toggleSubMenu2 = () => {
  //   setIsSubMenuOpen2(!isSubMenuOpen2); // Alterna el segundo submenú
  // };

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
            // toggleSubMenu1={toggleSubMenu1} // Alternador del primer submenú
            // isSubMenuOpen1={isSubMenuOpen1} // Estado del primer submenú
            // toggleSubMenu2={toggleSubMenu2} // Alternador del segundo submenú
            // isSubMenuOpen2={isSubMenuOpen2} // Estado del segundo submenú
            // handleClick={handleClick}
            activeLink={activeLink}
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
            // toggleSubMenu1={toggleSubMenu1}
            // isSubMenuOpen1={isSubMenuOpen1}
            // toggleSubMenu2={toggleSubMenu2}
            // isSubMenuOpen2={isSubMenuOpen2}
            // handleClick={handleClick}
            activeLink={activeLink}
          />

          <IndicatorNav activeLink={activeLink} />
        </div>
      )}
    </nav>
  );
}
