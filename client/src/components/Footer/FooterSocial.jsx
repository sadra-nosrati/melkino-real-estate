import { GoMention } from "react-icons/go";
import { BsShareFill } from "react-icons/bs";

function FooterSocial() {
  return (
    <div className="flex items-center justify-center gap-5 tablet-landscape:gap-4 text-zinc-400">
      <a
        className="text-xl transition-all duration-300 hover:text-[#F2CA50] hover:scale-125"
        href="#"
      >
        <GoMention />
      </a>

      <a
        className="text-xl transition-all duration-300 hover:text-[#F2CA50] hover:scale-125"
        href="#"
      >
        <BsShareFill />
      </a>
    </div>
  );
}

export default FooterSocial;
