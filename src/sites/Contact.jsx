import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9jz2x6m", // Replace with your EmailJS service ID
        "template_2hn7ht3", // Template ID
        form,
        "Y-mzSqOiT9N77uzG2" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (err) => {
          setLoading(false);
          console.error(err);
          alert("Failed to send message");
        }
      );
  };

  const handleWhatsApp = () => {
    const whatsappNumber = "919677692277"; // Your WhatsApp number

    // Use default text if form fields are empty
    const name = form.name || "Your Name";
    const email = form.email || "your.email@example.com";
    const message =
      form.message || "Hello! I would like to know more about your products.";

    const text = `Hello! My name is ${name}. My email is ${email}. Message: ${message}`;
    const encodedText = encodeURIComponent(text);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedText}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col items-center min-h-[100vh] bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-12">
      {/* Contact Form Section */}
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 mb-10">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none h-32 resize-none"
          />
          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={loading}
              className={`flex-1 py-3 rounded-lg text-lg font-medium transition duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex-1 py-3 rounded-lg text-lg font-medium bg-green-500 text-white hover:bg-green-600 transition"
            >
              WhatsApp
            </button>
          </div>
        </form>
      </div>

      {/* Brand Info Section */}
      <div className="w-full max-w-4xl text-center space-y-8">
        <h3 className="text-2xl font-bold text-gray-800">
          Why Choose <span className="text-blue-600">Our Brand?</span>
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          For over a decade, we've been empowering creators and businesses
          worldwide with professional embroidery, sewing, stabilizers, UPS and
          finishing equipment solutions. From passionate beginners to
          established enterprises, our machines are trusted for their
          innovation, durability, and unmatched customer support.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">
              🌍 Global Reach
            </h4>
            <p className="text-gray-600 text-sm">
              Serving thousands of happy customers across multiple countries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">
              ⚡ Premium Quality
            </h4>
            <p className="text-gray-600 text-sm">
              High-quality machines built to last and deliver precision.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">
              💬 24/7 Support
            </h4>
            <p className="text-gray-600 text-sm">
              Our dedicated support team is always here to help you succeed.
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-10 text-gray-700 space-y-2">
          <p className="font-medium">
            📍 Address: 38/64, Bungalow Rd, Murungapalayam, Odakkadu, Tiruppur,
            Tamil Nadu 641602
          </p>
          <p className="font-medium">📞 Phone: 9677692277</p>
          <p className="font-medium">📧 Email: namo.machinery.mart@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
