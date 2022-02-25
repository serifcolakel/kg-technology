import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import styles from "../../styles/Home.module.scss";
export default function InsanKaynaklari() {
  return (
    <div className="flex flex-col justify-between">
      <Header position={false} />
      <div className="w-full md:w-[70%] mx-auto flex flex-col gap-y-8 md:p-0 p-4 md:py-12">
        <div className="w-full flex flex-col items-start md:flex-row justify-between md:full md:divide-x-2 gap-y-4 8">
          <img
            src="http://www.kgteknoloji.com/images/img/ik.png"
            alt="ik"
            className="md:w-[20%] h-[200px] md:h-[300px]"
          />

          <div className="text-gray-600 w-full md:w-[40%] p-4">
            <h3 className="text-primary font-semibold text-xl">Kariyer ;</h3>
            <p>
              İlkemiz, temelinde teknoloji ve inovasyon olan bir kurum kültürü
              oluşturmak.Teknoloji üretiminde ve başarımızın temelinde,
              paydaşlarımız olarak nitelendirdiğimiz çalışanlarımız ve onlarla
              kurduğumuz doğru diyalog yatmaktadır.
            </p>
            <p>
              Doğru insan kaynakları yönetimimiz sayesinde, çalışanlarımıza
              yaptığımız yatırımların karşılığını alarak, büyüme hedeflerimizi
              hep yukarıda tutabildik. Sizleri, sürekli büyüyen ekibimizde, daha
              büyük hedeflere koşarken yanımızda görmek istiyoruz.
            </p>
            <h3 className="text-primary font-semibold text-xl pb-4">
              Açık Pozisyonlar ;
            </h3>
            <div className="flex flex-col gap-y-2">
              <Link href="https://www.kariyer.net/is-ilani/kg-bilgi-islem-teknoloji-hizm-ltd-sti-analist-1393766?firmaad=kg-bilgi-islem-teknoloji-hizm-ltd-sti&firmaad=kg-bilgi-islem-teknoloji-hizm-ltd-sti&pozisyonad=analist&pozisyonad=analist-is-ilani&ilankodusfr=1393766&tmpsno=1&f=f15j&ulkeId=0&sehirId=0">
                <a
                  target="_blank"
                  className="text-xl font-bold text-black hover:text-primary-300"
                >
                  Analist
                </a>
              </Link>
              <Link href="https://www.kariyer.net/is-ilani/kg-bilgi-islem-teknoloji-hizm-ltd-sti-analist-1393766?firmaad=kg-bilgi-islem-teknoloji-hizm-ltd-sti&firmaad=kg-bilgi-islem-teknoloji-hizm-ltd-sti&pozisyonad=analist&pozisyonad=analist-is-ilani&ilankodusfr=1393766&tmpsno=1&f=f15j&ulkeId=0&sehirId=0">
                <a
                  target="_blank"
                  className="text-xl font-bold text-black hover:text-primary-300"
                >
                  Yazılım Test Mühendisi
                </a>
              </Link>
              <Link href="https://www.kariyer.net/is-ilani/kg-bilgi-islem-teknoloji-hizm-ltd-sti-analist-1393766?firmaad=kg-bilgi-islem-teknoloji-hizm-ltd-sti&firmaad=kg-bilgi-islem-teknoloji-hizm-ltd-sti&pozisyonad=analist&pozisyonad=analist-is-ilani&ilankodusfr=1393766&tmpsno=1&f=f15j&ulkeId=0&sehirId=0">
                <a
                  target="_blank"
                  className="text-xl font-bold text-black hover:text-primary-300"
                >
                  Yazılım Geliştirme Uzmanı
                </a>
              </Link>
              <Link href="https://www.kariyer.net/is-ilani/kg-bilgi-islem-teknoloji-hizm-ltd-sti-analist-1393766?firmaad=kg-bilgi-islem-teknoloji-hizm-ltd-sti&firmaad=kg-bilgi-islem-teknoloji-hizm-ltd-sti&pozisyonad=analist&pozisyonad=analist-is-ilani&ilankodusfr=1393766&tmpsno=1&f=f15j&ulkeId=0&sehirId=0">
                <a
                  target="_blank"
                  className="text-xl font-bold text-black hover:text-primary-300"
                >
                  Java Yazılım Mühendisi
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex flex-col gap-y-4 p-4">
            <h3 className="text-primary font-semibold text-xl">
              Özgeçmişinizi Gönderin;
            </h3>
            <p className="font-bold text-xl text-gray-500">Ad Soyad</p>
            <input type="text" className={styles.input} />
            <p className="font-bold text-xl text-gray-500">E-Posta</p>
            <input type="text" className={styles.input} />
            <p className="font-bold text-xl text-gray-500">Mesaj</p>
            <textarea className={styles.input} rows="5" cols="50"></textarea>
            <p className="font-bold text-xl text-gray-500">CV</p>
            <input type="file" className="w-full border-gray-300" />
            <button className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg">
              Gönder
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
