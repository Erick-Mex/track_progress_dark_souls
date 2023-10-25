import Image, { StaticImageData } from "next/image";
import style from "./page.module.css";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

import darksouls_1 from "../public/images/ds1.webp";
import darksouls_2 from "../public/images/ds2.webp";
import darksouls_3 from "../public/images/ds3.webp";

type ImageType = {
  image_src: StaticImageData
}

function AccessButton({image_src}: ImageType) {
  return (
    <div className="relative group cursor-pointer">
      <Image
        className="group-hover:blur-[1.5px]"
        src={image_src}
        width={350}
        height={350}
        alt="picture of the dark souls 2 cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-24 h-24 relative">
          <div className="absolute w-full h-full -left-2 -top-2 rounded-full border-4 border-solid border-white transition-opacity duration-300 ease-out delay-100 opacity-0 group-hover:opacity-100 group-hover:animate-ping group-hover:animation-delay-500" />
          <div className="absolute w-full h-full -left-2 -top-2 rounded-full border-4 border-solid border-white transition-opacity duration-300 ease-out delay-100 opacity-0 group-hover:opacity-100" />
          <ArrowRightIcon
            className="absolute w-20 h-20 transition-opacity duration-300 ease-out delay-100 opacity-0 group-hover:opacity-100 group-hover:animate-ping group-hover:animation-delay-500"
            stroke="white"
            strokeWidth={1.5}
          />
          <ArrowRightIcon
            className="relative w-20 h-20 transition-opacity duration-300 ease-out delay-100 opacity-0 group-hover:opacity-100"
            stroke="white"
            strokeWidth={1.5}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <h1
        className={`${style.header_menu} text-center text-2xl md:text-4xl lg:text-6xl m-4`}
      >
        DARK SOULS BOSSES LIST
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8 last:mb-4">
        <AccessButton image_src={darksouls_1} />
        <AccessButton image_src={darksouls_2} />
        <AccessButton image_src={darksouls_3} />
      </div>
    </main>
  );
}
