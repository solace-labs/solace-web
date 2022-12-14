import type { NextPage } from "next";
import Head from "next/head";
import RecoverWallet from "../components/RecoverWallet";

const Recover: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recover a wallet</title>
        <meta name="description" content="Solace Guardian Dashboard" />
        <link rel="icon" href="/solace-icon.png" />
      </Head>
      <div className="flex items-start justify-center h-full md:items-center">
        <RecoverWallet />
      </div>
    </>
  );
};

export default Recover;
