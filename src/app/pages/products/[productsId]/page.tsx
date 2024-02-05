import ProductSlickImagesSection from "@/app/components/product/product-slick-images-section";
import ProductDetailsSection from "@/app/components/product/product-details-section";
import ProductAddToCartSection from "@/app/components/product/product-add-to-cart-section";
import ProductTab from "@/app/components/product/product-tab";
import FeaturedSection from "@/app/components/home/featured-section";
import SimilarProducts from "@/app/components/product/similar-products";
import Link from "next/link";

export default function ProductDetails({
  params,
}: {
  params: { productsId: string };
}) {
  const transformProductID = (productID: string) => {
    // Split the string into words
    const words = productID.split("-");

    // Capitalize each word and join them with a space
    const transformedString = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return transformedString;
  };
  return (
    <main className="flex flex-col lg:p-8 mobile:p-3">
      <div>
        {/* Page navigation */}
        <div className="flex flex-wrap mobile:gap-1 md:gap-0 mb-2 md:-mt-3">
          <div className=" bg-gray-200 h-5 max-w-12 hover:bg-primary hover:text-white cursor-pointer">
            <div className="-skew-x-12  bg-gray-200 text-gray-400 font-semibold hover:bg-primary hover:text-white text-xs p-1 h-full w-full ml-1 flex items-center">
              <Link href={"/"}>Home</Link>
            </div>
          </div>
          <div className="px-1">
            <div className="-skew-x-12 px-1 bg-gray-200 text-gray-400 font-semibold text-xs hover:bg-primary hover:text-white p-1  w-full ml-1 flex items-center h-5  cursor-pointer">
              <Link href={"/pages/shop"}> Shop</Link>
            </div>
          </div>
          <div className="px-1">
            <div className="-skew-x-12 px-2 bg-gray-200 text-gray-400 font-semibold text-xs hover:bg-primary hover:text-white p-1  w-full  flex items-center h-5 cursor-pointer">
              {transformProductID(params.productsId)}
            </div>
          </div>
        </div>
        {/* Full product page */}
        <div className="grid mobile:grid-cols-1 lg:grid-cols-3  gap-4">
          {/* Product images with Details */}
          <div className="lg:col-span-2 grid mobile:grid-cols-1 lg:grid-cols-2 border-4 border-gray-100 rounded-2xl ">
            {/* Product images */}
            <div className="lg:col-span-1 mobile:col-span-1 ">
              <ProductSlickImagesSection />
            </div>
            {/* Product details */}
            <div className="lg:col-span-1 mobile:col-span-1 ">
              <ProductDetailsSection slug={params.productsId} />
            </div>
          </div>
          {/* Product add to cart */}
          <div className="lg:col-span-1 lg:border-4 border-gray-100 rounded-2xl lg:px-8 lg:py-4 mobile:px-8 mobile:pb-8">
            <ProductAddToCartSection />
          </div>
        </div>
      </div>
      <ProductTab />
      <div className="w-full">
        <SimilarProducts slug={params.productsId} />
      </div>
    </main>
  );
}
