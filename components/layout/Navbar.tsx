"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface navbarCustomProps {
  activeLink: string;
  handleClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NavbarCustom({
  activeLink,
  handleClick,
}: navbarCustomProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <>
      <Link
        href={`/${locale}/agricultura`}
        onClick={(e) => handleClick}
        className={`text-gray-500 hover:text-green-400 uppercase ${
          activeLink === "agricultura" ? "text-green-400" : ""
        }`}
      >
        {t("agriculture")}
      </Link>

      <Link
        href={`/${locale}/nutricion`}
        className={`text-gray-500 hover:text-green-400 uppercase ${
          activeLink === "nutricion" ? "text-green-400" : ""
        }`}
      >
        {t("nutrition")} {t("and")} {t("human-health")}
      </Link>

      <Link
        href={`/${locale}/cuidado-personal`}
        className={`text-gray-500 hover:text-green-400 uppercase ${
          activeLink === "cuidado-personal" ? "text-green-400" : ""
        }`}
      >
        {t("care")}
      </Link>
    </>
  );
}
