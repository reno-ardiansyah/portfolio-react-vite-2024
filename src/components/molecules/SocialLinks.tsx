
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import SocialLink from "../atoms/SocialLink";
import { FaSquareUpwork } from "react-icons/fa6";

const SocialLinks: React.FC = () => (
  <div className="absolute bottom-10 -right-[30rem] flex space-x-6">
    <SocialLink
      href="#"
      icon={<FaGithub />}
      className="hover:text-black"
      delay={0.8}
    />
    <SocialLink
      href="#"
      icon={<FaFacebook />}
      className="hover:text-blue-600"
      delay={0.9}
    />
    <SocialLink
      href="#"
      icon={<FaTwitter />}
      className="hover:text-blue-400"
      delay={1.0}
    />
    <SocialLink
      href="#"
      icon={<FaSquareUpwork />}
      className="hover:text-blue-700"
      delay={1.1}
    />
  </div>
);

export default SocialLinks;
