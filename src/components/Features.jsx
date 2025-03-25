import React from "react";
import "./_Features.scss";

// Feature item component
const FeatureItem = ({ icon, title, description, index }) => {
  return <div className="feature">feature {index}</div>;
};

const Features = () => {
  // Feature data
  const featureItems = [
    {
      icon: "/src/assets/built-for-modern-use.svg", // Update with your actual icon path
      title: "Built for modern use",
      description: "Smarter meetings, all in one place",
    },
    {
      icon: "/src/assets/easy-to-implement.svg", // Update with your actual icon path
      title: "Easy to implement",
      description: "No complicated setup required, simply plug in and go",
    },
    {
      icon: "/src/assets/encrypted.svg", // Update with your actual icon path
      title: "State-of-the-art encryption",
      description: "Your data is secured and encrypted end-to-end",
    },
    {
      icon: "/src/assets/meeting-settings.svg", // Update with your actual icon path
      title: "Customizable meeting settings",
      description: "Adjust parameters and settings to fit your needs",
    },
    {
      icon: "/src/assets/fast-connection.svg", // Update with your actual icon path
      title: "Fast connection",
      description: "Low latency for real-time communication",
    },
    {
      icon: "/src/assets/screen-sharing.svg", // Update with your actual icon path
      title: "Screen sharing",
      description: "Share your screen for more effective communication",
    },
  ];

  return (
    <section className="features">
      <div className="features__wrapper">
        {featureItems.map((feature, index) => (
          <FeatureItem
            key={index + 1}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
