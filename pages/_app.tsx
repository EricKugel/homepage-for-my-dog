import Layout from "../components/Layout";
import type { AppProps } from "next/app";

export interface CustomPageProps {}

const MyApp = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
