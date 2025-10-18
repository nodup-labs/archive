import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="container mx-auto bg-[#303030] rounded-xl p-6 mb-10 ">
      <div className="flex flex-col md:flex-row md:justify-evenly gap-8 md:gap-0">
        <div className="flex flex-col gap-4 w-full md:w-1/5 text-center md:text-right">
          <p className="text-2xl font-bold text-white">NODUP</p>
          <p className="text-sm font-normal text-white">
            پرشین گروپ با بیش از بیست سال سابقه درخشان در زمینه طراحی وب سایت و
            پیاده سازی انواع کمپین های بازاریابی و سیستم های اتوماسیون فرایندهای
            کسب و کار ، آماده است تا با استفاده از تجربه دیرینه و دانش روز دنیا
            پروژه های شما را پیاده سازی کند.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-white w-full md:w-auto text-center md:text-right">
          <p className="text-xl font-bold">دسترسی سریع</p>
          <ul className="flex flex-col gap-2 text-sm font-normal">
            <li>خانه</li>
            <li>خدمات</li>
            <li>نمونه کارها</li>
            <li>وبلاگ</li>
            <li>تماس با ما</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 text-white w-full md:w-auto text-center md:text-right">
          <p className="text-xl font-bold"> خدمات نوداپ</p>
          <ul className="flex flex-col gap-2 text-sm font-normal">
            <li>طراحی سایت</li>
            <li>مارکتینگ و تبلیغات</li>
            <li>اتوماسیون هوشمند</li>
            <li>تولید محتوا</li>
            <li>سئو</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7 text-white w-full md:w-auto text-center md:text-right">
          <p className="text-xl font-bold">راه‌های ارتباطی با مجموعه پرشین</p>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-start">
            <IconMapPin color="white" size={16} />
            <p className="text-xs font-bold">
              تهران - پاسداران ، پایدار فرد ، بوستان پنجم ، پلاک 56
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between">
            <div className="flex gap-1 items-center">
              <IconMail size={20} color="white" />
              <p className="tex-xs font-bold text-gray-300">
                info@persiansite.ir
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <IconPhone size={20} color="white" />
              <p className="tex-xs font-bold text-gray-300">021_91010204</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-600 rounded-full my-5"></div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="tex-sm text-gray-600 font-normal text-center md:text-right">
          تمامی حقوق مادی و معنوی این وب سایت متعلق به گروه پرشین عصر هوشمند
          است.
        </p>
        <div className="flex gap-2 justify-center md:justify-end">
          <IconBrandInstagram size={24} color="gray" />
          <IconBrandFacebook size={24} color="gray" />
          <IconBrandYoutube size={24} color="gray" />
          <IconBrandX size={24} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
