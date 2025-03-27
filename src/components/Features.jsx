import React from "react";
import PropTypes from "prop-types";
import "./_Features.scss";

import spriteSheet from "../assets/img/sprite.svg";

const FeatureItem = ({ iconId, title, description }) => {
  return (
    <div className="feature">
      <svg className="feature__icon">
        <use href={`${spriteSheet}#${iconId}`}></use>
      </svg>

      <h4 className="heading-4 heading-4--dark">{title}</h4>
      <p className="feature__text">{description}</p>
    </div>
  );
};

FeatureItem.propTypes = {
  iconId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Features = () => {
  // Feature data
  const featureItems = [
    {
      iconId: "icon-global", // Update with your actual icon path
      title: "World's best luxury homes",
      description:
        "Treat yourself to a luxury home located in the heart of your city",
    },
    {
      iconId: "icon-trophy", // Update with your actual icon path
      title: "Only the best properties",
      description: "Handpicked by our experts for your ultimate comfort",
    },
    {
      iconId: "icon-map-pin", // Update with your actual icon path
      title: "All homes in top locations",
      description: "Located in the most desirable areas of the city",
    },
    {
      iconId: "icon-key", // Update with your actual icon path
      title: "New home in one week",
      description: "Move into your new home in just one week",
    },
    {
      iconId: "icon-presentation", // Update with your actual icon path
      title: "Top 1% realtors",
      description: "Our top 1% realtors help you find the best home",
    },
    {
      iconId: "icon-lock", // Update with your actual icon path
      title: "Secure payments on nexter",
      description: "We ensure your payments are secure and safe",
    },
  ];

  return (
    <section className="features">
      {featureItems.map((feature, index) => (
        <FeatureItem
          key={index + 1}
          iconId={feature.iconId}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default Features;
