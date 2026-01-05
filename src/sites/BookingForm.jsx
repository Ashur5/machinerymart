import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    company: "",
    contactNumber: "",
    email: "",
    machineryType: "",
    modelSpec: "",
    preferredDate: "",
    preferredTime: "",
    deliveryAddress: "",
    budget: "",
    additionalRemarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Order Booking Details:
Customer Name: ${formData.customerName}
Company: ${formData.company}
Contact Number: ${formData.contactNumber}
Email: ${formData.email}

Machinery/Equipment Type: ${formData.machineryType}
Model/Specification: ${formData.modelSpec}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Delivery Address: ${formData.deliveryAddress}
Budget: ${formData.budget}
Additional Remarks: ${formData.additionalRemarks}

Payment: 100% advance payment
Delivery: Same Day delivery
    `;

    const whatsappURL = `https://wa.me/919677692277?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12">
        <h2 className="text-4xl font-extrabold text-center text-[#6a65ba] mb-10 tracking-tight">
          Order Booking Form
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-[#6a65ba] border-b pb-2">
              Customer Details
            </h3>

            <Input
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Full Name *"
              required
            />
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company / Organization"
            />
            <Input
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number *"
              required
            />
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
            />

            <Select
              name="machineryType"
              value={formData.machineryType}
              onChange={handleChange}
              required
              options={[
                "Select Machinery/Equipment Type",
                "Jack Sewing Machines",
                "UME Embroidery Machines",
                "Finishing Equipments",
                "Servolndustrial Stabilizers",
              ]}
            />

            <Input
              name="modelSpec"
              value={formData.modelSpec}
              onChange={handleChange}
              placeholder="Model / Specification"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-[#6a65ba] border-b pb-2">
              Booking Details
            </h3>

            <Input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
            />

            <Select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              options={[
                "Select Preferred Time",
                "Morning (9 AM - 12 PM)",
                "Afternoon (12 PM - 3 PM)",
                "Evening (3 PM - 6 PM)",
              ]}
            />

            <Textarea
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
              placeholder="Delivery Address"
            />

            <Input
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Budget Range / Estimate"
            />

            <Textarea
              name="additionalRemarks"
              value={formData.additionalRemarks}
              onChange={handleChange}
              placeholder="Additional Remarks"
            />

            <div className="bg-purple-50 p-4 rounded text-sm text-[#6a65ba] font-medium border border-[#d2d0f0] shadow-inner">
              <p>💰 Payment: 100% advance payment</p>
              <p>🚚 Delivery: Same day delivery</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-6">
            <button
              type="submit"
              className="bg-[#6a65ba] hover:bg-[#5853a9] text-white font-bold px-10 py-4 rounded-full transition-transform transform hover:scale-105 shadow-lg"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({ name, value, onChange, placeholder, type = "text", required = false }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6a65ba] transition"
    />
  );
}

function Textarea({ name, value, onChange, placeholder }) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows="3"
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6a65ba] transition"
    ></textarea>
  );
}

function Select({ name, value, onChange, options = [], required = false }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#6a65ba] transition"
    >
      {options.map((opt, idx) => (
        <option key={idx} value={idx === 0 ? "" : opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
