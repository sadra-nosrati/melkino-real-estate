import { useState } from "react";
import { usePropertyById } from "@/hooks/usePropertyById";
import ProductMediaSkeleton from "@/components/Skeleton/ProductMediaSkeleton";

function ProductMedia() {
  const { property, loading } = usePropertyById();
  const [selectedImage, setSelectedImage] = useState(null);

  if (loading) {
    return <ProductMediaSkeleton />;
  }

  return (
    <>
      <section className="mt-8">
        <figure className="grid h-auto tablet-landscape:h-180 grid-cols-1 tablet-landscape:grid-cols-[2.2fr_1fr] gap-3">
          <div
            onClick={() => setSelectedImage(property?.img)}
            className="group cursor-pointer overflow-hidden rounded-xl mobile-landscape:rounded-2xl tablet-landscape:rounded-3xl h-65 mobile-landscape:h-85 tablet-portrait:h-112.5 tablet-landscape:h-full"
          >
            <img
              src={property?.img}
              alt={property?.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          <div className="grid grid-cols-3 tablet-landscape:grid-cols-1 grid-rows-1 tablet-landscape:grid-rows-3 gap-3 h-25 mobile-landscape:h-32.5 tablet-portrait:h-42.5 tablet-landscape:h-auto">
            {property?.gallery?.slice(0, 3).map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group cursor-pointer overflow-hidden rounded-xl mobile-landscape:rounded-2xl tablet-landscape:rounded-3xl h-full"
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </figure>
      </section>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/85 backdrop-blur-sm transition-all duration-300 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-7xl overflow-hidden rounded-xl mobile-landscape:rounded-2xl tablet-landscape:rounded-3xl animate-[modalReveal_.45s_cubic-bezier(0.22,1,0.36,1)]"
          >
            <img
              src={selectedImage}
              alt=""
              className="max-h-[90vh] w-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductMedia;
