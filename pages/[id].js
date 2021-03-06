import React from "react";
import { useRouter } from "next/router";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import TypeFirst from "../components/TypeFirst";
import TypeSecond from "../components/TypeSecond";
function DynamicPage({ data }) {
  const router = useRouter();

  let paragraph = (
    <div
      className={styles.paragraph}
      dangerouslySetInnerHTML={{ __html: data.html }}
    ></div>
  );
  React.useEffect(() => {
    if (!data) router.push("/404");
  }, []);

  return (
    <div className="flex flex-col justify-between">
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header position={false} />
      {data.type === 1 ? (
        <TypeFirst
          paragraph={paragraph}
          title={data.name.slice(15, data.name.length)}
          imgUrl={data.imgUrl}
        />
      ) : (
        <TypeSecond
          paragraph={paragraph}
          title={data.name.slice(15, data.name.length)}
          imgUrl={data.imgUrl}
        />
      )}

      <Footer />
    </div>
  );
}
DynamicPage.getInitialProps = async (ctx) => {
  // /id alabilmek için kullanıldi.
  // sayfa renderlanmadan önce veri çekmeden önce sayfa yoluyla veri çekmek gerekli.

  try {
    const request = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `/page/${ctx.query.id}`
    );

    return { data: request.data.data };
  } catch (error) {
    console.log("catche geldi");
    return { data: null };
  }
};
export default DynamicPage;
