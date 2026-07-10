import { FaCarSide, FaRulerCombined } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { formatPrice } from "./FormatPrice";

function ProductCardBody({ property }) {
  const bottomProductCart =
    "flex items-center gap-2 text-dark-text-muted text-[13px] tablet-landscape:text-[15px]";

  return (
    <div className="mb-3 mt-3 px-3">
      <h3 className="text-base mobile-landscape:text-lg tablet-portrait:text-xl line-clamp-1">
        {property?.title}
      </h3>

      <div className="flex items-center justify-between mt-5 mb-5">
        <p className="text-dark-text-muted text-xs">{property?.place}</p>

        <p className="text-dark-primary text-sm tablet-landscape:text-base">
          {formatPrice(property?.price)}
        </p>
      </div>

      <div className="flex flex-wrap tablet-landscape:flex-nowrap items-center justify-between border-t border-t-dark-border-strong pt-5 gap-3 tablet-landscape:gap-0">
        <span className={bottomProductCart}>
          <IoBed className="text-dark-primary" />
          {property?.details.bedroom} خواب
        </span>

        <span className={bottomProductCart}>
          <FaRulerCombined className="text-dark-primary" />
          {property?.details.area} متر
        </span>

        <span className={bottomProductCart}>
          <FaCarSide className="text-dark-primary" />
          {property?.details.parking} پارکینگ
        </span>
      </div>
    </div>
  );
}

export default ProductCardBody;
