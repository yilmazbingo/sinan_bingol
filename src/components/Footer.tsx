import Image from "next/image";
import TwitterIcon from "../../public/icons/twitter.svg";
import InstagramIcon from "../../public/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {/* <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div> */}
        <div className="social-icon">
          <Image src={TwitterIcon} alt="twitter" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <Image src={InstagramIcon} alt="instagram" className="w-1/2 h-1/2" />
        </div>
      </div>

      <p className="text-white-500">
        © 2024 Sinan Bingol. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
