import Head from "next/head";

export default function PracticeAreas() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Head>
        <title>Practice Areas | My Website</title>
      </Head>

      <h1 className="text-3xl font-bold mb-8 text-center">Practice Areas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        <div className="p-4 border rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Financial Planning</h3>
          <p className="text-gray-600">
            We offer comprehensive financial planning services to help you
            achieve your financial goals.
          </p>
        </div>
        <div className="p-4 border rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Investment Management</h3>
          <p className="text-gray-600">
            We provide personalized investment management services to grow your
            wealth over time.
          </p>
        </div>
        <div className="p-4 border rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Retirement Planning</h3>
          <p className="text-gray-600">
            We help you plan for a secure and comfortable retirement with our
            retirement planning services.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {/* Four boxes below */}
        <div className="p-4 border rounded-md shadow-md">
          {/* Content for the first box */}
        </div>
        <div className="p-4 border rounded-md shadow-md">
          {/* Content for the second box */}
        </div>
        <div className="p-4 border rounded-md shadow-md">
          {/* Content for the third box */}
        </div>
        <div className="p-4 border rounded-md shadow-md">
          {/* Content for the fourth box */}
        </div>
      </div>
    </div>
  );
}
