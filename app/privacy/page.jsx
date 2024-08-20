import React from "react";
export const metadata = {
  title: "Privacy Policy | Examgain",
  description: "Welcome to Examgain. We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our services.",
};
const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-8 pt-28 px-4">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-700">
        Privacy Policy
      </h1>

      {/* Verified Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-3">
        <p className="text-sm text-gray-500">Verified by Examgain</p>
        <p className="mt-2 text-base">This privacy policy is verified!</p>
      </div>

      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8">
        <p className="text-lg">
          <span className="font-bold text-zinc-700">Effective Date:</span>{" "}
          August 20, 2024
        </p>
        <p className="mt-4">
          Welcome to Examgain. We are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, disclose, and protect
          your information when you use our services.
        </p>
        {/* Add the full privacy policy content here */}
        <p className="mt-4">
          Please read this privacy policy carefully to understand our practices
          regarding your information and how we will treat it.
        </p>
      </div>

      {/* Additional Sections */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">
          Information We Collect
        </h2>
        <p>
          We may collect personal information such as your name, email address,
          and other details when you use our platform. Additionally, we collect
          usage data and cookies to enhance your experience.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">
          How We Use Your Information
        </h2>
        <p>
          Your information is used to provide, improve, and personalize our
          services, communicate with you, and ensure the security of our
          platform.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">
          Data Security
        </h2>
        <p>
          We implement industry-standard security measures to protect your data,
          but no system is entirely secure. Please take precautions when using
          our services.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us
          at patelabhay550@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
