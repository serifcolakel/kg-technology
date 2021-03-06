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
  altDescription,
}) {
  return (
    <div
      className={
        buttonShow
          ? "flex flex-col gap-y-4 md:h-auto shadow-2xl rounded-xl  md:py-12 p-4 bg-white" +
            top
          : "flex flex-col gap-y-4 md:h-auto shadow-2xl rounded-xl  md:py-12 p-4 bg-white " +
            top
      }
    >
      <img
        src={imgUrl}
        alt="hcg"
        className="w-[120px] h-[120px] mx-auto object-contain p-4 animate-pulse"
      />

      {buttonShow && (
        <p className="text-center text-primary ">
          #<span className="text-black">{subtitle}</span>
        </p>
      )}

      <p
        className={
          buttonShow
            ? "font-bold text-primary text-center  text-lg w-full mx-auto "
            : "font-bold text-primary text-center text-lg  w-[70%] mx-auto"
        }
      >
        {title}
      </p>
      {buttonShow && (
        <>
          <p className="text-center text-gray-700 font-mono ">
            {description === undefined
              ? "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
              : description.slice(0, 200) + "..."}
          </p>
          <p className="text-center text-gray-700 font-mono ">
            {altDescription === undefined
              ? "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
              : altDescription.slice(0, 200) + "..."}
          </p>
        </>
      )}
      {!buttonShow && (
        <>
          <p className="text-center text-gray-700 font-mono ">
            {description === undefined
              ? "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
              : description}
          </p>
          <p className="text-center text-gray-700 font-mono ">
            {altDescription === undefined ? null : altDescription}
          </p>
        </>
      )}

      {buttonShow && (
        <Link href={url}>
          <a className="bg-white border-2 text-primary mx-auto border-primary rounded-lg px-4 py-2 hover:bg-primary hover:border-white hover:text-white">
            Detayl?? Bilgi
          </a>
        </Link>
      )}
    </div>
  );
}
