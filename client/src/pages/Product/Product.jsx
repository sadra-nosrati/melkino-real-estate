import ProductActionsCard from "./components/ProductActionsCard";
import ProductDetails from "./components/ProductDetails";
import ProductInfo from "./components/ProductInfo";
import ProductMap from "./components/ProductMap";
import ProductMedia from "./components/ProductMedia";
import { usePropertyById } from "@/hooks/usePropertyById";
import SimilarProduct from "./components/SimilarProduct";
import useDocumentTitle from "@/hooks/useDocumentTitle";

function Product() {
  const { property } = usePropertyById();

  useDocumentTitle(property?.title);

  return (
    <div className="mx-auto flex max-w-7xl flex-col p-4 mt-20">
      <ProductMedia />

      <ProductInfo />

      <div className="mt-10 flex w-full flex-col gap-8 tablet-landscape:flex-row tablet-landscape:items-start tablet-landscape:gap-5">
        <ProductDetails />
        <ProductActionsCard />
      </div>

      <ProductMap />

      <SimilarProduct />
    </div>
  );
}

export default Product;
