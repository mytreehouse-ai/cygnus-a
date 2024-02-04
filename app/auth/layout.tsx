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
            fill={true}
            priority={true}
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
