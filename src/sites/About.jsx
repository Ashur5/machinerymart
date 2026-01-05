import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

import ULlogo from "../assets/ULOGO.png";
import Atandralogo from "../assets/Atandralogo.png";
import Jacklogo001 from "../assets/Jacklogo001.png";
import Elprologo from "../assets/Elprologo.png";

import Execution from "../assets/Execution.png";
import Quotation from "../assets/Quotation.png";
import Consultation from "../assets/Consultation.png";

const brands = [
  { src: Jacklogo001, alt: "Jack Logo" },
  { src: ULlogo, alt: "UME India Logo" },
  { src: Atandralogo, alt: "Atandra Logo" },
  { src: Elprologo, alt: "Elpro Logo" },
];

const processSteps = [
  {
    icon: Consultation,
    title: "Consultation",
    description:
      "Connect with us to discuss your specific requirements in detail.",
    bg: "bg-blue-50",
  },
  {
    icon: Quotation,
    title: "Quotation",
    description:
      "Receive an immediate and transparent quote tailored to your needs.",
    bg: "bg-yellow-50",
  },
  {
    icon: Execution,
    title: "Execution",
    description:
      "Schedule prompt delivery followed by professional installation and setup.",
    bg: "bg-green-50",
  },
];

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />

      {/* Story Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#6a65ba] text-center">
          Welcome to Namo Machinery Mart
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed text-justify space-y-4">
          <b>Namo Machinery Mart</b> a brand of Sewing Solution System is a
          leading supplier of Jack sewing machines, UME embroidery machines,
          garment finishing equipment, and Stabilizers and UPS in India. With a strong
          focus on quality and customer satisfaction, we provide the tools and
          support that garment manufacturers and tailoring professionals need to
          succeed.
          <br />
          <br />
          Jack Sewing Machines - Jack industrial sewing machine company is an
          undisputed world leader in the sewing category and equipment. Jack is
          a world-renowned leader in industrial sewing machinery, offering a
          wide lineup of lockstitch, overlock, heavy-duty, zigzag, and specialty
          machines. All our products are combined with high precision,
          reliability, smart automation, and energy efficiency.
          <br />
          <br />
          UME Embroidery Machines - Empowering women across India, especially in
          the South, UME Embroidery Machines have become the preferred choice
          for those turning creativity into opportunity. Ideal for home-based
          businesses, these machines enable women to design and stitch trendy,
          customized blouses for family, friends, and customers — transforming
          passion into profit. With UME, every home can become a hub of women
          entrepreneurship and innovation.
          <br />
          <br />
          Stabilizers and UPS - Comprehensive power solutions designed to
          measure, protect, and conserve energy with cutting-edge technology.
          From factory floors to control rooms, our strong team and nationwide
          service network ensure our customers aren't just powered—but
          empowered. We're not just about machines. We're about making power
          work for people. From Analog beginnings to digital precision, our
          stabilizers and UPS solutions have evolved to meet the changing needs
          of modern industry, ensuring consistent power and equipment
          protection.
          <br />
          <br />
          Finishing Equipment – Our wide range of finishing equipments starting
          from Portable steam boiler, stain removing machines and Vaccum ironing
          tables are highly recognized in the garment industry for sturdiness,
          robust construction, user friendly interface, rust resistant, high
          durability, accurate dimensions, optimum performance and low
          maintenance. We are considered as an unbeatable company in this domain
          of ELPRO owing to manufactured goods quality and outstanding
          reputation.
        </p>
      </section>

      {/* Brands Section */}
      <div className="md:h-70">
        <section className="py-9 bg-white">
          <h2 className="text-3xl font-bold text-[#6a65ba] text-center mb-10">
            Our Trusted Brands
          </h2>

          <div className="px-2">
            {/* Mobile: horizontal scroll | Desktop: grid layout */}
            <div className="flex space-x-6 overflow-x-auto scrollbar-hide md:hidden">
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-64 p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-2 transition"
                >
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="w-40 h-12 mx-auto"
                  />
                </div>
              ))}
            </div>

            {/* Desktop grid layout */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-2 transition"
                >
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="w-40 h-12 mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Process Section */}
      <div className="md:h-96 overflow-hidden mb-10">
        <section className="py-16  bg-gray-50">
          <h2 className="text-2xl text-center font-semibold mb-7">
            Our 3 Step Process
          </h2>
          <div className="max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`${step.bg} p-6 rounded-lg shadow hover:shadow-lg transition text-center`}
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={step.icon}
                    alt={`${step.title} Icon`}
                    className="h-9 w-9 mr-3"
                  />
                  <h3 className="text-xl font-bold">{`${idx + 1}. ${
                    step.title
                  }`}</h3>
                </div>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <div className="md:h-45 h-100 overflow-hidden mb-10 ">
        <section className="bg-yellow-300 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center px-4">
            <div>
              <h2 className="text-5xl font-bold text-gray-800">10K+</h2>
              <p className="mt-2 text-lg text-gray-700">Happy Customers</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-gray-800">500+</h2>
              <p className="mt-2 text-lg text-gray-700">Products Sold</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-gray-800">15+</h2>
              <p className="mt-2 text-lg text-gray-700">Years of Experience</p>
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <div className="md:h-79">
        <section className="py-16 bg-gray-100 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#6a65ba]">
            Join the Namo Machinery Mart Family
          </h2>
          <p className="text-black-700 mb-6 text-2xl">Committed to Quality</p>
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block bg-[#f3edfb] border-2 hover:bg-yellow-500 hover:border-amber-400 text-black px-6 py-3 rounded-lg font-medium transition"
          >
            🛒 Explore Our Products
          </Link>
        </section>
      </div>
    </div>
  );
}

export default About;
