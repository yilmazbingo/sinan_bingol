import Image from "next/image";
import Houses from "@/components/Houses";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";

import Header from "@/components/Header";

import bg from "../../public/bg-sinan2.jpg";
import sinan from "../../public/sinan.jpg";
import house_sale from "../../public/house_sale.jpg";
import Hello from "@/components/Hello";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <Header /> */}

      <main className="flex flex-col lg:flex-row  gap-8 row-start-2 items-start sm:items-center md:justify-center sm:justify-center">
        <Image
          priority
          sizes="100vw"
          src={bg}
          alt="background-image"
          fill
          className="-z-50 w-full h-full object-cover object-center"
        />
        <div className=" top-4 left-24 lg:w-2/4  flex flex-col">
          {/* <div className="flex flex-col"> */}
          <Image
            aria-hidden
            src={sinan}
            alt="Globe icon"
            width={320}
            height={480}
            className="border-transparent object-contain"
          />
          {/* <div className="mt-20"> */}
          {/* <Image
            aria-hidden
            src={house_sale}
            alt="Globe icon"
            className="object-cover h-[320px] w-[320px]"
          /> */}
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className="flex flex-col  flex-1   space-y-4 lg:w-2/4  ">
          <AboutMe />

          {/* <AboutMe /> */}
          <Houses />
        </div>
      </main>
      <div>
        <Contact />
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
