import Link from "next/link";
import React from "react";

export default function Services({ obj }) {
  return (
    <div className="md:absolute md:top-0 h-[600px] md:h-full right-40 w-full text-center md:w-[50%] md:pt-0 pt-4 flex flex-col items-center gap-y-8 md:justify-around md:py-8">
      <h1 className="text-2xl font-extrabold text-blue-600 ">
        {services[obj].name}
      </h1>
      <p className="text-gray-400"> {services[obj].description}</p>
      <Link href={services[obj].url}>
        <a className="bg-white border-2 text-blue-500 border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-500 hover:border-white hover:text-white">
          Detaylı Bilgi
        </a>
      </Link>
    </div>
  );
}

const services = [
  {
    name: "Yazılım Geliştirme",
    url: "/yazilim-gelistirme",
    description:
      "KG Teknoloji’nin uzman ekibi kurumunuza özel yazılım geliştirme hizmetleri için doğrudan ihtiyaçlarınıza göre, size katma değer katacak şekilde planlama yapar. Agile, Waterfall metodolojisiyle Java, .Net, PL/SQL, SQL, vb. mobil yazılım için ise IOS, Android, Windows Phone platformlarında uzmanlaşmış ekibiyle yazılım ihtiyaçlarınıza uçtan uca çözümler ve kendi yazılım ekiplerinize dışarıdan yazılım desteği sağlar.",
  },
  {
    name: "Test Mühendisliği",
    url: "/test-mühendisliği",
    description:
      "KG Teknoloji’de iş analistleri, müşteri ile yazılım mühendisleri arasında köprü oluşturur. Analistler, müşterilerin süreçlerini belli metotlar aracılığıyla ayrıntılı şekilde inceleyip yazılım ekibiyle koordine bir şekilde kurumların fonksiyonel ihtiyaçlarına ulaşmalarını sağlarlar. Bunların yanı sıra iş analistlerimiz hızlı ve çözüm odaklı yaklaşımlarla iletişimi sürekli canlı tutarak sürecin hatasız bir şekilde yürümesine olanak tanırlar. Sürecin dökümantasyonu, takibi gibi tüm projeyi etkileyecek kritik unsurları hassasiyetle yürütürler.",
  },
  {
    name: "İş ve Sistem Analizi",
    url: "/is-sistem-analizi",
    description:
      "KG Teknoloji’de iş analistleri, müşteri ile yazılım mühendisleri arasında köprü oluşturur. Analistler, müşterilerin süreçlerini belli metotlar aracılığıyla ayrıntılı şekilde inceleyip yazılım ekibiyle koordine bir şekilde kurumların fonksiyonel ihtiyaçlarına ulaşmalarını sağlarlar. Bunların yanı sıra iş analistlerimiz hızlı ve çözüm odaklı yaklaşımlarla iletişimi sürekli canlı tutarak sürecin hatasız bir şekilde yürümesine olanak tanırlar. Sürecin dökümantasyonu, takibi gibi tüm projeyi etkileyecek kritik unsurları hassasiyetle yürütürler.",
  },
  {
    name: "Proje Yönetimi",
    url: "/proje-yonetimi",
    description:
      "Yazılım projelerinde kısıtlı zaman, maliyet ve teknik durumları dikkate alarak, projenin en etkin biçimde gerçekleşmesi için insan, araç-gereç, materyal gibi kaynakların planlanması, yönetilmesi ve kontrol edilmesi için Agile veya Waterfall proje yönetim metodolojilerini kullanarak kendi proje yönetim ofisi ekiplerinize dışarıdan destek sağlıyoruz.",
  },
  {
    name: "Operasyon Destek",
    url: "/operasyon-destek",
    description:
      "Firmanızda mevcut olan BT altyapılarına (uygulamalar, veri tabanı, güvenlik yazılımları, felaket merkezi, veri ambarı vb.) eksiksiz bir şekilde ve en iyi kalitede ITIL metodolojisini kullanarak; kurumunuz tarafından belirlenmiş servis ve sistem, erişilebilirlik, kesinti gibi SLA’ler kapsamında yönetilmek üzere komple destek sunuyoruz. Ayrıca kendi operasyon ekiplerinize dışarıdan destek de sağlıyoruz.",
  },
  {
    name: "Sürüm - Konfigürasyon Yönetimi",
    url: "/surum-konfigurasyon-yonetimi",
    description:
      "Yazılım projelerinin sürüm ve konfigürasyon yönetimlerinin gerçekleştirilmesi, konfigürasyon yönetimi planlarının hazırlanması, konfigürasyon durum takibinin yapılması, sürüm yönetimi faaliyetleri, sürüm takvimine uygun çalışan kodların üretim kontrolleri, sürüm bitiminde geliştirme sunucularına kurulumun yapılması ve bununla ilgili ekiplerin bilgilendirilmesi, verilerin depolandığı dijital bir platform olan repository’lerin periyodik bakımlarının yapılması ve repository kullanıcı erişim yetkilendirmelerinin yönetilmesi gibi ihtiyaçlarınız için kendi sürüm yönetimi ekiplerinize dışarıdan destek sağlarız.",
  },
  {
    name: "Kurumsal Mimari",
    url: "/kurumsal-mimari",
    description:
      "KG Teknoloji olarak mevcut sistemlerin ve projelerin portföyünü çıkartmak, projelerde üst seviye tasarım yaratmak, stratejik planlamayı doğru bir şekilde yapmak, BT altyapısına yön vermek, projelerin yazılım aşamasında ve etkileşim noktalarında meydana gelebilecek problemlerde tasarım ekibine liderlik etmek gibi ihtiyaçlarınıza kendi mimari ekiplerinize dışarıdan destek sağlarız.",
  },

  {
    name: "Sistem Entegrasyon",
    url: "/sistem-entegrasyon",
    description:
      "KG Teknoloji, kurumunuzda halihazırda kullanmakta olduğunuz “middleware” bir diğer deyişle ara katman yazılımları üzerinden hizmet sağlayan Oracle, Tibco gibi farklı platformlarda, tecrübeli uzman kadrosu ile sistem entegrasyon hizmeti verir. Bu hizmet, ihtiyaçlarınız için komple veya kendi ara katman ekiplerinize dışarıdan destek olarak sağlanır.",
  },
];
