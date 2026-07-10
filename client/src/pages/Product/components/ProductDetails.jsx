import { usePropertyById } from "@/hooks/usePropertyById";
import { FaRulerCombined, FaBed, FaCar } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { MdPool } from "react-icons/md";
import ProductDescription from "./ProductDescription";
import ProductAmenities from "./ProductAmenities";

function ProductDetails() {
  const { property } = usePropertyById();

  const features = [
    {
      key: "area",
      label: "متراژ",
      value: `${property?.details?.area} متر`,
      icon: FaRulerCombined,
    },
    {
      key: "bedroom",
      label: "اتاق خواب",
      value: property?.details?.bedroom,
      icon: FaBed,
    },
    {
      key: "parking",
      label: "پارکینگ",
      value: property?.details?.parking,
      icon: FaCar,
    },
    {
      key: "pool",
      label: "استخر",
      value: property?.details?.pool ? "دارد" : "ندارد",
      icon: MdPool,
    },
    {
      key: "yearBuilt",
      label: "سال ساخت",
      value: property?.details?.yearBuilt,
      icon: FaCalendar,
    },
  ];

  return (
    <div className="w-full tablet-landscape:w-[70%]">
      <div className="grid grid-cols-2 mobile-landscape:grid-cols-3 gap-4 tablet-landscape:flex tablet-landscape:gap-5 tablet-landscape:items-center tablet-landscape:justify-between py-5 border-t-2 border-b-2 border-dark-border-strong">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.key}
              className="flex items-center justify-center gap-2 rounded-xl border border-dark-border-strong py-4 tablet-landscape:flex-1 tablet-landscape:border-0 tablet-landscape:border-r-2 tablet-landscape:rounded-none tablet-landscape:py-0 tablet-landscape:first:border-r-0"
            >
              <Icon className="text-dark-primary text-xl tablet-landscape:text-2xl" />

              <div>
                <span className="text-xs tablet-landscape:text-sm text-dark-text-muted">
                  {item.label}
                </span>

                <p>{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <ProductDescription />

        <ProductAmenities />
      </div>
    </div>
  );
}

export default ProductDetails;
