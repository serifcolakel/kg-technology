import React from "react";
import axios from "axios";
import styles from "../styles/Home.module.scss";
export default function IletisimForm() {
  const [message, setMessage] = React.useState({
    message: "",
    isOpen: false,
    textClass: " text-red-500",
  });
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async () => {
    try {
      let response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}iletisim`,
        form
      );
      console.log("response", response.data);
      if (response.data.message) {
        setMessage({
          message: response.data.message,
          isOpen: true,
          textClass: " text-green-500",
        });
      }
    } catch (error) {
      //console.log("error", error.response.data.message);
      setMessage({
        message: error.response.data.message || "Beklenmedik sunucu hatası",
        isOpen: true,
        textClass: " text-red-500",
      });
    }
  };
  // console.log("form", form);
  return (
    <form
      className="w-full md:w-[70%] mx-auto flex flex-col gap-y-8 md:p-0 p-4"
      onSubmit={handleSubmit}
    >
      <input
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        type="text"
        className={styles.input}
        placeholder="Adınız Soyadınız"
      />
      <input
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        type="email"
        className={styles.input}
        placeholder="E-posta Adresiniz"
      />
      <textarea
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={styles.input}
        placeholder="Mesajınız"
        rows="5"
        cols="50"
      ></textarea>
      {message.isOpen && (
        <p className={`font-bold text-xl ${message.textClass} `}>
          {message.message}
        </p>
      )}
      <button
        type="submit"
        className="w-full bg-primary text-white hover:bg-white hover:text-primary hover:border-[1px] hover:border-primary font-bold py-2 px-4 rounded-lg"
      >
        Gönder
      </button>
    </form>
  );
}
