import { useState } from "react";

function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState(false);

  const whatsappLink = `https://wa.me/919677692277?text=Hi! I'm interested in ${product.name}`;

  return (
    <div
      className="relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {/* Product Image */}
      <img
        src={product.img}
        alt={product.name}
        className="w-full object-cover max-h-[400px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px]"
      />

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
        <p className="text-green-500 font-bold mt-2">{product.price}</p>
      </div>

      {/* Hover Overlay FULL CARD */}
      {showDetails && (
        <div className="absolute inset-0 bg-[#f3edfb]/95 backdrop-blur-md flex flex-col justify-between text-gray-800 p-4 transition-all duration-300 ease-in-out">
          <div className="overflow-y-auto pr-2 mb-4">
            <h4 className="text-lg font-semibold mb-2 text-blue-800 border-b border-blue-200 pb-1">
              Specifications
            </h4>
            <ul className="text-sm space-y-1">
              {product.details?.map((detail, index) => (
                <li key={index} className="flex justify-between">
                  <span className="font-medium text-gray-700">{detail.label}:</span>
                  <span className="text-gray-600 text-right ml-2">{detail.value}</span> 
                </li>
              ))}
            </ul>
          </div>
          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-200 shadow-md">
              Chat on WhatsApp
            </button>
          </a>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
