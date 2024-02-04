import Image from "next/image";
import { ReactNode } from "react";

import { imageKitLoader } from "@/lib/utils";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-2">
      <div>{children}</div>
      <div>
        <div className="relative h-full w-full">
          <Image
            className="object-cover"
            src="public/side_auth_design.svg"
            loader={imageKitLoader}
            alt="Side image for auth"
            fill={true}
            priority={true}
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
