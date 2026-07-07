function NewsLetterImage() {
  return (
    <div className="w-full tablet-landscape:w-1/2 flex justify-center items-center">
      <img
        src="/images/news-latter.webp"
        alt="خبر نامه"
        className="w-full max-w-[320px] mobile-landscape:max-w-95 tablet-portrait:max-w-110 tablet-landscape:max-w-120 object-cover rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
      />
    </div>
  );
}

export default NewsLetterImage;
