import React from "react"

import Vector from '../../public/Vector.png'

const Navbar = () => {
  return (
    <div className="flex h-[60px] gap-2 text-xl font-medium my-4 rounded-lg bg-white items-center justify-center">
      <img src={Vector} alt="logo" />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
