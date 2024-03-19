import { ReactNode } from "react";
import Navbar from "@/components/global/nav-bar";
import Footer from "@/components/global/footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
