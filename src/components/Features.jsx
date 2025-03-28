import React from "react";
import PropTypes from "prop-types";
import "./_Features.scss";
// Import data from the data file
import { featureItems } from "../data/featureData";

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
