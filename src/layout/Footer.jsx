import React from "react";
import { NavbarItem } from "./Navbar/NavbarItem";
import { navbarItems } from "./Navbar/items";

export function Footer() {
  return (
    <footer className="flex flex-row flex-wrap w-full h-full bg-blue-500 text-white py-8 px-8 mx-auto">
      <div className="flex flex-col w-full md:w-1/3 px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet ex
        massa, at feugiat elit pharetra in. Vivamus in maximus turpis. Sed eget
        dui vitae sapien lacinia ullamcorper hendrerit id enim.
      </div>
      <div className="flex flex-col w-full md:w-1/3 px-4">
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-col w-full sm:w-1/2">
            <ul>
              {navbarItems
                .slice(0, 3)
                .map((props, index) => (
                  <li key={index}>
                    <NavbarItem {...props} dark />
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <ul>
              {navbarItems
                .slice(3, navbarItems.length)
                .map((props, index) => (
                  <li key={index}>
                    <NavbarItem {...props} dark={true} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/3 px-4">3</div>
    </footer>
  );
}
