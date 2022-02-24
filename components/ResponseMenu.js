import React from "react";
import { Transition } from "@tailwindui/react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
export default function ResponseMenu(props) {
  const [openedTab, setOpenedTab] = React.useState(0);
  const datas = props.data;
  return (
    <>
      {datas.map((x, i) => (
        <div className={"grid" + props.gap} key={i}>
          <div className="flex justify-between" onClick={() => setOpenedTab(i)}>
            <span
              className={
                i === openedTab
                  ? "font-normal text-x text-primary"
                  : "font-normal text-x "
              }
            >
              {x.title}
            </span>
            <div className="bg-primary rounded-lg flex items-center px-2">
              {i === openedTab ? <BsChevronDown /> : <BsChevronUp />}
            </div>
          </div>
          <Transition
            show={i === openedTab}
            className=""
            enter="transition duration-1000 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {i === openedTab &&
              x.rows.map((r, j) => (
                <a href={r.titleUrl} key={j} rel="noreferrer">
                  <p className="text-sm	hover:text-orange-500 ml-2">{r.title}</p>
                </a>
              ))}
          </Transition>
        </div>
      ))}
    </>
  );
}
