import Link from "next/link";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
const links = [
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İK", href: "/ik" },
  { name: "İletişim", href: "/iletisim" },
];
export default function HeaderTop() {
  return (
    <div className="bg-[#f7941e] flex flex-row items-center justify-end w-full h-7">
      <div className="flex flex-row items-center justify-center">
        {links.map((item, index) => (
          <Link href={`${item.href}`} key={index}>
            <a className="text-white md:block hidden text-base font-normal px-4  border-r-[1px] border-white ">
              {item.name}
            </a>
          </Link>
        ))}
        <Link href="/">
          <a className="text-white text-lg font-bold px-2 h-7 w-full flex items-center bg-[#f9b462]">
            <AiFillLinkedin />
          </a>
        </Link>
        <button className="bg-[#ff7e00] px-4 text-white">English</button>
      </div>
    </div>
  );
}
