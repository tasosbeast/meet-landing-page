import React from "react";
import "./_Story.scss";
import story1 from "../assets/img/story-1.jpeg";
import story2 from "../assets/img/story-2.jpeg";

const StoryPictures = () => {
  return (
    <div className="story__pictures">
      <img
        src={story1}
        alt="Couple with new house"
        className="story__img--1 story__img"
      />
      <img src={story2} alt="New house" className="story__img--2 story__img" />
    </div>
  );
};

export default StoryPictures;
