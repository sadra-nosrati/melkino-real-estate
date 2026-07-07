import { FiMapPin } from "react-icons/fi";

function ProductMap() {
  return (
    <section className="mt-10 space-y-5 border-b-2 border-[#4D4635] pb-16 tablet-landscape:pb-30">
      <div className="flex items-center gap-2">
        <FiMapPin className="text-lg text-[#F2CA50]" />
        <h2 className="text-lg font-medium text-[#F2CA50]">موقعیت روی نقشه</h2>
      </div>

      <div className="group overflow-hidden rounded-2xl border border-[#2a2416] bg-[#131313] p-2 tablet-landscape:p-3 transition-all duration-500 hover:-translate-y-1 hover:border-[#F2CA50]/50 hover:shadow-[0_20px_50px_rgba(242,202,80,0.12)]">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/31.png"
            alt="موقعیت ملک روی نقشه"
            className="w-full aspect-[16/10] tablet-landscape:aspect-auto object-cover transition-all duration-700 group-hover:brightness-110"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductMap;
