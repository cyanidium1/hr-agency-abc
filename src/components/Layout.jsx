import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import Head from "next/head";

export const metadata = {
  title: "ABC Group",
  description: "Smart HR Agency",
};

export default function Layout({ children }) {
  return (
    <div className="dark:bg-slate-950">
      <Head>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" /> */}
        <title>Smart HR Agency</title>
      </Head>
      <Loader />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
