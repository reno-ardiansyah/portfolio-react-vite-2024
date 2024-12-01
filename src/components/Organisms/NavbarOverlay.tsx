import { motion, AnimatePresence } from "framer-motion";
import { MdAlternateEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import NavNavigation from "../molecules/NavNavigation";
import NavLink from "../atoms/NavLink";
import NavNavigateText from "../atoms/NavNavigateText";
import SocialLinks from "../molecules/SocialLinks";

const NavbarOverlay = ({ isOpen }: { isOpen: boolean }) => {
  const NAVLINK = [
    {title: 'Home', href: '/'},
    {title: 'About Me', href: '/about'},
    {title: 'Works', href: '/works'},
    {title: 'Contact', href: '/contact'},
  ]
  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-0 left-0 w-screen h-screen bg-gray-200"
            initial={{ y: "-100%" }} 
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }} 
          >
            <div className="max-w-screen-xl mx-auto relative h-full">
              <div className="grid grid-cols-3 py-32">
                <NavNavigation className="col-span-2">
                  <ul className="ms-5">
                  {NAVLINK.map((item, index) => (
                    <NavLink href={item.href} title={item.title} key={index} delay={0.4 + (0.2 * index)} />
                  ))}
                  </ul>
                </NavNavigation>
                <NavNavigation className="col-span-1">
                  <div className="border-l-4 border-sky-800 ps-10">
                    <NavNavigateText text="Are you interested in collaborating with me?" delay={0.7} className="text-xl font-semibold mb-6 text-sky-800" />
                    <NavNavigateText text="Let's Talk" delay={0.8} className="text-4xl font-semibold mt-6" />
                    <NavNavigateText text="Get in Touch" delay={0.9} className="text-xl text-sky-800 mt-6" />
                    <ul className="mt-4 space-y-4 text-xl">
                      <NavNavigateText text="Email: reno74874@gmail.com" delay={1.0} className="flex items-center space-x-4" icon={ <MdAlternateEmail className="text-sky-800 text-2xl mr-5" />}/>
                      <NavNavigateText text="Phone: +64 8572 8135 197" delay={1.1} className="flex items-center space-x-4" icon={ <MdOutlineLocalPhone className="text-sky-800 text-2xl mr-5" />}/>
                      <NavNavigateText text="Address: 123 Street, City, Country" delay={1.2} className="flex items-center space-x-4" icon={ <FaAddressBook className="text-sky-800 text-2xl mr-5" />}/>
                    </ul>
                  </div>
                </NavNavigation>
              </div>
              <SocialLinks/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarOverlay;
