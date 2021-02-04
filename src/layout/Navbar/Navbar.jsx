import React, { useState } from "react";
import { connect } from "react-redux";
import { HamburgerIcon, CloseIcon } from "../../components/misc/icons";
import { NavbarBrand } from "./NavbarBrand";
import { NavbarItem } from "./NavbarItem";
import { navbarItems } from "./items";

function Navbar({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  console.log(user)

  return (
    <>
      <nav className="shadow-lg flex flex-row justify-between items-center px-4 w-full">
        <NavbarBrand title={"Reauctions"} />
        <div className="hidden sm:flex flex-row items-center px-8">
          {navbarItems.map((props, i) => (
            <NavbarItem {...props} key={i} />
          ))}
          {!user? (
            <a href="/login">
              <button className="ml-2 px-4 py-2 border-none shadow-md hover:shadow-lg bg-blue-500 text-white rounded-lg font-semibold">
                Log In
              </button>
            </a>
          ): (
            <NavbarItem title="Profile" link="/profile" />
          )}
        </div>
        <div className="flex sm:hidden">
          <button onClick={openMenu}>
            <HamburgerIcon size={24} />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed w-full h-full top-0 left-0 flex justify-center bg-white">
          <button
            className="absolute top-0 right-0 flex flex-col items-center mt-4 mr-4 text-black text-sm z-50"
            onClick={closeMenu}
          >
            <CloseIcon size={22} />
          </button>

          <div className="container mx-auto h-auto text-left p-4">
            <ul>
              {navbarItems.map((props, i) => (
                <li key={i}>
                  <NavbarItem {...props} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});
export default connect(mapStateToProps, null)(Navbar);
