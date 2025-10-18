"use client";
import { Autoplay } from "swiper/modules";
import { IconStarFilled } from "@tabler/icons-react";
import Cardmarketing from "./cardmarketing";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Serveses = () => {
  const marketingArray = [
    {
      title: "مارکتینگ و تبلیغات",
      description:
        " کمپین‌های خلاقانه ما پیام برندتان را به مخاطبان هدف می‌رساند، تعامل مؤثر ایجاد می‌کند و رشد پایدار را تضمین می‌نماید.",
      iconSrc: "/icon/browser-code_svgrepo.com.svg",
    },
    {
      title: "تولید محتوا",
      description:
        "متن تخصصی، تصاویر خلاقانه و ویدئوهای حرفه‌ای تولید می‌کنیم تا حضور برندتان در تمام کانال‌های دیجیتال تقویت شود. ",
      iconSrc: "/icon/browser-code_svgrepo.com.svg",
    },
    {
      title: "طراحی وبسایت",
      description:
        "سایت‌های حرفه‌ای، سریع و واکنش‌گرا طراحی می‌کنیم تا برندتان متمایز معرفی شود و تجربه‌ای ماندگار برای کاربر بسازد.",
      iconSrc: "/icon/browser-code_svgrepo.com.svg",
    },
    {
      title: "خدمات سئو",
      description:
        "با سئوی حرفه‌ای، جایگاه وب‌سایتتان را در نتایج جستجو ارتقا می‌دهیم و ترافیک هدفمند و پایدار جذب می‌کنیم.",
      iconSrc: "/icon/browser-code_svgrepo.com.svg",
    },
    {
      title: "اتوماسیون هوشمند",
      description:
        "راهکارهای هوشمند ما تعامل با مشتریان را ساده می‌سازد، زمان را بهینه می‌کند و نرخ تبدیل را افزایش می‌دهد.",
      iconSrc: "/icon/browser-code_svgrepo.com.svg",
    },
  ];
  return (
    <div className="mb-30">
      <div className="hidden md:block bg-[url('/img/Rectangle2.png')] bg-no-repeat h-[240px] bg-cover rounded-b-2xl"></div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4 md:px-10 -mt-0 md:-mt-[140px] gap-4 md:gap-0">
          <div className="flex flex-col gap-1 text-center md:text-right">
            <p className="text-xl md:text-2xl font-extrabold text-white">
              از استراتژی تا اجرا، همه‌ی نیازهای دیجیتال مارکتینگ شما نزد{" "}
              <span className="text-primary">ماست</span>.
            </p>
            <p className="text-base md:text-lg font-normal text-gray-500">
              با خدمات تخصصی در بازاریابی دیجیتال، از طراحی وب تا تبلیغات
              هدفمند، تجربه‌ای متفاوت از رشد را احساس کنید.
            </p>
          </div>

          <div className="bg-primary p-3 md:p-5 rounded-full flex items-center gap-2 text-white justify-center md:justify-end">
            <IconStarFilled size={24} color="white" />
            <IconStarFilled size={24} color="white" />
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-4 px-4 md:px-10">
          {marketingArray.map((item, idx) => (
            <Cardmarketing key={idx} {...item} />
          ))}
        </div>

        <div className="block md:hidden px-4">
          <Swiper
            slidesPerView={1.4}
            spaceBetween={10}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {marketingArray.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Cardmarketing {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Serveses;
