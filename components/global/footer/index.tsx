"use client";

import { Fragment } from "react";
import { ImageKitLoader } from "../imagekit-loader";

function Footer() {
  return (
    <Fragment>
      <div className="relative h-32 w-full">
        <ImageKitLoader
          responsive={true}
          className="object-cover"
          src="public/upper-building-footer.svg"
          alt=""
        />
      </div>
      <div className="border border-gray-300">Other footer style here</div>
    </Fragment>
  );
}

export default Footer;
