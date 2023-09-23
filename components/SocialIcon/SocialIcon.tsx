import React from "react";
import { SocialIconProps } from "./types";

export const SocialIcon = ({ link, icon }: SocialIconProps): JSX.Element => {
  return (
    <>
      <div className="text-lg-center text-right col-lg-3 col-6 order-lg-2 order-3">
        <a
          href={link}
          className="fa-stack fa-2x"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-circle fa-stack-2x icon-background"></i>
          <i className={`fa fa-${icon} fa-stack-1x`}></i>
        </a>
      </div>
    </>
  );
};
