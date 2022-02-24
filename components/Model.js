import React from "react";
import styles from "../styles/Home.module.scss";
import Card from "./Card";

export default function Model() {
  return (
    <div className={styles.model}>
      <img
        src="http://www.kgteknoloji.com/images/img/calisma-modeli.png"
        alt="hcg"
        className="w-[50%] h-[120px] mx-auto object-contain"
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

const model = [
  {
    imgUrl: "http://www.kgteknoloji.com/images/icon/fatura.png",
    title: "KPI Bazlı Yönetilen Hizmetler",
    subtitle: "managedservices",
    url: "/kpi-bazli-yonetilen-hizmetler",
    description:
      "KG Teknoloji’de tanımlanmış bilgi teknolojileri ihtiyaçlarınıza uçtan uca veya analiz, yazılım, test, operasyon gibi rol gruplarından oluşan SLA bazlı paketlenmiş çözümler ile bulunduğunuz lokasyonda ya da uzaktan (kendi ofisimizden) hizmet veririz.",
    altDescription:
      "Bu şekilde bir çalışma modeli verimlilik arttırıcı olması açısından yol göstericidir. KG Teknoloji olarak baştan sona sürecin içerisinde yer aldığımızdan her aşamada ortaya çıkan eksiklikleri, pozitife çevirme konusunda kurumunuzla birlikte hareket ederiz. SLA bazlı çözüm paketlerimizde ihtiyacınız olan her şey bulunur. Kalite, zamanlama ve performans konusundaki kriterlerimiz KPI Bazlı Hizmetlerimiz için de geçerlidir. Hizmet dahilinde öncelikle mevcut durumu uzman kadromuzla inceleriz. Bilgi akışını hiç kesmeden, tüm senaryoları göz önünde tutarak gerçekçi bir planlama yaparız. Ardından uygulamaya geçerek aylık karneler oluşturarak çalışmalara başlarız.",
  },
  {
    imgUrl: "http://www.kgteknoloji.com/images/img/proje-bazli-hizmetler.png",
    title: "Proje Bazlı Anahtar Teslim Entegratör Hizmetleri",
    subtitle: "agile",
    url: "/proje-bazli-hizmetler",
    description:
      "KG Teknoloji olarak hizmetlerimiz kapsamında şartnamesi ve fizibilitesi var olan yazılım projeleri için tam kapsamlı şekilde teklif vererek yola çıkarız. Hizmet dahilinde analiz, proje yönetimi, yazılım geliştirme, tasarım, test, yazılımı devreye alma işlemleri bizim sorumluluğumuzdadır. Bu alanda belirlenmiş ihtiyaçlarınız için deneyimli, sertifikalı ve alanında uzman kaynaklarımızla kurumunuza özel uçtan uca program ve proje yönetimi, analiz, yazılım, tasarım ve test hizmetleri sağlıyoruz.",
    altDescription:
      "Proje bazlı anahtar teslim hizmetlerimizde kurumunuzun ihtiyaç ve gereksinimlerini bilmemiz yeterli. Profesyonel ekibimiz analiz sürecini tamamlanmak üzere uygun bir yönetim planlaması yapar. Daha sonra mimari aşamasına geçilir ve kurumunuzun stratejik duruşuyla uyumlu bir tasarım uygulanır. Ardından verimliliği artırmak ve maliyet etkinliğini sağlamak için yazılım geliştirilir. Test işlemleri ise sistemde bir hatanın olmaması için test mühendislerimiz tarafından dikkatlice yapılır, bu aşamada test senaryoları da oluşturularak analizle beklentilerin uyumu ölçülür. Yazılımın devreye alınması da KG Teknoloji’nin profesyonel çalışanları tarafından gerçekleştirilir.",
  },
  {
    imgUrl: "http://www.kgteknoloji.com/images/img/dis-kaynak.png",
    title: "Dış Kaynak Hizmetleri",
    subtitle: "outsourcing",
    url: "/dis-kaynak-hizmetleri",
    description:
      "BT alanında yeniliklerin öncüsü haline gelen KG Teknoloji olarak kurumunuzun kaynak ihtiyaçlarıyla uyumlu şekilde kendi analiz, tasarım, mimari, yazılım, test ve operasyon ekiplerinize dönemsel veya uzun süreli ihtiyaç duyduğunuz uzman ve yetkin dış kaynakları sağlarız. Profesyonel kadromuzla verdiğimiz dış kaynak hizmetleri şirketinize artı değer katarken motive edici değişiklikler de gözlenir. Bilgi teknolojileri çözüm sağlayıcısı olarak esneklik ve geliştirilebilirlik sunar, ayrıca iş ortaklarının güvenliğini ve gizliliğini de koruma altına alır.",
  },
  {
    imgUrl: "http://www.kgteknoloji.com/images/img/danismanlik.png",
    title: "Danışmanlık Hizmetleri",
    subtitle: "consulting",
    url: "/danismanlik-hizmetleri",
    description:
      "Bilgi teknolojileri alanında her kademede uzmanlaşmış kaynaklarımızla belirlenmiş ihtiyaçlarınız için yönetim, süreç, metodoloji, uygulama, yazılım gibi tüm BT alanlarında danışmanlık hizmetleri sunarız. Bu uygulamaları gerçekleştirirken uzman ekibimizle son teknolojiden yardım alırız. Kurumunuzun süreçlerini iyileştirmek için sizi en doğru şekilde yönlendirerek işinizi gelişime açık hale getirir, gelişen dünya teknolojileriyle tam bir uyum içerisinde olmanızı sağlarız.",
    altDescription:
      "KG Teknoloji’nin Danışmanlık Hizmetleri ile altyapı sorunlarınız da ortadan kalkar. Optimum fayda sağlayacak size özel çözümler ile hizmet standartlarımızı her zaman en yukarıda tutmayı hedefleriz. Danışmanlık hizmeti verirken kurumunuza pozitif katkı sağlayacak, disiplinli bir anlayışla hareket ederek ideallerinizi gerçekleştirmede yardımcı oluruz. Dinamik ve özenli ekibimiz ise sizinle sürekli iletişim halinde kalarak zamanı yönetir ve doğru zamanda doğru yerde olmanızı sağlar.",
  },
];
