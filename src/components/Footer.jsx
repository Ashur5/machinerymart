function Footer() {
  return (
    <footer className="bg-[#f3edfb] text-black pt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#6a65ba]">
            Namo Machinery Mart
          </h3>
          <p className="text-black text-sm">
            Your one-stop shop for premium Sewing Machines, Embroidery machines, Stabilizers, UPS
            and Finishing equipments.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com/share/17Vtek3pwm/"
              target="_blank"
              className="hover:text-yellow-400 text-[#6a65ba]"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/sewingsolutionsystems?igsh=NThqdzcwMWIwcmht"
              target="_blank"
              className="hover:text-yellow-400 text-[#6a65ba]"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@sss-namo"
              target="_blank"
              className="hover:text-yellow-400 text-[#6a65ba]"
            >
              Youtube
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-[#6a65ba]">Quick Links</h4>
          <ul className="text-black space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-600">
                Home
              </a>
            </li>
            {/* <li>
              <a href="/products" className="hover:text-yellow-400">
                Products
              </a>
            </li> */}
            <li>
              <a href="/about" className="hover:text-yellow-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-600">
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/bookingform"
                className="hover:text-black bg-orange-400  text-white p-2 rounded-full "
              >
                Order Booking Form
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-[#6a65ba] ">Contact Us</h4>
          <p className="text-black text-sm">
            📍 Address: 38/64, Bungalow Rd, Murungapalayam, Odakkadu, Tiruppur,
            Tamil Nadu 641602
          </p>
          <p className="text-black text-sm">📞 +91 9677692277</p>
          <p className="text-black text-sm">📧 namo.machinery.mart@gmail.com</p>
        </div>

        {/* Map */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-[#6a65ba]">Our Location</h4>
          <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
<a
  href="https://www.google.com/maps?q=Sewing+Solution+System,+38/64,+Bungalow+Rd,+Murungapalayam,+Odakkadu,+Tiruppur,+Tamil+Nadu+641602"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full h-[400px] rounded-lg overflow-hidden shadow-md"
>
  <iframe
    title="Sewing Solution Systems"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3916.8996132990746!2d77.334801!3d11.1134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA2JzQ4LjIiTiA3N8KwMjAnMDUuMyJF!5e0!3m2!1sen!2sin!4v1696934471100!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0, pointerEvents: "none" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-black text-sm">
        By Priyansh Dubey || © {new Date().getFullYear()} Namo Machinery Mart. All
        Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
