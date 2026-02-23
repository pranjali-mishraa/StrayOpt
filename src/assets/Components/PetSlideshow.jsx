import { useEffect, useState } from "react";
import pet1 from '../Pictures/pet1.jpg';
import pet2 from '../Pictures/pet2.jpg';
import pet3 from '../Pictures/pet3.jpg';
import pet4 from '../Pictures/pet4.jpg';
import pet5 from '../Pictures/pet5.jpg';

export default function PetSlideshow() {

  const images = [pet1, pet2, pet3, pet4, pet5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="
      w-full
      max-w-sm
      sm:max-w-md
      md:max-w-lg
      lg:max-w-xl
      aspect-[4/5]
      overflow-hidden
      rounded-2xl
      shadow-lg
      border-4
      border-[black]
      mx-auto
    ">
      <img
        src={images[currentIndex]}
        alt="Pet"
        className="w-full h-full object-cover transition-all duration-700"
      />
    </div>
  );
}