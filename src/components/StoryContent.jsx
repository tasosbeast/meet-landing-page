import React from "react";
import "./_Story.scss";

const StoryContent = () => {
  return (
    <div className="story__content">
      <h3 className="heading-3 u-margin-bottom-small">Happy Customers</h3>
      <h2 className="heading-2 heading-2--dark u-margin-bottom-medium ">
        &ldquo;The best decision of our lives&rdquo;
      </h2>

      <p className="story__text">
        We found our dream home within just two weeks of working with Nexter.
        The process was seamless, and our realtor's expertise helped us secure
        the perfect property in our ideal neighborhood at a great price.
      </p>
      <button className="btn">Find your own home</button>
    </div>
  );
};

export default StoryContent;
