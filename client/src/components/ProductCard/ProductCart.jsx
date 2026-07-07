import ProductCardMedia from "./ProductCardMedia";
import ProductCardBody from "./ProductCardBody";
import { Link } from "react-router";

function ProductCart({ property }) {
  return (
    <Link to={`/product/${property.id}`} className="block h-full">
      <article className="flex flex-col overflow-hidden rounded-lg bg-[#1C1B1B] mt-5 border-2 border-[#4D4635] w-full max-w-[370px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.015] hover:border-[#F2CA50]/60 hover:shadow-[0_22px_60px_rgba(0,0,0,0.6),0_0_25px_rgba(242,202,80,0.06)] hover:brightness-[1.03]">
        <div className="shrink-0">
          <ProductCardMedia property={property} />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <ProductCardBody property={property} />
        </div>
      </article>
    </Link>
  );
}

export default ProductCart;
