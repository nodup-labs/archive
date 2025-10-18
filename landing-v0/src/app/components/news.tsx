import NewsCard from "./NewsCard";

const News = () => {
  const newsData = [
    {
      image: "/img/news.png",
      title: "چگونه یک کمپین دیجیتال مارکتینگ موفق راه‌اندازی کنیم؟",
      description:
        "در این مقاله، مراحل راه‌اندازی یک کمپین دیجیتال مارکتینگ موفق را به‌طور کامل بررسی می‌کنیم. از تعیین اهداف تا پیگیری نتایج، یاد بگیرید چگونه کمپینی مؤثر و نتیجه‌بخش راه‌اندازی کنید.",
      author: "ندا احمدی",
      authorAvatar: "/img/avatar.jpg",
      date: "25 اردیبهشت 1403",
    },
    {
      image: "/img/news.png",
      title: "۵ راهکار برای افزایش نرخ تبدیل در سایت",
      description:
        "در این مقاله با ۵ تکنیک عملی برای افزایش نرخ تبدیل سایت آشنا می‌شوید و یاد می‌گیرید چگونه بازدیدکننده را به مشتری تبدیل کنید.",
      author: "علی رضایی",
      authorAvatar: "/img/avatar.jpg",
      date: "10 خرداد 1403",
    },
    {
      image: "/img/news.png",
      title: "چطور محتوای جذاب برای شبکه‌های اجتماعی تولید کنیم؟",
      description:
        "در این مقاله روش‌های تولید محتوای خلاقانه و جذاب برای شبکه‌های اجتماعی را بررسی می‌کنیم تا تعامل مخاطبانتان را افزایش دهید.",
      author: "سارا محمدی",
      authorAvatar: "/img/avatar.jpg",
      date: "5 تیر 1403",
    },
  ];

  return (
    <div className="mb-20">
      <p className="text-center text-2xl font-bold mb-8">
        تازه ترین و به روز ترین اخبار و اطلاعات
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {newsData.map((item, idx) => (
          <NewsCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};
export default News;
