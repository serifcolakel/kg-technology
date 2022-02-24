import { Transition } from "@tailwindui/react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import React, { useEffect } from "react";
const data = {
  links: [
    {
      webUrl: "/",
      imgUrl: "http://www.kgteknoloji.com/images/logo.png",
    },
  ],
  content: [
    {
      title: "Hakkımızda",
      rows: [
        { title: "Yazılım Geliştirme", titleUrl: "/yazilim-gelistirme" },
        { title: "Test Mühendisliği", titleUrl: "/test-mühendisliği" },
        { title: "İş ve Sistem Analizi", titleUrl: "/is-sistem-analizi" },
        { title: "Proje Yönetimi", titleUrl: "/proje-yonetimi" },

        { title: "Operasyon Destek", titleUrl: "/operasyon-destek" },
        {
          title: "Sürüm - Konfigürasyon Yönetimi",
          titleUrl: "/surum-konfigurasyon-yonetimi",
        },
        { title: "Kurumsal Mimari", titleUrl: "/kurumsal-mimari" },

        { title: "Sistem Entegrasyon", titleUrl: "/sistem-entegrasyon" },
      ],
    },
    {
      title: "Çalışma Modelleri",
      rows: [
        {
          title: "KPI Bazlı Yönetilen Hizmetler",
          titleUrl: "/kpi-bazli-yonetilen-hizmetler",
        },
        { title: "Proje Bazlı Hizmetler", titleUrl: "/proje-bazli-hizmetler" },
        { title: "Dış Kaynak Hizmetleri", titleUrl: "/dis-kaynak-hizmetleri" },
        { title: "Danışmanlık", titleUrl: "/danismanlik" },
      ],
    },
    {
      title: "Bize Ulaşın",
      rows: [
        {
          title: "İletişim",
          titleUrl: "/iletisim",
        },
        {
          title: "Referanslar",
          titleUrl: "/referanslar",
        },
        {
          title: "İnsan Kaynakları",
          titleUrl: "/ik",
        },
      ],
    },
  ],
};
export default function Footer() {
  const [windowWidth, setWindowWidth] = React.useState(0);
  console.log(windowWidth);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  return (
    <div className="w-full mx-auto bg-[#000000e0] text-white">
      <div className="divide-y divide-gray-500 pt-6">
        <div className="flex max-w-screen-xl mx-auto ">
          <div className="grid grid-flow-row md:grid-cols-4 w-full pb-6 pt-6 gap-y-4 p-4">
            <div className="flex flex-col gap-y-4">
              {data.links.map((x, i) => (
                <a href={x.webUrl} rel="noreferrer" key={i} target="_blank">
                  <img
                    alt="img"
                    src={x.imgUrl}
                    className="bg-gray-600 p-4 rounded-lg hover:opacity-30 "
                  />
                </a>
              ))}
            </div>
            {windowWidth < 400 ? (
              <Mobile data={data.content} />
            ) : (
              <NotMobile data={data.content} />
            )}
          </div>
        </div>
        <div className="w-full mx-auto bg-black">
          <div className="flex flex-col md:flex-row md:justify-between items-center w-full md:w-[70%] mx-auto py-2 md:bg-primary-white bg-gray-background">
            <div className="flex flex-col md:flex-row items-center md:gap-x-8">
              <span>© 2022 KG Teknoloji </span>
              <ul className="list-disc">
                <li>
                  <a href="/" target="_blank" rel="noreferrer">
                    <span className="font-normal hover:text-primary-200 text-primary text-sm ">
                      Bilgi Toplumu Hizmetleri
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-row md:gap-x-4 ">
              <a
                className="hover:text-primary-200 text-primary p-2"
                href="https://www.instagram.com/kgteknoloji"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="w-6 h-6 md:w-full" />
              </a>
              <a
                className="hover:text-primary-200 text-primary p-2"
                href="https://www.facebook.com/kgteknoloji"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                className="hover:text-primary-200 text-primary p-2"
                href="https://twitter.com/kgteknoloji"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Mobile(props) {
  const [openedTab, setOpenedTab] = React.useState(0);
  const datas = props.data;
  return (
    <>
      {datas.map((x, i) => (
        <div className="grid" key={i}>
          <div className="flex justify-between" onClick={() => setOpenedTab(i)}>
            <span className="font-normal text-x hover:text-primary">
              {x.title}
            </span>
            <div className="bg-primary rounded-lg flex items-center px-2">
              {i === openedTab ? <BsChevronDown /> : <BsChevronUp />}
            </div>
          </div>
          <Transition
            show={i === openedTab}
            enter="transition duration-1000 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {i === openedTab &&
              x.rows.map((r, j) => (
                <a href={r.titleUrl} key={j} rel="noreferrer" target="_blank">
                  <p className="text-sm	hover:text-orange-500">{r.title}</p>
                </a>
              ))}
          </Transition>
        </div>
      ))}
    </>
  );
}

function NotMobile(props) {
  const datas = props.data;
  return (
    <>
      {datas.map((data, index) => (
        <div className="flex flex-col gap-y-2 px-8" key={index}>
          <span className="font-bold text-xl">{data.title}</span>
          {data.rows.map((item, idx) => (
            <a href={item.titleUrl} key={idx} rel="noreferrer" target="_blank">
              <p className="text-sm	hover:text-orange-500">{item.title}</p>
            </a>
          ))}
        </div>
      ))}
    </>
  );
}
