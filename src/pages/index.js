import Head from "next/head";
import Footer from "../components/Footer";
import Appointment from "./appointment";
import Clients from "./Clients";
import About from "./About";
import PracticeAreas from "@/PracticeAreaBox/practiceareabox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Consultic Advisor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appointment />
      <Clients />
      <About />
      <PracticeAreas />
      <Footer />
    </div>
  );
}
