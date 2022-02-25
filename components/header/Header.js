import React from "react";
import Link from "next/link";
import { data } from "../Data";
import { MdMenuOpen } from "react-icons/md";
import ResponseMenu from "../ResponseMenu";
import { calismaModelleriAltLink, hakkimizdaAltLink, navLink } from "../Data";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import IletisimForm from "../IletisimForm";
export default function Header({ show, position }) {
  let mainClassName =
    "w-full md:px-6 px-4 top-0 z-50 flex flex-row items-center justify-between";
  if (!show) {
    mainClassName += " bg-[#383838]";
  }
  if (position) {
    mainClassName += " absolute";
  }
  const [showMenu, setShowMenu] = React.useState({
    first: false,
    second: false,
  });
  const [showResponsiveMenu, setShowResponsiveMenu] = React.useState(false);
  const router = useRouter();
  const page = router.pathname === "/";
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className={mainClassName}>
      <Link href="/">
        <a>
          <img
            src="https://www.kgteknoloji.com/images/logo.png"
            alt="logo"
            className="md:w-[375px] md:h-[75px] w-[135px] h-12 object-contain my-2"
          />
        </a>
      </Link>
      <div className="hidden md:flex flex-row items-center gap-x-2">
        {navLink.map((item, index) => (
          <div
            className="relative"
            key={index}
            onClick={() =>
              index === 1
                ? setShowMenu({ first: !showMenu.first, second: false })
                : index === 2
                ? setShowMenu({ first: false, second: !showMenu.second })
                : null
            }
          >
            {index === 1 || index === 2 ? (
              <p
                className={
                  index === 0 && page
                    ? "text-primary  cursor-pointer hidden text-base font-normal px-4  border-r-[1px] border-white "
                    : "text-white cursor-pointer hover:text-orange-500 md:block hidden text-base font-normal px-4  border-r-[1px] border-white "
                }
              >
                {item.name}
              </p>
            ) : (
              <Link href={item.url}>
                <a
                  className={
                    index === 0 && page
                      ? "text-primary cursor-pointer md:block hidden text-base font-normal px-4  border-r-[1px] border-white "
                      : index === 4 && !page
                      ? "text-white cursor-pointer hover:text-orange-500 hidden text-base font-normal px-4  border-r-[1px] border-white "
                      : "text-white cursor-pointer hover:text-orange-500 md:block hidden text-base font-normal px-4  border-r-[1px] border-white "
                  }
                >
                  {item.name}
                </a>
              </Link>
            )}

            {index === 1 && showMenu.first && (
              <div className="text-blue-900 p-2 absolute -left-2 top-8 bg-white gap-2 rounded-xl grid grid-cols-2 w-[400px]">
                {hakkimizdaAltLink.map((item, index) => (
                  <Link href={`${item.url}`} key={index}>
                    <a className=" hover:text-orange-500 font-bold text-base truncate px-4 ">
                      {"> " + item.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
            {index === 2 && showMenu.second && (
              <div className="text-blue-900 p-2 absolute -left-2 top-8 bg-white gap-2 rounded-xl grid grid-cols-1 w-[400px]">
                {calismaModelleriAltLink.map((item, index) => (
                  <Link href={`${item.url}`} key={index}>
                    <a className=" hover:text-orange-500 font-bold text-base truncate px-4 ">
                      {"> " + item.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <button
          onClick={() => setShowModal(!showModal)}
          className="text-primary border-[1px] border-primary rounded-xl font-bold bg-white hover:border-white hover:bg-primary hover:text-white px-4 py-2"
        >
          Daha Fazlası
        </button>
      </div>
      {showModal && (
        <div className="fixed h-[100vh] w-full flex items-center justify-center left-0 top-0 bg-[#000000cc] ">
          <div className="w-[30%] h-[60%] mx-auto bg-white opacity-100 flex flex-col gap-y-8 rounded-xl bg-modal-bg bg-no-repeat bg-right bg-cover">
            <AiOutlineClose
              onClick={() => setShowModal(!showModal)}
              className="mr-4 mt-4 ml-auto text-primary-300 hover:text-red-600 hover:scale-125 cursor-pointer"
              size={35}
            />
            <p className="font-bold text-xl text-center">Bize Ulaşın</p>
            <IletisimForm />
          </div>
        </div>
      )}
      <div
        onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}
        className="md:hidden text-white block"
      >
        <MdMenuOpen size={30} />
      </div>
      {showResponsiveMenu && (
        <div className="fixed inset-0 w-full flex flex-row h-[100vh] text-white z-50">
          <div
            className="bg-black bg-opacity-30 w-[15%] h-[100vh]"
            onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}
          />
          <div className="w-[85%] h-[100vh] bg-black">
            <Link href="/">
              <a>
                <img
                  src="https://www.kgteknoloji.com/images/logo.png"
                  alt="logo"
                  className="md:w-[375px] md:h-[75px] w-[135px] h-12 object-contain  mx-auto my-2"
                />
              </a>
            </Link>
            <ResponseMenu data={data.content} gap=" p-4" />
          </div>
        </div>
      )}
    </div>
  );
}
