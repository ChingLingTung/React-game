import Navbar from "@/components/Navbar";
import Head from "next/head";

export function Layout1({ children }) {
  return (
    <>
      <Head>
        <title>作品</title>
      </Head>
      <div className="container">
        <Navbar />
      </div>
      <div className="container center">{children}</div>
    </>
  );
}
