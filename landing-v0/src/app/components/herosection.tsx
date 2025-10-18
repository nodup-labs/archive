import Image from "next/image";

const Herosection = () => {
  return (
    <div>
      {/* <div className="relative">
        <div className="bg-[#295ECD63] w-[742px] h-[742px] blur-[39px] rounded-full -z-50 absolute -top-[300px] -right-[600px] pointer-events-none select-none"></div>{" "}
        <div className="bg-[#295ECD63] w-[742px] h-[742px] blur-[39px] rounded-full -z-50 absolute -top-[500px] -left-[600px] pointer-events-none select-none"></div>{" "}
      </div> */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={"/img/header.png"}
            alt="herosection"
            width={742}
            height={742}
            className="w-full max-w-xs md:max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2 text-center md:text-right">
          <p className="text-4xl md:text-7xl font-black leading-[60px] md:leading-[100px]">
            <span className="text-primary">آیـــــــــنده</span> اینجاست ما
            طراحی اش میکنیم
          </p>
          <p className="text-lg md:text-2xl font-normal">
            تصمیمی که امروز می‌گیرید، می‌تواند آینده برندتان را متحول کند.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
