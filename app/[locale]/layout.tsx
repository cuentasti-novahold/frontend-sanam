import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa";
import { BiLogoWhatsapp } from "react-icons/bi";
import "../../src/utils/animate-scroll";
// Importa tus estilos globales aquí
import "../globals.css";
//i18n
import { NextIntlClientProvider, useMessages } from "next-intl";

// Definir la fuente Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Sanam",
  description: "Realizado por Bik Leek",
  keywords: "Café, Mucilago de café",
  applicationName: "Sanam.com",
  robots: { index: true, follow: true },
  creator: "Bik Leek Team",
  category: "Alimentación",
  //icons: { icon: "public/img/logo-sanam.JPG?=4", apple: "public/img/logo-sanam.JPG?=4" , shortcut: "public/img/logo-sanam.JPG?=4"},
  // authors: [{ name: "Novahold", url: "novahold.com" },],
  // alternates: {
  //   canonical: "/",
  //   languages: {
  //     'en-US': '/en-US',
  //     'es-ES': '/es-co',
  //   },
  // }
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  console.log("Messages:", messages);
  console.log("Locale:", locale);
  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body className={`${inter.className} bg-gray-100`}>
          {/* font-sans*/}
          <Header />
          <div className="">
            <div className="w-full h-20 lg:h-36 bg-white">
              {/* base navbar  */}
            </div>
            {children}
          </div>
          <Footer />
          {/* <Link href="https://wa.me/c/573142562821" className="scroll-top flex "><BiLogoWhatsapp /></Link>
        <Link href="#" className="scroll-top flex"><FaChevronUp /></Link> */}
          <div className="fixed bottom-8 right-10 flex flex-col items-end space-y-4">
            <div className="tooltip-container">
              <Link
                href="https://wa.me/573142562821"
                className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white hover:bg-green-600 transform hover:scale-110 transition duration-150 ease-in-out"
              >
                <BiLogoWhatsapp size="26" />
                <span className="tooltip-text">Contáctanos</span>
              </Link>
            </div>
            <Link
              href="#"
              className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-500 text-white hover:bg-gray-600 transform hover:scale-110 transition duration-150 ease-in-out"
            >
              <FaChevronUp size="26" />
            </Link>
          </div>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
