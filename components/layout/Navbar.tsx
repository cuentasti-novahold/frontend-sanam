"use client"
import Link from 'next/link';

interface navbarCustomProps {
  activeLink: string,
  handleClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export default function NavbarCustom({ activeLink, handleClick }: navbarCustomProps) {
  return (
    <>
      <Link href="/agricultura" onClick={(e)=>handleClick} className={`text-gray-500 hover:text-green-400 uppercase ${activeLink === 'agricultura' ? 'text-green-400' : ''}`}>
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
