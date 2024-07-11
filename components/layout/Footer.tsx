import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="px-5 lg:px-40 bg-white pt-8 pb-1">
            <div className="mx-auto flex flex-col lg:flex-row justify-between">
                <div className="my-5">
                    {/* <p className='font-bold text-lg uppercase sanam-gray'>Sanam ®</p> */}
                    <Link className="navbar-brand mr-5" href="/">
                        <Image width={200} height={80} src="/img/logo-sanam.JPG" alt="Logo Sanam" />
                    </Link>
                    <p className='font-bold my-2 text-lg'>La <span className='sanam-green'>r-evolución</span> del Café</p>
                    <div className="flex items-center mt-1">
                        <Link href="https://www.facebook.com/sanadores-ambientales" passHref target='_blank'>
                            <FaFacebook className="text-blue-600 mr-4 cursor-pointer" style={{ fontSize: '26px' }} />
                        </Link>
                        <Link href="https://www.instagram.com/sanadores-ambientales" passHref target='_blank'>
                            <FaInstagram className="text-pink-600 mr-4 cursor-pointer" style={{ fontSize: '26px' }} />
                        </Link>
                        <Link href="https://es.linkedin.com/company/sanadores-ambientales" passHref target='_blank'>
                            <FaLinkedinIn className="text-blue-600 mr-4 cursor-pointer" style={{ fontSize: '26px' }} />
                        </Link>
                    </div>
                </div>
                <div className="my-5">
                    <h2 className='font-bold text-2xl'>Empresa</h2>
                    <ul className="justify-center">
                        <li className=''><Link href="#">Quienes somos</Link></li>
                        {/* <li className=''><Link href="#">Contacto</Link></li> */}
                    </ul>
                </div>
                <div className="my-5">
                    <h2 className='font-bold text-2xl'>Industrias</h2>
                    <ul className="justify-center">
                        <li className=''><Link href="#">Agricultura</Link></li>
                        <li className=''><Link href="#">Nutricion y Salud Humana</Link></li>
                        <li className=''><Link href="#">Cuidado Personal</Link></li>
                    </ul>
                </div>
                <div className="my-5">
                    <h2 className='font-bold text-2xl'>Blog</h2>
                    <ul className="justify-center">
                        <li className=''><Link href="/contacto">Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <div className="w-full text-center flex items-center justify-center">
                <p className="inline-block">Hecho con <FaHeart className="text-red-700 inline-block" /> por <Link href="https://google.com/search?q=novahold.com" target='_blank' className="inline-block font-bold">Novahold</Link></p>
            </div>
        </footer>
    )
}
