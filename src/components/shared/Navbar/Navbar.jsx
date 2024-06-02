import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10 shadow-sm bg-white ">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Search />
            <DropDownMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
