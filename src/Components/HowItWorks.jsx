import React from 'react';
import { motion } from "framer-motion";

const steps = [
  {
    icon: "👤",
    title: "Create Your Profile",
    description: "Sign up and personalize your profile to get job suggestions tailored for you.",
  },
  {
    icon: "🏢",
    title: "Browse Companies",
    description: "Explore a wide range of companies hiring across various sectors and locations.",
  },
  {
    icon: "📄",
    title: "Explore Jobs",
    description: "Check requirements, salaries, and roles before choosing your ideal job.",
  },
  {
    icon: "🚀",
    title: "Apply in One Click",
    description: "Apply instantly via the job modal and land interviews quickly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">How HireTrack Works</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Follow these simple steps to find and apply for your dream job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="card bg-white shadow-lg rounded-xl p-6"
            >
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
