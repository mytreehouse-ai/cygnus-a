"use client";

import Image from "next/image";

function Galery() {
  return (
    <div className="grid grid-rows-1 gap-4 sm:inline-block sm:grid-rows-none sm:gap-0 sm:space-y-4">
      <div className="relative h-[20rem]">
        <Image
          src="/dummy-img.png"
          alt="Property image."
          priority={true}
          fill={true}
          sizes="(max-width: 768px) 100vw, 700px"
          className="rounded-lg"
        />
      </div>
      <div className="grid h-[10rem] grid-cols-2 gap-4 sm:h-[12rem]">
        <div className="relative">
          <Image
            src="/dummy-img.png"
            alt="Property image."
            priority={true}
            fill={true}
            sizes="(max-width: 768px) 100vw, 700px"
            className="rounded-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/dummy-img.png"
            alt="Property image."
            priority={true}
            fill={true}
            sizes="(max-width: 768px) 100vw, 700px"
            className="rounded-lg"
          />
          <div className="absolute flex h-full w-full items-center justify-center rounded-lg bg-black/50 text-sm text-white">
            Show all 6 Photos
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galery;
