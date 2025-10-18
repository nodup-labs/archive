import { IconQuoteFilled, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

interface CardTestimonialProps {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  date: string;
  rating: string;
}

const CardTestimonial = ({
  name,
  role,
  avatar,
  quote,
  date,
  rating,
}: CardTestimonialProps) => (
  <div className="p-3 bg-white rounded-lg w-full flex flex-col gap-3 shadow-md">
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <Image
          src={avatar}
          alt="avatar"
          width={47}
          height={47}
          className="rounded-lg"
        />
        <div className="flex flex-col ">
          <p className="text-base md:text-lg font-bold">{name}</p>
          <p className="text-xs md:text-sm text-gray-500 font-bold ">{role}</p>
        </div>
      </div>
      <div className="bg-primary p-1 w-11 flex justify-center rounded-2xl rotate-45">
        <IconQuoteFilled size={34} color="white" />
      </div>
    </div>
    <div>
      <p className="text-xs md:text-sm font-normal ">{quote}</p>
    </div>
    <div className="flex justify-between items-center">
      <p className="text-xs md:text-sm text-gray-500 font-normal">{date}</p>
      <div className="flex gap-1 items-center">
        <p className="text-xs md:text-sm font-normal">{rating}</p>
        <IconStarFilled size={16} color="#FFD700" />
      </div>
    </div>
  </div>
);

export default CardTestimonial;
