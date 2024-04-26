"use client";

import { ReactNode, useEffect, useState } from "react";
import "./style.scss";

const Card = ({
  children,
  title,
  bgColor,
  bgImg,
  largeShadow,
  heightAuto,
  padding,
}) => {
  const [optionProps] = useState(() => {
    return {
      title: title || "",
      bgColor: bgColor || "bg-transparent",
      bgImg: bgImg || "",
      largeShadow: largeShadow || "",
      heightAuto: heightAuto ? "h-fit" : "min-h-[158px]",
      padding: padding || "p-3",
    };
  });

  const [cardOptions, setCardOptions] = useState();

  useEffect(() => {
    setCardOptions(Object.values(optionProps).join(" "));
  }, [optionProps]);

  return (
    <div
      className={`container-card relative rounded-2xl w-full h-full bg-red-500 ${cardOptions}`}
    >
      {children}
      {bgImg && (
        <div
          className="flex flex-col justify-between px-8 py-6 w-full h-full rounded-tl-2xl rounded-br-2xl top-0 left-0 overflow-hidden border-red-500 border-2 relative"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="z-[1] container-gradient absolute inset-0 bg-gradient-to-b from-purple-300 to-purple-500 opacity-50 hover:opacity-0" />

          <div className="z-[2] text-white text-[1.5rem]">
            <span>{title}</span>
          </div>

          <div className="z-[2] text-black text-center text-[1rem] bg-[#FFD700] w-[100px] rounded-tl-lg rounded-br-lg cursor-pointer">
            Read More
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
