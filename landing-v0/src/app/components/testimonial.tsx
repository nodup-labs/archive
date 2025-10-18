// Removed unused imports
import CardTestimonial from "./CardTestimonial";

const Testimonial = () => {
  return (
    <div className="mb-20">
      <div className="mb-8">
        <p className="text-center text-2xl font-bold">در مورد ما چه میگویند؟</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <CardTestimonial
          name="ندا احمدی"
          role="مدیر پروژه"
          avatar="/img/avatar.jpg"
          quote="همکاری با این گروه بسیار سازنده و الهام‌بخش بود. توانایی آنها در مدیریت زمان و منابع باعث موفقیت پروژه ما شد."
          date="تاریخ: ۲۷ مرداد ۱۴۰۴"
          rating="امتیاز : ۴.۵ از ۵"
        />
        <CardTestimonial
          name="علی رضایی"
          role="مدیر مارکتینگ"
          avatar="/img/avatar.jpg"
          quote="تیم حرفه‌ای و خلاق! پروژه ما را با کیفیت عالی و در زمان مقرر تحویل دادند."
          date="تاریخ: ۱۰ شهریور ۱۴۰۴"
          rating="امتیاز : ۵ از ۵"
        />
        <CardTestimonial
          name="سارا محمدی"
          role="کارشناس دیجیتال مارکتینگ"
          avatar="/img/avatar.jpg"
          quote="پشتیبانی عالی و پاسخگویی سریع. از همکاری با این تیم بسیار راضی هستم."
          date="تاریخ: ۵ مهر ۱۴۰۴"
          rating="امتیاز : ۴ از ۵"
        />
      </div>
    </div>
  );
};

export default Testimonial;
