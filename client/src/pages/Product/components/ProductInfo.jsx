import { MdOutlineLocationOn } from "react-icons/md";

import { usePropertyById } from "@/hooks/usePropertyById";
import { formatPrice } from "@/components/ProductCard/FormatPrice";

function ProductInfo() {
  const { property } = usePropertyById();

  return (
    <section className="w-full flex flex-col tablet-landscape:flex-row justify-between items-start tablet-landscape:items-center gap-6 tablet-landscape:gap-0 mt-10">
      <div className="w-full tablet-landscape:w-auto">
        <div className="flex flex-wrap tablet-landscape:flex-nowrap items-center gap-4">
          <span className="bg-dark-primary/10 border border-dark-primary/20 text-dark-primary text-xs px-3 py-1.5 rounded-2xl">
            برای فروش
          </span>

          <h1 className="text-dark-primary text-xl tablet-portrait:text-2xl">
            {property?.title}
          </h1>
        </div>

        <div className="flex gap-2 items-center mt-5">
          <MdOutlineLocationOn className="text-dark-primary text-xl tablet-portrait:text-2xl" />
          <p className="text-dark-text-muted text-sm tablet-portrait:text-base">
            {property?.place}
          </p>
        </div>
      </div>

      <div className="w-full tablet-landscape:w-auto flex items-center justify-between tablet-landscape:justify-start gap-4">
        <span className="text-dark-text-muted">قیمت پیشنهادی :</span>

        <strong className="text-dark-primary text-base tablet-portrait:text-lg">
          {formatPrice(property?.price)}
        </strong>
      </div>
    </section>
  );
}

export default ProductInfo;
