"use client";
import { Button } from "@/components/ui/button";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";
const teamMembers = [
  {
    id: 1,
    name: "عرفان کاشف",
    role: "Front-end Developer",
    image: "/img/erfankashef.jpg",
  },
  {
    id: 2,
    name: "علی کاشف",
    role: "Front-end Developer",
    image: "/img/alikashef.jpg",
  },
  {
    id: 3,
    name: "محمدرضا بدری",
    role: "Front-end Developer",
    image: "/img/aghabadry.jpg",
  },
];

const MemberInfo = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="pb-10">
      <div className="flex justify-between items-center pb-10">
        <p className="text-xl font-bold">اعضای تیم</p>
        <div className="h-0.5 w-4/5 bg-gray-500 rounded-full"></div>
        <div className="flex gap-2 items-center">
          <Button variant="default" size="sm" className="rounded-full">
            <IconCaretRightFilled size={24} />
          </Button>
          <Button variant="default" size="sm" className="rounded-full">
            <IconCaretLeftFilled size={24} />
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        {teamMembers.map((member) => {
          const isHovered = hoveredId === member.id;

          return (
            <motion.div
              key={member.id}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative overflow-hidden rounded-xl cursor-pointer"
              animate={{
                scale: isHovered ? 1.08 : 1,
                filter:
                  hoveredId && !isHovered
                    ? "grayscale(100%) brightness(60%)"
                    : "grayscale(0%) brightness(100%)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="object-cover w-[300px] h-[300px]"
              />

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 60,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute bottom-0 left-0 w-full bg-black/70 py-3 px-4 text-right"
              >
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{
                    y: isHovered ? 0 : 10,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
                  className="text-white text-base font-semibold"
                >
                  {member.name}
                </motion.p>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{
                    y: isHovered ? 0 : 10,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
                  className="text-gray-300 text-sm"
                >
                  {member.role}
                </motion.p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MemberInfo;
