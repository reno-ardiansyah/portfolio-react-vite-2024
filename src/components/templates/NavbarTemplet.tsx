import { useState } from "react";
import NavbarHeader from "@/components/Organisms/NavbarHeader";
import NavbarOverlay from "@/components/Organisms/NavbarOverlay";

const NavbarTemplet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-gray-900 border-gray-700 relative">
      <NavbarHeader isOpen={isOpen} setOpen={handlerIsOpen} />
      <NavbarOverlay isOpen={isOpen} />
    </nav>
  );
};

export default NavbarTemplet;
