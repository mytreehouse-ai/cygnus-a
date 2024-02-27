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
      <footer className="border border-gray-300 bg-slate-950 py-4 text-center font-semibold text-white">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-emerald-600">MyTreeHouse</span>. All rights
        reserved.
      </footer>
    </Fragment>
  );
}

export default Footer;
