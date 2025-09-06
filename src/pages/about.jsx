export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6"
      >
        <h1 className="text-5xl font-bold mb-4 text-blue-400">
          Welcome to PentestPro
        </h1>
        <p className="text-lg max-w-2xl text-center text-gray-300">
          Your trusted partner in cybersecurity. We provide top-notch
          penetration testing services to protect your business from digital
          threats.
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="bg-gray-800 text-gray-100 py-16 px-6 md:px-20"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-blue-400">
              About Our Services
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              At <span className="font-semibold text-white">PentestPro</span>, we
              specialize in <span className="text-blue-300">penetration testing</span>{" "}
              and cybersecurity assessments. Our mission is to identify
              vulnerabilities before hackers do, ensuring your applications,
              networks, and infrastructure remain secure.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                Web & Mobile Application Testing
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                Network & Infrastructure Security
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                Cloud Security Assessments
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                Vulnerability Management & Reporting
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-2xl shadow-lg transition">
              Learn More
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Penetration Testing"
              className="w-80 drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

     
    </div>
  );
}
