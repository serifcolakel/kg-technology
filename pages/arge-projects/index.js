import React from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/header/";
import { projects } from "../../components/Data";
export default function index() {
  return (
    <div className="flex flex-col justify-between">
      <Header position={false} />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full p-4 md:w-[70%] gap-4 mx-auto">
        {projects.map((item, index) => (
          <Card
            key={index}
            imgUrl={item.imgUrl}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            altDescription={item.altDescription}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
