import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import Map from "../../components/Map";

export default function Iletisim() {
  return (
    <div className="flex flex-col justify-between">
      <Header position={false} />
      <div className="w-full md:w-[70%] mx-auto flex flex-col gap-y-8 md:p-0 p-4">
        <h1 className="text-xl md:text-3xl font-bold text-primary">
          KG Bilgi İşlem Teknoloji A.Ş.
        </h1>
        <div className="w-full flex flex-row md:w-[50%] gap-x-4">
          <div>
            <p className="text-primary">Yönetim ve İnsan Kaynakları </p>
            <span>
              KOLEKTİF HOUSE ATAŞEHİR- Barbaros Mah.Begonya Sk.No:1/2 Nida Kule
              Batı Ataşehir
            </span>
          </div>
          <div>
            <p className="text-primary">Yıldız Teknik Üniversitesi Teknopark</p>
            <span>
              İkitelli OSB Mah. YTÜ İkitelli Teknopark Sok. No:1/1B24 İkitelli,
              Başakşehir, İstanbul
            </span>
            <p className="md:w-[20%] ">
              <span className="text-primary"> </span>
            </p>
          </div>
        </div>
        <a
          href="tel:+90 0533 210 34 05"
          className="md:w-[20%] hover:text-orange-500"
        >
          <span className="text-primary">Telefon : </span>
          +90 0533 210 34 05
        </a>
        <a
          href="mailto:info@kgteknoloji.com"
          className="md:w-[20%] hover:text-orange-500"
        >
          <span className="text-primary">Mail : </span>
          info@kgteknoloji.com
        </a>
      </div>

      <Map />
      <Footer />
    </div>
  );
}
