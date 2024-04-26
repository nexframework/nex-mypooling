"use client";

import { useEffect, useState } from "react";
import Card from "../Tailwind/Card";
import useAxios from "../../hooks/useAxios";
import { utilsFormatNewsTitle } from "../../utils";

const News = () => {
  const [news, setNews] = useState([]);
  const { get, post } = useAxios();

  const handleGetNews = async () => {
    const res = await get(process.env.NEXT_PUBLIC_API_URL);
    res?.data?.length > 0 && setNews(res.data);
  };

  useEffect(() => {
    handleGetNews();
  }, []);

  if (news?.length < 1) return <></>;

  return (
    <div className="mt-[50px]">
      <div className="flex flex-wrap justify-between w-full">
        {news.map((_news, i) => (
          <div
            key={i}
            className="w-full sm:w-2/3 md:w-2/4 lg:w-1/3 h-[450px] px-4 mb-4"
          >
            <div className="w-full h-full ">
              <Card
                title={utilsFormatNewsTitle(_news.slug)}
                bgImg="https://onecms-res.cloudinary.com/image/upload/s--2F2JlzQK--/c_fill,g_auto,h_468,w_830/f_auto,q_auto/v1/mediacorp/8days/image/2022/09/22/00a_f1.jpg?itok=ITNRLHIA"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
