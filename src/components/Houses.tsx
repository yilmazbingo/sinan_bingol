import Image from "next/image";
import image1 from "../../public/houses/house_1.jpg";
import image2 from "../../public/houses/house_2.jpg";
import image3 from "../../public/houses/house_3.jpg";
import image4 from "../../public/houses/house_4.jpg";
import image5 from "../../public/houses/house_5.jpg";
import image6 from "../../public/houses/house_6.jpg";
import image7 from "../../public/houses/house_7.jpg";
import image8 from "../../public/houses/house_8.jpg";
import image9 from "../../public/houses/house_9.jpg";
import image10 from "../../public/houses/house_10.jpg";

const images = [
  { src: image1, alt: "Coldwell Banker House 1" },
  { src: image2, alt: "Coldwell Banker House 2" },
  { src: image3, alt: "Coldwell Banker House 3" },
  { src: image4, alt: "Coldwell Banker House 4" },
  { src: image5, alt: "Coldwell Banker House 5" },
  { src: image6, alt: "Coldwell Banker House 6" },
  { src: image7, alt: "Coldwell Banker House 7" },
  { src: image8, alt: "Coldwell Banker House 8" },
  { src: image9, alt: "Coldwell Banker House 9" },
  { src: image10, alt: "Coldwell Banker House 10" },
];

export default function Houses() {
  return (
    <div className="flex items-center justify-center relative w-auto">
      <div className="grid lg:grid-cols-5 gap-4  md:grid-cols-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center hover:scale-110"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="h-52 w-72 rounded-t lg:rounded-t-none lg:rounded-l text-center object-cover relative overflow-hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
