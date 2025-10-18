"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CollaborationCard from "./CollaborationCard";

const Collaboration = () => {
  const cards = [
    {
      number: 1,
      title: "جلسه مشاوره اولیه با متخصصین ما",
      description:
        "در این مرحله، تیم متخصصین ما با شما جلسه‌ای برگزار می‌کند تا شرایط و اهداف کسب‌وکار شما را به دقت بشناسند. این جلسه به‌منظور تعیین بهترین استراتژی‌ها و راه‌حل‌ها برای شروع همکاری خواهد بود.",
    },
    {
      number: 2,
      title: "نیازسنجی و تحلیل دقیق",
      description:
        "پس از جلسه مشاوره، تیم ما به‌صورت دقیق نیازهای خاص کسب‌وکار شما را شناسایی می‌کند. این تحلیل شامل بررسی رقبا، تحلیل بازار و تعیین اهداف کوتاه‌مدت و بلندمدت است تا بهترین راهکارهای ممکن را برای شما طراحی کنیم.",
    },
    {
      number: 3,
      title: "اجرا و پیاده‌سازی راه‌حل‌ها",
      description:
        "پس از تحلیل نیازها، تیم ما وارد مرحله اجرا می‌شود. در این مرحله، تمامی استراتژی‌ها و راه‌حل‌های پیشنهادی به‌طور دقیق پیاده‌سازی می‌شوند تا کسب‌وکار شما در دنیای دیجیتال به درستی معرفی و توسعه یابد.",
    },
    {
      number: 4,
      title: "تحویل پروژه و پشتیبانی مداوم",
      description:
        "پس از اتمام مراحل اجرایی، پروژه به شما تحویل داده می‌شود. اما همکاری ما با شما تمام نمی‌شود! ما به پشتیبانی مداوم از پروژه و ارزیابی نتایج آن ادامه می‌دهیم تا اطمینان حاصل کنیم که کسب‌وکار شما در مسیر رشد و موفقیت قرار دارد.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 1500);

    return () => clearInterval(timer);
  }, [cards.length]);
  return (
    <div>
      <div className="mb-24">
        <p className=" text-center text-3xl font-bold">
          فرایند همکاری با پرشین‌ سایت؛ از تحلیل نیازها تا اجرای دقیق و پشتیبانی
          مستمر
        </p>
        <p className="text-center text-lg font-normal text-gray-500">
          طراحی سایت ابزاری کلیدی برای رشد و موفقیت کسب‌وکارهاست. یک وب‌سایت
          حرفه‌ای به تقویت هویت برند، افزایش دسترسی به مشتریان، افزایش فروش و
          ارائه خدمات بهتر کمک می‌کند. وب‌سایت‌های به‌روز و کاربرپسند اعتماد
          مخاطبان را جلب کرده و بستری برای تعامل و جذب مشتریان جدید فراهم
          می‌آورند.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative mb-36 px-2 md:px-0">
        <Image
          src="/img/arowtop.png"
          alt="arrow"
          width={385}
          height={99}
          className="absolute -top-28 right-48 hidden md:block"
        />
        {cards.map((card, idx) => (
          <CollaborationCard
            key={idx}
            number={card.number}
            title={card.title}
            description={card.description}
            active={idx === activeIndex}
          />
        ))}
        <Image
          src="/img/arowbot.png"
          alt="arrow"
          width={385}
          height={99}
          className="absolute -bottom-28 left-48 hidden md:block"
        />
      </div>
    </div>
  );
};

export default Collaboration;
