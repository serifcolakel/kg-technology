import React from "react";
import Slider from "./Slider";
import HeaderTop from "./HeaderTop";
import styles from "../../styles/Home.module.scss";
import Header from "./Header";
import { useRouter } from "next/router";
export default function Home({ position }) {
  const router = useRouter();
  const show = router.pathname === "/";

  return (
    <header className="relative">
      <HeaderTop />
      <div className={styles.sliders}>
        <Header show={show} position={position} />
        {show ? <Slider show={1} /> : null}
      </div>
    </header>
  );
}
