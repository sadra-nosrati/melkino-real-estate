import { MdPool } from "react-icons/md";
import { GiFlowerPot } from "react-icons/gi";
import { TbElevator } from "react-icons/tb";
import { RiShieldCheckLine } from "react-icons/ri";
import { IoBarbellOutline } from "react-icons/io5";
import { BsHouseGear } from "react-icons/bs";
import { FaHotTub } from "react-icons/fa";
import { LuCctv } from "react-icons/lu";

const amenities = [
  {
    title: "استخر چهار فصل",
    icon: MdPool,
  },
  {
    title: "روف گاردن",
    icon: GiFlowerPot,
  },
  {
    title: "آسانسور",
    icon: TbElevator,
  },
  {
    title: "امنیت",
    icon: RiShieldCheckLine,
  },
  {
    title: "باشگاه",
    icon: IoBarbellOutline,
  },
  {
    title: "خانه هوشمند",
    icon: BsHouseGear,
  },
  {
    title: "سونا",
    icon: FaHotTub,
  },
  {
    title: "دوربین مداربسته",
    icon: LuCctv,
  },
];

function ProductAmenities() {
  return (
    <section className="mt-10 space-y-5">
      <h2 className="text-lg font-medium text-[#F2CA50]">امکانات رفاهی</h2>

      <ul className="grid grid-cols-1 mobile-landscape:grid-cols-2 tablet-portrait:grid-cols-3 tablet-landscape:grid-cols-4 gap-4">
        {amenities.map((item) => {
          const Icon = item.icon;

          return (
            <li
              key={item.title}
              className="flex items-center gap-3 rounded-xl border border-[#2a2a2a] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F2CA50]/40"
            >
              <Icon className="text-2xl text-[#F2CA50]" />
              <span className="text-sm text-gray-200">{item.title}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProductAmenities;
