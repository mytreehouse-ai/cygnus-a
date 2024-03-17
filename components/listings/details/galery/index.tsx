"use client";

import Image from "next/image";

function Galery() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:col-span-2 xl:grid-cols-2">
      <div className="relative h-[20rem] xl:h-full">
        <Image
          src="/dummy-img.png"
          alt="Property image."
          priority={true}
          fill={true}
          sizes="(max-width: 768px) 100vw, 700px"
          className="rounded-lg"
        />
      </div>
      <div className="xl:grid xl:gap-4">
        <div className="relative hidden xl:inline-block">
          <Image
            src="/dummy-img.png"
            alt="Property image."
            priority={true}
            fill={true}
            sizes="(max-width: 768px) 100vw, 700px"
            className="rounded-lg"
          />
        </div>
        <div className="grid h-[10rem] grid-cols-2 gap-4 xl:h-full">
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
    </div>
  );
}

export default Galery;
