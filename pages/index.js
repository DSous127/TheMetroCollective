import Head from "next/head";
import Home from "../components/Home";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>The Metro Collective</title>
        <meta name="description" content="Real Estate Lending Consultants" />
      </Head>
      <Home />
    </>
  );
}
