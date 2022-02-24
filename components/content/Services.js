import Link from "next/link";
import React from "react";
import { services } from "../Data";
export default function Services({ obj }) {
  return (
    <div className="md:absolute md:top-0 h-[600px] md:h-full right-40 md:gap-y-12 gap-y-2 w-full text-center md:w-[50%] md:pt-18 pt-4 flex flex-col items-center md:justify-center md:py-8">
      <h1 className="text-2xl font-extrabold text-primary ">
        {services[obj].name}
      </h1>
      <p className="text-gray-400"> {services[obj].description}</p>
      <Link href={services[obj].url}>
        <a className="bg-white border-2 text-primary border-primary rounded-lg px-4 py-2 hover:bg-primary hover:border-white hover:text-white">
          Detaylı Bilgi
        </a>
      </Link>
    </div>
  );
}
