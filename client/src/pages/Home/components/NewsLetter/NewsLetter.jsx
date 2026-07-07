import NewsLetterImage from "./NewsLetterImage";
import NewsLetterInformation from "./NewsLetterInformation";

function NewsLetter() {
  return (
    <section className="flex flex-col-reverse tablet-landscape:flex-row items-center justify-between gap-10 tablet-landscape:gap-15 mx-auto w-full max-w-[1280px] px-4">
      <NewsLetterInformation />
      <NewsLetterImage />
    </section>
  );
}

export default NewsLetter;
