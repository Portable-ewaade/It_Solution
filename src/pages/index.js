import Banner from "@/components/home/Banner";
import Header from "@/components/common/Header";
// import Navbar from "@/components/common/Navbar";
import Head from "next/head";
import AboutUs from "@/components/home/AboutUs";
import Rates from "@/components/home/Rates";

export default function Home() {
  return (
    <>
      <Head>
        <title>IT_SOLUTION_COMPANY</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <AboutUs />
      <Rates />
      
    </>
  );
}
