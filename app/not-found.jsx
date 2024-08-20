import React from "react";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto py-8 pt-28 px-4">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-red-600">
        Page Not Found
      </h1>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <p className="text-lg text-gray-700">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
      </div>

      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          What can you do?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Check the URL for typos and try again.</li>
          <li>Return to the <a href="/" className="text-blue-600 underline">Home Page</a>.</li>
          <li>Use the navigation menu to find what you're looking for.</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h2>
        <p>
          If you believe this is a mistake, please feel free to{" "}
          <a href="mailto:patelabhay550@gmail.com" className="text-blue-600 underline">
            contact us
          </a>.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
