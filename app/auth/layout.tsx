import { ReactNode } from "react";

import { ImageKitLoader } from "@/components/imagekit-loader";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-2">
      <div>{children}</div>
      <div>
        <div className="relative h-full w-full">
          <ImageKitLoader
            responsive={true}
            className="object-cover"
            src="public/side_auth_design.svg"
            alt="Side image for auth"
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
