import { Link } from "react-router-dom";

const NavbarLogo = ({isOpen} : {isOpen: boolean}) => {
  return (
    <Link
      to="/"
      className={`flex items-center space-x-3 rtl:space-x-reverse z-50 transform duration-500 ease-in ${
        isOpen ? "text-black " : "text-white "
      }`}
    >
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        alt="logo.png"
        className="h-8"
      />
      <span className=" self-center text-2xl font-semibold whitespace-nowrap">
        Reno Ardiansyah
      </span>
    </Link>
  );
};

export default NavbarLogo;
