import Banner from "./Banner";
import Head from "next/head";
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div id="pageWrapper">
      <Head>
        <title>Eric Kugel</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Banner />
      <div id="contentPane">
        <main>{children}</main>
      </div>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Layout;
