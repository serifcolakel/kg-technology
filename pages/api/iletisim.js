export default function handler(req, res) {
  console.log("req", req.body);
  if (req.body.name && req.body.email && req.body.message) {
    res
      .status(200)
      .json({ message: "Mesajınız Başarılı bir şekilde iletildi" });
  } else res.status(422).json({ message: "Lütfen tüm alanları doldurunuz" });
}
