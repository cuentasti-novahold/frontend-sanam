"use client"
import Link from 'next/link';

export default function NavbarCustom(/*{ toggleSubMenu1, isSubMenuOpen1, toggleSubMenu2, isSubMenuOpen2, handleClick, activeLink }*/ { activeLink = '' }) {
  return (
    <>
      {/* <div className="relative">
        <Link
          href="/a-quien-servimos"
          onClick={handleClick}
          onMouseOver={toggleSubMenu1}
          className={`text-gray-500 hover:text-green-400 ${activeLink === 'A Quien Servimos' ? 'text-green-400' : ''}`}
        >
          A Quien Servimos
        </Link>
        {isSubMenuOpen1 && (
          <div className="fixed bg-white rounded shadow-md z-10 mt-5" onMouseLeave={toggleSubMenu1}>
            <Link href="/a-quien-servimos/agricultura-regenerativa" className="block text-gray-500 hover:text-green-400 p-2 w-full">Agricultura Regenerativa</Link>
            <Link href="/a-quien-servimos/nutricion-humana" className="block text-gray-500 hover:text-green-400 p-2 w-full">Nutrición Humana</Link>
            <Link href="/a-quien-servimos/cuidado-personal" className="block text-gray-500 hover:text-green-400 p-2 w-full">Cuidado Personal</Link>
          </div>
        )}
      </div>

      <div className="relative">
        <Link
          href="/nuestros-productos"
          onClick={handleClick}
          onMouseOver={toggleSubMenu2}
          className={`text-gray-500 hover:text-green-400 ${activeLink === 'Nuestros Productos' ? 'text-green-400' : ''}`}
        >
          Nuestros Productos
        </Link>
        {isSubMenuOpen2 && (
          <div className="fixed bg-white rounded shadow-md z-10 mt-5 w-full" onMouseLeave={toggleSubMenu2} >
            <Link href="/nuestros-productos/terax" className="block text-gray-500 hover:text-green-400 p-2 w-full">Agroindustria - TERAX</Link>
            <Link href="/nuestros-productos/naox" className="block text-gray-500 hover:text-green-400 p-2 w-full">Nutrición Humana - NAOX</Link>
            <Link href="/nuestros-productos/naox-derma" className="block text-gray-500 hover:text-green-400 p-2 w-full">Cuidado Personal - NAOX DERMA</Link>
          </div>
        )}
      </div> */}

      <Link href="/agricultura" className={`text-gray-500 hover:text-green-400 uppercase ${activeLink === 'agricultura' ? 'text-green-400' : ''}`}>
        AGRICULTURA
      </Link>

      <Link href="/nutricion" className={`text-gray-500 hover:text-green-400 uppercase ${activeLink === 'nutricion' ? 'text-green-400' : ''}`}>
      Nutricion y Salud Humana
      </Link>

      <Link href="/cuidado-personal" className={`text-gray-500 hover:text-green-400 uppercase ${activeLink === 'cuidado-personal' ? 'text-green-400' : ''}`}>
        CUIDADO PERSONAL
      </Link>

      
    </>
  );
}
