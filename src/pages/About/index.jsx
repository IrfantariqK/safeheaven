import Layout from "@/components/Layout/Layout";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - Consultic Advisor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto mt-8 flex flex-col md:flex-row items-center">
        {/* Left side: Image */}
        <div className="md:w-1/2">
          <img src="/about_image.png" alt="About Us" className="w-full" />
        </div>
        {/* Right side: Text */}
        <div className="md:w-1/1 md:pl-8">
          <div className="border-t-2 border-purple-500 mb-4 mt-2 pt-2 text-purple-700">
            <h1 className="text-2xl font-bold">About Us</h1>
          </div>
          <p className="text-3xl mb-4">
            Feel confident in your financial future with Consultic.
          </p>
          <p className=" mb-4">
            We focus on people from our first meeting with you to the ongoing
            relationship.
          </p>
          <button className="bg-purple-500 text-white px-4 py-2 flex items-center">
            <span>View Our Work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
};

export default About;
