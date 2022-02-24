import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";
import { SiMinetest } from "react-icons/si";
import { GiCircuitry } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import {
  MdIntegrationInstructions,
  MdManageAccounts,
  MdOutlineCorporateFare,
  MdOutlineSupportAgent,
  MdSettingsSystemDaydream,
} from "react-icons/md";
import Services from "./Services";
import Content from "./Content";

export default function Home({ show }) {
  const [services, setServices] = useState("1");
  return (
    <div className={styles.content}>
      {show && <Content />}
      <div className="w-full mx-auto bg-[#eff3fb] py-12">
        <h1 className="text-center text-3xl font-bold text-blue-500 hover:text-orange-400">
          Servislerimiz
        </h1>
        <div className="w-full md:w-[70%] mx-auto flex md:flex-row items-center justify-center py-2 ">
          <div className="rounded-full md:p-12 p-[38px] shadow-2xl md:grid md:grid-cols-3 relative bg-white">
            <div className="rounded-full md:p-12 p-[38px] shadow-2xl">
              <div className="rounded-full md:p-12 p-[38px] shadow-2xl">
                <div className="rounded-full md:p-12 p-[38px] shadow-2xl">
                  <GiCircuitry className=" text-blue-500" size={70} />
                </div>
              </div>
            </div>
            <div
              onClick={() => setServices("0")}
              className="absolute top-4 md:top-4 z-40 right-32 md:right-44 bg-white border-blue-600 border-2 shadow-2xl animate-pulse cursor-pointer rounded-full items-center p-4"
            >
              <HiOutlineDesktopComputer
                className=" text-blue-500 bg-white shadow-2xl p-2 rounded-full"
                size={50}
              />
            </div>
            <div
              onClick={() => setServices("1")}
              className="absolute top-12 md:top-16 left-16 bg-white border-blue-600 border-2 shadow-2xl animate-pulse cursor-pointer rounded-full items-center p-4"
            >
              <SiMinetest
                className=" text-blue-500  bg-white shadow-2xl p-2 rounded-full"
                size={50}
              />
            </div>
            <div
              onClick={() => setServices("2")}
              className="absolute bottom-8 md:bottom-20 left-16 bg-white border-blue-600 border-2 shadow-2xl animate-pulse cursor-pointer rounded-full items-center p-4"
            >
              <MdSettingsSystemDaydream
                className=" text-blue-500 bg-white shadow-2xl p-2 rounded-full"
                size={50}
              />
            </div>
            <div
              onClick={() => setServices("3")}
              className="absolute right-32 md:right-44 z-40 bottom-4 bg-white border-blue-600 border-2 shadow-2xl animate-pulse cursor-pointer rounded-full items-center p-4"
            >
              <FaProjectDiagram
                className=" text-blue-500 bg-white shadow-2xl p-2 rounded-full"
                size={50}
              />
            </div>
            <div
              onClick={() => setServices("4")}
              className="absolute right-4 bottom-40 md:bottom-[182px] bg-white border-blue-600 border-2 shadow-2xl animate-pulse cursor-pointer rounded-full items-center p-4"
            >
              <MdOutlineSupportAgent
                className=" text-blue-500 bg-white shadow-2xl p-2 rounded-full"
                size={50}
              />
            </div>
            <div
              onClick={() => setServices("5")}
              className="absolute left-4 top-36 md:top-44 bg-white border-blue-600 border-2 shadow-2xl animate-pulse cursor-pointer rounded-full items-center p-4"
            >
              <MdManageAccounts
                className=" text-blue-500 bg-white shadow-2xl p-2 rounded-full"
                size={50}
              />
            </div>
            <div
              onClick={() => setServices("6")}
              className="absolute right-8 md:right-16 bottom-16 bg-white border-blue-600 border-2 shadow-2xl animate-pulse cursor-pointer rounded-full items-center p-4"
            >
              <MdOutlineCorporateFare
                className=" text-blue-500 bg-white shadow-2xl p-2 rounded-full"
                size={50}
              />
            </div>
            <div
              onClick={() => setServices("7")}
              className="absolute top-16 md:top-16 right-8 md:right-16 bg-white border-blue-600 border-2 shadow-2xl animate-pulse cursor-pointer rounded-full items-center p-4"
            >
              <MdIntegrationInstructions
                className=" text-blue-500 bg-white shadow-2xl p-2 rounded-full"
                size={50}
              />
            </div>
            {services === "0" && <Services obj={0} />}
            {services === "1" && <Services obj={1} />}
            {services === "2" && <Services obj={2} />}
            {services === "3" && <Services obj={3} />}
            {services === "4" && <Services obj={4} />}
            {services === "5" && <Services obj={5} />}
            {services === "6" && <Services obj={6} />}
            {services === "7" && <Services obj={7} />}
          </div>
        </div>
      </div>
    </div>
  );
}
