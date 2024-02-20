import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto container flex justify-between py-4 items-center">
        <h2 className="text-2xl text-purple-500 font-semibold">Mitchell</h2>
        <nav className="flex gap-4 font-semibold">
          <a href="#" class="cta">
            <span class="hover-underline-animation"> Home </span>
          </a>
          <a href="#" class="cta">
            <span class="hover-underline-animation"> About </span>
          </a>
          <a href="#" class="cta">
            <span class="hover-underline-animation"> Resume </span>
          </a>
          <a href="#" class="cta">
            <span class="hover-underline-animation"> Portafolio </span>
          </a>
          <a href="#" class="cta">
            <span class="hover-underline-animation"> Contact </span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
