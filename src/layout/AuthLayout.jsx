import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <main className="container">{children}</main>
    </div>
  );
}
