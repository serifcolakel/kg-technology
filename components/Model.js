import React from "react";
import styles from "../styles/Home.module.scss";
import Card from "./Card";
import { model } from "./Data";
export default function Model() {
  return (
    <div className={styles.model}>
      <img
        src="https://www.kgteknoloji.com/images/img/calisma-modeli.png"
        alt="hcg"
        className="w-full md:w-[50%] h-[120px] mx-auto object-contain px-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 w-full p-4 md:w-[70%] gap-4 mx-auto">
        {model.map((item, index) => (
          <Card
            key={index}
            imgUrl={item.imgUrl}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            altDescription={item.altDescription}
            url={item.url}
            buttonShow={true}
            top={
              index === 0
                ? " md:mt-20"
                : index === 1
                ? " md:mt-4"
                : index === 2
                ? " md:mt-20"
                : index === 3
                ? " md:mt-4"
                : ""
            }
          />
        ))}
      </div>
    </div>
  );
}
