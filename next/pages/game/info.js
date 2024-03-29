import { Layout1 } from "@/components/Layout1";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";

export default function Info() {

  return (
    <>
      <Layout1>
        <div className="center">
          <p className="title">About Project</p>
        </div>
      </Layout1>
      <Head>
        <title>作品簡介</title>
      </Head>
    </>
  );
}
