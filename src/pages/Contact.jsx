import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-red-400" />,
      label: "Email Us",
      value: "support@yourcompany.com",
      bg: "bg-zinc-200",
    },
    {
      icon: <Phone className="text-red-400" />,
      label: "Call Us",
      value: "+92 300 0000000",
      bg: "bg-zinc-200",
    },
    {
      icon: <MapPin className="text-red-400" />,
      label: "Location",
      value: "Pakistan",
      bg: "bg-zinc-200",
    },
    {
      icon: <Clock className="text-red-400" />,
      label: "Working Hours",
      value: "Mon - Fri: 9AM - 6PM",
      bg: "bg-zinc-200",
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900">Let's Talk</h1>

          <div className="space-y-4 mt-8">
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl shadow flex gap-4"
              >
                <div className={`p-3 rounded-lg ${item.bg}`}>{item.icon}</div>
                <div>
                  <p className="font-semibold text-gray-900">{item.label}</p>
                  <p className="text-sm text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-10 rounded-2xl shadow-2xl"
        >
          <form className="space-y-5 text-gray-900">
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-red-400"
            />

            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-red-400"
            />

            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-red-400"
            />

            <input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-red-400"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg border-red-400"
            />

            <button className="w-full bg-gradient-to-r from-red-400 to-zinc-400 text-white py-3 rounded-lg">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
