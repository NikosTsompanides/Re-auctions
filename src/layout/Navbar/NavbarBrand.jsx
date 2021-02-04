import React from "react";
import { RxJsIcon } from "../../components/misc/icons";

export function NavbarBrand({ icon, title }) {
  return (
    <div className="flex">
      <RxJsIcon size={32} />
      <span className=" pl-4 text-md md:text-lg lg:text-xl xl:text-2xl text-black font-bold">
        {title}
      </span>
    </div>
  );
}
