import { usePropertyById } from "@/hooks/usePropertyById";

function ProductDescription() {
  const { property } = usePropertyById();

  return (
    <section className="text-white shadow-sm">
      <h2 className="mb-4 text-lg text-[#F2CA50]">توضیحات ملک</h2>

      <p className="text-sm tablet-landscape:text-sm leading-7 tablet-landscape:leading-8 text-gray-300 tracking-wide">
        {property?.description}
      </p>
    </section>
  );
}

export default ProductDescription;
