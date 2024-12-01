import {
  NavbarHamburgerLinesBottomAnimation,
  NavbarHamburgerLinesMiddleAnimation,
  NavbarHamburgerLinesTopAnimation,
} from "@/animations/NavbarAnimations";
import NavMenuLine from "@/components/atoms/NavMenuLine";

const NavHamburgerButton = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: () => void;
}) => {
  return (
    <div className="z-50">
      <button
        onClick={setOpen}
        className={`flex flex-col justify-center items-center w-12 h-12 border rounded-lg transform duration-500 ease-in ${
          isOpen ? "border-black " : "border-white "
        }`}
        aria-label="Toggle menu"
      >
        <NavMenuLine
          isOpen={isOpen}
          variant={NavbarHamburgerLinesTopAnimation}
        />
        <NavMenuLine
          isOpen={isOpen}
          variant={NavbarHamburgerLinesMiddleAnimation}
        />
        <NavMenuLine
          isOpen={isOpen}
          variant={NavbarHamburgerLinesBottomAnimation}
        />
      </button>
    </div>
  );
};

export default NavHamburgerButton;
