import React from "react";
import { referencesImages } from "./Data";
export default function References() {
  return (
    <div id="referanslar" className="flex flex-col gap-y-4 py-8 p-4">
      <h1 className="text-center text-3xl font-bold text-primary  cursor-pointer ">
        Referanslarımız
      </h1>
      <div className="w-full md:w-[60%] mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-x-8 bg-white">
        {referencesImages.map((image, index) => (
          <img
            src={image.imgUrl}
            alt={image.imgAlt}
            className="bg-white w-[300px] mx-auto h-40 object-contain cursor-pointer opacity-30 hover:opacity-100"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
