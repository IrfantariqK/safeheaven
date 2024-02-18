// pages/appointment.js
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import { FaArrowRight, FaPhone } from "react-icons/fa";

export default function Appointment() {
  return (
    <div>
      <Head>
        <title>Make an Appointment - Consultic Advisor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="container mx-auto mt-8 flex justify-center items-center py-9">
          <div className="w-1/2 pr-8">
            <h1 className="text-4xl font-bold mb-4">
              Our Financial Advisors are here to help
            </h1>
            <p className="text-lg mb-4">
              We offer comprehensive approaches to financial advice.
            </p>
            <div className="flex items-center mb-4">
              <button className="bg-purple-500 text-white px-4 py-2 flex items-center">
                <span>Make an Appointment</span>
                <FaArrowRight className="ml-2" />
              </button>
              <div className="ml-4 flex items-center text-purple-600">
                <div className="bg-white rounded-full p-2">
                  <FaPhone className="text-purple-600" />
                </div>
                <div className="ml-2">
                  <p>Hotline 24/7</p>
                  <p className="font-bold">+49 30 9233255</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="/appointment_image.png"
              alt="Appointment"
              className="w-full"
            />
          </div>
        </main>
      </Layout>
    </div>
  );
}
