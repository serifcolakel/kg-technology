import Link from "next/link";
import React from "react";

export default function Card({
  title,
  imgUrl,
  top,
  subtitle,
  description,
  url,
  buttonShow,
}) {
  return (
    <div
      className={
        buttonShow
          ? "flex flex-col gap-y-4 md:h-[550px] shadow-2xl rounded-xl p-4 bg-white" +
            top
          : "flex flex-col gap-y-4 md:h-[450px] shadow-2xl rounded-xl p-4 bg-white " +
            top
      }
    >
      <img
        src={imgUrl}
        alt="hcg"
        className="w-[120px] h-[120px] mx-auto object-contain p-4 animate-pulse"
      />

      {buttonShow && (
        <p className="text-center text-orange-500 ">
          #<span className="text-black">{subtitle}</span>
        </p>
      )}

      <p
        className={
          buttonShow
            ? "font-bold text-orange-500 text-center  w-full mx-auto "
            : "font-bold text-orange-500 text-center  w-[70%] mx-auto  animate-bounce"
        }
      >
        {title}
      </p>
      <p className="text-center text-gray-700 font-mono">
        {description === undefined
          ? "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
          : description.slice(0, 200) + "..."}
      </p>
      {buttonShow && (
        <Link href={url}>
          <a className="bg-white border-2 text-blue-500 mx-auto border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-500 hover:border-white hover:text-white">
            Detaylı Bilgi
          </a>
        </Link>
      )}
    </div>
  );
}
