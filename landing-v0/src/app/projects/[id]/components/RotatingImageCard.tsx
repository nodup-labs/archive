"use client";
import { IconChevronLeftPipe, IconChevronRightPipe } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  { id: 1, image: "/img/demo.jpg" },
  { id: 2, image: "/img/sliderp.png" },
  { id: 3, image: "/img/demo.jpg" },
];

export default function Depth3DCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % products.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + products.length) % products.length);

  const handleSelect = (index: number) => setCurrent(index);

  // اندازه های responsive بر اساس screen width
  const getDimensions = () => {
    if (typeof window === "undefined")
      return { width: 1200, height: 600, offsetX: 300 };
    const w = window.innerWidth;
    if (w >= 1280) return { width: 900, height: 600, offsetX: 300 }; // large screens
    if (w >= 768) return { width: 600, height: 500, offsetX: 250 }; // medium screens
    return { width: 250, height: 300, offsetX: 150 }; // small screens / mobile
  };

  const { width, height, offsetX } = getDimensions();

  return (
    <div className="relative w-full h-[750px] flex items-center justify-center perspective-[4000px] overflow-hidden">
      {products.map((product, i) => {
        let indexDiff = i - current;
        if (indexDiff < -Math.floor(products.length / 2))
          indexDiff += products.length;
        if (indexDiff > Math.floor(products.length / 2))
          indexDiff -= products.length;

        const isActive = indexDiff === 0;
        const zIndex = 50 - Math.abs(indexDiff);
        const scale = isActive ? 1 : 0.8 - Math.abs(indexDiff) * 0.05;

        return (
          <motion.img
            key={product.id}
            layout
            layoutId={`carousel-${product.id}`}
            src={product.image}
            className="absolute object-cover rounded-xl shadow-xl cursor-pointer"
            style={{
              width: `${width * scale}px`,
              height: `${height * scale}px`,
              zIndex,
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(e, info) => {
              const threshold = 100;
              if (info.offset.x < -threshold) next();
              else if (info.offset.x > threshold) prev();
            }}
            onClick={() => handleSelect(i)}
            animate={{
              x: indexDiff * offsetX,
              rotateY: indexDiff * 30,
              filter: isActive ? "none" : "grayscale(100%) blur(4px)",
              opacity: Math.abs(indexDiff) > 2 ? 0 : 1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        );
      })}
      <IconChevronLeftPipe
        size={36}
        onClick={prev}
        className="
    absolute 
    top-1/2 left-6 
    -translate-y-1/2
    text-primary 
    bg-white/30 backdrop-blur-md
    p-2 rounded-full shadow-lg z-50 cursor-pointer
    transition-all duration-300 hover:bg-white/60 hover:scale-110
  "
      />

      <IconChevronRightPipe
        size={36}
        onClick={next}
        className="
    absolute 
    top-1/2 right-6 
    -translate-y-1/2
    text-primary 
    bg-white/30 backdrop-blur-md
    p-2 rounded-full shadow-lg z-50 cursor-pointer
    transition-all duration-300 hover:bg-white/60 hover:scale-110
  "
      />
    </div>
  );
}
