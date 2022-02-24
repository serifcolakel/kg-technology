import React from "react";

export default function References() {
  return (
    <div className="flex flex-col gap-y-4 py-8 p-4">
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

const referencesImages = [
  {
    imgUrl: "https://i.hizliresim.com/7vhbqta.png",
    imgAlt: "Aksa",
  },
  {
    imgUrl: "https://i.hizliresim.com/92dvrjc.png",
    imgAlt: "BTK",
  },
  {
    imgUrl: "https://i.hizliresim.com/b5vdrq9.png",
    imgAlt: "Gittigidiyor",
  },
  {
    imgUrl: "https://i.hizliresim.com/l8wxs9z.png",
    imgAlt: "Hepsiburada",
  },
  {
    imgUrl: "https://i.hizliresim.com/fbysqu2.png",
    imgAlt: "Kliksa",
  },
  {
    imgUrl: "https://i.hizliresim.com/rqs2237.png",
    imgAlt: "Millenicom",
  },
  {
    imgUrl: "https://i.hizliresim.com/o6avbj6.jfif",
    imgAlt: "Sbmerkezi",
  },
  {
    imgUrl: "https://i.hizliresim.com/3qe3ehc.png",
    imgAlt: "TEB",
  },
  {
    imgUrl: "https://i.hizliresim.com/jtxda89.jfif",
    imgAlt: "sbgozetimmerkezi",
  },
  {
    imgUrl: "https://i.hizliresim.com/1d8m2qc.png",
    imgAlt: "Turk Telekom",
  },
  {
    imgUrl: "https://i.hizliresim.com/3uegx5v.png",
    imgAlt: "THY",
  },
  {
    imgUrl: "https://i.hizliresim.com/axfuxwh.png",
    imgAlt: "Turkcell global Bilgi",
  },
  {
    imgUrl: "https://i.hizliresim.com/3jbbxi8.png",
    imgAlt: "Turkcell Superonline",
  },
  {
    imgUrl: "https://i.hizliresim.com/8jiokty.png",
    imgAlt: "Turkcell TEknoloji",
  },
  {
    imgUrl: "https://i.hizliresim.com/afvg8n9.jpg",
    imgAlt: "Turkcell",
  },
  {
    imgUrl: "https://i.hizliresim.com/5mf9pgc.png",
    imgAlt: "Yapı Kredi",
  },
];
