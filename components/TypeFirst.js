import React from "react";
import Services from "./content/";

export default function TypeFirst({ paragraph, imgUrl, title }) {
  return (
    <div className="flex flex-col gap-y-4 py-8 px-4">
      <div className="flex flex-col md:flex-row gap-y-4 gap-x-8 w-full mx-auto md:w-[70%] text-gray-500">
        <div className="w-full md:w-[50%] ">
          <p className="font-bold text-primary md:text-left text-center text-3xl pb-4">
            {title}
          </p>
          {paragraph}
        </div>
        <img
          src={imgUrl}
          alt="hcg"
          className="md:w-[50%] h-auto object-contain "
        />
      </div>
      <Services show={false} />
    </div>
  );
}
