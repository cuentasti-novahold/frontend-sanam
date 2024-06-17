import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FaChevronUp } from 'react-icons/fa';
import '../src/utils/animate-scroll'
// Importa tus estilos globales aquí
import "./globals.css";

// Definir la fuente Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Sanam",
  description: "Realizado por Bik Leek",
  keywords: "Café. mucilago de café"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-100 font-sans`}>
        <Header />
        <div className=''>
          <div className="w-full h-20 lg:h-36 bg-white">
            {/* base navbar  */}
          </div>
          {children}
        </div>
        <Footer />
        <Link href="#" className="scroll-top flex"><FaChevronUp /></Link>
      </body>
    </html>
  );
}
