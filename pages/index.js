import Head from "next/head";
import Home from "../components/Home";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>The Metro Collective</title>
        <meta name="description" content="Boutique Real Estate Capital Advisory | Metro Mortgage Group" />
      </Head>
      <Home />
    </>
  );
}
