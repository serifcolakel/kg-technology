// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let pages = [
  {
    type: 1,
    name: "Yazılım Geliştirme",
    url: "/yazilim-gelistirme",
    html: `
  <p>KG Teknoloji nin uzman ekibi kurumunuza özel yazılım geliştirme hizmetleri için doğrudan ihtiyaçlarınıza göre, size katma değer katacak şekilde planlama yapar. Agile, Waterfall metodolojisiyle Java, .Net, PL/SQL, SQL, vb. mobil yazılım için ise IOS, Android, Windows Phone platformlarında uzmanlaşmış ekibiyle yazılım ihtiyaçlarınıza uçtan uca çözümler ve kendi yazılım ekiplerinize dışarıdan yazılım desteği sağlar.</p>
  <p>KG Teknoloji, güvenli yazılım geliştirme alanında yıllara dayanan bilgi birikimini esas alır. Uzman ekip, yazılım geliştirme sürecinde sarf edilen güç ve proje tamamlanma süresi arasında gerekli dengeyi sağlama yeteneğine sahiptir. Tüm bu süreçlerde KG Teknoloji riski en aza indirir ve güvenlik politikası dahilinde hareket eder. Profesyonel kadro her aşamayı yakından takip eder ve sistemde düzeltmeleri anlık olarak yaparak ilerler. Süreç içerisinde iş akışı dengeli bir şekilde yürütülür, kurumunuzun profiline uygun tasarımlara değer yaratacak biçimde şekil verilir. KG Teknoloji tüm bu prensipler ışığında, sistemin tasarımını yapar, geliştirir ve onu ürün haline getirir. Bunları gerçekleştirirken ise güvenlik standartlarına tam uyum sağlar ve yüksek kalitede uygulamalarla süreç yönetiminin en kritik bölümlerinden birini ekip çalışması ve tecrübeli kaynakları sayesinde özgün bir bakış açısıyla tamamlamış olur.</p>
  `,
    imgUrl: "https://www.kgteknoloji.com/images/img/yazilim-gelistirme.png",
  },
  {
    type: 1,
    name: "Test Mühendisliği",
    url: "/test-muh",
    html: `
    <p>Test mühendislerimiz, müşteri taleplerinin sorunsuz bir şekilde karşılanması için projenin en başından itibaren süreçte aktif bir şekilde yer alır. Geliştirilen yazılımı, müşterinin kurumsal gereksinimlerine uygun olup olmadığı ekseninde detaylı bir şekilde inceler. Farklı sektörlerde uzmanlaşmış ekibimiz projenin iş ihtiyaçlarıyla uyumunu HP Quality Center, bugzilla, IBM rational suite Clearquest gibi test servis araçlarını kullanarak ölçer ve test senaryoları yazarak gereksinimlere uçtan uca cevap verir. KG Teknoloji, kendi test ekiplerinize dışarıdan destek de sağlar.</p> 
    <p>Deneyimli test mühendislerimiz, projenin akış sürecine uygun olmayan bir hata buldukları takdirde bunu ilgili kişiye bildirerek düzeltilmesini sağlarlar. Böylece işlem daha sağlıklı bir şekilde yürür. Test senaryoları oluşturularak beklenen sonuçlarla yapılan analizin uyumlu hale gelmesi için geliştirme süreci sonuna kadar takip edilir. Bu işlemleri yaparken en son teknolojiyle geliştirilen araçlar kullanılır. Dikkatli, titiz, sorumluluk sahibi, iletişim yeteneği kuvvetli ve analitik zekaya sahip test mühendislerimiz, proje yönetim sürecinin en hassas noktalarından birini oluşturur. Temel işlerinin yanında performans testi, uygunluk testi gibi birçok etap ile de yazılım programınızın bir anlamda “sağlamasını” yaparak kurumunuzun ihtiyacı olduğu hizmeti sorunsuz bir şekilde alabilmesi için takibi son aşamaya kadar bırakmaz.</p>
    `,
    imgUrl: "https://www.kgteknoloji.com/images/img/test-muhendisligi.png",
  },
  {
    type: 1,
    name: "İş ve Sistem Analizi",
    url: "/is-sistem-analizi",
    html: `<p>KG Teknoloji’de iş analistleri, müşteri ile yazılım mühendisleri arasında köprü oluşturur. Analistler, müşterilerin süreçlerini belli metotlar aracılığıyla ayrıntılı şekilde inceleyip yazılım ekibiyle koordine bir şekilde kurumların fonksiyonel ihtiyaçlarına ulaşmalarını sağlarlar. Bunların yanı sıra iş analistlerimiz hızlı ve çözüm odaklı yaklaşımlarla iletişimi sürekli canlı tutarak sürecin hatasız bir şekilde yürümesine olanak tanırlar. Sürecin dökümantasyonu, takibi gibi tüm projeyi etkileyecek kritik unsurları hassasiyetle yürütürler.</p> 
    <p>Sistem analistlerimiz kurumsal gereksinimler doğrultusunda hazırlanan projeleri, geliştirme ve iyileştirme hedeflerini de beraberine alarak analiz etme yeteneğine sahiptir. Yazılım ekibine sağlıklı bilgiyi ulaştırırken ayrıca fizibilite çalışmalarıyla sistemin hedef ve kısıtlarını belirleyerek, projenin küçük değişikliklerle daha etkin hale gelmesine de imkan tanırlar.</p> 
    <p>Farklı sektörlerde uzmanlaşmış ekibimizle yazılım projelerinde ticari ekiplerden fonksiyonel gereksinimlerin, ticari olmayan ekiplerden fonksiyonel olmayan isteklerin toparlanması, bu isteklerin programcının anlayacağı dile çevrilmesi, iş süreçleri bazında düşünerek etki alanlarının tespiti ve dokümantasyonunu ihtiyaçlarınıza göre uçtan uca belirleriz. Bunun yanı sıra kendi iş ve teknik analiz ekiplerinize dışarıdan destek sağlarız.</p>
    `,
    imgUrl: "https://www.kgteknoloji.com/images/img/is-ve-sistem-analizi.png",
  },
  {
    type: 1,
    name: "Proje Yönetimi",
    url: "/proje-yonetimi",
    html: ` <p>Yazılım projelerinde kısıtlı zaman, maliyet ve teknik durumları dikkate alarak, projenin en etkin biçimde gerçekleşmesi için insan, araç-gereç, materyal gibi kaynakların planlanması, yönetilmesi ve kontrol edilmesi için Agile veya Waterfall proje yönetim metodolojilerini kullanarak kendi proje yönetim ofisi ekiplerinize dışarıdan destek sağlıyoruz.</p>
  <p>KG Teknoloji olarak proje hedeflerine ulaşırken performans, maliyet, zamanlama ve kalite yönetimini elden bırakmayız. Planlamamızı bu kriterlere göre yaparken aktivitelerimizin uygunluğunu da bu unsurlara göre denetleriz. Projelerimizi zamanında ve bütçe kıstasları içerisinde tamamlarken performans gereklerini de en iyi şekilde yerine getirmeyi görev sayarız. Proje yönetiminde başı çeken performans, maliyet, zaman ve kalite hedeflerine sorunsuz bir şekilde ulaşabilmek için kaynakları doğru yerlere yönlendirerek, baştan itibaren verimli bir program kurgularız, proje dinamiklerini ise düzenli olarak kontrol ederiz. Böylece çıkabilecek problemlere karşı önlemimizi sistemin en başından alırız.</p>
  <p>Tüm bu süreçlerin tanımlanması, planlanması, analizi, kontrolü, denetimi ekibimiz tarafından titizlikle gerçekleştirilir. Her aşamada olduğu gibi proje yönetiminde de kurumunuzun hedeflerine odaklanan çalışanlarımız, bilgi, beceri ve donanımlarıyla hata payını en aza indirirler.</p>
`,
    imgUrl: "https://www.kgteknoloji.com/images/img/proje-yonetimi.png",
  },
  {
    type: 1,
    name: "Operasyon Destek",
    url: "/operasyon-destek",
    html: ` <p>Firmanızda mevcut olan BT altyapılarına (uygulamalar, veri tabanı, güvenlik yazılımları, felaket merkezi, veri ambarı vb.) eksiksiz bir şekilde ve en iyi kalitede ITIL metodolojisini kullanarak; kurumunuz tarafından belirlenmiş servis ve sistem, erişilebilirlik, kesinti gibi SLA’ler kapsamında yönetilmek üzere komple destek sunuyoruz. Ayrıca kendi operasyon ekiplerinize dışarıdan destek de sağlıyoruz.</p>
  <p>KG Teknoloji, farklı altyapılara verdiği operasyonel destekle müşterilerinin her zaman yanında yer alır. Bunun için en iyi uygulamaların ve deneyimlerin birleşmesiyle oluşturulmuş son teknoloji ITIL metodolojisini kullanır. Bu anlayış ile kurumunuzun altyapısında gözle görülür iyileşmeyi fark edersiniz. Maliyetleri düşürmek, erişilebilirliği artırmak, kapasiteyi ideal hale getirmek, verimliliği sağlamak, ölçülebilirlik, BT kalitesinin artması bu hizmetin genel anlamda sağladığı faydalardır. </p>
  <p>Altyapınızdaki teknolojileri operasyonel destek sayesinde tam anlamıyla özümseyerek işinizden maksimum verim alabilirsiniz. Operasyon ekiplerimizin tecrübesi, gelişen teknolojiye olan uyumu ve kullandıkları araçlar ile hem bilgi teknolojileri altyapınızın kalitesini yükseltebilir hem de bu pozitif etkiyi direkt izleyerek, içiniz rahat bir şekilde çözüm odaklı yaklaşımın keyfini çıkarabilirsiniz.</p>
`,
    imgUrl: "https://www.kgteknoloji.com/images/img/operasyon-destek.png",
  },
  {
    type: 1,
    name: "Sürüm - Konfigürasyon Yönetimi",
    url: "/surum-konfigurasyon-yonetimi",
    html: `<p>Yazılım projelerinin sürüm ve konfigürasyon yönetimlerinin gerçekleştirilmesi, konfigürasyon yönetimi planlarının hazırlanması, konfigürasyon durum takibinin yapılması, sürüm yönetimi faaliyetleri, sürüm takvimine uygun çalışan kodların üretim kontrolleri, sürüm bitiminde geliştirme sunucularına kurulumun yapılması ve bununla ilgili ekiplerin bilgilendirilmesi, verilerin depolandığı dijital bir platform olan repository’lerin periyodik bakımlarının yapılması ve repository kullanıcı erişim yetkilendirmelerinin yönetilmesi gibi ihtiyaçlarınız için kendi sürüm yönetimi ekiplerinize dışarıdan destek sağlarız.</p>
    <p>Kalite yönetimi açısından önem taşıyan bu alanda ürünün yapısına göre bir Konfigürasyon Yönetim Süreci tanımlarız ve uygulamaya koyarız. Böylece konfigürasyon belirleme – konfigürasyon kontrolü – konfigürasyon durum saptama – konfigürasyon denetleme süreçleri sırasıyla gerçekleştirilir.</p>
`,
    imgUrl:
      "https://www.kgteknoloji.com/images/img/surum-konfigurasyon-yonetimi.png",
  },
  {
    type: 1,
    name: "Kurumsal Mimari",
    url: "/kurumsal-mimari",
    html: ` <p>KG Teknoloji olarak mevcut sistemlerin ve projelerin portföyünü çıkartmak, projelerde üst seviye tasarım yaratmak, stratejik planlamayı doğru bir şekilde yapmak, BT altyapısına yön vermek, projelerin yazılım aşamasında ve etkileşim noktalarında meydana gelebilecek problemlerde tasarım ekibine liderlik etmek gibi ihtiyaçlarınıza kendi mimari ekiplerinize dışarıdan destek sağlarız.</p>
  <p>Yazılımın bu aşamasında da profesyonel kadromuzun yaptığı analizler ve planlama sürecinin sonunda ortaya çıkan görünüm ve akış ile ürünün yazılım anlamında mimarisini oluşturmak üzere yola çıkarız. Kullanım kolaylığı, fonksiyonellik, esneklik, bakım kolaylığı ve güvenilirlik, tasarım sürecinde en çok önem verdiğimiz unsurlar arasında öncelikli olarak yer alır. Bir sistemin varlığının en başından itibaren doğru seçimlerle var olduğunu unutmadan gerçekçi çözümlerle, kullanılacak teknolojilere ve yazılım mimarisine karar veririz. Uzmanlarımız bir projeyi kodlarken gelişen teknolojilerle entegrasyonuna, genişletilebilir özellikler taşımasına ve geliştirilebilir olmasına karşın oldukça hassas davranırlar. </p>
  <p>Yazılım geliştirme sürecinin temel taşlarından olan mimari konusunda KG Teknoloji olarak bütünlük içinde bir plan çıkardıktan sonra belirlediğimiz noktaları detaylandırarak incelikli bir çalışma yürütmek prensiplerimizdendir. </p>
`,
    imgUrl: "https://www.kgteknoloji.com/images/img/kurumsal-mimari.png",
  },
  {
    type: 1,
    name: "İletişim",
    url: "/iletisim",
    html: ` <p>KG Teknoloji olarak mevcut sistemlerin ve projelerin portföyünü çıkartmak, projelerde üst seviye tasarım yaratmak, stratejik planlamayı doğru bir şekilde yapmak, BT altyapısına yön vermek, projelerin yazılım aşamasında ve etkileşim noktalarında meydana gelebilecek problemlerde tasarım ekibine liderlik etmek gibi ihtiyaçlarınıza kendi mimari ekiplerinize dışarıdan destek sağlarız.</p>
  <p>Yazılımın bu aşamasında da profesyonel kadromuzun yaptığı analizler ve planlama sürecinin sonunda ortaya çıkan görünüm ve akış ile ürünün yazılım anlamında mimarisini oluşturmak üzere yola çıkarız. Kullanım kolaylığı, fonksiyonellik, esneklik, bakım kolaylığı ve güvenilirlik, tasarım sürecinde en çok önem verdiğimiz unsurlar arasında öncelikli olarak yer alır. Bir sistemin varlığının en başından itibaren doğru seçimlerle var olduğunu unutmadan gerçekçi çözümlerle, kullanılacak teknolojilere ve yazılım mimarisine karar veririz. Uzmanlarımız bir projeyi kodlarken gelişen teknolojilerle entegrasyonuna, genişletilebilir özellikler taşımasına ve geliştirilebilir olmasına karşın oldukça hassas davranırlar. </p>
  <p>Yazılım geliştirme sürecinin temel taşlarından olan mimari konusunda KG Teknoloji olarak bütünlük içinde bir plan çıkardıktan sonra belirlediğimiz noktaları detaylandırarak incelikli bir çalışma yürütmek prensiplerimizdendir. </p>
`,
    imgUrl: "https://www.kgteknoloji.com/images/img/kurumsal-mimari.png",
  },
  {
    type: 1,
    name: "Sistem Entegrasyon",
    url: "/sistem-entegrasyon",
    html: `<p>KG Teknoloji, kurumunuzda halihazırda kullanmakta olduğunuz “middleware” bir diğer deyişle ara katman yazılımları üzerinden hizmet sağlayan Oracle, Tibco gibi farklı platformlarda, tecrübeli uzman kadrosu ile sistem entegrasyon hizmeti verir. Bu hizmet, ihtiyaçlarınız için komple veya kendi ara katman ekiplerinize dışarıdan destek olarak sağlanır. </p>
  <p>Sistem entegrasyonu ile kullanmakta olduğunuz yazılım ürünlerine yapılacak eklemeler, verimliliğinizi etkilemeyecek şekilde entegre edilir. Bu alanda sektörün en deneyimli kadrolarından birine sahip olan KG Teknoloji, kaliteyi esas aldığı vizyonuyla çözüm odaklı bir entegrasyon hizmeti sunar. Entegrasyonun planlaması, uygulaması ve takibini her zaman titizlikle yapan KG Teknoloji, kompleks bileşenleri düzgün çalışacak şekilde entegre etmeyi ilke edinir. Böylece daha önce birbirinden bağımsız çalışan sistemler kendi içinde, tam uyum halinde faaliyet gösterir. </p>
  <p>Bu da bilgi teknolojilerinde var olan en yeni araçların, ek bir yük getirmeden kullanılarak verimli çalışan ve yüksek performanslı bir sistem haline gelmesini sağlar. Bu çalışma sistemin işlevselliğini artırıp maliyeti düşürürken, daha üretken bir altyapının oluşmasına da olanak tanır. </p>
`,
    imgUrl: "https://www.kgteknoloji.com/images/img/sistem-entegrasyon.png",
  },
  {
    type: 2,
    name: "KPI Bazlı Yönetilen Hizmetler",
    url: "/kpi-bazli-yonetilen-hizmetler",
    html: ` <p>KG Teknoloji’de tanımlanmış bilgi teknolojileri ihtiyaçlarınıza uçtan uca veya analiz, yazılım, test, operasyon gibi rol gruplarından oluşan SLA bazlı paketlenmiş çözümler ile bulunduğunuz lokasyonda ya da uzaktan (kendi ofisimizden) hizmet veririz. </p>
    <p>Bu şekilde bir çalışma modeli verimlilik arttırıcı olması açısından yol göstericidir. KG Teknoloji olarak baştan sona sürecin içerisinde yer aldığımızdan her aşamada ortaya çıkan eksiklikleri, pozitife çevirme konusunda kurumunuzla birlikte hareket ederiz. SLA bazlı çözüm paketlerimizde ihtiyacınız olan her şey bulunur. Kalite, zamanlama ve performans konusundaki kriterlerimiz KPI Bazlı Hizmetlerimiz için de geçerlidir. Hizmet dahilinde öncelikle mevcut durumu uzman kadromuzla inceleriz. Bilgi akışını hiç kesmeden, tüm senaryoları göz önünde tutarak gerçekçi bir planlama yaparız. Ardından uygulamaya geçerek aylık karneler oluşturarak çalışmalara başlarız.</p>
`,
    imgUrl:
      "https://www.kgteknoloji.com/images/img/kpi-bazli-yonetilen-hizmetler.png",
  },
  {
    type: 2,
    name: "Proje Bazlı Hizmetler",
    url: "/proje-bazli-hizmetler",
    html: `<p>KG Teknoloji olarak hizmetlerimiz kapsamında şartnamesi ve fizibilitesi var olan yazılım projeleri için tam kapsamlı şekilde teklif vererek yola çıkarız. Hizmet dahilinde analiz, proje yönetimi, yazılım geliştirme, tasarım, test, yazılımı devreye alma işlemleri bizim sorumluluğumuzdadır. Bu alanda belirlenmiş ihtiyaçlarınız için deneyimli, sertifikalı ve alanında uzman kaynaklarımızla kurumunuza özel uçtan uca program ve proje yönetimi, analiz, yazılım, tasarım ve test hizmetleri sağlıyoruz.</p>
    <p>Proje bazlı anahtar teslim hizmetlerimizde kurumunuzun ihtiyaç ve gereksinimlerini bilmemiz yeterli. Profesyonel ekibimiz analiz sürecini tamamlanmak üzere uygun bir yönetim planlaması yapar. Daha sonra mimari aşamasına geçilir ve kurumunuzun stratejik duruşuyla uyumlu bir tasarım uygulanır. Ardından verimliliği artırmak ve maliyet etkinliğini sağlamak için yazılım geliştirilir. Test işlemleri ise sistemde bir hatanın olmaması için test mühendislerimiz tarafından dikkatlice yapılır, bu aşamada test senaryoları da oluşturularak analizle beklentilerin uyumu ölçülür. Yazılımın devreye alınması da KG Teknoloji’nin profesyonel çalışanları tarafından gerçekleştirilir.</p>
    `,
    imgUrl: "https://www.kgteknoloji.com/images/img/proje-bazli-hizmetler.png",
  },
  {
    type: 2,
    name: "Dış Kaynak Hizmetleri",
    url: "/dis-kaynak-hizmetleri",
    html: `<p>BT alanında yeniliklerin öncüsü haline gelen KG Teknoloji olarak kurumunuzun kaynak ihtiyaçlarıyla uyumlu şekilde kendi analiz, tasarım, mimari, yazılım, test ve operasyon ekiplerinize dönemsel veya uzun süreli ihtiyaç duyduğunuz uzman ve yetkin dış kaynakları sağlarız. Profesyonel kadromuzla verdiğimiz dış kaynak hizmetleri şirketinize artı değer katarken motive edici değişiklikler de gözlenir. Bilgi teknolojileri çözüm sağlayıcısı olarak esneklik ve geliştirilebilirlik sunar, ayrıca iş ortaklarının güvenliğini ve gizliliğini de koruma altına alır.</p>`,
    imgUrl: "https://www.kgteknoloji.com/images/img/proje-bazli-hizmetler.png",
  },
  {
    type: 2,
    name: "Danışmanlık",
    url: "/danismanlik",
    html: ` <p>Bilgi teknolojileri alanında her kademede uzmanlaşmış kaynaklarımızla belirlenmiş ihtiyaçlarınız için yönetim, süreç, metodoloji, uygulama, yazılım gibi tüm BT alanlarında danışmanlık hizmetleri sunarız. Bu uygulamaları gerçekleştirirken uzman ekibimizle son teknolojiden yardım alırız. Kurumunuzun süreçlerini iyileştirmek için sizi en doğru şekilde yönlendirerek işinizi gelişime açık hale getirir, gelişen dünya teknolojileriyle tam bir uyum içerisinde olmanızı sağlarız. </p>
    <p>KG Teknoloji’nin Danışmanlık Hizmetleri ile altyapı sorunlarınız da ortadan kalkar. Optimum fayda sağlayacak size özel çözümler ile hizmet standartlarımızı her zaman en yukarıda tutmayı hedefleriz. Danışmanlık hizmeti verirken kurumunuza pozitif katkı sağlayacak, disiplinli bir anlayışla hareket ederek ideallerinizi gerçekleştirmede yardımcı oluruz. Dinamik ve özenli ekibimiz ise sizinle sürekli iletişim halinde kalarak zamanı yönetir ve doğru zamanda doğru yerde olmanızı sağlar. </p>
    <p>KG Teknoloji, Danışmanlık Hizmetleri verirken müşterinin gözüyle görür. Yapmak istediklerinizi anlayarak fikir alışverişinde bulunur ve bilgi akışını kesintiye uğramaksızın sürdürür. Böylece ihtiyaca yönelik hareket eden, sistemli, şeffaf ve yenilikçi bir anlayışla kurumunuzun dijital alandaki prestijinin artmasına katkı sunar.</p>
`,
    imgUrl: "https://www.kgteknoloji.com/images/img/danismanlik.png",
  },
];

export default function handler(req, res) {
  let page = pages.find((item) => item.url === "/" + req.query.id);
  if (page) {
    res.status(200).json({ data: page });
  } else {
    res.status(404).json({ error: "Page not found" });
  }
}
