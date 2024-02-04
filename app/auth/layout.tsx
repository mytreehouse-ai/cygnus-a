import Image from "next/image";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-2">
      <div>{children}</div>
      <div>
        <div className="relative h-full w-full">
          <Image
            className="object-cover"
            src="/side_auth_design.svg"
            alt="Side image for auth"
            fill
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
