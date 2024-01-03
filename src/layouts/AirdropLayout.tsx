import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HeaderAirdrop from "./HeaderAirdrop";

export default function AirdropLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <HeaderAirdrop />
      <Outlet />
      {children}
      <Footer />
    </>
  );
}
