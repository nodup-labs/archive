import { IconLink } from "@tabler/icons-react";
import Image from "next/image";

interface CardMarketingProps {
  title: string;
  description: string;
  iconSrc: string;
}

const Cardmarketing = ({ title, description, iconSrc }: CardMarketingProps) => {
  return (
    <div className="bg-white rounded-lg p-4 w-full h-full min-h-[180px] flex flex-col shadow-sm relative overflow-hidden group ">
      <div className="flex gap-3 items-center mb-1">
        <Image
          src={iconSrc}
          width={40}
          height={40}
          className="md:w-[48px] md:h-[48px] w-[40px] h-[40px]"
          alt="icon"
        />
        <p className="text-lg md:text-xl font-extrabold">{title}</p>
      </div>

      <div className="relative pb-5">
        <p className="text-sm md:text-base font-normal text-gray-500">
          {description}
        </p>
      </div>
      <div className="bg-gray-200 rounded-lg py-2 w-10 flex justify-center items-center bottom-1 left-1 absolute">
        <IconLink size={24} className="text-primary" />
      </div>
      <div className="bg-[#295ECD52] w-[150px] h-[150px] rounded-full absolute pointer-events-none select-none blur-[39px] left-20 -bottom-20 opacity-0 translate-y-20 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
    </div>
  );
};

export default Cardmarketing;
