import { FavoritesContext } from "@/context/FavoritesContext";
import { usePropertyById } from "@/hooks/usePropertyById";
import { notify } from "@/utils/toast";
import { useContext } from "react";
import { FaCalendarCheck, FaHeart } from "react-icons/fa6";
import { FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";

function ProductActionsCard() {
  const { property } = usePropertyById();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.includes(String(property?.id));

  return (
    <div className="w-full tablet-landscape:w-[30%]">
      <div className="w-full rounded-xl border border-[#2a2416] bg-[#0f0f0f] p-4 text-white space-y-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F2CA50]/40 hover:shadow-[0_8px_30px_rgba(242,202,80,0.08)]">
        <div className="space-y-2">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F2CA50] px-4 py-2 text-black font-medium transition hover:opacity-90 cursor-pointer">
            درخواست بازدید
            <FaCalendarCheck />
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#F2CA50] px-4 py-2 text-[#F2CA50] transition-colors hover:bg-[#F2CA50] hover:text-black cursor-pointer">
            ارسال پیام
            <FiMessageCircle />
          </button>
        </div>

        <div className="h-px bg-[#2a2416]" />

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">شناسه ملک</span>
          <span className="text-white font-medium tracking-wider">
            {property?.estateCode}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">وضعیت</span>
          <span className="text-[#F2CA50] font-medium">آماده تحویل</span>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <button
          onClick={() => {
            toggleFavorite(property.id);
            if (isFavorite) {
              notify.success("ملک از علاقه‌مندی‌ها حذف شد.");
            } else {
              notify.success("ملک به علاقه‌مندی‌ها اضافه شد.");
            }
          }}
          className={`flex w-full items-center justify-center gap-2 rounded-xl border border-[#2a2416] bg-[#0f0f0f] px-4 py-3 transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-[0_8px_30px_rgba(242,202,80,0.08)] ${
            isFavorite
              ? "border-[#F2CA50]/40 text-[#F2CA50]"
              : "text-gray-200 hover:border-[#F2CA50]/40 hover:text-[#F2CA50]"
          }`}
        >
          {isFavorite ? (
            <FaHeart className="text-lg" />
          ) : (
            <FiHeart className="text-lg" />
          )}

          {isFavorite ? "ذخیره شده" : "ذخیره کردن"}
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#2a2416] bg-[#0f0f0f] px-4 py-3 text-gray-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F2CA50]/40 hover:text-[#F2CA50] hover:shadow-[0_8px_30px_rgba(242,202,80,0.08)] cursor-pointer">
          <FiShare2 className="text-lg" />
          اشتراک‌گذاری
        </button>
      </div>
    </div>
  );
}

export default ProductActionsCard;
