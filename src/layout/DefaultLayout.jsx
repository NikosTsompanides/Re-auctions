import React from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen w-full">
      <div className="flex flex-row flex-wrap h-24 w-full">
        <Navbar />
      </div>
      <div className="flex flex-row flex-wrap h-full w-full">
        <main className="p-8 mx-auto w-full">{children}</main>
      </div>
      <div className="flex flex-row flex-wrap h-auto w-full">
        <Footer />
      </div>
    </div>
  );
}
