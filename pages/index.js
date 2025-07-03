import Head from "next/head";
import Home from "../components/Home";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>The Metro Collective</title>
        <meta name="description" content="Private Lending Consulting & Capital Matching" />
      </Head>
      <Home />
    </>
  );
}
