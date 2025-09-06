// Contact.jsx
export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-700 text-white px-6"
    >
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl text-center">
        Ready to strengthen your digital defenses? Reach out to our experts today
        and let’s secure your systems together.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-2xl shadow-lg transition">
        Get in Touch
      </button>
    </section>
  );
}
