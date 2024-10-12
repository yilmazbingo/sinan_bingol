import React from "react";
import Image from "next/image";
import Link from "next/link";

import headerImage from "../../public/header.jpg";
import companyLogo from "../../public/coldwell.png";

const Header = () => {
  return (
    <div className="flex flex-row justify-between header-section">
      {/* <Image
        priority
        sizes="100vw"
        src={headerImage}
        alt="background-image"
        className="z-50 w-full h-[40px] object-cover object-center "
      /> */}
      <div>
        <Image
          priority
          src={companyLogo}
          alt="Coldwell Banker logo"
          width={50}
          height={30}
          className="object-center "
        />
      </div>
      <div>
        <Link href="#contact">Iletisim</Link>
      </div>
    </div>
  );
};

export default Header;
