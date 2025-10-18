import Image from "next/image";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  author: string;
  authorAvatar: string;
  date: string;
}

const NewsCard = ({
  image,
  title,
  description,
  author,
  authorAvatar,
  date,
}: NewsCardProps) => (
  <div className="bg-white rounded-lg p-3 flex flex-col gap-2 w-full ">
    <Image
      src={image}
      alt="news"
      width={500}
      height={500}
      className="rounded-lg"
    />
    <p className="text-base md:text-lg font-bold">{title}</p>
    <p className="text-xs md:text-sm font-normal ">{description}</p>
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image
          src={authorAvatar}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="text-sm md:text-lg text-gray-500 font-normal">{author}</p>
      </div>
      <p className="text-sm md:text-lg font-light text-gray-500">{date}</p>
    </div>
  </div>
);

export default NewsCard;
