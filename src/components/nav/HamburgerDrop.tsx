"use client";

import { useState } from "react";

import Hamburger from "hamburger-react";

function HamburgerDrop() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className=" w-12 h-12">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && <div className="bg-white">123</div>}
    </div>
  );
}

export default HamburgerDrop;
