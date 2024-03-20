import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <main className="h-screen">{children}</main>;
};

export default Layout;
