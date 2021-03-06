import Link from "next/link";
import React from "react";

export default function Map() {
  return (
    <div className="relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.5875334938971!2d29.097430475601215!3d40.999541263350245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac881d8b5f58b%3A0x9e5dca387091b318!2sNidakule%20Ata%C5%9Fehir%20Bat%C4%B1!5e0!3m2!1str!2str!4v1645691087778!5m2!1str!2str"
        className="w-full h-[500px] z-10"
        loading="lazy"
      ></iframe>
      <div className="absolute bottom-0 py-4 gap-y-2 z-0 w-[70%] ml-[56px] md:w-[90%] md:ml-24 bg-white opacity-80 flex flex-col md:flex-row items-center justify-center gap-x-4">
        <Link href="/">
          <a>
            <img
              src="https://www.kgteknoloji.com/images/logo.png"
              alt="logo"
              className="bg-gray-600 p-4 rounded-md w-[150px]"
            />
          </a>
        </Link>
        <p className="md:w-[20%] text-center ">
          <span className="text-primary">Adres : </span>KOLEKTİF HOUSE ATAŞEHİR-
          Barbaros Mah.Begonya Sk.No:1/2 Nida Kule Batı Ataşehir
        </p>

        <a
          href="tel:+90 0533 210 34 05"
          className="md:w-[15%] text-center hover:text-orange-500"
        >
          <span className="text-primary">Telefon : </span>
          +90 0533 210 34 05
        </a>
      </div>
    </div>
  );
}
