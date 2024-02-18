import clients from "@/components/Clients_Model";
import Head from "next/head";



const Clients = () => {
  return (
    <div>
      <Head>
        <title>Our Clients & Partners - Consultic Advisor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" mx-auto mt-8 flex flex-col items-center py-10 p-6 bg-white">
        <h1 className="text-4xl font-bold mb-8">Our Clients & Partners</h1>
        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <img src={client.image} alt={client.name} className="mx-auto" />
              <p className="mt-2">{client.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Clients;
