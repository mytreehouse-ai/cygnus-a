import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <main className="h-full flex-1">{children}</main>;
};

export default Layout;
