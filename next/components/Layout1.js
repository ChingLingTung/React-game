import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from '@/components/Footer';

export function Layout1({ children }) {
  return (
    <>
      <Head>
        <title>作品</title>
      </Head>
      <Navbar />
      <div className="container min_height">{children}</div>
      <Footer />
    </>
  );
}
