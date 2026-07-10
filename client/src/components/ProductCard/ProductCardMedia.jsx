import { useContext } from "react";

import { FaRegHeart } from "react-icons/fa6";

import { FavoritesContext } from "@/context/FavoritesContext";
import { AuthContext } from "@/context/AuthContext";
import { notify } from "@/utils/toast";

function ProductCardMedia({ property }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.includes(String(property?.id));

  const { user } = useContext(AuthContext);

  return (
    <div className="relative">
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
        {property?.isVIP === true ? (
          <span className="bg-dark-primary py-1 px-2 mobile-landscape:px-3 rounded text-dark-dark-background-secondary text-[11px] mobile-landscape:text-xs">
            ویژه
          </span>
        ) : (
          <div className="w-13" />
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            if (!user) {
              notify.error(
                "ابتدا وارد حساب کاربری خود شوید تا بتوانید این ملک را به علاقه‌ مندی‌ ها اضافه کنید.",
              );
              return;
            }

            toggleFavorite(String(property?.id));

            if (isFavorite) {
              notify.success("ملک از علاقه‌مندی‌ها حذف شد.");
            } else {
              notify.success("ملک به علاقه‌مندی‌ها اضافه شد.");
            }
          }}
          className="flex items-center justify-center w-8 h-8 mobile-landscape:w-9 mobile-landscape:h-9 rounded-lg mobile-landscape:rounded-xl bg-black/30 backdrop-blur-md cursor-pointer group"
        >
          {isFavorite ? (
            <FaRegHeart className="text-dark-primary text-base mobile-landscape:text-lg transition-all duration-300 scale-125 active:scale-150" />
          ) : (
            <FaRegHeart className="text-white text-base mobile-landscape:text-lg transition-all duration-300 group-hover:text-dark-primary" />
          )}
        </button>
      </div>

      <img
        src={property?.img}
        alt="ویلای لوکس در نیاوران"
        className="w-full object-cover"
      />
    </div>
  );
}

export default ProductCardMedia;
