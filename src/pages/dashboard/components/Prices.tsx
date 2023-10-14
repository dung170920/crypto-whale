import { chart } from "@/assets";
import { Dropdown, IconButton } from "@/components";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Prices = () => {
  const priceList = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968260.png",
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968260.png",
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968260.png",
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968260.png",
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968260.png",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex items-center justify-between px-5">
        <h4 className="font-semibold">Market Prices</h4>
        <div className="flex gap-2">
          <IconButton icon="solid-angle-left" color="secondary" className="prev " />
          <IconButton icon="solid-angle-right" color="secondary" className="next" />
        </div>
      </div>
      <div className="min-h-[152px]">
        <Swiper
          className="!absolute"
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          spaceBetween={18}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {priceList.map((e) => (
            <SwiperSlide className="!w-[287px] h-[175px] px-6 py-5 space-y-3">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <div className="rounded-full p-[6px] border border-orange">
                    <img src={e.img} alt="" className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">{e.name}</span>
                    <span className="text-sm text-secondary">{e.symbol}</span>
                  </div>
                </div>
                <Dropdown
                  size="sm"
                  items={[
                    {
                      name: "24h",
                      value: "24",
                    },
                  ]}
                  handleClick={() => {}}
                  className="bg-transparent w-fit"
                >
                  24h
                </Dropdown>
              </div>
              <div className="h-full">
                <img src={chart} alt="" className="w-full h-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
