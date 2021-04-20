import React from "react";

export default function Footer() {
  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: " 100vh",
  };
  return (
    <footer className="w-100 bg-light text-center">
      <p className="text-center">Copyright © : MytodosLists.com</p>
    </footer>
  );
}
