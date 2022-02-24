import React from "react";

import Card from "../Card";

export default function Content() {
  return (
    <div>
      <img
        src="http://www.kgteknoloji.com/images/img/hcg.png"
        alt="hcg"
        className="w-full md:w-[50%] h-[120px] mx-auto object-contain"
      />
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-center text-3xl font-bold text-primary hover:text-primary-400 cursor-pointer ">
          Hizmetlerimiz
        </h1>
        <p className="w-[70%] mx-auto text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry is standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 w-full p-4 md:w-[70%] gap-4 mb-12 ">
          <Card
            imgUrl={"http://www.kgteknoloji.com/images/icon/fatura.png"}
            title={"Faturalama ve Ücretlendirme"}
            top={" md:mt-20"}
          />
          <Card
            imgUrl={
              "http://www.kgteknoloji.com/images/icon/musteri-iliskileri.png"
            }
            title={"Müşteri İlişkileri ve Yönetimi"}
            top={" md:mt-4"}
          />
          <Card
            imgUrl={"http://www.kgteknoloji.com/images/icon/is-zekasi.png"}
            title={"İş Zekası"}
            top={" md:mt-20"}
          />
          <Card
            imgUrl={"http://www.kgteknoloji.com/images/icon/ara-katman.png"}
            title={"Ara Katman"}
            top={" md:mt-4"}
          />
          <Card
            imgUrl={"http://www.kgteknoloji.com/images/icon/katma-deger.png"}
            title={"Katma Değerli Servisler"}
            top={" md:mt-20"}
          />
        </div>
      </div>
    </div>
  );
}
