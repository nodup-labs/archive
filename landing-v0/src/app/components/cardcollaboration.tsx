const Cardcollaboration = () => {
  return (
    <div
      className="relative p-0.5 rounded-lg w-full"
      style={{
        background: "linear-gradient(90deg, #295ECD 0%, #BCD3E8 100%)",
      }}
    >
      <div className="bg-white flex flex-col gap-1 rounded-lg p-3 shadow-sm relative overflow-hidden group">
        <p className="bg-gradient-to-b from-[#295ECD] to-[#BCD3E8] text-transparent bg-clip-text text-[100px] font-black -mt-6">
          1
        </p>
        <div className="-mt-10">
          <p className="text-lg font-bold">جلسه مشاوره اولیه با متخصصین ما</p>
          <p className="text-lg font-normal">
            در این مرحله، تیم متخصصین ما با شما جلسه‌ای برگزار می‌کند تا شرایط و
            اهداف کسب‌وکار شما را به دقت بشناسند. این جلسه به‌منظور تعیین بهترین
            استراتژی‌ها و راه‌حل‌ها برای شروع همکاری خواهد بود.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardcollaboration;
