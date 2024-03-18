"use client";

import Image from "next/image";

function Galery() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="relative h-[30rem]">
        <Image
          className="rounded-lg object-cover"
          src="/dummy-img.png"
          alt="Property image."
          priority={true}
          fill={true}
          sizes="(max-width: 768px) 100vw, 700px"
        />
      </div>
      <div className="grid h-[15rem] gap-4 lg:h-[30rem]">
        <div className="relative hidden lg:block">
          <Image
            className="rounded-lg"
            src="/dummy-img.png"
            alt="Property image."
            priority={true}
            fill={true}
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Image
              className="rounded-lg"
              src="/dummy-img.png"
              alt="Property image."
              priority={true}
              fill={true}
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
          <div className="relative">
            <Image
              className="rounded-lg"
              src="/dummy-img.png"
              alt="Property image."
              priority={true}
              fill={true}
              sizes="(max-width: 768px) 100vw, 700px"
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
