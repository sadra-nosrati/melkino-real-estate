import { toast } from "react-toastify";
import { HiMiniCheckBadge, HiMiniXCircle } from "react-icons/hi2";

const base = {
  autoClose: 3500,
  closeButton: false,
  hideProgressBar: false,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 30,

  className:
    "!rounded-[18px] !overflow-hidden !p-0 !shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-xl",

  bodyClassName: "!m-0 !p-0",
};

const ToastContent = ({
  title,
  text,
  icon,
  bg,
  badgeBg,
  badgeBorder,
  iconColor,
}) => (
  <div className="flex items-center gap-4 px-5 py-4" style={{ background: bg }}>
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border"
      style={{
        background: badgeBg,
        borderColor: badgeBorder,
      }}
    >
      {icon(iconColor)}
    </div>

    <div className="flex flex-col">
      <span className="text-[15px] tracking-wide font-semibold text-white">
        {title}
      </span>

      <span className="mt-1 text-[13px] leading-6 font-semibold text-zinc-400">
        {text}
      </span>
    </div>
  </div>
);

export const notify = {
  success: (text) =>
    toast(
      <ToastContent
        title="عملیات موفق"
        text={text}
        bg="#13281B"
        border="rgba(74,222,128,.12)"
        badgeBg="rgba(74,222,128,.10)"
        badgeBorder="rgba(74,222,128,.18)"
        iconColor="#4ADE80"
        icon={(color) => <HiMiniCheckBadge size={21} style={{ color }} />}
      />,
      {
        ...base,
        className: `${base.className} !bg-[#13281B] !border !border-[#4ADE80]/10`,
        progressClassName:
          "!h-[3px] !bg-gradient-to-r !from-[#16A34A] !via-[#22C55E] !to-[#86EFAC]",
      },
    ),

  error: (text) =>
    toast(
      <ToastContent
        title="عملیات ناموفق"
        text={text}
        bg="#2A1414"
        border="rgba(225,107,107,.12)"
        badgeBg="rgba(225,107,107,.10)"
        badgeBorder="rgba(225,107,107,.18)"
        iconColor="#E16B6B"
        icon={(color) => <HiMiniXCircle size={21} style={{ color }} />}
      />,
      {
        ...base,
        className: `${base.className} !bg-[#2A1414] !border !border-[#E16B6B]/10`,
        progressClassName:
          "!h-[3px] !bg-gradient-to-r !from-[#A54242] !via-[#D95C5C] !to-[#F18C8C]",
      },
    ),
};
