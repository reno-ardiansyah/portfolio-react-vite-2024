import NavbarLogo from "@/components/atoms/NavbarLogo";
import NavHamburgerButton from "@/components/molecules/NavHamburgerButton";

const NavbarHeader = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: () => void;
}) => {
  return (
    <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4 z-50">
      <NavbarLogo isOpen={isOpen} />
      <NavHamburgerButton isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default NavbarHeader;
