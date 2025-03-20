import React from "react";
import imgHeroTablet from "../assets/tablet/image-hero.png";
import imageHeroDesktopLeft from "../assets/desktop/image-hero-left.png";
import imageHeroDesktopRight from "../assets/desktop/image-hero-right.png";
import { Button } from "./Button";

const BUTTON_LABELS = {
  DOWNLOAD: "Download v1.3",
  INFO: "What is it?",
};

export const Hero = () => (
  <section className="flex flex-col lg:flex-row lg:gap-8 py-16 overflow-hidden mx-auto">
    <div className="scale-115 md:scale-105 lg:scale-100 ">
      <picture>
        <source media="(min-width: 64rem)" srcSet={imageHeroDesktopLeft} />
        <img
          src={imgHeroTablet}
          className="w-full"
          alt="Group of people smiling and using the chat app, left side"
        />
      </picture>
    </div>

    <div className="px-8 md:px-0 pb-8 mt-12 md:mt-[4.5rem] lg:mt-0 text-center flex flex-col gap-6 lg:gap-8 max-w-md mx-auto">
      <h1 className="text-preset-1--mobile md:text-preset-1--tablet lg:text-preset-1 text-slate-900">
        Group Chat <br />
        for Everyone
      </h1>
      <p className="text-preset-4--tablet lg:text-preset-4 text-slate-600">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <div className="flex flex-col md:flex-row gap-4 items-center md:justify-center">
        <Button label={BUTTON_LABELS.DOWNLOAD} primary={true} />
        <Button label={BUTTON_LABELS.INFO} />
      </div>
    </div>
    <div className="hidden lg:block">
      <img
        src={imageHeroDesktopRight}
        alt="Group of people smiling and using the chat app, right side"
      />
    </div>
  </section>
);
