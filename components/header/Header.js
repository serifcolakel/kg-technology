import React from "react";
import Link from "next/link";
import { MdMenuOpen } from "react-icons/md";
export default function Header({ show }) {
  const navLink = [
    { name: "Anasayfa", url: "/" },
    {
      name: "Hakkımızda",
      url: "/",
    },
    {
      name: "Çalışma Modelleri",
      url: "/",
    },
    { name: "Ar&Ge Projemiz", url: "/arge-projelerimi" },
    { name: "Referanslar", url: "/referanslar" },
  ];
  const hakkimizdaAltLink = [
    { name: "Yazılım Geliştirme", url: "/yazilim-gelistirme" },
    { name: "Test Mühendisliği", url: "/test-mühendisliği" },
    { name: "İş ve Sistem Analizi", url: "/is-sistem-analizi" },
    { name: "Proje Yönetimi", url: "/proje-yonetimi" },

    { name: "Operasyon Destek", url: "/operasyon-destek" },
    {
      name: "Sürüm - Konfigürasyon Yönetimi",
      url: "/surum-konfigurasyon-yonetimi",
    },
    { name: "Kurumsal Mimari", url: "/kurumsal-mimari" },

    { name: "Sistem Entegrasyon", url: "/sistem-entegrasyon" },
  ];
  const calismaModelleriAltLink = [
    {
      name: "KPI Bazlı Yönetilen Hizmetler",
      url: "/kpi-bazli-yonetilen-hizmetler",
    },
    { name: "Proje Bazlı Hizmetler", url: "/proje-bazli-hizmetler" },
    { name: "Dış Kaynak Hizmetleri", url: "/dis-kaynak-hizmetleri" },
    { name: "Danışmanlık", url: "/danismanlik" },
  ];
  let mainClassName =
    "absolute w-full md:px-6 px-2 top-0 z-50 flex flex-row items-center justify-between";
  if (!show) {
    mainClassName += " bg-[#383838]";
  }
  const [showMenu, setShowMenu] = React.useState({
    first: false,
    second: false,
  });

  return (
    <div className={mainClassName}>
      <Link href="/">
        <a>
          <img
            src="http://www.kgteknoloji.com/images/logo.png"
            alt="logo"
            className="md:w-[375px] md:h-[75px] w-[135px] h-12 object-contain my-2"
          />
        </a>
      </Link>
      <div className="hidden md:flex flex-row items-center gap-x-2">
        {navLink.map((item, index) => (
          <div
            className="relative"
            key={index}
            onClick={() =>
              index === 1
                ? setShowMenu({ first: !showMenu.first, second: false })
                : index === 2
                ? setShowMenu({ first: false, second: !showMenu.second })
                : null
            }
          >
            <Link href={`${item.url}`}>
              <a className="text-white hover:text-orange-500 md:block hidden text-base font-normal px-4  border-r-[1px] border-white ">
                {item.name}
              </a>
            </Link>
            {index === 1 && showMenu.first && (
              <div className="text-blue-900 p-2 absolute -left-2 top-8 bg-white gap-2 rounded-xl grid grid-cols-2 w-[400px]">
                {hakkimizdaAltLink.map((item, index) => (
                  <Link href={`${item.url}`} key={index}>
                    <a className=" hover:text-orange-500 font-bold text-base truncate px-4 ">
                      {"> " + item.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
            {index === 2 && showMenu.second && (
              <div className="text-blue-900 p-2 absolute -left-2 top-8 bg-white gap-2 rounded-xl grid grid-cols-1 w-[400px]">
                {calismaModelleriAltLink.map((item, index) => (
                  <Link href={`${item.url}`} key={index}>
                    <a className=" hover:text-orange-500 font-bold text-base truncate px-4 ">
                      {"> " + item.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <button className="text-orange-500 border-[1px] bg-black px-4 py-2">
          Daha Fazlası
        </button>
      </div>
      <div className="md:hidden text-white block">
        <MdMenuOpen size={30} />
      </div>
    </div>
  );
}
